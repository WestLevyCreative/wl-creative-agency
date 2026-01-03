export type AgentHighlight = {
  title: string;
  metric: string;
  description: string;
};

export type AgentTestimonial = {
  quote: string;
  name: string;
  title: string;
};

export type AgentProfile = {
  slug: string;
  name: string;
  title: string;
  location: string;
  heroImage: string;
  headshot?: string;
  tagline: string;
  shortBio: string;
  longBio: string[];
  stats: { label: string; value: string }[];
  expertise: string[];
  services: string[];
  highlights: AgentHighlight[];
  testimonials: AgentTestimonial[];
  contact: {
    email?: string;
    phone?: string;
    timezone?: string;
    cta?: string;
  };
  socials?: { label: string; url: string }[];
  relatedSlugs?: string[];
};

export const agentProfiles: AgentProfile[] = [
  {
    slug: "heather-wing",
    name: "Heather Wing",
    title: "Co-Founder & Senior Publicist",
    location: "Dallas & Monaco",
    heroImage:
      "https://westlevy.com/wp-content/uploads/2025/12/HeatherProfilePhoto-Italy-Office3-5-with-makeup-1.jpg",
    headshot: "https://westlevy.com/wp-content/uploads/2025/12/Heather-Podcast-2.jpg",
    tagline: "Strategic storytelling for leaders who move culture.",
    shortBio:
      "Top Women in PR honoree and Entrepreneur-featured strategist delivering media-ready narratives and guaranteed visibility.",
    longBio: [
      "Heather blends 20+ years in media strategy, crisis management, and influencer partnerships. She learned under Barry Diller and Dara Khosrowshahi at USA Networks, grounding her in digital transformation and narrative-led growth.",
      "She’s led national initiatives like Nevada DMV’s Real ID campaign, generating a 31% visibility lift, and launched Jason Flom’s Wrongful Conviction Podcast, streamed millions of times.",
    ],
    stats: [
      { label: "Media Placements", value: "300+" },
      { label: "Campaign Visibility Lift", value: "31%" },
      { label: "Years in PR", value: "20+" },
    ],
    expertise: [
      "Media Relations",
      "Crisis Comms",
      "Narrative Development",
      "Influencer Strategy",
      "Guaranteed Visibility",
      "Executive Positioning",
    ],
    services: [
      "Press-ready storytelling & bylines",
      "Guaranteed media placement programs",
      "Crisis response & reputation defense",
      "Executive visibility & keynote prep",
      "Podcast & long-form narrative development",
    ],
    highlights: [
      {
        title: "Real ID Campaign",
        metric: "31% Lift",
        description: "Ran statewide visibility program with DHS-aligned messaging.",
      },
      {
        title: "Wrongful Conviction Podcast",
        metric: "Millions Streams",
        description: "Launched Jason Flom’s flagship justice podcast to national reach.",
      },
      {
        title: "Top Women in PR",
        metric: "Awarded",
        description: "Recognized for pioneering narrative-driven PR outcomes.",
      },
    ],
    testimonials: [
      {
        quote:
          "Heather knows how to translate complex stories into coverage that matters. Fast, precise, and strategic.",
        name: "Jason Flom",
        title: "Host, Wrongful Conviction Podcast",
      },
    ],
    contact: {
      email: "heather@westlevy.com",
      phone: "+1 (307) 419-9230",
      timezone: "Central Time",
      cta: "Request Heather",
    },
    socials: [
      { label: "Portfolio", url: "http://westlevy.com/wp-content/uploads/2025/12/heather_portfolio_a_1-1.pdf" },
    ],
    relatedSlugs: ["marklen-kennedy", "ingrid-de-la-mare-kenny"],
  },
  {
    slug: "ingrid-de-la-mare-kenny",
    name: "Ingrid De La Mare Kenny",
    title: "Co-Founder & Brand Architect",
    location: "Monaco",
    heroImage: "https://westlevy.com/wp-content/uploads/2025/12/photo-768x1162.jpeg",
    headshot: "https://westlevy.com/wp-content/uploads/2025/12/ingrid2-1024x899.jpg",
    tagline: "Aesthetic, science-backed brand building across wellness and luxury.",
    shortBio:
      "French American entrepreneur and author building refined, culturally resonant brands across wellness, fashion, and lifestyle.",
    longBio: [
      "Ingrid merges movement science, brand minimalism, and wellness authority. Founder/CEO of THE METHOD and Gangster Chic, creator of Simply Inulin, and author of the #1 Amazon new release 'FUCK MY LIFE'.",
      "Her work spans New York fashion roots, Monaco wellness culture, and digital brand-building with clinical rigor and aesthetic precision.",
    ],
    stats: [
      { label: "Brands Launched", value: "5+" },
      { label: "Global Audience", value: "200K+" },
      { label: "Published Author", value: "#1 New Release" },
    ],
    expertise: [
      "Brand Architecture",
      "Product Launches",
      "Wellness Positioning",
      "Content Strategy",
      "Luxury Aesthetics",
      "Community Growth",
    ],
    services: [
      "Brand identity and product story frameworks",
      "Go-to-market and launch roadmaps",
      "Founder thought leadership and content systems",
      "Influencer and community-led growth campaigns",
    ],
    highlights: [
      {
        title: "THE METHOD",
        metric: "Global",
        description: "Built proprietary physiokinetic protocol with international client base.",
      },
      {
        title: "Gangster Chic",
        metric: "Cult Brand",
        description: "Created minimalist wellness line with signature Simply Inulin product.",
      },
      {
        title: "Author",
        metric: "#1 New Release",
        description: "Memoir debuting as a top Amazon new release.",
      },
    ],
    testimonials: [
      {
        quote:
          "Ingrid crafts brands that feel both clinical and beautifully human. She sees the entire customer journey.",
        name: "Client Feedback",
        title: "Global Wellness Founder",
      },
    ],
    contact: {
      email: "ingrid@westlevy.com",
      timezone: "CET",
      cta: "Request Ingrid",
    },
    socials: [
      { label: "Portfolio", url: "https://westlevy.com/wp-content/uploads/2025/12/Ingrid-Blog-Post-1024x1024.jpg" },
    ],
    relatedSlugs: ["heather-wing", "marklen-kennedy"],
  },
  {
    slug: "marklen-kennedy",
    name: "Marklen Kennedy",
    title: "Creative Director & Narrative Architect",
    location: "Dallas & Las Vegas",
    heroImage: "https://westlevy.com/wp-content/uploads/2025/12/Marklen-Kennedy-EPK-9-1024x1024.jpg",
    headshot: "https://westlevy.com/wp-content/uploads/2025/12/Marklen-Kennedy-EPK-4-1024x1024.jpg",
    tagline: "Experiential storytelling across entertainment, hospitality, and brand partnerships.",
    shortBio:
      "Multi-hyphenate creative leader with two decades across entertainment, hospitality, and brand ventures, known for market-making experiences.",
    longBio: [
      "Marklen introduced and popularized bottle service in Las Vegas nightlife, later directing Tao Group Hospitality with a 40% YoY VIP lift.",
      "At West Levy Creative, he merges narrative construction, experiential design, and celebrity/influencer ecosystems into growth programs.",
    ],
    stats: [
      { label: "VIP Revenue Lift", value: "40%" },
      { label: "Years Leading Experiences", value: "20+" },
      { label: "Key Markets", value: "Las Vegas, Dallas, Monaco" },
    ],
    expertise: [
      "Experiential Strategy",
      "Celebrity & Influencer Ecosystems",
      "Narrative Design",
      "Partnership Development",
      "Campaign Creative",
      "Hospitality Growth",
    ],
    services: [
      "Campaign creative and experiential design",
      "Influencer/celebrity activations and partnerships",
      "Go-to-market storytelling for hospitality and consumer brands",
      "Narrative-driven brand and content systems",
    ],
    highlights: [
      {
        title: "Tao Beach",
        metric: "+40% VIP",
        description: "Drove VIP sales YoY through narrative-led programming.",
      },
      {
        title: "Bottle Service Pioneer",
        metric: "Market Shift",
        description: "Helped popularize modern bottle service in Vegas nightlife.",
      },
      {
        title: "Campaign Builder",
        metric: "Multi-Market",
        description: "Designed cross-market experiences across entertainment and hospitality.",
      },
    ],
    testimonials: [
      {
        quote:
          "Marklen connects story, experience, and partnerships in a way few creative directors can.",
        name: "Tao Group Leadership",
        title: "Hospitality Executive",
      },
    ],
    contact: {
      email: "marklen@westlevy.com",
      phone: "+1 (310) 666-8436",
      timezone: "Central Time",
      cta: "Request Marklen",
    },
    socials: [{ label: "EPK", url: "http://westlevy.com/wp-content/uploads/2025/12/Marklen-Kennedy-EPK.pdf" }],
    relatedSlugs: ["heather-wing", "ingrid-de-la-mare-kenny"],
  },
];

export function getAgentProfile(slug: string): AgentProfile | undefined {
  return agentProfiles.find((agent) => agent.slug === slug);
}

