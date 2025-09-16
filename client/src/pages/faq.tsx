import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const faqData = [
  {
    id: 1,
    question: "Comment fonctionne l'interprétation par IA ?",
    answer: "Notre intelligence artificielle analyse les éléments narratifs, les émotions et les symboles de vos rêves en utilisant des modèles de traitement du langage naturel avancés. Elle compare vos rêves à une vaste base de données d'interprétations psychologiques pour fournir des analyses personnalisées et précises."
  },
  {
    id: 2,
    question: "Mes rêves sont-ils vraiment confidentiels ?",
    answer: "Absolument. Tous vos rêves sont chiffrés de bout en bout et stockés de manière sécurisée. Nous respectons strictement le RGPD et ne partageons jamais vos données personnelles avec des tiers. Vous pouvez supprimer vos données à tout moment depuis l'application."
  },
  {
    id: 3,
    question: "Puis-je annuler mon abonnement à tout moment ?",
    answer: "Oui, vous pouvez annuler votre abonnement mensuel à tout moment via les paramètres de l'application ou directement depuis votre compte Google Play Store. L'annulation prend effet à la fin de votre période de facturation actuelle."
  },
  {
    id: 4,
    question: "L'application fournit-elle des conseils médicaux ?",
    answer: "Non, RêveRévélateur ne fournit pas de conseils médicaux, thérapeutiques ou psychiatriques. Nos interprétations sont uniquement à des fins de divertissement et de réflexion personnelle. En cas de troubles du sommeil ou de préoccupations psychologiques, consultez un professionnel de santé qualifié."
  },
  {
    id: 5,
    question: "Quelle est votre politique de remboursement ?",
    answer: "Nous offrons un remboursement complet sous 14 jours pour les nouveaux abonnements si vous n'êtes pas satisfait du service. Les achats de micro-paiements (interprétations à l'usage) ne sont pas remboursables une fois l'interprétation délivrée."
  },
  {
    id: 6,
    question: "Combien de temps faut-il pour recevoir une interprétation ?",
    answer: "Notre IA traite vos rêves en temps réel. Vous recevrez votre interprétation complète en moins de 2 minutes après avoir soumis votre rêve. L'analyse est disponible 24h/24 et 7j/7."
  },
  {
    id: 7,
    question: "Puis-je utiliser l'application sans connexion internet ?",
    answer: "Vous pouvez consulter vos rêves et interprétations précédemment enregistrés hors ligne. Cependant, une connexion internet est nécessaire pour obtenir de nouvelles interprétations et synchroniser vos données."
  },
  {
    id: 8,
    question: "Comment puis-je supprimer mes données ?",
    answer: "Vous pouvez supprimer toutes vos données à tout moment depuis les paramètres de l'application. Vous pouvez également nous contacter directement à dpo@revelateur.fr pour exercer vos droits RGPD, y compris le droit à l'effacement."
  }
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="py-20" data-testid="page-faq">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4" data-testid="text-faq-title">
            Questions Fréquemment Posées
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-faq-subtitle">
            Tout ce que vous devez savoir sur RêveRévélateur et nos services
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqData.map((item) => (
            <Card key={item.id} className="overflow-hidden" data-testid={`card-faq-${item.id}`}>
              <Collapsible 
                open={openItems.includes(item.id)} 
                onOpenChange={() => toggleItem(item.id)}
              >
                <CollapsibleTrigger asChild>
                  <Button 
                    variant="ghost" 
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted/50 h-auto"
                    data-testid={`button-faq-trigger-${item.id}`}
                  >
                    <span className="font-semibold text-card-foreground pr-4">{item.question}</span>
                    <i className={`fas ${openItems.includes(item.id) ? 'fa-minus' : 'fa-plus'} text-primary transform transition-transform flex-shrink-0`}></i>
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <CardContent className="px-6 pb-4 pt-0">
                    <p className="text-muted-foreground leading-relaxed" data-testid={`text-faq-answer-${item.id}`}>
                      {item.answer}
                    </p>
                  </CardContent>
                </CollapsibleContent>
              </Collapsible>
            </Card>
          ))}
        </div>

        {/* Still have questions */}
        <div className="text-center mt-16">
          <Card className="max-w-2xl mx-auto" data-testid="card-more-questions">
            <CardContent className="p-8">
              <h2 className="text-2xl font-serif font-bold text-primary mb-4" data-testid="text-more-questions-title">
                Vous avez d'autres questions ?
              </h2>
              <p className="text-muted-foreground mb-6" data-testid="text-more-questions-subtitle">
                Notre équipe support est disponible pour vous aider avec toute question spécifique
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild data-testid="button-contact-support">
                  <a href="/contact">Contacter le Support</a>
                </Button>
                <Button variant="outline" asChild data-testid="button-email-support">
                  <a href="mailto:support@revelateur.fr">support@revelateur.fr</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
