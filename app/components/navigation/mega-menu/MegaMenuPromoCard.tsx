"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInScale } from "./animations";
import {
  PromoContent,
  CTAContent,
  CaseStudyContent,
  QuickActionContent,
} from "./types";
import { MegaMenuTestimonial } from "./MegaMenuTestimonial";
import { MegaMenuStats } from "./MegaMenuStats";
import { MegaMenuQuickAction } from "./MegaMenuQuickAction";

// CTA Promo Component
function MegaMenuCTA({ heading, description, cta, secondaryCTA }: CTAContent) {
  return (
    <motion.div
      className="p-6 rounded-xl border border-border/50 bg-card/30 mega-menu-glass space-y-4"
      variants={fadeInScale}
      initial="initial"
      animate="animate"
    >
      <div>
        <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-2">
          {heading}
        </h4>
        <p className="text-sm text-foreground mb-4">{description}</p>
      </div>

      <div className="space-y-2">
        <MegaMenuQuickAction {...cta} variant={cta.variant || "outline"} />
        {secondaryCTA && (
          <MegaMenuQuickAction
            {...secondaryCTA}
            variant={secondaryCTA.variant || "default"}
          />
        )}
      </div>
    </motion.div>
  );
}

// Case Study Promo Component
function MegaMenuCaseStudy({
  title,
  metric,
  client,
  image,
  cta,
}: CaseStudyContent) {
  return (
    <motion.div
      className="p-6 rounded-xl border border-border/50 bg-card/30 mega-menu-glass space-y-4"
      variants={fadeInScale}
      initial="initial"
      animate="animate"
    >
      <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-wider">
        Featured Success
      </h4>

      {image && (
        <div className="relative w-full h-24 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 360px, 90vw"
          />
        </div>
      )}

      <div>
        <p className="text-2xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent mb-1">
          {metric}
        </p>
        <p className="text-xs text-muted-foreground mb-2">{client}</p>
        <p className="text-sm font-semibold">{title}</p>
      </div>

      <MegaMenuQuickAction {...cta} variant={cta.variant || "outline"} />
    </motion.div>
  );
}

// Quick Action Promo Component
function MegaMenuQuickActionCard({
  heading,
  items,
  cta,
}: QuickActionContent) {
  return (
    <motion.div
      className="p-6 rounded-xl border border-border/50 bg-card/30 mega-menu-glass space-y-4"
      variants={fadeInScale}
      initial="initial"
      animate="animate"
    >
      <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-wider">
        {heading}
      </h4>

      <div className="space-y-3">
        {items.map((item, index) => (
          <div key={index} className="flex items-start gap-3">
            {item.icon && (
              <item.icon className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
            )}
            <div className="flex-1 min-w-0">
              <p className="text-xs text-muted-foreground">{item.label}</p>
              <p className="text-sm font-medium truncate">{item.value}</p>
            </div>
          </div>
        ))}
      </div>

      {cta && (
        <div className="pt-2">
          <MegaMenuQuickAction {...cta} variant={cta.variant || "default"} />
        </div>
      )}
    </motion.div>
  );
}

// Main Promo Card Component (Router)
export function MegaMenuPromoCard({ type, content }: PromoContent) {
  switch (type) {
    case "testimonial":
      return <MegaMenuTestimonial {...content} />;
    case "stats":
      return <MegaMenuStats {...content} />;
    case "cta":
      return <MegaMenuCTA {...content} />;
    case "caseStudy":
      return <MegaMenuCaseStudy {...content} />;
    case "quickAction":
      return <MegaMenuQuickActionCard {...content} />;
    default:
      return null;
  }
}
