import { SectionHeading } from "@/components/SectionHeading";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export const metadata = {
  title: "Onboarding | Agent Portal",
  description: "Complete your onboarding steps.",
};

const steps = [
  "Upload headshot and banner",
  "Complete profile bio",
  "Connect calendly/availability",
  "Review media kit",
  "Verify payment details",
];

export default function PortalOnboardingPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="section-padding container-custom space-y-6">
        <SectionHeading
          eyebrow="Agent Portal"
          title="Onboarding"
          description="Complete your onboarding steps to activate your workspace."
        />

        <Card className="p-6 space-y-3">
          {steps.map((step) => (
            <label key={step} className="flex items-start gap-3 text-sm text-foreground">
              <Checkbox />
              <span className="leading-tight text-muted-foreground">{step}</span>
            </label>
          ))}
        </Card>
      </section>
    </main>
  );
}
