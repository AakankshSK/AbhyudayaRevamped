"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type AnimatedGroupProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export function AnimatedGroup({
  children,
  className,
  delay = 0,
}: AnimatedGroupProps) {
  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
