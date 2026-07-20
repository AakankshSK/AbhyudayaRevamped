export const SITE = {
  name: "Abhyudaya CMS",
  logoSrc: "/images/Abhyudayacms_logo.png",
  legalName: "Abhyudaya Consultants & Management Services",
  tagline: "Your Single-Window Growth Partner",
  email: "abhyudayacms@gmailcom",
  phone: "+91 82962 39898",
  address: "Bengaluru, Karnataka, India",
  openingHours: "Mon–Sat: 9:00 AM – 6:00 PM",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.89797594787!2d77.49085443476562!3d12.953959988588458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
} as const;

export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
] as const;
