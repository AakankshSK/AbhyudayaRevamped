import { CheckCircle2, type LucideIcon } from "lucide-react";
import {
  serviceCategories,
  whyChooseAbhyudaya,
  type ServiceCategory,
} from "@/lib/services-data";
import { FadeInSection } from "@/components/ui/fade-in-section";
import { cn } from "@/lib/utils";

function ServiceCard({
  title,
  description,
  icon: Icon,
}: {
  title: string;
  description: string;
  icon: LucideIcon;
}) {
  return (
    <article className="card-premium card-premium-accent bg-gradient-to-br from-card to-muted/30 p-6">
      <div className="mb-4 inline-flex rounded-lg bg-secondary/10 p-3 text-secondary">
        <Icon className="size-6" aria-hidden />
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
    </article>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 grid gap-3 sm:grid-cols-2" role="list">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
          <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-success" aria-hidden />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function CategorySection({ category }: { category: ServiceCategory }) {
  return (
    <FadeInSection>
      <section
        id={category.id}
        className="scroll-mt-28 border-t py-12 first:border-t-0 first:pt-0"
        aria-labelledby={`${category.id}-heading`}
      >
        <h2
          id={`${category.id}-heading`}
          className="text-2xl font-semibold tracking-tight md:text-3xl"
        >
          {category.title}
        </h2>

        {category.description && (
          <p className="mt-4 max-w-3xl text-muted-foreground">
            {category.description}
          </p>
        )}

        {category.items && category.items.length > 0 && (
          <div
            className={cn(
              "mt-8 grid gap-6",
              category.items.length === 1
                ? "md:grid-cols-1"
                : category.items.length === 2
                  ? "md:grid-cols-2"
                  : "md:grid-cols-2 lg:grid-cols-3"
            )}
          >
            {category.items.map((item) => (
              <ServiceCard
                key={item.id}
                title={item.title}
                description={item.description}
                icon={item.icon}
              />
            ))}
          </div>
        )}

        {category.bulletPoints && (
          <BulletList items={category.bulletPoints} />
        )}

        {category.subsections?.map((subsection) => (
          <div key={subsection.title} className="mt-8">
            <h3 className="text-lg font-semibold">{subsection.title}</h3>
            {subsection.intro && (
              <p className="mt-2 text-sm text-muted-foreground">
                {subsection.intro}
              </p>
            )}
            <BulletList items={subsection.items} />
          </div>
        ))}

        {category.id === "renewable-energy" && category.bulletPoints && (
          <p className="mt-6 text-sm text-muted-foreground">
            Our objective is to help organizations reduce energy costs while
            building environmentally responsible operations.
          </p>
        )}

        {category.id === "agri-tourism-farm-development" && (
          <p className="mt-6 text-sm text-muted-foreground">
            Our integrated approach enables clients to generate income through
            both agricultural production and tourism-driven experiences.
          </p>
        )}
      </section>
    </FadeInSection>
  );
}

export function ServicesGrid() {
  return (
    <div>
      {serviceCategories.map((category) => (
        <CategorySection key={category.id} category={category} />
      ))}

      <FadeInSection>
        <section
          className="mt-8 border-t py-12"
          aria-labelledby="why-choose-heading"
        >
          <h2
            id="why-choose-heading"
            className="text-2xl font-semibold tracking-tight md:text-3xl"
          >
            {whyChooseAbhyudaya.title}
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {whyChooseAbhyudaya.points.map((point) => (
              <article
                key={point.title}
                className="rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-corporate"
              >
                <h3 className="font-semibold">{point.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {point.description}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-8 text-center text-muted-foreground">
            {whyChooseAbhyudaya.closing}
          </p>
        </section>
      </FadeInSection>
    </div>
  );
}
