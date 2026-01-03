import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

export interface CTAButton {
  text: string;
  href: string;
  variant?: "default" | "outline" | "ghost";
}

export interface FeaturedContent {
  type: "card" | "image" | "stats";
  icon?: LucideIcon;
  image?: string;
  title: string;
  subtitle: string;
  description?: string;
  cta: CTAButton;
  gradient: string;
}

export interface BadgeConfig {
  text: string;
  variant: "popular" | "new" | "hiring" | "beta";
}

export interface MegaMenuLinkItem {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  badge?: BadgeConfig;
  color: string; // Tailwind gradient class
  isPrimary?: boolean;
}

export interface LinkGroup {
  heading?: string;
  links: MegaMenuLinkItem[];
}

export interface TestimonialContent {
  quote: string;
  author: string;
  rating: number;
}

export interface StatsContent {
  stats: Array<{
    value: string;
    label: string;
  }>;
  cta?: CTAButton;
}

export interface CTAContent {
  heading: string;
  description: string;
  cta: CTAButton;
  secondaryCTA?: CTAButton;
}

export interface CaseStudyContent {
  title: string;
  metric: string;
  client: string;
  image?: string;
  cta: CTAButton;
}

export interface QuickActionContent {
  heading: string;
  items: Array<{
    icon?: LucideIcon;
    label: string;
    value: string;
  }>;
  cta?: CTAButton;
}

export type PromoContentType =
  | { type: "testimonial"; content: TestimonialContent }
  | { type: "stats"; content: StatsContent }
  | { type: "cta"; content: CTAContent }
  | { type: "caseStudy"; content: CaseStudyContent }
  | { type: "quickAction"; content: QuickActionContent };

export interface PromoContent extends PromoContentType {}

export interface MegaMenuSection {
  id: string;
  trigger: string;
  width: number; // px
  featured: FeaturedContent;
  links: LinkGroup[];
  promo: PromoContent;
}
