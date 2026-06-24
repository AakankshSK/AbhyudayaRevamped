import { SITE } from "@/lib/site-config";
import { FadeInSection } from "@/components/ui/fade-in-section";

export function ContactMapSection() {
  return (
    <section className="border-t bg-muted/20 py-16" aria-labelledby="map-heading">
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <FadeInSection>
          <h2 id="map-heading" className="text-2xl font-semibold md:text-3xl">
            Visit us
          </h2>
          <div className="mt-6 grid gap-8 md:grid-cols-2">
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>
                <span className="font-medium text-foreground">Address:</span>{" "}
                {SITE.address}
              </p>
              <p>
                <span className="font-medium text-foreground">Phone:</span>{" "}
                <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="hover:text-foreground">
                  {SITE.phone}
                </a>
              </p>
              <p>
                <span className="font-medium text-foreground">Email:</span>{" "}
                <a href={`mailto:${SITE.email}`} className="hover:text-foreground">
                  {SITE.email}
                </a>
              </p>
              <p>
                <span className="font-medium text-foreground">Hours:</span>{" "}
                {SITE.openingHours}
              </p>
            </div>
            <div className="overflow-hidden rounded-xl border">
              <iframe
                title="Office location map"
                src={SITE.mapEmbedUrl}
                className="h-64 w-full"
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
