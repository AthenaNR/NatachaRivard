import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Smartphone, Brain, Shield, Clock } from "lucide-react";

export default function Products() {
  const features = [
    {
      icon: <Brain className="h-5 w-5" />,
      title: "Intelligence Artificielle Avancée",
      description: "Algorithmes de pointe pour une analyse précise et personnalisée"
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: "Sécurité RGPD",
      description: "Chiffrement de bout en bout et protection maximale des données"
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Analyse Instantanée",
      description: "Résultats en moins de 2 minutes, disponible 24h/24"
    }
  ];

  const appFeatures = [
    "Analyse IA avancée en temps réel",
    "Journal de rêves personnel et sécurisé",
    "Interprétations détaillées et insights psychologiques",
    "Historique et tendances de vos rêves",
    "Interface intuitive et moderne",
    "Synchronisation cloud sécurisée",
    "Support multi-langues (FR/EN)",
    "Notifications intelligentes"
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6" data-testid="products-title">
            Nos Produits
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez notre gamme d'applications d'interprétation de rêves alimentées par l'intelligence artificielle
          </p>
        </div>

        {/* Main Product - RêveRévélateur */}
        <div className="max-w-6xl mx-auto mb-20">
          <Card className="overflow-hidden shadow-xl border-border" data-testid="main-product">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Product Visual */}
              <div className="p-12 bg-gradient-to-br from-primary/5 to-secondary/10 flex items-center justify-center">
                <div className="relative">
                  <div className="w-80 h-[500px] bg-card rounded-3xl shadow-2xl border-8 border-gray-800 relative overflow-hidden">
                    <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-20 h-1.5 bg-gray-800 rounded-full"></div>
                    <div className="p-8 h-full gradient-primary flex flex-col">
                      <div className="text-center text-primary-foreground mb-8">
                        <div className="text-4xl mb-3">🌙</div>
                        <h3 className="font-serif font-bold text-lg">RêveRévélateur</h3>
                        <p className="text-sm opacity-80">Interprétation IA</p>
                      </div>
                      <div className="flex-1 bg-card/95 rounded-2xl p-6 text-sm">
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <span className="text-muted-foreground">Statut</span>
                            <Badge variant="secondary" className="text-xs">Analysé</Badge>
                          </div>
                          <div className="text-card-foreground">
                            <h4 className="font-medium mb-2">Votre rêve du 15/09</h4>
                            <p className="text-xs line-clamp-3 leading-relaxed">
                              "Votre rêve révèle un désir profond de liberté et de nouveaux horizons. Les symboles présents suggèrent une période de transformation personnelle..."
                            </p>
                          </div>
                          <div className="flex items-center justify-between pt-2">
                            <div className="flex items-center space-x-1">
                              {[1,2,3,4,5].map(i => (
                                <Star key={i} className="h-3 w-3 text-accent fill-current" />
                              ))}
                            </div>
                            <span className="text-xs text-accent font-medium">Excellent</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Product Details */}
              <div className="p-12">
                <div className="space-y-8">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <Smartphone className="h-8 w-8 text-primary" />
                      <div>
                        <h2 className="text-3xl font-serif font-bold text-primary">RêveRévélateur</h2>
                        <p className="text-accent font-medium">Application Mobile Premium</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      Notre application phare utilise l'intelligence artificielle la plus avancée pour analyser et interpréter vos rêves. Découvrez les messages cachés de votre subconscient avec une précision remarquable et une confidentialité absolue.
                    </p>
                  </div>

                  {/* Key Features */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-foreground">Fonctionnalités Clés</h3>
                    <div className="grid gap-4">
                      {features.map((feature, index) => (
                        <div key={index} className="flex items-start space-x-4 p-4 bg-muted/20 rounded-lg">
                          <div className="bg-primary/10 p-2 rounded-lg flex-shrink-0">
                            {feature.icon}
                          </div>
                          <div>
                            <h4 className="font-medium text-foreground mb-1">{feature.title}</h4>
                            <p className="text-sm text-muted-foreground">{feature.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/produits/reve-revelateur" className="flex-1">
                      <Button size="lg" className="w-full" data-testid="product-detail-cta">
                        Découvrir en Détail
                      </Button>
                    </Link>
                    <Link href="/tarifs" className="flex-1">
                      <Button size="lg" variant="outline" className="w-full" data-testid="product-pricing-cta">
                        Voir les Tarifs
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Detailed Features */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">
              Fonctionnalités Complètes
            </h2>
            <p className="text-lg text-muted-foreground">
              Tout ce dont vous avez besoin pour explorer et comprendre vos rêves
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {appFeatures.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3 p-4 bg-card rounded-lg border border-border">
                <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Products */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">
              Prochainement
            </h2>
            <p className="text-lg text-muted-foreground">
              De nouveaux produits arrivent bientôt pour enrichir votre expérience
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-border opacity-75" data-testid="upcoming-product-1">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">RêveRévélateur Pro</CardTitle>
                  <Badge variant="outline">Bientôt</Badge>
                </div>
                <CardDescription>
                  Version avancée avec analyse collective de rêves et insights communautaires
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Analyse comparative avec d'autres utilisateurs</li>
                  <li>• Tendances globales des rêves</li>
                  <li>• Rapports mensuels détaillés</li>
                  <li>• API pour intégrations tierces</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border opacity-75" data-testid="upcoming-product-2">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">RêveRévélateur Kids</CardTitle>
                  <Badge variant="outline">En Développement</Badge>
                </div>
                <CardDescription>
                  Version spéciale pour enfants avec interface ludique et contenu adapté
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Interface colorée et interactive</li>
                  <li>• Interprétations adaptées aux enfants</li>
                  <li>• Contrôle parental intégré</li>
                  <li>• Éducation sur le sommeil</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">
              Prêt à Commencer ?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Téléchargez RêveRévélateur et découvrez ce que vos rêves ont à vous dire
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/tarifs">
                <Button size="lg" data-testid="products-cta-trial">
                  Essai Gratuit 7 Jours
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" data-testid="products-cta-contact">
                  Nous Contacter
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
