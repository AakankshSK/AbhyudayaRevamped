import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { SITE } from "@/lib/site-config";
import { FadeInSection } from "@/components/ui/fade-in-section";

const contactRows = [
  {
    icon: MapPin,
    label: "Address",
    content: SITE.address,
  },
  {
    icon: Phone,
    label: "Phone",
    content: (
      <a
        href={`tel:${SITE.phone.replace(/\s/g, "")}`}
        className="text-primary transition-colors duration-250 hover:text-secondary"
      >
        {SITE.phone}
      </a>
    ),
  },
  {
    icon: Mail,
    label: "Email",
    content: (
      <a
        href={`mailto:${SITE.email}`}
        className="break-all text-primary transition-colors duration-250 hover:text-secondary"
      >
        {SITE.email}
      </a>
    ),
  },
  {
    icon: Clock,
    label: "Hours",
    content: SITE.openingHours,
  },
] as const;

export function ContactMapSection() {
  return (
    <section
      className="border-t bg-muted/20 section-shell"
      aria-labelledby="map-heading"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <FadeInSection>
          <h2 id="map-heading" className="section-heading-sm">
            Visit us
          </h2>
          <div className="divider-gold mt-3" aria-hidden />

          <div className="mt-8 grid items-stretch gap-8 md:grid-cols-2 md:gap-10 lg:gap-12">
            {/* Contact details — top-aligned with map */}
            <div className="flex flex-col justify-center space-y-5">
              {contactRows.map(({ icon: Icon, label, content }) => (
                <div key={label} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                    <Icon className="size-4" aria-hidden />
                  </span>
                  <div className="min-w-0 text-sm leading-relaxed">
                    <p className="font-medium text-primary">{label}</p>
                    <div className="mt-0.5 text-muted-foreground">{content}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Map — larger, balanced with contact column */}
            <div className="mx-auto w-full max-w-xl overflow-hidden rounded-xl border bg-card shadow-sm md:mx-0 md:max-w-none">
              <iframe
                title="Office location — Bengaluru, Karnataka, India"
                src={SITE.mapEmbedUrl}
                className="h-72 w-full sm:h-80 md:h-[380px] lg:h-[400px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
