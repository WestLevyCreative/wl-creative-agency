import { SectionHeading } from "@/components/SectionHeading";
import { Card } from "@/components/ui/card";

export const metadata = {
  title: "Billing | Client Portal",
  description: "View invoices, subscriptions, and payment history.",
};

const invoices = [
  { id: "INV-001", amount: "$4,500", status: "paid", date: "2025-12-01" },
  { id: "INV-002", amount: "$4,500", status: "due", date: "2026-01-01" },
];

export default function ClientBillingPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="section-padding container-custom space-y-6">
        <SectionHeading
          eyebrow="Client Portal"
          title="Billing"
          description="Invoices, subscriptions, and payment history."
        />

        <Card className="p-6 space-y-3">
          <h3 className="text-sm font-semibold text-foreground">Invoices</h3>
          <div className="space-y-3">
            {invoices.map((inv) => (
              <div key={inv.id} className="flex items-center justify-between p-3 rounded-lg border border-border bg-card/40">
                <div>
                  <p className="text-sm font-medium text-foreground">{inv.id}</p>
                  <p className="text-xs text-muted-foreground">{inv.date}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold text-foreground">{inv.amount}</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${inv.status === "paid" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`}>
                    {inv.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </section>
    </main>
  );
}
