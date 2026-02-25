"use client";

import { motion } from "framer-motion";
import { headlineLines } from "./data";
import { AnimatedWord } from "./AnimatedWord";

export default function HeroHeadline() {
    return (
        <div className="lg:col-span-7">
            <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] tracking-[-0.03em]"
            >
                {headlineLines.map((line, lineIdx) => {
                    const words = line.text.split(" ");
                    let charCount = 0;
                    for (let l = 0; l < lineIdx; l++) charCount += headlineLines[l].text.replace(/ /g, "").length;

                    if (line.glowLastWord) {
                        const lastWord = words[words.length - 1];
                        const restWords = words.slice(0, -1);
                        const restText = restWords.join(" ");
                        const glowDelay = charCount + restText.replace(/ /g, "").length;

                        return (
                            <span key={lineIdx} className={`block overflow-visible ${lineIdx > 0 ? "mt-2" : ""}`}>
                                {restWords.map((word, wi) => (
                                    <span key={wi}>
                                        {wi > 0 && <span className="inline-block w-4" />}
                                        <AnimatedWord word={word} className={line.color} delay={charCount + restWords.slice(0, wi).join("").length} />
                                    </span>
                                ))}
                                {restWords.length > 0 && <span className="inline-block w-4" />}

                                {/* Highlighted word - clean professional style */}
                                <span className="relative inline-block">
                                    <AnimatedWord word={lastWord} className="text-blue-400" delay={glowDelay} />

                                    {/* Subtle underline */}
                                    <motion.span
                                        className="absolute -bottom-2 left-0 h-1 bg-blue-500 rounded-full"
                                        initial={{ width: "0%" }}
                                        animate={{ width: "100%" }}
                                        transition={{ delay: (glowDelay + lastWord.length) * 0.03 + 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                                    />
                                </span>
                            </span>
                        );
                    }

                    return (
                        <span key={lineIdx} className={`block overflow-hidden ${lineIdx > 0 ? "mt-2" : ""}`}>
                            {words.map((word, wi) => (
                                <span key={wi}>
                                    {wi > 0 && <span className="inline-block w-4" />}
                                    <AnimatedWord word={word} className={line.color} delay={charCount + words.slice(0, wi).join("").length} />
                                </span>
                            ))}
                        </span>
                    );
                })}
            </motion.h1>

            {/* Animated tagline */}
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.6 }}
                className="mt-8 text-white/50 text-lg max-w-md"
            >
                Your trusted partner for{" "}
                <motion.span
                    className="text-white font-medium"
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    AI compliance
                </motion.span>{" "}
                across industries
            </motion.p>
        </div>
    );
}
