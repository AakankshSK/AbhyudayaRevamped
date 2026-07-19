import { SITE } from "@/lib/site-config";
import { FadeInSection } from "@/components/ui/fade-in-section";

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
          <div className="mt-6 grid gap-6 md:grid-cols-2 md:gap-8">
            <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
              <p>
                <span className="font-medium text-primary">Address:</span>{" "}
                {SITE.address}
              </p>
              <p>
                <span className="font-medium text-primary">Phone:</span>{" "}
                <a
                  href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                  className="text-primary transition-colors duration-250 hover:text-secondary"
                >
                  {SITE.phone}
                </a>
              </p>
              <p>
                <span className="font-medium text-primary">Email:</span>{" "}
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-primary transition-colors duration-250 hover:text-secondary"
                >
                  {SITE.email}
                </a>
              </p>
              <p>
                <span className="font-medium text-primary">Hours:</span>{" "}
                {SITE.openingHours}
              </p>
            </div>
            <div className="overflow-hidden rounded-xl border">
              <iframe
                title="Office location map"
                src={SITE.mapEmbedUrl}
                className="h-56 w-full md:h-64"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
