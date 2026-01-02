"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, ArrowRight, Sparkles, Rocket, Users, Briefcase, Star, Gift, LifeBuoy, Mail, Home as HomeIcon, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useAuth } from "@/hooks/useAuth";

// HOME - Anchor links to homepage sections
const homeLinks = [
  {
    icon: Sparkles,
    title: "Our Philosophy",
    description: "Connection is the catalyst",
    href: "/#philosophy",
    color: "from-primary to-accent"
  },
  {
    icon: Star,
    title: "Signature Partnerships",
    description: "Dynamic visibility programs",
    href: "/#partnerships",
    color: "from-secondary to-primary"
  },
  {
    icon: Rocket,
    title: "The West Levy Standard",
    description: "Precision, authenticity, momentum",
    href: "/#standard",
    color: "from-accent to-secondary"
  },
  {
    icon: Users,
    title: "Global Creative Culture",
    description: "Worldwide network of storytellers",
    href: "/#global-culture",
    color: "from-primary to-secondary"
  }
];

// WE - About us
const weLinks = [
  {
    icon: Users,
    title: "Who We Are",
    description: "Meet the minds behind the magic",
    href: "/who-we-are",
    color: "from-primary to-accent"
  },
  {
    icon: Sparkles,
    title: "About",
    description: "How we build visibility engines",
    href: "/about",
    color: "from-secondary to-primary"
  },
  {
    icon: Briefcase,
    title: "Careers",
    description: "Join our creative revolution",
    href: "/careers",
    color: "from-accent to-secondary"
  }
];

// CREATE - Services
const createLinks = [
  {
    icon: Sparkles,
    title: "All Services",
    description: "Explore our full creative arsenal",
    href: "/services",
    color: "from-primary to-accent"
  },
  {
    icon: Rocket,
    title: "Brand Strategy",
    description: "Build a foundation that resonates",
    href: "/services#strategy",
    color: "from-secondary to-primary"
  },
  {
    icon: Star,
    title: "Digital Marketing",
    description: "Amplify your message everywhere",
    href: "/services#marketing",
    color: "from-accent to-secondary"
  },
  {
    icon: Sparkles,
    title: "Creative Production",
    description: "Content that captivates and converts",
    href: "/services#production",
    color: "from-primary to-secondary"
  }
];

// IMPACT - Case studies and results
const impactLinks = [
  {
    icon: Star,
    title: "Case Studies",
    description: "See our work in action",
    href: "/case-studies",
    color: "from-primary to-accent"
  },
  {
    icon: Briefcase,
    title: "Portfolio",
    description: "Selected work across industries",
    href: "/portfolio",
    color: "from-secondary to-primary"
  },
  {
    icon: Users,
    title: "Client Success",
    description: "Stories of transformation",
    href: "/case-studies",
    color: "from-secondary to-primary"
  }
];

// TOGETHER - Contact and engagement
const togetherLinks = [
  {
    icon: Mail,
    title: "Get In Touch",
    description: "Start the conversation",
    href: "/contact",
    color: "from-primary to-accent"
  },
  {
    icon: Users,
    title: "Our Locations",
    description: "Global presence, local impact",
    href: "/contact#locations",
    color: "from-secondary to-primary"
  },
  {
    icon: Gift,
    title: "Rewards Program",
    description: "Refer and earn exclusive perks",
    href: "/rewards",
    color: "from-accent to-secondary"
  },
  {
    icon: LifeBuoy,
    title: "Support",
    description: "We're here to help you succeed",
    href: "/support",
    color: "from-primary to-secondary"
  }
];

