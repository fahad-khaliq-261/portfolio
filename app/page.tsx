import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import AboutTagline from "@/components/AboutTagline";
import Services from "@/components/Services";
import Insights from "@/components/Insights";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import Hero2 from "@/components/hero2";
export default function Home() {
  return (
    <>
      <Hero/>
      <Insights />
      <FeaturedProjects />
      <Services />
      <Testimonials />
      <ContactSection />
    </>
  );
}
