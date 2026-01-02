import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface CarouselAgent {
  id: string;
  slug: string;
  first_name: string;
  last_name: string;
  role_title: string | null;
  media: { url: string; type: string; is_primary?: boolean; sort_order?: number }[];
}

interface Props {
  agents: CarouselAgent[];
  loading?: boolean;
  error?: string | null;
}

export function TeamCarousel({ agents, loading, error }: Props) {
  const [viewportRef, embla] = useEmblaCarousel({
    align: "start",
    loop: true,
    skipSnaps: false,
    slidesToScroll: 1,
  });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!embla) return;
    const update = () => {
      setCanScrollPrev(embla.canScrollPrev());
      setCanScrollNext(embla.canScrollNext());
    };
    embla.on("select", update);
    update();
    return () => {
      embla.off("select", update);
    };
  }, [embla]);

  const pickImage = (media?: { url: string; type: string; is_primary?: boolean; sort_order?: number }[]) => {
    if (!media || media.length === 0) return null;

    // Filter for portrait type images only
    const portraits = media.filter(m => m.type === 'portrait');
    if (portraits.length === 0) return null;

    // Sort by primary first, then sort_order
    const sorted = [...portraits].sort((a, b) => {
      const primaryA = a.is_primary ? 0 : 1;
      const primaryB = b.is_primary ? 0 : 1;
      const orderA = a.sort_order ?? 0;
      const orderB = b.sort_order ?? 0;
      return primaryA - primaryB || orderA - orderB;
    });
    return sorted[0]?.url || null;
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-end gap-2 mb-4">
        <Button
          variant="outline"
          size="icon"
          className="h-10 w-10 rounded-full border-border"
          onClick={() => embla?.scrollPrev()}
          disabled={!canScrollPrev}
          aria-label="Previous team member"
        >
          <ArrowLeft className="w-4 h-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="h-10 w-10 rounded-full border-border"
          onClick={() => embla?.scrollNext()}
          disabled={!canScrollNext}
          aria-label="Next team member"
        >
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>

      <div className="overflow-hidden" ref={viewportRef}>
        <div className="flex gap-4">
          {loading &&
            Array.from({ length: 4 }).map((_, idx) => (
              <div
                key={idx}
                className="min-w-[260px] sm:min-w-[300px] lg:min-w-[340px] p-4 rounded-xl border border-border bg-card animate-pulse space-y-3"
              >
                <div className="aspect-[3/4] rounded-lg bg-muted" />
                <div className="h-4 w-3/4 bg-muted rounded" />
                <div className="h-3 w-1/2 bg-muted rounded" />
              </div>
            ))}

          {!loading && error && (
            <div className="p-4 text-destructive text-sm">
              Unable to load agents right now.
            </div>
          )}

          {!loading && !error && agents.length === 0 && (
            <div className="p-4 text-muted-foreground text-sm">
              Agent profiles will appear here once published.
            </div>
          )}

          {!loading &&
            !error &&
            agents.map((agent, index) => {
              const image = pickImage(agent.media);
              return (
                <Link
                  key={agent.id}
                  href={`/team/${agent.slug}`}
                  className="min-w-[260px] sm:min-w-[300px] lg:min-w-[340px] group"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <div className="relative aspect-[3/4] overflow-hidden rounded-xl mb-4 card-interactive border border-border">
                    {image ? (
                      <img
                        src={image}
                        alt={`${agent.first_name} ${agent.last_name}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground">
                        <User className="w-8 h-8" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
                    <div className="absolute inset-0 flex items-end p-4">
                      <span className="inline-flex items-center gap-2 text-sm text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                        View Profile <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {agent.first_name} {agent.last_name}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">{agent.role_title || "Agent"}</p>
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
}
