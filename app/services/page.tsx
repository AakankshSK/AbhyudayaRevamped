import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ServicesGrid } from "@/components/services-grid";
import { FadeInSection } from "@/components/ui/fade-in-section";
import { SectionIntro } from "@/components/section-intro";
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
        <div className="page-container">
          <section className="section-shell" aria-labelledby="services-heading">
            <FadeInSection>
              <SectionIntro
                titleId="services-heading"
                title={servicesIntro.title}
                subtitle={servicesIntro.headline}
                description={servicesIntro.body}
                align="center"
              />
            </FadeInSection>
          </section>
          <ServicesGrid />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
