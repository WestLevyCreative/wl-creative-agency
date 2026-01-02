import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { caseStudies } from "@/data/caseStudies";

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="section-padding container-custom">
        <SectionHeading
          eyebrow="Portfolio"
          title="Selected Work"
          description="A preview of the visibility engines, editorial systems, and campaigns we've built across industries."
          align="center"
        />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <article
              key={study.id}
              className="rounded-xl overflow-hidden border border-border bg-card/50 hover:border-primary/60 transition-all duration-300 flex flex-col"
            >
              <div className="aspect-[16/10] bg-muted">
                {study.image ? (
                  <img
                    src={study.image}
                    alt={`${study.title} ${study.titleAccent}`}
                    className="w-full h-full object-cover"
                  />
                ) : null}
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-sm uppercase tracking-wide text-muted-foreground mb-2">
                  {study.category}
                </p>
                <h3 className="text-xl font-semibold text-foreground leading-tight">
                  {study.title} <span className="text-primary">{study.titleAccent}</span>
                </h3>
                <p className="mt-3 text-sm text-muted-foreground flex-1">
                  {study.challenge}
                </p>
                <div className="mt-4 flex items-center justify-between text-sm">
                  <span className="font-medium text-foreground">{study.client}</span>
                  <Link
                    href={`/case-studies/${study.slug}`}
                    className="text-primary hover:underline font-medium"
                  >
                    View case study →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
