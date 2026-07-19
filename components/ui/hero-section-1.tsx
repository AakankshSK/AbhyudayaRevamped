import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronRight, Menu } from "lucide-react";
import { NAV_ITEMS, SITE } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { BrandLink } from "@/components/brand-link";

const HERO_BG_IMAGE =
  "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80";

export function HeroSection() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Image
        src={HERO_BG_IMAGE}
        alt=""
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-background/80 backdrop-blur-[2px]" />

      <header className="relative z-10 border-b border-border/50 bg-background/60 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:px-12">
          <BrandLink />
          <nav className="hidden items-center gap-6 md:flex" aria-label="Main">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="nav-link text-muted-foreground hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Button asChild size="sm" className="hidden md:inline-flex">
            <Link href="/contact">
              Get started
              <ChevronRight className="size-4" aria-hidden />
            </Link>
          </Button>
          <button
            type="button"
            className="inline-flex rounded-md p-2 md:hidden"
            aria-label="Open menu"
          >
            <Menu className="size-5" />
          </button>
        </div>
      </header>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pb-24 pt-20 text-center lg:px-12 lg:pt-28">
        <AnimatedGroup>
          <p className="text-sm font-medium uppercase tracking-wider text-secondary">
            {SITE.legalName}
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-primary md:text-5xl lg:text-6xl">
            Your{" "}
            <span className="text-secondary">Single-Window</span> Growth Partner
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            End-to-end business consulting, operational management, and
            specialized advisory solutions for sustainable growth.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/services">
                Explore services
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Contact us</Link>
            </Button>
          </div>
        </AnimatedGroup>
      </div>
    </div>
  );
}
