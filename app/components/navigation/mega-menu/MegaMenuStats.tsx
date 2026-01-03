"use client";

import { motion } from "framer-motion";
import { fadeInScale } from "./animations";
import { StatsContent } from "./types";
import { MegaMenuQuickAction } from "./MegaMenuQuickAction";

export function MegaMenuStats({ stats, cta }: StatsContent) {
  return (
    <motion.div
      className="p-6 rounded-xl border border-border/50 bg-card/30 mega-menu-glass space-y-4"
      variants={fadeInScale}
      initial="initial"
      animate="animate"
    >
      <div className="space-y-4">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="space-y-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + index * 0.1 }}
          >
            <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {stat.value}
            </div>
            <div className="text-xs text-muted-foreground">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      {cta && (
        <div className="pt-2">
          <MegaMenuQuickAction {...cta} variant="outline" />
        </div>
      )}
    </motion.div>
  );
}
