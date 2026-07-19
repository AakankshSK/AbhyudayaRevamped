/**
 * Client-approved brand palette — Abhyudaya CMS consultancy design system.
 * CSS custom properties in app/globals.css mirror these values.
 */
export const BRAND_COLORS = {
  /** Deep Navy Blue — headers, nav, primary buttons, footer */
  navy: "#12355B",
  /** Emerald / Forest Green — interactive, icons, hover, CTAs */
  emerald: "#0F8A5F",
  /** Warm Muted Gold — sparingly: dividers, premium accents only */
  gold: "#C9A227",
  /** Clean Off White — page background */
  background: "#F8F9F6",
  /** White — cards */
  card: "#FFFFFF",
  /** Charcoal / Slate Grey — body text */
  text: "#374151",
  /** Muted grey — secondary text */
  muted: "#6B7280",
} as const;

export const SPLASH = {
  durationMs: 2500,
  subtitle: "Consultancy & Management Services",
} as const;
