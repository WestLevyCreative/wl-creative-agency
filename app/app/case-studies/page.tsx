import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { caseStudies, categories } from "@/data/caseStudies";

export const metadata = {
  title: "Case Studies | West Levy Creative",
  description: "Results-driven campaigns and visibility systems across industries.",
};

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="section-padding container-custom">
        <SectionHeading
          eyebrow="Case Studies"
          title="Proven Results"
          description="Visibility engines built for media, government, wellness, and beyond."
          align="center"
        />

        <div className="flex flex-wrap justify-center gap-2 mt-8">
          {categories.map((category) => (
            <span
              key={category}
              className="px-3 py-1 rounded-full border border-border text-sm text-muted-foreground"
            >
              {category}
            </span>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <article
              key={study.id}
              className="rounded-xl overflow-hidden border border-border bg-card/50 hover:border-primary/60 transition-colors flex flex-col"
            >
              <div className="aspect-[16/10] bg-muted">
                {study.image && (
                  <img
                    src={study.image}
                    alt={`${study.title} ${study.titleAccent}`}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <div className="p-6 space-y-3 flex-1 flex flex-col">
                <p className="text-xs uppercase tracking-wide text-muted-foreground">
                  {study.category}
                </p>
                <h3 className="text-xl font-semibold text-foreground leading-tight">
                  {study.title} <span className="text-primary">{study.titleAccent}</span>
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-3">{study.challenge}</p>
                <div className="mt-auto pt-2">
                  <Link
                    href={`/case-studies/${study.slug}`}
                    className="text-primary hover:underline font-medium text-sm"
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
