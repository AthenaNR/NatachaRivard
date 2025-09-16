import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { X } from "lucide-react";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
    // Initialize analytics if accepted
    console.log("Analytics enabled");
  };

  const handleReject = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setIsVisible(false);
    // Ensure analytics are disabled
    console.log("Analytics disabled");
  };

  const handleDismiss = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border shadow-lg z-50 cookie-banner show">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-sm text-muted-foreground">
              Nous utilisons des cookies pour améliorer votre expérience et analyser notre trafic.{" "}
              <Link href="/confidentialite" className="text-primary underline">
                Politique de confidentialité
              </Link>
            </p>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <Button
              variant="ghost"
              size="icon"
              onClick={handleDismiss}
              className="h-8 w-8"
              data-testid="cookie-dismiss"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Fermer</span>
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleReject}
              data-testid="cookie-reject"
            >
              Refuser
            </Button>
            <Button
              size="sm"
              onClick={handleAccept}
              data-testid="cookie-accept"
            >
              Accepter
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
