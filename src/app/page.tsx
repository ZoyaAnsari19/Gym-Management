import AboutSection from "@/components/sections/about";
import HeroSection from "@/components/sections/hero";
import PricingSection from "@/components/sections/pricing";
import ServicesSection from "@/components/sections/services";
import TestimonialsSection from "@/components/sections/testimonials";
import TrainersSection from "@/components/sections/trainers";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PricingSection />
      <TrainersSection />
      <TestimonialsSection />
    </div>
  );
}
