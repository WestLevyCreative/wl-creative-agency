"use client";

import { useState, useRef, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Info } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export interface TeamMember {
  id: string;
  slug: string;
  name: string;
  role: string;
  imageSrc: string;
  profileLink: string;
  shortBio?: string;
  expertise?: string[];
}

interface Props {
  teamMembers: TeamMember[];
  loading?: boolean;
  error?: string | null;
  title?: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  showVerticalDots?: boolean;
  className?: string;
}

export function ConsistentTeamSlider({
  teamMembers,
  loading = false,
  error = null,
  title = "OUR TEAM",
  subtitle = "Meet the innovators, strategists, and dreamers...",
  description = "The West Levy Creative team brings together global strategists, journalists, designers, and digital innovators who unite editorial precision with creative intuition. Purpose-driven visibility, high-impact storytelling, and consistent media momentum for brands shaping culture across international markets.",
  ctaText = "Move Mountains",
  ctaLink = "/contact",
  showVerticalDots = true,
  className = ""
}: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    skipSnaps: false,
    slidesToScroll: 1,
    dragFree: false
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
      setActiveIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      scrollPrev();
    }
    if (e.key === "ArrowRight") {
      e.preventDefault();
      scrollNext();
    }
    if (e.key === "Home") {
      e.preventDefault();
      emblaApi?.scrollTo(0);
    }
    if (e.key === "End") {
      e.preventDefault();
      emblaApi?.scrollTo(teamMembers.length - 1);
    }
  };

  const TeamCard = ({ member, index }: { member: TeamMember; index: number }) => {
    const [isInfoHovered, setIsInfoHovered] = useState(false);

    return (
      <motion.div
        className="relative min-w-[260px] md:min-w-[320px] lg:min-w-[360px] max-w-[400px] flex-shrink-0 rounded-3xl overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
        whileHover={{ scale: 1.02 }}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            window.location.href = member.profileLink;
          }
        }}
      >
        {/* Card Container */}
        <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl overflow-hidden border border-gray-800">
          {/* Image Section */}
          <div className="relative aspect-[4/5]">
            <Image
              src={member.imageSrc}
              alt={member.name}
              fill
              className="object-cover"
              priority={index < 3}
              sizes="(max-width: 768px) 260px, (max-width: 1024px) 320px, 360px"
            />
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            
            {/* Custom Corner Cutout Simulation */}
            <div className="absolute bottom-0 right-0 w-20 h-20 bg-black rounded-tl-full" />
          </div>

          {/* Vertical Text Section on Left - 80% of image height */}
          <div className="absolute inset-y-0 left-0 w-16 flex items-center justify-center">
            <div className="transform -rotate-90 origin-center text-center space-y-2">
              {/* Line 1: Name */}
              <h3 className="text-white text-sm font-bold tracking-[0.1em] uppercase">
                {member.name}
              </h3>
              {/* Line 2: Position with colored dot and phone number */}
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#00cccc] rounded-full" />
                <p className="text-[#00cccc] text-xs tracking-[0.1em] uppercase">
                  {member.role}
                </p>
              </div>
            </div>
          </div>

          {/* Info Icon with Tooltip */}
          <div 
            className="absolute bottom-4 right-4 w-10 h-10 bg-[#00cccc] rounded-full flex items-center justify-center cursor-pointer z-10 group"
            onMouseEnter={() => setIsInfoHovered(true)}
            onMouseLeave={() => setIsInfoHovered(false)}
            onFocus={() => setIsInfoHovered(true)}
            onBlur={() => setIsInfoHovered(false)}
            aria-label="View profile information"
            role="button"
            tabIndex={0}
          >
            <Info className="w-5 h-5 text-white" />
            
            {/* Tooltip */}
            <AnimatePresence>
              {isInfoHovered && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute bottom-full right-0 mb-3 w-48 bg-gray-900 text-white p-3 rounded-lg shadow-lg border border-gray-700 whitespace-nowrap"
                >
                  <h4 className="font-bold text-sm mb-1">See The Full Story</h4>
                  <Link
                    href={member.profileLink}
                    className="inline-block bg-white text-black text-sm px-3 py-1 rounded-md hover:bg-gray-200 transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    View Profile
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-4 space-y-2 bg-black border-t border-gray-800">
          <p className="text-xs uppercase tracking-[0.2em] text-gray-400">{member.role}</p>
          {member.shortBio && (
            <p className="text-sm text-gray-300 line-clamp-3">{member.shortBio}</p>
          )}
          {member.expertise && member.expertise.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {member.expertise.slice(0, 2).map((item) => (
                <span
                  key={item}
                  className="text-[11px] px-2 py-1 rounded-full bg-gray-800 border border-gray-700 text-gray-300"
                >
                  {item}
                </span>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    );
  };

  return (
    <div className={`relative overflow-hidden rounded-3xl border border-gray-800 bg-black p-6 md:p-8 ${className}`} onKeyDown={handleKeyDown} role="region" aria-label="Team members carousel">
      <div className="grid lg:grid-cols-[0.6fr,0.4fr] gap-8 lg:gap-12 items-center">
        {/* Left Static Content */}
        <div className="space-y-6 max-w-xl">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
              West Levy Creative Agency
            </p>
            <h3 className="text-4xl md:text-5xl font-bold leading-tight">
              {title.split(' ').map((word, index) => (
                <span key={index} className={index === 1 ? "text-[#00cccc]" : "text-white"}>
                  {word}{' '}
                </span>
              ))}
            </h3>
            <p className="text-gray-300 leading-relaxed">
              {description}
            </p>
          </div>

          <Link
            href={ctaLink}
            className="inline-flex items-center gap-2 rounded-full border border-[#00cccc] px-6 py-3 text-sm font-semibold text-[#00cccc] hover:bg-[#00cccc] hover:text-white transition-all duration-300"
          >
            {ctaText} →
          </Link>

          {/* Vertical Dots */}
          {showVerticalDots && (
            <div className="hidden lg:flex flex-col gap-2 mt-8">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="w-2 h-2 bg-[#00cccc] rounded-full opacity-50" />
              ))}
            </div>
          )}
        </div>

        {/* Right Slider Section */}
        <div className="relative">
          {/* Navigation Controls */}
          <div className="absolute -left-16 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-2 z-20">
            <motion.button
              type="button"
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              className="h-12 w-12 rounded-full border border-gray-600 bg-gray-800 hover:border-[#00cccc] hover:bg-[#00cccc]/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Previous team member"
            >
              <ChevronLeft className="w-6 h-6 text-[#00cccc]" />
            </motion.button>
            <motion.button
              type="button"
              onClick={scrollNext}
              disabled={!canScrollNext}
              className="h-12 w-12 rounded-full border border-gray-600 bg-gray-800 hover:border-[#00cccc] hover:bg-[#00cccc]/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Next team member"
            >
              <ChevronRight className="w-6 h-6 text-[#00cccc]" />
            </motion.button>
          </div>

          {/* Mobile Navigation */}
          <div className="flex justify-center gap-2 mb-4 lg:hidden">
            <motion.button
              type="button"
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              className="h-10 w-10 rounded-full border border-gray-600 bg-gray-800 hover:border-[#00cccc] hover:bg-[#00cccc]/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Previous team member"
            >
              <ChevronLeft className="w-5 h-5 text-[#00cccc]" />
            </motion.button>
            <motion.button
              type="button"
              onClick={scrollNext}
              disabled={!canScrollNext}
              className="h-10 w-10 rounded-full border border-gray-600 bg-gray-800 hover:border-[#00cccc] hover:bg-[#00cccc]/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Next team member"
            >
              <ChevronRight className="w-5 h-5 text-[#00cccc]" />
            </motion.button>
          </div>

          {/* Slider Container */}
          <div className="relative">
            <div
              ref={emblaRef}
              className="overflow-hidden"
              role="region"
              aria-label="Team members carousel"
            >
              <div className="flex gap-6 pb-4">
                {loading && (
                  Array.from({ length: 4 }).map((_, idx) => (
                    <div
                      key={idx}
                      className="min-w-[260px] md:min-w-[320px] lg:min-w-[360px] rounded-3xl overflow-hidden border border-gray-800 bg-gray-900 animate-pulse"
                    >
                      <div className="aspect-[4/5] bg-gray-800" />
                      <div className="p-4 space-y-3">
                        <div className="h-4 bg-gray-700 rounded w-3/4" />
                        <div className="h-3 bg-gray-700 rounded w-1/2" />
                      </div>
                    </div>
                  ))
                )}

                {!loading && error && (
                  <div className="p-4 text-red-400 text-sm">
                    Unable to load team members right now.
                  </div>
                )}

                {!loading && !error && teamMembers.length === 0 && (
                  <div className="p-4 text-gray-400 text-sm">
                    Team members will appear here once published.
                  </div>
                )}

                {!loading && !error && teamMembers.map((member, index) => (
                  <TeamCard key={member.id} member={member} index={index} />
                ))}
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {teamMembers.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full border-2 transition-all ${
                    index === activeIndex
                      ? 'bg-[#00cccc] border-[#00cccc]'
                      : 'bg-transparent border-gray-600 hover:border-gray-400'
                  }`}
                  onClick={() => emblaApi?.scrollTo(index)}
                  aria-label={`Go to team member ${index + 1}`}
                  aria-current={index === activeIndex ? 'true' : 'false'}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}