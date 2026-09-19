import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ContactForm";
import { Gallery } from "@/components/Gallery";
import { VideoEmbed } from "@/components/VideoEmbed";
import {
  Flame,
  Sparkles,
  PartyPopper,
  ShoppingBag,
  Award,
  Mail,
  Phone,
  MapPin,
  Menu,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";


import heroImageAsset from "@/assets/hero-hotel.webp.asset.json";
const heroImage = heroImageAsset.url;
import serviceRentalImage from "@/assets/service-rental.jpg";
import serviceShowsImage from "@/assets/service-shows.jpg";
import serviceEventsImage from "@/assets/service-events.jpg";
import serviceSalesImage from "@/assets/service-sales.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Gala Show | Spezialeffekte, Feuerwerk & Bodennebel für Events",
      },
      {
        name: "description",
        content:
          "Professionelle Spezialeffekte für Hochzeiten, Konzerte, Firmenevents und Open-Airs. Vermietung, Shows, Verkauf und Events aus einer Hand.",
      },
      {
        property: "og:title",
        content: "Gala Show | Spezialeffekte für unvergessliche Momente",
      },
      {
        property: "og:description",
        content:
          "Professionelle Spezialeffekte für Hochzeiten, Konzerte, Firmenevents und Open-Airs.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const galleryImages = [
  { src: gallery1, alt: "Goldene Funkenfontäne bei einem Live-Event" },
  { src: gallery2, alt: "Spektakuläre Feuerbälle auf der Bühne" },
  { src: gallery3, alt: "Romantischer Bodennebel bei einer Hochzeit" },
  { src: gallery4, alt: "Buntes Konfetti-Finale" },
  { src: gallery5, alt: "Großes Feuerwerk über einer Festivalbühne" },
  { src: gallery6, alt: "CO2-Jets und Bühneneffekte beim Konzert" },
];

const services = [
  {
    title: "Vermietung",
    description:
      "Mieten Sie professionelle Technik für Ihren besonderen Tag. Inklusive fachkundigem Personal mit Zertifikaten — für ein echtes Sorglos-Paket.",
    image: serviceRentalImage,
    icon: Sparkles,
    features: [
      "Fontänen bis 5 m Höhe",
      "Feuerbälle & Flammen",
      "Bodennebel-Maschinen",
      "Konfetti & Streamer",
    ],
  },
  {
    title: "Shows",
    description:
      "Wir kreieren speziell für Sie die große Show mit professioneller Technik. Fontänen, Feuerbälle, Vertikalnebel — alles auf Ihr Event abgestimmt.",
    image: serviceShowsImage,
    icon: Flame,
    features: [
      "Individuelle Choreografie",
      "Professionelle Technik",
      "Licht- & Tontechnik",
      "Sicherheitskonzept",
    ],
  },
  {
    title: "Events",
    description:
      "Wir produzieren große Shows auf den ganz großen Bühnen. Open-Airs, Hallen, TV-Shows — wir liefern den Wow-Effekt, den Ihr Publikum nicht vergisst.",
    image: serviceEventsImage,
    icon: PartyPopper,
    features: [
      "Open-Air & Halle",
      "TV- & Live-Events",
      "Tourneebetrieb",
      "Komplettproduktion",
    ],
  },
  {
    title: "Verkauf",
    description:
      "Sie wollen selbst zünden? Gold, Silber, Herzen und Konfetti in jeder Farbe. Einfach zu handhaben, ohne Genehmigung — fragen Sie uns einfach.",
    image: serviceSalesImage,
    icon: ShoppingBag,
    features: [
      "Cold Spark Fontänen",
      "Konfetti-Kanonen",
      "Herz- & Sterneffekte",
      "Beratung vor Ort",
    ],
  },
];

const references = [
  "Über 40 Jahre im Tourneebetrieb",
  "Konzert- und Gastspieldirektion Leipzig",
  "ZDF, MDR, DSF und weitere TV-Stationen",
  "Konzerte mit City, Silly, Puhdys, Karat, Stern Meissen",
  "José Carreras Gala",
  "ABBA a4you.de & BeeGees jivetalkin.eu",
];

