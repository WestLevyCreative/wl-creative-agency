import Image from "next/image";
import { SectionHeading } from "@/components/SectionHeading";
import { ParallaxGraphics } from "@/components/story/ParallaxGraphics";
import Link from "next/link";

export const metadata = {
  title: "The Story | West Levy Creative",
  description: "How West Levy Creative Agency was founded and why our collective approach is different.",
};

const founders = [
  { name: "Heather Wing", role: "Co-Founder & Senior Publicist", blurb: "Decades of media relationships, narrative shaping, and strategic PR leadership." },
  { name: "Ingrid", role: "Co-Founder & Strategist", blurb: "30+ years of shared creative and global cultural fluency." },
  { name: "Brenden Wing", role: "Technologist & Systems Architect", blurb: "AI and software expertise enabling modern, scalable solutions." },
  { name: "Marklen", role: "Creative Director & Producer", blurb: "Award-winning visual storytelling across decades." },
  { name: "Jill", role: "Brand & Strategy Partner", blurb: "Strategic partnership with Heather since the 1990s." },
  { name: "Lindsay Staloff", role: "Production & Location Expert", blurb: "High-impact commercial and film environments since the late 1990s." },
];

const copy = [
  "West Levy Creative Agency was born from something rare in today’s market: decades of trust, complementary expertise, and shared standards.",
  "Co-Founded by Heather Wing, West Levy traces its roots back to 2010, when Heather and Ingrid launched West Levy PR after years of building national media relationships and shaping narratives for leaders, founders, and brands. What began as a NYC based public relations firm evolved naturally — not by expansion for expansion’s sake, but by alignment.",
  "Over the years, Heather brought together the people she trusted most — collaborators whose expertise was forged long before West Levy became a creative agency.",
  "Ingrid, a lifelong collaborator and strategist with over 30 years of shared creative and global cultural fluency.",
  "Brenden Wing, a technologist and systems architect whose work in AI and software enables modern, scalable solutions.",
  "Marklen, an award winning creative director and producer whose visual storytelling spans decades.",
  "Jill, a brand and strategy partner whose relationship with Heather began in the 1990s.",
  "Lindsay Staloff, a production and location expert known for shaping high-impact commercial and film environments since the late 1990s.",
  "Together, this founding team formed West Levy Creative Agency — not as a traditional agency, but as a collective of specialists.",
  "We are not built on junior teams, handoffs, or templates.",
  "We are built on deep expertise, direct collaboration, and customization.",
  "Every client’s needs are different. Some require press and visibility. Others need brand refinement, content production, influencer strategy, or custom AI systems. Many need a combination — and some will grow into needs they don’t yet anticipate.",
  "West Levy is designed to grow with our clients.",
  "Whether working with an individual, a startup, or an established company seeking reinvention, we assemble the right blend of strategy, creativity, and technology — without forcing unnecessary services or inflated structures.",
  "The result is a creative agency that adapts as your goals evolve, delivering tailored solutions that meet you where you are and scale responsibly as you grow.",
  "That is the West Levy difference. This is the West Levy standard.",
  "And it’s why our clients don’t just launch — they last.",
];

export default function OurStoryPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Banner */}
      <section className="relative h-[740px] overflow-hidden">
        <Image
          src="/banners/The-Story-bg.jpg"
          alt="West Levy"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-background" />

        <ParallaxGraphics />

        <div className="absolute inset-0 flex items-center">
          <div className="container-custom text-white space-y-4">
            <p className="text-sm uppercase tracking-[0.2em] text-primary">A collective built on trust & wonder.</p>
               <h1 className="font-h1 text-4xl md:text-6xl font-bold max-w-3xl leading-tight">
              <span className="text-white">The</span>{" "}
              <span className="text-primary">Story</span>
            </h1>
            <div className="space-y-2 text-left">
              <p className="text-[1.4rem] text-white">A collective built on trust, complementary expertise, and shared standards.</p>
              <p className="text-[1rem] text-gray-200">From a NYC public relations firm to a global creative agency — shaped by alignment, not expansion for its own sake.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding container-custom space-y-16">
        {/* Chapter 1 */}
        <div className="space-y-6">
          <SectionHeading
            eyebrow="Chapter 01"
            title="The Genesis"
            description="Born from decades of trust, complementary expertise, and shared standards."
            align="left"
          />
          <div className="space-y-4 text-muted-foreground leading-relaxed max-w-4xl">
            {copy.slice(0, 4).map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* Chapter 2 */}
        <div className="space-y-6">
          <SectionHeading
            eyebrow="Chapter 02"
            title="Our Philosophy"
            description="Curiosity, wonder, and rigor guide everything we build."
            align="left"
          />
          <div className="space-y-4 text-muted-foreground leading-relaxed max-w-4xl">
            {copy.slice(4, 9).map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* The Curiosities */}
        <div className="space-y-6">
          <SectionHeading
            eyebrow="Chapter 03"
            title="The Curiosities"
            description="Selected work that shows how strategy, storytelling, and technology come together."
            align="center"
          />
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { src: "/images/case-study-hero.jpg", text: "National recognition for an industry leader through PR, executive branding, and SEO-backed press." },
              { src: "/images/podcast-case.jpg", text: "Podcast storytelling elevated with media placements and influencer partnerships." },
              { src: "/images/stock-urban.jpg", text: "Urban campaign visuals driving brand visibility in competitive markets." },
              { src: "/images/stock-office.jpg", text: "Enterprise-ready narratives and content systems built for scale." },
            ].map((item) => (
              <div key={item.src} className="group relative overflow-hidden rounded-2xl border border-border bg-card/50 shadow-lg aspect-[4/3]">
                <Image src={item.src} alt="Work" fill className="object-cover" />
                <div className="absolute inset-0 flex">
                  <div className="w-1/2 bg-background/80 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
                  <div className="w-1/2 bg-background/80 translate-x-[100%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-center px-6">
                  <p className="text-sm text-muted-foreground">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Meet the Dreamers */}
        <div className="space-y-6 py-16">
          <SectionHeading
            eyebrow="Chapter 04"
            title="Meet the Dreamers"
            description="A collective of specialists — no handoffs, no templates."
            align="center"
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
        </div>
      </section>

      {/* Rabbit hole CTA */}
      <section className="py-16 bg-gradient-to-b from-background via-card to-background">
        <div className="container-custom flex flex-col items-center text-center space-y-6">
          <div className="relative w-56 h-56 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-primary/10 blur-2xl" />
            <Image
              src="/graphics/aiw/watch.png"
              alt="Pocket Watch"
              width={180}
              height={180}
              className="absolute inset-0 m-auto opacity-90"
            />
            <div className="relative z-10 w-40 h-40 rounded-full border border-primary/50 bg-background/80 backdrop-blur flex items-center justify-center shadow-2xl">
              <p className="text-base font-medium text-foreground px-4">
                Ready to start your own story?
              </p>
            </div>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition shadow-lg"
          >
            Enter the Rabbit Hole
          </Link>
        </div>
      </section>
    </main>
  );
}
