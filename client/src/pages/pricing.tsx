import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Zap, CreditCard, Shield, HelpCircle } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "Essai Gratuit",
      price: "0$ CAD",
      period: "7 jours d'essai",
      description: "Découvrez RêveRévélateur sans engagement",
      features: [
        "5 interprétations incluses",
        "Journal personnel sécurisé",
        "Analyses de base",
        "Support par email",
        "Accès à la communauté"
      ],
      limitations: [
        "Interprétations limitées",
        "Pas d'historique étendu",
        "Analyses simples uniquement"
      ],
      cta: "Commencer l'Essai",
      href: "/abonnement",
      popular: false,
      testId: "plan-trial"
    },
    {
      name: "Abonnement Mensuel",
      price: "12,99$ CAD",
      period: "par mois",
      description: "Interprétations illimitées et fonctionnalités avancées",
      features: [
        "Interprétations illimitées",
        "Analyses approfondies par IA",
        "Historique complet des rêves",
        "Tendances et insights personnels",
        "Support prioritaire 24/7",
        "Synchronisation multi-appareils",
        "Exportation des données",
        "Thèmes et personnalisation"
      ],
      limitations: [],
      cta: "Choisir ce Plan",
      href: "/abonnement",
      popular: true,
      testId: "plan-monthly"
    },
    {
      name: "À l'Usage",
      price: "2,99$ CAD",
      period: "par interprétation",
      description: "Payez seulement quand vous en avez besoin",
      features: [
        "Paiement à l'interprétation",
        "Analyse complète et détaillée",
        "Pas d'abonnement",
        "Accès immédiat",
        "Historique de base"
      ],
      limitations: [
        "Plus cher à long terme",
        "Pas de support prioritaire",
        "Fonctionnalités limitées"
      ],
      cta: "Acheter une Interprétation",
      href: "/paiement",
      popular: false,
      testId: "plan-payperuse"
    }
  ];

  const faqs = [
    {
      question: "Puis-je annuler mon abonnement à tout moment ?",
      answer: "Oui, vous pouvez annuler votre abonnement à tout moment depuis l'application ou votre espace client. L'annulation prend effet à la fin de la période de facturation actuelle."
    },
    {
      question: "Que se passe-t-il après l'essai gratuit ?",
      answer: "À la fin des 7 jours d'essai, vous serez automatiquement basculé vers l'abonnement mensuel sauf si vous annulez. Vous recevrez une notification avant la fin de l'essai."
    },
    {
      question: "Les paiements sont-ils sécurisés ?",
      answer: "Absolument. Tous les paiements sont traités par Stripe avec un chiffrement SSL de niveau bancaire. Nous ne stockons aucune information de carte bancaire."
    },
    {
      question: "Y a-t-il une garantie de remboursement ?",
      answer: "Oui, nous offrons un remboursement complet sous 14 jours pour les nouveaux abonnements si vous n'êtes pas satisfait."
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6" data-testid="pricing-title">
            Plans d'Abonnement
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Choisissez le plan qui correspond à vos besoins d'interprétation de rêves. 
            Commencez par un essai gratuit de 7 jours, sans engagement.
          </p>
          <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
            <Shield className="h-4 w-4 text-accent" />
            <span>Paiements sécurisés par Stripe</span>
            <span>•</span>
            <span>Chiffrement SSL</span>
            <span>•</span>
            <span>Conformité RGPD</span>
          </div>
        </div>

        {/* Pricing Plans */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative border-border ${plan.popular ? 'border-2 border-primary shadow-lg' : ''}`}
                data-testid={plan.testId}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1">
                      <Star className="h-3 w-3 mr-1" />
                      Plus Populaire
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                    {plan.period && (
                      <span className="text-muted-foreground ml-2">/{plan.period}</span>
                    )}
                  </div>
                  <CardDescription className="mt-4 text-base">
                    {plan.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Features */}
                  <div className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <Check className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Limitations */}
                  {plan.limitations.length > 0 && (
                    <div className="pt-4 border-t border-border">
                      <p className="text-xs text-muted-foreground mb-2">Limitations :</p>
                      <div className="space-y-2">
                        {plan.limitations.map((limitation, limitationIndex) => (
                          <div key={limitationIndex} className="flex items-start space-x-3">
                            <div className="h-4 w-4 flex items-center justify-center mt-0.5">
                              <div className="h-1 w-3 bg-muted-foreground rounded"></div>
                            </div>
                            <span className="text-xs text-muted-foreground">{limitation}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* CTA Button */}
                  <Link href={plan.href} className="block">
                    <Button 
                      className={`w-full mt-6 ${plan.popular ? 'bg-primary hover:bg-primary/90' : ''}`}
                      variant={plan.popular ? 'default' : 'outline'}
                      data-testid={`${plan.testId}-cta`}
                    >
                      {plan.popular && <Zap className="h-4 w-4 mr-2" />}
                      {plan.cta}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Payment Information */}
        <div className="max-w-4xl mx-auto mb-20">
          <Card className="border-border bg-muted/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <CreditCard className="h-5 w-5 text-primary" />
                Informations de Paiement
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Moyens de paiement acceptés</h4>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>• Cartes bancaires (Visa, Mastercard, American Express)</p>
                    <p>• Google Pay et Apple Pay</p>
                    <p>• Virements SEPA (pour les abonnements annuels)</p>
                    <p>• PayPal (bientôt disponible)</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Politique de remboursement</h4>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>• Remboursement complet sous 14 jours pour les nouveaux abonnements</p>
                    <p>• Les achats à l'usage ne sont pas remboursables après livraison</p>
                    <p>• Annulation possible à tout moment pour les abonnements</p>
                    <p>• Support client disponible 7j/7</p>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground flex items-start gap-2">
                  <Shield className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>
                    Tous les paiements sont sécurisés et traités par Stripe. Nous respectons les normes PCI DSS 
                    et ne stockons aucune information bancaire sur nos serveurs.
                  </span>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">
              Questions Fréquentes
            </h2>
            <p className="text-lg text-muted-foreground">
              Tout ce que vous devez savoir sur nos plans et tarifs
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-border" data-testid={`faq-${index}`}>
                <CardHeader>
                  <CardTitle className="flex items-start gap-3 text-lg">
                    <HelpCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    {faq.question}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed pl-8">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Enterprise CTA */}
        <div className="max-w-4xl mx-auto text-center">
          <Card className="border-border bg-gradient-to-br from-primary/5 to-secondary/10">
            <CardContent className="p-12">
              <h2 className="text-2xl font-serif font-bold text-primary mb-4">
                Besoin d'un Plan Personnalisé ?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Vous êtes une entreprise, un thérapeute, ou vous avez des besoins spécifiques ? 
                Contactez-nous pour discuter d'une solution sur mesure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" variant="outline" data-testid="enterprise-contact">
                    Nous Contacter
                  </Button>
                </Link>
                <Button size="lg" disabled>
                  Plans Entreprise (Bientôt)
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
