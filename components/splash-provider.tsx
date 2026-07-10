"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LoadingScreen } from "@/components/loading-screen";
import { contentRevealVariants } from "@/lib/animation-variants";
import { SPLASH } from "@/lib/theme";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

type SplashProviderProps = {
  children: React.ReactNode;
};

export function SplashProvider({ children }: SplashProviderProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [showSplash, setShowSplash] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    if (prefersReducedMotion) {
      setShowSplash(false);
      setContentVisible(true);
    }
  }, [mounted, prefersReducedMotion]);

  useEffect(() => {
    if (!showSplash) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [showSplash]);

  const handleSplashComplete = useCallback(() => {
    setShowSplash(false);
    setContentVisible(true);
  }, []);

  useEffect(() => {
    if (!showSplash || prefersReducedMotion) return;
    const timer = window.setTimeout(handleSplashComplete, SPLASH.durationMs);
    return () => window.clearTimeout(timer);
  }, [showSplash, prefersReducedMotion, handleSplashComplete]);

  if (!mounted) {
    return <div className="opacity-0">{children}</div>;
  }

  return (
    <>
      <AnimatePresence mode="wait">
        {showSplash && !prefersReducedMotion && (
          <LoadingScreen key="splash" />
        )}
      </AnimatePresence>
      <motion.div
        variants={contentRevealVariants}
        initial="hidden"
        animate={contentVisible ? "visible" : "hidden"}
      >
        {children}
      </motion.div>
    </>
  );
}
