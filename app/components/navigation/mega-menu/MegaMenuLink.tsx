"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { linkVariants, linkHoverEffect, iconGradientEffect } from "./animations";
import { MegaMenuLinkItem } from "./types";
import { MegaMenuBadge } from "./MegaMenuBadge";

interface MegaMenuLinkProps {
  link: MegaMenuLinkItem;
  index: number;
}

export function MegaMenuLink({ link, index }: MegaMenuLinkProps) {
  const Icon = link.icon;

  return (
    <motion.div
      variants={linkVariants}
      custom={index}
      initial="hidden"
      animate="visible"
    >
      <Link href={link.href}>
        <motion.div
          className="group relative p-4 rounded-xl border border-border/50 glow-accent bg-card/50 hover:bg-gradient-to-br hover:from-primary/5 hover:to-accent/5"
          initial="rest"
          whileHover="hover"
          whileTap={{ scale: 0.98 }}
          variants={linkHoverEffect}
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="flex items-start gap-4">
            {/* Animated gradient icon */}
            <motion.div
              className={cn(
                "w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center flex-shrink-0",
                link.color
              )}
              style={{
                backgroundSize: "200% 200%",
                backgroundPosition: "0% 50%",
              }}
              variants={iconGradientEffect}
              initial="rest"
              animate="rest"
              whileHover="hover"
            >
              <Icon className="w-6 h-6 text-background" />
            </motion.div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                <h4 className="font-heading font-semibold group-hover:text-primary transition-colors">
                  {link.title}
                </h4>
                {link.badge && <MegaMenuBadge {...link.badge} />}
              </div>
              <p className="text-sm text-muted-foreground">{link.description}</p>
            </div>

            {/* Arrow indicator */}
            <motion.div
              className="flex-shrink-0"
              initial={{ opacity: 0, x: -10 }}
              whileHover={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowRight className="w-5 h-5 text-primary" />
            </motion.div>
          </div>

          {/* Hover gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl pointer-events-none" />
        </motion.div>
      </Link>
    </motion.div>
  );
}
