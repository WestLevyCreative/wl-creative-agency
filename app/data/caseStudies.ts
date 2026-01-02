export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  titleAccent: string;
  category: string;
  client: string;
  services: string[];
  duration: string;
  challenge: string;
  solution: string;
  results: {
    label: string;
    value: string;
    highlight?: boolean;
  }[];
  image: string;
  featured?: boolean;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "industry-leader-pr",
    slug: "industry-leader-national-recognition",
    title: "From Obscurity to",
    titleAccent: "National Recognition",
    category: "Media & Entertainment",
    client: "Confidential Industry Leader",
    services: ["PR Strategy", "Brand Positioning", "Executive Branding", "SEO-Backed Press"],
    duration: "Six Months",
    challenge:
      "A fast-growing company in a competitive industry had zero media presence, low SEO visibility, and limited digital authority. Investors and clients hesitated to trust them due to their lack of public credibility.",
    solution:
      "We crafted a data-driven PR and branding strategy: targeted media outreach, top-tier features to elevate reputation and rankings, executive LinkedIn branding to position leadership as thought leaders, SEO-backed press releases to amplify presence, and influencer partnerships to boost trust.",
    results: [
      { label: "Brand Visibility", value: "400%", highlight: true },
      { label: "Traffic Growth", value: "200%" },
      { label: "Investor Confidence", value: "↑", highlight: true },
      { label: "Search Presence", value: "Top-ranking", highlight: true },
    ],
    image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800",
    featured: true,
  },
  {
    id: "real-id-campaign",
    slug: "us-real-id-awareness",
    title: "Statewide Real ID",
    titleAccent: "Awareness Campaign",
    category: "Government & Public Sector",
    client: "State Department of Motor Vehicles",
    services: ["National Marketing", "Brand Strategy", "Public Awareness"],
    duration: "Twelve Months",
    challenge: "The Real ID deadline was approaching and public awareness remained critically low. Complex compliance requirements created confusion and resistance among residents.",
    solution: "A multi-channel campaign simplified the message and created urgency through strategic timing. We partnered with local influencers and community leaders to build trust and drive action.",
    results: [
      { label: "Brand Visibility", value: "31%", highlight: true },
      { label: "Compliance Rate", value: "85%" },
      { label: "Media Impressions", value: "50M+" },
      { label: "Campaign ROI", value: "12x" },
    ],
    image: "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=800",
  },
  {
    id: "wellness-brand",
    slug: "wellness-lifestyle-brand",
    title: "Wellness",
    titleAccent: "Lifestyle Brand",
    category: "Health & Wellness",
    client: "Emerging Wellness Brand",
    services: ["Brand Development", "Digital Strategy", "Influencer Partnerships"],
    duration: "Eight Months",
    challenge: "A new wellness brand needed to establish credibility in a saturated market dominated by established players with massive marketing budgets.",
    solution: "We positioned the brand as a scientific authority rather than another lifestyle product. Strategic podcast placements and expert endorsements built trust before the product launch.",
    results: [
      { label: "Launch Sales", value: "$2M+" },
      { label: "Social Following", value: "150K" },
      { label: "Media Features", value: "45+" },
      { label: "Repeat Customers", value: "68%", highlight: true },
    ],
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800",
  },
];

export const categories = [
  "All",
  "Media & Entertainment",
  "Government & Public Sector",
  "Health & Wellness",
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find(study => study.slug === slug);
}
