"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, CheckCircle2, ChevronRight, Share2 } from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";

interface CaseStudyClientProps {
    post: {
        title: string;
        domain: string;
        content: string;
        thumbnail_url?: string;
        created_at: string;
    };
}

export default function CaseStudyClient({ post }: CaseStudyClientProps) {
    const [toc, setToc] = useState<{ id: string; text: string; level: number }[]>([]);
    const [activeId, setActiveId] = useState<string>("");
    const [contextText, setContextText] = useState<string>("");
    const contentRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        // Generate TOC from content
        const parser = new DOMParser();
        const doc = parser.parseFromString(post.content, 'text/html');
        const headings = Array.from(doc.querySelectorAll('h2, h3'));
        const tocItems = headings.map(h => ({
            id: h.id || h.textContent?.toLowerCase().replace(/\s+/g, '-') || "",
            text: h.textContent || "",
            level: parseInt(h.tagName.substring(1))
        }));
        setToc(tocItems);

        // Find context text (first non-empty paragraph)
        const paragraphs = Array.from(doc.querySelectorAll('p'));
        const firstP = paragraphs.find(p => p.textContent && p.textContent.trim().length > 20);
        if (firstP) {
            setContextText(firstP.textContent || "");
        } else {
            // Fallback to domain description if available
            setContextText(`Explore our transformative approach to ${post.domain || "AI compliance"}, focusing on strategic implementation and regulatory assurance.`);
        }

        // Intersection Observer for highlighting active section in TOC
        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -70% 0px',
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveId(entry.target.id);
                }
            });
        }, observerOptions);

        const sections = document.querySelectorAll('h2, h3');
        sections.forEach(section => observer.observe(section));

        return () => {
            observer.disconnect();
        };
    }, [post.content]);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    const estimatedReadTime = Math.ceil(post.content.split(/\s+/).length / 200);

    return (
        <div className="min-h-screen bg-bg-primary text-text-primary selection:bg-accent/30 font-sans">
            {/* Reading Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-accent z-[110] origin-left"
                style={{ scaleX }}
            />

            {/* Background Decor */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 right-0 w-[60vw] h-[60vh] bg-accent/5 blur-[140px] rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[60vw] h-[60vh] bg-accent/5 blur-[140px] rounded-full translate-y-1/2 -translate-x-1/2" />
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 relative z-10">
                {/* Back Button */}
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-text-muted hover:text-text-primary mb-12 transition-all group"
                >
                    <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center group-hover:border-accent/40 transition-colors">
                        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                    </div>
                    <span className="text-xs uppercase tracking-widest font-black">Back to exploration</span>
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
                    {/* ── LEFT SIDEBAR (Sticky) ── */}
                    <aside className="lg:col-span-4 hidden lg:block">
                        <div className="sticky top-32 space-y-12">
                            {/* Meta Info Card */}
                            <div className="glass-panel p-8 rounded-3xl border border-border bg-bg-secondary/30 backdrop-blur-md">
                                <span className="inline-block px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-[10px] uppercase tracking-[0.2em] text-accent font-black mb-6">
                                    {post.domain || "Case Study"}
                                </span>
                                <h1 className="text-2xl font-black leading-tight mb-8 tracking-tighter">
                                    {post.title}
                                </h1>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4 text-text-muted">
                                        <div className="w-10 h-10 rounded-xl bg-bg-secondary border border-border flex items-center justify-center">
                                            <Calendar className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] uppercase tracking-widest font-bold opacity-50">Published</p>
                                            <p className="text-sm font-bold text-text-primary">
                                                {new Date(post.created_at).toLocaleDateString('en-US', {
                                                    month: 'long', year: 'numeric'
                                                })}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 text-text-muted">
                                        <div className="w-10 h-10 rounded-xl bg-bg-secondary border border-border flex items-center justify-center">
                                            <Clock className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] uppercase tracking-widest font-bold opacity-50">Reading Time</p>
                                            <p className="text-sm font-bold text-text-primary">{estimatedReadTime} min read</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Table of Contents */}
                            {toc.length > 0 && (
                                <nav className="space-y-6 pl-2">
                                    <h4 className="text-[11px] uppercase tracking-[0.3em] font-black text-text-muted/60 mb-6">Contents</h4>
                                    <div className="space-y-1 relative">
                                        {/* Activity Line */}
                                        <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />

                                        {toc.map((item) => (
                                            <button
                                                key={item.id}
                                                onClick={() => scrollToSection(item.id)}
                                                className={`group flex items-center gap-4 py-2 pl-6 transition-all border-l-2 -ml-[2px] text-left ${activeId === item.id
                                                    ? "border-accent text-accent font-bold"
                                                    : "border-transparent text-text-muted hover:text-text-primary hover:border-border"
                                                    }`}
                                            >
                                                <span className={`text-sm tracking-tight ${item.level === 3 ? "pl-4 opacity-70 text-xs" : ""}`}>
                                                    {item.text}
                                                </span>
                                            </button>
                                        ))}
                                    </div>
                                </nav>
                            )}

                            {/* Share / Action Button */}
                            <button className="w-full py-4 bg-text-primary text-bg-primary rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-accent hover:text-bg-primary transition-all shadow-xl shadow-black/5">
                                <Share2 className="w-4 h-4" />
                                Share Insight
                            </button>
                        </div>
                    </aside>

                    {/* ── MAIN CONTENT AREA ── */}
                    <main className="lg:col-span-8">
                        {/* Mobile Header Info */}
                        <div className="lg:hidden mb-12 space-y-6">
                            <span className="inline-block px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-[10px] uppercase tracking-[0.2em] text-accent font-black">
                                {post.domain || "Case Study"}
                            </span>
                            <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tighter">
                                {post.title}
                            </h1>
                            <div className="flex flex-wrap gap-6 pt-4 border-t border-border">
                                <div className="flex items-center gap-2 text-text-muted">
                                    <Calendar className="w-4 h-4" />
                                    <span className="text-xs font-bold uppercase tracking-widest">
                                        {new Date(post.created_at).toLocaleDateString('en-US', {
                                            month: 'short', year: 'numeric'
                                        })}
                                    </span>
                                </div>
                                <div className="flex items-center gap-2 text-text-muted">
                                    <Clock className="w-4 h-4" />
                                    <span className="text-xs font-bold uppercase tracking-widest">{estimatedReadTime} min read</span>
                                </div>
                            </div>
                        </div>

                        {/* Feature Image */}
                        {post.thumbnail_url && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8 }}
                                className="relative aspect-[16/9] w-full rounded-[2.5rem] overflow-hidden border border-border shadow-[0_40px_80px_rgba(0,0,0,0.1)] mb-16"
                            >
                                <Image
                                    src={post.thumbnail_url || ""}
                                    alt={post.title}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </motion.div>
                        )}

                        {/* Executive Summary Callout */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-8 md:p-12 rounded-[2rem] bg-accent/5 border border-accent/10 mb-20 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <CheckCircle2 className="w-24 h-24 text-accent" />
                            </div>
                            <h4 className="text-sm font-black uppercase tracking-[0.2em] text-accent mb-6 flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5" />
                                Project Highlight
                            </h4>
                            <p className="text-lg md:text-xl font-medium text-text-primary leading-relaxed italic">
                                {contextText}
                            </p>
                        </motion.div>

                        {/* Dynamic HTML Content */}
                        <motion.article
                            ref={contentRef}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2, duration: 1 }}
                            className="prose prose-xl max-w-none 
                                prose-headings:font-black prose-headings:tracking-tighter prose-headings:text-text-primary
                                prose-h2:text-4xl prose-h2:mt-32 prose-h2:mb-12
                                prose-h3:text-2xl prose-h3:mt-20 prose-h3:mb-8
                                prose-p:text-text-secondary prose-p:leading-[1.8] prose-p:mb-8 prose-p:text-lg
                                prose-blockquote:border-l-4 prose-blockquote:border-accent prose-blockquote:bg-accent/5 prose-blockquote:p-10 prose-blockquote:rounded-3xl prose-blockquote:italic prose-blockquote:text-text-primary prose-blockquote:my-16
                                prose-img:rounded-[2.5rem] prose-img:border prose-img:border-border prose-img:my-24 prose-img:shadow-2xl
                                prose-strong:text-text-primary prose-strong:font-black
                                prose-ul:list-none prose-ul:pl-0 prose-li:relative prose-li:pl-8 prose-li:mb-4 prose-li:text-text-secondary
                                prose-li:before:content-[''] prose-li:before:absolute prose-li:before:left-0 prose-li:before:top-[0.7em] prose-li:before:w-2 prose-li:before:h-2 prose-li:before:bg-accent prose-li:before:rounded-full"
                            dangerouslySetInnerHTML={{ __html: post.content.replace(/opacity-0|translate-y-\[?\d*(?:px|rem|%)\]?|translate-y-\d+/g, '') }}
                        />

                        {/* Footer CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mt-40 p-12 md:p-20 rounded-[3rem] bg-bg-secondary/50 border border-border backdrop-blur-3xl text-center relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-accent/20 blur-[80px] rounded-full" />
                            <h2 className="text-3xl md:text-4xl font-black mb-6 tracking-tight relative z-10 text-text-primary">Start your own story?</h2>
                            <p className="text-text-muted mb-12 max-w-md mx-auto relative z-10 font-medium">Our AI solutions are tailored to your mission. Let's build something transformative together.</p>
                            <Link
                                href="/contact"
                                className="px-12 py-5 bg-text-primary text-bg-primary font-black rounded-2xl hover:bg-accent hover:text-bg-primary transition-all inline-block relative z-10 shadow-xl"
                            >
                                Connect with our team
                            </Link>
                        </motion.div>
                    </main>
                </div>
            </div>
        </div>
    );
}
