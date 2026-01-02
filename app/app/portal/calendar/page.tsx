import { SectionHeading } from "@/components/SectionHeading";

export const metadata = {
  title: "Calendar | Agent Portal",
  description: "View campaign timelines and key dates.",
};

export default function PortalCalendarPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="section-padding container-custom">
        <SectionHeading
          eyebrow="Agent Portal"
          title="Calendar"
          description="Campaign timelines and key dates."
        />
        <div className="mt-6 p-4 rounded-xl border border-border bg-card/50 text-muted-foreground">
          Calendar integration coming soon.
        </div>
      </section>
    </main>
  );
}
