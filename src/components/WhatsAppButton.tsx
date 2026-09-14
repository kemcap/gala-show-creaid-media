export function WhatsAppButton() {
  // TODO: Ersetzen Sie die Nummer durch die echte Geschäftsnummer.
  const phoneNumber = "491234567890";

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex size-14 items-center justify-center rounded-full bg-whatsapp shadow-lg shadow-whatsapp/30 transition-transform duration-200 hover:scale-110 hover:shadow-whatsapp/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-whatsapp focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      {/* Sprechblasen-Schwanz unten rechts */}
      <span
        aria-hidden="true"
        className="absolute bottom-1 right-1 size-2.5 rotate-45 rounded-[2px] bg-whatsapp"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="relative size-6 text-white"
        aria-hidden="true"
      >
        <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
      </svg>
    </a>
  );
}
