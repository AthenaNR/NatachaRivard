import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { CookieBanner } from "@/components/layout/cookie-banner";

// Pages - Static version (no API calls)
import Home from "@/pages/home";
import Products from "@/pages/products";
import ProductDetail from "@/pages/product-detail";
import Pricing from "@/pages/pricing";
import About from "@/pages/about";
import ContactStatic from "@/pages/contact-static";
import FAQ from "@/pages/faq";
import Privacy from "@/pages/privacy";
import Terms from "@/pages/terms";
import Legal from "@/pages/legal";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/produits" component={Products} />
      <Route path="/produits/reve-revelateur" component={ProductDetail} />
      <Route path="/tarifs" component={Pricing} />
      <Route path="/a-propos" component={About} />
      <Route path="/contact" component={ContactStatic} />
      <Route path="/faq" component={FAQ} />
      <Route path="/confidentialite" component={Privacy} />
      <Route path="/conditions" component={Terms} />
      <Route path="/mentions-legales" component={Legal} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="natacha-theme">
      <TooltipProvider>
        <div className="min-h-screen bg-background">
          <Navbar />
          <main>
            <Router />
          </main>
          <Footer />
          <CookieBanner />
        </div>
        <Toaster />
      </TooltipProvider>
    </ThemeProvider>
  );
}

export default App;