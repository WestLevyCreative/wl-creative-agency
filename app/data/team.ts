export interface TeamMember {
  id: string;
  slug: string;
  name: string;
  firstName: string;
  lastName: string;
  role: string;
  subtitle?: string;
  shortBio: string;
  fullBio: string[];
  image: string;
  images?: string[];
  phone?: string;
  email?: string;
  website?: string;
  portfolio?: {
    label: string;
    url: string;
  };
  socials?: {
    platform: string;
    handle: string;
    url: string;
  }[];
  sections?: {
    title: string;
    subtitle: string;
    content: string;
  }[];
}

export const teamMembers: TeamMember[] = [
  {
    id: "heather-wing",
    slug: "heather-wing",
    name: "Heather Wing",
    firstName: "Heather",
    lastName: "Wing",
    role: "Co-Founder & Senior Publicist",
    shortBio: "A strategist recognized among the Top Women in PR and an Entrepreneur-featured communications leader.",
    fullBio: [
      "In the early days of her career, Heather Wing had the unique opportunity to learn from the original pioneers in digital marketing under the leadership of Barry Diller (Founder & Chairman of IAC) and Dara Khosrowshahi (current CEO of Uber). Working directly under them on the Operations and Strategic Planning Team at USA Networks, she gained invaluable experience in strategic media planning, digital transformation, and high-level brand positioning—a foundation that has shaped her into the industry leader she is today.",
      "Her expertise in media relations, crisis management, and influencer partnerships has positioned her as a go-to PR consultant for legal advocacy. She has worked directly with The Innocence Project Foundation, leading media outreach for wrongful conviction cases and shaping public perception on justice reform. Additionally, she was instrumental in the creation and launch of Jason Flom's Wrongful Conviction Podcast, which has been streamed millions of times and continues to influence the national conversation on criminal justice reform.",
      "Heather has also spearheaded national marketing initiatives, including Nevada DMV's Real ID campaign, achieving a 31% increase in brand visibility as recently as 2023 – 2024 for DHS.",
      "Recognized as a Top Woman in PR and the #1 PR Power Woman on Twitter, Heather's work reflects a deep understanding of audience behavior, emerging digital trends, and the power of authentic storytelling. Her strategic, data-driven approach to brand-building continues to drive high-impact PR campaigns that shape industries, influence change, and create lasting impact."
    ],
    image: "https://westlevy.com/wp-content/uploads/2025/12/HeatherProfilePhoto-Italy-Office3-5-with-makeup-1.jpg",
    images: [
      "https://westlevy.com/wp-content/uploads/2025/12/Screenshot-2025-12-21-at-12.06.45-PM.png",
      "https://westlevy.com/wp-content/uploads/2025/12/Heather-Podcast-2.jpg"
    ],
    phone: "+1 (307) 419-9230",
    portfolio: {
      label: "Download my Portfolio",
      url: "http://westlevy.com/wp-content/uploads/2025/12/heather_portfolio_a_1-1.pdf"
    },
    sections: [
      {
        title: "Where I Excel",
        subtitle: "PR Strategy, Media Relations & Brand Leadership",
        content: "With over 20 years of experience in public relations, media strategy, and branding, Heather Wing is a highly sought-after PR strategist known for crafting compelling narratives and executing high-impact, media-driven campaigns. She has secured media placements in Forbes, Rolling Stone, Billboard, Fox News, The Washington Post, The Wall Street Journal, The New York Post, LA Times, The New York Times, PR Week, and more."
      }
    ]
  },
  {
    id: "ingrid-de-la-mare-kenny",
    slug: "ingrid-de-la-mare-kenny",
    name: "Ingrid De La Mare Kenny",
    firstName: "Ingrid",
    lastName: "Kenny",
    role: "Co-Founder",
    shortBio: "A Monaco-based French American entrepreneur, author, and wellness authority known for building refined, culturally resonant brands.",
    fullBio: [
      "Ingrid De La Mare Kenny is a Monaco-based French American entrepreneur, author, and wellness authority known for building refined, culturally resonant brands at the intersection of science, aesthetics, and modern lifestyle.",
      "Her professional foundation was established in New York City, where she worked within the fashion industry. Early in her career, Ingrid collaborated on styling and production projects under the direction of renowned stylist Patricia Field, whose work defined the visual language of Sex and the City. This formative experience exposed her to fashion as narrative, character-driven style, and the role of aesthetics in shaping cultural identity.",
      "She is the Founder and CEO of THE METHOD, a proprietary physiokinetic protocol that integrates movement science, Pilates technique, and neuromuscular patterning with a focus on hormonal balance, metabolic intelligence, and long-line muscular efficiency. Her work is informed by advanced studies in Applied Physiokinetics and Movement Science, along with her credentials as a Functional Medicine Practitioner.",
      "Ingrid is also the creator of Gangster Chic, a minimalist lifestyle and wellness brand recognized for its clean formulations and signature supplement, Simply Inulin. Her insights into gut health, metabolic support, and hormonal balance have been featured across international wellness media and on leading podcasts, including The Skinny Confidential.",
      "She is the author of FUCK MY LIFE, a memoir that debuted as a number one New Release on Amazon, chronicling themes of adversity, reinvention, and personal resilience.",
      "Today, Ingrid's work bridges New York fashion, Monaco wellness culture, and digital brand building. Her perspective combines clinical intelligence with aesthetic precision, positioning her influence across health, beauty, and lifestyle industries with clarity and restraint."
    ],
    image: "https://westlevy.com/wp-content/uploads/2025/12/photo-768x1162.jpeg",
    images: [
      "https://westlevy.com/wp-content/uploads/2025/12/ingrid2-1024x899.jpg",
      "https://westlevy.com/wp-content/uploads/2025/12/Ingrid-Blog-Post-1024x1024.jpg"
    ],
    sections: [
      {
        title: "The Foundation",
        subtitle: "Carving the path",
        content: "Her professional foundation was established in New York City, where she worked under her former name, Ingrid Levy, within the fashion industry."
      },
      {
        title: "The Method",
        subtitle: "Movement meets career",
        content: "She is the Founder and CEO of THE METHOD, a proprietary physiokinetic protocol that integrates movement science, Pilates technique, and neuromuscular patterning."
      }
    ]
  },
  {
    id: "marklen-kennedy",
    slug: "marklen-kennedy",
    name: "Marklen Kennedy",
    firstName: "Marklen",
    lastName: "Kennedy",
    role: "Creative Director & Narrative Architect",
    shortBio: "A multi-hyphenate creative force whose career spans more than two decades across entertainment, hospitality, brand partnerships, and healthcare innovation.",
    fullBio: [
      "Marklen Kennedy is a multi-hyphenate creative force whose career spans more than two decades across entertainment, hospitality, brand partnerships, healthcare innovation, and socially driven business ventures. Throughout his career, he has held senior executive, operational, and leadership roles across major U.S. markets—consistently operating at the intersection of creativity, strategy, and high-impact growth.",
      "A forward-thinking leader with a T-shaped marketing lens, Marklen excels in connectivity, partnership development, and market cultivation. He has a rare ability to understand evolving consumer behavior, then design the experiences, stories, and strategies that meet—and often shape—those needs.",
      "Marklen's early career unfolded inside the country's most iconic hospitality environments. His work spanned the development, marketing, and operations of high-revenue restaurants, nightclubs, dayclubs, and lounges nationwide. In Las Vegas, he helped introduce, market, sell, and popularize bottle service, a transformation that redefined the city's nightlife economy and became a national standard.",
      "He later joined Tao Group Hospitality as Director, where he increased VIP sales at Tao Beach Dayclub by 40 percent year-over-year and launched signature initiatives including the philanthropic 'Lift The Rope For a Cure' campaign.",
      "Today, as Creative Director & Narrative Architect at West Levy Creative Agency, Marklen merges all facets of his career into a singular creative engine. He brings a hybrid fluency in narrative construction, experiential design, celebrity and influencer ecosystems, and multi-channel brand expression."
    ],
    image: "https://westlevy.com/wp-content/uploads/2025/12/Marklen-Kennedy-EPK-9-1024x1024.jpg",
    images: [
      "https://westlevy.com/wp-content/uploads/2025/12/Marklen-Kennedy-EPK-4-1024x1024.jpg",
      "https://westlevy.com/wp-content/uploads/2025/12/Marklen-Kennedy-EPK-8-1024x930.png"
    ],
    phone: "+1 (310) 666-8436",
    website: "marklenkennedy.com",
    portfolio: {
      label: "Download my EPK",
      url: "http://westlevy.com/wp-content/uploads/2025/12/Marklen-Kennedy-EPK.pdf"
    },
    socials: [
      { platform: "Facebook", handle: "MarklenKennedyProducer", url: "https://facebook.com/MarklenKennedyProducer" },
      { platform: "Twitter", handle: "@MarklenKennedy", url: "https://twitter.com/MarklenKennedy" },
      { platform: "Instagram", handle: "@MarklenKennedy", url: "https://instagram.com/MarklenKennedy" },
      { platform: "YouTube", handle: "MarklenKennedy", url: "https://youtube.com/MarklenKennedy" },
      { platform: "LinkedIn", handle: "MarklenKennedy", url: "https://linkedin.com/in/MarklenKennedy" },
      { platform: "Vimeo", handle: "MarklenKennedy", url: "https://vimeo.com/MarklenKennedy" },
      { platform: "IMDb", handle: "nm0004005", url: "https://imdb.com/name/nm0004005" }
    ],
    sections: [
      {
        title: "Excel Forward",
        subtitle: "By leading, not following",
        content: "A forward-thinking leader with a T-shaped marketing lens, Marklen excels in connectivity, partnership development, and market cultivation."
      },
      {
        title: "My Background",
        subtitle: "A career in the making",
        content: "Marklen's early career unfolded inside the country's most iconic hospitality environments, spanning high-revenue restaurants, nightclubs, dayclubs, and lounges nationwide."
      }
    ]
  },
  {
    id: "jill-keller",
    slug: "jill-keller",
    name: "Jill Keller",
    firstName: "Jill",
    lastName: "Keller",
    role: "Director of Brand Education & Communications Strategy",
    shortBio: "Helps brands clarify their voice, refine their message, and communicate with intention.",
    fullBio: [
      "Jill Keller is the Director of Brand Education and Communications Strategy at West Levy Creative, where she helps brands clarify their voice, refine their message, and communicate with intention. With a Master's in Educational Leadership and more than two decades of experience shaping communication, audience behavior, and strategic copy, Jill specializes in translating complex ideas into clear and compelling narratives that feel human and grounded.",
      "Jill Keller, Director of our Brand Education & Communications Strategy department, is known for her grounded perspective and her signature phrase, 'BUT GOD!'",
      "Outside of work, Jill values intentional quiet time to recharge, prioritizes her mental health and overall well-being, and loves to travel and unplug with her family—creating space for reflection, connection, and balance.",
      "Jill's ability to teach, influence, and build trust has guided teams and audiences that have generated more than twenty million dollars in collective results. Jill has also trained extensively in communication psychology, influence, and high-impact presentation skills under leading industry educators. At West Levy Creative, she brings a steady and thoughtful approach to helping clients show up with confidence, authenticity, and purpose."
    ],
    image: "https://westlevy.com/wp-content/uploads/2025/12/Jill-standing-with-arms-crossed.jpg",
    images: [
      "https://westlevy.com/wp-content/uploads/2025/12/Jill-instructing.jpg"
    ],
    sections: [
      {
        title: "Guidance is Golden",
        subtitle: "Leaders Preach, But Great Leaders Teach",
        content: "Jill's ability to teach, influence, and build trust has guided teams and audiences that have generated more than twenty million dollars in collective results."
      }
    ]
  }
];

export function getTeamMember(slug: string): TeamMember | undefined {
  return teamMembers.find(member => member.slug === slug);
}
