import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle, Send } from "lucide-react";
import { z } from "zod";

interface FormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  message: string;
}

const contactSchema = z.object({
  name: z.string().trim().min(1, "Bitte geben Sie Ihren Namen ein.").max(100),
  email: z.string().trim().email("Bitte geben Sie eine gültige E-Mail-Adresse ein.").max(255),
  phone: z.string().trim().min(5, "Bitte geben Sie Ihre Telefonnummer ein.").max(40),
  date: z.string().min(1, "Bitte wählen Sie das Veranstaltungsdatum aus."),
  message: z.string().trim().min(1, "Bitte geben Sie eine Nachricht ein.").max(2000),
});

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    date: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      setErrors(Object.fromEntries(Object.entries(fieldErrors).map(([key, messages]) => [key, messages?.[0]])));
      return;
    }

    const data = result.data;
    const subject = encodeURIComponent(`Anfrage von ${data.name}`);
    const body = encodeURIComponent(
      `Name: ${data.name}\nE-Mail: ${data.email}\nTelefon: ${data.phone}\nVeranstaltungsdatum: ${data.date}\n\nNachricht:\n${data.message}`
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
            maxLength={100}
            value={formData.name}
            onChange={handleChange}
            placeholder="Ihr Name"
            className="bg-card"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && <p id="name-error" className="text-sm text-destructive">{errors.name}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">E-Mail *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            maxLength={255}
            value={formData.email}
            onChange={handleChange}
            placeholder="ihre@email.de"
            className="bg-card"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && <p id="email-error" className="text-sm text-destructive">{errors.email}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Telefonnummer *</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            required
            maxLength={40}
            value={formData.phone}
            onChange={handleChange}
            placeholder="+49 123 456789"
            className="bg-card"
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
          />
          {errors.phone && <p id="phone-error" className="text-sm text-destructive">{errors.phone}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="date">Veranstaltungsdatum *</Label>
          <Input
            id="date"
            name="date"
            type="date"
            required
            value={formData.date}
            onChange={handleChange}
            className="bg-card"
            aria-invalid={Boolean(errors.date)}
            aria-describedby={errors.date ? "date-error" : undefined}
          />
          {errors.date && <p id="date-error" className="text-sm text-destructive">{errors.date}</p>}
        </div>

        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="message">Nachricht *</Label>
          <Textarea
            id="message"
            name="message"
            required
            maxLength={2000}
            value={formData.message}
            onChange={handleChange}
            placeholder="Beschreiben Sie Ihre Veranstaltung und Ihre Wünsche ..."
            rows={5}
            className="bg-card"
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
          />
          {errors.message && <p id="message-error" className="text-sm text-destructive">{errors.message}</p>}
        </div>
      </div>

      <Button type="submit" size="lg" className="w-full sm:w-auto">
        <Send className="size-4" />
        Unverbindlich anfragen
      </Button>
    </form>
  );
}
