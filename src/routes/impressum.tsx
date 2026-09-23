import { createFileRoute } from "@tanstack/react-router";
import {
  SubPageShell,
  PlaceholderNotice,
  LegalSection,
} from "@/components/SubPageShell";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum | Gala Show" },
      {
        name: "description",
        content: "Impressum und Anbieterkennzeichnung der Gala Show Spezialeffekte.",
      },
      { property: "og:title", content: "Impressum | Gala Show" },
      {
        property: "og:description",
        content: "Impressum und Anbieterkennzeichnung der Gala Show Spezialeffekte.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Impressum,
});

function Impressum() {
  return (
    <SubPageShell>
      <div className="container-tight py-16">
        <div className="mx-auto max-w-2xl">
          <h1 className="font-display text-4xl font-bold tracking-tight text-foreground">
            Impressum
          </h1>
          <PlaceholderNotice>
            Platzhalter – rechtliche Angaben vor Veröffentlichung ersetzen und
            prüfen.
          </PlaceholderNotice>

          <LegalSection title="Angaben gemäß § 5 DDG">
            <p>
              [Unternehmensname]
              <br />
              Inhaber: [Vor- und Nachname]
              <br />
              [Straße und Hausnummer]
              <br />
              [PLZ] [Ort]
              <br />
              [Land]
            </p>
          </LegalSection>

          <LegalSection title="Kontakt">
            <p>
              Telefon: [Telefonnummer]
              <br />
              E-Mail: [E-Mail-Adresse]
              <br />
              Website: [Website-Adresse]
            </p>
          </LegalSection>

          <LegalSection title="Steuerliche Angaben">
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat. [Platzhalter für Umsatzsteuer-Identifikationsnummer bzw.
              Steuernummer.]
            </p>
          </LegalSection>

          <LegalSection title="Verantwortlich für den Inhalt">
            <p>
              [Vor- und Nachname]
              <br />
              [Straße und Hausnummer]
              <br />
              [PLZ] [Ort]
            </p>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </p>
          </LegalSection>

          <LegalSection title="Haftung für Inhalte">
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet.
            </p>
          </LegalSection>

          <LegalSection title="Haftung für Links">
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum.
            </p>
          </LegalSection>

          <LegalSection title="Urheberrecht">
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. Stet clita kasd gubergren, no sea
              takimata sanctus est Lorem ipsum dolor sit amet.
            </p>
          </LegalSection>
        </div>
      </div>
    </SubPageShell>
  );
}
