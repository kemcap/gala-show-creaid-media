import { createFileRoute } from "@tanstack/react-router";
import {
  SubPageShell,
  PlaceholderNotice,
  LegalSection,
} from "@/components/SubPageShell";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title: "Datenschutz | Gala Show" },
      {
        name: "description",
        content: "Datenschutzerklärung der Gala Show Spezialeffekte.",
      },
      { property: "og:title", content: "Datenschutz | Gala Show" },
      {
        property: "og:description",
        content: "Datenschutzerklärung der Gala Show Spezialeffekte.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Datenschutz,
});

const blind =
  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";

const sections = [
  "1. Datenschutz auf einen Blick",
  "3. Hosting",
  "4. Kontaktaufnahme",
  "5. Kontaktformular",
  "6. Cookies",
  "7. Eingebundene Dienste",
  "8. YouTube / eingebettete Videos",
  "9. Server-Logfiles",
  "10. Rechte der betroffenen Personen",
  "11. Speicherdauer",
  "12. Änderungen dieser Datenschutzerklärung",
];

function Datenschutz() {
  const [first, ...rest] = sections;

  return (
    <SubPageShell>
      <div className="container-tight py-16">
        <div className="mx-auto max-w-2xl">
          <h1 className="font-display text-4xl font-bold tracking-tight text-foreground">
            Datenschutzerklärung
          </h1>
          <PlaceholderNotice>
            Diese Datenschutzerklärung ist aktuell nur ein gestalterischer
            Platzhalter und muss vor Veröffentlichung rechtlich geprüft und mit
            den tatsächlich eingesetzten Diensten abgestimmt werden.
          </PlaceholderNotice>

          <LegalSection title={first}>
            <p>{blind}</p>
          </LegalSection>

          <LegalSection title="2. Verantwortliche Stelle">
            <p>
              [Name / Unternehmen]
              <br />
              [Straße und Hausnummer]
              <br />
              [PLZ] [Ort]
              <br />
              Telefon: [Telefonnummer]
              <br />
              E-Mail: [E-Mail-Adresse]
            </p>
          </LegalSection>

          {rest.map((title) => (
            <LegalSection key={title} title={title}>
              <p>{blind}</p>
            </LegalSection>
          ))}
        </div>
      </div>
    </SubPageShell>
  );
}
