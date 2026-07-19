import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FadeInSection } from "@/components/ui/fade-in-section";
import { SectionIntro } from "@/components/section-intro";
import { Target, CheckCircle2, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Abhyudaya CMS—our mission, why we build modern content management solutions, and the team behind the platform.",
};

const strengths = [
  "Modern CMS solutions built with current technologies.",
  "Scalable systems that grow with your business.",
  "Comprehensive solutions tailored to meet your business needs and drive sustainable growth.",
  "Deep technical expertise business development, advertisement, turnkey projects, training, and property management.",
];

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen pt-24 md:pt-28">
        <div className="page-container-reading">
          <section className="section-shell" aria-labelledby="about-intro-heading">
            <FadeInSection>
              <SectionIntro
                titleId="about-intro-heading"
                title="About Abhyudaya CMS"
                description="At Abhyudaya Consultants and Management Services, we are dedicated to empowering businesses through comprehensive consulting and management services."
                align="left"
              />
            </FadeInSection>
          </section>

          <section
            className="border-t section-shell"
            aria-labelledby="mission-heading"
          >
            <FadeInSection>
              <h2
                id="mission-heading"
                className="flex items-center gap-2 section-heading-sm"
              >
                <Target className="size-7 shrink-0 text-secondary md:size-8" aria-hidden />
                Our Mission
              </h2>
              <div className="divider-gold mt-3" aria-hidden />
              <p className="prose-measure-left mt-4 text-muted-foreground">
                Our mission is to help grow businesses with our expertise spanning
                across advertisement, business development, turnkey projects,
                training, and property management, we provide end-to-end solutions
                that drive measurable results and sustainable growth.
              </p>
            </FadeInSection>
          </section>

          <section className="border-t section-shell" aria-labelledby="why-heading">
            <FadeInSection>
              <h2 id="why-heading" className="section-heading-sm">
                Why Choose Us
              </h2>
              <div className="divider-gold mt-3" aria-hidden />
              <ul className="mt-6 space-y-3" role="list">
                {strengths.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 leading-relaxed text-muted-foreground"
                  >
                    <CheckCircle2
                      className="mt-0.5 size-5 shrink-0 text-secondary"
                      aria-hidden
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </FadeInSection>
          </section>

          <section
            className="border-t section-shell"
            aria-labelledby="team-heading"
          >
            <FadeInSection>
              <h2
                id="team-heading"
                className="flex items-center gap-2 section-heading-sm"
              >
                <Users className="size-7 shrink-0 text-secondary md:size-8" aria-hidden />
                Get In Touch
              </h2>
              <div className="divider-gold mt-3" aria-hidden />
              <p className="prose-measure-left mt-4 text-muted-foreground">
                Get in touch to discuss your project or learn more about how we
                can help, we&apos;re happy to talk through your requirements and
                suggest the right path forward.
              </p>
            </FadeInSection>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
