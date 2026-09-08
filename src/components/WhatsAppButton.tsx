export function WhatsAppButton() {
  // TODO: Ersetzen Sie die Nummer durch die echte Geschäftsnummer.
  const phoneNumber = "491234567890";

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex size-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-lg shadow-whatsapp/30 transition-transform duration-200 hover:scale-110 hover:shadow-whatsapp/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-whatsapp focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-7"
        aria-hidden="true"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.669.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.154 4.155h-.004c-1.586 0-3.134-.426-4.49-1.228L2.7 18.64l.548-1.997c.888-3.263 3.612-5.565 6.876-5.565h.004c3.676 0 6.67 2.994 6.67 6.671 0 3.676-2.994 6.67-6.669 6.67M12.002 2C6.486 2 2.002 6.485 2.002 12s4.484 10 10 10c1.768 0 3.431-.462 4.889-1.268l4.195 1.104-1.105-4.193C20.54 15.43 21.002 13.768 21.002 12c0-5.515-4.486-10-10-10" />
      </svg>
    </a>
  );
}
