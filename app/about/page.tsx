import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FadeInSection } from "@/components/ui/fade-in-section";
import {
  Target,
  CheckCircle2,
  Users,
} from "lucide-react";

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
        <div className="mx-auto max-w-4xl px-6 pb-20 lg:px-12">
          <section className="py-16" aria-labelledby="about-intro-heading">
            <FadeInSection>
              <h1
                id="about-intro-heading"
                className="text-3xl font-semibold tracking-tight md:text-4xl"
              >
                About Abhyudaya CMS
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
              At Abhyudaya Consultants and Management Services, we are dedicated to empowering businesses through comprehensive consulting and management services.
              </p>
            </FadeInSection>
          </section>

          <section className="border-t py-16" aria-labelledby="mission-heading">
            <FadeInSection>
              <h2
                id="mission-heading"
                className="flex items-center gap-2 text-2xl font-semibold md:text-3xl"
              >
                <Target className="size-8 text-primary" aria-hidden />
                Our Mission
              </h2>
              <p className="mt-6 text-muted-foreground">
                Our mission is to help grow businesses with our expertise spanning across advertisement, business development, turnkey projects, training, and property management, we provide end-to-end solutions that drive measurable results and sustainable growth.
              </p>
            </FadeInSection>
          </section>

          <section className="border-t py-16" aria-labelledby="why-heading">
            <FadeInSection>
              <h2
                id="why-heading"
                className="text-2xl font-semibold md:text-3xl"
              >
                Why Choose Us
              </h2>
              <ul className="mt-6 space-y-4" role="list">
                {strengths.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <CheckCircle2
                      className="size-5 shrink-0 text-primary mt-0.5"
                      aria-hidden
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </FadeInSection>
          </section>

          <section className="border-t py-16" aria-labelledby="team-heading">
            <FadeInSection>
              <h2
                id="team-heading"
                className="flex items-center gap-2 text-2xl font-semibold md:text-3xl"
              >
                <Users className="size-8 text-primary" aria-hidden />
                Get In Touch
              </h2>
              <p className="mt-4 text-muted-foreground">
                Get in touch to discuss your project or learn more about how we can help, we&apos;re happy to talk through your requirements and suggest the right path forward.
              </p>
            </FadeInSection>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
