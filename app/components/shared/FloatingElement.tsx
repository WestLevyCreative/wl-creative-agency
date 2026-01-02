type FloatingElementType =
  | 'triangle'
  | 'circle'
  | 'diamond'
  | 'square'
  | 'hexagon'
  | 'star'
  | 'mirror'
  | 'compass'
  | 'connection-node'
  | 'crown'
  | 'quill'
  | 'award'
  | 'seal'
  | 'shield'
  | 'laurel'
  | 'star-badge'
  | 'ribbon'
  | 'globe'
  | 'compass-rose'
  | 'location-pin'
  | 'flight-path';

interface FloatingElementProps {
  type: FloatingElementType;
  className?: string;
  delay?: number;
  speed?: 'slow' | 'medium' | 'fast';
}

export const FloatingElement = ({
  type,
  className = '',
  delay = 0,
  speed = 'medium'
}: FloatingElementProps) => {
  const speedClass = {
    slow: 'animate-float-slow',
    medium: 'animate-float-medium',
    fast: 'animate-float-medium'
  }[speed];

  const shapes: Record<FloatingElementType, React.ReactElement> = {
    triangle: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <polygon
          points="50,10 90,90 10,90"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
    circle: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
    diamond: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <polygon
          points="50,5 95,50 50,95 5,50"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
    square: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <rect
          x="15"
          y="15"
          width="70"
          height="70"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
    hexagon: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <polygon
          points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
    star: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <polygon
          points="50,10 61,40 95,40 68,60 79,90 50,70 21,90 32,60 5,40 39,40"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
    mirror: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <ellipse
          cx="50"
          cy="40"
          rx="35"
          ry="35"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <line
          x1="50"
          y1="75"
          x2="50"
          y2="95"
          stroke="currentColor"
          strokeWidth="2"
        />
        <line
          x1="35"
          y1="95"
          x2="65"
          y2="95"
          stroke="currentColor"
          strokeWidth="2"
        />
        {/* Reflection shimmer */}
        <path
          d="M 30 30 Q 35 35 40 30"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.6"
        />
      </svg>
    ),
    compass: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        {/* Compass points */}
        <line x1="50" y1="5" x2="50" y2="20" stroke="currentColor" strokeWidth="2" />
        <line x1="50" y1="80" x2="50" y2="95" stroke="currentColor" strokeWidth="2" />
        <line x1="5" y1="50" x2="20" y2="50" stroke="currentColor" strokeWidth="2" />
        <line x1="80" y1="50" x2="95" y2="50" stroke="currentColor" strokeWidth="2" />
        {/* Needle */}
        <polygon
          points="50,30 55,50 50,55 45,50"
          fill="currentColor"
          opacity="0.8"
        />
      </svg>
    ),
    'connection-node': (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <circle
          cx="50"
          cy="50"
          r="15"
          fill="currentColor"
          opacity="0.3"
        />
        <circle
          cx="50"
          cy="50"
          r="15"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        {/* Connection lines radiating out */}
        <line x1="50" y1="50" x2="80" y2="30" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        <line x1="50" y1="50" x2="20" y2="70" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        <line x1="50" y1="50" x2="85" y2="75" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      </svg>
    ),
    crown: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Crown base */}
        <polygon
          points="15,70 85,70 80,50 70,55 60,40 50,45 40,40 30,55 20,50"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        {/* Crown jewels */}
        <circle cx="30" cy="55" r="3" fill="currentColor" opacity="0.6" />
        <circle cx="50" cy="45" r="3" fill="currentColor" opacity="0.6" />
        <circle cx="70" cy="55" r="3" fill="currentColor" opacity="0.6" />
        {/* Crown points */}
        <line x1="30" y1="50" x2="25" y2="35" stroke="currentColor" strokeWidth="1.5" />
        <line x1="50" y1="40" x2="50" y2="25" stroke="currentColor" strokeWidth="1.5" />
        <line x1="70" y1="50" x2="75" y2="35" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    quill: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Quill feather */}
        <path
          d="M 30 20 Q 40 30 35 50 Q 33 70 30 90 Q 45 60 50 50 Q 55 40 65 30"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        {/* Feather details */}
        <path d="M 35 30 Q 45 35 50 30" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.6" />
        <path d="M 33 40 Q 43 45 48 40" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.6" />
        <path d="M 32 50 Q 42 55 47 50" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.6" />
        {/* Ink drops */}
        <circle cx="25" cy="85" r="2" fill="currentColor" opacity="0.4" />
        <circle cx="28" cy="92" r="1.5" fill="currentColor" opacity="0.4" />
      </svg>
    ),
    award: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Award medallion */}
        <circle
          cx="50"
          cy="45"
          r="20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle
          cx="50"
          cy="45"
          r="15"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.6"
        />
        {/* Star in center */}
        <polygon
          points="50,35 52,41 58,41 53,45 55,51 50,47 45,51 47,45 42,41 48,41"
          fill="currentColor"
          opacity="0.6"
        />
        {/* Ribbons */}
        <path
          d="M 40 60 L 35 90 L 42 85 L 40 60"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M 60 60 L 65 90 L 58 85 L 60 60"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
    seal: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Seal outer circle */}
        <circle
          cx="50"
          cy="50"
          r="35"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        {/* Inner scalloped edge */}
        <circle
          cx="50"
          cy="50"
          r="28"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="8 3"
          opacity="0.6"
        />
        {/* Center emblem */}
        <polygon
          points="50,30 60,45 50,50 40,45"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <polygon
          points="50,50 60,55 50,70 40,55"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
    shield: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Shield outline */}
        <path
          d="M 50 10 L 80 25 L 80 50 Q 80 75 50 90 Q 20 75 20 50 L 20 25 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        {/* Shield inner border */}
        <path
          d="M 50 18 L 72 30 L 72 50 Q 72 70 50 82 Q 28 70 28 50 L 28 30 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.6"
        />
        {/* Center emblem - cross/star */}
        <line x1="50" y1="35" x2="50" y2="65" stroke="currentColor" strokeWidth="1.5" opacity="0.8" />
        <line x1="35" y1="50" x2="65" y2="50" stroke="currentColor" strokeWidth="1.5" opacity="0.8" />
      </svg>
    ),
    laurel: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Left laurel branch */}
        <path
          d="M 25 70 Q 20 60 22 50 Q 24 40 28 32 Q 30 28 32 25"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        {/* Left leaves */}
        <ellipse cx="25" cy="65" rx="4" ry="6" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.7" />
        <ellipse cx="23" cy="55" rx="4" ry="6" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.7" />
        <ellipse cx="25" cy="45" rx="4" ry="6" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.7" />
        <ellipse cx="27" cy="35" rx="4" ry="6" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.7" />

        {/* Right laurel branch */}
        <path
          d="M 75 70 Q 80 60 78 50 Q 76 40 72 32 Q 70 28 68 25"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        {/* Right leaves */}
        <ellipse cx="75" cy="65" rx="4" ry="6" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.7" />
        <ellipse cx="77" cy="55" rx="4" ry="6" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.7" />
        <ellipse cx="75" cy="45" rx="4" ry="6" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.7" />
        <ellipse cx="73" cy="35" rx="4" ry="6" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.7" />

        {/* Center tie */}
        <circle cx="50" cy="75" r="3" fill="none" stroke="currentColor" strokeWidth="1" />
      </svg>
    ),
    'star-badge': (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Outer circle */}
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        {/* Inner circle */}
        <circle
          cx="50"
          cy="50"
          r="32"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.6"
        />
        {/* Star */}
        <polygon
          points="50,25 55,40 70,42 60,52 62,67 50,60 38,67 40,52 30,42 45,40"
          fill="currentColor"
          opacity="0.3"
        />
        <polygon
          points="50,25 55,40 70,42 60,52 62,67 50,60 38,67 40,52 30,42 45,40"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
    ribbon: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Ribbon center */}
        <ellipse
          cx="50"
          cy="35"
          rx="25"
          ry="15"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        {/* Left ribbon tail */}
        <path
          d="M 30 35 L 20 80 L 28 75 L 35 85"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        {/* Right ribbon tail */}
        <path
          d="M 70 35 L 80 80 L 72 75 L 65 85"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        {/* Ribbon folds */}
        <line x1="30" y1="35" x2="30" y2="45" stroke="currentColor" strokeWidth="1" opacity="0.6" />
        <line x1="50" y1="35" x2="50" y2="48" stroke="currentColor" strokeWidth="1" opacity="0.6" />
        <line x1="70" y1="35" x2="70" y2="45" stroke="currentColor" strokeWidth="1" opacity="0.6" />
      </svg>
    ),
    globe: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Globe circle */}
        <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="1.5" />
        {/* Latitude lines */}
        <ellipse cx="50" cy="50" rx="35" ry="10" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />
        <ellipse cx="50" cy="50" rx="35" ry="20" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />
        <ellipse cx="50" cy="50" rx="35" ry="30" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />
        {/* Longitude line */}
        <ellipse cx="50" cy="50" rx="12" ry="35" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />
        <ellipse cx="50" cy="50" rx="24" ry="35" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />
      </svg>
    ),
    'compass-rose': (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Outer circle */}
        <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="1.5" />
        {/* Cardinal points */}
        <polygon points="50,10 52,45 50,48 48,45" fill="currentColor" opacity="0.8" />
        <polygon points="90,50 55,52 52,50 55,48" fill="currentColor" opacity="0.6" />
        <polygon points="50,90 48,55 50,52 52,55" fill="currentColor" opacity="0.6" />
        <polygon points="10,50 45,48 48,50 45,52" fill="currentColor" opacity="0.6" />
        {/* Intercardinal points */}
        <line x1="68" y1="68" x2="58" y2="58" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        <line x1="32" y1="68" x2="42" y2="58" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        <line x1="68" y1="32" x2="58" y2="42" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        <line x1="32" y1="32" x2="42" y2="42" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        {/* Center */}
        <circle cx="50" cy="50" r="4" fill="currentColor" opacity="0.8" />
      </svg>
    ),
    'location-pin': (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Pin shape */}
        <path
          d="M 50 10 Q 35 10 25 25 Q 20 35 25 45 L 50 90 L 75 45 Q 80 35 75 25 Q 65 10 50 10 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        {/* Pin inner circle */}
        <circle cx="50" cy="30" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="50" cy="30" r="5" fill="currentColor" opacity="0.6" />
        {/* Pulse rings */}
        <circle cx="50" cy="30" r="15" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
      </svg>
    ),
    'flight-path': (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Curved flight path */}
        <path
          d="M 10 70 Q 30 40 50 50 Q 70 60 90 30"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="4 3"
        />
        {/* Start point */}
        <circle cx="10" cy="70" r="3" fill="currentColor" opacity="0.8" />
        {/* Mid points */}
        <circle cx="35" cy="45" r="2" fill="currentColor" opacity="0.6" />
        <circle cx="65" cy="55" r="2" fill="currentColor" opacity="0.6" />
        {/* End point with plane */}
        <circle cx="90" cy="30" r="3" fill="currentColor" opacity="0.8" />
        <polygon points="88,28 92,30 88,32" fill="currentColor" opacity="0.8" />
      </svg>
    ),
  };

  return (
    <div
      className={`absolute opacity-20 ${speedClass} ${className}`}
      style={{
        animationDelay: `${delay}s`,
      }}
    >
      {shapes[type]}
    </div>
  );
};
