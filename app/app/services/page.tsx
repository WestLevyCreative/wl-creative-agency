"use client";

import { useRef, useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PackageCards } from "@/components/packages/PackageCards";
import { PricingPeriodToggle, type PricingPeriod } from "@/components/packages/PricingPeriodToggle";
import { Button } from "@/components/ui/button";
import { ChevronDown, Palette, Camera, PenTool, Share2, Megaphone, Users, Code, Cpu, Globe, Layers } from "lucide-react";

export default function Services() {
  const [pricingPeriod, setPricingPeriod] = useState<PricingPeriod>("monthly");
  const gridRef = useRef<HTMLDivElement | null>(null);

  const scrollToGrid = () => {
    gridRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const services = {
    creative: [
      {
        icon: <Palette className="w-6 h-6" />,
        title: "Brand Identity & Strategy",
        tagline: "Define Your Essence",
        description: "Visual identity, messaging architecture, and positioning built for authority.",
      },
      {
        icon: <Camera className="w-6 h-6" />,
        title: "Content Creation",
        tagline: "Captivate Your Audience",
        description: "Editorial-grade photography, video, and copy that tell your story with intent.",
      },
      {
        icon: <PenTool className="w-6 h-6" />,
        title: "Graphic Design",
        tagline: "Visual Excellence",
        description: "Campaign and collateral design that elevates every touchpoint.",
      },
    ],
    marketing: [
      {
        icon: <Share2 className="w-6 h-6" />,
        title: "Social Media",
        tagline: "Own Your Channels",
        description: "Channel strategy, community management, and growth optimization.",
      },
      {
        icon: <Megaphone className="w-6 h-6" />,
        title: "PR & Media",
        tagline: "Amplify Your Voice",
        description: "Press coverage, media outreach, and reputation management to position you as a leader.",
      },
      {
        icon: <Users className="w-6 h-6" />,
        title: "Influencer Partnerships",
        tagline: "Extend Your Reach",
        description: "Strategic collaborations with aligned creators and tastemakers.",
      },
    ],
    technology: [
      {
        icon: <Code className="w-6 h-6" />,
        title: "Web Experiences",
        tagline: "Digital Presence",
        description: "High-performing sites and experiences built for storytelling and conversion.",
      },
      {
        icon: <Cpu className="w-6 h-6" />,
        title: "AI Integrations",
        tagline: "Intelligent Systems",
        description: "Automations and intelligence that streamline campaigns and insights.",
      },
      {
        icon: <Globe className="w-6 h-6" />,
        title: "Global Infrastructure",
        tagline: "Scale with Confidence",
        description: "Resilient stacks and delivery systems to support growth and reach.",
      },
      {
        icon: <Layers className="w-6 h-6" />,
        title: "SaaS & Platforms",
        tagline: "Productize Your Vision",
        description: "Concept-to-launch product support for recurring revenue models.",
      },
    ],
  };

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/15 via-background to-background border-b border-border">
        <div className="absolute inset-0 gradient-glow opacity-30" />
        <div className="container-custom relative z-10 py-16 md:py-24 text-center space-y-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/40 text-primary text-sm font-medium">
            Full-Spectrum Solutions
          </span>
          <h1 className="font-h1 text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Where Vision Meets Execution
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Creative, PR, and technology solutions for brands that lead. From story to system, we build what moves you forward.
          </p>
          <div className="flex justify-center gap-3">
            <Button onClick={scrollToGrid} className="rounded-full">
              Explore Services <ChevronDown className="w-4 h-4 ml-2" />
            </Button>
            <Button asChild variant="outline" className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <a href="#packages">View Packages</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section ref={gridRef} className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-3">
              What We Do
            </p>
            <h2 className="font-h2 text-3xl md:text-4xl font-bold">
              Comprehensive Capabilities
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Three pillars of expertise working together to transform your vision into reality.
            </p>
          </div>

          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-3">
                <span className="text-primary font-mono">01</span> Creative & Brand
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {services.creative.map((service) => (
                  <article
                    key={service.title}
                    className="p-6 rounded-xl border border-border bg-card/50 hover:border-primary/50 transition-all"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                      {service.icon}
                    </div>
                    <h4 className="text-lg font-semibold text-foreground">{service.title}</h4>
                    <p className="text-sm text-accent font-medium mb-2">{service.tagline}</p>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </article>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-3">
                <span className="text-primary font-mono">02</span> Marketing & PR
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {services.marketing.map((service) => (
                  <article
                    key={service.title}
                    className="p-6 rounded-xl border border-border bg-card/50 hover:border-primary/50 transition-all"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                      {service.icon}
                    </div>
                    <h4 className="text-lg font-semibold text-foreground">{service.title}</h4>
                    <p className="text-sm text-accent font-medium mb-2">{service.tagline}</p>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </article>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-3">
                <span className="text-primary font-mono">03</span> Technology Solutions
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.technology.map((service) => (
                  <article
                    key={service.title}
                    className="p-6 rounded-xl border border-border bg-card/50 hover:border-primary/50 transition-all"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                      {service.icon}
                    </div>
                    <h4 className="text-lg font-semibold text-foreground">{service.title}</h4>
                    <p className="text-sm text-accent font-medium mb-2">{service.tagline}</p>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="packages" className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Choose Your"
            title="Signature"
            titleAccent="Partnerships"
            description="Choose your commitment level: Pay monthly for flexibility, 6 months for 5% savings, or yearly for maximum value with 10% off."
            align="center"
            className="mb-8"
          />

          <PricingPeriodToggle period={pricingPeriod} onPeriodChange={setPricingPeriod} />

          <PackageCards period={pricingPeriod} />
        </div>
      </section>
    </>
  );
}
