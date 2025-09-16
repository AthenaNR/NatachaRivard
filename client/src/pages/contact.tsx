import { ContactForm } from "@/components/forms/contact-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Contact() {
  return (
    <div className="py-20" data-testid="page-contact">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4" data-testid="text-contact-title">
            Contactez-Nous
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-contact-subtitle">
            Une question ? Un problème ? Notre équipe support est là pour vous aider
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <ContactForm />

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="shadow-lg" data-testid="card-contact-info">
                <CardHeader>
                  <CardTitle className="text-2xl font-serif font-bold text-primary">
                    Informations de Contact
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4" data-testid="contact-info-email">
                    <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-envelope text-primary"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground">Email Support</h3>
                      <p className="text-muted-foreground">support@revelateur.fr</p>
                      <p className="text-sm text-muted-foreground">Réponse sous 24h en moyenne</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4" data-testid="contact-info-phone">
                    <div className="bg-secondary/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-phone text-secondary"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground">Téléphone</h3>
                      <p className="text-muted-foreground">
                        {/* Numéro à renseigner */}+33 X XX XX XX XX
                      </p>
                      <p className="text-sm text-muted-foreground">Lun-Ven 9h-18h (CET)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4" data-testid="contact-info-address">
                    <div className="bg-accent/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-map-marker-alt text-accent"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground">Adresse</h3>
                      <p className="text-muted-foreground">
                        {/* Adresse à compléter par Natacha Rivard */}
                        [Adresse à renseigner]<br />
                        [Code Postal] [Ville], France
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* GDPR Information */}
              <Card className="shadow-lg" data-testid="card-gdpr-info">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-primary">
                    Protection des Données
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Conformément au RGPD, vos données de contact ne seront utilisées que pour répondre à votre demande. Elles seront conservées pendant 3 ans maximum et ne seront jamais partagées avec des tiers.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>DPO:</strong> dpo@revelateur.fr
                  </p>
                </CardContent>
              </Card>

              {/* Support Hours */}
              <Card className="shadow-lg" data-testid="card-support-hours">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-primary">
                    Horaires de Support
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Lundi - Vendredi:</span>
                      <span className="font-medium">9h00 - 18h00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Samedi:</span>
                      <span className="font-medium">10h00 - 16h00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Dimanche:</span>
                      <span className="text-muted-foreground">Fermé</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-3">
                      Fuseau horaire: Europe/Paris (CET)
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
