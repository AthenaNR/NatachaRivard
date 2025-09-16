import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Terms() {
  return (
    <div className="py-20" data-testid="page-terms">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-lg" data-testid="card-terms-of-service">
            <CardHeader>
              <CardTitle className="text-3xl font-serif font-bold text-primary">
                Conditions d'Utilisation
              </CardTitle>
              <p className="text-muted-foreground">
                Dernière mise à jour : {/* TODO - À REMPLACER PAR Natacha */}[Date de mise à jour]
              </p>
            </CardHeader>
            <CardContent className="prose max-w-none space-y-8">
              <div data-testid="section-acceptance">
                <h3>1. Acceptation des Conditions</h3>
                <p>
                  En utilisant l'application RêveRévélateur et nos services, vous acceptez d'être lié par les présentes conditions d'utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser nos services.
                </p>
              </div>

              <div data-testid="section-description">
                <h3>2. Description du Service</h3>
                <p>
                  RêveRévélateur est une application mobile qui utilise l'intelligence artificielle pour analyser et interpréter les rêves des utilisateurs. Le service comprend :
                </p>
                <ul>
                  <li>Analyse automatisée de vos descriptions de rêves</li>
                  <li>Interprétations personnalisées basées sur des modèles psychologiques</li>
                  <li>Journal personnel de rêves sécurisé</li>
                  <li>Fonctionnalités d'analyse et de tendances</li>
                </ul>
              </div>

              <div data-testid="section-user-obligations">
                <h3>3. Obligations de l'Utilisateur</h3>
                <p>En utilisant nos services, vous vous engagez à :</p>
                <ul>
                  <li>Fournir des informations exactes et à jour lors de la création de votre compte</li>
                  <li>Maintenir la confidentialité de vos identifiants de connexion</li>
                  <li>Utiliser le service uniquement à des fins personnelles et légales</li>
                  <li>Ne pas tenter de contourner les mesures de sécurité</li>
                  <li>Ne pas utiliser le service pour des activités illégales ou nuisibles</li>
                  <li>Respecter les droits de propriété intellectuelle</li>
                </ul>
              </div>

              <div data-testid="section-content-policy">
                <h3>4. Politique de Contenu</h3>
                <p>
                  Vous êtes seul responsable du contenu que vous partagez via nos services. Il est interdit de soumettre du contenu qui :
                </p>
                <ul>
                  <li>Est illégal, offensant, diffamatoire ou discriminatoire</li>
                  <li>Viole les droits d'autrui</li>
                  <li>Contient des virus ou des codes malveillants</li>
                  <li>Fait la promotion d'activités dangereuses ou illégales</li>
                  <li>Usurpe l'identité d'une autre personne</li>
                </ul>
                <p>
                  Nous nous réservons le droit de supprimer tout contenu inapproprié et de suspendre ou résilier les comptes en violation de ces règles.
                </p>
              </div>

              <div data-testid="section-limitations">
                <h3>5. Limitations de Responsabilité</h3>
                <p><strong>AVERTISSEMENT IMPORTANT :</strong></p>
                <ul>
                  <li><strong>Pas de conseils médicaux :</strong> RêveRévélateur ne fournit PAS de conseils médicaux, thérapeutiques ou psychiatriques. Nos interprétations sont uniquement à des fins de divertissement et de réflexion personnelle.</li>
                  <li><strong>Consultation professionnelle :</strong> En cas de troubles du sommeil, de cauchemars récurrents, ou de préoccupations psychologiques, consultez un professionnel de santé qualifié.</li>
                  <li><strong>Précision des interprétations :</strong> Bien que nous utilisions des technologies avancées, nous ne garantissons pas l'exactitude ou la pertinence des interprétations fournies.</li>
                  <li><strong>Décisions personnelles :</strong> Ne prenez aucune décision importante uniquement basée sur nos interprétations.</li>
                </ul>
              </div>

              <div data-testid="section-payment-terms">
                <h3>6. Conditions de Paiement et d'Abonnement</h3>
                <h4>6.1 Formules d'Abonnement</h4>
                <ul>
                  <li><strong>Essai gratuit :</strong> 7 jours d'essai avec fonctionnalités limitées</li>
                  <li><strong>Abonnement mensuel :</strong> 12,99$ CAD par mois, renouvelé automatiquement</li>
                  <li><strong>Paiement à l'usage :</strong> 2,99$ CAD par interprétation</li>
                </ul>
                
                <h4>6.2 Renouvellement et Annulation</h4>
                <ul>
                  <li>Les abonnements se renouvellent automatiquement sauf annulation</li>
                  <li>Vous pouvez annuler à tout moment via l'application ou votre compte Google Play</li>
                  <li>L'annulation prend effet à la fin de la période de facturation en cours</li>
                  <li>Aucun remboursement pour les périodes partiellement utilisées</li>
                </ul>

                <h4>6.3 Remboursements</h4>
                <ul>
                  <li>Remboursement complet sous 14 jours pour les nouveaux abonnements</li>
                  <li>Les achats à l'usage ne sont pas remboursables après livraison de l'interprétation</li>
                  <li>Les demandes de remboursement doivent être adressées à support@revelateur.fr</li>
                </ul>
              </div>

              <div data-testid="section-intellectual-property">
                <h3>7. Propriété Intellectuelle</h3>
                <p>
                  Tous les droits de propriété intellectuelle sur l'application, les algorithmes, les interprétations générées, et le contenu fourni par RêveRévélateur nous appartiennent ou font l'objet de licences appropriées.
                </p>
                <p>
                  Vous conservez tous les droits sur le contenu de vos rêves, mais vous nous accordez une licence limitée pour traiter ce contenu dans le cadre de nos services.
                </p>
              </div>

              <div data-testid="section-data-protection">
                <h3>8. Protection des Données</h3>
                <p>
                  Le traitement de vos données personnelles est régi par notre <a href="/confidentialite" className="text-primary underline">Politique de Confidentialité</a>, qui fait partie intégrante de ces conditions.
                </p>
                <p>Principes clés :</p>
                <ul>
                  <li>Vos rêves sont chiffrés et protégés selon les normes RGPD</li>
                  <li>Aucune donnée personnelle n'est partagée avec des tiers sans votre consentement</li>
                  <li>Vous pouvez supprimer vos données à tout moment</li>
                  <li>Les données sont anonymisées avant envoi aux services d'IA</li>
                </ul>
              </div>

              <div data-testid="section-service-availability">
                <h3>9. Disponibilité du Service</h3>
                <p>
                  Nous nous efforçons de maintenir nos services disponibles 24h/24, 7j/7, mais nous ne garantissons pas une disponibilité ininterrompue. Les services peuvent être temporairement indisponibles pour :
                </p>
                <ul>
                  <li>Maintenance programmée ou d'urgence</li>
                  <li>Problèmes techniques ou pannes</li>
                  <li>Mises à jour et améliorations</li>
                  <li>Causes indépendantes de notre volonté</li>
                </ul>
              </div>

              <div data-testid="section-content-moderation">
                <h3>10. Modération de Contenu et Ressources d'Aide</h3>
                <p>
                  Nous utilisons des systèmes automatisés pour détecter du contenu potentiellement préoccupant dans les rêves soumis. En cas de détection de contenu suggérant :
                </p>
                <ul>
                  <li>Des pensées suicidaires ou d'automutilation</li>
                  <li>De la violence ou des traumatismes</li>
                  <li>Une détresse psychologique sévère</li>
                </ul>
                <p><strong>Ressources d'aide disponibles :</strong></p>
                <ul>
                  <li><strong>France :</strong> 3114 (numéro national de prévention du suicide, gratuit, 24h/24)</li>
                  <li><strong>SOS Amitié :</strong> 09 72 39 40 50</li>
                  <li><strong>Ligne Azur :</strong> 0810 20 30 40 (écoute LGBT+)</li>
                  <li><strong>Urgences :</strong> 15 (SAMU) ou 112</li>
                </ul>
                <p>
                  Si vous traversez une période difficile, n'hésitez pas à contacter un professionnel de santé mentale.
                </p>
              </div>

              <div data-testid="section-modifications">
                <h3>11. Modifications des Conditions</h3>
                <p>
                  Nous nous réservons le droit de modifier ces conditions d'utilisation à tout moment. Les modifications importantes vous seront notifiées via l'application ou par email. La poursuite de l'utilisation de nos services après notification constitue une acceptation des nouvelles conditions.
                </p>
              </div>

              <div data-testid="section-termination">
                <h3>12. Résiliation</h3>
                <p>
                  Vous pouvez supprimer votre compte à tout moment via les paramètres de l'application. Nous nous réservons le droit de suspendre ou résilier votre accès en cas de violation de ces conditions.
                </p>
                <p>
                  En cas de résiliation, vos données personnelles seront supprimées conformément à notre politique de confidentialité.
                </p>
              </div>

              <div data-testid="section-applicable-law">
                <h3>13. Droit Applicable et Juridiction</h3>
                <p>
                  Ces conditions sont régies par le droit français. En cas de litige, les tribunaux français seront seuls compétents, après tentative de résolution amiable.
                </p>
              </div>

              <div data-testid="section-contact-info">
                <h3>14. Contact</h3>
                <p>
                  Pour toute question concernant ces conditions d'utilisation :
                </p>
                <ul>
                  <li><strong>Email :</strong> support@revelateur.fr</li>
                  <li><strong>Adresse :</strong> {/* TODO - À REMPLACER PAR Natacha */}[Adresse complète]</li>
                  <li><strong>Téléphone :</strong> {/* TODO - À REMPLACER PAR Natacha */}+33 X XX XX XX XX</li>
                </ul>
              </div>

              <div className="mt-8 p-4 bg-accent/10 rounded-lg border border-accent/20">
                <p className="text-sm text-foreground">
                  <strong>Note importante :</strong> Ces conditions d'utilisation constituent un accord légal entre vous et RêveRévélateur. 
                  Veuillez les lire attentivement et nous contacter si vous avez des questions avant d'utiliser nos services.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
