import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Clock } from "lucide-react";

export default function ContactStatic() {
  return (
    <div className="py-20" data-testid="page-contact">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4" data-testid="contact-title">
              Contactez-moi
            </h1>
            <p className="text-lg text-muted-foreground">
              Discutons de votre projet d'application mobile
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card data-testid="contact-info">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-primary" />
                    Email
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-lg font-medium text-primary" data-testid="contact-email">
                      dev.natachar@gmail.com
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Je réponds généralement sous 24 heures
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card data-testid="location-info">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    Localisation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-lg font-medium">Canada</p>
                    <p className="text-sm text-muted-foreground">
                      Travail à distance disponible
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card data-testid="hours-info">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    Disponibilité
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-lg font-medium">Lun - Ven : 9h - 17h (EST)</p>
                    <p className="text-sm text-muted-foreground">
                      Consultations par email ou visioconférence
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Services */}
            <div>
              <Card data-testid="services-info">
                <CardHeader>
                  <CardTitle>Services disponibles</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-medium">Développement d'applications mobiles</h4>
                        <p className="text-sm text-muted-foreground">
                          Applications natives pour Android, disponibles sur Google Play
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-medium">Consultation technique</h4>
                        <p className="text-sm text-muted-foreground">
                          Analyse de projet et recommandations technologiques
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-medium">Support et maintenance</h4>
                        <p className="text-sm text-muted-foreground">
                          Mise à jour et évolution de vos applications existantes
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      💡 <strong>Première consultation gratuite</strong> pour évaluer votre projet
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