import Link from "next/link";
import { NAV_ITEMS, SITE } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer className="border-t border-primary/30 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-6 py-12 lg:px-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="text-lg font-semibold">{SITE.name}</p>
            <p className="mt-2 text-sm text-primary-foreground/75">
              {SITE.tagline}
            </p>
            <p className="mt-2 text-sm text-primary-foreground/75">
              {SITE.legalName}
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="text-sm font-semibold text-accent">Navigation</p>
            <ul className="mt-3 space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-primary-foreground/75 transition-colors hover:text-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-sm font-semibold text-accent">Contact</p>
            <ul className="mt-3 space-y-2 text-sm text-primary-foreground/75">
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="transition-colors hover:text-accent"
                >
                  {SITE.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                  className="transition-colors hover:text-accent"
                >
                  {SITE.phone}
                </a>
              </li>
              <li>{SITE.address}</li>
              <li>{SITE.openingHours}</li>
            </ul>
          </div>
        </div>

        <p className="mt-10 border-t border-primary-foreground/15 pt-6 text-center text-sm text-primary-foreground/60">
          © {new Date().getFullYear()} {SITE.legalName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
