import { NextResponse } from 'next/server';

// Mock job data - replace with your actual database query
const mockJobs = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    department: "Tech",
    location: "Remote",
    type: "Full-time",
    salary: "$80,000 - $120,000",
    description: "Build pixel-perfect interfaces and create engaging user experiences.",
    details: "Lead the development of our flagship products using React, TypeScript, and modern frontend technologies. Collaborate with designers and backend engineers to deliver exceptional digital experiences.",
    requirements: [
      "5+ years of React/TypeScript experience",
      "Strong understanding of design systems",
      "Experience with performance optimization",
      "Leadership and mentoring skills"
    ],
    perks: ["Remote-first", "Health benefits", "Learning budget", "Flexible PTO"],
    color: "from-teal-400 to-yellow-400"
  },
  {
    id: 2,
    title: "Creative Director",
    department: "Creative",
    location: "New York, NY",
    type: "Full-time",
    salary: "$120,000 - $160,000",
    description: "Shape the visual identity and creative direction of our brand.",
    details: "Lead our creative team in developing innovative campaigns, brand identities, and visual storytelling that captivates audiences and drives business results.",
    requirements: [
      "10+ years in creative leadership",
      "Portfolio of award-winning work",
      "Team management experience",
      "Strategic thinking skills"
    ],
    perks: ["Creative freedom", "Agency perks", "Travel opportunities", "Profit sharing"],
    color: "from-purple-400 to-pink-400"
  },
  {
    id: 3,
    title: "UX/UI Designer",
    department: "Creative",
    location: "Remote",
    type: "Full-time",
    salary: "$70,000 - $95,000",
    description: "Design intuitive and beautiful user experiences.",
    details: "Create user-centered designs by considering market analysis, user feedback, and usability findings. Work closely with developers to bring designs to life.",
    requirements: [
      "3+ years of UX/UI experience",
      "Proficiency in Figma/Sketch",
      "User research skills",
      "Understanding of accessibility standards"
    ],
    perks: ["Design tools budget", "Conference attendance", "Flexible hours", "Remote work"],
    color: "from-blue-400 to-cyan-400"
  },
  {
    id: 4,
    title: "DevOps Engineer",
    department: "Tech",
    location: "Remote",
    type: "Full-time",
    salary: "$90,000 - $130,000",
    description: "Build and maintain our cloud infrastructure and CI/CD pipelines.",
    details: "Ensure our applications are scalable, secure, and performant. Implement monitoring, automation, and best practices for our development workflow.",
    requirements: [
      "Experience with AWS/GCP/Azure",
      "Kubernetes and Docker expertise",
      "Infrastructure as Code",
      "Monitoring and alerting systems"
    ],
    perks: ["Latest hardware", "Cloud credits", "Certification support", "Flexible PTO"],
    color: "from-green-400 to-emerald-400"
  },
  {
    id: 5,
    title: "Marketing Strategist",
    department: "Strategy",
    location: "Chicago, IL",
    type: "Full-time",
    salary: "$65,000 - $85,000",
    description: "Develop data-driven marketing strategies and campaigns.",
    details: "Analyze market trends, customer behavior, and campaign performance to create effective marketing strategies that drive growth and engagement.",
    requirements: [
      "4+ years in digital marketing",
      "Analytics and data analysis skills",
      "Content strategy experience",
      "Campaign management expertise"
    ],
    perks: ["Marketing budget", "Professional development", "Performance bonuses", "Flexible schedule"],
    color: "from-orange-400 to-red-400"
  },
  {
    id: 6,
    title: "Product Manager",
    department: "Strategy",
    location: "Remote",
    type: "Full-time",
    salary: "$95,000 - $130,000",
    description: "Lead product development from concept to launch.",
    details: "Define product vision, strategy, and roadmap. Work with cross-functional teams to deliver products that solve real user problems and achieve business goals.",
    requirements: [
      "5+ years in product management",
      "Agile/Scrum experience",
      "User research and analytics",
      "Stakeholder management skills"
    ],
    perks: ["Equity options", "Product conferences", "Leadership training", "Remote flexibility"],
    color: "from-indigo-400 to-violet-400"
  }
];

export async function GET() {
  try {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return NextResponse.json({
      success: true,
      data: mockJobs,
      total: mockJobs.length
    });
  } catch (error) {
    console.error('Jobs API error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch jobs' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const jobData = await request.json();
    
    // Basic validation
    const requiredFields = ['title', 'department', 'location', 'type'];
    const missingFields = requiredFields.filter(field => !jobData[field]);
    
    if (missingFields.length > 0) {
      return NextResponse.json(
        { success: false, error: `Missing required fields: ${missingFields.join(', ')}` },
        { status: 400 }
      );
    }

    // In a real application, you would save to your database here
    const newJob = {
      id: mockJobs.length + 1,
      ...jobData,
      createdAt: new Date().toISOString()
    };

    return NextResponse.json({
      success: true,
      data: newJob
    }, { status: 201 });
  } catch (error) {
    console.error('Create job API error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create job' },
      { status: 500 }
    );
  }
}