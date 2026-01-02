import { notFound } from "next/navigation";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { getTeamMember } from "@/data/team";

type Props = {
  params: { member: string };
};

export function generateMetadata({ params }: Props) {
  const member = getTeamMember(params.member);
  if (!member) return {};
  return {
    title: `${member.name} | West Levy Creative`,
    description: member.shortBio,
  };
}

export default function TeamMemberPage({ params }: Props) {
  const member = getTeamMember(params.member);
  if (!member) return notFound();

  return (
    <main className="min-h-screen bg-background">
      <section className="section-padding container-custom">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Team Member"
              title={member.name}
              description={member.role}
            />
            <p className="text-muted-foreground text-lg">{member.shortBio}</p>
            <div className="flex gap-3 flex-wrap">
              <Link
                href="/who-we-are"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-muted-foreground hover:border-primary/60 hover:text-foreground transition-colors"
              >
                ← Back to team
              </Link>
              {member.portfolio?.url && (
                <a
                  href={member.portfolio.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-primary px-5 py-2.5 font-medium text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {member.portfolio.label || "View portfolio"}
                </a>
              )}
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              {member.fullBio.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-border bg-muted">
              {member.image && (
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            {member.images && member.images.length > 0 && (
              <div className="grid sm:grid-cols-2 gap-4">
                {member.images.map((img, idx) => (
                  <div key={idx} className="aspect-[4/3] rounded-xl overflow-hidden border border-border bg-muted">
                    <img src={img} alt={`${member.name} ${idx + 1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {member.sections && member.sections.length > 0 && (
          <div className="mt-14 grid md:grid-cols-2 gap-6">
            {member.sections.map((section, idx) => (
              <div key={idx} className="p-6 rounded-xl border border-border bg-card/50">
                <p className="text-xs uppercase tracking-wide text-muted-foreground mb-2">
                  {section.subtitle}
                </p>
                <h3 className="text-lg font-semibold text-foreground mb-3">{section.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
