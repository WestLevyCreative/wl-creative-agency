"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { columnVariants, glowPulseEffect, gradientAnimation, featuredIconEffect } from "./animations";
import { FeaturedContent } from "./types";
import { MegaMenuQuickAction } from "./MegaMenuQuickAction";
import { MegaMenuStats } from "./MegaMenuStats";

interface MegaMenuFeaturedCardProps {
  content: FeaturedContent;
}

export function MegaMenuFeaturedCard({ content }: MegaMenuFeaturedCardProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  // If it's a stats type, render MegaMenuStats instead
  if (content.type === "stats") {
    return (
      <MegaMenuStats
        stats={[
          { value: "500+", label: "Successful Projects" },
          { value: "98%", label: "Client Satisfaction" },
        ]}
        cta={content.cta}
      />
    );
  }

  const Icon = content.icon;

  return (
    <motion.div
      className="relative h-full p-8 rounded-2xl overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      variants={columnVariants}
      custom={0}
    >
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          background: `linear-gradient(135deg, ${content.gradient})`,
          backgroundSize: "200% 200%",
        }}
        animate={gradientAnimation.animate}
      />

      {/* Glass overlay */}
      <div className="absolute inset-0 mega-menu-glass" />

      {/* Content with parallax */}
      <motion.div
        className="relative z-10"
        animate={{
          rotateX: mousePosition.y * 5,
          rotateY: mousePosition.x * 5,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 20 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Icon or Image */}
        {Icon && (
          <motion.div
            className="w-20 h-20 mb-6 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center"
            variants={featuredIconEffect}
            initial="rest"
            whileHover="hover"
            style={{
              transformStyle: "preserve-3d",
              transform: "translateZ(40px)",
            }}
          >
            <Icon className="w-12 h-12 text-background" />
          </motion.div>
        )}

        {content.image && (
          <div className="relative w-full h-32 mb-6 rounded-xl overflow-hidden">
            <Image
              src={content.image}
              alt={content.title}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 360px, 90vw"
            />
          </div>
        )}

        {/* Title & Description */}
        <h3 className="font-heading text-2xl font-bold mb-2">{content.title}</h3>
        <p className="text-muted-foreground mb-1">{content.subtitle}</p>
        {content.description && (
          <p className="text-sm text-muted-foreground/80 italic mb-6">
            &ldquo;{content.description}&rdquo;
          </p>
        )}

        {/* CTA */}
        <MegaMenuQuickAction {...content.cta} variant={content.cta.variant || "default"} />
      </motion.div>

      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none rounded-2xl"
        animate={glowPulseEffect.animate}
      />
    </motion.div>
  );
}
