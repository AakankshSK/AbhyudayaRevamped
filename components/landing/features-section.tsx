import { CheckCircle2, Layers, Users, Zap } from "lucide-react";
import { FadeInSection } from "@/components/ui/fade-in-section";
import { SectionIntro } from "@/components/section-intro";

const features = [
  {
    icon: Layers,
    title: "Comprehensive Solutions",
    description:
      "One trusted partner for consulting, operations, investments, renewable energy, agriculture, and property management.",
  },
  {
    icon: Users,
    title: "Industry Expertise",
    description:
      "A multidisciplinary team delivering practical solutions across diverse industries and sectors.",
  },
  {
    icon: Zap,
    title: "End-to-End Execution",
    description:
      "From planning and strategy to implementation and management, we stay with you every step of the journey.",
  },
  {
    icon: CheckCircle2,
    title: "Sustainable Growth Focus",
    description:
      "We prioritize long-term value creation, operational excellence, and measurable business outcomes.",
  },
];

export function FeaturesSection() {
  return (
    <section
      className="border-t bg-muted/20 section-shell"
      aria-labelledby="features-heading"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <FadeInSection>
          <SectionIntro
            as="h2"
            titleId="features-heading"
            title="Why businesses choose us"
            align="center"
          />
        </FadeInSection>
        <div className="mt-10 grid auto-rows-fr gap-6 sm:grid-cols-2 lg:grid-cols-4 md:mt-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <FadeInSection key={feature.title} delay={index * 0.05}>
                <article className="card-premium card-premium-accent">
                  <div className="icon-badge">
                    <Icon className="size-6" aria-hidden />
                  </div>
                  <h3 className="card-title">{feature.title}</h3>
                  <p className="card-body">{feature.description}</p>
                </article>
              </FadeInSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
