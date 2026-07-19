import type { Variants } from "framer-motion";

export const easeCorporate = [0.25, 0.1, 0.25, 1] as const;

export const splashLogoVariants: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: easeCorporate },
  },
  glow: {
    opacity: 1,
    scale: 1.05,
    filter: "drop-shadow(0 0 18px rgba(15, 138, 95, 0.35))",
    transition: { duration: 0.5, ease: easeCorporate },
  },
};

export const splashBarVariants: Variants = {
  hidden: { scaleY: 0, opacity: 0 },
  visible: (i: number) => ({
    scaleY: 1,
    opacity: 1,
    transition: {
      delay: 0.55 + i * 0.1,
      duration: 0.45,
      ease: easeCorporate,
    },
  }),
};

export const splashTextVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.45, ease: easeCorporate },
  }),
};

export const splashOverlayVariants: Variants = {
  visible: { opacity: 1, pointerEvents: "auto" as const },
  exit: {
    opacity: 0,
    pointerEvents: "none" as const,
    transition: { duration: 0.55, ease: easeCorporate },
  },
};

export const contentRevealVariants: Variants = {
  hidden: { opacity: 0, pointerEvents: "none" as const },
  visible: {
    opacity: 1,
    pointerEvents: "auto" as const,
    transition: { duration: 0.5, ease: easeCorporate },
  },
};
