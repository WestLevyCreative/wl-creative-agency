"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { agentProfiles } from "@/data/agentProfiles";

export function StaticTeamSlider() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scrollBy = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;
    const amount = direction === "left" ? -420 : 420;
    container.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <div className="relative">
      {/* Slider */}
      <div className="relative">
          <div className="absolute -left-16 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-2">
            <button
              type="button"
              onClick={() => scrollBy("left")}
              className="h-10 w-10 rounded-full border border-white/10 bg-white/5 hover:border-primary/60 transition-colors flex items-center justify-center"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => scrollBy("right")}
              className="h-10 w-10 rounded-full border border-white/10 bg-white/5 hover:border-primary/60 transition-colors flex items-center justify-center"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent"
          >
            {agentProfiles.map((agent) => (
              <Link
                key={agent.slug}
                href={`/who-we-are/${agent.slug}`}
                className="snap-start relative min-w-[260px] md:min-w-[320px] max-w-[360px] flex-shrink-0 rounded-3xl border border-white/10 bg-[#0b0f17] overflow-hidden hover:border-primary/60 transition-all"
              >
                <div className="relative aspect-[4/5]">
                  {agent.heroImage && (
                    <Image 
                      src={agent.heroImage} 
                      alt={agent.name} 
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 260px, (max-width: 1024px) 320px, 360px"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />

                  {/* Vertical name */}
                  <div className="absolute inset-y-0 -left-8 flex items-center">
                    <div className="rotate-180 [writing-mode:vertical-rl] text-white text-sm tracking-[0.25em] uppercase">
                      {agent.name}
                    </div>
                    <div className="ml-2 w-2 h-2 rounded-full bg-primary" />
                  </div>

                  {/* Info dot */}
                  <div className="absolute bottom-4 right-4 w-9 h-9 rounded-full border border-white/20 bg-black/40 backdrop-blur-sm text-white flex items-center justify-center text-sm">
                    i
                  </div>
                </div>
                <div className="p-4 space-y-2">
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{agent.title}</p>
                  <p className="text-sm text-muted-foreground line-clamp-3">{agent.shortBio}</p>
                  <div className="flex flex-wrap gap-2">
                    {agent.expertise.slice(0, 2).map((item) => (
                      <span
                        key={item}
                        className="text-[11px] px-2 py-1 rounded-full bg-white/5 border border-white/10 text-muted-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
    </div>
  );
}
