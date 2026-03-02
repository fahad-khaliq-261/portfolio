import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Heart, Scale, ShoppingBag, Target, Shield, Zap } from "lucide-react";
import Industries from "@/components/Industries";
import Testimonials from "@/components/Testimonials";
import { supabase } from "@/lib/supabase";
import WorkHero from "./WorkHero";
import WorkGrid from "./WorkGrid";

export default async function WorkPage() {
  const { data: caseStudies } = await supabase
    .from("case_studies")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <div className="bg-bg-primary min-h-screen">
      <WorkHero />

      {/* Projects Grid */}
      <section className="py-24 bg-bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <WorkGrid initialCaseStudies={caseStudies || []} />
        </div>
      </section>

      <Industries />
      <Testimonials />

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="glass-panel p-12 lg:p-16 text-center relative overflow-hidden bg-bg-card/50 backdrop-blur-xl border border-border rounded-[3rem]">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-purple-500/10" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">Want to be our next success story?</h2>
              <p className="text-text-secondary max-w-2xl mx-auto mb-8 font-medium">Let's discuss how we can help with your AI compliance needs.</p>
              <Link href="/contact" className="px-8 py-4 bg-text-primary text-bg-primary rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-accent hover:text-text-primary transition-all inline-flex items-center gap-2 group shadow-xl">
                Start your project
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
