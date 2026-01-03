import { SectionHeading } from "@/components/SectionHeading";
import { ArrowRight, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const pillars = [
  { title: "Strategic Storytelling", description: "Narratives that resonate, drive authority, and unlock access." },
  { title: "Press-Ready Content", description: "Editorial precision with creative excellence for every placement." },
  { title: "Guaranteed Visibility", description: "Proven placement across global stages and publications." },
  { title: "Targeted Outreach", description: "Relationships with the audiences and editors that matter." },
  { title: "Performance Optimization", description: "Iterative, data-driven refinement for compounding impact." },
  { title: "Founder-Led Authority", description: "Building the personal brand alongside the business brand." },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative py-24 md:py-32 border-b border-border overflow-hidden">
        <div className="absolute inset-0 gradient-glow opacity-40" />
        <div className="container-custom relative z-10 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">About</p>
          <h1 className="font-h1 text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            We Are <span className="text-primary">West Levy</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            A creative agency for those who lead with purpose. We build visibility engines that turn credibility into
            cultural momentum.
          </p>
        </div>
      </section>

      {/* Founder story */}
      <section className="section-padding bg-background">
        <div className="container-custom grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="order-2 lg:order-1 space-y-6">
            <SectionHeading
              eyebrow="We Are West Levy"
              title="Creative Agency"
              description="Co-founded by Heather Wing, a strategist recognized among the Top Women in PR and featured in Entrepreneur, West Levy Creative exists at the intersection of art, analytics, and advocacy."
            />
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Heather&apos;s career began under the leadership of media visionaries Barry Diller and Dara
                Khosrowshahi at USA Networks — grounding her in strategic planning, digital transformation, and
                narrative-driven growth. That foundation informs how we architect stories, relationships, and
                reputation for brands that move culture.
              </p>
              <p>
                Today our team unites strategists, journalists, designers, and digital innovators to deliver
                purpose-driven visibility, high-impact storytelling, and consistent media momentum across international
                markets.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-primary px-5 py-2.5 font-medium text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Talk with us <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+13074199230"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-muted-foreground hover:border-primary/60 hover:text-foreground transition-colors"
              >
                <Phone className="w-4 h-4" /> +1 (307) 419-9230
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="relative aspect-[4/5] rounded-2xl border border-border overflow-hidden shadow-2xl bg-muted">
                <Image
                  src="/team/heather-wing.jpg"
                  alt="Heather Wing"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 420px, 90vw"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-gradient-to-br from-primary/25 to-accent/25 rounded-2xl blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="section-padding bg-card/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-h2 text-3xl md:text-4xl font-bold">
              What We <span className="text-gradient">Do</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-3xl mx-auto">
              Strategic storytelling, press-ready content, and guaranteed visibility built for brands shaping culture.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="p-6 rounded-xl border border-border bg-background hover:border-primary/60 transition-all duration-300"
              >
                <h3 className="font-semibold text-lg mb-2 text-foreground">{pillar.title}</h3>
                <p className="text-sm text-muted-foreground">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
