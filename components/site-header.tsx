"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { BrandLink } from "@/components/brand-link";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:px-12">
        <BrandLink />

        <nav className="hidden items-center gap-6 md:flex" aria-label="Main">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "nav-link",
                pathname === item.href
                  ? "nav-link-active text-secondary"
                  : "text-primary/80 hover:text-primary"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild size="sm">
            <Link href="/contact">Contact us</Link>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-primary md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <nav
          className="border-t bg-background px-6 py-4 md:hidden"
          aria-label="Mobile"
        >
          <ul className="space-y-3">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "block text-sm font-medium transition-colors duration-250",
                    pathname === item.href
                      ? "text-secondary"
                      : "text-primary/80 hover:text-secondary"
                  )}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Button asChild className="w-full" size="sm" variant="secondary">
                <Link href="/contact" onClick={() => setOpen(false)}>
                  Contact us
                </Link>
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
