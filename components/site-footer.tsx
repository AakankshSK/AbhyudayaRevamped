import Link from "next/link";
import { NAV_ITEMS, SITE } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer className="relative bg-primary text-primary-foreground">
      <div className="h-px w-full bg-accent" aria-hidden />
      <div className="mx-auto max-w-6xl px-6 py-8 md:py-10 lg:px-12">
        {/* Brand — compact on mobile */}
        <div className="mb-6 md:mb-8">
          <p className="text-base font-semibold md:text-lg">{SITE.name}</p>
          <p className="mt-1 text-xs text-primary-foreground/70 md:text-sm">
            {SITE.tagline}
          </p>
          <p className="mt-1 hidden text-sm text-primary-foreground/70 sm:block">
            {SITE.legalName}
          </p>
        </div>

        {/* Desktop: 2 remaining cols beside brand area via md grid;
            Mobile: Navigation | Contact side-by-side */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-2">
          <nav aria-label="Footer">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary-foreground md:text-sm md:normal-case md:tracking-normal">
              Navigation
            </p>
            <div className="divider-gold mt-2" aria-hidden />
            <ul className="mt-3 space-y-1.5 md:space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-primary-foreground/65 transition-colors duration-250 hover:text-secondary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-primary-foreground md:text-sm md:normal-case md:tracking-normal">
              Contact
            </p>
            <div className="divider-gold mt-2" aria-hidden />
            <ul className="mt-3 space-y-1.5 text-sm text-primary-foreground/65 md:space-y-2">
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="break-all transition-colors duration-250 hover:text-secondary"
                >
                  {SITE.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                  className="transition-colors duration-250 hover:text-secondary"
                >
                  {SITE.phone}
                </a>
              </li>
              <li>{SITE.address}</li>
              <li>{SITE.openingHours}</li>
            </ul>
          </div>
        </div>

        <p className="mt-6 border-t border-primary-foreground/15 pt-4 text-center text-xs text-primary-foreground/55 md:mt-8 md:pt-5 md:text-sm">
          © {new Date().getFullYear()} {SITE.legalName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
