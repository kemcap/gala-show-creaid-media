import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";

export function SubPageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
        <div className="container-tight flex h-16 items-center justify-between">
          <Link
            to="/"
            className="font-display text-2xl font-bold tracking-tight text-foreground"
          >
            Gala Show
          </Link>
          <nav className="flex items-center gap-6">
            <Link
              to="/partner"
              className="hidden text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:block"
              activeProps={{ className: "text-foreground" }}
            >
              Partner
            </Link>
            <Button asChild variant="outline" size="sm">
              <Link to="/">
                <ArrowLeft className="size-4" />
                Startseite
              </Link>
            </Button>
          </nav>
        </div>
      </header>

      <main>{children}</main>

      <footer className="border-t border-border bg-charcoal py-12">
        <div className="container-tight">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="text-center md:text-left">
              <div className="font-display text-2xl font-bold text-foreground">
                Gala Show
              </div>
              <p className="mt-1 text-sm text-muted-foreground">
                Spezialeffekte für unvergessliche Momente.
              </p>
            </div>
            <nav className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <Link to="/partner" className="hover:text-foreground">
                Partner
              </Link>
              <Link to="/impressum" className="hover:text-foreground">
                Impressum
              </Link>
              <Link to="/datenschutz" className="hover:text-foreground">
                Datenschutz
              </Link>
              <Link to="/" hash="services" className="hover:text-foreground">
                Leistungen
              </Link>
              <Link to="/" hash="gallery" className="hover:text-foreground">
                Galerie
              </Link>
              <Link to="/" hash="contact" className="hover:text-foreground">
                Kontakt
              </Link>
            </nav>
          </div>
          <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Gala Show. Alle Rechte vorbehalten.
          </div>
        </div>
      </footer>
    </div>
  );
}

export function PlaceholderNotice({ children }: { children: ReactNode }) {
  return (
    <p className="mt-6 rounded-xl border border-primary/30 bg-primary/10 px-4 py-3 text-sm text-primary">
      {children}
    </p>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="mt-10">
      <h2 className="font-display text-xl font-semibold tracking-tight text-foreground">
        {title}
      </h2>
      <div className="mt-3 space-y-3 text-muted-foreground">{children}</div>
    </section>
  );
}
