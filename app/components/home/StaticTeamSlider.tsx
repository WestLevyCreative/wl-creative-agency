"use client";

import { useRef } from "react";
import { teamMembers } from "@/data/team";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function StaticTeamSlider() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scrollBy = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;
    const amount = direction === "left" ? -320 : 320;
    container.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div className="flex justify-end gap-2 mb-4">
        <button
          type="button"
          onClick={() => scrollBy("left")}
          className="h-10 w-10 rounded-full border border-border bg-card hover:border-primary/60 transition-colors flex items-center justify-center"
          aria-label="Previous"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          type="button"
          onClick={() => scrollBy("right")}
          className="h-10 w-10 rounded-full border border-border bg-card hover:border-primary/60 transition-colors flex items-center justify-center"
          aria-label="Next"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory"
      >
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="snap-start min-w-[260px] max-w-[280px] flex-shrink-0 rounded-xl border border-border bg-card/50 overflow-hidden hover:border-primary/60 transition-colors"
          >
            <div className="aspect-[4/5] bg-muted">
              {member.image && (
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            <div className="p-4 space-y-2">
              <p className="text-xs uppercase tracking-wide text-muted-foreground">Featured Agent</p>
              <h4 className="text-lg font-semibold text-foreground">{member.name}</h4>
              <p className="text-sm text-muted-foreground">{member.role}</p>
              <p className="text-sm text-muted-foreground line-clamp-3">{member.shortBio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
