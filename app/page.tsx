import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import AboutTagline from "@/components/AboutTagline";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <AboutTagline />
      <Services />
      <Testimonials />
      <ContactSection />
    </>
  );
}
