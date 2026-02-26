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
                return { src: "" }; // Return empty src to satisfy Mammoth's ImageAttributes type
            }

            const { data: { publicUrl } } = supabase.storage
                .from("case-study-assets")
                .getPublicUrl(fileName);

            return {
                src: publicUrl,
                class: "rounded-2xl my-12 shadow-2xl border border-white/10 mx-auto block max-w-full h-auto",
            };
        }),
    };

    const result = await mammoth.convertToHtml({ arrayBuffer }, options);

    // Use custom title or fallback to filename
    const finalTitle = customTitle || file.name.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " ");
    const slug = slugify(finalTitle, { lower: true, strict: true });

    // Try to find the first image to use as a thumbnail
    const firstImageUrlMatch = result.value.match(/<img[^>]+src="([^">]+)"/);
    const thumbnailUrl = firstImageUrlMatch ? firstImageUrlMatch[1] : undefined;

    return {
        title: finalTitle,
        slug,
        domain,
        html: result.value,
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
    const { error } = await supabase
        .from("case_studies")
        .delete()
        .eq("id", id);

    if (error) throw error;
}
