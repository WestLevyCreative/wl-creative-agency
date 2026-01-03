import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAgentProfile, agentProfiles } from "@/data/agentProfiles";
import { ChevronRight, Mail, Phone, Globe, Award, Clock, Sparkles } from "lucide-react";

type Props = {
  params: { member: string };
};

export function generateMetadata({ params }: Props) {
  const agent = getAgentProfile(params.member);
  if (!agent) return {};
  return {
    title: `${agent.name} | West Levy Creative`,
    description: agent.shortBio,
  };
}

export default function AgentProfilePage({ params }: Props) {
  const agent = getAgentProfile(params.member);
  if (!agent) return notFound();

  const firstName = agent.name.split(" ")[0];
  const related = (agent.relatedSlugs || [])
    .map((slug) => agentProfiles.find((p) => p.slug === slug))
    .filter(Boolean);

  return (
    <main className="min-h-screen bg-[#05080c] text-foreground">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b1c1f] via-[#0d1b24] to-[#0d0e13]" />
        <div className="absolute inset-0 opacity-30">
          <div className="gradient-glow w-full h-full" />
        </div>
        <div className="container-custom relative py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Agent Profile
              </div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                {agent.name} <span className="text-gradient">{agent.title}</span>
              </h1>
              <p className="text-muted-foreground text-lg">{agent.tagline}</p>
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-muted-foreground">
                  <Award className="w-4 h-4 text-primary" /> {agent.location}
                </span>
                {agent.contact.timezone && (
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 text-primary" /> {agent.contact.timezone}
                  </span>
                )}
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/who-we-are"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-muted-foreground hover:border-primary/60 hover:text-foreground transition-colors"
                >
                  ← Back to team
                </Link>
                {agent.contact.email && (
                  <a
                    href={`mailto:${agent.contact.email}`}
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-500 to-yellow-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-teal-500/25"
                  >
                    {agent.contact.cta || "Request this agent"} <ChevronRight className="w-4 h-4" />
                  </a>
                )}
              </div>
              <div className="flex flex-wrap gap-4">
                {agent.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="min-w-[140px] rounded-xl border border-white/10 bg-white/5 p-4 text-center"
                  >
                    <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-xs uppercase tracking-wide text-muted-foreground mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/15 bg-muted shadow-2xl">
                <Image
                  src={agent.heroImage}
                  alt={agent.name}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 560px, 90vw"
                  priority
                />
              </div>
              {agent.headshot && (
                <div className="absolute -bottom-6 -right-6 w-36 h-36 rounded-2xl overflow-hidden border-4 border-background shadow-xl relative">
                  <Image
                    src={agent.headshot}
                    alt={`${agent.name} headshot`}
                    fill
                    className="object-cover"
                    sizes="144px"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <div className="container-custom space-y-16 py-16">
        {/* Expertise */}
        <section className="space-y-4">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Expertise</p>
          <div className="flex flex-wrap gap-3">
            {agent.expertise.map((item) => (
              <span
                key={item}
                className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-muted-foreground"
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        {/* Bio */}
        <section className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-4 text-muted-foreground leading-relaxed">
            <h2 className="text-2xl font-bold text-foreground">About {firstName}</h2>
            <p className="text-lg text-foreground/90">{agent.shortBio}</p>
            {agent.longBio.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
          <div className="space-y-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 space-y-3">
              <h3 className="text-lg font-semibold text-foreground">Contact & Availability</h3>
              {agent.contact.email && (
                <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="w-4 h-4 text-primary" /> {agent.contact.email}
                </div>
              )}
              {agent.contact.phone && (
                <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone className="w-4 h-4 text-primary" /> {agent.contact.phone}
                </div>
              )}
              {agent.contact.timezone && (
                <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4 text-primary" /> {agent.contact.timezone}
                </div>
              )}
              {agent.socials && agent.socials.length > 0 && (
                <div className="pt-2">
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">Links</p>
                  <div className="flex flex-wrap gap-2">
                    {agent.socials.map((social) => (
                      <a
                        key={social.url}
                        href={social.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-muted-foreground hover:text-foreground"
                      >
                        {social.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="space-y-4">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Services</p>
          <div className="grid md:grid-cols-2 gap-4">
            {agent.services.map((service) => (
              <div key={service} className="p-5 rounded-2xl border border-white/10 bg-white/5">
                <div className="flex items-start gap-3">
                  <Sparkles className="w-4 h-4 text-primary mt-1" />
                  <p className="text-sm text-foreground">{service}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Highlights */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Highlights</p>
              <h3 className="text-2xl font-bold text-foreground">Recent impact</h3>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {agent.highlights.map((item) => (
              <div key={item.title} className="p-5 rounded-2xl border border-white/10 bg-white/5">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{item.title}</p>
                <div className="text-3xl font-bold text-foreground mt-2">{item.metric}</div>
                <p className="text-sm text-muted-foreground mt-2">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        {agent.testimonials.length > 0 && (
          <section className="space-y-6">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Testimonials</p>
              <h3 className="text-2xl font-bold text-foreground">Trusted by partners</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {agent.testimonials.map((t, idx) => (
                <div key={idx} className="p-5 rounded-2xl border border-white/10 bg-white/5 space-y-3">
                  <p className="text-sm text-foreground leading-relaxed">“{t.quote}”</p>
                  <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {t.name} — {t.title}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Related agents */}
        {related.length > 0 && (
          <section className="space-y-4">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Related</p>
            <div className="grid md:grid-cols-3 gap-4">
              {related.map((rel) => (
                <Link
                  key={rel!.slug}
                  href={`/who-we-are/${rel!.slug}`}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:-translate-y-1 transition"
                >
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/10 bg-muted">
                      {rel!.headshot || rel!.heroImage ? (
                        <Image
                          src={rel!.headshot || rel!.heroImage}
                          alt={rel!.name}
                          fill
                          className="object-cover"
                          sizes="48px"
                        />
                      ) : null}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{rel!.name}</p>
                      <p className="text-xs text-muted-foreground">{rel!.title}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-3">{rel!.tagline}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
