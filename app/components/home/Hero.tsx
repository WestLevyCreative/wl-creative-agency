import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";
import { homeCopy } from "@/data/home";

export function Hero() {
  const heroRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    if (typeof window === "undefined" || !heroRef.current) return;

    const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const reduceMotion = reduceMotionQuery.matches;

    const ctx = gsap.context(() => {
      if (reduceMotion) {
        gsap.set(
          [".hero-kicker", ".hero-subhead", ".hero-headline", ".hero-cta", ".hero-scroll"],
          { opacity: 1, x: 0, scale: 1, z: 0 }
        );
        return;
      }

      // Set clean initial states to avoid "stepped" motion
      gsap.set(".hero-headline", {
        opacity: 0,
        scale: 0.965,
        transformPerspective: 1200,
        transformOrigin: "50% 50%",
        z: -120,
      });

      const tl = gsap.timeline({ delay: 0.1 });

      tl.from([".hero-kicker", ".hero-subhead"], {
        x: 72,
        opacity: 0,
        duration: 0.85,
        ease: "power2.out",
        stagger: 0.08,
      });

      tl.to(
        ".hero-headline",
        {
          opacity: 1,
          scale: 1,
          z: 0,
          duration: 1,
          ease: "expo.out",
          transformPerspective: 1200,
          transformOrigin: "50% 50%",
          force3D: true,
          immediateRender: false,
        },
        "-=0.55"
      );

      tl.from(
        [".hero-cta", ".hero-scroll"],
        {
          opacity: 0,
          duration: 0.55,
          ease: "power1.out",
          stagger: 0.1,
        },
        "-=0.35"
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToPackages = () => {
    const element = document.getElementById('packages');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#141414]"
    >
      {/* Editorial Background Image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-image-reveal"
          style={{
            backgroundImage: `url('/images/hero-editorial.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
        <div className="absolute inset-0 gradient-hero opacity-30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center md:text-left">
        <div className="max-w-4xl">
          {/* Lead line */}
          <p className="hero-lead hero-kicker text-muted-foreground mb-3">
            WHERE CREATIVITY
          </p>

          {/* Main Headline with accent on "Identity" */}
          <h1 className="hero-headline font-h1 text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6">
            <span className="text-white">Becomes</span>{" "}
            <span style={{ color: '#17cbcb' }}>Identity</span>
          </h1>

          {/* Subheadline */}
          <h2 className="hero-subhead text-muted-foreground max-w-2xl mb-6">
            {homeCopy.hero.h2}
          </h2>

          {/* Body Paragraph */}
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mb-10">
            {homeCopy.hero.body}
          </p>

          {/* CTA */}
          <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button
              onClick={scrollToPackages}
              className="inline-flex items-center justify-center px-8 py-3 rounded-full border-2 border-primary text-primary font-medium hover:bg-primary hover:text-background transition-all duration-300"
            >
              {homeCopy.hero.ctaLabel}
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hero-scroll absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
