import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { VideoEmbed } from "@/components/VideoEmbed";

export interface ShowcaseVideo {
  id: string;
  title: string;
  start?: number;
}

interface VideoShowcaseProps {
  videos: ShowcaseVideo[];
}

export function VideoShowcase({ videos }: VideoShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const activeVideo = videos[activeIndex];

  if (!activeVideo) return null;

  const scrollThumbnails = (direction: -1 | 1) => {
    sliderRef.current?.scrollBy({ left: direction * 280, behavior: "smooth" });
  };

  return (
    <div className="mx-auto max-w-5xl">
      <VideoEmbed
        key={`${activeVideo.id}-${activeVideo.start ?? 0}`}
        videoId={activeVideo.id}
        title={activeVideo.title}
        start={activeVideo.start}
      />

      <div className="mt-5 grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-2 sm:gap-3">
        <Button
          type="button"
          variant="outline"
          size="icon"
          className="shrink-0 bg-background/60"
          onClick={() => scrollThumbnails(-1)}
          aria-label="Vorherige Videos anzeigen"
        >
          <ChevronLeft />
        </Button>

        <div
          ref={sliderRef}
          className="flex min-w-0 snap-x snap-mandatory gap-3 overflow-x-auto overscroll-x-contain pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {videos.map((video, index) => {
            const active = index === activeIndex;
            return (
              <button
                key={`${video.id}-${video.start ?? 0}`}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`group relative w-40 shrink-0 snap-start overflow-hidden rounded-lg border bg-card text-left transition-colors sm:w-48 ${
                  active ? "border-primary ring-1 ring-primary/40" : "border-border hover:border-primary/50"
                }`}
                aria-pressed={active}
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 grid place-items-center bg-background/20">
                    <span className="grid size-8 place-items-center rounded-full bg-primary text-primary-foreground">
                      <Play className="size-3.5 fill-current" />
                    </span>
                  </span>
                </div>
                <span className="block truncate px-3 py-2 text-xs font-medium text-foreground">
                  {video.title}
                </span>
              </button>
            );
          })}
        </div>

        <Button
          type="button"
          variant="outline"
          size="icon"
          className="shrink-0 bg-background/60"
          onClick={() => scrollThumbnails(1)}
          aria-label="Weitere Videos anzeigen"
        >
          <ChevronRight />
        </Button>
      </div>
    </div>
  );
}