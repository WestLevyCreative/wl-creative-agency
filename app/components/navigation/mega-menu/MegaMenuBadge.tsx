"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { badgeAnimation } from "./animations";
import { BadgeConfig } from "./types";

export function MegaMenuBadge({ text, variant }: BadgeConfig) {
  const variants = {
    popular: "bg-accent/20 text-accent border-accent/30",
    new: "bg-secondary/20 text-secondary border-secondary/30",
    hiring: "bg-primary/20 text-primary border-primary/30",
    beta: "bg-muted/20 text-muted-foreground border-muted/30",
  };

  return (
    <motion.span
      className={cn(
        "px-2 py-0.5 text-xs font-semibold rounded-full border inline-block",
        variants[variant]
      )}
      variants={badgeAnimation}
      initial="initial"
      animate="animate"
    >
      {text}
    </motion.span>
  );
}
