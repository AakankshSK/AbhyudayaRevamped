import { cn } from "@/lib/utils";

type SectionIntroProps = {
  title: string;
  titleId: string;
  subtitle?: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
  as?: "h1" | "h2";
};

/**
 * Standardized section header stack:
 * Title → gold divider → optional subtitle → optional description
 */
export function SectionIntro({
  title,
  titleId,
  subtitle,
  description,
  align = "center",
  className,
  as: Heading = "h1",
}: SectionIntroProps) {
  const centered = align === "center";

  return (
    <div className={cn(centered && "text-center", className)}>
      <Heading id={titleId} className="section-title">
        {title}
      </Heading>
      <div
        className={cn("mt-4", centered ? "divider-gold-center" : "divider-gold")}
        aria-hidden
      />
      {subtitle && (
        <p className={cn("section-subtitle mt-4", centered && "mx-auto max-w-3xl")}>
          {subtitle}
        </p>
      )}
      {description && (
        <p
          className={cn(
            "section-body mt-4",
            centered ? "prose-measure" : "prose-measure-left"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
