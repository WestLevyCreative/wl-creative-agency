"use client";

import {
  Sparkles,
  Star,
  Rocket,
  Users,
  Briefcase,
  Gift,
  LifeBuoy,
  Mail,
  Globe,
  Award,
  TrendingUp,
  Palette,
  Code,
  Share2,
  BarChart3,
  Camera,
  CalendarCheck,
  UserPlus,
  Building2,
  Phone,
} from "lucide-react";
import { MegaMenuSection } from "./types";

export const megaMenuSections: MegaMenuSection[] = [
  // HOME MENU
  {
    id: "home",
    trigger: "Home",
    width: 1200,
    featured: {
      type: "card",
      icon: Sparkles,
      title: "Our Philosophy",
      subtitle: "Connection is the catalyst",
      description: "We don't create campaigns, we engineer visibility",
      cta: {
        text: "Explore Vision",
        href: "/#philosophy",
        variant: "default",
      },
      gradient: "hsl(var(--primary)), hsl(var(--accent))",
    },
    links: [
      {
        heading: "Discover West Levy",
        links: [
          {
            icon: Star,
            title: "Signature Partnerships",
            description: "Dynamic visibility programs",
            href: "/#partnerships",
            badge: { text: "Popular", variant: "popular" },
            color: "from-secondary to-primary",
            isPrimary: true,
          },
          {
            icon: Rocket,
            title: "The West Levy Standard",
            description: "Precision, authenticity, momentum",
            href: "/#standard",
            color: "from-accent to-secondary",
          },
          {
            icon: Users,
            title: "Global Creative Culture",
            description: "Worldwide network of storytellers",
            href: "/#global-culture",
            color: "from-primary to-secondary",
          },
          {
            icon: Sparkles,
            title: "Our Story",
            description: "The journey behind the agency",
            href: "/#story",
            color: "from-primary to-accent",
          },
        ],
      },
    ],
    promo: {
      type: "cta",
      content: {
        heading: "Latest Insight",
        description: "The Future of Brand Visibility in 2026",
        cta: {
          text: "Read Article",
          href: "/blog/future-of-brand-visibility",
          variant: "outline",
        },
        secondaryCTA: {
          text: "Book Discovery Call",
          href: "/contact",
          variant: "default",
        },
      },
    },
  },

  // WE MENU
  {
    id: "we",
    trigger: "We",
    width: 1100,
    featured: {
      type: "stats",
      title: "Meet the Minds Behind the Magic",
      subtitle: "Global team, local impact",
      cta: {
        text: "Meet the Team",
        href: "/meet-the-team",
        variant: "default",
      },
      gradient: "hsl(var(--primary)), hsl(var(--secondary))",
    },
    links: [
      {
        heading: "Our Identity",
        links: [
          {
            icon: Users,
            title: "Meet the Team",
            description: "Meet the minds behind the magic",
            href: "/meet-the-team",
            color: "from-primary to-accent",
          },
          {
            icon: Sparkles,
            title: "About West Levy",
            description: "How we build visibility engines",
            href: "/about",
            color: "from-secondary to-primary",
          },
          {
            icon: Star,
            title: "Our Values",
            description: "The principles that guide us",
            href: "/about#values",
            color: "from-accent to-primary",
          },
        ],
      },
      {
        heading: "Join Us",
        links: [
          {
            icon: Briefcase,
            title: "Careers",
            description: "Join our creative revolution",
            href: "/careers",
            badge: { text: "We're Hiring", variant: "hiring" },
            color: "from-accent to-secondary",
            isPrimary: true,
          },
          {
            icon: Globe,
            title: "Global Offices",
            description: "Find us around the world",
            href: "/contact#locations",
            color: "from-primary to-secondary",
          },
        ],
      },
    ],
    promo: {
      type: "testimonial",
      content: {
        quote: "The most talented team we've ever worked with. Their creativity and execution are unmatched.",
        author: "Fortune 500 CMO",
        rating: 5,
      },
    },
  },

  // CREATE MENU
  {
    id: "create",
    trigger: "Create",
    width: 1300,
    featured: {
      type: "card",
      icon: Palette,
      title: "Full-Spectrum Creative Services",
      subtitle: "Strategy • Digital • Production",
      description: "From concept to conversion, we craft experiences that captivate",
      cta: {
        text: "Explore All Services",
        href: "/services",
        variant: "default",
      },
      gradient: "hsl(var(--secondary)), hsl(var(--accent))",
    },
    links: [
      {
        heading: "Core Services",
        links: [
          {
            icon: Rocket,
            title: "Brand Strategy",
            description: "Build a foundation that resonates",
            href: "/services#strategy",
            color: "from-secondary to-primary",
            isPrimary: true,
          },
          {
            icon: Star,
            title: "Digital Marketing",
            description: "Amplify your message everywhere",
            href: "/services#marketing",
            badge: { text: "Popular", variant: "popular" },
            color: "from-accent to-secondary",
            isPrimary: true,
          },
          {
            icon: Sparkles,
            title: "Creative Production",
            description: "Content that captivates and converts",
            href: "/services#production",
            color: "from-primary to-secondary",
            isPrimary: true,
          },
        ],
      },
      {
        heading: "Specialized Services",
        links: [
          {
            icon: Share2,
            title: "Social Media & Content",
            description: "Build engaged communities with stunning content",
            href: "/services#social",
            color: "from-secondary to-accent",
          },
          {
            icon: BarChart3,
            title: "SEO & Analytics",
            description: "Data-driven growth strategies",
            href: "/services#seo",
            color: "from-accent to-primary",
          },
        ],
      },
    ],
    promo: {
      type: "caseStudy",
      content: {
        title: "Tech Startup Success",
        metric: "500% Growth in 6 Months",
        client: "SaaS Company",
        cta: {
          text: "View Case Study",
          href: "/case-studies/tech-startup",
          variant: "outline",
        },
      },
    },
  },

  // IMPACT MENU
  {
    id: "impact",
    trigger: "Impact",
    width: 1200,
    featured: {
      type: "stats",
      title: "Results That Speak",
      subtitle: "Delivering measurable impact",
      cta: {
        text: "View All Results",
        href: "/case-studies",
        variant: "default",
      },
      gradient: "hsl(var(--accent)), hsl(var(--primary))",
    },
    links: [
      {
        heading: "Our Work",
        links: [
          {
            icon: Star,
            title: "Case Studies",
            description: "See our work in action",
            href: "/case-studies",
            badge: { text: "Popular", variant: "popular" },
            color: "from-primary to-accent",
            isPrimary: true,
          },
          {
            icon: Briefcase,
            title: "Portfolio",
            description: "Selected work across industries",
            href: "/portfolio",
            color: "from-secondary to-primary",
          },
          {
            icon: Users,
            title: "Client Success Stories",
            description: "Stories of transformation",
            href: "/case-studies#success",
            color: "from-secondary to-primary",
          },
        ],
      },
      {
        heading: "Industry Expertise",
        links: [
          {
            icon: Building2,
            title: "Industry Solutions",
            description: "Tailored approaches for your sector",
            href: "/solutions",
            color: "from-accent to-secondary",
          },
          {
            icon: Award,
            title: "Awards & Recognition",
            description: "Celebrating excellence in creativity",
            href: "/awards",
            color: "from-primary to-accent",
          },
        ],
      },
    ],
    promo: {
      type: "cta",
      content: {
        heading: "Featured Success",
        description: "How we helped a retail brand achieve 300% ROI through strategic storytelling.",
        cta: {
          text: "Read Full Story",
          href: "/case-studies/retail-brand",
          variant: "default",
        },
      },
    },
  },

  // TOGETHER MENU
  {
    id: "together",
    trigger: "Together",
    width: 1100,
    featured: {
      type: "card",
      icon: Globe,
      title: "Let's Build Something Extraordinary",
      subtitle: "Global presence, personal touch",
      description: "Your vision, our expertise",
      cta: {
        text: "Start Conversation",
        href: "/contact",
        variant: "default",
      },
      gradient: "hsl(var(--primary)), hsl(var(--secondary))",
    },
    links: [
      {
        heading: "Get in Touch",
        links: [
          {
            icon: Mail,
            title: "Get In Touch",
            description: "Start the conversation",
            href: "/contact",
            badge: { text: "24h Response", variant: "new" },
            color: "from-primary to-accent",
            isPrimary: true,
          },
          {
            icon: Users,
            title: "Our Locations",
            description: "Global presence, local impact",
            href: "/contact#locations",
            color: "from-secondary to-primary",
          },
          {
            icon: CalendarCheck,
            title: "Schedule Consultation",
            description: "Book a free discovery call",
            href: "https://calendly.com/westlevy",
            color: "from-accent to-primary",
          },
        ],
      },
      {
        heading: "Community & Programs",
        links: [
          {
            icon: Gift,
            title: "Rewards Program",
            description: "Refer and earn exclusive perks",
            href: "/rewards",
            color: "from-accent to-secondary",
          },
          {
            icon: LifeBuoy,
            title: "Support Center",
            description: "We're here to help you succeed",
            href: "/support",
            color: "from-primary to-secondary",
          },
          {
            icon: UserPlus,
            title: "Partner Program",
            description: "Collaborate and grow together",
            href: "/partners",
            color: "from-secondary to-accent",
          },
        ],
      },
    ],
    promo: {
      type: "quickAction",
      content: {
        heading: "Quick Connect",
        items: [
          {
            icon: Mail,
            label: "Email",
            value: "hello@westlevy.com",
          },
          {
            icon: Phone,
            label: "Phone",
            value: "+1 (555) 123-4567",
          },
        ],
        cta: {
          text: "Book 15min Call",
          href: "https://calendly.com/westlevy/15min",
          variant: "default",
        },
      },
    },
  },
];

// Pool of testimonials for rotation
export const testimonialsPool = [
  {
    quote: "The most talented team we've ever worked with. Their creativity and execution are unmatched.",
    author: "Fortune 500 CMO",
    rating: 5,
  },
  {
    quote: "Transformed our brand in just 6 months. The results speak for themselves.",
    author: "Tech Startup Founder",
    rating: 5,
  },
  {
    quote: "West Levy doesn't just deliver—they exceed expectations every single time.",
    author: "Marketing Director, Global Retail",
    rating: 5,
  },
  {
    quote: "Their strategic approach to storytelling has completely revolutionized our visibility.",
    author: "VP of Communications",
    rating: 5,
  },
];
