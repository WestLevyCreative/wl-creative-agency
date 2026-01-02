import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AboutSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <SectionHeading
              eyebrow="We Are West Levy"
              title="Creative"
              titleAccent="Agency"
              subtitle="A creative agency for those who lead with purpose."
            />
            
            <div className="mt-8 space-y-6 text-muted-foreground">
              <p>
                Co-founded by <span className="text-foreground font-medium">Heather Wing</span>, 
                a strategist recognized among the{" "}
                <a
                  href="https://everything-pr.com/women-in-public-relations/#ez-toc-container"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Top Women in PR
                </a>{" "}
                and an <span className="text-foreground font-medium">Entrepreneur-featured communications leader</span>, 
                West Levy Creative exists at the intersection of{" "}
                <span className="text-foreground font-medium">art</span>,{" "}
                <span className="text-foreground font-medium">analytics</span>, and{" "}
                <span className="text-foreground font-medium">advocacy</span>.
              </p>
              <p>
                {`Heather's career began under the leadership of media visionaries `}
                <a
                  href="https://www.iac.com/leadership/barry-diller"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Barry Diller
                </a>
                {` and `}
                <a
                  href="https://www.uber.com/us/en/about/leadership/dara-khosrowshahi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Dara Khosrowshahi
                </a>
                {` at USA Networks back in 1999 — an experience that grounded her in `}
                <span className="text-foreground font-medium">strategic planning</span>
                {`, `}
                <span className="text-foreground font-medium">digital transformation</span>
                {`, and the power of `}
                <span className="text-foreground font-medium">narrative-driven growth</span>.
              </p>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Link href="/the-story">Down the rabbit hole</Link>
              </Button>
              <a 
                href="tel:+13074199230" 
                className="flex items-center gap-2 text-secondary font-medium hover:text-secondary/80 transition-colors"
              >
                <span className="text-lg">📞</span>
                +1 (307) 419-9230
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
              <img
                src="https://westlevy.com/wp-content/uploads/2025/12/HeatherProfilePhoto-Italy-Office3-5-with-makeup.jpg"
                alt="Heather Wing, Co-Founder of West Levy Creative"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border-2 border-primary/30 rounded-lg -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
