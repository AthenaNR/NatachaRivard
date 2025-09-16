import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Moon, Menu, Sun } from "lucide-react";
import { useTheme } from "@/components/ui/theme-provider";

export function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const navigation = [
    { name: "Accueil", href: "/", section: "home" },
    { name: "Produits", href: "/produits", section: "products" },
    { name: "Tarifs", href: "/tarifs", section: "pricing" },
    { name: "À propos", href: "/a-propos", section: "about" },
    { name: "Contact", href: "/contact", section: "contact" },
    { name: "FAQ", href: "/faq", section: "faq" },
  ];

  const isActive = (href: string) => {
    if (href === "/" && location === "/") return true;
    if (href !== "/" && location.startsWith(href)) return true;
    return false;
  };

  const NavLinks = () => (
    <>
      {navigation.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className={`text-sm transition-colors hover:text-primary ${
            isActive(item.href)
              ? "text-primary font-medium"
              : "text-muted-foreground"
          }`}
          onClick={() => setIsOpen(false)}
          data-testid={`nav-link-${item.section}`}
        >
          {item.name}
        </Link>
      ))}
    </>
  );

  return (
    <nav className="nav-backdrop sticky top-0 z-40 w-full border-b border-border/40">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2" data-testid="logo-link">
            <Moon className="h-8 w-8 text-secondary" />
            <span className="text-xl font-serif font-semibold text-primary">
              Natacha Rivard
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
          </div>

          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              data-testid="theme-toggle"
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Basculer le thème</span>
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" data-testid="mobile-menu-trigger">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72">
                <div className="flex flex-col space-y-6 mt-8">
                  <NavLinks />
                  <div className="pt-4 border-t border-border">
                    <Link
                      href="/tarifs"
                      className="block"
                      onClick={() => setIsOpen(false)}
                    >
                      <Button className="w-full" data-testid="mobile-cta-button">
                        Essai Gratuit
                      </Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
