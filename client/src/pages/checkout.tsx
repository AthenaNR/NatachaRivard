import { useStripe, Elements, PaymentElement, useElements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useEffect, useState } from 'react';
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Loader2, CreditCard, Shield, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

// Make sure to call `loadStripe` outside of a component's render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = import.meta.env.VITE_STRIPE_PUBLIC_KEY 
  ? loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY)
  : null;

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/merci?type=one-time`,
      },
    });

    if (error) {
      toast({
        title: "Erreur de Paiement",
        description: error.message || "Une erreur est survenue lors du paiement",
        variant: "destructive",
      });
    }
    
    setIsLoading(false);
  }

  return (
    <div className="max-w-md mx-auto">
      <Card className="border-border shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center gap-2">
            <CreditCard className="h-5 w-5 text-primary" />
            Paiement Sécurisé
          </CardTitle>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Shield className="h-4 w-4 text-accent" />
            <span>Protégé par Stripe</span>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="bg-muted/30 rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">Interprétation de rêve</span>
                <Badge>À l'usage</Badge>
              </div>
              <div className="flex justify-between items-center text-lg font-bold">
                <span>Total</span>
                <span className="text-primary">1,99 €</span>
              </div>
            </div>

            <div className="space-y-4">
              <PaymentElement />
            </div>

            <Button 
              type="submit" 
              disabled={!stripe || isLoading} 
              className="w-full"
              data-testid="submit-payment"
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Traitement en cours...
                </>
              ) : (
                `Payer 1,99 €`
              )}
            </Button>

            <div className="text-center text-sm text-muted-foreground">
              <p>En procédant au paiement, vous acceptez nos</p>
              <div className="flex justify-center gap-2 mt-1">
                <Link href="/conditions" className="text-primary underline">
                  Conditions d'utilisation
                </Link>
                <span>et</span>
                <Link href="/confidentialite" className="text-primary underline">
                  Politique de confidentialité
                </Link>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>

      <div className="mt-6 text-center">
        <Link href="/tarifs" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Retour aux tarifs
        </Link>
      </div>
    </div>
  );
};

export default function Checkout() {
  // Check if Stripe is available
  if (!import.meta.env.VITE_STRIPE_PUBLIC_KEY) {
    return (
      <div className="min-h-screen py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <Card className="border-border">
              <CardContent className="p-8">
                <div className="text-yellow-500 mb-4">
                  <CreditCard className="h-12 w-12 mx-auto" />
                </div>
                <h2 className="text-xl font-semibold text-foreground mb-2">
                  Configuration des Paiements en Cours
                </h2>
                <p className="text-muted-foreground mb-4">
                  Les paiements Stripe sont en cours de configuration. Cette fonctionnalité sera disponible prochainement.
                </p>
                <Link href="/tarifs">
                  <Button>
                    Retour aux Tarifs
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  const [clientSecret, setClientSecret] = useState("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    apiRequest("POST", "/api/create-payment-intent", { amount: 1.99 })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.clientSecret)
      })
      .catch((error) => {
        console.error('Payment intent creation failed:', error);
        setError("Impossible de créer la session de paiement. Veuillez réessayer.");
      });
  }, []);

  if (error) {
    return (
      <div className="min-h-screen py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto text-center">
            <Card className="border-border">
              <CardContent className="p-8">
                <div className="text-red-500 mb-4">
                  <CreditCard className="h-12 w-12 mx-auto" />
                </div>
                <h2 className="text-xl font-semibold text-foreground mb-2">
                  Erreur de Paiement
                </h2>
                <p className="text-muted-foreground mb-4">
                  {error}
                </p>
                <Link href="/tarifs">
                  <Button>
                    Retour aux Tarifs
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  if (!clientSecret) {
    return (
      <div className="min-h-screen py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <Card className="border-border">
              <CardContent className="p-8 text-center">
                <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-primary" />
                <p className="text-muted-foreground">
                  Préparation du paiement sécurisé...
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  const appearance = {
    theme: 'stripe' as const,
    variables: {
      colorPrimary: '#1E40AF',
      colorBackground: '#ffffff',
      colorText: '#374151',
      colorDanger: '#EF4444',
      fontFamily: 'Inter, sans-serif',
      spacingUnit: '4px',
      borderRadius: '8px',
    },
  };

  return (
    <div className="min-h-screen py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-serif font-bold text-primary mb-2">
            Finaliser votre Achat
          </h1>
          <p className="text-muted-foreground">
            Une interprétation détaillée de votre rêve par notre IA avancée
          </p>
        </div>

        {/* Make SURE to wrap the form in <Elements> which provides the stripe context. */}
        <Elements 
          stripe={stripePromise} 
          options={{ 
            clientSecret,
            appearance 
          }}
        >
          <CheckoutForm />
        </Elements>
      </div>
    </div>
  );
};
