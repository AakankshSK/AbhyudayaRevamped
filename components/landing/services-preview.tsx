import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { featuredServices } from "@/lib/services-data";
import { FadeInSection } from "@/components/ui/fade-in-section";
import { SectionIntro } from "@/components/section-intro";
import { Button } from "@/components/ui/button";

export function ServicesPreview() {
  return (
    <section className="section-shell" aria-labelledby="services-preview-heading">
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <FadeInSection>
          <SectionIntro
            as="h2"
            titleId="services-preview-heading"
            title="Our Services"
            description="Your single-window growth partner for consulting, operations, investments, renewable energy, agriculture, and property management."
            align="center"
          />
        </FadeInSection>

        <div className="mt-10 grid auto-rows-fr gap-6 sm:grid-cols-2 lg:grid-cols-3 md:mt-12">
          {featuredServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <FadeInSection key={service.id} delay={index * 0.05}>
                <article className="card-premium card-premium-accent">
                  <div className="icon-badge">
                    <Icon className="size-6" aria-hidden />
                  </div>
                  <h3 className="card-title">{service.title}</h3>
                  <p className="card-body">{service.description}</p>
                  <Link
                    href={`/services#${service.categoryId}`}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors duration-250 hover:text-secondary"
                  >
                    Learn more
                    <ArrowRight className="size-4" aria-hidden />
                  </Link>
                </article>
              </FadeInSection>
            );
          })}
        </div>

        <FadeInSection delay={0.2}>
          <div className="mt-8 text-center md:mt-10">
            <Button asChild variant="outline">
              <Link href="/services">View all services</Link>
            </Button>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
