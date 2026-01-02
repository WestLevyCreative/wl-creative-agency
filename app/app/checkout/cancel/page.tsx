import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata = {
  title: "Payment Cancelled | West Levy Creative",
  description: "Your checkout was cancelled. You can retry or contact support.",
};

export default function CheckoutCancelPage() {
  return (
    <main className="min-h-screen bg-background flex items-center">
      <section className="container-custom w-full">
        <div className="max-w-3xl">
          <SectionHeading
            eyebrow="Checkout"
            title="Payment Cancelled"
            description="No charges were made. You can restart checkout or reach out if you have questions."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border border-primary px-5 py-2.5 font-medium text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Back to Services
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-muted-foreground hover:border-primary/60 hover:text-foreground transition-colors"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
