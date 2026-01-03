"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  MapPin,
  Clock,
  Users,
  Code,
  Palette,
  Zap,
  Settings,
  ChevronRight,
  Eye,
  EyeOff,
  Play,
  Video,
  AlertCircle,
  Search,
} from "lucide-react";
import { QuickApplyDrawer } from "@/components/careers/QuickApplyDrawer";
import useJobs from "@/hooks/useJobs";

const fallbackJobs = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    department: "tech",
    location: "Remote",
    type: "Full-time",
    salary: "$80,000 - $120,000",
    summary: "Build pixel-perfect interfaces and craft great UX.",
    tags: ["React", "TypeScript", "Design Systems"],
  },
  {
    id: 2,
    title: "Creative Director",
    department: "creative",
    location: "New York, NY",
    type: "Full-time",
    salary: "$120,000 - $160,000",
    summary: "Lead visual identity and storytelling across channels.",
    tags: ["Brand", "Campaigns", "Leadership"],
  },
  {
    id: 3,
    title: "Product Manager",
    department: "strategy",
    location: "Remote",
    type: "Full-time",
    salary: "$95,000 - $130,000",
    summary: "Own roadmap from discovery to launch with cross-functional teams.",
    tags: ["Roadmaps", "User Research", "Agile"],
  },
];

const departments = [
  { id: "all", name: "All Departments", icon: Users },
  { id: "creative", name: "Creative", icon: Palette },
  { id: "tech", name: "Tech", icon: Code },
  { id: "strategy", name: "Strategy", icon: Zap },
  { id: "operations", name: "Operations", icon: Settings },
];

