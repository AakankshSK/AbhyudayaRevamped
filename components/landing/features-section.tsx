import { CheckCircle2, Layers, Users, Zap } from "lucide-react";
import { FadeInSection } from "@/components/ui/fade-in-section";

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
    <section className="border-t bg-muted/20 py-20" aria-labelledby="features-heading">
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <FadeInSection>
          <h2
            id="features-heading"
            className="text-center text-3xl font-semibold tracking-tight md:text-4xl"
          >
            Why businesses choose us
          </h2>
        </FadeInSection>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <FadeInSection key={feature.title} delay={index * 0.05}>
                <article className="rounded-xl border bg-card p-6 shadow-sm">
                  <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary">
                    <Icon className="size-6" aria-hidden />
                  </div>
                  <h3 className="font-semibold">{feature.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </article>
              </FadeInSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
