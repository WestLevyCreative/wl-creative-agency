import { SectionHeading } from "@/components/SectionHeading";
import { Card } from "@/components/ui/card";

export const metadata = {
  title: "Portal | West Levy Creative",
  description: "Agent dashboard for visibility, inquiries, and workflows.",
};

const quickLinks = [
  { label: "Profile", href: "/portal/profile" },
  { label: "Settings", href: "/portal/settings" },
  { label: "Inquiries", href: "/portal/inquiries" },
  { label: "Calendar", href: "/portal/calendar" },
  { label: "Onboarding", href: "/portal/onboarding" },
];

const highlights = [
  { label: "Open inquiries", value: "12" },
  { label: "Active campaigns", value: "6" },
  { label: "Pending approvals", value: "3" },
  { label: "Upcoming deadlines", value: "4" },
];

export default function PortalPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="section-padding container-custom space-y-8">
        <SectionHeading
          eyebrow="Agent Portal"
          title="Dashboard"
          description="Your workspace for campaigns, inquiries, and profile updates."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((item) => (
            <Card key={item.label} className="p-4">
              <p className="text-sm text-muted-foreground">{item.label}</p>
              <p className="text-2xl font-semibold text-foreground mt-1">{item.value}</p>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-4">
          <Card className="p-4 lg:col-span-2">
            <h3 className="text-sm font-semibold text-foreground mb-3">Quick Links</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="p-3 rounded-lg border border-border hover:border-primary/60 transition-colors text-sm font-medium text-foreground"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </Card>

          <Card className="p-4">
            <h3 className="text-sm font-semibold text-foreground mb-3">Notes</h3>
            <p className="text-sm text-muted-foreground">
              Wire live data from Supabase once configured. Until then, use this space to outline daily focus,
              upcoming media hits, and follow-ups.
            </p>
          </Card>
        </div>
      </section>
    </main>
  );
}
