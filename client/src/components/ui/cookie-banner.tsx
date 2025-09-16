import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
    // Enable analytics here if needed
  };

  const handleReject = () => {
    localStorage.setItem('cookie-consent', 'rejected');
    setIsVisible(false);
    // Disable analytics here if needed
  };

  if (!isVisible) return null;

  return (
    <div 
      className={`cookie-banner fixed bottom-0 left-0 right-0 bg-card border-t border-border p-4 shadow-lg z-50 ${isVisible ? 'show' : ''}`}
      data-testid="cookie-banner"
    >
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-muted-foreground">
          <p>
            Nous utilisons des cookies pour améliorer votre expérience et analyser notre trafic. 
            <Link href="/privacy" className="text-primary underline ml-1" data-testid="link-cookie-privacy">
              Politique de confidentialité
            </Link>
          </p>
        </div>
        <div className="flex gap-2 flex-shrink-0">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleReject}
            data-testid="button-cookie-reject"
          >
            Refuser
          </Button>
          <Button 
            size="sm" 
            onClick={handleAccept}
            data-testid="button-cookie-accept"
          >
            Accepter
          </Button>
        </div>
      </div>
    </div>
  );
}
