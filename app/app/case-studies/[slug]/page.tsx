import Image from "next/image";
import { notFound } from "next/navigation";
import { SectionHeading } from "@/components/SectionHeading";
import { getCaseStudy } from "@/data/caseStudies";

type Props = {
  params: { slug: string };
};

export function generateMetadata({ params }: Props) {
  const study = getCaseStudy(params.slug);
  if (!study) return {};
  return {
    title: `${study.title} ${study.titleAccent} | West Levy Creative`,
    description: study.challenge,
  };
}

export default function CaseStudyDetailPage({ params }: Props) {
  const study = getCaseStudy(params.slug);
  if (!study) return notFound();

  return (
    <main className="min-h-screen bg-background">
      <section className="section-padding container-custom space-y-10">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="space-y-4">
            <SectionHeading
              eyebrow={study.category}
              title={study.title}
              titleAccent={study.titleAccent}
              description={study.client}
            />
            <p className="text-muted-foreground text-lg leading-relaxed">{study.challenge}</p>
            <div className="space-y-3 text-muted-foreground leading-relaxed">
              <p className="font-semibold text-foreground">Solution</p>
              <p>{study.solution}</p>
            </div>
            <div>
              <p className="font-semibold text-foreground mb-2">Services</p>
              <div className="flex flex-wrap gap-2">
                {study.services.map((service) => (
                  <span
                    key={service}
                    className="px-3 py-1 rounded-full border border-border text-sm text-muted-foreground"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border bg-muted">
              {study.image && (
                <Image
                  src={study.image}
                  alt={`${study.title} ${study.titleAccent}`}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 720px, 100vw"
                  priority
                />
              )}
            </div>
            {study.results && study.results.length > 0 && (
              <div className="grid sm:grid-cols-2 gap-4">
                {study.results.map((result) => (
                  <div
                    key={result.label}
                    className="p-4 rounded-xl border border-border bg-card/50 flex flex-col gap-1"
                  >
                    <span className="text-sm text-muted-foreground">{result.label}</span>
                    <span className="text-2xl font-semibold text-foreground">
                      {result.value}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
