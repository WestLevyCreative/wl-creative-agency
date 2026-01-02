import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useAgents } from "@/hooks/useAgents";
import { TeamCarousel } from "./TeamCarousel";

export function TeamPreview() {
  const { agents, loading, error } = useAgents();
  const featured = agents.filter((agent) => agent.is_featured);
  const toDisplay = featured.length > 0 ? featured : agents.slice(0, 4);

  return (
    <section className="section-padding bg-[#141414] relative overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-center">
          {/* Left Section - 60% */}
          <div className="lg:col-span-7 relative z-10">
            <div className="max-w-xl">
              <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase">
                West Levy Creative Agency
              </p>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-6">
                <span className="text-white">Our </span>
                <span style={{ color: '#17cbcb' }}>
                  Team
                </span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                The West Levy Creative team brings together global strategists, journalists, designers, and digital innovators who unite editorial precision with creative intuition, delivering purpose-driven visibility, high-impact storytelling, and consistent media momentum for brands shaping culture across international markets.
              </p>
              <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Link href="/who-we-are">
                  Meet the Team
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Section - 40% (slides under on desktop) */}
          <div className="lg:col-span-5 lg:-ml-12 relative">
            <TeamCarousel agents={toDisplay} loading={loading} error={error} />
          </div>
        </div>
      </div>
    </section>
  );
}
