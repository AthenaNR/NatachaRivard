import { Link } from "wouter";
import { Moon, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Moon className="h-6 w-6 text-secondary" />
              <span className="text-lg font-serif font-semibold text-primary">
                RêveRévélateur
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Intelligence artificielle avancée pour interpréter vos rêves avec précision et confidentialité.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Navigation</h3>
            <div className="space-y-2">
              <Link href="/produits" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Produits
              </Link>
              <Link href="/tarifs" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Tarifs
              </Link>
              <Link href="/a-propos" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                À propos
              </Link>
              <Link href="/faq" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                FAQ
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Légal</h3>
            <div className="space-y-2">
              <Link href="/confidentialite" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Confidentialité
              </Link>
              <Link href="/conditions" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Conditions
              </Link>
              <Link href="/mentions-legales" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Mentions Légales
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>contact@revelateur.fr</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+33 X XX XX XX XX</span>
              </div>
              <div className="flex items-start space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>[Adresse]<br />France</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} RêveRévélateur. Tous droits réservés.
          </div>
          <div className="text-sm text-muted-foreground">
            SIRET: [À REMPLACER] • TVA: [À REMPLACER]
          </div>
        </div>
      </div>
    </footer>
  );
}
