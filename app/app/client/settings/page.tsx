import { SectionHeading } from "@/components/SectionHeading";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export const metadata = {
  title: "Settings | Client Portal",
  description: "Manage account preferences and notifications.",
};

const settings = [
  { id: "billing", label: "Billing updates", description: "Send email receipts and invoice reminders." },
  { id: "campaign", label: "Campaign updates", description: "Notify me when milestones change." },
  { id: "weekly", label: "Weekly summary", description: "Receive weekly performance summaries." },
];

export default function ClientSettingsPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="section-padding container-custom space-y-6">
        <SectionHeading
          eyebrow="Client Portal"
          title="Settings"
          description="Manage account preferences and notifications."
        />

        <Card className="p-6 space-y-4">
          {settings.map((setting) => (
            <div key={setting.id} className="flex items-start justify-between gap-4 border-b last:border-0 border-border pb-4 last:pb-0">
              <div>
                <Label className="text-foreground">{setting.label}</Label>
                <p className="text-sm text-muted-foreground">{setting.description}</p>
              </div>
              <Switch id={setting.id} />
            </div>
          ))}
        </Card>
      </section>
    </main>
  );
}
