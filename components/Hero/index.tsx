"use client";

import dynamic from "next/dynamic";
import HeroHeadline from "./HeroHeadline";
import HeroInfo from "./HeroInfo";
import InsightGrid from "./InsightGrid";

const StarField = dynamic(() => import("../StarField"), { ssr: false });

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col bg-bg-primary overflow-hidden">
            {/* Three.js StarField Background */}
            <StarField />

            {/* Main Content */}
            <div className="relative z-10 flex-1 flex flex-col pt-24 pb-8">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 flex-1 flex flex-col">
                    {/* Top Section - Main Content */}
                    <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center py-8">
                        <HeroHeadline />
                        <HeroInfo />
                    </div>

                    {/* Bottom Section - Image Insight Cards */}
                    <InsightGrid />
                </div>
            </div>
        </section>
    );
}
