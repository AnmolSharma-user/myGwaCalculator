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

const LatinHonorsBlog = () => {
    const { toast } = useToast();
    const [copied, setCopied] = useState(false);
    const handleShare = async (p?: string) => {
        const url = window.location.href;
        const text = "Latin Honors Philippines: Cum Laude, Magna, Summa Requirements Guide";
        if (p === "twitter") window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, "_blank");
        else if (p === "facebook") window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, "_blank");
        else if (p === "whatsapp") window.open(`https://wa.me/?text=${encodeURIComponent(text + " " + url)}`, "_blank");
        else { await navigator.clipboard.writeText(url); setCopied(true); toast({ title: "Link copied!" }); setTimeout(() => setCopied(false), 2000); }
    };

    const faqData = [
        { q: "What GWA do you need for Cum Laude in the Philippines?", a: "Most Philippine universities require a GWA of 1.75 or better (no grade below 2.0 per semester) for Cum Laude. Some schools like UP may have different thresholds — always check your student handbook." },
        { q: "Is Magna Cum Laude higher than Cum Laude?", a: "Yes. Ranking from highest to lowest: Summa Cum Laude → Magna Cum Laude → Cum Laude. Summa is the highest academic honor at graduation in Philippine universities." },
        { q: "Can one failing grade disqualify you from Latin Honors?", a: "In most universities, yes. Even a single grade of 3.0 (conditional) or 5.0 (failing) in any subject during your entire course can disqualify you from Latin honors, regardless of your overall GWA." },
        { q: "Does NSTP count in Latin Honors GWA computation?", a: "Generally no. NSTP, PE, and similar non-academic subjects are typically excluded from the GWA computation for Latin Honors, though you still need to pass them." },
        { q: "Can transferee or shiftee students get Latin Honors?", a: "This varies significantly by university. UP, for example, requires a minimum residency of at least 75% of your total program units to be eligible for honors. Check with your registrar." },
    ];

    const currentUrl = "https://mygwacalculator.com/blog/latin-honors-philippines";

    return (
        <>
            <Helmet>
                <title>Latin Honors Philippines 2025: Cum Laude, Magna Cum Laude & Summa Requirements</title>
                <meta name="description" content="Complete guide to Latin Honors requirements in the Philippines. Learn the GWA cutoffs for Cum Laude, Magna Cum Laude, and Summa Cum Laude at UP, UST, DLSU, PUP and more." />
                <meta name="keywords" content="latin honors Philippines, cum laude GWA requirements, magna cum laude Philippines, summa cum laude GWA, latin honors UP UST DLSU, graduation honors Philippines 2025" />
                <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                <link rel="canonical" href={currentUrl} />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="Latin Honors Philippines 2025: Cum Laude, Magna Cum Laude & Summa Requirements" />
                <meta property="og:image" content="https://mygwacalculator.com/images/blog-latin-honors.png" />
                <meta property="og:url" content={currentUrl} />
                <meta property="article:published_time" content="2025-03-05T00:00:00+08:00" />
                <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "Article", "headline": "Latin Honors Philippines 2025: Cum Laude, Magna Cum Laude & Summa Requirements", "image": "https://mygwacalculator.com/images/blog-latin-honors.png", "datePublished": "2025-03-05T00:00:00+08:00", "author": { "@type": "Organization", "name": "GWA Calculator Team" }, "publisher": { "@type": "Organization", "name": "GWA Calculator" }, "url": currentUrl })}</script>
                <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqData.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) })}</script>
            </Helmet>

            <ReadingProgressBar />
            <BackToTopButton />
            <div className="min-h-screen bg-white dark:bg-gray-900">
                <div className="bg-gradient-to-br from-amber-600 via-yellow-700 to-orange-800 text-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 mt-14">
                        <Link to="/blog" className="inline-flex items-center text-white/80 hover:text-white text-sm mb-6"><ArrowLeft className="h-4 w-4 mr-1" /> Back to Blog</Link>
                        <div className="flex flex-wrap gap-2 mb-4"><Badge className="bg-white/20 text-white border-white/30">Guide</Badge><Badge variant="outline" className="border-white/30 text-white">Graduation Honors</Badge></div>
                        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">Latin Honors Philippines 2025: Cum Laude, Magna Cum Laude & Summa Requirements (All Major Universities)</h1>
                        <div className="flex flex-wrap gap-5 text-white/90 text-sm mb-6">
                            <AuthorCard variant="compact" />
                            <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> March 5, 2025</span>
                            <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 10 min read</span>
                        </div>
                        <div className="flex gap-2 flex-wrap">
                            <span className="text-white/80 text-sm">Share:</span>
                            {[["twitter", <Twitter key="t" className="h-4 w-4" />], ["facebook", <Facebook key="f" className="h-4 w-4" />], ["whatsapp", <MessageCircle key="w" className="h-4 w-4" />]].map(([pl, icon]) => (
                                <Button key={pl as string} variant="outline" size="sm" onClick={() => handleShare(pl as string)} className="bg-white/10 border-white/30 text-white hover:bg-white/20">{icon}</Button>
                            ))}
                            <Button variant="outline" size="sm" onClick={() => handleShare()} className="bg-white/10 border-white/30 text-white hover:bg-white/20">{copied ? "Copied!" : <Copy className="h-4 w-4" />}</Button>
                        </div>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
                    <div className="rounded-2xl overflow-hidden shadow-xl"><img src="/images/blog-latin-honors.png" alt="Philippine university graduation ceremony with students in togas holding Latin honor cords" className="w-full h-56 sm:h-72 md:h-96 object-cover" width="1200" height="630" /></div>
                </div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                    <Card className="border-0 shadow-xl bg-white dark:bg-gray-800">
                        <CardContent className="p-6 sm:p-10">
                            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                                Graduating with Latin Honors in the Philippines is one of the highest academic achievements a college student can receive. The gold cord at graduation, the engraved diploma, the public recognition — these are the rewards of maintaining exceptional academic performance throughout your entire college career. But what exactly does it take?
                            </p>
                            <p className="text-gray-700 dark:text-gray-300 mb-6">
                                In this comprehensive guide, we break down the <strong>Latin Honors requirements</strong> for the top universities in the Philippines, explain the rules that might disqualify you even with a stellar GWA, and give you actionable strategies to protect your honors standing from first year all the way to graduation.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">What Are Latin Honors?</h2>
                            <p className="text-gray-700 dark:text-gray-300 mb-4">
                                Latin Honors are academic distinctions awarded to graduating students based on their overall GWA throughout the entire degree program. There are three levels, from lowest to highest:
                            </p>
                            <div className="grid sm:grid-cols-3 gap-4 mb-8">
                                {[
                                    { title: "Cum Laude", latin: '"With Praise"', color: "bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-700", desc: "The entry-level Latin honor. Recognizes consistently excellent academic performance." },
                                    { title: "Magna Cum Laude", latin: '"With Great Praise"', color: "bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-700", desc: "Higher distinction. Requires a tighter GWA and stricter grade requirements." },
                                    { title: "Summa Cum Laude", latin: '"With Highest Praise"', color: "bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-700", desc: "The highest academic honor at graduation. Reserved for the most exceptional students." },
                                ].map((h, i) => (
                                    <div key={i} className={`rounded-xl p-5 border ${h.color}`}>
                                        <h3 className="font-bold text-gray-900 dark:text-white text-base mb-1">{h.title}</h3>
                                        <p className="text-xs text-gray-500 dark:text-gray-400 italic mb-2">{h.latin}</p>
                                        <p className="text-gray-700 dark:text-gray-300 text-sm">{h.desc}</p>
                                    </div>
                                ))}
                            </div>

                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">Latin Honors GWA Requirements by University (2025)</h2>
                            <div className="overflow-x-auto mb-8">
                                <table className="w-full border-collapse text-sm">
                                    <thead><tr className="bg-amber-50 dark:bg-gray-700">
                                        <th className="px-3 py-3 text-left font-bold text-gray-900 dark:text-white border border-gray-200 dark:border-gray-600">University</th>
                                        <th className="px-3 py-3 text-left font-bold text-gray-900 dark:text-white border border-gray-200 dark:border-gray-600">Cum Laude</th>
                                        <th className="px-3 py-3 text-left font-bold text-gray-900 dark:text-white border border-gray-200 dark:border-gray-600">Magna Cum Laude</th>
                                        <th className="px-3 py-3 text-left font-bold text-gray-900 dark:text-white border border-gray-200 dark:border-gray-600">Summa Cum Laude</th>
                                    </tr></thead>
                                    <tbody className="text-gray-700 dark:text-gray-300">
                                        {[
                                            ["University of the Philippines (UP)", "1.45 – 1.75", "1.20 – 1.44", "1.00 – 1.19"],
                                            ["University of Santo Tomas (UST)", "1.75 or below", "1.50 or below", "1.25 or below"],
                                            ["Polytechnic University PH (PUP)", "1.75 or below", "1.50 or below", "1.25 or below"],
                                            ["De La Salle Univ. (DLSU, 4.0 scale)", "3.400–3.599", "3.600–3.799", "3.800–4.000"],
                                            ["Ateneo de Manila (ADMU, 4.0 scale)", "3.400–3.599", "3.600–3.699", "3.700–4.000"],
                                            ["PLM (Pamantasan ng Lungsod ng Maynila)", "1.75 or below", "1.50 or below", "1.25 or below"],
                                            ["FEU / Mapua / most private schools", "1.75 or below", "1.50 or below", "1.20 or below"],
                                        ].map(([u, c, m, s], i) => (
                                            <tr key={i} className={i % 2 === 0 ? "bg-white dark:bg-gray-800" : "bg-gray-50 dark:bg-gray-750"}>
                                                <td className="px-3 py-2 border border-gray-200 dark:border-gray-600 font-medium">{u}</td>
                                                <td className="px-3 py-2 border border-gray-200 dark:border-gray-600 text-amber-700 dark:text-amber-400">{c}</td>
                                                <td className="px-3 py-2 border border-gray-200 dark:border-gray-600 text-orange-700 dark:text-orange-400">{m}</td>
                                                <td className="px-3 py-2 border border-gray-200 dark:border-gray-600 text-yellow-700 dark:text-yellow-400 font-semibold">{s}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-8 italic">* Requirements may change per academic year. Always verify with your university registrar before graduation.</p>

                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">Common Rules That Can Disqualify You</h2>
                            <p className="text-gray-700 dark:text-gray-300 mb-4">Having a great GWA is necessary but not sufficient. These rules trip up many students:</p>
                            <ul className="list-disc pl-5 space-y-3 text-gray-700 dark:text-gray-300 mb-8">
                                <li><strong>No failing grade (5.0) in any subject</strong> — Even a single fail, even if repeated and passed, can disqualify you at many schools</li>
                                <li><strong>No incomplete (INC) or dropped (DRP) marks</strong> — Incomplete grades that are not resolved can also be disqualifying</li>
                                <li><strong>No grade below the minimum per subject</strong> — Some universities require no grade below 2.0 or 2.5 in any individual subject</li>
                                <li><strong>Residency requirements</strong> — Must complete a minimum percentage (usually 75%) of your program at the same university</li>
                                <li><strong>Full load requirement</strong> — Many schools require you to carry a regular academic load every semester to maintain honors eligibility</li>
                            </ul>

                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">Strategies to Protect Your Latin Honors Standing</h2>
                            <div className="space-y-4 mb-8">
                                {[
                                    { step: "1", title: "Track your cumulative GWA every semester", desc: "Use our GWA Calculator to monitor where you stand. One bad semester doesn't always ruin your chances — but you need to know the math." },
                                    { step: "2", title: "Avoid dropping subjects strategically", desc: "If you're having trouble, consult with your professor or academic advisor before dropping. A DRP can cost you your honors eligibility for that semester and, in some schools, permanently." },
                                    { step: "3", title: "Resolve incompletes immediately", desc: "Don't let an INC linger. Most schools have a deadline (one semester or one year) to resolve an Incomplete before it converts to a failing grade." },
                                    { step: "4", title: "Balance your semestral load intelligently", desc: "Avoid stacking all your hardest subjects in one semester. Mix challenging major subjects with lighter electives to keep your GWA stable." },
                                    { step: "5", title: "Know your university's honors policy cold", desc: "Read your student handbook thoroughly. Ask the registrar if any rule is unclear. The worst surprise is finding out you were disqualified over a rule you didn't know existed." },
                                ].map((s) => (
                                    <div key={s.step} className="flex gap-4">
                                        <div className="flex-shrink-0 w-9 h-9 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-sm">{s.step}</div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{s.title}</h3>
                                            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{s.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-amber-600 text-white rounded-2xl p-6 text-center mt-10">
                                <h3 className="text-xl font-bold mb-2">Check Your GWA Now</h3>
                                <p className="text-amber-100 mb-4">Know exactly where you stand with our free GWA Calculator — built specifically for Filipino students.</p>
                                <Link to="/" className="inline-block bg-white text-amber-700 font-bold px-6 py-3 rounded-xl hover:bg-amber-50 transition-colors">Calculate My GWA →</Link>
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

export default LatinHonorsBlog;
