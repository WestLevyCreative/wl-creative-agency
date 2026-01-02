import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata = {
  title: "Payment Success | West Levy Creative",
  description: "Your checkout was successful. Access your portal.",
};

export default function CheckoutSuccessPage() {
  return (
    <main className="min-h-screen bg-background flex items-center">
      <section className="container-custom w-full">
        <div className="max-w-3xl">
          <SectionHeading
            eyebrow="Checkout"
            title="Payment Successful"
            description="Thank you for partnering with West Levy Creative. Your account is ready."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/portal"
              className="inline-flex items-center gap-2 rounded-full border border-primary px-5 py-2.5 font-medium text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Go to Portal
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-muted-foreground hover:border-primary/60 hover:text-foreground transition-colors"
            >
              Need help?
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
