# Abhyudaya CMS

Multi-page website for **Abhyudaya CMS**—modern content management solutions. Built with Next.js, TypeScript, Tailwind CSS, and a shadcn-style component structure.

## Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS** (CSS variables for theming)
- **shadcn-style**: `components/ui` for primitives, `lib/utils.ts` for `cn()`
- **Nodemailer** for contact form → Gmail

## Site structure

| Page     | Route      | Description                          |
|----------|------------|--------------------------------------|
| Home     | `/`        | Landing: hero, features, services preview, testimonials, CTA, footer |
| About    | `/about`   | Intro, mission, why choose us, team   |
| Services | `/services`| Grid of 6 services with icons        |
| Contact  | `/contact` | Form + validation + Google Map       |

Navigation (Home, About, Services, Contact) is in the header and footer on all pages.

## Quick start

```bash
npm install
npm run dev
```

- **Home:** [http://localhost:3000](http://localhost:3000)
- **About:** [http://localhost:3000/about](http://localhost:3000/about)
- **Services:** [http://localhost:3000/services](http://localhost:3000/services)
- **Contact:** [http://localhost:3000/contact](http://localhost:3000/contact)

## Contact form (Gmail)

The contact form sends email via **Nodemailer** to your Gmail. Set these in `.env` (see `.env.example`):

- `GMAIL_USER` — your Gmail address
- `GMAIL_APP_PASSWORD` — a [Gmail App Password](https://support.google.com/accounts/answer/185833) (not your normal password)

Copy `.env.example` to `.env` and fill in the values. Restart the dev server after changing env.

## Customization

- **Site copy & contact info:** `lib/site-config.ts` (nav items, address, phone, email, opening hours, map embed URL).
- **Google Map:** Replace `SITE.mapEmbedUrl` in `lib/site-config.ts` with your Google Maps embed URL (Share → Embed a map).
- **Services list:** `lib/services-data.ts`.

## Default paths

| Purpose        | Path               |
|----------------|--------------------|
| UI components  | `components/ui/`   |
| Utilities      | `lib/utils.ts`     |
| Global styles  | `app/globals.css`  |

## Hero section

- **Component:** `components/ui/hero-section-1.tsx`
- **Dependencies:** `components/ui/button.tsx`, `components/ui/animated-group.tsx`
- **Assets:** Background and app screens use Unsplash images (see constants at top of `hero-section-1.tsx`).
- **Icons:** `lucide-react` (ArrowRight, ChevronRight, Menu, X). Logo is inline SVG.

### Usage

```tsx
import { HeroSection } from "@/components/ui/hero-section-1";

export default function Page() {
  return <HeroSection />;
}
```

### Customization

- **Copy/links:** Edit `menuItems`, CTA labels, and `href`s inside `hero-section-1.tsx`.
- **Images:** Replace `HERO_BG_IMAGE`, `HERO_APP_DARK`, `HERO_APP_LIGHT` with your URLs; keep `next.config.ts` `images.remotePatterns` in sync.
- **Responsive/mobile:** Header toggles a mobile menu; hero layout is responsive via Tailwind breakpoints (`md:`, `lg:`).

## If you need to set up from scratch

1. **Next.js + TypeScript + Tailwind**
   ```bash
   npx create-next-app@latest . --typescript --tailwind --eslint --app --use-npm
   ```

2. **shadcn**
   ```bash
   npx shadcn@latest init
   ```
   When prompted, choose **New York** style and **slate** (or any) base color. This creates `components.json` and installs into `components/ui` by default.

3. **Add components**
   ```bash
   npx shadcn@latest add button
   ```

If your project didn’t use `components/ui` before, create it and put shadcn (and shared UI) there so the CLI and imports stay consistent.

## Scripts

- `npm run dev` — development server
- `npm run build` — production build
- `npm run start` — run production build
- `npm run lint` — run ESLint
