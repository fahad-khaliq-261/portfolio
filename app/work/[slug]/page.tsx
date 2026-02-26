import { supabase } from "@/lib/supabase";
import { notFound } from "next/navigation";
import CaseStudyClient from "./CaseStudyClient";

export default async function CaseStudyPage({
    params
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params;

    const { data: post, error } = await supabase
        .from("case_studies")
        .select("*")
        .eq("slug", slug)
        .single();

    if (error || !post) {
        notFound();
    }

    return <CaseStudyClient post={post} />;
}