export default function CareersPage() {
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const [showSalary, setShowSalary] = useState(true);
  const [expandedJobs, setExpandedJobs] = useState<Set<string>>(new Set());
  const [quickApplyJob, setQuickApplyJob] = useState<null | { id: string; title: string; department: string }>(null);

  const { jobs: remoteJobs, loading, error, refetch } = useJobs();

  const jobs = useMemo(() => {
    if (remoteJobs && remoteJobs.length > 0) {
      return remoteJobs.map((job: any) => ({
        id: job.id?.toString() ?? crypto.randomUUID(),
        title: job.title ?? "Open Role",
        department: (job.department ?? "general").toLowerCase(),
        location: job.location ?? "Remote",
        type: job.type ?? "Full-time",
        salary: job.salary ?? "Competitive",
        summary: job.description ?? "Join the team and make an impact.",
        tags: job.tags ?? [],
      }));
    }
    return fallbackJobs;
  }, [remoteJobs]);

  const filteredJobs = jobs.filter(
    (job: any) => selectedDepartment === "all" || job.department === selectedDepartment
  );

  const toggleJobExpansion = (jobId: string | number) => {
    const id = String(jobId);
    const next = new Set(expandedJobs);
    if (next.has(id)) {
      next.delete(id);
    } else {
      next.add(id);
    }
    setExpandedJobs(next);
  };

  return (
    <>
      <main className="min-h-screen bg-[#0B0E14] text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B0E14] via-[#0d1b24] to-[#0d0e13]" />
        <div className="absolute inset-0">
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 via-yellow-500/10 to-purple-500/10 animate-pulse" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl" />
        </div>
        
        <div className="relative container-custom pt-24 pb-16 lg:pt-32 lg:pb-24">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm"
            >
              <div className="w-2 h-2 bg-gradient-to-r from-teal-400 to-yellow-400 rounded-full animate-pulse" />
              <span className="text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground">
               Now Hiring
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
            >
              Build the Future of
              <span className="bg-gradient-to-r from-teal-400 via-blue-400 to-yellow-400 text-transparent bg-clip-text">
                {" "}Design
              </span>
              {" "}with Us
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed"
            >
              Join a team of visionaries, creators, and innovators who are redefining what is possible 
              in the world of digital design and technology.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mt-8"
            >
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                Currently hiring for 6 positions
              </span>
              <span>•</span>
              <span>Remote-first culture</span>
              <span>•</span>
              <span>Competitive benefits</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Culture Peek Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0B0E14]" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Culture Peek</h2>
            <p className="text-muted-foreground">Get a glimpse of what makes our workplace special</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-yellow-500 rounded-full flex items-center justify-center">
                    <Video className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Our Story</h3>
                    <p className="text-sm text-muted-foreground">Watch our journey and vision</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Join us as we share our story, values, and what drives us to create exceptional digital experiences.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-4">
                  <h4 className="font-medium mb-2">Team Events</h4>
                  <p className="text-sm text-muted-foreground">Regular team building and social events</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-4">
                  <h4 className="font-medium mb-2">Learning</h4>
                  <p className="text-sm text-muted-foreground">Continuous learning and growth opportunities</p>
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20">
                <div className="aspect-video bg-gradient-to-br from-teal-500/20 to-yellow-500/20 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                    <Play className="w-8 h-8 text-[#0B0E14]" />
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              <div className="mt-4 text-center text-sm text-muted-foreground">
                Click play to watch our team culture video
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Pills */}
      <section className="sticky top-0 z-50 bg-[#0B0E14] border-b border-white/10 backdrop-blur-md">
        <div className="container-custom py-6">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {departments.map((dept) => {
              const Icon = dept.icon;
              return (
                <button
                  key={dept.id}
                  onClick={() => setSelectedDepartment(dept.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedDepartment === dept.id
                      ? "bg-gradient-to-r from-teal-500 to-yellow-500 text-white shadow-lg shadow-teal-500/25"
                      : "bg-white/5 hover:bg-white/10 text-muted-foreground border border-white/20"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {dept.name}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Job Grid */}
      <section className="container-custom py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">
              Open Positions
              <span className="ml-2 text-sm text-muted-foreground">
                ({filteredJobs.length} available)
              </span>
            </h2>
            <p className="text-muted-foreground mt-2">
              Find your perfect role and start your journey with us.
            </p>
          </div>
          
          <button
            onClick={() => setShowSalary(!showSalary)}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/20 hover:bg-white/10 transition-colors"
          >
            {showSalary ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            {showSalary ? "Hide" : "Show"} Salary
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="wait">
            {loading ? (
              Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={`skeleton-${index}`}
                  className="bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-6 border border-white/20 animate-pulse"
                >
                  <div className="h-4 bg-white/30 rounded w-3/4 mb-2"></div>
                  <div className="h-3 bg-white/30 rounded w-1/2 mb-4"></div>
                  <div className="h-3 bg-white/30 rounded w-full mb-2"></div>
                  <div className="h-3 bg-white/30 rounded w-5/6 mb-4"></div>
                  <div className="flex gap-2 mb-4">
                    <div className="h-6 bg-white/30 rounded w-16"></div>
                    <div className="h-6 bg-white/30 rounded w-20"></div>
                  </div>
                  <div className="h-10 bg-white/30 rounded w-24"></div>
                </div>
              ))
            ) : error ? (
              <div className="col-span-full text-center py-12">
                <div className="text-red-400 mb-4">
                  <AlertCircle className="w-12 h-12 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Failed to Load Jobs</h3>
                <p className="text-muted-foreground mb-6">{error}</p>
                <button
                  onClick={refetch}
                  className="bg-gradient-to-r from-teal-500 to-yellow-500 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg hover:shadow-teal-500/25 transition-all duration-300"
                >
                  Try Again
                </button>
              </div>
            ) : filteredJobs.length === 0 ? (
              <div className="col-span-full text-center py-12">
                <div className="text-muted-foreground mb-4">
                  <Search className="w-12 h-12 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">No Jobs Found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your filters or check back later for new opportunities.
                </p>
              </div>
            ) : (
              filteredJobs.map((job: any, index: number) => (
                <motion.div
                  key={job.id ?? index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="rounded-2xl border border-white/15 bg-white/5 backdrop-blur-sm p-6 flex flex-col gap-4"
                >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-teal-400 to-yellow-400 flex items-center justify-center text-[#0B0E14] font-semibold">
                            <Briefcase className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold">{job.title}</h3>
                            <p className="text-sm text-muted-foreground capitalize">{job.department}</p>
                          </div>
                        </div>
                  </div>

                  <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                      <MapPin className="w-4 h-4" /> {job.location}
                    </span>
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                      <Clock className="w-4 h-4" /> {job.type}
                    </span>
                    {showSalary && (
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                        {job.salary}
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-muted-foreground">{job.summary}</p>

                  {job.tags?.length ? (
                    <div className="flex flex-wrap gap-2">
                      {job.tags.map((tag: string) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  ) : null}

                  <div className="flex items-center justify-between mt-auto pt-2">
                    <button
                      onClick={() => toggleJobExpansion(job.id)}
                      className="text-sm inline-flex items-center gap-2 text-primary hover:text-primary/80"
                    >
                      {expandedJobs.has(String(job.id)) ? "Hide details" : "View details"}
                      <ChevronRight
                        className={`w-4 h-4 transition-transform ${
                          expandedJobs.has(String(job.id)) ? "rotate-90" : ""
                        }`}
                      />
                    </button>
                    <button
                      onClick={() =>
                        setQuickApplyJob({
                          id: String(job.id),
                          title: job.title,
                          department: job.department,
                        })
                      }
                      className="ml-auto flex items-center gap-2 px-3 py-2 rounded-full bg-gradient-to-r from-teal-500 to-yellow-500 text-white text-sm font-medium hover:shadow-lg hover:shadow-teal-500/25 transition-all"
                    >
                      Quick Apply
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                  <AnimatePresence>
                    {expandedJobs.has(String(job.id)) && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-2 text-sm text-muted-foreground"
                      >
                        <p>
                          We&apos;re looking for builders who love collaborating across design, strategy,
                          and engineering to deliver standout experiences.
                        </p>
                        <ul className="list-disc list-inside space-y-1">
                          <li>Collaborate with cross-functional teams</li>
                          <li>Ship high-quality work with autonomy</li>
                          <li>Learn and grow with leaders in the field</li>
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </div>

        {filteredJobs.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">😔</div>
            <h3 className="text-xl font-semibold mb-2">No positions available</h3>
            <p className="text-muted-foreground">Check back soon for new opportunities!</p>
          </div>
        )}
      </section>

      {/* Culture Peek Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0B0E14] to-[#1a2332]">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 via-yellow-500/5 to-purple-500/5" />
        <div className="container-custom py-16 relative">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm">
              <div className="w-3 h-3 bg-gradient-to-r from-teal-400 to-yellow-400 rounded-full animate-pulse" />
              <span className="text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground">
                Culture Peek
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold">
              See What It&apos;s Like to
              <span className="bg-gradient-to-r from-teal-400 to-yellow-400 text-transparent bg-clip-text">
                {" "}Work Here
              </span>
            </h2>
            
            <p className="text-lg text-muted-foreground">
              We&apos;re not just a company—we&apos;re a community of creators, thinkers, and doers 
              who believe in the power of design to change the world.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/20">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-400 to-yellow-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Palette className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Creative Freedom</h3>
                <p className="text-sm text-muted-foreground">Unlimited creative possibilities and the freedom to experiment.</p>
              </div>
              
              <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/20">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Collaborative Culture</h3>
                <p className="text-sm text-muted-foreground">Work with talented individuals who inspire and challenge you.</p>
              </div>
              
              <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/20">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Innovation First</h3>
                <p className="text-sm text-muted-foreground">Be at the forefront of design and technology trends.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
      <QuickApplyDrawer
        isOpen={quickApplyJob !== null}
        onClose={() => setQuickApplyJob(null)}
        jobTitle={quickApplyJob?.title || ""}
        jobId={quickApplyJob?.id || ""}
        jobDepartment={quickApplyJob?.department}
      />
    </>
  );
}
