"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Clock, User } from "lucide-react";

const articles = [
  { title: "Understanding the EU AI Act: A Complete Guide", excerpt: "Everything you need to know about the European Union's comprehensive AI regulation and how it affects your organization.", category: "EU AI Act", readTime: "8 min", date: "Feb 15, 2026" },
  { title: "Colorado AI Act: What Businesses Need to Know", excerpt: "A breakdown of Colorado's consumer protection AI requirements and practical steps for compliance.", category: "Colorado AI Act", readTime: "6 min", date: "Feb 10, 2026" },
  { title: "California AI Act: Transparency Requirements Explained", excerpt: "How California's AI transparency standards impact businesses and what you need to do to comply.", category: "California AI Act", readTime: "5 min", date: "Feb 5, 2026" },
  { title: "AI Risk Assessment: Best Practices for 2026", excerpt: "A comprehensive guide to conducting AI risk assessments that meet regulatory requirements.", category: "Compliance", readTime: "7 min", date: "Jan 28, 2026" },
  { title: "Building AI Systems with Compliance in Mind", excerpt: "How to embed compliance into your AI development process from day one.", category: "Strategy", readTime: "6 min", date: "Jan 20, 2026" },
  { title: "Healthcare AI Compliance: Special Considerations", excerpt: "Unique compliance challenges and solutions for AI in healthcare settings.", category: "Healthcare", readTime: "9 min", date: "Jan 15, 2026" },
];

const categories = ["All", "EU AI Act", "Colorado AI Act", "California AI Act", "Compliance", "Strategy", "Healthcare"];

export default function InsightsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#6366f1]/10 rounded-full blur-[100px]" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto">
            <span className="tag mb-6">Insights</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Ideas &
              <span className="gradient-text"> inspiration</span>
            </h1>
            <p className="text-lg text-[#a1a1aa]">
              Stay informed on AI regulations, compliance strategies, and industry best practices.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-[#27272a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button key={category} className={`px-4 py-2 rounded-lg text-sm transition-all ${category === "All" ? "bg-[#6366f1] text-white" : "bg-[#18181b] text-[#a1a1aa] hover:bg-[#27272a]"}`}>
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <motion.article key={article.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                <Link href="/insights/article" className="block group">
                  <div className="card h-full overflow-hidden">
                    <div className="aspect-video bg-gradient-to-br from-[#18181b] to-[#111113] flex items-center justify-center border-b border-[#27272a]">
                      <span className="text-[#27272a] font-bold text-2xl">{article.category}</span>
                    </div>
                    <div className="p-6">
                      <span className="inline-block px-3 py-1 bg-[#6366f1]/20 text-[#6366f1] text-xs rounded-full mb-4">{article.category}</span>
                      <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-[#6366f1] transition-colors">{article.title}</h3>
                      <p className="text-[#a1a1aa] text-sm mb-4 line-clamp-2">{article.excerpt}</p>
                      <div className="flex items-center gap-4 text-xs text-[#71717a]">
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{article.readTime}</span>
                        <span>{article.date}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mt-12">
            <button className="btn-outline inline-flex items-center gap-2">
              Load more articles
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-[#111113]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="card p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#6366f1]/10 to-[#a855f7]/10" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Stay updated</h2>
              <p className="text-[#a1a1aa] max-w-xl mx-auto mb-8">Get the latest insights on AI compliance delivered to your inbox.</p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input type="email" placeholder="Enter your email" className="flex-1" required />
                <button type="submit" className="btn-primary whitespace-nowrap">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
