import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background flex items-center">
      <section className="container-custom w-full">
        <div className="max-w-2xl">
          <SectionHeading
            eyebrow="404"
            title="Page Not Found"
            description="The page you’re looking for doesn’t exist or has been moved."
          />
          <div className="mt-6 flex gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-primary px-5 py-2.5 font-medium text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Go Home
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-muted-foreground hover:border-primary/60 hover:text-foreground transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
