"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

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
    return (
        <div className="min-h-screen bg-[#0a0f1a] text-white selection:bg-blue-500/30">
            {/* Background Decor */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 right-0 w-[60vw] h-[60vh] bg-blue-500/10 blur-[140px] rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[60vw] h-[60vh] bg-purple-500/10 blur-[140px] rounded-full translate-y-1/2 -translate-x-1/2" />
            </div>

            <div className="max-w-4xl mx-auto px-6 lg:px-8 py-24 relative z-10">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-white/40 hover:text-white mb-20 transition-all group"
                >
                    <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/20 transition-colors">
                        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                    </div>
                    <span className="text-xs uppercase tracking-widest font-bold">Back to exploration</span>
                </Link>

                <header className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-4 mb-8"
                    >
                        <span className="px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-[10px] uppercase tracking-[0.2em] text-blue-400 font-black">
                            {post.domain || "Case Study"}
                        </span>
                        <div className="h-px w-12 bg-white/10" />
                        <time className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-bold">
                            {new Date(post.created_at).toLocaleDateString('en-US', {
                                year: 'numeric', month: 'long'
                            })}
                        </time>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tight mb-12"
                    >
                        {post.title}
                    </motion.h1>

                    {post.thumbnail_url && (
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="relative aspect-[16/9] w-full rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_40px_80px_rgba(0,0,0,0.5)] mb-20"
                        >
                            <Image
                                src={post.thumbnail_url}
                                alt={post.title}
                                fill
                                className="object-cover scale-105"
                                priority
                            />
                        </motion.div>
                    )}
                </header>

                {/* Dynamic Content */}
                <motion.article
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 1 }}
                    className="prose prose-invert prose-xl max-w-none 
          prose-headings:font-black prose-headings:tracking-tighter prose-headings:text-white
          prose-h2:text-4xl prose-h2:mt-24 prose-h2:mb-10
          prose-p:text-white/60 prose-p:leading-[1.8] prose-p:mb-8
          prose-img:rounded-[2rem] prose-img:border prose-img:border-white/10 prose-img:my-16
          prose-strong:text-white prose-strong:font-bold
          prose-ul:list-disc prose-ul:pl-6 prose-li:text-white/60 prose-li:mb-4"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-40 p-12 md:p-20 rounded-[3rem] bg-white/[0.03] border border-white/10 backdrop-blur-3xl text-center relative overflow-hidden"
                >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-blue-500/20 blur-[80px] rounded-full" />
                    <h2 className="text-3xl md:text-4xl font-black mb-6 tracking-tight relative z-10">Start your own story?</h2>
                    <p className="text-white/40 mb-12 max-w-md mx-auto relative z-10">Our AI solutions are tailored to your mission. Let's build something transformative together.</p>
                    <Link
                        href="/contact"
                        className="px-12 py-5 bg-white text-black font-black rounded-2xl hover:bg-neutral-200 transition-all inline-block relative z-10 shadow-[0_20px_40px_rgba(255,255,255,0.1)]"
                    >
                        Connect with us
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}
