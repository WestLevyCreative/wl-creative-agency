import { SectionHeading } from "@/components/SectionHeading";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export const metadata = {
  title: "Settings | Agent Portal",
  description: "Configure notifications and preferences.",
};

const settings = [
  { id: "email-notifications", label: "Email notifications", description: "Get email updates for new inquiries and campaign changes." },
  { id: "weekly-digest", label: "Weekly digest", description: "Receive a weekly summary of activity and deadlines." },
  { id: "two-factor", label: "Two-factor auth", description: "Secure your account with 2FA." },
];

export default function PortalSettingsPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="section-padding container-custom space-y-6">
        <SectionHeading
          eyebrow="Agent Portal"
          title="Settings"
          description="Configure notifications, security, and preferences."
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
