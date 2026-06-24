import { FadeInSection } from "@/components/ui/fade-in-section";

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
    <section className="py-20" aria-labelledby="testimonials-heading">
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <FadeInSection>
          <h2
            id="testimonials-heading"
            className="text-center text-3xl font-semibold tracking-tight md:text-4xl"
          >
            What our clients say
          </h2>
        </FadeInSection>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <FadeInSection key={item.author} delay={index * 0.05}>
              <blockquote className="flex h-full flex-col rounded-xl border bg-card p-6 shadow-sm">
                <p className="flex-1 text-muted-foreground">&ldquo;{item.quote}&rdquo;</p>
                <footer className="mt-4 border-t pt-4">
                  <cite className="not-italic font-semibold">{item.author}</cite>
                  <p className="text-sm text-muted-foreground">{item.role}</p>
                </footer>
              </blockquote>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
