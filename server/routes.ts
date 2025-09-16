import express from "express";
import { z } from "zod";
import { storage } from "./storage";
import { insertContactMessageSchema, insertPaymentSchema, insertWebhookLogSchema } from "@shared/schema";

const router = express.Router();

// Contact form endpoint
router.post("/contact", async (req, res) => {
  try {
    const validatedData = insertContactMessageSchema.parse(req.body);
    const contact = await storage.createContact(validatedData);
    
    // In a real app, you would send email here using SendGrid
    console.log("New contact message:", contact);
    
    res.json({ success: true, message: "Message envoyé avec succès" });
  } catch (error) {
    console.error("Contact form error:", error);
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: "Données invalides", details: error.errors });
    }
    res.status(500).json({ error: "Erreur interne du serveur" });
  }
});

// Create payment intent
router.post("/create-payment-intent", async (req, res) => {
  try {
    const { amount, currency = "eur", description } = req.body;
    
    if (!amount || amount <= 0) {
      return res.status(400).json({ error: "Montant invalide" });
    }

    // In a real app, create Stripe payment intent here
    const mockPaymentIntent = {
      id: `pi_mock_${Date.now()}`,
      client_secret: `pi_mock_${Date.now()}_secret_${Math.random().toString(36).substr(2, 9)}`,
      amount: Math.round(amount * 100), // Convert to cents
      currency,
      status: "requires_payment_method"
    };

    // Store payment record
    await storage.createPayment({
      stripePaymentIntentId: mockPaymentIntent.id,
      userId: null, // No user auth in this simple version
      amount: amount.toString(),
      currency,
      status: "pending",
      type: "one_time",
      description: description || "Paiement unique"
    });

    res.json({
      clientSecret: mockPaymentIntent.client_secret,
      paymentIntentId: mockPaymentIntent.id
    });
  } catch (error) {
    console.error("Payment intent error:", error);
    res.status(500).json({ error: "Erreur lors de la création du paiement" });
  }
});

// Create subscription
router.post("/create-subscription", async (req, res) => {
  try {
    const { priceId, customerEmail, customerName } = req.body;
    
    if (!priceId || !customerEmail) {
      return res.status(400).json({ error: "Données manquantes" });
    }

    // In a real app, create Stripe subscription here
    const mockSubscription = {
      id: `sub_mock_${Date.now()}`,
      customer: `cus_mock_${Date.now()}`,
      status: "active",
      current_period_start: Math.floor(Date.now() / 1000),
      current_period_end: Math.floor(Date.now() / 1000) + (30 * 24 * 60 * 60), // 30 days
    };

    // Store payment record
    await storage.createPayment({
      stripePaymentIntentId: `pi_sub_${mockSubscription.id}`,
      userId: null,
      amount: "9.99", // Mock amount
      currency: "eur",
      status: "succeeded",
      type: "subscription",
      description: `Abonnement ${priceId}`
    });

    res.json({
      subscriptionId: mockSubscription.id,
      status: mockSubscription.status,
      customerId: mockSubscription.customer
    });
  } catch (error) {
    console.error("Subscription error:", error);
    res.status(500).json({ error: "Erreur lors de la création de l'abonnement" });
  }
});

// Stripe webhook
router.post("/webhook", express.raw({ type: "application/json" }), async (req, res) => {
  try {
    // In a real app, verify Stripe signature here
    const event = {
      id: `evt_mock_${Date.now()}`,
      type: "payment_intent.succeeded",
      data: req.body
    };

    // Store webhook log
    await storage.createWebhookLog({
      stripeEventId: event.id,
      eventType: event.type,
      data: JSON.stringify(event.data)
    });

    console.log("Webhook received:", event.type);
    
    // Process the event
    switch (event.type) {
      case "payment_intent.succeeded":
        // Update payment status
        break;
      case "customer.subscription.created":
      case "customer.subscription.updated":
        // Handle subscription changes
        break;
      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    await storage.markWebhookProcessed(event.id);
    res.json({ received: true });
  } catch (error) {
    console.error("Webhook error:", error);
    res.status(500).json({ error: "Webhook processing failed" });
  }
});

// Admin endpoints
router.get("/admin/contacts", async (req, res) => {
  try {
    const contacts = await storage.getAllContacts();
    res.json(contacts);
  } catch (error) {
    console.error("Admin contacts error:", error);
    res.status(500).json({ error: "Erreur lors de la récupération des contacts" });
  }
});

router.get("/admin/payments", async (req, res) => {
  try {
    const payments = await storage.getAllPayments();
    res.json(payments);
  } catch (error) {
    console.error("Admin payments error:", error);
    res.status(500).json({ error: "Erreur lors de la récupération des paiements" });
  }
});

router.get("/admin/webhooks", async (req, res) => {
  try {
    const webhooks = await storage.getAllWebhookLogs();
    res.json(webhooks);
  } catch (error) {
    console.error("Admin webhooks error:", error);
    res.status(500).json({ error: "Erreur lors de la récupération des webhooks" });
  }
});

router.patch("/admin/contact/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { status } = req.body;
    
    if (!status) {
      return res.status(400).json({ error: "Statut manquant" });
    }

    const updatedContact = await storage.updateContactStatus(id, status);
    res.json(updatedContact);
  } catch (error) {
    console.error("Update contact error:", error);
    if (error instanceof Error && error.message === "Contact not found") {
      return res.status(404).json({ error: "Contact non trouvé" });
    }
    res.status(500).json({ error: "Erreur lors de la mise à jour du contact" });
  }
});

export default router;