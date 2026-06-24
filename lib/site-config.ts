export const SITE = {
  name: "Abhyudaya CMS",
  legalName: "Abhyudaya Consultants & Management Services",
  tagline: "Your Single-Window Growth Partner",
  email: "info@abhyudayacms.com",
  phone: "+91 00000 00000",
  address: "India",
  openingHours: "Mon–Sat: 9:00 AM – 6:00 PM",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.7410999591689!3d19.08219783958241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA0JzU1LjkiTiA3MsKwNDQnMjguMCJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
} as const;

export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
] as const;
