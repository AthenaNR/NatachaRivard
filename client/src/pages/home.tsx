import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Shield, Clock, Star, Check } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6" data-testid="hero-title">
              Développement d'Applications Mobile Sur Mesure
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 font-light" data-testid="hero-subtitle">
              Solutions mobiles innovantes et personnalisées par Natacha Rivard, développeure expérimentée
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/tarifs">
                <Button 
                  size="lg" 
                  className="bg-accent text-accent-foreground hover:opacity-90 shadow-lg"
                  data-testid="cta-trial"
                >
                  Consultation Gratuite
                </Button>
              </Link>
              <Link href="/produits/reve-revelateur">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                  data-testid="cta-demo"
                >
                  Voir mes Projets
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4" data-testid="features-title">
              Pourquoi Choisir NatachaRivard-AppDev ?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Une expertise technique approfondie au service de vos projets d'applications mobiles
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-border" data-testid="feature-ai">
              <CardHeader>
                <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="text-xl">Technologies Modernes</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  Développement avec React Native, Flutter, et les dernières technologies mobiles
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-border" data-testid="feature-security">
              <CardHeader>
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Qualité Garantie</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  Code propre, tests rigoureux et conformité aux standards de développement
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-border" data-testid="feature-speed">
              <CardHeader>
                <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-xl">Livraison Rapide</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  Développement agile avec livraisons régulières et suivi continu
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Product Preview Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              Mes Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Découvrez comment je transforme vos idées en applications mobiles performantes et intuitives
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden shadow-xl border-border" data-testid="product-preview">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Product Mockup */}
                <div className="p-8 bg-gradient-to-br from-secondary/10 to-primary/10 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-64 h-96 bg-card rounded-3xl shadow-2xl border-8 border-gray-800 relative overflow-hidden">
                      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-800 rounded-full"></div>
                      <div className="p-6 h-full gradient-primary flex flex-col">
                        <div className="text-center text-primary-foreground mb-6">
                          <div className="text-3xl mb-2">🌙</div>
                          <h3 className="font-serif font-bold">RêveRévélateur</h3>
                        </div>
                        <div className="flex-1 bg-card/90 rounded-xl p-4 text-xs">
                          <div className="space-y-3">
                            <div className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-secondary rounded-full"></div>
                              <span className="text-muted-foreground">Rêve analysé</span>
                            </div>
                            <div className="text-xs text-card-foreground line-clamp-3">
                              "Votre rêve révèle un désir de liberté et de nouveaux horizons..."
                            </div>
                            <div className="flex items-center space-x-1 pt-2">
                              <Star className="h-3 w-3 text-accent fill-current" />
                              <Star className="h-3 w-3 text-accent fill-current" />
                              <Star className="h-3 w-3 text-accent fill-current" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Product Details */}
                <div className="p-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-serif font-bold text-primary mb-2">NatachaRivard-AppDev</h3>
                      <p className="text-sm text-accent font-medium">Développement d'Applications Mobile</p>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      Je crée des applications mobiles personnalisées en utilisant les technologies les plus modernes pour transformer vos idées en solutions digitales.
                    </p>

                    <div className="space-y-4">
                      <h4 className="font-semibold text-card-foreground">Services proposés :</h4>
                      <div className="grid grid-cols-1 gap-3">
                        {[
                          "Développement React Native & Flutter",
                          "UI/UX Design moderne et intuitif", 
                          "Intégrations API et services cloud",
                          "Maintenance et support continu"
                        ].map((feature, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <Check className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <Link href="/tarifs" className="flex-1 sm:flex-none">
                        <Button className="w-full" data-testid="product-trial-button">
                          Consultation Gratuite
                        </Button>
                      </Link>
                      <Link href="/produits" className="flex-1 sm:flex-none">
                        <Button variant="outline" className="w-full" data-testid="product-detail-button">
                          Voir Portfolio
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4" data-testid="cta-title">
              Prêt à Créer Votre App ?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Discutons de votre projet d'application mobile lors d'une consultation gratuite
            </p>
            <Link href="/tarifs">
              <Button size="lg" className="shadow-lg" data-testid="final-cta">
                Contactez-moi
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
