export const SITE = {
  name: "Abhyudaya CMS",
  logoSrc: "/images/Abhyudayacms_logo.png",
  legalName: "Abhyudaya Consultants & Management Services",
  tagline: "Your Single-Window Growth Partner",
  email: "abhyudayacms@gmailcom",
  phone: "+91 82962 39898",
  address: "India",
  openingHours: "Mon–Sat: 9:00 AM – 6:00 PM",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.6365801429843!2d77.54632292021677!3d12.86673350276856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae400ef2a4447b%3A0x7a1e09d659664035!2sAmbaari%2C%20Vajarahalli%2C%20Bengaluru%2C%20Karnataka%20560109!5e0!3m2!1sen!2sin!4v1782305238617!5m2!1sen!2sin",
} as const;

export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
] as const;
