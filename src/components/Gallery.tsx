import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface GalleryImage {
  src: string;
  alt: string;
}

interface GalleryProps {
  images: GalleryImage[];
}

export function Gallery({ images }: GalleryProps) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const showNext = () => setIndex((i) => (i + 1) % images.length);
  const showPrev = () => setIndex((i) => (i - 1 + images.length) % images.length);

  const openAt = (i: number) => {
    setIndex(i);
    setOpen(true);
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((image, i) => (
          <button
            key={i}
            type="button"
            onClick={() => openAt(i)}
            className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-border bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </button>
        ))}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-5xl border-border bg-charcoal p-0">
          <DialogTitle className="sr-only">Galerie</DialogTitle>
          <DialogDescription className="sr-only">
            Großansicht des ausgewählten Bildes
          </DialogDescription>

          <button
            type="button"
            onClick={() => setOpen(false)}
            className="absolute right-3 top-3 z-20 rounded-full bg-black/50 p-2 text-foreground transition-colors hover:bg-black/70"
            aria-label="Schließen"
          >
            <X className="size-5" />
          </button>

          <div className="relative flex items-center justify-center">
            <img
              src={images[index].src}
              alt={images[index].alt}
              className="max-h-[80vh] w-full object-contain"
            />

            <button
              type="button"
              onClick={showPrev}
              className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/50 p-2 text-foreground transition-colors hover:bg-black/70"
              aria-label="Vorheriges Bild"
            >
              <ChevronLeft className="size-6" />
            </button>

            <button
              type="button"
              onClick={showNext}
              className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/50 p-2 text-foreground transition-colors hover:bg-black/70"
              aria-label="Nächstes Bild"
            >
              <ChevronRight className="size-6" />
            </button>
          </div>

          <div className="flex justify-center gap-2 pb-4">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                className={`size-2 rounded-full transition-colors ${
                  i === index ? "bg-primary" : "bg-muted-foreground/40 hover:bg-muted-foreground"
                }`}
                aria-label={`Bild ${i + 1} anzeigen`}
              />
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
