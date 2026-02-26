import { supabase } from "@/lib/supabase";
import { notFound } from "next/navigation";
import DomainClient from "./DomainClient";

// Domain Metadata Configuration
const domainMetadataMap: Record<string, {
    title: string;
    description: string;
    color: string;
    accentRgb: string;
    lottie: string;
    tags: string[];
}> = {
    "ai-compliance": {
        id: "ai-compliance",
        title: "AI Compliance",
        color: "from-[#065f46] to-[#022c22]",
        accentRgb: "52, 211, 153",
        lottie: "/gifs/Artificial Intelligence.lottie",
        tags: ["EU AI Act", "Colorado AI Act", "Risk Assessment", "Auditing"],
        description: "Enterprise-grade compliance frameworks for the world's most regulated AI systems. We ensure your innovation meets global legal standards."
    },
    "legal": {
        id: "legal",
        title: "Legal AI",
        color: "from-[#4c1d95] to-[#1e1b4b]",
        accentRgb: "167, 139, 250",
        lottie: "/gifs/legal.lottie",
        tags: ["Contract Analysis", "Compliance Audit", "Document Review", "Ethics"],
        description: "Augmenting legal intelligence with secure, compliant AI systems. Built for the modern law firm and enterprise legal department."
    },
    "retail": {
        id: "retail",
        title: "Retail AI",
        color: "from-[#9b111e] to-[#450a0a]",
        accentRgb: "251, 113, 133",
        lottie: "/gifs/retail.lottie",
        tags: ["Inventory Optimization", "Personalization", "Supply Chain", "Customer AI"],
        description: "Redefining the consumer experience through intelligent AI while maintaining strict data privacy and fair-trade standards."
    },
    "healthcare": {
        id: "healthcare",
        title: "Healthcare",
        color: "from-[#fafafa] to-[#e5e7eb]",
        accentRgb: "15, 23, 42",
        lottie: "/gifs/healthcare.lottie",
        tags: ["HIPAA Compliance", "Clinical AI", "Diagnostics", "Patient Privacy"],
        description: "Safe, compliant AI implementation for the care providers of tomorrow. Protecting patients while empowering medical professionals."
    }
} as any;

export default async function DomainPage({
    params
}: {
    params: Promise<{ domain: string }>
}) {
    const { domain } = await params;
    const metadata = domainMetadataMap[domain];

    if (!metadata) {
        notFound();
    }

    // Fetch case studies for this domain
    // Using the domain title or slug to filter in Supabase
    const { data: caseStudies, error } = await supabase
        .from("case_studies")
        .select("*")
        .or(`domain.eq.${metadata.title},domain.eq.${domain}`)
        .order("created_at", { ascending: false });

    if (error) {
        console.error("Error fetching domain case studies:", error);
    }

    return (
        <DomainClient
            domain={domain}
            domainMetadata={metadata}
            caseStudies={caseStudies || []}
        />
    );
}
