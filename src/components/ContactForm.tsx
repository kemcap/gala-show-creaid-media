import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle, Send } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  date: string;
  message: string;
}

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    date: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(`Anfrage von ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nE-Mail: ${formData.email}\nTelefon: ${formData.phone}\nVeranstaltungsart: ${formData.eventType}\nDatum: ${formData.date}\n\nNachricht:\n${formData.message}`
    );

    window.location.href = `mailto:info@gala-show.de?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-xl border border-border bg-card p-8 text-center">
        <CheckCircle className="mx-auto size-12 text-primary" />
        <h3 className="mt-4 text-2xl font-semibold tracking-tight text-foreground">
          Anfrage gesendet
        </h3>
        <p className="mt-2 text-muted-foreground">
          Vielen Dank! Wir melden uns so schnell wie möglich bei Ihnen.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name *</Label>
          <Input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Ihr Name"
            className="bg-card"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">E-Mail *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="ihre@email.de"
            className="bg-card"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Telefon</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+49 123 456789"
            className="bg-card"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="eventType">Veranstaltungsart</Label>
          <Input
            id="eventType"
            name="eventType"
            type="text"
            value={formData.eventType}
            onChange={handleChange}
            placeholder="Hochzeit, Konzert, Firmenevent ..."
            className="bg-card"
          />
        </div>

        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="date">Gewünschtes Datum</Label>
          <Input
            id="date"
            name="date"
            type="date"
            value={formData.date}
            onChange={handleChange}
            className="bg-card"
          />
        </div>

        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="message">Nachricht *</Label>
          <Textarea
            id="message"
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            placeholder="Beschreiben Sie Ihre Veranstaltung und Ihre Wünsche ..."
            rows={5}
            className="bg-card"
          />
        </div>
      </div>

      <Button type="submit" size="lg" className="w-full sm:w-auto">
        <Send className="size-4" />
        Anfrage senden
      </Button>
    </form>
  );
}
