import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { teamMembers } from "@/data/team";
import { ArrowRight, Phone } from "lucide-react";
import { ConsistentTeamSlider } from "@/components/home/ConsistentTeamSlider";
import { transformTeamMemberToTeamMember } from "@/lib/teamData";

export const metadata = {
  title: "Who We Are | West Levy Creative",
  description: "Meet the West Levy Creative team shaping culture through strategic storytelling.",
};

const pillars = [
  { title: "Strategic Storytelling", description: "Narratives that resonate and drive action." },
  { title: "Press-Ready Content", description: "Editorial precision meets creative excellence." },
  { title: "Guaranteed Media Visibility", description: "Proven placement across global stages." },
  { title: "Narrative Development", description: "Building your brand’s authentic voice." },
  { title: "Targeted Outreach", description: "Connecting with the audiences that matter." },
  { title: "Performance Optimization", description: "Data-driven refinement for maximum impact." },
];

export default function WhoWeArePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/10 via-background to-background border-b border-border">
        <div className="container-custom py-20 md:py-28 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
            We Are West Levy
          </p>
          <h1 className="font-h1 text-4xl md:text-5xl lg:text-6xl font-bold">
            We Are <span className="text-primary">West Levy</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            A creative agency for those who lead with purpose.
          </p>
        </div>
      </section>

      {/* Founder feature */}
      <section className="section-padding container-custom">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-border shadow-2xl bg-muted">
              <Image
                src="/team/heather-wing.jpg"
                alt="Heather Wing"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 480px, 90vw"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-52 h-52 bg-gradient-to-br from-primary/25 to-accent/25 rounded-2xl blur-3xl -z-10" />
          </div>

          <div className="space-y-6">
            <p className="text-sm font-medium tracking-wider text-muted-foreground uppercase">
              We Are West Levy
            </p>
            <h2 className="font-h2 text-3xl md:text-4xl font-bold leading-tight">
              CREATIVE<span className="text-primary">AGENCY</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Co-founded by <strong className="text-foreground">Heather Wing</strong>, a strategist recognized
                among the{" "}
                <a
                  className="text-primary underline"
                  href="https://everything-pr.com/women-in-public-relations/#ez-toc-container"
                  target="_blank"
                  rel="noreferrer"
                >
                  Top Women in PR
                </a>{" "}
                and an Entrepreneur-featured communications leader, West Levy Creative exists at the intersection
                of art, analytics, and advocacy.
              </p>
              <p>
                Heather’s career began under the leadership of media visionaries{" "}
                <a
                  className="text-primary underline"
                  href="https://www.iac.com/leadership/barry-diller"
                  target="_blank"
                  rel="noreferrer"
                >
                  Barry Diller
                </a>{" "}
                and{" "}
                <a
                  className="text-primary underline"
                  href="https://www.uber.com/us/en/about/leadership/dara-khosrowshahi/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Dara Khosrowshahi
                </a>{" "}
                at USA Networks — grounding her in strategic planning, digital transformation, and narrative-driven
                growth.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-primary px-5 py-2.5 font-medium text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                The Story <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+13074199230"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-muted-foreground hover:border-primary/60 hover:text-foreground transition-colors"
              >
                <Phone className="w-4 h-4" /> +1 (307) 419-9230
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="section-padding bg-card/20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-h2 font-bold">
              What We <span className="text-primary">Do</span>
            </h3>
            <p className="mt-4 text-muted-foreground max-w-3xl mx-auto">
              West Levy Creative transforms brands through strategic storytelling and guaranteed media visibility.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="p-4 rounded-xl border border-border bg-background hover:border-primary/60 transition-colors"
              >
                <h4 className="text-base font-semibold text-foreground">{pillar.title}</h4>
                <p className="text-sm text-muted-foreground mt-1">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team intro */}
      <section className="section-padding container-custom">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h3 className="text-3xl md:text-4xl font-h2 font-bold">
            Our <span className="text-primary">Team</span>
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            The West Levy Creative team comprises global strategists, journalists, designers, and digital innovators
            who unite editorial precision with creative intuition. They deliver purpose-driven visibility,
            high-impact storytelling, and consistent media momentum for brands shaping culture across international markets.
          </p>
        </div>

        <div className="mt-12">
          <ConsistentTeamSlider 
            teamMembers={teamMembers.map(transformTeamMemberToTeamMember)}
            title="OUR TEAM"
            description="The West Levy Creative team comprises global strategists, journalists, designers, and digital innovators who unite editorial precision with creative intuition. They deliver purpose-driven visibility, high-impact storytelling, and consistent media momentum for brands shaping culture across international markets."
            ctaText="Meet the Team"
            ctaLink="/who-we-are"
          />
        </div>
      </section>
    </main>
  );
}
