"use client";

import { useState } from "react";
import { Hero } from "@/components/home/Hero";
import { FounderSection } from "@/components/home/FounderSection";
import { HomeSections } from "@/components/home/HomeSections";
import OurProcess from "@/components/home/OurProcess";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PackageCards } from "@/components/packages/PackageCards";
import { PricingPeriodToggle, type PricingPeriod } from "@/components/packages/PricingPeriodToggle";

export default function Home() {
  const [pricingPeriod, setPricingPeriod] = useState<PricingPeriod>("monthly");

  return (
    <main className="min-h-screen">
      <Hero />
      <FounderSection />
      <HomeSections />

      {/* Packages Section */}
      <section id="packages" className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Signature Partnerships"
            title="Choose Your"
            titleAccent="Path"
            align="center"
            className="mb-8"
          />
          <PricingPeriodToggle period={pricingPeriod} onPeriodChange={setPricingPeriod} />
          <PackageCards period={pricingPeriod} />
        </div>
      </section>

      <OurProcess />
    </main>
  );
}
