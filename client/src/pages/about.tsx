import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function About() {
  return (
    <div className="py-20" data-testid="page-about">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4" data-testid="text-about-title">
              À Propos de Notre Entreprise
            </h1>
            <p className="text-lg text-muted-foreground" data-testid="text-about-subtitle">
              Information légale et professionnelle pour la vérification Stripe
            </p>
          </div>

          <Card className="shadow-lg" data-testid="card-company-info">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-2xl font-serif font-bold text-primary mb-6" data-testid="text-legal-info-title">
                    Informations Légales
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-card-foreground mb-2">Raison Sociale</h3>
                      <p className="text-muted-foreground" data-testid="text-company-name">
                        Natacha Rivard - Développement d'Applications Mobiles
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground mb-2">Adresse du Siège Social</h3>
                      <p className="text-muted-foreground" data-testid="text-company-address">
                        {/* Adresse à compléter par Natacha Rivard */}
                        [Adresse à renseigner]<br />
                        [Code Postal] [Ville]<br />
                        France
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground mb-2">SIRET</h3>
                      <p className="text-muted-foreground" data-testid="text-company-siret">
                        {/* Numéro SIRET à renseigner après inscription */}En cours d'obtention
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground mb-2">Numéro TVA Intracommunautaire</h3>
                      <p className="text-muted-foreground" data-testid="text-company-vat">
                        {/* Numéro TVA à renseigner après inscription */}En cours d'obtention
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-bold text-primary mb-6" data-testid="text-contact-info-title">
                    Contact Professionnel
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <i className="fas fa-envelope text-primary"></i>
                      <div>
                        <h3 className="font-semibold text-card-foreground">Email de Contact</h3>
                        <p className="text-muted-foreground" data-testid="text-contact-email">
                          {/* Email à personnaliser */}contact.natacha.rivard@gmail.com
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <i className="fas fa-phone text-primary"></i>
                      <div>
                        <h3 className="font-semibold text-card-foreground">Téléphone</h3>
                        <p className="text-muted-foreground" data-testid="text-contact-phone">
                          {/* Numéro à renseigner */}+33 X XX XX XX XX
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <i className="fas fa-user-shield text-primary"></i>
                      <div>
                        <h3 className="font-semibold text-card-foreground">Délégué à la Protection des Données</h3>
                        <p className="text-muted-foreground" data-testid="text-contact-dpo">
                          {/* Email DPO à personnaliser */}dpo.natacha.rivard@gmail.com
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-border">
                <h2 className="text-2xl font-serif font-bold text-primary mb-6" data-testid="text-activity-title">
                  Notre Activité
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6" data-testid="text-activity-description-1">
                  Notre société se spécialise dans la création et la distribution d'applications mobiles innovantes utilisant l'intelligence artificielle pour l'interprétation personnalisée des rêves. Nous développons des solutions technologiques avancées permettant aux utilisateurs de comprendre et d'analyser leurs rêves grâce à des algorithmes d'apprentissage automatique et de traitement du langage naturel.
                </p>
                <p className="text-muted-foreground leading-relaxed" data-testid="text-activity-description-2">
                  Nos services incluent la vente d'abonnements premium, de micro-paiements pour des interprétations à l'usage, ainsi que la fourniture d'outils d'analyse psychologique et de bien-être personnel via nos applications mobiles distribuées sur les plateformes Android et iOS.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Mission and Values */}
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <Card data-testid="card-mission">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <i className="fas fa-bullseye text-primary"></i>
                  <span>Notre Mission</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Démocratiser l'accès à l'interprétation des rêves grâce à l'intelligence artificielle, tout en respectant la confidentialité et la sécurité des données personnelles de nos utilisateurs.
                </p>
              </CardContent>
            </Card>

            <Card data-testid="card-values">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <i className="fas fa-heart text-primary"></i>
                  <span>Nos Valeurs</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Innovation technologique, respect de la vie privée, accessibilité, et engagement envers la qualité de nos services d'interprétation personnalisée.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
