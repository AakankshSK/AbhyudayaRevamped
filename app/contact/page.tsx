import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ContactForm } from "@/components/contact-form";
import { ContactMapSection } from "@/components/contact-map-section";
import { FadeInSection } from "@/components/ui/fade-in-section";
import { SectionIntro } from "@/components/section-intro";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Abhyudaya CMS. Send a message, find our address, opening hours, and contact details.",
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen pt-24 md:pt-28">
        <div className="page-container-narrow">
          <section className="section-shell" aria-labelledby="contact-heading">
            <FadeInSection>
              <SectionIntro
                titleId="contact-heading"
                title="Contact us"
                description="Have a project in mind or a question? Fill out the form below and we'll get back to you soon!"
                align="left"
              />
            </FadeInSection>
            <FadeInSection delay={0.1}>
              <div className="mt-8 md:mt-10">
                <ContactForm />
              </div>
            </FadeInSection>
          </section>
        </div>
        <ContactMapSection />
      </main>
      <SiteFooter />
    </>
  );
}
