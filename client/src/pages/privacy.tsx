import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Privacy() {
  return (
    <div className="py-20" data-testid="page-privacy">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-lg" data-testid="card-privacy-policy">
            <CardHeader>
              <CardTitle className="text-3xl font-serif font-bold text-primary">
                Politique de Confidentialité
              </CardTitle>
              <p className="text-muted-foreground">
                Dernière mise à jour : {/* Date à mettre à jour */}16 septembre 2025
              </p>
            </CardHeader>
            <CardContent className="prose max-w-none space-y-8">
              <div data-testid="section-data-collection">
                <h3>1. Collecte et Traitement des Données</h3>
                <p>
                  Dans le cadre de l'utilisation de l'application RêveRévélateur, nous collectons et traitons les données personnelles suivantes :
                </p>
                <ul>
                  <li><strong>Données de rêves</strong> : contenu narratif, émotions, symboles que vous saisissez</li>
                  <li><strong>Données de compte</strong> : email, nom d'utilisateur, préférences de l'application</li>
                  <li><strong>Données de paiement</strong> : informations de facturation traitées par Stripe (non stockées par nos soins)</li>
                  <li><strong>Données d'usage</strong> : fréquence d'utilisation, fonctionnalités utilisées, données analytiques anonymisées</li>
                </ul>
              </div>

              <div data-testid="section-processing-purposes">
                <h3>2. Finalités du Traitement</h3>
                <p>
                  Vos données personnelles sont traitées pour les finalités suivantes :
                </p>
                <ul>
                  <li>Fourniture du service d'interprétation de rêves par intelligence artificielle</li>
                  <li>Personnalisation et amélioration des analyses</li>
                  <li>Gestion des abonnements et paiements</li>
                  <li>Support client et communication</li>
                  <li>Amélioration de nos services (données anonymisées)</li>
                </ul>
              </div>

              <div data-testid="section-legal-basis">
                <h3>3. Base Légale et Consentement</h3>
                <p>
                  Le traitement de vos données repose sur :
                </p>
                <ul>
                  <li><strong>Exécution contractuelle</strong> : fourniture du service d'interprétation</li>
                  <li><strong>Consentement explicite</strong> : pour l'usage d'IA externe et analyse approfondie</li>
                  <li><strong>Intérêt légitime</strong> : amélioration du service et support client</li>
                  <li><strong>Obligation légale</strong> : conservation des données de facturation</li>
                </ul>
              </div>

              <div data-testid="section-ai-providers">
                <h3>4. Utilisation d'IA Externe et Fournisseurs Tiers</h3>
                <p>
                  Pour fournir nos services d'interprétation, nous utilisons des services d'intelligence artificielle externes qui peuvent inclure :
                </p>
                <ul>
                  <li><strong>OpenAI (GPT)</strong> : traitement et analyse du contenu des rêves</li>
                  <li><strong>Google Cloud AI</strong> : services de traitement du langage naturel</li>
                  <li><strong>Anthropic Claude</strong> : analyse sémantique avancée</li>
                </ul>
                <p>
                  <strong>Important :</strong> Vos données de rêves sont anonymisées avant envoi à ces services. Aucune information personnelle identifiante n'est transmise aux fournisseurs d'IA.
                </p>
              </div>

              <div data-testid="section-security">
                <h3>5. Sécurité et Chiffrement</h3>
                <p>
                  Nous mettons en œuvre des mesures de sécurité robustes pour protéger vos données :
                </p>
                <ul>
                  <li><strong>Chiffrement de bout en bout</strong> : toutes vos données de rêves sont chiffrées AES-256</li>
                  <li><strong>Transmission sécurisée</strong> : protocoles HTTPS/TLS pour toutes les communications</li>
                  <li><strong>Stockage sécurisé</strong> : serveurs européens certifiés ISO 27001</li>
                  <li><strong>Accès restreint</strong> : authentification multi-facteurs pour notre équipe technique</li>
                  <li><strong>Audits réguliers</strong> : tests de pénétration et audits de sécurité trimestriels</li>
                </ul>
              </div>

              <div data-testid="section-international-transfers">
                <h3>6. Transferts Internationaux</h3>
                <p>
                  Certains de nos fournisseurs de services d'IA sont basés hors Union Européenne (notamment aux États-Unis). Ces transferts sont encadrés par :
                </p>
                <ul>
                  <li>Clauses contractuelles types de la Commission européenne</li>
                  <li>Certification Privacy Shield ou mécanismes équivalents</li>
                  <li>Anonymisation systématique des données avant transfert</li>
                  <li>Accords de traitement des données (DPA) conformes au RGPD</li>
                </ul>
              </div>

              <div data-testid="section-retention">
                <h3>7. Durée de Conservation</h3>
                <ul>
                  <li><strong>Données de rêves</strong> : conservées tant que votre compte est actif, supprimées dans les 30 jours après suppression du compte</li>
                  <li><strong>Données de compte</strong> : conservées pendant 3 ans après la dernière connexion</li>
                  <li><strong>Données de facturation</strong> : conservées 10 ans pour conformité comptable et fiscale</li>
                  <li><strong>Données analytiques</strong> : anonymisées et conservées indéfiniment pour amélioration du service</li>
                </ul>
              </div>

              <div data-testid="section-user-rights">
                <h3>8. Vos Droits</h3>
                <p>
                  Conformément au RGPD, vous disposez des droits suivants :
                </p>
                <ul>
                  <li><strong>Droit d'accès</strong> : consulter toutes vos données personnelles</li>
                  <li><strong>Droit de rectification</strong> : corriger des données inexactes</li>
                  <li><strong>Droit à l'effacement</strong> : supprimer vos données personnelles</li>
                  <li><strong>Droit à la limitation</strong> : restreindre le traitement de vos données</li>
                  <li><strong>Droit à la portabilité</strong> : récupérer vos données dans un format structuré</li>
                  <li><strong>Droit d'opposition</strong> : vous opposer au traitement pour motifs légitimes</li>
                </ul>
                <p>
                  Pour exercer ces droits, contactez notre DPO : {/* Email DPO à personnaliser */}dpo.natacha.rivard@gmail.com
                </p>
              </div>

              <div data-testid="section-cookies">
                <h3>9. Cookies et Technologies Similaires</h3>
                <p>
                  Nous utilisons des cookies pour :
                </p>
                <ul>
                  <li>Maintenir votre session de connexion</li>
                  <li>Mémoriser vos préférences</li>
                  <li>Analyser l'usage de l'application (avec votre consentement)</li>
                  <li>Améliorer les performances techniques</li>
                </ul>
                <p>
                  Vous pouvez gérer vos préférences de cookies via les paramètres de l'application.
                </p>
              </div>

              <div data-testid="section-contact">
                <h3>10. Contact</h3>
                <p>
                  Pour toute question concernant cette politique de confidentialité :
                </p>
                <ul>
                  <li><strong>Délégué à la Protection des Données</strong> : {/* Email DPO */}dpo.natacha.rivard@gmail.com</li>
                  <li><strong>Support client</strong> : support@revelateur.fr</li>
                  <li><strong>Adresse postale</strong> : {/* Adresse à renseigner */}[Adresse à compléter]</li>
                </ul>
                <p>
                  Vous avez également le droit de déposer une plainte auprès de la CNIL (Commission Nationale de l'Informatique et des Libertés).
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
