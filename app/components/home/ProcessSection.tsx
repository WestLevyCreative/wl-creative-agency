import { SectionHeading } from "@/components/ui/SectionHeading";

export function ProcessSection() {
  return (
    <section className="section-padding bg-card">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Images Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] overflow-hidden rounded-lg">
                <img
                  src="https://westlevy.com/wp-content/uploads/2025/12/AdobeStock_1678473046-scaled.jpeg"
                  alt="Creative process"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="aspect-[3/4] overflow-hidden rounded-lg mt-8">
                <img
                  src="https://westlevy.com/wp-content/uploads/2025/12/AdobeStock_1695495273-1-scaled.jpeg"
                  alt="Brand strategy session"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            {/* Accent Glow */}
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
          </div>

          {/* Content */}
          <div>
            <SectionHeading
              eyebrow="Focused on your brand"
              title="Our"
              titleAccent="Process"
            />
            
            <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
              West Levy Creative transforms brands through strategic storytelling, 
              press-ready content, and guaranteed media visibility — blending narrative 
              development, targeted outreach, and performance optimization to build 
              sustained authority, cultural relevance, and measurable influence 
              across global stages.
            </p>

            {/* Philosophy */}
            <div className="mt-12 p-6 border border-border rounded-lg bg-background/50">
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                Connection Is the Catalyst.
              </h3>
              <p className="text-secondary font-medium mb-4">
                The Power of Collective Creativity.
              </p>
              <p className="text-muted-foreground">
                We believe influence thrives in connection — between creators and audiences, 
                brands and culture, story and strategy. Every campaign we build is an 
                ecosystem: human-centered, data-informed, and impact-driven.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
