import { Variants } from "framer-motion";

/**
 * Dropdown container entrance animation
 * Spring animation with blur effect for smooth, premium feel
 */
export const dropdownVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -20,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 280,
      damping: 26,
      staggerChildren: 0.02,
      delayChildren: 0.03,
    },
  },
  exit: {
    opacity: 0,
    y: -100,
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.6, 1],
    },
  },
};

/**
 * Column stagger animation
 * Creates cascade effect: left → middle → right
 */
export const columnVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.06,
      type: "spring",
      stiffness: 260,
      damping: 24,
    },
  }),
};

/**
 * Link item cascade animation
 * Each link slides in from left with blur effect
 */
export const linkVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -10,
  },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.03,
      type: "spring",
      stiffness: 280,
      damping: 25,
    },
  }),
};

/**
 * 3D tilt hover effect for link cards
 * Creates depth with subtle rotation on hover
 */
export const linkHoverEffect: Variants = {
  rest: {
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    z: 0,
  },
  hover: {
    scale: 1.02,
    rotateX: 2,
    rotateY: -3,
    z: 20,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 22,
    },
  },
};

/**
 * Icon gradient shift and glow on hover
 * Animates background position and adds glow shadow
 */
export const iconGradientEffect: Variants = {
  rest: {
    backgroundPosition: "0% 50%",
    boxShadow: "0 0 0px rgba(78, 196, 190, 0)",
    scale: 1,
    rotate: 0,
  },
  hover: {
    backgroundPosition: "100% 50%",
    boxShadow: "0 0 25px rgba(78, 196, 190, 0.4)",
    scale: 1.15,
    rotate: 5,
    transition: {
      backgroundPosition: {
        duration: 0.5,
        ease: "easeInOut",
      },
      scale: {
        type: "spring",
        stiffness: 320,
        damping: 20,
      },
      rotate: {
        type: "spring",
        stiffness: 300,
        damping: 22,
      },
      boxShadow: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  },
};

/**
 * Pulsing glow effect for featured cards
 * Subtle pulsing shadow animation
 */
export const glowPulseEffect = {
  animate: {
    boxShadow: [
      "0 0 20px rgba(23, 203, 203, 0.2)",
      "0 0 40px rgba(23, 203, 203, 0.4)",
      "0 0 20px rgba(23, 203, 203, 0.2)",
    ],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

/**
 * Badge pop-in animation
 * Scale and rotate spring animation
 */
export const badgeAnimation: Variants = {
  initial: { scale: 0, rotate: -180 },
  animate: {
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 320,
      damping: 20,
      delay: 0.25,
    },
  },
};

/**
 * Animated gradient background overlay
 * Slow continuous gradient shift
 */
export const gradientAnimation = {
  animate: {
    backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
    transition: {
      duration: 15,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

/**
 * Star rating cascade animation
 * Stars appear one by one with rotation
 */
export const starAnimation = (index: number): Variants => ({
  initial: { scale: 0, rotate: -180 },
  animate: {
    scale: 1,
    rotate: 0,
    transition: {
      delay: 0.4 + index * 0.08,
      type: "spring",
      stiffness: 320,
      damping: 20,
    },
  },
});

/**
 * Fade in with scale animation
 * Used for promo cards
 */
export const fadeInScale: Variants = {
  initial: { opacity: 0, scale: 0.94 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.3,
      type: "spring",
      stiffness: 280,
      damping: 24,
    },
  },
};

/**
 * Simplified icon animation for featured cards
 * Removes conflicts with parent animations
 */
export const featuredIconEffect: Variants = {
  rest: {
    scale: 1,
    rotate: 0,
  },
  hover: {
    scale: 1.1,
    rotate: 3,
    transition: {
      type: "spring",
      stiffness: 280,
      damping: 22,
    },
  },
};