function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setScrollY(window.scrollY));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);


  const navLinks = [
    { href: "#services", label: "Leistungen" },
    { href: "#references", label: "Referenzen" },
    { href: "#video", label: "Showreel" },
    { href: "#gallery", label: "Galerie" },
    { href: "#contact", label: "Kontakt" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
        <div className="container-tight flex h-16 items-center justify-between">
          <Link to="/" className="font-display text-2xl font-bold tracking-tight text-foreground">
            Gala Show
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <Button asChild size="sm">
              <a href="#contact">Anfragen</a>
            </Button>
          </nav>

          <button
            type="button"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
          >
            {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-border md:hidden">
            <nav className="container-tight flex flex-col gap-4 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button asChild className="w-full">
                <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
                  Anfragen
                </a>
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Fontänen und Flammen vor dem Hotel Kap-Haus bei Nacht"
            className="h-[120%] w-full object-cover will-change-transform"
            style={{ transform: `translateY(${Math.min(scrollY * 0.25, 320)}px)` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
        </div>

        <div className="container-tight relative z-10 py-20 text-center">
          <p className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Spezialeffekte seit über 40 Jahren
          </p>
          <h1 className="mx-auto max-w-4xl text-balance font-display text-5xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Der Wow-Moment für Ihre Veranstaltung
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-balance text-lg text-foreground/90 sm:text-xl">
            Professionelle Fontänen, Feuerbälle, Bodennebel und Konfetti für
            Hochzeiten, Stadtfeste, Konzerte und große Bühnen — mit bis zu 30
            Maschinen und erfahrenem Fachpersonal.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="min-w-[180px]">
              <a href="#contact">Jetzt anfragen</a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="min-w-[180px] border-foreground/20 bg-background/50 text-foreground hover:bg-foreground/10 hover:text-foreground"
            >
              <a href="#services">Leistungen entdecken</a>
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 animate-bounce md:block">
          <a href="#services" aria-label="Zu den Leistungen scrollen">
            <svg
              className="size-6 text-foreground/60"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24">
        <div className="container-tight">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Alles aus einer Hand
            </h2>
            <p className="mt-4 text-muted-foreground">
              Ob kleine private Feier oder große Bühnenproduktion — wir liefern
              die passende Technik, das Know-how und die Sicherheit.
            </p>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className={`group overflow-hidden rounded-2xl border border-border bg-card ${
                    index === 0 ? "lg:col-span-2" : ""
                  }`}
                >
                  <div
                    className={`grid gap-0 ${
                      index === 0 ? "md:grid-cols-2" : ""
                    }`}
                  >
                    <div
                      className={`relative aspect-[4/3] overflow-hidden ${
                        index === 0 ? "md:aspect-auto" : ""
                      }`}
                    >
                      <img
                        src={service.image}
                        alt={service.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                    </div>
                    <div className="flex flex-col justify-center p-6 sm:p-8">
                      <div className="mb-4 inline-flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Icon className="size-6" />
                      </div>
                      <h3 className="font-display text-2xl font-semibold tracking-tight text-foreground">
                        {service.title}
                      </h3>
                      <p className="mt-3 text-muted-foreground">
                        {service.description}
                      </p>
                      <ul className="mt-5 grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2">
                            <span className="size-1.5 rounded-full bg-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* References */}
      <section
        id="references"
        className="border-y border-border bg-charcoal-light py-24"
      >
        <div className="container-tight">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Erfahrung, die begeistert
              </h2>
              <p className="mt-4 text-muted-foreground">
                Seit über vier Jahrzehnten stehen wir für professionelle
                Spezialeffekte auf Deutschlands Bühnen. Von der
                Konzerttournee bis zum TV-Event.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {references.map((ref) => (
                  <div
                    key={ref}
                    className="flex items-start gap-3 rounded-xl border border-border bg-card p-4"
                  >
                    <Award className="mt-0.5 size-5 shrink-0 text-primary" />
                    <span className="text-sm text-foreground">{ref}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-8">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="font-display text-4xl font-bold text-primary">
                    40+
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    Jahre Erfahrung
                  </div>
                </div>
                <div>
                  <div className="font-display text-4xl font-bold text-primary">
                    30
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    Maschinen
                  </div>
                </div>
                <div>
                  <div className="font-display text-4xl font-bold text-primary">
                    5m
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    Fontänenhöhe
                  </div>
                </div>
                <div>
                  <div className="font-display text-4xl font-bold text-primary">
                    ∞
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    Wow-Momente
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video */}
      <section id="video" className="py-24">
        <div className="container-tight">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Unsere Showreel
            </h2>
            <p className="mt-4 text-muted-foreground">
              Ein Eindruck von dem, was wir auf die Bühne bringen.
            </p>
          </div>
          <div className="mt-12">
            <VideoEmbed videoId="4adufPwsXpY" title="Gala Show Showreel" />
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="border-y border-border bg-card py-24">
        <div className="container-tight">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Galerie
            </h2>
            <p className="mt-4 text-muted-foreground">
              Einblicke in unsere Shows, Effekte und Events.
            </p>
          </div>
          <div className="mt-12">
            <Gallery images={galleryImages} />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24">
        <div className="container-tight">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Lassen Sie uns reden
              </h2>
              <p className="mt-4 text-muted-foreground">
                Erzählen Sie uns von Ihrer Veranstaltung. Wir erstellen Ihnen
                ein maßgeschneidertes Angebot — unverbindlich und schnell.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-4 text-foreground">
                  <div className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Phone className="size-5" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Telefon</div>
                    <a href="tel:+493412345678" className="font-medium hover:text-primary">
                      +49 341 123 456 78
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-foreground">
                  <div className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Mail className="size-5" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">E-Mail</div>
                    <a href="mailto:info@gala-show.de" className="font-medium hover:text-primary">
                      info@gala-show.de
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-foreground">
                  <div className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <MapPin className="size-5" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Standort</div>
                    <span className="font-medium">Leipzig, Deutschland</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-charcoal-light p-6 sm:p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
              <Link to="/impressum" className="hover:text-foreground">
                Impressum
              </Link>
              <a href="#services" className="hover:text-foreground">
                Leistungen
              </a>
              <a href="#gallery" className="hover:text-foreground">
                Galerie
              </a>
              <a href="#contact" className="hover:text-foreground">
                Kontakt
              </a>
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
