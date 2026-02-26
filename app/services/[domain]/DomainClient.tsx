"use client";

import { motion } from "framer-motion";
import { ArrowLeft, FileText, Download, ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

interface CaseStudy {
    id: string;
    title: string;
    slug: string;
    thumbnail_url?: string;
    domain: string;
    created_at: string;
}

interface DomainData {
    title: string;
    description: string;
    color: string;
    accentRgb: string;
    lottie: string;
    tags: string[];
}

interface DomainClientProps {
    domain: string;
    domainMetadata: DomainData;
    caseStudies: CaseStudy[];
}

export default function DomainClient({ domain, domainMetadata, caseStudies }: DomainClientProps) {
    const whitepapers = [
        {
            title: `${domainMetadata.title} Governance Framework`,
            description: `A comprehensive guide to implementing ${domainMetadata.title} AI policies and risk management.`,
            date: "Q1 2024",
        },
        {
            title: "Regulatory Compliance Roadmap",
            description: "Step-by-step checklist for navigating global AI regulations in your specialized field.",
            date: "Jan 2024",
        }
    ];

    return (
        <div className={`min-h-screen bg-[#0a0f1a] text-white selection:bg-blue-500/30 overflow-hidden`}>
            {/* Background Decor */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div
                    className="absolute top-0 right-0 w-[70vw] h-[70vh] blur-[140px] rounded-full -translate-y-1/2 translate-x-1/2 opacity-20"
                    style={{ background: `radial-gradient(circle, rgba(${domainMetadata.accentRgb}, 0.5), transparent)` }}
                />
                <div className="absolute bottom-0 left-0 w-[60vw] h-[60vh] bg-blue-500/5 blur-[140px] rounded-full translate-y-1/2 -translate-x-1/2" />
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 relative z-10">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-white/40 hover:text-white mb-20 transition-all group"
                >
                    <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/20 transition-colors">
                        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                    </div>
                    <span className="text-xs uppercase tracking-widest font-bold">Back to site</span>
                </Link>

                {/* Hero Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <span className={`px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-[10px] uppercase tracking-[0.2em] font-black text-white/60`}>
                                Enterprise Solutions
                            </span>
                            <div className="h-px w-8 bg-white/10" />
                            <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-bold">Domain Specific</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tighter mb-8 italic">
                            {domainMetadata.title}
                            <span className="block text-white/20 not-italic">Innovation</span>
                        </h1>
                        <p className="text-xl text-white/40 leading-relaxed mb-10 max-w-lg">
                            {domainMetadata.description}
                        </p>
                        <div className="flex flex-wrap gap-3 mb-12">
                            {domainMetadata.tags.map((tag) => (
                                <span key={tag} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs font-medium text-white/60 whitespace-nowrap">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="relative"
                    >
                        <div className="aspect-square relative flex items-center justify-center">
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-[80px]" />
                            <div className="w-full max-w-[600px] animate-[float_6s_ease-in-out_infinite]">
                                <DotLottieReact
                                    src={domainMetadata.lottie}
                                    autoplay
                                    loop
                                    speed={0.4}
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Case Studies Grid */}
                <section className="mb-32">
                    <div className="flex items-center justify-between mb-16 px-2">
                        <div>
                            <h2 className="text-3xl font-black tracking-tight mb-2">Proven Impact</h2>
                            <p className="text-white/30">Client success stories in the {domainMetadata.title} sector.</p>
                        </div>
                        <div className="h-px flex-1 mx-8 bg-white/5 hidden md:block" />
                        <Link href="/work" className="text-sm font-bold text-white/60 hover:text-white transition-colors flex items-center gap-2 group">
                            View all <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    {caseStudies.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {caseStudies.map((cs, idx) => (
                                <motion.div
                                    key={cs.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                >
                                    <Link href={`/work/${cs.slug}`} className="group block h-full">
                                        <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-6 h-full hover:bg-white/10 transition-all group-hover:-translate-y-2 group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.5)]">
                                            <div className="relative aspect-[1.4] w-full rounded-2xl overflow-hidden mb-6 border border-white/5">
                                                {cs.thumbnail_url ? (
                                                    <Image
                                                        src={cs.thumbnail_url}
                                                        alt={cs.title}
                                                        fill
                                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                                    />
                                                ) : (
                                                    <div className="absolute inset-0 bg-blue-500/10 flex items-center justify-center">
                                                        <FileText className="w-12 h-12 text-white/5" />
                                                    </div>
                                                )}
                                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] via-transparent to-transparent opacity-60" />
                                            </div>
                                            <h3 className="text-xl font-bold leading-tight mb-4 group-hover:text-blue-400 transition-colors line-clamp-2">
                                                {cs.title}
                                            </h3>
                                            <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-auto">
                                                <span className="text-[10px] uppercase tracking-widest text-white/30 font-black">Case Study</span>
                                                <ExternalLink className="w-4 h-4 text-white/20 group-hover:text-white transition-colors" />
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        <div className="py-24 text-center border-2 border-dashed border-white/5 rounded-[3rem] bg-white/[0.02]">
                            <p className="text-white/20 font-medium">New case studies arriving soon.</p>
                        </div>
                    )}
                </section>

                {/* Whitepapers & Resources */}
                <section>
                    <div className="flex items-center gap-6 mb-16">
                        <h2 className="text-3xl font-black tracking-tight whitespace-nowrap">Intelligence Hub</h2>
                        <div className="h-px w-full bg-white/10" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {whitepapers.map((wp, idx) => (
                            <motion.div
                                key={wp.title}
                                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="group relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-white/10 to-transparent p-1 border border-white/5"
                            >
                                <div className="bg-[#0a0f1a] rounded-[2.4rem] p-10 h-full relative z-10">
                                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-500/10 transition-colors">
                                        <Download className="w-6 h-6 text-white/40 group-hover:text-blue-400 transition-colors" />
                                    </div>
                                    <span className="text-[10px] uppercase tracking-widest text-blue-400/60 font-black mb-3 block">Whitepaper • {wp.date}</span>
                                    <h3 className="text-2xl font-black mb-4 tracking-tight leading-none italic">{wp.title}</h3>
                                    <p className="text-white/40 mb-10 leading-relaxed">{wp.description}</p>
                                    <button className="px-6 py-3 bg-white/5 hover:bg-white text-white hover:text-black font-bold text-xs uppercase tracking-widest rounded-xl transition-all flex items-center gap-3">
                                        Download Resource
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Domain CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-40 p-12 md:p-24 rounded-[4rem] bg-white/[0.03] border border-white/10 backdrop-blur-3xl text-center relative overflow-hidden"
                >
                    <div
                        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] blur-[150px] rounded-full opacity-30"
                        style={{ background: `radial-gradient(circle, rgba(${domainMetadata.accentRgb}, 0.8), transparent)` }}
                    />
                    <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter relative z-10 italic">Let's solve {domainMetadata.title}</h2>
                    <p className="text-white/40 mb-12 max-w-xl mx-auto text-lg leading-relaxed relative z-10">
                        Ready to implement a mission-critical AI strategy? Our expert consultants are ready to help you navigate the complexities of {domainMetadata.title}.
                    </p>
                    <Link
                        href="/contact"
                        className="px-12 py-6 bg-white text-black font-black rounded-2xl hover:bg-neutral-200 transition-all inline-block relative z-10 shadow-[0_20px_40px_rgba(255,255,255,0.1)] uppercase tracking-[0.2em] text-xs"
                    >
                        Start Consultation
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}
