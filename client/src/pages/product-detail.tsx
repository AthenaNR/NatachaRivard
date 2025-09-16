import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  Check, 
  Star, 
  Smartphone, 
  Brain, 
  Shield, 
  Clock, 
  Users, 
  Zap, 
  Download, 
  PlayCircle 
} from "lucide-react";

export default function ProductDetail() {
  const features = [
    {
      icon: <Brain className="h-6 w-6" />,
      title: "IA Contextuelle",
      description: "Analyse sémantique avancée qui comprend le contexte et les nuances de vos rêves"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Chiffrement E2E",
      description: "Protection maximale avec chiffrement de bout en bout et conformité RGPD"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Temps Réel",
      description: "Interprétation instantanée disponible 24h/24 avec notifications intelligentes"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Communauté",
      description: "Accès à une base de données de millions d'interprétations anonymisées"
    }
  ];

  const stats = [
    { label: "Utilisateurs Satisfaits", value: "50,000+", progress: 95 },
    { label: "Rêves Analysés", value: "2M+", progress: 88 },
    { label: "Précision IA", value: "94%", progress: 94 },
    { label: "Note Moyenne", value: "4.8/5", progress: 96 }
  ];

  const testimonials = [
    {
      name: "Marie L.",
      rating: 5,
      text: "Incroyable précision dans l'interprétation. J'ai découvert des aspects de moi que je n'aurais jamais imaginés.",
      verified: true
    },
    {
      name: "Thomas D.",
      rating: 5, 
      text: "L'application est intuitive et les analyses sont vraiment profondes. Je recommande vivement.",
      verified: true
    },
    {
      name: "Sophie M.",
      rating: 4,
      text: "Excellent outil pour comprendre ses rêves. Le service client est très réactif.",
      verified: true
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        
        {/* Hero Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Product Info */}
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Badge className="bg-accent/20 text-accent-foreground">Populaire</Badge>
                  <Badge variant="outline">Nouvelle Version</Badge>
                </div>
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4" data-testid="product-title">
                  RêveRévélateur
                </h1>
                <p className="text-xl text-muted-foreground mb-6">
                  L'application d'interprétation de rêves la plus avancée au monde, alimentée par une IA de dernière génération
                </p>
                <div className="flex items-center space-x-4 mb-8">
                  <div className="flex items-center space-x-1">
                    {[1,2,3,4,5].map(i => (
                      <Star key={i} className="h-5 w-5 text-accent fill-current" />
                    ))}
                  </div>
                  <span className="font-medium">4.8/5</span>
                  <span className="text-muted-foreground">(2,847 avis)</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/tarifs" className="flex-1">
                  <Button size="lg" className="w-full group" data-testid="product-trial-cta">
                    <Zap className="h-5 w-5 mr-2 group-hover:animate-pulse" />
                    Essai Gratuit 7 Jours
                  </Button>
                </Link>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="flex-1 sm:flex-none"
                  data-testid="product-demo-cta"
                >
                  <PlayCircle className="h-5 w-5 mr-2" />
                  Voir Démo
                </Button>
              </div>

              <div className="text-sm text-muted-foreground">
                ✓ Sans engagement • ✓ Annulation à tout moment • ✓ Support français
              </div>
            </div>

            {/* Product Mockup */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-[520px] bg-card rounded-3xl shadow-2xl border-8 border-gray-800 relative overflow-hidden">
                  <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-20 h-1.5 bg-gray-800 rounded-full"></div>
                  <div className="p-6 h-full gradient-primary flex flex-col">
                    {/* App Header */}
                    <div className="text-center text-primary-foreground mb-6">
                      <div className="text-3xl mb-2">🌙</div>
                      <h3 className="font-serif font-bold text-lg">RêveRévélateur</h3>
                      <p className="text-sm opacity-80">Votre journal de rêves personnel</p>
                    </div>
                    
                    {/* App Content */}
                    <div className="flex-1 bg-card/95 rounded-2xl p-5 space-y-4">
                      {/* Dream Entry */}
                      <div className="bg-primary/5 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-primary">Rêve du 15 Sept</span>
                          <Badge variant="secondary" className="text-xs">Analysé</Badge>
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          "Je volais au-dessus d'une forêt magique avec des arbres dorés..."
                        </p>
                      </div>

                      {/* AI Analysis */}
                      <div className="border border-accent/20 rounded-lg p-4 bg-accent/5">
                        <div className="flex items-center space-x-2 mb-3">
                          <Brain className="h-4 w-4 text-accent" />
                          <span className="text-sm font-medium text-accent">Analyse IA</span>
                        </div>
                        <p className="text-xs text-foreground leading-relaxed mb-3">
                          Votre rêve révèle un désir de liberté et de transcendance. Les arbres dorés symbolisent une période de croissance personnelle et de prospérité à venir.
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex space-x-1">
                            {[1,2,3,4,5].map(i => (
                              <Star key={i} className="h-3 w-3 text-accent fill-current" />
                            ))}
                          </div>
                          <span className="text-xs text-accent font-medium">Excellent match</span>
                        </div>
                      </div>

                      {/* Quick Stats */}
                      <div className="grid grid-cols-3 gap-2 text-center">
                        <div className="bg-muted/50 rounded p-2">
                          <div className="text-sm font-bold text-primary">127</div>
                          <div className="text-xs text-muted-foreground">Rêves</div>
                        </div>
                        <div className="bg-muted/50 rounded p-2">
                          <div className="text-sm font-bold text-secondary">94%</div>
                          <div className="text-xs text-muted-foreground">Précision</div>
                        </div>
                        <div className="bg-muted/50 rounded p-2">
                          <div className="text-sm font-bold text-accent">Gold</div>
                          <div className="text-xs text-muted-foreground">Niveau</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground rounded-full p-3 shadow-lg animate-pulse">
                  <Zap className="h-5 w-5" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-secondary text-secondary-foreground rounded-full p-3 shadow-lg">
                  <Shield className="h-5 w-5" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center border-border" data-testid={`stat-${index}`}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-2xl font-bold text-primary">{stat.value}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">{stat.label}</p>
                  <Progress value={stat.progress} className="h-2" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Features Tabs */}
        <div className="max-w-6xl mx-auto mb-16">
          <Tabs defaultValue="features" className="space-y-8">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="features" data-testid="tab-features">Fonctionnalités</TabsTrigger>
              <TabsTrigger value="technology" data-testid="tab-technology">Technologie</TabsTrigger>
              <TabsTrigger value="security" data-testid="tab-security">Sécurité</TabsTrigger>
            </TabsList>

            <TabsContent value="features" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-serif font-bold text-primary mb-4">
                  Fonctionnalités Avancées
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Découvrez tous les outils intégrés pour analyser et comprendre vos rêves
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4 p-6 bg-card rounded-lg border border-border">
                    <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="technology" className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-serif font-bold text-primary mb-4">
                  Technologies de Pointe
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Notre IA combine plusieurs approches pour une analyse précise
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Brain className="h-5 w-5 text-primary" />
                      NLP Avancé
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Traitement du langage naturel pour comprendre les subtilités et émotions dans vos descriptions de rêves.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Zap className="h-5 w-5 text-accent" />
                      Machine Learning
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Algorithmes d'apprentissage qui s'améliorent continuellement avec chaque nouvelle interprétation.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-secondary" />
                      Base de Données
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Accès à une vaste bibliothèque de symboles et archétypes issus de la psychologie moderne.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="security" className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-serif font-bold text-primary mb-4">
                  Sécurité & Confidentialité
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Votre vie privée est notre priorité absolue
                </p>
              </div>
              <div className="space-y-6">
                {[
                  {
                    title: "Chiffrement de bout en bout",
                    description: "Tous vos rêves sont chiffrés avec AES-256 avant d'être stockés",
                    icon: <Shield className="h-5 w-5" />
                  },
                  {
                    title: "Conformité RGPD",
                    description: "Respect strict du règlement européen sur la protection des données",
                    icon: <Check className="h-5 w-5" />
                  },
                  {
                    title: "Anonymisation IA",
                    description: "Aucune donnée personnelle n'est envoyée aux services d'IA externes",
                    icon: <Brain className="h-5 w-5" />
                  },
                  {
                    title: "Suppression garantie",
                    description: "Supprimez vos données à tout moment, définitivement et sans trace",
                    icon: <Zap className="h-5 w-5" />
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 p-6 bg-muted/20 rounded-lg">
                    <div className="bg-primary/10 p-2 rounded-lg text-primary">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Testimonials */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">
              Ce Que Disent Nos Utilisateurs
            </h2>
            <p className="text-lg text-muted-foreground">
              Des milliers d'utilisateurs font confiance à RêveRévélateur
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border" data-testid={`testimonial-${index}`}>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-sm font-medium text-primary">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <CardTitle className="text-sm">{testimonial.name}</CardTitle>
                        {testimonial.verified && (
                          <Badge variant="outline" className="text-xs">Vérifié</Badge>
                        )}
                      </div>
                    </div>
                    <div className="flex space-x-1">
                      {[1,2,3,4,5].map(i => (
                        <Star 
                          key={i} 
                          className={`h-3 w-3 ${i <= testimonial.rating ? 'text-accent fill-current' : 'text-muted-foreground'}`} 
                        />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground italic">
                    "{testimonial.text}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Download CTA */}
        <div className="max-w-4xl mx-auto text-center">
          <Card className="border-border bg-gradient-to-br from-primary/5 to-secondary/10">
            <CardContent className="p-12">
              <h2 className="text-3xl font-serif font-bold text-primary mb-4">
                Prêt à Découvrir Vos Rêves ?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Rejoignez des milliers d'utilisateurs qui explorent déjà leur subconscient avec RêveRévélateur
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <Link href="/tarifs">
                  <Button size="lg" className="group" data-testid="final-cta-trial">
                    <Zap className="h-5 w-5 mr-2 group-hover:animate-pulse" />
                    Commencer l'Essai Gratuit
                  </Button>
                </Link>
                <Button size="lg" variant="outline" disabled data-testid="final-cta-download">
                  <Download className="h-5 w-5 mr-2" />
                  Google Play (Bientôt)
                </Button>
              </div>
              
              <p className="text-sm text-muted-foreground">
                ✓ Essai de 7 jours • ✓ Aucune carte requise • ✓ Annulation en un clic
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
