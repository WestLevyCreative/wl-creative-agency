import { SectionHeading } from "@/components/SectionHeading";
import { Mail, Phone, MessageSquare } from "lucide-react";

export const metadata = {
  title: "Support | West Levy Creative",
  description: "Get help with partnerships, billing, or technical issues.",
};

const categories = [
  { title: "Partnerships", description: "Questions about services, campaigns, or scopes." },
  { title: "Billing & Invoices", description: "Payment questions, receipts, or subscription details." },
  { title: "Technical", description: "Portal access, login issues, or bugs to report." },
];

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="section-padding container-custom">
        <SectionHeading
          eyebrow="Support"
          title="How Can We Help?"
          description="We’re here for partners, agents, and collaborators. Reach out and we’ll respond within one business day."
          align="center"
        />

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {categories.map((item) => (
            <div key={item.title} className="p-6 rounded-xl border border-border bg-card/50">
              <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="flex items-center gap-3 p-4 rounded-lg border border-border bg-card/50">
            <Mail className="w-5 h-5 text-primary" />
            <a href="mailto:hello@westlevy.com" className="font-medium text-foreground hover:underline">
              hello@westlevy.com
            </a>
          </div>
          <div className="flex items-center gap-3 p-4 rounded-lg border border-border bg-card/50">
            <Phone className="w-5 h-5 text-primary" />
            <a href="tel:+13074199230" className="font-medium text-foreground hover:underline">
              +1 (307) 419-9230
            </a>
          </div>
          <div className="flex items-center gap-3 p-4 rounded-lg border border-border bg-card/50">
            <MessageSquare className="w-5 h-5 text-primary" />
            <a href="/contact" className="font-medium text-foreground hover:underline">
              Contact Form
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
