import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";

const founders = [
  { name: "Heather Wing", role: "Co-Founder & Senior Publicist", blurb: "Decades of media relationships, narrative shaping, and strategic PR leadership." },
  { name: "Ingrid", role: "Co-Founder & Strategist", blurb: "30+ years of shared creative and global cultural fluency." },
  { name: "Brenden Wing", role: "Technologist & Systems Architect", blurb: "AI and software expertise enabling modern, scalable solutions." },
  { name: "Marklen", role: "Creative Director & Producer", blurb: "Award-winning visual storytelling across decades." },
  { name: "Jill", role: "Brand & Strategy Partner", blurb: "Strategic partnership with Heather since the 1990s." },
  { name: "Lindsay Staloff", role: "Production & Location Expert", blurb: "High-impact commercial and film environments since the late 1990s." },
];

export const metadata = {
  title: "Meet The Team | West Levy Creative",
  description: "Meet the collective of specialists behind West Levy Creative.",
};

export default function MeetTheTeamPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="section-padding container-custom space-y-6">
        <SectionHeading
          title="Meet The Team"
          description="A collective of specialists — no handoffs, no templates."
          align="center"
          splitTitle={true}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {founders.map((person) => (
            <div key={person.name} className="p-4 rounded-xl border border-border bg-card/50 transition duration-300 hover:border-primary/60">
              <div className="aspect-[4/5] rounded-lg overflow-hidden bg-muted mb-3">
                <Image
                  src="/team/heather-wing.jpg"
                  alt={person.name}
                  width={600}
                  height={750}
                  className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition duration-500"
                />
              </div>
              <p className="text-sm font-semibold text-foreground">{person.name}</p>
              <p className="text-xs uppercase tracking-wide text-muted-foreground">{person.role}</p>
              <p className="text-sm text-muted-foreground mt-2">{person.blurb}</p>
            </div>
          ))}
        </div>

        <div className="pt-10 flex justify-center">
          <Link
            href="/services?utm_source=meet-team&utm_medium=cta&utm_campaign=team_cta"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition shadow-lg"
          >
            View Pricing
          </Link>
        </div>
      </section>
    </main>
  );
}
