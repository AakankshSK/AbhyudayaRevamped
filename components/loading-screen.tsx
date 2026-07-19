"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SITE } from "@/lib/site-config";
import { SPLASH } from "@/lib/theme";
import {
  splashBarVariants,
  splashLogoVariants,
  splashOverlayVariants,
  splashTextVariants,
} from "@/lib/animation-variants";

const BAR_HEIGHTS = [32, 44, 56];

export function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
      variants={splashOverlayVariants}
      initial="visible"
      exit="exit"
      aria-live="polite"
      aria-label="Loading"
      role="status"
    >
      <div className="flex flex-col items-center px-6">
        <motion.div
          className="relative flex flex-col items-center"
          initial="hidden"
          animate={["visible", "glow"]}
          variants={splashLogoVariants}
        >
          <Image
            src={SITE.logoSrc}
            alt="Abhyudaya CMS Logo"
            width={96}
            height={96}
            priority
            className="h-20 w-auto sm:h-24"
          />

          <div className="flex items-end justify-center gap-1.5 pt-4">
            {BAR_HEIGHTS.map((height, i) => (
              <motion.div
                key={height}
                custom={i}
                variants={splashBarVariants}
                initial="hidden"
                animate="visible"
                className="w-2 origin-bottom rounded-sm bg-gradient-to-t from-primary to-secondary"
                style={{ height }}
                aria-hidden
              />
            ))}
          </div>
        </motion.div>

        <motion.h1
          custom={1.05}
          variants={splashTextVariants}
          initial="hidden"
          animate="visible"
          className="mt-6 text-2xl font-semibold tracking-tight text-primary sm:text-3xl"
        >
          {SITE.name}
        </motion.h1>

        <motion.p
          custom={1.35}
          variants={splashTextVariants}
          initial="hidden"
          animate="visible"
          className="mt-2 text-sm font-medium tracking-wide text-muted-foreground sm:text-base"
        >
          {SPLASH.subtitle}
        </motion.p>
      </div>
    </motion.div>
  );
}
