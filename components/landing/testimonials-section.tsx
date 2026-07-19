import { FadeInSection } from "@/components/ui/fade-in-section";
import { SectionIntro } from "@/components/section-intro";

const testimonials = [
  {
    quote:
      "Abhyudaya CMS helped us streamline operations and expand into new markets with confidence.",
    author: "Business Client",
    role: "Manufacturing Sector",
  },
  {
    quote:
      "Their turnkey project management delivered our facility on schedule and ready to operate.",
    author: "Institution Partner",
    role: "Education Sector",
  },
  {
    quote:
      "Practical advisory across investments and renewable energy aligned perfectly with our growth goals.",
    author: "Entrepreneur",
    role: "Agri-Business",
  },
];

export function TestimonialsSection() {
  return (
    <section className="section-shell" aria-labelledby="testimonials-heading">
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <FadeInSection>
          <SectionIntro
            as="h2"
            titleId="testimonials-heading"
            title="What our clients say"
            align="center"
          />
        </FadeInSection>
        <div className="mt-10 grid auto-rows-fr gap-6 md:grid-cols-3 md:mt-12">
          {testimonials.map((item, index) => (
            <FadeInSection key={item.author} delay={index * 0.05}>
              <blockquote className="card-premium card-premium-accent">
                <p className="flex-1 leading-relaxed text-muted-foreground">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <footer className="mt-4 border-t pt-4">
                  <cite className="not-italic font-semibold text-primary">
                    {item.author}
                  </cite>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    {item.role}
                  </p>
                </footer>
              </blockquote>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