export function MegaMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const pathname = usePathname();
  const router = useRouter();
  const { isAuthenticated } = useAuth();

  // Helper function to handle section scrolling
  const handleSectionClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    setActiveMenu(null);
    setIsOpen(false);

    // If not on home page, navigate to home first
    if (pathname !== "/") {
      router.push(`/#${sectionId}`);
      return;
    }

    // Smooth scroll to section
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveMenu(null);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const isActive = (href: string) => pathname === href;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-lg"
          : "bg-background/80 backdrop-blur-xl border-b border-border/30"
      )}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group relative z-50">
            <img
              src="/logos/logo-on-dark.png"
              alt="West Levy Creative"
              className={cn(
                "transition-all duration-300",
                scrolled ? "h-10" : "h-12"
              )}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {/* HOME Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => setActiveMenu("home")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <Link
                href="/"
                className={cn(
                  "px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg relative group inline-block",
                  activeMenu === "home" || isActive("/")
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                Home
                <span className={cn(
                  "absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300",
                  activeMenu === "home" || isActive("/") ? "w-full" : "w-0 group-hover:w-full"
                )} />
              </Link>

              {/* HOME Dropdown */}
              {activeMenu === "home" && (
                <div className="absolute top-full left-0 pt-2 w-[600px] animate-fade-in">
                  <div className="bg-card/95 backdrop-blur-xl border border-border rounded-2xl shadow-2xl overflow-hidden">
                    <div className="p-8">
                      <div className="grid grid-cols-2 gap-4">
                        {homeLinks.map((link, index) => {
                          const Icon = link.icon;
                          const sectionId = link.href.replace('/#', '');
                          return (
                            <a
                              key={index}
                              href={link.href}
                              onClick={(e) => handleSectionClick(e, sectionId)}
                              className="group p-4 rounded-xl border border-border/50 hover:border-primary/50 bg-card/50 hover:bg-gradient-to-br hover:from-primary/5 hover:to-accent/5 transition-all duration-300 cursor-pointer"
                            >
                              <div className="flex items-center gap-3">
                                <div className={cn(
                                  "w-10 h-10 rounded-lg bg-gradient-to-br flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform",
                                  link.color
                                )}>
                                  <Icon className="w-5 h-5 text-background" />
                                </div>
                                <div className="flex-1">
                                  <h3 className="font-heading text-sm font-semibold mb-0.5 group-hover:text-primary transition-colors">
                                    {link.title}
                                  </h3>
                                  <p className="text-xs text-muted-foreground">
                                    {link.description}
                                  </p>
                                </div>
                              </div>
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* WE Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => setActiveMenu("we")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button
                className={cn(
                  "px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg relative group",
                  activeMenu === "we" || isActive("/who-we-are")
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                We
                <span className={cn(
                  "absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300",
                  activeMenu === "we" || isActive("/who-we-are") ? "w-full" : "w-0 group-hover:w-full"
                )} />
              </button>

              {/* WE Dropdown */}
              {activeMenu === "we" && (
                <div className="absolute top-full left-0 pt-2 w-[600px] animate-fade-in">
                  <div className="bg-card/95 backdrop-blur-xl border border-border rounded-2xl shadow-2xl overflow-hidden">
                    <div className="p-8">
                      <div className="grid grid-cols-1 gap-4">
                        {weLinks.map((link, index) => {
                          const Icon = link.icon;
                          return (
                            <Link
                              key={index}
                              href={link.href}
                              className="group p-4 rounded-xl border border-border/50 hover:border-primary/50 bg-card/50 hover:bg-gradient-to-br hover:from-primary/5 hover:to-accent/5 transition-all duration-300"
                            >
                              <div className="flex items-start gap-4">
                                <div className={cn(
                                  "w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform",
                                  link.color
                                )}>
                                  <Icon className="w-6 h-6 text-background" />
                                </div>
                                <div className="flex-1">
                                  <h3 className="font-heading font-semibold mb-1 group-hover:text-primary transition-colors">
                                    {link.title}
                                  </h3>
                                  <p className="text-sm text-muted-foreground">
                                    {link.description}
                                  </p>
                                </div>
                                <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* CREATE Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => setActiveMenu("create")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button
                className={cn(
                  "px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg relative group",
                  activeMenu === "create" || isActive("/services")
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                Create
                <span className={cn(
                  "absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-secondary to-accent transition-all duration-300",
                  activeMenu === "create" || isActive("/services") ? "w-full" : "w-0 group-hover:w-full"
                )} />
              </button>

              {/* CREATE Dropdown */}
              {activeMenu === "create" && (
                <div className="absolute top-full left-0 pt-2 w-[600px] animate-fade-in">
                  <div className="bg-card/95 backdrop-blur-xl border border-border rounded-2xl shadow-2xl overflow-hidden">
                    <div className="p-8">
                      <div className="grid grid-cols-1 gap-4">
                        {createLinks.map((link, index) => {
                          const Icon = link.icon;
                          return (
                            <Link
                              key={index}
                              href={link.href}
                              className="group p-4 rounded-xl border border-border/50 hover:border-secondary/50 bg-card/50 hover:bg-gradient-to-br hover:from-secondary/5 hover:to-accent/5 transition-all duration-300"
                            >
                              <div className="flex items-start gap-4">
                                <div className={cn(
                                  "w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform",
                                  link.color
                                )}>
                                  <Icon className="w-6 h-6 text-background" />
                                </div>
                                <div className="flex-1">
                                  <h3 className="font-heading font-semibold mb-1 group-hover:text-secondary transition-colors">
                                    {link.title}
                                  </h3>
                                  <p className="text-sm text-muted-foreground">
                                    {link.description}
                                  </p>
                                </div>
                                <ArrowRight className="w-5 h-5 text-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* IMPACT Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => setActiveMenu("impact")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button
                className={cn(
                  "px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg relative group",
                  activeMenu === "impact" || isActive("/case-studies")
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                Impact
                <span className={cn(
                  "absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-accent to-secondary transition-all duration-300",
                  activeMenu === "impact" || isActive("/case-studies") ? "w-full" : "w-0 group-hover:w-full"
                )} />
              </button>

              {/* IMPACT Dropdown */}
              {activeMenu === "impact" && (
                <div className="absolute top-full left-0 pt-2 w-[500px] animate-fade-in">
                  <div className="bg-card/95 backdrop-blur-xl border border-border rounded-2xl shadow-2xl overflow-hidden">
                    <div className="p-6">
                      <div className="grid grid-cols-1 gap-4">
                        {impactLinks.map((link, index) => {
                          const Icon = link.icon;
                          return (
                            <Link
                              key={index}
                              href={link.href}
                              className="group p-4 rounded-xl border border-border/50 hover:border-accent/50 bg-card/50 hover:bg-gradient-to-br hover:from-accent/5 hover:to-secondary/5 transition-all duration-300"
                            >
                              <div className="flex items-start gap-4">
                                <div className={cn(
                                  "w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform",
                                  link.color
                                )}>
                                  <Icon className="w-6 h-6 text-background" />
                                </div>
                                <div className="flex-1">
                                  <h3 className="font-heading font-semibold mb-1 group-hover:text-accent transition-colors">
                                    {link.title}
                                  </h3>
                                  <p className="text-sm text-muted-foreground">
                                    {link.description}
                                  </p>
                                </div>
                                <ArrowRight className="w-5 h-5 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* TOGETHER Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => setActiveMenu("together")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button
                className={cn(
                  "px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg relative group",
                  activeMenu === "together" || isActive("/contact")
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                Together
                <span className={cn(
                  "absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300",
                  activeMenu === "together" || isActive("/contact") ? "w-full" : "w-0 group-hover:w-full"
                )} />
              </button>

              {/* TOGETHER Dropdown */}
              {activeMenu === "together" && (
                <div className="absolute top-full left-0 pt-2 w-[600px] animate-fade-in">
                  <div className="bg-card/95 backdrop-blur-xl border border-border rounded-2xl shadow-2xl overflow-hidden">
                    <div className="p-8">
                      <div className="grid grid-cols-2 gap-4">
                        {togetherLinks.map((link, index) => {
                          const Icon = link.icon;
                          return (
                            <Link
                              key={index}
                              href={link.href}
                              className="group p-4 rounded-xl border border-border/50 hover:border-primary/50 bg-card/50 hover:bg-gradient-to-br hover:from-primary/5 hover:to-secondary/5 transition-all duration-300"
                            >
                              <div className="flex items-center gap-3">
                                <div className={cn(
                                  "w-10 h-10 rounded-lg bg-gradient-to-br flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform",
                                  link.color
                                )}>
                                  <Icon className="w-5 h-5 text-background" />
                                </div>
                                <div className="flex-1">
                                  <h3 className="font-heading text-sm font-semibold mb-0.5 group-hover:text-primary transition-colors">
                                    {link.title}
                                  </h3>
                                  <p className="text-xs text-muted-foreground">
                                    {link.description}
                                  </p>
                                </div>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            {isAuthenticated ? (
              <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Link href="/portal">
                  <User className="w-4 h-4 mr-2" />
                  Portal
                </Link>
              </Button>
            ) : (
              <>
                <Button asChild variant="ghost" className="text-muted-foreground hover:text-foreground">
                  <Link href="/auth">Agent Login</Link>
                </Button>
                <Button asChild className="bg-primary text-background hover:bg-primary/90">
                  <Link href="/contact">Start Project</Link>
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-background/95 backdrop-blur-xl lg:hidden transition-all duration-300 pt-24 px-6 overflow-y-auto",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col gap-8 pb-10">
          {/* Mobile Home Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Home</h3>
            <div className="grid grid-cols-1 gap-3">
              {homeLinks.map((link, index) => {
                const Icon = link.icon;
                const sectionId = link.href.replace('/#', '');
                return (
                  <a
                    key={index}
                    href={link.href}
                    onClick={(e) => handleSectionClick(e, sectionId)}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    <div className={cn("w-8 h-8 rounded-md bg-gradient-to-br flex items-center justify-center", link.color)}>
                      <Icon className="w-4 h-4 text-background" />
                    </div>
                    <span className="font-medium text-lg">{link.title}</span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Mobile We Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider">We</h3>
            <div className="grid grid-cols-1 gap-3">
              {weLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={index}
                    href={link.href}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    <div className={cn("w-8 h-8 rounded-md bg-gradient-to-br flex items-center justify-center", link.color)}>
                      <Icon className="w-4 h-4 text-background" />
                    </div>
                    <span className="font-medium text-lg">{link.title}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Mobile Create Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Create</h3>
            <div className="grid grid-cols-1 gap-3">
              {createLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={index}
                    href={link.href}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    <div className={cn("w-8 h-8 rounded-md bg-gradient-to-br flex items-center justify-center", link.color)}>
                      <Icon className="w-4 h-4 text-background" />
                    </div>
                    <span className="font-medium text-lg">{link.title}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Mobile Impact Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Impact</h3>
            <div className="grid grid-cols-1 gap-3">
              {impactLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={index}
                    href={link.href}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    <div className={cn("w-8 h-8 rounded-md bg-gradient-to-br flex items-center justify-center", link.color)}>
                      <Icon className="w-4 h-4 text-background" />
                    </div>
                    <span className="font-medium text-lg">{link.title}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Mobile Together Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Together</h3>
            <div className="grid grid-cols-1 gap-3">
              {togetherLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={index}
                    href={link.href}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    <div className={cn("w-8 h-8 rounded-md bg-gradient-to-br flex items-center justify-center", link.color)}>
                      <Icon className="w-4 h-4 text-background" />
                    </div>
                    <span className="font-medium text-lg">{link.title}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Mobile CTA */}
          <div className="pt-6 border-t border-border/50 flex flex-col gap-3">
            {isAuthenticated ? (
              <Button asChild variant="outline" className="w-full border-primary text-primary">
                <Link href="/portal">
                  <User className="w-4 h-4 mr-2" />
                  Portal
                </Link>
              </Button>
            ) : (
              <>
                <Button asChild variant="ghost" className="w-full justify-start text-muted-foreground hover:text-foreground">
                  <Link href="/auth">Agent Login</Link>
                </Button>
                <Button asChild className="w-full bg-primary text-background">
                  <Link href="/contact">Start Project</Link>
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
