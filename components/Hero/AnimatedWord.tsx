"use client";

import { motion } from "framer-motion";

const letterAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.03,
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
        },
    }),
};

export const AnimatedWord = ({ word, className, delay = 0 }: { word: string; className?: string; delay?: number }) => {
    return (
        <span className={`inline-flex overflow-hidden ${className}`}>
            {word.split("").map((letter, i) => (
                <motion.span
                    key={i}
                    custom={i + delay}
                    variants={letterAnimation}
                    initial="hidden"
                    animate="visible"
                    className="inline-block"
                >
                    {letter}
                </motion.span>
            ))}
        </span>
    );
};
