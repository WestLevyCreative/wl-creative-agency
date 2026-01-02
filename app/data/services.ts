export interface ServiceDetail {
  id: string;
  name: string;
  shortDescription: string;
  fullDescriptionPath: string;
}

export interface PricingTier {
  id: string;
  name: string;
  tagline: string;
  monthlyPrice: number;
  yearlyPrice: number;
  currency: string;
  stripePriceIds: {
    monthly: string;
    yearly: string;
  };
  description: string;
  features: string[];
  highlighted?: boolean;
}

export const pricingTiers: PricingTier[] = [
  {
    id: "foundation",
    name: "Foundation",
    tagline: "The Launch Experience",
    monthlyPrice: 380, // 5% off base €400
    yearlyPrice: 4320, // 10% off base annual (€400*12 = €4800 → €4320)
    currency: "€",
    stripePriceIds: {
      monthly: "price_1Sjnj3GaFjDjLXLxCT9iEeD0",
      yearly: "price_1SjnjZGaFjDjLXLxjCOTaNk8"
    },
    description: "Entry-level visibility partnership providing foundational PR momentum for early-stage brands and creators.",
    features: [
      "Guaranteed minimum of one podcast or editorial feature per month",
      "One press release (up to 400 words), APA style",
      "Brand story refinement + messaging audit",
      "Basic media list + visibility checklist",
      "Monthly performance snapshot",
      "EPK / Media Kit included (€300 value)",
      "Monthly 45-minute Zoom strategy call with Heather Wing"
    ]
  },
  {
    id: "ascent",
    name: "Ascent",
    tagline: "Visibility Builder",
    monthlyPrice: 570, // 5% off base €600
    yearlyPrice: 6480, // 10% off base annual (€600*12 = €7200 → €6480)
    currency: "€",
    stripePriceIds: {
      monthly: "price_1SjoEUGaFjDjLXLxasWn3SLT",
      yearly: "price_1SjoF1GaFjDjLXLxhEqp7XRV"
    },
    description: "Visibility partnership providing enhanced PR momentum for growing brands and creators.",
    features: [
      "Guaranteed minimum of two podcast or editorial features per month",
      "One custom press release or editorial feature (up to 600 words), SEO-optimised",
      "Refined brand messaging + media angle development",
      "Expanded media list + tracking dashboard",
      "Monthly performance snapshot",
      "EPK / Media Kit included (€300 value)",
      "Monthly 45-minute Zoom strategy call with Heather Wing"
    ]
  },
  {
    id: "apex",
    name: "Apex",
    tagline: "Creative Influence Engine",
    monthlyPrice: 760, // 5% off base €800
    yearlyPrice: 8640, // 10% off base annual (€800*12 = €9600 → €8640)
    currency: "€",
    stripePriceIds: {
      monthly: "price_1SjoFoGaFjDjLXLxUYoYJZN0",
      yearly: "price_1SjoGjGaFjDjLXLxvdrKXZiz"
    },
    description: "Premium visibility partnership for brands ready to scale their influence.",
    highlighted: true,
    features: [
      "Guaranteed minimum of two podcast or editorial bookings per month",
      "One editorial placement or brand mention in a relevant publication",
      "One custom press release or editorial feature (up to 600 words), SEO-optimised",
      "Influencer or podcast collaboration targeting",
      "Monthly performance report + visibility optimisation",
      "EPK / Media Kit included (€300 value)",
      "Bi-weekly 45-minute Zoom strategy calls with Heather Wing"
    ]
  },
  {
    id: "legacy",
    name: "Legacy",
    tagline: "Full Creative Partnership",
    monthlyPrice: 950, // 5% off base €1000
    yearlyPrice: 10800, // 10% off base annual (€1000*12 = €12000 → €10800)
    currency: "€",
    stripePriceIds: {
      monthly: "price_1SjoI0GaFjDjLXLxiKDiFrk7",
      yearly: "price_1SjoIyGaFjDjLXLx6ki7O5im"
    },
    description: "Comprehensive creative partnership for brands committed to long-term visibility and influence.",
    features: [
      "Guaranteed minimum of two podcast or editorial bookings per month",
      "Two guaranteed editorial placements or brand mentions per month",
      "Two custom press releases per month (up to 600 words each), SEO-optimised",
      "Influencer collaborations + creative partnerships",
      "Content strategy + SEO alignment",
      "Dedicated strategist + account support",
      "Comprehensive analytics & performance reporting",
      "EPK / Media Kit included (€300 value)",
      "Bi-weekly 45-minute Zoom strategy calls with Heather Wing"
    ]
  }
];

