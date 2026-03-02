"use client";

import { useState, useEffect } from "react";
import { processDocx, saveCaseStudy, getCaseStudies, deleteCaseStudy } from "@/lib/supabase-processor";
import { ArrowLeft, Loader2, Upload, CheckCircle2, Eye, Trash2, FileText, ExternalLink } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import slugify from "slugify";

export default function AdminWork() {
    const [file, setFile] = useState<File | null>(null);
    const [thumbnailFile, setThumbnailFile] = useState<File | null>(null);
    const [title, setTitle] = useState("");
    const [domain, setDomain] = useState("AI Act");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [preview, setPreview] = useState<string | null>(null);
    const [caseStudies, setCaseStudies] = useState<any[]>([]);
    const [fetching, setFetching] = useState(true);

    const domains = ["AI Act", "Healthcare", "Legal", "Retail"];

    useEffect(() => {
        loadCaseStudies();
    }, []);

    const loadCaseStudies = async () => {
        try {
            const data = await getCaseStudies();
            setCaseStudies(data || []);
        } catch (err) {
            console.error("Failed to load case studies:", err);
        } finally {
            setFetching(false);
        }
    };

    const handleUpload = async () => {
        if (!file || !title) {
            setError("Please provide both a title and a document.");
            return;
        }
        setLoading(true);
        setError(null);
        try {
            let manualThumbnailUrl = "";
            if (thumbnailFile) {
                const { uploadThumbnail } = await import("@/lib/supabase-processor");
                manualThumbnailUrl = await uploadThumbnail(thumbnailFile);
            }

            const result = await processDocx(file, title, domain);
            await saveCaseStudy(result, manualThumbnailUrl);
            setSuccess(true);
            setPreview(result.html);
            loadCaseStudies(); // Refresh list
        } catch (err: any) {
            console.error(err);
            setError(err.message || "Failed to upload case study");
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this case study?")) return;
        try {
            await deleteCaseStudy(id);
            setCaseStudies(caseStudies.filter(cs => cs.id !== id));
        } catch (err: any) {
            console.error("Delete failed:", err);
            alert(`Failed to delete case study: ${err.message || 'Unknown error'}`);
        }
    };

    return (
        <div className="min-h-screen bg-bg-primary text-text-primary p-6 md:p-12 lg:p-24 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />

            <div className="max-w-4xl mx-auto relative z-10">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-text-primary/40 hover:text-text-primary mb-12 transition-colors group"
                >
                    <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                    Back to site
                </Link>

                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">Case Study Admin</h1>
                    <p className="text-text-primary/40 text-lg">Upload and categorize your mission-critical case studies.</p>
                </div>

                <div className="bg-bg-primary/[0.03] border border-white/10 rounded-[2rem] p-8 md:p-12 backdrop-blur-3xl shadow-2xl">
                    {!success ? (
                        <div className="space-y-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* Domain Selector */}
                                <div className="space-y-4">
                                    <label className="text-[10px] uppercase tracking-[0.2em] text-text-primary/30 font-bold ml-1">
                                        Select Domain
                                    </label>
                                    <div className="grid grid-cols-2 gap-2">
                                        {domains.map((d) => (
                                            <button
                                                key={d}
                                                onClick={() => setDomain(d)}
                                                className={`px-4 py-3 rounded-xl text-sm font-medium transition-all border ${domain === d
                                                    ? "bg-bg-primary text-text-primary border-white"
                                                    : "bg-bg-primary/5 text-text-primary/40 border-white/10 hover:border-white/20"
                                                    }`}
                                            >
                                                {d}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Title Input */}
                                <div className="space-y-4">
                                    <label className="text-[10px] uppercase tracking-[0.2em] text-text-primary/30 font-bold ml-1">
                                        Case Study Title
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="e.g. EU AI Act Implementation for Global Fintech"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        className="w-full bg-bg-primary/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500/50 transition-colors placeholder:text-text-primary/10"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* Document Upload */}
                                <div className="space-y-4">
                                    <label className="text-[10px] uppercase tracking-[0.2em] text-text-primary/30 font-bold ml-1">
                                        Document (.docx)
                                    </label>
                                    <div
                                        className={`border-2 border-dashed rounded-2xl p-8 text-center transition-all h-full flex flex-col justify-center ${file ? "border-blue-500/50 bg-blue-500/5" : "border-white/10 hover:border-white/20 bg-bg-primary/5"
                                            }`}
                                    >
                                        <input
                                            type="file"
                                            accept=".docx"
                                            onChange={(e) => setFile(e.target.files?.[0] || null)}
                                            className="hidden"
                                            id="docx-upload"
                                        />
                                        <label htmlFor="docx-upload" className="cursor-pointer group block">
                                            <Upload className="w-6 h-6 text-text-primary/20 mx-auto mb-3 group-hover:text-text-primary transition-colors" />
                                            <p className="text-sm font-bold">
                                                {file ? file.name : "Select Word File"}
                                            </p>
                                        </label>
                                    </div>
                                </div>

                                {/* Thumbnail Upload */}
                                <div className="space-y-4">
                                    <label className="text-[10px] uppercase tracking-[0.2em] text-text-primary/30 font-bold ml-1">
                                        Card Thumbnail (Optional)
                                    </label>
                                    <div
                                        className={`border-2 border-dashed rounded-2xl p-8 text-center transition-all h-full flex flex-col justify-center ${thumbnailFile ? "border-emerald-500/50 bg-emerald-500/5" : "border-white/10 hover:border-white/20 bg-bg-primary/5"
                                            }`}
                                    >
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={(e) => setThumbnailFile(e.target.files?.[0] || null)}
                                            className="hidden"
                                            id="thumb-upload"
                                        />
                                        <label htmlFor="thumb-upload" className="cursor-pointer group block">
                                            <div className="w-10 h-10 bg-bg-primary/5 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                                                {thumbnailFile ? (
                                                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                                                ) : (
                                                    <Upload className="w-5 h-5 text-text-primary/20 group-hover:text-text-primary transition-colors" />
                                                )}
                                            </div>
                                            <p className="text-sm font-bold">
                                                {thumbnailFile ? thumbnailFile.name : "Select Image"}
                                            </p>
                                        </label>
                                    </div>
                                </div>
                            </div>

                            {error && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="p-4 bg-rose-500/10 border border-rose-500/20 rounded-xl text-rose-400 text-xs font-medium flex items-center gap-3"
                                >
                                    <div className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                                    {error}
                                </motion.div>
                            )}

                            <button
                                onClick={handleUpload}
                                disabled={!file || !title || loading}
                                className="w-full py-5 bg-bg-primary text-text-primary font-black rounded-2xl hover:bg-neutral-200 disabled:opacity-20 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-3 shadow-[0_20px_40px_rgba(255,255,255,0.1)]"
                            >
                                {loading ? (
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                ) : (
                                    <CheckCircle2 className="w-5 h-5" />
                                )}
                                {loading ? "Analyzing & Converting..." : "Publish Case Study"}
                            </button>
                        </div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-center space-y-10 py-12"
                        >
                            <div className="w-24 h-24 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto shadow-[0_0_50px_rgba(16,185,129,0.1)]">
                                <CheckCircle2 className="w-12 h-12 text-emerald-500" />
                            </div>
                            <div>
                                <h2 className="text-3xl font-black mb-3">Live on Datamills</h2>
                                <p className="text-text-primary/40 max-w-sm mx-auto">The case study for <span className="text-text-primary font-bold">{domain}</span> has been processed and published successfully.</p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button
                                    onClick={() => {
                                        setSuccess(false);
                                        setFile(null);
                                        setThumbnailFile(null);
                                        setTitle("");
                                    }}
                                    className="px-10 py-4 border border-white/10 rounded-2xl hover:bg-bg-primary/5 transition-all font-bold"
                                >
                                    New upload
                                </button>
                                <Link
                                    href={`/work/${slugify(title, { lower: true, strict: true })}`}
                                    className="px-10 py-4 bg-bg-primary text-text-primary font-black rounded-2xl hover:bg-neutral-200 transition-all flex items-center justify-center gap-2"
                                >
                                    <Eye className="w-4 h-4" />
                                    View Live link
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </div>

                {preview && success && (
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-32 space-y-12"
                    >
                        <div className="flex items-center gap-4">
                            <h3 className="text-xs uppercase tracking-[0.3em] text-text-primary/20 font-black">Output Preview</h3>
                            <div className="h-px flex-1 bg-bg-primary/10" />
                        </div>
                        <div
                            className="prose prose-invert max-w-none bg-bg-primary/[0.02] border border-white/5 rounded-[2.5rem] p-10 md:p-20 shadow-inner"
                            dangerouslySetInnerHTML={{ __html: preview }}
                        />
                    </motion.div>
                )}

                {/* Management Section */}
                <div className="mt-32 space-y-12">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <h3 className="text-xs uppercase tracking-[0.3em] text-text-primary/20 font-black">Manage Content</h3>
                            <div className="h-px w-24 bg-bg-primary/10" />
                        </div>
                        <span className="text-[10px] uppercase tracking-widest text-text-primary/20 font-bold">
                            {caseStudies.length} Total items
                        </span>
                    </div>

                    <div className="grid gap-4">
                        {fetching ? (
                            <div className="flex items-center justify-center p-20 bg-bg-primary/5 rounded-[2rem] border border-white/10">
                                <Loader2 className="w-6 h-6 animate-spin text-text-primary/20" />
                            </div>
                        ) : caseStudies.length === 0 ? (
                            <div className="text-center p-20 bg-bg-primary/5 rounded-[2rem] border border-white/10">
                                <FileText className="w-12 h-12 text-text-primary/10 mx-auto mb-4" />
                                <p className="text-text-primary/40 font-medium">No case studies found. Start by uploading one above.</p>
                            </div>
                        ) : (
                            caseStudies.map((cs) => (
                                <motion.div
                                    key={cs.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="group bg-bg-primary/[0.03] border border-white/10 rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-bg-primary/[0.05] transition-all"
                                >
                                    <div className="flex items-center gap-6">
                                        <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                                            <FileText className="w-6 h-6 text-blue-400" />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-3 mb-1">
                                                <h4 className="font-bold text-text-primary leading-tight">{cs.title}</h4>
                                                <span className="px-2 py-0.5 bg-bg-primary/5 border border-white/10 rounded-md text-[8px] uppercase tracking-widest text-text-primary/40 font-black">
                                                    {cs.domain}
                                                </span>
                                            </div>
                                            <p className="text-xs text-text-primary/20 font-medium">
                                                Published {new Date(cs.created_at).toLocaleDateString()}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <Link
                                            href={`/work/${cs.slug}`}
                                            target="_blank"
                                            className="p-3 bg-bg-primary/5 border border-white/10 rounded-xl text-text-primary/40 hover:text-text-primary hover:border-white/20 transition-all group/link"
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                        </Link>
                                        <button
                                            onClick={() => handleDelete(cs.id)}
                                            className="p-3 bg-rose-500/10 border border-rose-500/20 rounded-xl text-rose-500/40 hover:text-rose-500 hover:border-rose-500/40 transition-all"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                </motion.div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
