import { SectionHeading } from "@/components/SectionHeading";
import { Card } from "@/components/ui/card";
import { statusColors } from "@/components/client/status";

export const metadata = {
  title: "Inquiries | Agent Portal",
  description: "Track and manage inbound inquiries.",
};

const inquiries = [
  { id: "inc-101", name: "Studio Launch Campaign", type: "Partnership Opportunity", status: "active", email: "founder@example.com" },
  { id: "inc-102", name: "Press & Media", type: "Press & Media", status: "pending", email: "editor@example.com" },
  { id: "inc-103", name: "Hire Us", type: "Hire Us", status: "in_progress", email: "ceo@example.com" },
];

export default function PortalInquiriesPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="section-padding container-custom space-y-6">
        <SectionHeading
          eyebrow="Agent Portal"
          title="Inquiries"
          description="Track and manage inbound inquiries."
        />
        <Card className="p-6 space-y-3">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {inquiries.map((inq) => (
              <div key={inq.id} className="p-3 rounded-lg border border-border bg-card/40 space-y-2">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-sm font-semibold text-foreground">{inq.name}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[inq.status] || "bg-slate-100 text-slate-800"}`}>
                    {inq.status}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">{inq.type}</p>
                <p className="text-xs text-muted-foreground">{inq.email}</p>
              </div>
            ))}
          </div>
        </Card>
      </section>
    </main>
  );
}
