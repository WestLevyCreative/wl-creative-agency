import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { homeCopy } from "@/data/home";
import { FloatingElement } from "@/components/shared/FloatingElement";
import { TeamPreview } from "./TeamPreview";

export function HomeSections() {
  const [isPhilosophyVisible, setIsPhilosophyVisible] = useState(false);
  const [isPartnershipsVisible, setIsPartnershipsVisible] = useState(false);
  const [isTeamVisible, setIsTeamVisible] = useState(false);
  const [isStandardVisible, setIsStandardVisible] = useState(false);
  const [isGlobalCultureVisible, setIsGlobalCultureVisible] = useState(false);
  const philosophyRef = useRef<HTMLElement>(null);
  const partnershipsRef = useRef<HTMLElement>(null);
  const teamRef = useRef<HTMLElement>(null);
  const standardRef = useRef<HTMLElement>(null);
  const globalCultureRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    // Philosophy observer
    const philosophyObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsPhilosophyVisible(true);
        }
      },
      { threshold: 0.2, rootMargin: '-50px' }
    );

    if (philosophyRef.current) {
      philosophyObserver.observe(philosophyRef.current);
      observers.push(philosophyObserver);
    }

    // Partnerships observer
    const partnershipsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsPartnershipsVisible(true);
        }
      },
      { threshold: 0.2, rootMargin: '-50px' }
    );

    if (partnershipsRef.current) {
      partnershipsObserver.observe(partnershipsRef.current);
      observers.push(partnershipsObserver);
    }

    // Team observer
    const teamObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsTeamVisible(true);
        }
      },
      { threshold: 0.2, rootMargin: '-50px' }
    );

    if (teamRef.current) {
      teamObserver.observe(teamRef.current);
      observers.push(teamObserver);
    }

    // Standard observer
    const standardObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsStandardVisible(true);
        }
      },
      { threshold: 0.2, rootMargin: '-50px' }
    );

    if (standardRef.current) {
      standardObserver.observe(standardRef.current);
      observers.push(standardObserver);
    }

    // Global Culture observer
    const globalCultureObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsGlobalCultureVisible(true);
        }
      },
      { threshold: 0.2, rootMargin: '-50px' }
    );

    if (globalCultureRef.current) {
      globalCultureObserver.observe(globalCultureRef.current);
      observers.push(globalCultureObserver);
    }

    return () => observers.forEach(obs => obs.disconnect());
  }, []);

  return (
    <>
      {/* Philosophy - 60/40 Split */}
      <section
        ref={philosophyRef}
        id={homeCopy.philosophy.id}
        className="section-padding bg-[#141414] relative overflow-hidden"
      >
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            {/* Left Content - 60% */}
            <div className="lg:col-span-3 relative z-10">
              <h2 className={`font-heading text-3xl md:text-4xl lg:text-5xl mb-6 transition-all duration-1000 ${
                isPhilosophyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                <span className="text-white">Our</span>{' '}
                <span style={{ color: '#17cbcb' }}>Philosophy</span>
              </h2>
              <div className="mb-8">
                <p className={`font-heading text-2xl md:text-3xl mb-4 transition-all duration-1000 delay-150 ${
                  isPhilosophyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                  <span className="text-white">Connection Is the </span>
                  <span className={`transition-all duration-1500 ${
                    isPhilosophyVisible ? 'opacity-100' : 'opacity-0'
                  }`} style={{ color: '#17cbcb', transitionDelay: '800ms' }}>
                    Catalyst.
                  </span>
                </p>
                <p className={`font-semibold text-lg mb-6 transition-all duration-1000 delay-300 ${
                  isPhilosophyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`} style={{ color: '#17cbcb' }}>
                  {homeCopy.philosophy.subhead2}
                </p>
              </div>
              <p className={`text-gray-300 text-lg leading-relaxed transition-all duration-1000 delay-500 ${
                isPhilosophyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                {homeCopy.philosophy.body}
              </p>
            </div>

            {/* Right Image - 40% */}
            <div className={`lg:col-span-2 relative transition-all duration-1000 delay-700 ${
              isPhilosophyVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/philosophy-wlca.jpg"
                  alt="Collaborative network and connection"
                  width={1600}
                  height={1000}
                  className="w-full h-auto object-cover"
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  priority
                />
                {/* Subtle overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#4EC4BE]/10 to-transparent" />
              </div>
              {/* Accent element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#4EC4BE]/20 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Partnerships - The Gallery of Wonders */}
      <section
        ref={partnershipsRef}
        id={homeCopy.partnerships.id}
        className="section-padding relative overflow-hidden min-h-screen flex items-center"
        style={{ background: "linear-gradient(180deg, #121827 0%, #000000 100%)" }}
      >
        {/* Spotlight effects - radial gradients */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full bg-process-gold/20 blur-3xl animate-spotlight" />
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-process-glow/15 blur-3xl animate-spotlight" style={{ animationDelay: '2s' }} />
          <div className="absolute top-2/3 left-1/4 w-64 h-64 rounded-full bg-process-gold/10 blur-3xl animate-spotlight" style={{ animationDelay: '4s' }} />
        </div>

        {/* Golden particle rain */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-[10%] w-1 h-1 bg-process-gold rounded-full animate-gold-particle" style={{ animationDelay: '0s' }} />
          <div className="absolute top-0 left-[25%] w-1 h-1 bg-process-gold rounded-full animate-gold-particle" style={{ animationDelay: '1.5s' }} />
          <div className="absolute top-0 left-[40%] w-1.5 h-1.5 bg-process-gold rounded-full animate-gold-particle" style={{ animationDelay: '3s' }} />
          <div className="absolute top-0 left-[60%] w-1 h-1 bg-process-gold rounded-full animate-gold-particle" style={{ animationDelay: '0.8s' }} />
          <div className="absolute top-0 left-[75%] w-1 h-1 bg-process-gold rounded-full animate-gold-particle" style={{ animationDelay: '2.2s' }} />
          <div className="absolute top-0 left-[90%] w-1.5 h-1.5 bg-process-gold rounded-full animate-gold-particle" style={{ animationDelay: '4.5s' }} />
        </div>

        {/* Editorial background image */}
        <div className="absolute inset-0 opacity-12">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-image-reveal"
            style={{
              backgroundImage: `url('/images/mid-page-brand.jpg')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-process-dark via-process-dark/95 to-process-dark/90" />
        </div>

        {/* Velvet texture overlay - very subtle */}
        <div className="absolute inset-0 opacity-5 mix-blend-overlay">
          <div className="w-full h-full" style={{
            backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)',
          }} />
        </div>

        {/* Floating Gallery elements */}
        <div className="absolute inset-0 pointer-events-none">
          <FloatingElement type="crown" className="w-16 h-16 md:w-20 md:h-20 text-process-gold top-[12%] left-[8%]" delay={0} speed="slow" />
          <FloatingElement type="crown" className="w-12 h-12 md:w-16 md:h-16 text-process-glow top-[20%] right-[10%]" delay={2} speed="medium" />
          <FloatingElement type="quill" className="w-14 h-14 md:w-18 md:h-18 text-process-gold top-[65%] left-[12%]" delay={0.8} speed="slow" />
          <FloatingElement type="quill" className="w-10 h-10 md:w-14 md:h-14 text-process-glow top-[75%] right-[15%]" delay={2.5} speed="medium" />
          <FloatingElement type="award" className="w-14 h-14 md:w-18 md:h-18 text-process-gold top-[45%] right-[18%]" delay={1.2} speed="slow" />
          <FloatingElement type="award" className="w-12 h-12 md:w-16 md:h-16 text-process-glow top-[55%] left-[20%]" delay={3} speed="medium" />
          <FloatingElement type="seal" className="w-12 h-12 md:w-16 md:h-16 text-process-gold top-[82%] left-[25%]" delay={1.5} speed="slow" />
          <FloatingElement type="seal" className="w-10 h-10 md:w-14 md:h-14 text-process-glow top-[15%] right-[22%]" delay={0.5} speed="medium" />
        </div>

        {/* Content */}
        <div className="container-custom max-w-4xl relative z-10">
          <h2 className={`font-heading text-3xl md:text-4xl mb-6 transition-all duration-1000 ${
            isPartnershipsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <span className="text-white">Signature </span>
            <span className={`transition-all duration-1500 ${
              isPartnershipsVisible ? 'opacity-100' : 'opacity-0'
            }`} style={{ color: '#17cbcb', transitionDelay: '600ms' }}>
              Partnerships
            </span>
          </h2>
          <p className={`text-process-muted text-lg leading-relaxed mb-8 transition-all duration-1000 delay-300 ${
            isPartnershipsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {homeCopy.partnerships.body}
          </p>
          <div className={`transition-all duration-1000 delay-500 ${
            isPartnershipsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <Link
              href={homeCopy.partnerships.ctaHref}
              className="group inline-flex items-center justify-center px-8 py-3 rounded-full border-2 border-process-gold text-process-gold font-medium hover:bg-process-gold hover:text-process-dark transition-all duration-300 hover:shadow-[0_0_30px_rgba(217,192,122,0.3)]"
            >
              {homeCopy.partnerships.ctaLabel}
            </Link>
          </div>
        </div>

        {/* Royal glow accents */}
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <div className="absolute top-1/3 left-1/4 w-40 h-40 md:w-56 md:h-56 rounded-full bg-process-gold blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-1/3 right-1/3 w-48 h-48 md:w-64 md:h-64 rounded-full bg-process-glow blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }} />
        </div>
      </section>

      {/* Meet the Team */}
      <section
        ref={teamRef}
        className={`transition-all duration-1000 ${
          isTeamVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <TeamPreview />
      </section>

      {/* Standard - The Hall of Standards */}
      <section
        ref={standardRef}
        id={homeCopy.standard.id}
        className="section-padding relative overflow-hidden min-h-screen flex items-center"
        style={{ background: "linear-gradient(180deg, #121827 0%, #000000 100%)" }}
      >
        {/* Vertical light beams - monument style */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-[10%] top-0 bottom-0 w-24 md:w-32 bg-gradient-to-b from-transparent via-process-glow/10 to-transparent animate-beam-shimmer" />
          <div className="absolute left-[30%] top-0 bottom-0 w-20 md:w-28 bg-gradient-to-b from-transparent via-process-gold/10 to-transparent animate-beam-shimmer" style={{ animationDelay: '1.5s' }} />
          <div className="absolute right-[30%] top-0 bottom-0 w-24 md:w-32 bg-gradient-to-b from-transparent via-process-glow/10 to-transparent animate-beam-shimmer" style={{ animationDelay: '3s' }} />
          <div className="absolute right-[10%] top-0 bottom-0 w-20 md:w-28 bg-gradient-to-b from-transparent via-process-gold/10 to-transparent animate-beam-shimmer" style={{ animationDelay: '0.8s' }} />
        </div>

        {/* Dust particles floating in light beams */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-[12%] bottom-[20%] w-1 h-1 rounded-full bg-process-glow animate-dust-float" style={{ animationDelay: '0s' }} />
          <div className="absolute left-[15%] bottom-[40%] w-0.5 h-0.5 rounded-full bg-process-gold animate-dust-float" style={{ animationDelay: '1.2s' }} />
          <div className="absolute left-[32%] bottom-[30%] w-1 h-1 rounded-full bg-process-glow animate-dust-float" style={{ animationDelay: '2.5s' }} />
          <div className="absolute left-[35%] bottom-[50%] w-0.5 h-0.5 rounded-full bg-process-gold animate-dust-float" style={{ animationDelay: '0.8s' }} />
          <div className="absolute right-[32%] bottom-[25%] w-1 h-1 rounded-full bg-process-glow animate-dust-float" style={{ animationDelay: '1.8s' }} />
          <div className="absolute right-[28%] bottom-[45%] w-0.5 h-0.5 rounded-full bg-process-gold animate-dust-float" style={{ animationDelay: '3.5s' }} />
          <div className="absolute right-[12%] bottom-[35%] w-1 h-1 rounded-full bg-process-glow animate-dust-float" style={{ animationDelay: '0.5s' }} />
          <div className="absolute right-[15%] bottom-[55%] w-0.5 h-0.5 rounded-full bg-process-gold animate-dust-float" style={{ animationDelay: '2.2s' }} />
        </div>

        {/* Pillar gradients - monument atmosphere */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute left-[8%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-process-glow to-transparent" />
          <div className="absolute left-[25%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-process-gold to-transparent" />
          <div className="absolute right-[25%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-process-glow to-transparent" />
          <div className="absolute right-[8%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-process-gold to-transparent" />
        </div>

        {/* Floating Hall of Standards elements */}
        <div className="absolute inset-0 pointer-events-none">
          <FloatingElement type="shield" className="w-16 h-16 md:w-20 md:h-20 text-process-glow top-[15%] left-[10%]" delay={0} speed="slow" />
          <FloatingElement type="shield" className="w-14 h-14 md:w-18 md:h-18 text-process-gold top-[20%] right-[12%]" delay={1.8} speed="medium" />
          <FloatingElement type="laurel" className="w-16 h-16 md:w-20 md:h-20 text-process-gold top-[65%] left-[8%]" delay={0.6} speed="slow" />
          <FloatingElement type="laurel" className="w-12 h-12 md:w-16 md:h-16 text-process-glow top-[70%] right-[10%]" delay={2.3} speed="medium" />
          <FloatingElement type="star-badge" className="w-14 h-14 md:w-18 md:h-18 text-process-glow top-[40%] right-[15%]" delay={1} speed="slow" />
          <FloatingElement type="star-badge" className="w-12 h-12 md:w-16 md:h-16 text-process-gold top-[50%] left-[18%]" delay={2.8} speed="medium" />
          <FloatingElement type="ribbon" className="w-12 h-12 md:w-16 md:h-16 text-process-glow top-[80%] left-[22%]" delay={1.4} speed="slow" />
          <FloatingElement type="ribbon" className="w-10 h-10 md:w-14 md:h-14 text-process-gold top-[12%] right-[20%]" delay={0.4} speed="medium" />
        </div>

        {/* Content */}
        <div className="container-custom max-w-4xl relative z-10">
          <h2 className={`font-heading text-3xl md:text-4xl mb-4 transition-all duration-1000 ${
            isStandardVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <span className="text-white">The West Levy </span>
            <span className={`transition-all duration-1500 ${
              isStandardVisible ? 'opacity-100' : 'opacity-0'
            }`} style={{ color: '#17cbcb', transitionDelay: '600ms' }}>
              Standard
            </span>
          </h2>
          <p className={`text-process-gold font-medium mb-6 transition-all duration-1000 delay-300 ${
            isStandardVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {homeCopy.standard.subhead}
          </p>
          <p className={`text-process-muted text-lg leading-relaxed transition-all duration-1000 delay-500 ${
            isStandardVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {homeCopy.standard.body}
          </p>
        </div>

        {/* Achievement glow accents */}
        <div className="absolute inset-0 pointer-events-none opacity-8">
          <div className="absolute top-1/3 left-1/3 w-48 h-48 md:w-64 md:h-64 rounded-full bg-process-glow blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-1/3 right-1/3 w-56 h-56 md:w-72 md:h-72 rounded-full bg-process-gold blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }} />
        </div>
      </section>

      {/* Global Culture - The Atlas Chamber */}
      <section
        ref={globalCultureRef}
        id={homeCopy.globalCulture.id}
        className="section-padding bg-[#141414] relative overflow-hidden min-h-screen flex items-center"
      >
        {/* Rotating world map pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="animate-globe-rotate">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="worldPattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                  <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-process-glow" />
                  <ellipse cx="100" cy="100" rx="80" ry="30" fill="none" stroke="currentColor" strokeWidth="0.3" className="text-process-gold" />
                  <ellipse cx="100" cy="100" rx="40" ry="80" fill="none" stroke="currentColor" strokeWidth="0.3" className="text-process-glow" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#worldPattern)" />
            </svg>
          </div>
        </div>

        {/* Connection lines between global points */}
        <div className="absolute inset-0 pointer-events-none opacity-15">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <path d="M 20% 30% Q 40% 20% 60% 40%" stroke="currentColor" strokeWidth="1" fill="none" className="text-process-glow animate-connection-draw" strokeDasharray="5 3" />
            <path d="M 60% 40% Q 75% 50% 85% 70%" stroke="currentColor" strokeWidth="1" fill="none" className="text-process-gold animate-connection-draw" strokeDasharray="5 3" style={{ animationDelay: '0.5s' }} />
            <path d="M 15% 60% Q 35% 70% 60% 40%" stroke="currentColor" strokeWidth="1" fill="none" className="text-process-glow animate-connection-draw" strokeDasharray="5 3" style={{ animationDelay: '1s' }} />
          </svg>
        </div>

        {/* Location pins with pulse effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-[20%] top-[30%]">
            <div className="w-2 h-2 rounded-full bg-process-glow" />
            <div className="absolute inset-0 w-2 h-2 rounded-full bg-process-glow animate-pin-pulse" />
          </div>
          <div className="absolute left-[60%] top-[40%]">
            <div className="w-2 h-2 rounded-full bg-process-gold" />
            <div className="absolute inset-0 w-2 h-2 rounded-full bg-process-gold animate-pin-pulse" style={{ animationDelay: '0.7s' }} />
          </div>
          <div className="absolute left-[85%] top-[70%]">
            <div className="w-2 h-2 rounded-full bg-process-glow" />
            <div className="absolute inset-0 w-2 h-2 rounded-full bg-process-glow animate-pin-pulse" style={{ animationDelay: '1.4s' }} />
          </div>
          <div className="absolute left-[15%] top-[60%]">
            <div className="w-2 h-2 rounded-full bg-process-gold" />
            <div className="absolute inset-0 w-2 h-2 rounded-full bg-process-gold animate-pin-pulse" style={{ animationDelay: '0.3s' }} />
          </div>
        </div>

        {/* Editorial background image */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-image-reveal"
            style={{
              backgroundImage: `url('/images/global-culture.jpg')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-process-dark via-process-dark/95 to-process-dark/90" />
        </div>

        {/* Floating Atlas Chamber elements */}
        <div className="absolute inset-0 pointer-events-none">
          <FloatingElement type="globe" className="w-18 h-18 md:w-24 md:h-24 text-process-glow top-[15%] left-[10%]" delay={0} speed="slow" />
          <FloatingElement type="globe" className="w-16 h-16 md:w-20 md:h-20 text-process-gold top-[18%] right-[12%]" delay={2.2} speed="medium" />
          <FloatingElement type="compass-rose" className="w-16 h-16 md:w-20 md:h-20 text-process-gold top-[65%] left-[8%]" delay={0.7} speed="slow" />
          <FloatingElement type="compass-rose" className="w-14 h-14 md:w-18 md:h-18 text-process-glow top-[70%] right-[10%]" delay={2.8} speed="medium" />
          <FloatingElement type="location-pin" className="w-12 h-12 md:w-16 md:h-16 text-process-glow top-[40%] right-[18%]" delay={1.1} speed="slow" />
          <FloatingElement type="location-pin" className="w-10 h-10 md:w-14 md:h-14 text-process-gold top-[48%] left-[20%]" delay={3.2} speed="medium" />
          <FloatingElement type="flight-path" className="w-14 h-14 md:w-18 md:h-18 text-process-glow top-[78%] left-[25%]" delay={1.6} speed="slow" />
          <FloatingElement type="flight-path" className="w-12 h-12 md:w-16 md:h-16 text-process-gold top-[12%] right-[22%]" delay={0.4} speed="medium" />
        </div>

        {/* Content */}
        <div className="container-custom max-w-4xl relative z-10">
          <h2 className={`font-heading text-3xl md:text-4xl mb-6 transition-all duration-1000 ${
            isGlobalCultureVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <span className="text-white">Global Creative </span>
            <span className={`transition-all duration-1500 ${
              isGlobalCultureVisible ? 'opacity-100' : 'opacity-0'
            }`} style={{ color: '#17cbcb', transitionDelay: '600ms' }}>
              Culture
            </span>
          </h2>
          <p className={`text-process-muted text-lg leading-relaxed transition-all duration-1000 delay-300 ${
            isGlobalCultureVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {homeCopy.globalCulture.body}
          </p>
        </div>

        {/* Global glow accents */}
        <div className="absolute inset-0 pointer-events-none opacity-8">
          <div className="absolute top-1/4 left-1/3 w-56 h-56 md:w-72 md:h-72 rounded-full bg-process-glow blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-80 md:h-80 rounded-full bg-process-gold blur-3xl animate-pulse-glow" style={{ animationDelay: '2.5s' }} />
        </div>
      </section>
    </>
  );
}
