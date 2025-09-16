import { useStripe, Elements, PaymentElement, useElements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useEffect, useState } from 'react';
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, CreditCard, Shield, ArrowLeft, Star, Check } from "lucide-react";
import { Link } from "wouter";

// Make sure to call `loadStripe` outside of a component's render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = import.meta.env.VITE_STRIPE_PUBLIC_KEY 
  ? loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY)
  : null;

const SubscribeForm = () => {
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
        return_url: `${window.location.origin}/merci?type=subscription`,
      },
    });

    if (error) {
      toast({
        title: "Erreur d'Abonnement",
        description: error.message || "Une erreur est survenue lors de la souscription",
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
            Abonnement Mensuel
          </CardTitle>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Shield className="h-4 w-4 text-accent" />
            <span>Protégé par Stripe • Chiffrement SSL</span>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-gradient-to-br from-primary/5 to-secondary/10 rounded-lg p-4">
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium">Plan Mensuel Premium</span>
              <Badge className="bg-primary text-primary-foreground">
                <Star className="h-3 w-3 mr-1" />
                Populaire
              </Badge>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Essai gratuit</span>
                <span className="text-sm font-medium">7 jours</span>
              </div>
              <div className="flex justify-between items-center text-lg font-bold">
                <span>Puis</span>
                <span className="text-primary">12,99 $ CAD / mois</span>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-border/50">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Check className="h-3 w-3 text-accent" />
                  <span>Interprétations illimitées</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Check className="h-3 w-3 text-accent" />
                  <span>Analyses approfondies par IA</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Check className="h-3 w-3 text-accent" />
                  <span>Support prioritaire 24/7</span>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <PaymentElement />
            </div>

            <Button 
              type="submit" 
              disabled={!stripe || isLoading} 
              className="w-full"
              data-testid="submit-subscription"
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Traitement en cours...
                </>
              ) : (
                "Commencer l'Essai Gratuit"
              )}
            </Button>

            <div className="text-center text-sm text-muted-foreground space-y-2">
              <p>✓ Essai de 7 jours gratuit • ✓ Annulation en un clic</p>
              <p>En vous abonnant, vous acceptez nos</p>
              <div className="flex justify-center gap-2">
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

export default function Subscribe() {
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
                  Configuration des Abonnements en Cours
                </h2>
                <p className="text-muted-foreground mb-4">
                  Les abonnements Stripe sont en cours de configuration. Cette fonctionnalité sera disponible prochainement.
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
  const [customerInfo, setCustomerInfo] = useState({
    email: "",
    name: ""
  });

  useEffect(() => {
    if (customerInfo.email && customerInfo.name) {
      // Create subscription as soon as we have customer info
      apiRequest("POST", "/api/create-subscription", customerInfo)
        .then((res) => res.json())
        .then((data) => {
          setClientSecret(data.clientSecret);
        })
        .catch((error) => {
          console.error('Subscription creation failed:', error);
          setError("Impossible de créer l'abonnement. Veuillez réessayer.");
        });
    }
  }, [customerInfo.email, customerInfo.name]);

  const handleCustomerInfoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    setCustomerInfo({
      email: formData.get('email') as string,
      name: formData.get('name') as string
    });
  };

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
                  Erreur d'Abonnement
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

  if (!customerInfo.email || !customerInfo.name) {
    return (
      <div className="min-h-screen py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-serif font-bold text-primary mb-2">
              Créer votre Abonnement
            </h1>
            <p className="text-muted-foreground">
              Commencez votre essai gratuit de 7 jours dès maintenant
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <Card className="border-border shadow-lg">
              <CardHeader className="text-center">
                <CardTitle>Informations de Contact</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Nous avons besoin de ces informations pour créer votre compte
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleCustomerInfoSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nom complet</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Votre nom complet"
                      required
                      data-testid="input-customer-name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Adresse email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="votre@email.com"
                      required
                      data-testid="input-customer-email"
                    />
                  </div>
                  <Button type="submit" className="w-full" data-testid="submit-customer-info">
                    Continuer
                  </Button>
                </form>
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
                  Préparation de votre abonnement...
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
            Finaliser votre Abonnement
          </h1>
          <p className="text-muted-foreground">
            7 jours d'essai gratuit, puis 12,99$ CAD/mois • Annulation facile à tout moment
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
          <SubscribeForm />
        </Elements>
      </div>
    </div>
  );
};
