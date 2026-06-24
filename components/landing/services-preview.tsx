import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { featuredServices } from "@/lib/services-data";
import { FadeInSection } from "@/components/ui/fade-in-section";
import { Button } from "@/components/ui/button";

export function ServicesPreview() {
  return (
    <section className="py-20" aria-labelledby="services-preview-heading">
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <FadeInSection>
          <div className="text-center">
            <h2
              id="services-preview-heading"
              className="text-3xl font-semibold tracking-tight md:text-4xl"
            >
              Our Services
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Your single-window growth partner for consulting, operations,
              investments, renewable energy, agriculture, and property
              management.
            </p>
          </div>
        </FadeInSection>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <FadeInSection key={service.id} delay={index * 0.05}>
                <article className="flex h-full flex-col rounded-xl border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
                  <div className="mb-4 inline-flex w-fit rounded-lg bg-primary/10 p-3 text-primary">
                    <Icon className="size-6" aria-hidden />
                  </div>
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <Link
                    href={`/services#${service.categoryId}`}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
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
          <div className="mt-10 text-center">
            <Button asChild variant="outline">
              <Link href="/services">View all services</Link>
            </Button>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
