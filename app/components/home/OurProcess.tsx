import { useEffect, useRef, useState } from 'react';

interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
}

const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery",
    subtitle: "Entering the Unknown",
    description: "We dive deep into your brand's essence, uncovering hidden narratives and untapped potential that sets the foundation for transformation."
  },
  {
    number: "02",
    title: "Narrative Development",
    subtitle: "Finding Your Voice",
    description: "Crafting the authentic story that resonates with your audience, weaving together purpose, vision, and cultural relevance."
  },
  {
    number: "03",
    title: "Strategic Storytelling",
    subtitle: "Crafting the Message",
    description: "Developing compelling narratives that captivate media, audiences, and stakeholders across every touchpoint."
  },
  {
    number: "04",
    title: "Press-Ready Content",
    subtitle: "Shaping Reality",
    description: "Creating polished, publication-worthy assets that command attention and guarantee media visibility."
  },
  {
    number: "05",
    title: "Targeted Outreach",
    subtitle: "Spreading the Word",
    description: "Strategic distribution across global stages, connecting your story with the right audiences at the perfect moment."
  },
  {
    number: "06",
    title: "Performance Optimization",
    subtitle: "Measuring the Magic",
    description: "Continuous refinement through data-driven insights, building sustained authority and measurable influence."
  }
];

const FloatingElement = ({ className, delay = 0, type }: { className?: string; delay?: number; type: 'triangle' | 'circle' | 'diamond' | 'key' | 'card' }) => {
  const shapes: Record<string, React.ReactElement> = {
    triangle: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <polygon points="50,10 90,90 10,90" fill="none" stroke="currentColor" strokeWidth="1" />
      </svg>
    ),
    circle: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="1" />
      </svg>
    ),
    diamond: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <polygon points="50,5 95,50 50,95 5,50" fill="none" stroke="currentColor" strokeWidth="1" />
      </svg>
    ),
    key: (
      <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1">
        <circle cx="8" cy="8" r="5" />
        <path d="M11 11l10 10M17 17l3 3M17 21l3-3" />
      </svg>
    ),
    card: (
      <svg viewBox="0 0 60 80" className="w-full h-full">
        <rect x="5" y="5" width="50" height="70" rx="4" fill="none" stroke="currentColor" strokeWidth="1" />
        <text x="12" y="25" fontSize="12" fill="currentColor">♠</text>
        <text x="38" y="65" fontSize="12" fill="currentColor">♠</text>
      </svg>
    )
  };

  return (
    <div 
      className={`absolute opacity-20 ${className}`}
      style={{ 
        animationDelay: `${delay}s`,
      }}
    >
      {shapes[type]}
    </div>
  );
};

const ParticleTrail = ({ index }: { index: number }) => {
  return (
    <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-32 overflow-hidden">
      <div 
        className="w-full h-full bg-gradient-to-b from-transparent via-process-glow to-transparent animate-particle-fall"
        style={{ animationDelay: `${index * 0.5}s` }}
      />
    </div>
  );
};

