"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { fadeInScale, starAnimation } from "./animations";
import { TestimonialContent } from "./types";

export function MegaMenuTestimonial({
  quote,
  author,
  rating,
}: TestimonialContent) {
  return (
    <motion.div
      className="p-6 rounded-xl border border-border/50 bg-card/30 mega-menu-glass"
      variants={fadeInScale}
      initial="initial"
      animate="animate"
    >
      {/* Star rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <motion.div
            key={i}
            variants={starAnimation(i)}
            initial="initial"
            animate="animate"
          >
            <Star className="w-4 h-4 fill-secondary text-secondary" />
          </motion.div>
        ))}
      </div>

      {/* Quote */}
      <p className="text-sm mb-4 leading-relaxed italic">&ldquo;{quote}&rdquo;</p>

      {/* Author */}
      <p className="text-xs text-muted-foreground font-semibold">— {author}</p>
    </motion.div>
  );
}
