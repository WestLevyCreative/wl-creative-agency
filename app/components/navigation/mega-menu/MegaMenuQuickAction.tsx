"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { CTAButton } from "./types";

interface MegaMenuQuickActionProps extends CTAButton {
  className?: string;
}

export function MegaMenuQuickAction({
  text,
  href,
  variant = "default",
  className,
}: MegaMenuQuickActionProps) {
  const variantStyles = {
    default:
      "bg-gradient-to-r from-primary to-accent text-background hover:opacity-90",
    outline:
      "border-2 border-primary text-primary hover:bg-primary hover:text-background",
    ghost: "text-primary hover:bg-primary/10",
  };

  return (
    <Link href={href}>
      <motion.button
        className={cn(
          "px-6 py-3 rounded-full font-semibold text-sm relative overflow-hidden group",
          variantStyles[variant || "default"],
          className
        )}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{
          scale: { type: "spring", stiffness: 300, damping: 22 }
        }}
      >
        <span className="relative z-10">{text}</span>
        {variant === "default" && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100"
            initial={{ x: "-100%", opacity: 0 }}
            whileHover={{ x: "0%", opacity: 1 }}
            transition={{
              x: { duration: 0.3, ease: "easeOut" },
              opacity: { duration: 0.25, ease: "easeOut" }
            }}
          />
        )}
      </motion.button>
    </Link>
  );
}
