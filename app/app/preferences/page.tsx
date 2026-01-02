import { SectionHeading } from "@/components/SectionHeading";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Communication Preferences | West Levy Creative",
  description: "Manage your marketing and cookie preferences.",
};

const preferences = [
  {
    id: "marketing-email",
    label: "Marketing emails",
    description: "News, insights, and updates about services. You can opt out at any time.",
  },
  {
    id: "product-updates",
    label: "Service and feature updates",
    description: "Occasional notices about new offerings or changes to existing services.",
  },
  {
    id: "events",
    label: "Events and webinars",
    description: "Invitations to events, webinars, and workshops.",
  },
  {
    id: "analytics-cookies",
    label: "Analytics cookies",
    description: "Allow non-essential analytics cookies to help us improve performance.",
  },
];

export default function PreferencesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="section-padding container-custom space-y-8">
        <SectionHeading
          eyebrow="West Levy Creative Agency"
          title="Communication Preferences"
          description="Opt in or out of marketing communications and non-essential cookies."
        />

        <p className="text-sm text-muted-foreground">
          Note: These toggles are currently informational only. Connect them to your email/CMS consent system and cookie manager when ready.
        </p>

        <Card className="p-6 space-y-4">
          {preferences.map((pref) => (
            <div
              key={pref.id}
              className="flex items-start justify-between gap-4 border-b last:border-0 border-border pb-4 last:pb-0"
            >
              <div>
                <Label htmlFor={pref.id} className="text-foreground">
                  {pref.label}
                </Label>
                <p className="text-sm text-muted-foreground">{pref.description}</p>
              </div>
              <Switch id={pref.id} />
            </div>
          ))}
        </Card>

        <div className="flex gap-3">
          <Button type="button">Save Preferences</Button>
          <Button type="button" variant="outline">
            Opt Out of All Marketing
          </Button>
        </div>
      </section>
    </main>
  );
}
