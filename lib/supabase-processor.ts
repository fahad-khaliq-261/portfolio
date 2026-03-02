import mammoth from "mammoth";
import slugify from "slugify";
import { supabase } from "./supabase";

export interface ProcessingResult {
    title: string;
    slug: string;
    domain: string;
    html: string;
    thumbnailUrl?: string;
}

export async function processDocx(file: File, customTitle?: string, domain: string = "general"): Promise<ProcessingResult> {
    const arrayBuffer = await file.arrayBuffer();

    const options = {
        styleMap: [
            "p[style-name='Heading 1'] => h1:fresh",
            "p[style-name='Heading 2'] => h2:fresh",
            "p[style-name='Heading 3'] => h3:fresh",
            "p[style-name='Heading 4'] => h4:fresh",
            "p[style-name='Quote'] => blockquote:fresh",
            "p[style-name='Intense Quote'] => blockquote.intense:fresh",
        ],
        convertImage: mammoth.images.imgElement(async (image) => {
            const contentType = image.contentType;
            const extension = contentType.split("/")[1];
            const fileName = `cs-${Date.now()}-${Math.random().toString(36).substring(2, 7)}.${extension}`;
            const imageBuffer = await image.read();

            const { data, error } = await supabase.storage
                .from("case-study-assets")
                .upload(fileName, imageBuffer, {
                    contentType,
                    upsert: true,
                });

            if (error) {
                console.error("Error uploading image to Supabase:", error);
                return { src: "" };
            }

            const { data: { publicUrl } } = supabase.storage
                .from("case-study-assets")
                .getPublicUrl(fileName);

            return {
                src: publicUrl,
                class: "rounded-3xl my-20 shadow-2xl border border-white/5 mx-auto block max-w-full h-auto",
            };
        }),
    };

    const result = await mammoth.convertToHtml({ arrayBuffer }, options);
    let html = result.value;

    // Post-processing: Wrap content into semantic sections based on headings
    // We look for h1, h2, h3 and split the content
    // Also inject IDs into headings for TOC support
    html = html.replace(/<(h[1-3])>(.*?)<\/h[1-3]>/g, (match, tag, content) => {
        const id = slugify(content, { lower: true, strict: true });
        return `<${tag} id="${id}">${content}</${tag}>`;
    });

    const sections = html.split(/(?=<h[1-3])/g);
    const processedHtml = sections
        .map((section, index) => {
            if (!section.trim()) return "";
            return `<section class="cs-section mb-32" data-section="${index}">
                ${section}
            </section>`;
        })
        .join("");

    // Use custom title or fallback to filename
    const finalTitle = customTitle || file.name.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " ");
    const slug = slugify(finalTitle, { lower: true, strict: true });

    // Try to find the first image to use as a thumbnail
    const firstImageUrlMatch = html.match(/<img[^>]+src="([^">]+)"/);
    const thumbnailUrl = firstImageUrlMatch ? firstImageUrlMatch[1] : undefined;

    return {
        title: finalTitle,
        slug,
        domain,
        html: processedHtml,
        thumbnailUrl,
    };
}

export async function uploadThumbnail(file: File): Promise<string> {
    const extension = file.name.split(".").pop();
    const fileName = `thumb-${Date.now()}-${Math.random().toString(36).substring(2, 7)}.${extension}`;
    const arrayBuffer = await file.arrayBuffer();

    const { data, error } = await supabase.storage
        .from("case-study-assets")
        .upload(fileName, arrayBuffer, {
            contentType: file.type,
            upsert: true,
        });

    if (error) {
        console.error("Error uploading thumbnail:", error);
        throw error;
    }

    const { data: { publicUrl } } = supabase.storage
        .from("case-study-assets")
        .getPublicUrl(fileName);

    return publicUrl;
}

export async function saveCaseStudy(data: ProcessingResult, manualThumbnailUrl?: string) {
    const { data: insertedData, error } = await supabase
        .from("case_studies")
        .upsert({
            title: data.title,
            slug: data.slug,
            domain: data.domain,
            content: data.html,
            thumbnail_url: manualThumbnailUrl || data.thumbnailUrl,
        }, { onConflict: 'slug' })
        .select();

    if (error) throw error;
    return insertedData;
}

export async function getCaseStudies() {
    const { data, error } = await supabase
        .from("case_studies")
        .select("*")
        .order("created_at", { ascending: false });

    if (error) throw error;
    return data;
}

export async function deleteCaseStudy(id: string) {
    const { data, error } = await supabase
        .from("case_studies")
        .delete()
        .eq("id", id)
        .select();

    if (error) throw error;
    if (!data || data.length === 0) {
        throw new Error("No record found with that ID or deletion not permitted.");
    }
    return data;
}
