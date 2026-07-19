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
    <article className="card-premium card-premium-accent">
      <div className="icon-badge">
        <Icon className="size-6" aria-hidden />
      </div>
      <h3 className="card-title">{title}</h3>
      <p className="card-body">{description}</p>
    </article>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 grid gap-3 sm:grid-cols-2" role="list">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground"
        >
          <CheckCircle2
            className="mt-0.5 size-4 shrink-0 text-secondary"
            aria-hidden
          />
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
        className="scroll-mt-28 border-t py-10 first:border-t-0 first:pt-0 md:py-12"
        aria-labelledby={`${category.id}-heading`}
      >
        <h2 id={`${category.id}-heading`} className="section-heading-sm">
          {category.title}
        </h2>
        <div className="divider-gold mt-3" aria-hidden />

        {category.description && (
          <p className="prose-measure-left mt-4 text-muted-foreground">
            {category.description}
          </p>
        )}

        {category.items && category.items.length > 0 && (
          <div
            className={cn(
              "mt-8 grid auto-rows-fr gap-6",
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

        {category.bulletPoints && <BulletList items={category.bulletPoints} />}

        {category.subsections?.map((subsection) => (
          <div key={subsection.title} className="mt-8">
            <h3 className="card-title">{subsection.title}</h3>
            {subsection.intro && (
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {subsection.intro}
              </p>
            )}
            <BulletList items={subsection.items} />
          </div>
        ))}

        {category.id === "renewable-energy" && category.bulletPoints && (
          <p className="prose-measure-left mt-6 text-sm leading-relaxed text-muted-foreground">
            Our objective is to help organizations reduce energy costs while
            building environmentally responsible operations.
          </p>
        )}

        {category.id === "agri-tourism-farm-development" && (
          <p className="prose-measure-left mt-6 text-sm leading-relaxed text-muted-foreground">
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
          className="mt-4 border-t py-10 md:py-12"
          aria-labelledby="why-choose-heading"
        >
          <h2 id="why-choose-heading" className="section-heading-sm">
            {whyChooseAbhyudaya.title}
          </h2>
          <div className="divider-gold mt-3" aria-hidden />
          <div className="mt-8 grid auto-rows-fr gap-6 md:grid-cols-2">
            {whyChooseAbhyudaya.points.map((point) => (
              <article
                key={point.title}
                className="card-premium card-premium-accent"
              >
                <h3 className="card-title">{point.title}</h3>
                <p className="card-body">{point.description}</p>
              </article>
            ))}
          </div>
          <p className="prose-measure mt-8 text-center text-muted-foreground">
            {whyChooseAbhyudaya.closing}
          </p>
        </section>
      </FadeInSection>
    </div>
  );
}
