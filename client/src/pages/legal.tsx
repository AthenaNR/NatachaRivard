import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Legal() {
  return (
    <div className="py-20" data-testid="page-legal">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-lg" data-testid="card-legal-notices">
            <CardHeader>
              <CardTitle className="text-3xl font-serif font-bold text-primary">
                Mentions Légales
              </CardTitle>
              <p className="text-muted-foreground">
                Informations légales obligatoires pour les activités commerciales au Canada
              </p>
            </CardHeader>
            <CardContent className="prose max-w-none space-y-8">
              <div data-testid="section-publisher-info">
                <h3>1. Éditeur du Site</h3>
                <div className="bg-muted/20 rounded-lg p-4">
                  <ul className="space-y-2">
                    <li><strong>Dénomination sociale :</strong> Natacha Rivard</li>
                    <li><strong>Statut :</strong> Travailleur autonome / Sole Proprietorship (en cours d'enregistrement)</li>
                    <li><strong>Capital social :</strong> Non applicable (travailleur autonome)</li>
                    <li><strong>Adresse d'affaires :</strong> [Adresse à déterminer], Canada</li>
                    <li><strong>Numéro d'entreprise :</strong> En cours d'obtention</li>
                    <li><strong>Numéro TPS :</strong> En cours d'obtention</li>
                    <li><strong>Secteur d'activité :</strong> Développement d'applications mobiles</li>
                    <li><strong>Numéro TVH :</strong> En cours d'obtention</li>
                    <li><strong>Registre :</strong> Registre des entreprises du Québec (en cours d'inscription)</li>
                  </ul>
                </div>
              </div>

              <div data-testid="section-management">
                <h3>2. Direction de la Publication</h3>
                <ul>
                  <li><strong>Directeur de publication :</strong> Natacha Rivard</li>
                  <li><strong>Qualité :</strong> Propriétaire unique</li>
                  <li><strong>Email de contact :</strong> dev.natachar@gmail.com</li>
                </ul>
              </div>

              <div data-testid="section-hosting">
                <h3>3. Hébergement</h3>
                <div className="bg-muted/20 rounded-lg p-4">
                  <p><strong>Hébergeur du site web :</strong></p>
                  <ul className="mt-2 space-y-1">
                    <li>Replit, Inc.</li>
                    <li>767 Bryant Street, San Francisco, CA 94107, États-Unis</li>
                    <li>Site web : <a href="https://replit.com" className="text-primary underline">https://replit.com</a></li>
                  </ul>
                  
                  <p className="mt-4"><strong>Hébergement des données utilisateurs :</strong></p>
                  <ul className="mt-2 space-y-1">
                    <li>{/* TODO - À REMPLACER PAR Natacha */}[Nom du fournisseur cloud - ex: OVH, AWS Europe, Google Cloud Europe]</li>
                    <li>{/* TODO - À REMPLACER PAR Natacha */}[Adresse de l'hébergeur]</li>
                    <li>Localisation des serveurs : Union Européenne</li>
                  </ul>
                </div>
              </div>

              <div data-testid="section-contact-details">
                <h3>4. Coordonnées</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4>Contact Commercial</h4>
                    <ul className="space-y-1">
                      <li><strong>Email :</strong> dev.natachar@gmail.com</li>
                      <li><strong>Téléphone :</strong> Non disponible pour le moment</li>
                      <li><strong>Horaires :</strong> Lundi-Vendredi 9h-17h (EST)</li>
                    </ul>
                  </div>
                  <div>
                    <h4>Support Technique</h4>
                    <ul className="space-y-1">
                      <li><strong>Email :</strong> support@revelateur.fr</li>
                      <li><strong>Temps de réponse :</strong> 24h en moyenne</li>
                      <li><strong>Langues :</strong> Français, Anglais</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div data-testid="section-dpo">
                <h3>5. Délégué à la Protection des Données (DPO)</h3>
                <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
                  <p>Conformément au RGPD, nous avons désigné un Délégué à la Protection des Données :</p>
                  <ul className="mt-2 space-y-1">
                    <li><strong>Nom :</strong> {/* TODO - À REMPLACER PAR Natacha */}[Nom du DPO]</li>
                    <li><strong>Email :</strong> dpo@revelateur.fr</li>
                    <li><strong>Mission :</strong> Veiller au respect de la réglementation sur la protection des données personnelles</li>
                    <li><strong>Droits :</strong> Vous pouvez exercer vos droits RGPD en contactant notre DPO</li>
                  </ul>
                </div>
              </div>

              <div data-testid="section-activity">
                <h3>6. Objet Social et Activité</h3>
                <p>
                  Notre société a pour objet social principal :
                </p>
                <ul>
                  <li>Création, développement et distribution d'applications mobiles</li>
                  <li>Services d'interprétation de rêves par intelligence artificielle</li>
                  <li>Vente d'abonnements numériques et de services premium</li>
                  <li>Recherche et développement en intelligence artificielle</li>
                  <li>Services de bien-être numérique et développement personnel</li>
                </ul>
                <p>
                  <strong>Autorisation d'exercice :</strong> Déclaration d'activité effectuée auprès de la préfecture de {/* TODO - À REMPLACER PAR Natacha */}[Département].
                </p>
              </div>

              <div data-testid="section-intellectual-property">
                <h3>7. Propriété Intellectuelle</h3>
                <p>
                  Le site web RêveRévélateur et l'ensemble de son contenu (textes, images, logos, graphismes, algorithmes) sont protégés par les droits de propriété intellectuelle.
                </p>
                <ul>
                  <li><strong>Marques :</strong> "RêveRévélateur" est une marque déposée</li>
                  <li><strong>Copyright :</strong> © {new Date().getFullYear()} RêveRévélateur. Tous droits réservés.</li>
                  <li><strong>Licence :</strong> Toute reproduction ou utilisation sans autorisation est interdite</li>
                  <li><strong>Algorithmes IA :</strong> Propriété exclusive de RêveRévélateur</li>
                </ul>
              </div>

              <div data-testid="section-cookies-legal">
                <h3>8. Cookies et Données Personnelles</h3>
                <p>
                  Conformément à la loi Informatique et Libertés et au RGPD :
                </p>
                <ul>
                  <li>Nous utilisons des cookies pour améliorer votre expérience</li>
                  <li>Votre consentement est recueilli avant tout dépôt de cookies</li>
                  <li>Vous pouvez modifier vos préférences à tout moment</li>
                  <li>Notre <a href="/confidentialite" className="text-primary underline">Politique de Confidentialité</a> détaille le traitement de vos données</li>
                </ul>
              </div>

              <div data-testid="section-payment-info">
                <h3>9. Informations sur les Paiements</h3>
                <div className="bg-accent/10 rounded-lg p-4 border border-accent/20">
                  <h4>Prestataire de Paiement</h4>
                  <ul className="space-y-1">
                    <li><strong>Nom :</strong> Stripe Payments Europe Ltd</li>
                    <li><strong>Adresse :</strong> 1 Grand Canal Street Lower, Grand Canal Dock, Dublin, Irlande</li>
                    <li><strong>Autorisation :</strong> Agréé par la Central Bank of Ireland</li>
                    <li><strong>Sécurité :</strong> Certifié PCI DSS Level 1</li>
                  </ul>
                  
                  <h4 className="mt-4">Informations Comptables</h4>
                  <ul className="space-y-1">
                    <li><strong>Comptable :</strong> {/* TODO - À REMPLACER PAR Natacha */}[Nom du cabinet comptable]</li>
                    <li><strong>Expert-comptable :</strong> {/* TODO - À REMPLACER PAR Natacha */}[Nom de l'expert-comptable]</li>
                    <li><strong>Commissaire aux comptes :</strong> {/* TODO - À REMPLACER PAR Natacha */}[Si applicable]</li>
                  </ul>
                </div>
              </div>

              <div data-testid="section-dispute-resolution">
                <h3>10. Médiation et Règlement des Litiges</h3>
                <p>
                  En cas de litige, nous privilégions la résolution amiable. Si celle-ci échoue :
                </p>
                
                <h4>Médiation de la Consommation</h4>
                <div className="bg-muted/20 rounded-lg p-4">
                  <p>Conformément à l'article L.612-1 du Code de la consommation, nous adhérons au service de médiation :</p>
                  <ul className="mt-2 space-y-1">
                    <li><strong>Médiateur :</strong> {/* TODO - À REMPLACER PAR Natacha */}[Nom du médiateur agréé]</li>
                    <li><strong>Site web :</strong> {/* TODO - À REMPLACER PAR Natacha */}[Site du médiateur]</li>
                    <li><strong>Adresse :</strong> {/* TODO - À REMPLACER PAR Natacha */}[Adresse du médiateur]</li>
                  </ul>
                </div>
                
                <h4>Plateforme Européenne de Règlement des Litiges</h4>
                <p>
                  Les consommateurs européens peuvent également saisir la plateforme de règlement en ligne des litiges : 
                  <a href="https://ec.europa.eu/consumers/odr/" className="text-primary underline ml-1">
                    https://ec.europa.eu/consumers/odr/
                  </a>
                </p>
              </div>

              <div data-testid="section-applicable-law">
                <h3>11. Droit Applicable</h3>
                <p>
                  Les présentes mentions légales sont soumises au droit français. En cas de litige et après échec de la médiation, les tribunaux français seront seuls compétents.
                </p>
                <ul>
                  <li><strong>Juridiction compétente :</strong> Tribunaux du ressort du siège social</li>
                  <li><strong>Droit applicable :</strong> Droit français</li>
                  <li><strong>Langue :</strong> Français</li>
                </ul>
              </div>

              <div data-testid="section-updates">
                <h3>12. Mise à Jour des Mentions</h3>
                <p>
                  Ces mentions légales peuvent être modifiées à tout moment pour assurer leur conformité avec la législation en vigueur. La version en ligne fait foi.
                </p>
                <p>
                  <strong>Dernière mise à jour :</strong> {/* TODO - À REMPLACER PAR Natacha */}[Date de dernière mise à jour]
                </p>
              </div>

              <div className="mt-8 p-4 bg-primary/10 rounded-lg border border-primary/20">
                <p className="text-sm text-foreground">
                  <strong>Information importante :</strong> Ces mentions légales sont conformes aux exigences légales françaises et européennes. 
                  Pour toute question concernant ces mentions, contactez-nous à l'adresse : contact@revelateur.fr
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
