import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { SITE } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { SiteHeader } from "@/components/site-header";

const HERO_BG_IMAGE =
  "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80";

export function HeroSection() {
  return (
    <div className="relative flex min-h-[72vh] flex-col overflow-hidden md:min-h-[85vh] lg:min-h-[92vh]">
      <SiteHeader />

      <Image
        src={HERO_BG_IMAGE}
        alt=""
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-background/80 backdrop-blur-[2px]" />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center px-6 py-16 text-center md:py-20 lg:px-12 lg:py-24">
        <AnimatedGroup>
          <p className="text-sm font-medium uppercase tracking-wider text-secondary">
            {SITE.legalName}
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-primary md:text-5xl lg:text-6xl">
            Your{" "}
            <span className="font-medium text-secondary/90">Single-Window</span>{" "}
            Growth Partner
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground md:mt-6 md:text-lg">
            End-to-end business consulting, operational management, and
            specialized advisory solutions for sustainable growth.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3 md:mt-8 md:gap-4">
            <Button asChild size="lg">
              <Link href="/services">
                Explore services
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/about#why-heading">Why Choose Us</Link>
            </Button>
          </div>
        </AnimatedGroup>
      </div>
    </div>
  );
}
