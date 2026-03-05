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

const SemestralGwaBlog = () => {
    const { toast } = useToast();
    const [copied, setCopied] = useState(false);
    const hs = async (p?: string) => { const url = window.location.href; const t = "How to Compute Your Semestral GWA Step by Step"; if (p === "twitter") window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(t)}&url=${encodeURIComponent(url)}`, "_blank"); else if (p === "facebook") window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, "_blank"); else if (p === "whatsapp") window.open(`https://wa.me/?text=${encodeURIComponent(t + " " + url)}`, "_blank"); else { await navigator.clipboard.writeText(url); setCopied(true); toast({ title: "Link copied!" }); setTimeout(() => setCopied(false), 2000); } };

    const faqData = [
        { q: "What is the difference between semestral GWA and cumulative GWA?", a: "Semestral GWA is your weighted average for ONE specific semester only. Cumulative GWA is the weighted average of ALL your semesters combined since your first year. Scholarships and Dean's List typically look at semestral GWA, while Latin Honors and employment typically look at cumulative GWA." },
        { q: "Are PE, NSTP, and thesis included in GWA computation?", a: "It depends on your university. Most schools exclude NSTP and PE units from the GWA computation. Some schools exclude thesis or OJT as well. Check your registrar's guidelines or student handbook to know exactly which subjects are included in your GWA." },
        { q: "What happens if one subject is still an INC (Incomplete)?", a: "An Incomplete (INC) is not counted as 0 in most schools — it simply means that grade is deferred. However, if you don't resolve it within the deadline (usually 1 semester or 1 academic year), it automatically becomes a failing mark (5.0 or 0.0), which then factors into your GWA." },
        { q: "Can I compute my GWA before all final grades are released?", a: "Yes — you can estimate your projected GWA using your current standing in each subject. Our GWA Calculator lets you experiment with projected grades to see different GWA scenarios before official results come out." },
        { q: "What is a weighted average versus a simple average for grades?", a: "A simple average treats all subjects equally. A weighted average gives more importance to subjects with more units. GWA always uses weighted average — a 6-unit subject matters 6x more than a 1-unit subject in your final GWA. This is why high-unit subjects should always be your priority." },
    ];

    const example = [
        { subj: "Mathematics 101", units: 5, grade: "1.25" },
        { subj: "English Communications", units: 3, grade: "1.50" },
        { subj: "Introduction to Computing", units: 3, grade: "1.75" },
        { subj: "Physical Education", units: 2, grade: "1.00" },
        { subj: "Natural Sciences 1", units: 4, grade: "2.00" },
        { subj: "Filipino 101", units: 3, grade: "1.50" },
    ];

    return (
        <>
            <Helmet>
                <title>How to Compute Your Semestral GWA Step by Step (Formula + Calculator) Philippines</title>
                <meta name="description" content="Learn exactly how to compute your semestral GWA in the Philippines. Includes the exact formula, a worked example with multiple subjects, and a free GWA calculator to verify your result." />
                <meta name="keywords" content="how to compute semestral GWA Philippines, GWA formula computation, compute GWA step by step, semestral GWA calculator Philippines, GWA formula example" />
                <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
                <link rel="canonical" href="https://mygwacalculator.com/blog/how-to-compute-semestral-gwa" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="How to Compute Your Semestral GWA Step by Step Philippines" />
                <meta property="og:image" content="https://mygwacalculator.com/images/blog-semestral-gwa.png" />
                <meta property="og:url" content="https://mygwacalculator.com/blog/how-to-compute-semestral-gwa" />
                <meta property="article:published_time" content="2025-03-05T00:00:00+08:00" />
                <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "Article", "headline": "How to Compute Your Semestral GWA Step by Step Philippines", "image": "https://mygwacalculator.com/images/blog-semestral-gwa.png", "datePublished": "2025-03-05T00:00:00+08:00", "dateModified": "2025-03-05T00:00:00+08:00", "author": { "@type": "Person", "name": "Anmol Gautam", "url": "https://mygwacalculator.com/about" }, "publisher": { "@type": "Organization", "name": "mygwacalculator.com", "url": "https://mygwacalculator.com", "logo": { "@type": "ImageObject", "url": "https://mygwacalculator.com/android-chrome-512x512.png" } } })}</script>
                <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqData.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) })}</script>
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org", "@type": "HowTo",
                    "name": "How to Compute Your Semestral GWA",
                    "step": [
                        { "@type": "HowToStep", "name": "List all subjects with their grades and units", "text": "Write down every subject you took this semester, along with the grade (1.00–5.00) and unit count." },
                        { "@type": "HowToStep", "name": "Multiply each grade by its units", "text": "For each subject, calculate: Grade × Units = Grade Points" },
                        { "@type": "HowToStep", "name": "Sum all grade points", "text": "Add up all the Grade Points from every subject." },
                        { "@type": "HowToStep", "name": "Sum all units", "text": "Add up the unit count of all subjects." },
                        { "@type": "HowToStep", "name": "Divide total grade points by total units", "text": "GWA = Total Grade Points ÷ Total Units. Round to 2 decimal places." }
                    ]
                })}</script>
            </Helmet>

            <ReadingProgressBar />
            <BackToTopButton />
            <div className="min-h-screen bg-white dark:bg-gray-900">
                <div className="bg-gradient-to-br from-slate-700 via-gray-800 to-zinc-900 text-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 mt-14">
                        <Link to="/blog" className="inline-flex items-center text-white/80 hover:text-white text-sm mb-6"><ArrowLeft className="h-4 w-4 mr-1" /> Back to Blog</Link>
                        <div className="flex flex-wrap gap-2 mb-4"><Badge className="bg-white/20 text-white border-white/30">Tutorial</Badge><Badge variant="outline" className="border-white/30 text-white">Step-by-Step</Badge></div>
                        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">How to Compute Your Semestral GWA Step by Step — Formula, Example & Free Calculator</h1>
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
                    <div className="rounded-2xl overflow-hidden shadow-xl"><img src="/images/blog-semestral-gwa.png" alt="Filipino student holding enrollment form with grades and units for GWA computation on university desk" className="w-full h-56 sm:h-72 md:h-96 object-cover" width="1200" height="630" /></div>
                </div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                    <Card className="border-0 shadow-xl bg-white dark:bg-gray-800">
                        <CardContent className="p-6 sm:p-10">
                            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                                Every semester in a Philippine university ends the same way: grades are released, and the first thing students do is scramble to figure out their GWA. Some ask their registrar. Some try to add up numbers in their head. Some ask their blockmates. But there's a much faster and more reliable way — and knowing exactly <strong>how to compute your GWA</strong> gives you a crucial academic advantage.
                            </p>
                            <p className="text-gray-700 dark:text-gray-300 mb-8">
                                Understanding the formula also lets you <em>project</em> your GWA before grades are even released — so you can know exactly what you need on your finals to reach your target. This guide walks you through everything step by step.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">The GWA Formula</h2>
                            <div className="bg-blue-600 text-white rounded-2xl p-6 text-center mb-8">
                                <p className="text-sm font-medium text-blue-200 mb-2 uppercase tracking-wide">General Weighted Average Formula</p>
                                <p className="text-2xl sm:text-3xl font-bold">GWA = Σ (Grade × Units) ÷ Total Units</p>
                                <p className="text-blue-200 mt-2 text-sm">Where Σ means "sum of all subjects"</p>
                            </div>

                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">Step-by-Step Guide: How to Compute Your Semestral GWA</h2>
                            <div className="space-y-5 mb-10">
                                {[
                                    { step: "Step 1", title: "List All Your Subjects, Grades, and Units", desc: "Gather your grade report or class card. Write down every subject you took this semester, the grade you received (on the 1.0–5.0 scale), and the number of units each subject is worth. You can usually find this on your official grade report from your school portal or registrar." },
                                    { step: "Step 2", title: "Multiply Each Grade by Its Units", desc: "For every subject, multiply the grade by the unit count. This gives you the 'grade points' for each subject. For example: if you got 1.25 in Math (3 units), your grade points = 1.25 × 3 = 3.75." },
                                    { step: "Step 3", title: "Add Up All Grade Points", desc: "Sum up all the grade points you computed in Step 2. This gives you the Total Grade Points for the semester." },
                                    { step: "Step 4", title: "Add Up All Units", desc: "Add up the unit count for all subjects. This gives you the Total Units for the semester." },
                                    { step: "Step 5", title: "Divide Total Grade Points by Total Units", desc: "Finally, divide the Total Grade Points by the Total Units. Round to 2 decimal places. The result is your semestral GWA." },
                                ].map((s, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="flex-shrink-0 text-sm font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-3 py-1.5 rounded-lg h-fit whitespace-nowrap">{s.step}</div>
                                        <div>
                                            <h3 className="font-bold text-gray-900 dark:text-white mb-1">{s.title}</h3>
                                            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{s.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">Worked Example: Semester 1</h2>
                            <div className="overflow-x-auto mb-4">
                                <table className="w-full border-collapse text-sm">
                                    <thead><tr className="bg-gray-700 text-white"><th className="px-3 py-3 text-left border border-gray-600">Subject</th><th className="px-3 py-3 text-center border border-gray-600">Units</th><th className="px-3 py-3 text-center border border-gray-600">Grade</th><th className="px-3 py-3 text-center border border-gray-600">Grade Points</th></tr></thead>
                                    <tbody>
                                        {example.map((row, i) => {
                                            const gp = (parseFloat(row.grade) * row.units).toFixed(2);
                                            return (
                                                <tr key={i} className={i % 2 === 0 ? "bg-white dark:bg-gray-800" : "bg-gray-50 dark:bg-gray-750"}>
                                                    <td className="px-3 py-2.5 border border-gray-200 dark:border-gray-600 text-gray-800 dark:text-gray-200">{row.subj}</td>
                                                    <td className="px-3 py-2.5 border border-gray-200 dark:border-gray-600 text-center text-gray-700 dark:text-gray-300">{row.units}</td>
                                                    <td className="px-3 py-2.5 border border-gray-200 dark:border-gray-600 text-center font-semibold text-blue-700 dark:text-blue-300">{row.grade}</td>
                                                    <td className="px-3 py-2.5 border border-gray-200 dark:border-gray-600 text-center text-gray-700 dark:text-gray-300">{gp}</td>
                                                </tr>
                                            );
                                        })}
                                        <tr className="bg-blue-50 dark:bg-blue-900/30 font-bold">
                                            <td className="px-3 py-3 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white">TOTAL</td>
                                            <td className="px-3 py-3 border border-gray-200 dark:border-gray-600 text-center text-gray-900 dark:text-white">20</td>
                                            <td className="px-3 py-3 border border-gray-200 dark:border-gray-600 text-center"></td>
                                            <td className="px-3 py-3 border border-gray-200 dark:border-gray-600 text-center text-gray-900 dark:text-white">30.25</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-5 border border-blue-200 dark:border-blue-700 mb-8">
                                <p className="text-blue-900 dark:text-blue-200 font-medium">Calculation:</p>
                                <p className="text-blue-800 dark:text-blue-300 font-mono mt-1">GWA = 30.25 ÷ 20 = <strong className="text-2xl text-blue-900 dark:text-blue-100">1.5125</strong></p>
                                <p className="text-blue-700 dark:text-blue-300 text-sm mt-2">Rounded to 2 decimal places: <strong>GWA = 1.51</strong> — a Very Good standing, likely qualifying for College Scholar status!</p>
                            </div>

                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">Common Mistakes When Computing GWA</h2>
                            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300 mb-8">
                                <li><strong>Including non-academic subjects</strong> — Verify with your registrar whether PE, NSTP, and PE are included</li>
                                <li><strong>Using the wrong grade scale</strong> — Make sure you're on the correct scale (most PH schools: 1.0–5.0; DLSU/Ateneo: 4.0 scale)</li>
                                <li><strong>Rounding too early</strong> — Wait until the final division step to round, otherwise errors accumulate</li>
                                <li><strong>Confusing semestral with cumulative GWA</strong> — Semestral is just one term; cumulative includes all previous terms weighted by units</li>
                            </ul>

                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">Use the Free GWA Calculator Instead</h2>
                            <p className="text-gray-700 dark:text-gray-300 mb-6">Manual computation is useful so you understand the formula. But for accuracy and speed, our free GWA Calculator does this instantly — just enter your subjects, grades, and units, and get your GWA in seconds. You can also try different grade scenarios to project your GWA before official results.</p>

                            <div className="bg-gray-800 text-white rounded-2xl p-6 text-center mt-4">
                                <h3 className="text-xl font-bold mb-2">Compute Your GWA in Seconds</h3>
                                <p className="text-gray-300 mb-4">Free, accurate, and built specifically for Philippine university students.</p>
                                <Link to="/" className="inline-block bg-white text-gray-900 font-bold px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors">Open GWA Calculator Free →</Link>
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

export default SemestralGwaBlog;
