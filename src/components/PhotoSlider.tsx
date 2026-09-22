import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PhotoSliderImage {
  src: string;
  alt: string;
}

interface PhotoSliderProps {
  images: PhotoSliderImage[];
}

export function PhotoSlider({ images }: PhotoSliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null);

  const move = (direction: -1 | 1) => {
    const slider = sliderRef.current;
    if (!slider) return;
    slider.scrollBy({ left: direction * slider.clientWidth, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div
        ref={sliderRef}
        className="flex snap-x snap-mandatory overflow-x-auto overscroll-x-contain rounded-xl [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {images.map((image) => (
          <figure key={image.src} className="relative aspect-[16/9] min-w-full snap-center overflow-hidden bg-card">
            <img src={image.src} alt={image.alt} loading="lazy" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            <figcaption className="absolute bottom-0 left-0 right-0 p-5 text-sm font-medium text-foreground sm:p-7 sm:text-base">
              {image.alt}
            </figcaption>
          </figure>
        ))}
      </div>

      <Button
        type="button"
        variant="secondary"
        size="icon"
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-background/75 shadow-lg backdrop-blur-sm"
        onClick={() => move(-1)}
        aria-label="Vorheriges Foto"
      >
        <ChevronLeft />
      </Button>
      <Button
        type="button"
        variant="secondary"
        size="icon"
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-background/75 shadow-lg backdrop-blur-sm"
        onClick={() => move(1)}
        aria-label="Nächstes Foto"
      >
        <ChevronRight />
      </Button>
    </div>
  );
}