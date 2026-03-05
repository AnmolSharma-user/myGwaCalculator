import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Copy, Facebook, Twitter, MessageCircle, ArrowLeft, CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { AuthorCard, authorSchema } from "@/components/AuthorCard";
import { ReadingProgressBar } from "@/components/ReadingProgressBar";
import { BackToTopButton } from "@/components/BackToTopButton";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const GoodGwaBlog = () => {
    const { toast } = useToast();
    const [copied, setCopied] = useState(false);

    const handleShare = async (platform?: string) => {
        const url = window.location.href;
        const text = "What is a Good GWA in the Philippines? Find out here!";
        if (platform === "twitter") window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, "_blank");
        else if (platform === "facebook") window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, "_blank");
        else if (platform === "whatsapp") window.open(`https://wa.me/?text=${encodeURIComponent(text + " " + url)}`, "_blank");
        else {
            await navigator.clipboard.writeText(url);
            setCopied(true);
            toast({ title: "Link copied!" });
            setTimeout(() => setCopied(false), 2000);
        }
    };

    const faqData = [
        { q: "What GWA is considered honors in the Philippines?", a: "Generally, a GWA of 1.00–1.45 qualifies as University Scholar (highest), 1.46–1.75 as College Scholar. This varies per university — check your official student handbook." },
        { q: "Is a GWA of 2.0 good in the Philippines?", a: "A GWA of 2.0 is a solid, passing grade equivalent to a 'B' in most Philippine universities. It's generally considered satisfactory, though many students aim for 1.75 or below for recognition." },
        { q: "What is the minimum GWA to pass in college?", a: "Most Philippine universities require at least a 3.0 GWA in each subject to pass (equivalent to 75%). Falling below this may require you to repeat the subject." },
        { q: "Is GWA 1.5 good?", a: "Yes! A GWA of 1.5 is excellent in the Philippine system. It's equivalent to around 90–92% and often qualifies for College Scholar or Dean's List status at many universities." },
        { q: "How do employers view GWA in the Philippines?", a: "Many large Philippine companies (banks, BPOs, government agencies) require a minimum GWA of 2.0–2.5 for entry-level positions. A GWA of 1.75 or below is considered a strong competitive advantage." },
    ];

    const currentUrl = "https://mygwacalculator.com/blog/what-is-a-good-gwa-philippines";

    return (
        <>
            <Helmet>
                <title>What is a Good GWA in the Philippines? (2025 Guide) | GWA Calculator</title>
                <meta name="description" content="Wondering if your GWA is good enough? Learn what GWA scores are considered excellent, good, and passing at Philippine universities. Includes Dean's List and Latin Honors benchmarks." />
                <meta name="keywords" content="what is a good GWA Philippines, GWA 1.5 good, GWA 2.0 Philippines, passing GWA college, good general weighted average, GWA Dean's List Philippines" />
                <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                <link rel="canonical" href={currentUrl} />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="What is a Good GWA in the Philippines? (2025 Guide)" />
                <meta property="og:description" content="Find out what GWA scores are considered excellent, good, and passing at Philippine universities." />
                <meta property="og:url" content={currentUrl} />
                <meta property="og:image" content="https://mygwacalculator.com/images/blog-good-gwa.png" />
                <meta property="article:published_time" content="2025-03-05T00:00:00+08:00" />
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org", "@type": "Article",
                    "headline": "What is a Good GWA in the Philippines?",
                    "image": "https://mygwacalculator.com/images/blog-good-gwa.png",
                    "datePublished": "2025-03-05T00:00:00+08:00",
                    "author": { "@type": "Person", "name": "Anmol Gautam", "url": "https://mygwacalculator.com/about", "jobTitle": "Founder", "worksFor": { "@type": "Organization", "name": "mygwacalculator.com" } },
                    "publisher": { "@type": "Organization", "name": "GWA Calculator", "logo": { "@type": "ImageObject", "url": "https://mygwacalculator.com/logo.png" } },
                    "url": currentUrl, "inLanguage": "en-PH"
                })}</script>
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org", "@type": "FAQPage",
                    "mainEntity": faqData.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } }))
                })}</script>
            </Helmet>

            <ReadingProgressBar />
            <BackToTopButton />

            <div className="min-h-screen bg-white dark:bg-gray-900">
                {/* Hero */}
                <div className="bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 text-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 mt-14">
                        <Link to="/blog" className="inline-flex items-center text-white/80 hover:text-white text-sm mb-6">
                            <ArrowLeft className="h-4 w-4 mr-1" /> Back to Blog
                        </Link>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <Badge className="bg-white/20 text-white border-white/30">Guide</Badge>
                            <Badge variant="outline" className="border-white/30 text-white">GWA Philippines</Badge>
                        </div>
                        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">What is a Good GWA in the Philippines? (2025 Complete Guide)</h1>
                        <div className="flex flex-wrap gap-5 text-white/90 text-sm mb-6">
                            <AuthorCard variant="compact" />
                            <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> March 5, 2025</span>
                            <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 9 min read</span>
                        </div>
                        <div className="flex gap-2 flex-wrap">
                            <span className="text-white/80 text-sm">Share:</span>
                            {[["twitter", <Twitter key="t" className="h-4 w-4" />], ["facebook", <Facebook key="f" className="h-4 w-4" />], ["whatsapp", <MessageCircle key="w" className="h-4 w-4" />]].map(([p, icon]) => (
                                <Button key={p as string} variant="outline" size="sm" onClick={() => handleShare(p as string)} className="bg-white/10 border-white/30 text-white hover:bg-white/20">{icon}</Button>
                            ))}
                            <Button variant="outline" size="sm" onClick={() => handleShare()} className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                                {copied ? "Copied!" : <Copy className="h-4 w-4" />}
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Featured Image */}
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
                    <div className="rounded-2xl overflow-hidden shadow-xl">
                        <img src="/images/blog-good-gwa.png" alt="Grade report card showing GWA benchmarks with Philippine university books and calculator" className="w-full h-56 sm:h-72 md:h-96 object-cover" width="1200" height="630" />
                    </div>
                </div>

                {/* Article */}
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                    <Card className="border-0 shadow-xl bg-white dark:bg-gray-800">
                        <CardContent className="p-6 sm:p-10 prose dark:prose-invert max-w-none">
                            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                                Every Filipino student has asked this at least once: <strong>"Is my GWA good enough?"</strong> Whether you're aiming for the Dean's List, a scholarship, or your dream job, knowing where your GWA stands is the first step to a clear academic strategy.
                            </p>
                            <p className="text-gray-700 dark:text-gray-300 mb-6">
                                In the Philippines, GWA (General Weighted Average) works on a <strong>1.0 to 5.0 scale</strong> — and unlike international GPA systems, <strong>lower is better</strong>. A GWA of 1.0 is the highest possible grade, while 5.0 means failing. This often confuses students applying abroad or comparing themselves to international peers.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">The GWA Scale Explained: What Each Number Means</h2>
                            <div className="overflow-x-auto mb-8">
                                <table className="w-full border-collapse text-sm">
                                    <thead><tr className="bg-blue-50 dark:bg-gray-700"><th className="px-4 py-3 text-left font-bold text-gray-900 dark:text-white border border-gray-200 dark:border-gray-600">GWA Range</th><th className="px-4 py-3 text-left font-bold text-gray-900 dark:text-white border border-gray-200 dark:border-gray-600">Equivalent</th><th className="px-4 py-3 text-left font-bold text-gray-900 dark:text-white border border-gray-200 dark:border-gray-600">Standing</th></tr></thead>
                                    <tbody className="text-gray-700 dark:text-gray-300">
                                        {[["1.00", "100% / A+", "Highest distinction"], ["1.00 – 1.45", "95–100%", "Excellent (University Scholar range)"], ["1.46 – 1.75", "88–94%", "Very Good (College Scholar range)"], ["1.76 – 2.00", "82–87%", "Good"], ["2.01 – 2.50", "75–81%", "Satisfactory"], ["2.51 – 3.00", "70–74%", "Passing"], ["Below 3.00 / 5.00", "Below 70%", "Conditional/Failing"]].map(([g, eq, st], i) => (
                                            <tr key={i} className={i % 2 === 0 ? "bg-white dark:bg-gray-800" : "bg-gray-50 dark:bg-gray-750"}>
                                                <td className="px-4 py-2 border border-gray-200 dark:border-gray-600 font-medium">{g}</td>
                                                <td className="px-4 py-2 border border-gray-200 dark:border-gray-600">{eq}</td>
                                                <td className="px-4 py-2 border border-gray-200 dark:border-gray-600">{st}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">What is Considered a "Good" GWA?</h2>
                            <p className="text-gray-700 dark:text-gray-300 mb-4">The answer depends on your goal:</p>

                            <div className="space-y-4 mb-8">
                                {[
                                    { label: "🏆 Excellent GWA: 1.00 – 1.50", desc: "This range puts you at the top of your class. In most universities, a GWA of 1.45 or below qualifies as University Scholar — the highest academic honor a student can receive each semester. A 1.5 GWA is equivalent to around 90% and is considered outstanding by any standard." },
                                    { label: "⭐ Very Good GWA: 1.51 – 1.75", desc: "This is the College Scholar range at most universities. You are performing significantly above average and are likely eligible for Dean's List status. Many scholarships and graduate program applications consider 1.75 as an excellent GWA." },
                                    { label: "✅ Good GWA: 1.76 – 2.25", desc: "A solid, respectable GWA. While you may not qualify for the Dean's List, many employers accept a minimum of 2.0–2.25 for competitive positions. This range shows you are a consistent, capable student." },
                                    { label: "📋 Acceptable GWA: 2.26 – 3.00", desc: "Passing, but may limit your options for scholarships, honors, and some competitive jobs. This is the range where improvement strategies make the most impact." },
                                ].map((item, i) => (
                                    <div key={i} className="bg-gray-50 dark:bg-gray-700 rounded-xl p-5 border border-gray-200 dark:border-gray-600">
                                        <h3 className="font-bold text-gray-900 dark:text-white mb-2">{item.label}</h3>
                                        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                ))}
                            </div>

                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">Good GWA by Purpose</h2>
                            <div className="grid sm:grid-cols-2 gap-4 mb-8">
                                {[
                                    { title: "For Dean's List", content: "1.75 or below (varies per university). Check your student handbook for exact cutoffs." },
                                    { title: "For Scholarships", content: "Most government scholarships (CHED, DOST, GOVPH) require 1.75–2.00. Private scholarships vary from 1.5 to 2.5." },
                                    { title: "For Latin Honors", content: "Cum Laude: 1.75 or below. Magna Cum Laude: 1.45 or below. Summa Cum Laude: 1.20 or below (varies by school)." },
                                    { title: "For Employment", content: "Most major companies require GWA 2.0–2.5. Top companies like BDO, BPI, PLDT often prefer 1.75 or below." },
                                ].map((item, i) => (
                                    <div key={i} className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-5 border border-blue-100 dark:border-blue-800">
                                        <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-2 flex items-center gap-2"><CheckCircle className="h-4 w-4" />{item.title}</h3>
                                        <p className="text-blue-800 dark:text-blue-200 text-sm">{item.content}</p>
                                    </div>
                                ))}
                            </div>

                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">GWA Requirements by University</h2>
                            <p className="text-gray-700 dark:text-gray-300 mb-4">Different universities have slightly different benchmarks. Here's a quick reference:</p>
                            <div className="overflow-x-auto mb-8">
                                <table className="w-full border-collapse text-sm">
                                    <thead><tr className="bg-blue-50 dark:bg-gray-700"><th className="px-4 py-3 text-left border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white">University</th><th className="px-4 py-3 text-left border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white">Excellent GWA</th><th className="px-4 py-3 text-left border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white">Dean's List</th></tr></thead>
                                    <tbody className="text-gray-700 dark:text-gray-300">
                                        {[["UP (all campuses)", "1.00 – 1.20", "1.00 – 1.75 (Scholar)"], ["UST", "1.00 – 1.50", "1.75 or below"], ["DLSU (trimester)", "3.80 – 4.00 (4.0 scale)", "1st Honors: 3.4+"], ["PUP", "1.00 – 1.25", "1.00 – 1.75"], ["FEU", "1.0 – 1.50", "1.75 or below"]].map(([u, e, d], i) => (
                                            <tr key={i} className={i % 2 === 0 ? "bg-white dark:bg-gray-800" : "bg-gray-50 dark:bg-gray-750"}>
                                                <td className="px-4 py-2 border border-gray-200 dark:border-gray-600 font-medium">{u}</td>
                                                <td className="px-4 py-2 border border-gray-200 dark:border-gray-600">{e}</td>
                                                <td className="px-4 py-2 border border-gray-200 dark:border-gray-600">{d}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">How to Calculate Your GWA</h2>
                            <p className="text-gray-700 dark:text-gray-300 mb-4">The formula is: <strong>GWA = Σ(Grade × Units) ÷ Total Units</strong></p>
                            <div className="bg-gray-100 dark:bg-gray-700 rounded-xl p-5 font-mono text-sm mb-6">
                                <p className="text-gray-800 dark:text-gray-200">Example:</p>
                                <p>Math (3 units): Grade 1.25 → 3 × 1.25 = 3.75</p>
                                <p>English (3 units): Grade 1.50 → 3 × 1.50 = 4.50</p>
                                <p>Science (4 units): Grade 1.75 → 4 × 1.75 = 7.00</p>
                                <p className="mt-2 font-bold text-blue-600 dark:text-blue-400">GWA = (3.75 + 4.50 + 7.00) ÷ (3+3+4) = 15.25 ÷ 10 = <strong>1.525</strong></p>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300 mb-6">
                                Don't want to do it manually?{" "}
                                <Link to="/" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">Use our free GWA Calculator →</Link>
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">Tips to Improve Your GWA</h2>
                            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300 mb-8">
                                <li><strong>Prioritize high-unit subjects</strong> — they have more weight in your GWA calculation</li>
                                <li><strong>Use the Final Grade Calculator</strong> before exams to know exactly what score you need</li>
                                <li><strong>Avoid dropping subjects</strong> — a DRP can disqualify you from honors for that semester</li>
                                <li><strong>Be strategic about your load</strong> — don't stack all difficult subjects in one semester</li>
                                <li><strong>Seek teachers' help early</strong> — don't wait until finals to address weak areas</li>
                            </ul>

                            <div className="bg-blue-600 text-white rounded-2xl p-6 text-center mt-10">
                                <h3 className="text-xl font-bold mb-2">Calculate Your GWA Now</h3>
                                <p className="text-blue-100 mb-4">Use our free tool to instantly see your current GWA and find out where you stand.</p>
                                <Link to="/" className="inline-block bg-white text-blue-700 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors">
                                    Try GWA Calculator Free →
                                </Link>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Author Box */}
                    <AuthorCard variant="full" />

                    {/* FAQ */}
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

export default GoodGwaBlog;
