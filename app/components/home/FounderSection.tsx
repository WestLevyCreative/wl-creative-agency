import Link from "next/link";

export function FounderSection() {
  return (
    <section
      className="section-padding relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #121827 0%, #000000 100%)"
      }}
    >
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start md:items-center">
          {/* Image Column */}
          <div className="relative order-1">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-border shadow-2xl animate-image-reveal">
              <img
                src="/images/hero-heather.jpg"
                alt="Heather Wing"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-3xl -z-10" />
          </div>

          {/* Copy Column */}
          <div className="order-2 md:order-2">
            {/* Small heading */}
            <p className="text-sm font-medium tracking-wider text-muted-foreground mb-6 uppercase animate-fade-up">
              We Are West Levy
            </p>

            {/* Large heading */}
            <h2 className="font-heading font-bold mb-8 leading-none animate-fade-up delay-100" style={{ fontSize: '2.5rem' }}>
              CREATIVE<span className="text-primary">AGENCY</span>
            </h2>

            {/* Tagline */}
            <p className="font-medium mb-12 leading-relaxed uppercase tracking-wide animate-fade-up delay-200" style={{ fontSize: '1.2rem' }}>
              <span style={{ color: '#FEFCD7' }}>A Creative Agency</span><br />
              <span className="text-foreground">For Those Who Lead With Purpose.</span>
            </p>

            {/* Body copy */}
            <div className="space-y-6 text-base text-muted-foreground leading-relaxed mb-12 animate-fade-up delay-300">
              <p>
                Co-founded by <strong className="text-foreground">Heather Wing</strong>, a strategist recognized among the
                <a
                  href="https://everything-pr.com/women-in-public-relations/#ez-toc-container"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Top Women in PR
                </a>{" "}
                and a Entrepreneur-featured communications leader, West Levy Creative exists at the
                intersection of art, analytics, and advocacy.
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
                {` at USA Networks back in 1999 — an experience that grounded her in strategic planning, digital transformation, and the power of narrative-driven growth.`}
              </p>
            </div>

            {/* Down the rabbit hole section */}
            <div className="animate-fade-up delay-400">
              <h3 className="text-xl font-heading font-bold uppercase tracking-wider mb-6">
                Down The Rabbit Hole
              </h3>
              <div className="flex items-center gap-6 flex-wrap">
                <Link
                  href="/the-story"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-full border-2 font-medium hover:bg-[#FEFCD7] hover:text-background transition-all duration-300"
                  style={{ borderColor: '#FEFCD7', color: '#FEFCD7' }}
                >
                  The Story
                </Link>
                <a
                  href="tel:+13074199230"
                  className="inline-flex items-center gap-3 transition-colors hover:opacity-80"
                  style={{ color: '#FEFCD7' }}
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  <span className="font-medium">+1 (307) 419-9230</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
