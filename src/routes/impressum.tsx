import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum | Gala Show" },
      {
        name: "description",
        content: "Impressum der Gala Show Spezialeffekte.",
      },
      { property: "og:title", content: "Impressum | Gala Show" },
      {
        property: "og:description",
        content: "Impressum der Gala Show Spezialeffekte.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Impressum,
});

function Impressum() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border bg-charcoal">
        <div className="container-tight flex h-16 items-center justify-between">
          <Link to="/" className="font-display text-2xl font-bold tracking-tight text-foreground">
            Gala Show
          </Link>
          <Button asChild variant="outline" size="sm">
            <Link to="/">
              <ArrowLeft className="size-4" />
              Zurück
            </Link>
          </Button>
        </div>
      </header>

      <main className="container-tight py-16">
        <div className="mx-auto max-w-2xl">
          <h1 className="font-display text-4xl font-bold tracking-tight text-foreground">
            Impressum
          </h1>

          <div className="mt-10 space-y-8 text-foreground">
            <section>
              <h2 className="font-display text-xl font-semibold text-foreground">
                Angaben gemäß § 5 TMG
              </h2>
              <p className="mt-3 text-muted-foreground">
                Gala Show
                <br />
                Musterstraße 123
                <br />
                04109 Leipzig
                <br />
                Deutschland
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground">
                Kontakt
              </h2>
              <p className="mt-3 text-muted-foreground">
                Telefon: +49 341 123 456 78
                <br />
                E-Mail: info@gala-show.de
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground">
                Vertreten durch
              </h2>
              <p className="mt-3 text-muted-foreground">
                Max Mustermann
                <br />
                Geschäftsführer
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground">
                Umsatzsteuer-ID
              </h2>
              <p className="mt-3 text-muted-foreground">
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
                <br />
                DE123456789
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground">
                Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
              </h2>
              <p className="mt-3 text-muted-foreground">
                Max Mustermann
                <br />
                Musterstraße 123
                <br />
                04109 Leipzig
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground">
                Haftung für Inhalte
              </h2>
              <p className="mt-3 text-muted-foreground">
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene
                Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
                Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
                gespeicherte fremde Informationen zu überwachen oder nach
                Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
                hinweisen.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground">
                Hinweis
              </h2>
              <p className="mt-3 text-muted-foreground">
                Dies ist eine Beispiel-Impressumsseite für die neue Gala-Show-Website.
                Bitte ersetzen Sie die Platzhalter durch Ihre tatsächlichen
                Unternehmensdaten.
              </p>
            </section>
          </div>
        </div>
      </main>

      <footer className="border-t border-border bg-charcoal py-8">
        <div className="container-tight text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Gala Show. Alle Rechte vorbehalten.
        </div>
      </footer>
    </div>
  );
}
