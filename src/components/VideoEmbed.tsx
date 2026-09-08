import { useState } from "react";
import { Play } from "lucide-react";

interface VideoEmbedProps {
  videoId: string;
  title?: string;
}

export function VideoEmbed({ videoId, title = "Showreel" }: VideoEmbedProps) {
  const [loaded, setLoaded] = useState(false);
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-border bg-card shadow-xl">
      {!loaded ? (
        <button
          type="button"
          onClick={() => setLoaded(true)}
          className="group relative block h-full w-full"
          aria-label={`Video abspielen: ${title}`}
        >
          <img
            src={thumbnailUrl}
            alt={title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors group-hover:bg-black/40">
            <div className="flex size-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform group-hover:scale-110 sm:size-20">
              <Play className="size-7 fill-current sm:size-8" />
            </div>
          </div>
        </button>
      ) : (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="h-full w-full"
        />
      )}
    </div>
  );
}
