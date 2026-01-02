import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Briefcase, Globe2, HeartHandshake, Users, Zap, Crown } from "lucide-react";

export const metadata = {
  title: "Careers | West Levy Creative",
  description: "Join the team shaping culture, media, and brand visibility.",
};

const benefits = [
  { title: "Remote-First Culture", icon: Globe2, description: "Work anywhere without sacrificing impact." },
  { title: "Growth Opportunities", icon: Zap, description: "Stretch projects, mentorship, and clear pathways." },
  { title: "Health & Wellness", icon: HeartHandshake, description: "Supportive benefits for mind and body." },
  { title: "Collaborative Team", icon: Users, description: "Cross-discipline teams who care about craft." },
  { title: "Creative Freedom", icon: Crown, description: "Ideas move fast; experimentation is encouraged." },
  { title: "Competitive Compensation", icon: Briefcase, description: "Fair pay, performance incentives, and perks." },
];

const openings = [
  {
    title: "Senior Account Executive (Remote) - 3 positions",
    location: "Remote (U.S. & International Applicants Welcome)",
    type: "Full-Time",
    department: "Client Partnerships & Strategy",
    reportsTo: "Director of Accounts / Senior Leadership",
    about:
      "West Levy Creative is a global creative agency operating at the intersection of public relations, storytelling, and strategic visibility. We partner with founders, executives, nonprofits, and legacy brands to shape influence, drive credibility, and create cultural momentum across international markets.",
    role:
      "We are seeking a Senior Account Executive to lead client relationships with confidence, clarity, and strategic depth. You will serve as a primary point of contact for select client accounts, overseeing campaigns from concept to completion while ensuring excellence across deliverables, timelines, and relationships. This fully remote role is built for professionals who operate with autonomy, accountability, and discretion.",
    responsibilities: [
      "Serve as the day-to-day lead for assigned client accounts, maintaining strong, trusted relationships",
      "Manage PR, media, and visibility campaigns from strategy through execution",
      "Coordinate with internal teams (strategy, media, creative, digital) to ensure seamless delivery",
      "Develop and oversee timelines, briefs, reporting, and campaign updates",
      "Pitch story angles and collaborate on media outreach strategies",
      "Monitor coverage, results, and performance metrics, translating insights into client value",
      "Anticipate client needs and proactively recommend strategic opportunities",
      "Uphold West Levy Creative’s standards for excellence, professionalism, and impact",
    ],
    qualifications: [
      "3+ years of experience in public relations, communications, or agency account management",
      "Proven experience managing multiple client accounts simultaneously",
      "Strong understanding of media relations, storytelling, and brand positioning",
      "Exceptional written and verbal communication skills",
      "Highly organized, detail-oriented, and deadline-driven",
      "Comfortable working independently in a remote environment",
      "Experience with founders, executives, or high-profile clients preferred",
      "International or cross-market experience is a plus",
    ],
    offers: [
      "Fully remote work with flexible structure",
      "Opportunity to work with purpose-driven brands and global clients",
      "A collaborative, high-caliber team culture rooted in trust and excellence",
      "Competitive compensation commensurate with experience",
      "Room for growth, leadership, and long-term partnership within the agency",
    ],
    apply:
      "If you are a strategic thinker, strong communicator, and relationship builder who thrives in meaningful, high-impact work, send your resume and a brief introduction to careers@westlevy.com.",
  },
];

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/15 via-background to-background border-b border-border">
        <div className="container-custom py-16 md:py-24 text-center space-y-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/40 text-primary text-sm font-medium">
            Join Our Team
          </span>
          <h1 className="font-h1 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Build the Future of <span className="text-primary">Creative Storytelling</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            We’re looking for passionate creatives, strategists, and builders who want to make work that matters.
          </p>
          <div className="flex justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-primary px-5 py-2.5 font-medium text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              View Openings <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding container-custom">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-h2 font-bold">
            Why <span className="text-primary">West Levy?</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-3xl mx-auto">
            A nimble, mighty team punching above our weight class. We’ve built and scaled programs for startups and Fortune 500 brands alike.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {benefits.map((item) => (
            <Card key={item.title} className="p-4 bg-card/60 border border-border hover:border-primary/60 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <item.icon className="w-5 h-5 text-primary" />
                <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Openings */}
      <section className="section-padding container-custom">
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-foreground">Current Openings</h3>
          <p className="text-sm text-muted-foreground">
            We’re growing fast and always looking for exceptional talent.
          </p>
        </div>
        <div className="space-y-4">
          {openings.map((role) => (
            <Card key={role.title} className="p-6 space-y-3 bg-card/60 border border-border">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                <div>
                  <h4 className="text-lg font-semibold text-foreground">{role.title}</h4>
                  <p className="text-sm text-muted-foreground">{role.location}</p>
                  <p className="text-sm text-muted-foreground">{role.type} · {role.department}</p>
                  <p className="text-sm text-muted-foreground">Reports to: {role.reportsTo}</p>
                </div>
                <Button asChild variant="outline" className="shrink-0">
                  <a href="mailto:careers@westlevy.com?subject=Application%3A%20Senior%20Account%20Executive">Apply now</a>
                </Button>
              </div>

              <div className="space-y-3 text-sm text-muted-foreground">
                <p className="text-foreground font-medium">About West Levy Creative</p>
                <p>{role.about}</p>
                <p className="text-foreground font-medium">The Role</p>
                <p>{role.role}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-foreground">Key Responsibilities</p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    {role.responsibilities.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-foreground">Qualifications</p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    {role.qualifications.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-sm font-semibold text-foreground">What We Offer</p>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  {role.offers.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="text-sm text-muted-foreground">
                <p className="text-foreground font-medium mb-1">How to Apply</p>
                <p>{role.apply}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Culture */}
      <section className="section-padding bg-card/15">
        <div className="container-custom grid lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-foreground">Our Culture</h3>
            <p className="text-muted-foreground leading-relaxed">
              We believe the best work happens when people feel empowered, trusted, and supported. We value clarity, candor, and momentum.
              We collaborate across disciplines to deliver exceptional work and real outcomes for our partners.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              If you want to grow in a place that moves fast, experiments often, and celebrates thoughtful execution, you’ll fit right in.
            </p>
          </div>
          <Card className="p-4 bg-card/60 border border-border">
            <p className="text-sm text-muted-foreground italic">
              “Joining West Levy was the best career decision I’ve ever made. The autonomy to lead projects, the trust to make bold creative decisions, and the support of a stellar team have made this a dream role.”
            </p>
            <p className="mt-3 text-sm font-medium text-foreground">— Senior Strategist, West Levy</p>
          </Card>
        </div>
      </section>

      {/* Don’t see role */}
      <section className="section-padding container-custom text-center space-y-4">
        <h3 className="text-2xl font-bold text-foreground">Don’t See Your Role?</h3>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          We’re always interested in meeting exceptional talent, even if we don’t have an open position that matches your expertise. Send your portfolio and let’s start a conversation.
        </p>
        <div className="flex justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-primary px-5 py-2.5 font-medium text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-b from-accent/20 via-primary/20 to-background">
        <div className="container-custom py-12 text-center space-y-4">
          <h3 className="text-2xl font-bold text-foreground">Ready to Make an Impact?</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join a team that’s redefining what a creative agency can be. Let’s build something extraordinary together.
          </p>
          <Button asChild className="rounded-full px-6">
            <Link href="/contact">Apply Now</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
