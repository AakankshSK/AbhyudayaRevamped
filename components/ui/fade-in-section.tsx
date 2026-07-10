"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type FadeInSectionProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export function FadeInSection({
  children,
  className,
  delay = 0,
}: FadeInSectionProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={cn(className)}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
