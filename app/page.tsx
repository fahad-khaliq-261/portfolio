import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import Services from "@/components/Services";
import Insights from "@/components/Insights";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import { supabase } from "@/lib/supabase";

export default async function Home() {
  const { data: caseStudies } = await supabase
    .from("case_studies")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(5);

  const mappedProjects = caseStudies?.map(cs => ({
    id: cs.id,
    category: cs.domain?.toUpperCase() || "AI SOLUTIONS",
    title: cs.title,
    tags: ["COMPLIANCE", "STRATEGY"],
    description: cs.title, // Or extract first paragraph if needed
    stat: "+100%", // Placeholder since it's not in DB yet
    statLabel: "Security Rating",
    image: cs.thumbnail_url || "",
    slug: cs.slug
  })) || [];

  return (
    <>
      <Hero />
      <Insights />
      <FeaturedProjects serverProjects={mappedProjects} />
      <Services />
      <Testimonials />
      <ContactSection />
    </>
  );
}
