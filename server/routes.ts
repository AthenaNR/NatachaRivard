import type { Express } from "express";
import { createServer, type Server } from "http";
import Stripe from "stripe";
import { storage } from "./storage";
import { sendEmail, generateContactEmailHtml } from "./services/email";
import { insertContactSchema, insertPaymentSchema } from "@shared/schema";
import { z } from "zod";

if (!process.env.STRIPE_SECRET_KEY) {
  console.warn('STRIPE_SECRET_KEY not set - Stripe functionality will be limited');
}

const stripe = process.env.STRIPE_SECRET_KEY ? new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2024-06-20",
}) : null;

export async function registerRoutes(app: Express): Promise<Server> {
  
  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      
      const contact = await storage.createContact(validatedData);
      
      // Send email notification
      const emailSent = await sendEmail({
        to: process.env.CONTACT_EMAIL || "contact@revelateur.fr",
        from: process.env.FROM_EMAIL || "noreply@revelateur.fr",
        subject: `[NatachaRivard-AppDev] Nouveau contact: ${validatedData.subject}`,
        html: generateContactEmailHtml(
          validatedData.name,
          validatedData.email,
          validatedData.subject,
          validatedData.message
        ),
        text: `Nouveau message de ${validatedData.name} (${validatedData.email})\nSujet: ${validatedData.subject}\n\nMessage:\n${validatedData.message}`
      });

      res.json({ 
        success: true, 
        message: "Message envoyé avec succès",
        contactId: contact.id,
        emailSent 
      });
    } catch (error: any) {
      console.error('Contact form error:', error);
      res.status(400).json({ 
        success: false, 
        message: "Erreur lors de l'envoi du message",
        error: error.message 
      });
    }
  });

  // Stripe payment intent for one-time payments
  app.post("/api/create-payment-intent", async (req, res) => {
    if (!stripe) {
      return res.status(500).json({ message: "Stripe not configured" });
    }

    try {
      const { amount } = req.body;
      const paymentIntent = await stripe.paymentIntents.create({
        amount: Math.round(amount * 100), // Convert to cents
        currency: "eur",
        metadata: {
          type: "one_time_interpretation"
        }
      });

      res.json({ clientSecret: paymentIntent.client_secret });
    } catch (error: any) {
      console.error('Payment intent error:', error);
      res.status(500).json({ 
        message: "Erreur lors de la création du paiement", 
        error: error.message 
      });
    }
  });

  // Create or get subscription
  app.post('/api/create-subscription', async (req, res) => {
    if (!stripe) {
      return res.status(500).json({ message: "Stripe not configured" });
    }

    try {
      const { email, name } = req.body;
      
      if (!email) {
        return res.status(400).json({ message: "Email requis" });
      }

      // Create customer
      const customer = await stripe.customers.create({
        email: email,
        name: name,
      });

      // Create subscription with trial
      const subscription = await stripe.subscriptions.create({
        customer: customer.id,
        items: [{
          price: process.env.STRIPE_MONTHLY_PRICE_ID || 'price_test_monthly',
        }],
        payment_behavior: 'default_incomplete',
        payment_settings: { save_default_payment_method: 'on_subscription' },
        expand: ['latest_invoice.payment_intent'],
        trial_period_days: 7,
        metadata: {
          type: "monthly_subscription"
        }
      });

      // Log the payment
      await storage.createPayment({
        userId: null, // For now, no user system
        stripePaymentId: subscription.id,
        amount: "9.99",
        currency: "eur",
        status: "pending",
        type: "subscription"
      });

      const invoice = subscription.latest_invoice as Stripe.Invoice;
      const paymentIntent = (invoice.payment_intent as Stripe.PaymentIntent) || null;

      res.json({
        subscriptionId: subscription.id,
        clientSecret: paymentIntent?.client_secret,
        customerId: customer.id
      });
    } catch (error: any) {
      console.error('Subscription creation error:', error);
      res.status(500).json({ 
        message: "Erreur lors de la création de l'abonnement",
        error: error.message 
      });
    }
  });

  // Stripe webhooks
  app.post('/api/webhook', async (req, res) => {
    if (!stripe) {
      return res.status(500).json({ message: "Stripe not configured" });
    }

    const sig = req.headers['stripe-signature'];
    const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

    let event: Stripe.Event;

    try {
      if (!endpointSecret) {
        // For development without webhook secret
        event = req.body;
      } else {
        event = stripe.webhooks.constructEvent(req.body, sig as string, endpointSecret);
      }
    } catch (err: any) {
      console.error(`Webhook signature verification failed:`, err.message);
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    // Log webhook
    await storage.createWebhookLog(event.id, event.type, JSON.stringify(event.data));

    // Handle the event
    try {
      switch (event.type) {
        case 'payment_intent.succeeded':
          const paymentIntent = event.data.object as Stripe.PaymentIntent;
          await storage.createPayment({
            userId: null,
            stripePaymentId: paymentIntent.id,
            amount: (paymentIntent.amount / 100).toString(),
            currency: paymentIntent.currency,
            status: "succeeded",
            type: paymentIntent.metadata.type || "one_time"
          });
          console.log('Payment succeeded:', paymentIntent.id);
          break;

        case 'invoice.payment_succeeded':
          const invoice = event.data.object as Stripe.Invoice;
          if (invoice.subscription && invoice.id) {
            await storage.createPayment({
              userId: null,
              stripePaymentId: invoice.id,
              amount: ((invoice.amount_paid || 0) / 100).toString(),
              currency: invoice.currency || "eur",
              status: "succeeded",
              type: "subscription"
            });
            console.log('Subscription payment succeeded:', invoice.id);
          }
          break;

        case 'customer.subscription.updated':
          const subscription = event.data.object as Stripe.Subscription;
          console.log('Subscription updated:', subscription.id, subscription.status);
          break;

        case 'invoice.payment_failed':
          const failedInvoice = event.data.object as Stripe.Invoice;
          console.log('Payment failed:', failedInvoice.id);
          break;

        default:
          console.log(`Unhandled event type ${event.type}`);
      }
    } catch (error: any) {
      console.error('Webhook handling error:', error);
      return res.status(500).json({ message: 'Webhook handling failed' });
    }

    res.json({ received: true });
  });

  // Admin endpoints
  app.get("/api/admin/contacts", async (req, res) => {
    try {
      const contacts = await storage.getAllContacts();
      res.json(contacts);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  });

  app.get("/api/admin/payments", async (req, res) => {
    try {
      const payments = await storage.getAllPayments();
      res.json(payments);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  });

  app.get("/api/admin/webhooks", async (req, res) => {
    try {
      const webhooks = await storage.getAllWebhookLogs();
      res.json(webhooks);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  });

  app.patch("/api/admin/contact/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const { status } = req.body;
      const contact = await storage.updateContactStatus(id, status);
      res.json(contact);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
