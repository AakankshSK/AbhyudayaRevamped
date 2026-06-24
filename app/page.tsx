import { HeroSection } from "@/components/ui/hero-section-1";
import { FeaturesSection } from "@/components/landing/features-section";
import { ServicesPreview } from "@/components/landing/services-preview";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { CtaSection } from "@/components/landing/cta-section";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <ServicesPreview />
      <TestimonialsSection />
      <CtaSection />
      <SiteFooter />
    </>
  );
}
