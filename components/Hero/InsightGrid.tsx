"use client";

import { motion } from "framer-motion";
import { insightCards } from "./data";
import InsightCard from "./InsightCard";

export default function InsightGrid() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-auto"
        >
            {insightCards.map((card, index) => (
                <InsightCard key={card.title} card={card} index={index} />
            ))}
        </motion.div>
    );
}
