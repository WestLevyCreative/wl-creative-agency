"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useAuth } from "@/hooks/useAuth";
import { megaMenuSections } from "./mega-menu/config";
import { dropdownVariants, columnVariants } from "./mega-menu/animations";
import { MegaMenuFeaturedCard } from "./mega-menu/MegaMenuFeaturedCard";
import { MegaMenuLink } from "./mega-menu/MegaMenuLink";
import { MegaMenuPromoCard } from "./mega-menu/MegaMenuPromoCard";

export function MegaMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const pathname = usePathname();
  const router = useRouter();
  const { isAuthenticated } = useAuth();
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const enterTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const hoverStableRef = useRef<string | null>(null);

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

  // Helper functions to handle delayed menu closing (fixes hover gap glitch)
  const handleMenuEnter = (sectionId: string) => {
    // Clear any pending close timeout
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }

    // Clear any pending enter timeout
    if (enterTimeoutRef.current) {
      clearTimeout(enterTimeoutRef.current);
    }

    // Debounce menu open by 50ms to prevent flicker
    enterTimeoutRef.current = setTimeout(() => {
      setActiveMenu(sectionId);
      hoverStableRef.current = sectionId;
    }, 50);
  };

  const handleMenuLeave = () => {
    // Clear any pending enter timeout
    if (enterTimeoutRef.current) {
      clearTimeout(enterTimeoutRef.current);
      enterTimeoutRef.current = null;
    }

    // Delay closing by 250ms to prevent flicker when moving cursor to dropdown
    closeTimeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
      hoverStableRef.current = null;
    }, 250);
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
    // Clear any pending close timeout when navigating
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
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

  // Lock body scroll when desktop mega menu is open
  useEffect(() => {
    if (activeMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [activeMenu]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
      if (enterTimeoutRef.current) {
        clearTimeout(enterTimeoutRef.current);
      }
    };
  }, []);

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

          {/* Desktop Navigation - New 2026 Three-Column Mega Menu */}
          <nav className="hidden lg:flex items-center gap-1">
            {megaMenuSections.map((section) => (
              <div
                key={section.id}
                className="relative"
                onMouseEnter={() => handleMenuEnter(section.id)}
                onMouseLeave={handleMenuLeave}
              >
                {/* Trigger Button */}
                <button
                  className={cn(
                    "px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg relative group",
                    activeMenu === section.id
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {section.trigger}
                  <span
                    className={cn(
                      "absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 pointer-events-none",
                      activeMenu === section.id ? "w-full" : "w-0 group-hover:w-full"
                    )}
                  />
                </button>

                {/* Three-Column Dropdown */}
                <AnimatePresence mode="wait">
                  {activeMenu === section.id && (
                    <motion.div
                      key={`${section.id}-${hoverStableRef.current}`}
                      className="fixed top-[73px] -mt-2 pt-2 z-50"
                      style={{
                        left: "50%",
                        x: "-50%",
                        width: `min(${section.width}px, 90vw)`,
                        maxWidth: "90vw"
                      }}
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      onMouseEnter={() => handleMenuEnter(section.id)}
                      onMouseLeave={handleMenuLeave}
                    >
                      {/* Glass Container */}
                      <div
                        className="mega-menu-glass rounded-2xl shadow-2xl overflow-hidden"
                        onClick={(e) => {
                          // Close menu when any link is clicked for fly-off effect
                          if ((e.target as HTMLElement).closest('a')) {
                            setActiveMenu(null);
                          }
                        }}
                      >
                        {/* Three-Column Grid */}
                        <div className="relative z-10 p-8 grid grid-cols-[2fr_1.75fr_1.25fr] gap-8">
                          {/* Left Column - Featured */}
                          <MegaMenuFeaturedCard content={section.featured} />

                          {/* Middle Column - Links */}
                          <motion.div
                            className="space-y-6 max-h-[calc(100vh-200px)] overflow-y-auto pr-2 mega-menu-scroll"
                            variants={columnVariants}
                            custom={1}
                          >
                            {section.links.map((group, groupIndex) => (
                              <div key={groupIndex}>
                                {group.heading && (
                                  <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">
                                    {group.heading}
                                  </h4>
                                )}
                                <div className="space-y-3">
                                  {group.links.map((link, linkIndex) => (
                                    <MegaMenuLink
                                      key={linkIndex}
                                      link={link}
                                      index={linkIndex}
                                    />
                                  ))}
                                </div>
                              </div>
                            ))}
                          </motion.div>

                          {/* Right Column - Promo */}
                          <motion.div variants={columnVariants} custom={2}>
                            <MegaMenuPromoCard {...section.promo} />
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

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
          {megaMenuSections.map((section) => (
            <div key={section.id} className="space-y-4">
              <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider">
                {section.trigger}
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {section.links.flatMap((group) => group.links).map((link, index) => {
                  const Icon = link.icon;
                  const isHomeSection = section.id === "home";
                  const sectionId = link.href.replace("/#", "");

                  return (
                    <Link
                      key={index}
                      href={link.href}
                      onClick={
                        isHomeSection && link.href.startsWith("/#")
                          ? (e) => handleSectionClick(e, sectionId)
                          : undefined
                      }
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors"
                    >
                      <div
                        className={cn(
                          "w-8 h-8 rounded-md bg-gradient-to-br flex items-center justify-center",
                          link.color
                        )}
                      >
                        <Icon className="w-4 h-4 text-background" />
                      </div>
                      <span className="font-medium text-lg">{link.title}</span>
                      {link.badge && (
                        <span className="ml-auto text-xs px-2 py-1 rounded-full bg-primary/20 text-primary">
                          {link.badge.text}
                        </span>
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}

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
