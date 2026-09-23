import { createFileRoute, Link } from "@tanstack/react-router";
import { ExternalLink, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SubPageShell } from "@/components/SubPageShell";

import partner1 from "@/assets/gallery-1.jpg";
import partner2 from "@/assets/gallery-2.jpg";
import partner3 from "@/assets/gallery-3.jpg";
import partner4 from "@/assets/gallery-4.jpg";
import partner5 from "@/assets/gallery-5.jpg";
import partner6 from "@/assets/gallery-6.jpg";

export const Route = createFileRoute("/partner")({
  head: () => ({
    meta: [
      { title: "Partner | Gala Show" },
      {
        name: "description",
        content:
          "Ausgewählte Dienstleister und Kooperationspartner rund um Hochzeiten, Events und Veranstaltungen.",
      },
      { property: "og:title", content: "Starke Partner für Ihr Event | Gala Show" },
      {
        property: "og:description",
        content:
          "Fotografie, Musik, Location, Catering, Technik und mehr — unser Netzwerk für besondere Momente.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PartnerPage,
});

type Partner = {
  name: string;
  category: string;
  region: string;
  description: string;
  image: string;
  url: string;
};

// Platzhalter für den Korrekturabzug — vor Veröffentlichung durch echte Partner ersetzen.
const partners: Partner[] = [
  {
    name: "Partner Platzhalter 1",
    category: "Fotografie & Video",
    region: "Region Platzhalter",
    description:
      "Platzhaltertext für die Partnerbeschreibung. Hier stehen später zwei bis drei Sätze zum Leistungsangebot. Bild, Name und Link werden ebenfalls noch ersetzt.",
    image: partner1,
    url: "https://example.com",
  },
  {
    name: "Partner Platzhalter 2",
    category: "DJ & Musik",
    region: "Region Platzhalter",
    description:
      "Platzhaltertext für die Partnerbeschreibung. Hier stehen später zwei bis drei Sätze zum Leistungsangebot. Bild, Name und Link werden ebenfalls noch ersetzt.",
    image: partner2,
    url: "https://example.com",
  },
  {
    name: "Partner Platzhalter 3",
    category: "Eventlocation",
    region: "Region Platzhalter",
    description:
      "Platzhaltertext für die Partnerbeschreibung. Hier stehen später zwei bis drei Sätze zum Leistungsangebot. Bild, Name und Link werden ebenfalls noch ersetzt.",
    image: partner3,
    url: "https://example.com",
  },
  {
    name: "Partner Platzhalter 4",
    category: "Catering",
    region: "Region Platzhalter",
    description:
      "Platzhaltertext für die Partnerbeschreibung. Hier stehen später zwei bis drei Sätze zum Leistungsangebot. Bild, Name und Link werden ebenfalls noch ersetzt.",
    image: partner4,
    url: "https://example.com",
  },
  {
    name: "Partner Platzhalter 5",
    category: "Trauredner / Moderation",
    region: "Region Platzhalter",
    description:
      "Platzhaltertext für die Partnerbeschreibung. Hier stehen später zwei bis drei Sätze zum Leistungsangebot. Bild, Name und Link werden ebenfalls noch ersetzt.",
    image: partner5,
    url: "https://example.com",
  },
  {
    name: "Partner Platzhalter 6",
    category: "Veranstaltungstechnik",
    region: "Region Platzhalter",
    description:
      "Platzhaltertext für die Partnerbeschreibung. Hier stehen später zwei bis drei Sätze zum Leistungsangebot. Bild, Name und Link werden ebenfalls noch ersetzt.",
    image: partner6,
    url: "https://example.com",
  },
];

function PartnerPage() {
  return (
    <SubPageShell>
      <section className="border-b border-border bg-charcoal-light py-20">
        <div className="container-tight text-center">
          <p className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Gemeinsam für besondere Momente
          </p>
          <h1 className="mx-auto max-w-3xl text-balance font-display text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Starke Partner für Ihr Event
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-balance text-lg text-foreground/90">
            Eine gelungene Veranstaltung besteht aus vielen Bausteinen. Hier
            stellen wir ausgewählte Dienstleister und Partner vor, die unser
            Angebot sinnvoll ergänzen.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-tight">
          <p className="mx-auto max-w-2xl rounded-xl border border-primary/30 bg-primary/10 px-4 py-3 text-center text-sm text-primary">
            Platzhalter – echte Partner, Logos und Links werden vor der
            Veröffentlichung ergänzt.
          </p>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {partners.map((partner) => (
              <article
                key={partner.name}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-primary/40"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={partner.image}
                    alt={partner.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full border border-primary/30 bg-background/80 px-3 py-1 text-xs font-medium text-primary backdrop-blur-sm">
                    {partner.category}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h2 className="font-display text-xl font-semibold tracking-tight text-foreground">
                    {partner.name}
                  </h2>
                  <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="size-4 shrink-0 text-primary" />
                    {partner.region}
                  </div>
                  <p className="mt-4 flex-1 text-sm text-muted-foreground">
                    {partner.description}
                  </p>
                  <Button asChild variant="outline" size="sm" className="mt-6 w-full">
                    <a
                      href={partner.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Partner kennenlernen
                      <ExternalLink className="size-4" />
                    </a>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-charcoal-light py-20">
        <div className="container-tight">
          <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-card p-8 text-center sm:p-12">
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Sie möchten Teil unseres Netzwerks werden?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Wir sind offen für passende Kooperationen rund um Hochzeiten,
              Events, Shows und Veranstaltungen.
            </p>
            <Button asChild size="lg" className="mt-8 min-w-[200px]">
              <Link to="/" hash="contact">
                Kontakt aufnehmen
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </SubPageShell>
  );
}