const ProcessStepCard = ({ step, index, isVisible }: { step: ProcessStep; index: number; isVisible: boolean }) => {
  const isLeft = index % 2 === 0;
  
  return (
    <div 
      className={`relative flex items-center gap-8 md:gap-16 transition-all duration-1000 ${
        isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
      } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Connection line */}
      <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-px">
        <div className={`h-full bg-gradient-to-r ${isLeft ? 'from-process-glow to-transparent' : 'from-transparent to-process-glow'}`} />
      </div>
      
      {/* Number orb */}
      <div className="relative flex-shrink-0 order-first md:order-none">
        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-process-dark border border-process-glow/30 flex items-center justify-center relative group">
          <div className="absolute inset-0 rounded-full bg-process-glow/10 blur-xl group-hover:bg-process-glow/20 transition-all duration-500" />
          <div className="absolute inset-2 rounded-full border border-process-glow/20 animate-spin-slow" />
          <span className="text-2xl md:text-3xl font-light text-process-glow font-display tracking-wider">
            {step.number}
          </span>
        </div>
        {index < 5 && (
          <div className="hidden md:block absolute top-full left-1/2 transform -translate-x-1/2 w-px h-24 lg:h-32">
            <div className="w-full h-full bg-gradient-to-b from-process-glow/40 via-process-glow/20 to-transparent" />
            <div className="absolute top-0 left-0 w-full h-8 bg-process-glow/60 blur-sm animate-particle-fall" 
                 style={{ animationDelay: `${index * 0.3}s` }} />
          </div>
        )}
      </div>

      {/* Content card */}
      <div className={`flex-1 max-w-lg ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
        <div className="relative p-6 md:p-8 rounded-2xl bg-process-dark/50 border border-process-border backdrop-blur-sm group hover:border-process-glow/40 transition-all duration-500">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-process-glow/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <h3 className="text-xl md:text-2xl font-display text-process-text mb-1 tracking-wide">
            {step.title}
          </h3>
          <p className="text-sm md:text-base text-process-gold italic mb-3 font-light">
            {`"${step.subtitle}"`}
          </p>
          <p className="text-process-muted text-sm md:text-base leading-relaxed">
            {step.description}
          </p>
          
          {/* Decorative corner */}
          <div className={`absolute ${isLeft ? 'right-4' : 'left-4'} top-4 w-8 h-8 opacity-30`}>
            <svg viewBox="0 0 32 32" className="w-full h-full text-process-glow">
              <path d="M0 0 L32 0 L32 8 L8 8 L8 32 L0 32 Z" fill="currentColor" opacity="0.3" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

const OurProcess = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [visibleSteps, setVisibleSteps] = useState<boolean[]>(new Array(6).fill(false));
  const [headerVisible, setHeaderVisible] = useState(false);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    // Header observer
    const headerObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const headerEl = sectionRef.current?.querySelector('.process-header');
    if (headerEl) {
      headerObserver.observe(headerEl);
      observers.push(headerObserver);
    }

    // Step observers
    stepRefs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setVisibleSteps(prev => {
                const next = [...prev];
                next[index] = true;
                return next;
              });
            }
          },
          { threshold: 0.2, rootMargin: '-50px' }
        );
        observer.observe(ref);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach(obs => obs.disconnect());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen py-24 md:py-32 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #121827 0%, #000000 100%)" }}
    >
      {/* Vortex background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-30">
          <div className="absolute inset-0 rounded-full border border-process-glow/20 animate-spin-slow" />
          <div className="absolute inset-8 rounded-full border border-process-glow/15 animate-spin-slower" style={{ animationDirection: 'reverse' }} />
          <div className="absolute inset-16 rounded-full border border-process-glow/10 animate-spin-slow" />
          <div className="absolute inset-24 rounded-full border border-process-gold/10 animate-spin-slower" style={{ animationDirection: 'reverse' }} />
        </div>
      </div>

      {/* Floating geometric elements - Layer 1 (far) */}
      <div className="absolute inset-0 pointer-events-none">
        <FloatingElement type="triangle" className="w-16 h-16 text-process-glow top-[10%] left-[5%] animate-float-slow" delay={0} />
        <FloatingElement type="circle" className="w-12 h-12 text-process-gold top-[20%] right-[10%] animate-float-medium" delay={1} />
        <FloatingElement type="diamond" className="w-20 h-20 text-process-glow top-[40%] left-[8%] animate-float-slow" delay={2} />
        <FloatingElement type="key" className="w-10 h-10 text-process-gold top-[60%] right-[5%] animate-float-medium" delay={0.5} />
        <FloatingElement type="card" className="w-8 h-12 text-process-glow top-[75%] left-[12%] animate-float-slow" delay={1.5} />
        <FloatingElement type="triangle" className="w-14 h-14 text-process-gold top-[85%] right-[15%] animate-float-medium" delay={3} />
      </div>

      {/* Floating geometric elements - Layer 2 (mid) */}
      <div className="absolute inset-0 pointer-events-none">
        <FloatingElement type="circle" className="w-24 h-24 text-process-glow/50 top-[15%] left-[20%] animate-float-medium" delay={0.3} />
        <FloatingElement type="diamond" className="w-16 h-16 text-process-gold/50 top-[35%] right-[20%] animate-float-slow" delay={1.3} />
        <FloatingElement type="key" className="w-14 h-14 text-process-glow/50 top-[55%] left-[15%] animate-float-medium" delay={2.3} />
        <FloatingElement type="card" className="w-10 h-14 text-process-gold/50 top-[70%] right-[25%] animate-float-slow" delay={0.8} />
      </div>

      {/* Gradient overlays */}
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-process-bg to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-process-bg to-transparent" />

      <div className="relative z-10 container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className={`process-header text-center mb-20 md:mb-32 transition-all duration-1000 ${
          headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <p className="text-process-muted text-sm md:text-base uppercase tracking-[0.3em] mb-4">
            Focused on your brand
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display mb-6">
            <span className="text-white">Our </span>
            <span style={{ color: '#17cbcb' }}>
              Process
            </span>
          </h2>
          
          {/* Portal entrance */}
          <div className="relative inline-block mt-8">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-process-glow/50 flex items-center justify-center animate-pulse-glow">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-process-glow/30 flex items-center justify-center">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-process-glow/40 to-process-gold/20 blur-sm" />
              </div>
            </div>
            <p className="mt-6 text-process-muted text-sm italic">
              Down the rabbit hole...
            </p>
          </div>
        </div>

        {/* Process steps */}
        <div className="relative max-w-4xl mx-auto space-y-16 md:space-y-24">
          {/* Central spine */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px transform -translate-x-1/2">
            <div className="w-full h-full bg-gradient-to-b from-process-glow/0 via-process-glow/20 to-process-glow/0" />
          </div>

          {processSteps.map((step, index) => (
            <div 
              key={step.number}
              ref={(el) => { stepRefs.current[index] = el; }}
            >
              <ProcessStepCard step={step} index={index} isVisible={visibleSteps[index]} />
            </div>
          ))}
        </div>

        {/* Final emergence */}
        <div className={`text-center mt-24 md:mt-32 transition-all duration-1000 delay-700 ${
          visibleSteps[5] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-block p-8 md:p-12 rounded-3xl bg-gradient-to-br from-process-glow/10 to-process-gold/5 border border-process-glow/20 backdrop-blur-sm">
            <p className="text-lg md:text-xl lg:text-2xl text-process-text max-w-2xl leading-relaxed font-light">
              Building{' '}
              <span className="text-process-glow font-medium">sustained authority</span>,{' '}
              <span className="text-process-gold font-medium">cultural relevance</span>, and{' '}
              <span className="bg-gradient-to-r from-process-glow to-process-gold bg-clip-text text-transparent font-medium">
                measurable influence
              </span>{' '}
              across global stages.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
