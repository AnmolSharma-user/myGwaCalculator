import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Copy, Facebook, Twitter, MessageCircle, ArrowLeft } from "lucide-react";
import { AuthorCard, authorSchema } from "@/components/AuthorCard";
import { Helmet } from "react-helmet-async";
import { ReadingProgressBar } from "@/components/ReadingProgressBar";
import { BackToTopButton } from "@/components/BackToTopButton";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const GwaVsGpaBlog = () => {
    const { toast } = useToast();
    const [copied, setCopied] = useState(false);
    const hs = async (p?: string) => { const url = window.location.href; const t = "GWA vs GPA: Key Differences Explained"; if (p === "twitter") window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(t)}&url=${encodeURIComponent(url)}`, "_blank"); else if (p === "facebook") window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, "_blank"); else if (p === "whatsapp") window.open(`https://wa.me/?text=${encodeURIComponent(t + " " + url)}`, "_blank"); else { await navigator.clipboard.writeText(url); setCopied(true); toast({ title: "Link copied!" }); setTimeout(() => setCopied(false), 2000); } };

    const faqData = [
        { q: "Is GWA the same as GPA?", a: "No. GWA (General Weighted Average) uses a 1.0–5.0 scale where 1.0 is the best grade. GPA (Grade Point Average) typically uses a 4.0 scale where 4.0 is the best. They are conceptually similar but directionally opposite — higher GPA is better, lower GWA is better." },
        { q: "How do I convert my Philippine GWA to GPA for US applications?", a: "Use our GWA to GPA Converter at mygwacalculator.com. A rough guide: GWA 1.0 ≈ GPA 4.0, GWA 1.5 ≈ GPA 3.5, GWA 2.0 ≈ GPA 3.0, GWA 2.5 ≈ GPA 2.5, GWA 3.0 ≈ GPA 2.0." },
        { q: "Which is harder: a 4.0 GPA or a 1.0 GWA?", a: "Both represent the highest possible achievement in their respective systems. A 4.0 GPA in the US and a 1.0 GWA in the Philippines are both equivalent to perfect or near-perfect academic performance." },
        { q: "Do Canadian and Australian universities accept GWA?", a: "Yes, but most will ask for conversion or a credential evaluation service (like WES - World Education Services). It's best to use the GWA to GPA conversion as a preliminary estimate, then get an official evaluation for actual applications." },
        { q: "Why does the Philippines use a different system from most countries?", a: "The Philippine grading system evolved from the Spanish colonial influence and has been adopted by CHED. While most countries use higher = better, the Philippine system traditionally uses lower = better (in the 1.0–5.0 scale), though some schools like DLSU and Ateneo use the international 4.0 scale." },
    ];

    const conversionData = [
        { gwa: "1.00", gpa: "4.00", pct: "97-100%", descriptor: "Excellent" },
        { gwa: "1.25", gpa: "3.75", pct: "93-96%", descriptor: "Very Good" },
        { gwa: "1.50", gpa: "3.50", pct: "89-92%", descriptor: "Very Good" },
        { gwa: "1.75", gpa: "3.25", pct: "85-88%", descriptor: "Good" },
        { gwa: "2.00", gpa: "3.00", pct: "81-84%", descriptor: "Good" },
        { gwa: "2.25", gpa: "2.75", pct: "77-80%", descriptor: "Satisfactory" },
        { gwa: "2.50", gpa: "2.50", pct: "73-76%", descriptor: "Satisfactory" },
        { gwa: "2.75", gpa: "2.25", pct: "70-72%", descriptor: "Passing" },
        { gwa: "3.00", gpa: "2.00", pct: "67-69%", descriptor: "Passing (min)" },
    ];

    return (
        <>
            <Helmet>
                <title>GWA vs GPA: Key Differences, Scales & Conversion Guide (Philippines vs US)</title>
                <meta name="description" content="Confused about GWA vs GPA? We explain the key differences between the Philippine GWA and the US GPA systems, with a complete conversion chart for international students and applications." />
                <meta name="keywords" content="GWA vs GPA Philippines, GWA to GPA conversion, Philippine grading vs US GPA, GWA GPA difference, convert GWA to GPA, international grade conversion" />
                <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
                <link rel="canonical" href="https://mygwacalculator.com/blog/gwa-vs-gpa-differences" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="GWA vs GPA: Key Differences & Conversion Guide" />
                <meta property="og:image" content="https://mygwacalculator.com/images/blog-gwa-vs-gpa.png" />
                <meta property="og:url" content="https://mygwacalculator.com/blog/gwa-vs-gpa-differences" />
                <meta property="article:published_time" content="2025-03-05T00:00:00+08:00" />
                <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "Article", "headline": "GWA vs GPA: Key Differences and Conversion Guide", "image": "https://mygwacalculator.com/images/blog-gwa-vs-gpa.png", "datePublished": "2025-03-05T00:00:00+08:00", "author": { "@type": "Organization", "name": "GWA Calculator Team" }, "publisher": { "@type": "Organization", "name": "GWA Calculator" } })}</script>
                <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqData.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) })}</script>
            </Helmet>
            <ReadingProgressBar />
            <BackToTopButton />
            <div className="min-h-screen bg-white dark:bg-gray-900">
                <div className="bg-gradient-to-br from-violet-700 via-purple-800 to-indigo-900 text-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 mt-14">
                        <Link to="/blog" className="inline-flex items-center text-white/80 hover:text-white text-sm mb-6"><ArrowLeft className="h-4 w-4 mr-1" /> Back to Blog</Link>
                        <div className="flex flex-wrap gap-2 mb-4"><Badge className="bg-white/20 text-white border-white/30">Explainer</Badge><Badge variant="outline" className="border-white/30 text-white">GWA vs GPA</Badge></div>
                        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">GWA vs GPA: Key Differences, Scales & Complete Conversion Chart for Philippine Students</h1>
                        <div className="flex flex-wrap gap-5 text-white/90 text-sm mb-6">
                            <AuthorCard variant="compact" />
                            <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> March 5, 2025</span>
                            <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 8 min read</span>
                        </div>
                        <div className="flex gap-2 flex-wrap">
                            {[["twitter", <Twitter key="t" className="h-4 w-4" />], ["facebook", <Facebook key="f" className="h-4 w-4" />], ["whatsapp", <MessageCircle key="w" className="h-4 w-4" />]].map(([pl, icon]) => (
                                <Button key={pl as string} variant="outline" size="sm" onClick={() => hs(pl as string)} className="bg-white/10 border-white/30 text-white hover:bg-white/20">{icon}</Button>
                            ))}
                            <Button variant="outline" size="sm" onClick={() => hs()} className="bg-white/10 border-white/30 text-white hover:bg-white/20">{copied ? "Copied!" : <Copy className="h-4 w-4" />}</Button>
                        </div>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
                    <div className="rounded-2xl overflow-hidden shadow-xl"><img src="/images/blog-gwa-vs-gpa.png" alt="Split comparison graphic showing Philippine GWA scale 1.0-5.0 vs US GPA scale 0-4.0" className="w-full h-56 sm:h-72 md:h-96 object-cover" width="1200" height="630" /></div>
                </div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                    <Card className="border-0 shadow-xl bg-white dark:bg-gray-800">
                        <CardContent className="p-6 sm:p-10">
                            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                                If you're a Filipino student applying to international universities, graduate programs, or jobs abroad, you've probably run into this problem: <strong>the application requires your GPA, but your school only gives you a GWA</strong>. To make it more confusing, the two systems work in opposite directions.
                            </p>
                            <p className="text-gray-700 dark:text-gray-300 mb-8">
                                This guide breaks down exactly how GWA and GPA differ, why they exist, and gives you a complete conversion table so you'll never be confused again.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-6">GWA vs GPA: Side-by-Side Comparison</h2>
                            <div className="overflow-x-auto mb-8">
                                <table className="w-full border-collapse text-sm">
                                    <thead><tr className="bg-purple-50 dark:bg-gray-700">
                                        <th className="px-4 py-3 text-left font-bold text-gray-900 dark:text-white border border-gray-200 dark:border-gray-600">Feature</th>
                                        <th className="px-4 py-3 text-left font-bold text-gray-900 dark:text-white border border-gray-200 dark:border-gray-600">GWA (Philippines)</th>
                                        <th className="px-4 py-3 text-left font-bold text-gray-900 dark:text-white border border-gray-200 dark:border-gray-600">GPA (US/International)</th>
                                    </tr></thead>
                                    <tbody className="text-gray-700 dark:text-gray-300">
                                        {[
                                            ["Full Name", "General Weighted Average", "Grade Point Average"],
                                            ["Scale", "1.0 to 5.0", "0.0 to 4.0 (most common)"],
                                            ["Best Grade", "1.0 (lowest number)", "4.0 (highest number)"],
                                            ["Worst Grade", "5.0 (failing)", "0.0 (failing)"],
                                            ["Scale Direction", "Lower = Better", "Higher = Better"],
                                            ["Weight by Units?", "Yes (weighted)", "Yes (weighted)"],
                                            ["Used Primarily In", "Philippines (most schools)", "USA, Canada, Australia, India"],
                                            ["Exceptions", "DLSU, Ateneo use 4.0 scale", "Some use 5.0 or 10.0 scale"],
                                        ].map(([f, g, gpa], i) => (
                                            <tr key={i} className={i % 2 === 0 ? "bg-white dark:bg-gray-800" : "bg-gray-50 dark:bg-gray-750"}>
                                                <td className="px-4 py-2 border border-gray-200 dark:border-gray-600 font-medium">{f}</td>
                                                <td className="px-4 py-2 border border-gray-200 dark:border-gray-600 text-blue-700 dark:text-blue-300">{g}</td>
                                                <td className="px-4 py-2 border border-gray-200 dark:border-gray-600 text-purple-700 dark:text-purple-300">{gpa}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">Complete GWA to GPA Conversion Chart</h2>
                            <p className="text-gray-700 dark:text-gray-300 mb-4">Use this reference table when filling out international applications. Note that this is an approximate conversion — some institutions use their own conversion formulas.</p>
                            <div className="overflow-x-auto mb-4">
                                <table className="w-full border-collapse text-sm">
                                    <thead><tr className="bg-purple-600 text-white">
                                        <th className="px-3 py-3 text-left border border-purple-500">PH GWA</th>
                                        <th className="px-3 py-3 text-left border border-purple-500">US GPA (4.0)</th>
                                        <th className="px-3 py-3 text-left border border-purple-500">Percentage</th>
                                        <th className="px-3 py-3 text-left border border-purple-500">Description</th>
                                    </tr></thead>
                                    <tbody>
                                        {conversionData.map((row, i) => (
                                            <tr key={i} className={i % 2 === 0 ? "bg-white dark:bg-gray-800" : "bg-purple-50 dark:bg-gray-750"}>
                                                <td className="px-3 py-2.5 border border-gray-200 dark:border-gray-600 font-bold text-blue-700 dark:text-blue-300">{row.gwa}</td>
                                                <td className="px-3 py-2.5 border border-gray-200 dark:border-gray-600 font-bold text-purple-700 dark:text-purple-300">{row.gpa}</td>
                                                <td className="px-3 py-2.5 border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300">{row.pct}</td>
                                                <td className="px-3 py-2.5 border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-400">{row.descriptor}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-xs text-gray-500 dark:text-gray-400 italic mb-8">* This is an approximate conversion. For official purposes, use a credential evaluation service like WES (World Education Services).</p>

                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">When You Need to Convert GWA to GPA</h2>
                            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300 mb-8">
                                <li><strong>International university applications</strong> — Common App, UCAS, and most foreign university portals ask for GPA</li>
                                <li><strong>Graduate school applications</strong> — US master's and PhD programs list GPA minimums (usually 3.0+)</li>
                                <li><strong>International job applications</strong> — Some multinational employers ask for GPA on their forms</li>
                                <li><strong>Student exchange programs</strong> — Erasmus, ASEAN, and other exchange programs may use GPA as a filter</li>
                                <li><strong>Scholarship portals</strong> — Some international scholarships (Fulbright, Chevening, etc.) require GPA</li>
                            </ul>

                            <div className="bg-purple-600 text-white rounded-2xl p-6 text-center mt-10">
                                <h3 className="text-xl font-bold mb-2">Convert Your GWA to GPA Instantly</h3>
                                <p className="text-purple-100 mb-4">Use our free GWA to GPA Converter — no sign-up, instant results, supports multiple scales.</p>
                                <Link to="/tools/gwa-to-gpa-converter" className="inline-block bg-white text-purple-700 font-bold px-6 py-3 rounded-xl hover:bg-purple-50 transition-colors">Open GWA to GPA Converter →</Link>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Author Box */}
                    <AuthorCard variant="full" />

                    <Card className="mt-10 border-0 shadow-xl bg-white dark:bg-gray-800">
                        <CardHeader><CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">Frequently Asked Questions</CardTitle></CardHeader>
                        <CardContent className="p-6 sm:p-8">
                            <Accordion type="single" collapsible className="w-full">
                                {faqData.map((faq, i) => (
                                    <AccordionItem key={i} value={`item-${i}`}>
                                        <AccordionTrigger className="text-gray-900 dark:text-white text-left">{faq.q}</AccordionTrigger>
                                        <AccordionContent className="text-gray-600 dark:text-gray-300">{faq.a}</AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </>
    );
};

export default GwaVsGpaBlog;
