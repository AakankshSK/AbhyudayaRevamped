import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ServicesGrid } from "@/components/services-grid";
import { FadeInSection } from "@/components/ui/fade-in-section";
import { servicesIntro, servicesSeo } from "@/lib/services-data";

export const metadata: Metadata = {
  title: servicesSeo.title,
  description: servicesSeo.description,
};

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen pt-24 md:pt-28">
        <div className="mx-auto max-w-6xl px-6 pb-20 lg:px-12">
          <section className="py-16 text-center" aria-labelledby="services-heading">
            <FadeInSection>
              <h1
                id="services-heading"
                className="text-3xl font-semibold tracking-tight md:text-4xl"
              >
                {servicesIntro.title}
              </h1>
              <h2 className="mx-auto mt-4 max-w-3xl text-xl font-medium text-foreground md:text-2xl">
                {servicesIntro.headline}
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-muted-foreground">
                {servicesIntro.body}
              </p>
            </FadeInSection>
          </section>
          <ServicesGrid />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