export const performanceGuarantee = {
  title: "Performance Guarantee",
  description: "West Levy Creative guarantees the podcast bookings and editorial placements specified in each package. If the minimum deliverables are not fulfilled within the billing period, clients receive a 25% refund of that month's fee, automatically processed within ten business days. Refunds apply solely to missed guaranteed deliverables and exclude optional add-ons or client-dependent factors."
};

export const referralProgram = {
  title: "Referral Rewards Program",
  subtitle: "Because good work deserves to be shared",
  description: "When you refer a new client who signs up for any partnership tier, you'll receive an exclusive discount on your next month's fee once their first payment is processed.",
  tiers: [
    { tier: "Foundation & Ascent Clients", discount: "25% off your next month per successful referral" },
    { tier: "Apex & Legacy Clients", discount: "50% off your next month per successful referral" }
  ],
  note: "There's no limit — each referral earns another discount. Referral credits apply to active clients in good standing and are valid for one billing cycle per referred client."
};

export const serviceDetails: ServiceDetail[] = [
  {
    id: "podcast-editorial-features",
    name: "Podcast & Editorial Features",
    shortDescription: "Guaranteed placements on relevant podcasts and editorial publications to amplify your brand voice.",
    fullDescriptionPath: "/services/podcast-editorial-features"
  },
  {
    id: "press-releases",
    name: "Press Releases",
    shortDescription: "Custom-crafted press releases in APA style, SEO-optimized for maximum visibility and distribution.",
    fullDescriptionPath: "/services/press-releases"
  },
  {
    id: "brand-messaging",
    name: "Brand Story & Messaging",
    shortDescription: "Strategic refinement of your brand narrative, messaging audit, and media angle development.",
    fullDescriptionPath: "/services/brand-messaging"
  },
  {
    id: "media-lists",
    name: "Media Lists & Tracking",
    shortDescription: "Curated media contact lists with tracking dashboards to monitor your visibility progress.",
    fullDescriptionPath: "/services/media-lists"
  },
  {
    id: "performance-reporting",
    name: "Performance Reporting",
    shortDescription: "Comprehensive analytics and monthly snapshots showing the impact of your visibility efforts.",
    fullDescriptionPath: "/services/performance-reporting"
  },
  {
    id: "epk-media-kit",
    name: "EPK / Media Kit",
    shortDescription: "Professional electronic press kit with updates based on your prepay term (€300 value included).",
    fullDescriptionPath: "/services/epk-media-kit"
  },
  {
    id: "strategy-calls",
    name: "Strategy Calls with Heather Wing",
    shortDescription: "Regular Zoom sessions with Heather Wing to align on goals, review progress, and optimize strategy.",
    fullDescriptionPath: "/services/strategy-calls"
  },
  {
    id: "editorial-placements",
    name: "Editorial Placements & Brand Mentions",
    shortDescription: "Secured placements and brand mentions in relevant publications to build credibility and reach.",
    fullDescriptionPath: "/services/editorial-placements"
  },
  {
    id: "influencer-collaborations",
    name: "Influencer & Podcast Collaborations",
    shortDescription: "Strategic partnerships with influencers and podcasters aligned with your brand values.",
    fullDescriptionPath: "/services/influencer-collaborations"
  },
  {
    id: "content-strategy",
    name: "Content Strategy & SEO Alignment",
    shortDescription: "Integrated content planning optimized for search engines and aligned with your visibility goals.",
    fullDescriptionPath: "/services/content-strategy"
  },
  {
    id: "dedicated-support",
    name: "Dedicated Strategist & Account Support",
    shortDescription: "Your own dedicated strategist providing personalized support throughout your partnership.",
    fullDescriptionPath: "/services/dedicated-support"
  }
];
