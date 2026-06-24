import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ContactForm } from "@/components/contact-form";
import { ContactMapSection } from "@/components/contact-map-section";
import { FadeInSection } from "@/components/ui/fade-in-section";

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
        <div className="mx-auto max-w-3xl px-6 pb-20 lg:px-12">
          <section className="py-16" aria-labelledby="contact-heading">
            <FadeInSection>
              <h1
                id="contact-heading"
                className="text-3xl font-semibold tracking-tight md:text-4xl"
              >
                Contact us
              </h1>
              <p className="mt-4 text-muted-foreground">
                Have a project in mind or a question? Fill out the form below and we&apos;ll get back to you soon!
              </p>
            </FadeInSection>
            <FadeInSection delay={0.1}>
              <div className="mt-10">
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
