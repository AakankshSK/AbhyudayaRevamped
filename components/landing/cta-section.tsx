import Link from "next/link";
import { whyChooseAbhyudaya } from "@/lib/services-data";
import { FadeInSection } from "@/components/ui/fade-in-section";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="border-t bg-primary py-20 text-primary-foreground" aria-labelledby="cta-heading">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-12">
        <FadeInSection>
          <h2 id="cta-heading" className="text-3xl font-semibold tracking-tight md:text-4xl">
            Ready to grow with Abhyudaya CMS?
          </h2>
          <p className="mt-4 text-primary-foreground/80">
            {whyChooseAbhyudaya.closing}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Get in touch</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Link href="/services">Explore services</Link>
            </Button>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
