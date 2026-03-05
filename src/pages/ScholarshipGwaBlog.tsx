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

const ScholarshipGwaBlog = () => {
    const { toast } = useToast();
    const [copied, setCopied] = useState(false);
    const handleShare = async (p?: string) => {
        const url = window.location.href;
        const text = "College Scholarship GWA Requirements Philippines 2025";
        if (p === "twitter") window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, "_blank");
        else if (p === "facebook") window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, "_blank");
        else if (p === "whatsapp") window.open(`https://wa.me/?text=${encodeURIComponent(text + " " + url)}`, "_blank");
        else { await navigator.clipboard.writeText(url); setCopied(true); toast({ title: "Link copied!" }); setTimeout(() => setCopied(false), 2000); }
    };

    const faqData = [
        { q: "What is the minimum GWA for most Philippine scholarships?", a: "Most Philippine scholarships require a minimum GWA of 2.0 (equivalent to roughly 82%). Government scholarships (CHED, DOST) typically require 1.75 to 2.0. Private corporate scholarships vary from 1.5 to 2.5." },
        { q: "Can I get a scholarship with a GWA of 2.5?", a: "It depends on the scholarship. A 2.5 GWA qualifies you for some private need-based scholarships but typically not for merit-based government awards. Check the specific requirements of each scholarship you're applying for." },
        { q: "Does financial status affect scholarship eligibility?", a: "Yes, many scholarships in the Philippines are need-based and require proof of family income (below a certain annual gross income). Some combines merit (GWA requirement) with need (income bracket). CHED's UniFAST program specifically targets low-income students." },
        { q: "Is DOST scholarship available for all courses?", a: "DOST-SEI scholarships prioritize students taking science, technology, engineering, and mathematics (STEM) courses at DOST-accredited universities. Other courses may be considered in specific programs. Check the current DOST-SEI guidelines for eligible courses each year." },
        { q: "How do I maintain a scholarship once I receive it?", a: "Most scholarships require you to maintain your qualifying GWA (usually 2.0 or 1.75) every semester. Failing to meet this sets you on probation or terminates the scholarship. Some also require minimum unit loads and prohibit employment during studies." },
    ];

    const scholarships = [
        { name: "CHED-UniFAST (Free Tuition)", gwa: "None (need-based)", notes: "For state universities; covers tuition/fees; income-based" },
        { name: "DOST-SEI Merit Scholarship", gwa: "1.75 or below", notes: "STEM courses; monthly stipend + tuition; DOST-accredited schools only" },
        { name: "SM Foundation Scholarship", gwa: "2.0 or below", notes: "Need-based; annual renewal; partner schools" },
        { name: "GSIS Scholarship", gwa: "2.0 or below", notes: "For children of GSIS members; covers full tuition + allowance" },
        { name: "Metrobank Foundation", gwa: "1.75 or below", notes: "Math/Science tracks; very competitive; interview required" },
        { name: "Ayala Foundation", gwa: "2.0 or below", notes: "Need-based; leadership potential assessed; renewable" },
        { name: "TESDA Scholarships", gwa: "Varies by program", notes: "Technical-vocational focus; GWA may not be primary criterion" },
        { name: "Local Government (LGU) Scholarships", gwa: "2.5 or below (varies)", notes: "Varies by municipality/city; usually residency required" },
        { name: "Private University Scholarships", gwa: "1.5 – 2.0 (varies)", notes: "Internal scholarships vary greatly; check specific school" },
    ];

    return (
        <>
            <Helmet>
                <title>College Scholarship GWA Requirements Philippines 2025 | Complete List</title>
                <meta name="description" content="Find out which scholarships you qualify for based on your GWA. Complete list of Philippine college scholarships with GWA requirements: CHED, DOST, SM, Metrobank, private and government grants." />
                <meta name="keywords" content="scholarship GWA requirements Philippines, DOST scholarship GWA, CHED scholarship GWA, SM scholarship Philippines, college scholarship 2025, academic scholarship GWA" />
                <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
                <link rel="canonical" href="https://mygwacalculator.com/blog/scholarship-gwa-requirements-philippines" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="College Scholarship GWA Requirements Philippines 2025" />
                <meta property="og:image" content="https://mygwacalculator.com/images/blog-scholarship-gwa.png" />
                <meta property="og:url" content="https://mygwacalculator.com/blog/scholarship-gwa-requirements-philippines" />
                <meta property="article:published_time" content="2025-03-05T00:00:00+08:00" />
                <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "Article", "headline": "College Scholarship GWA Requirements Philippines 2025", "image": "https://mygwacalculator.com/images/blog-scholarship-gwa.png", "datePublished": "2025-03-05T00:00:00+08:00", "author": { "@type": "Organization", "name": "GWA Calculator Team" }, "publisher": { "@type": "Organization", "name": "GWA Calculator" } })}</script>
                <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqData.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) })}</script>
            </Helmet>

            <ReadingProgressBar />
            <BackToTopButton />
            <div className="min-h-screen bg-white dark:bg-gray-900">
                <div className="bg-gradient-to-br from-teal-700 via-cyan-800 to-blue-900 text-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 mt-14">
                        <Link to="/blog" className="inline-flex items-center text-white/80 hover:text-white text-sm mb-6"><ArrowLeft className="h-4 w-4 mr-1" /> Back to Blog</Link>
                        <div className="flex flex-wrap gap-2 mb-4"><Badge className="bg-white/20 text-white border-white/30">Scholarships</Badge><Badge variant="outline" className="border-white/30 text-white">Philippines 2025</Badge></div>
                        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">College Scholarship GWA Requirements in the Philippines (2025): Every Major Grant Explained</h1>
                        <div className="flex flex-wrap gap-5 text-white/90 text-sm mb-6">
                            <AuthorCard variant="compact" />
                            <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> March 5, 2025</span>
                            <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 9 min read</span>
                        </div>
                        <div className="flex gap-2 flex-wrap">
                            {[["twitter", <Twitter key="t" className="h-4 w-4" />], ["facebook", <Facebook key="f" className="h-4 w-4" />], ["whatsapp", <MessageCircle key="w" className="h-4 w-4" />]].map(([pl, icon]) => (
                                <Button key={pl as string} variant="outline" size="sm" onClick={() => handleShare(pl as string)} className="bg-white/10 border-white/30 text-white hover:bg-white/20">{icon}</Button>
                            ))}
                            <Button variant="outline" size="sm" onClick={() => handleShare()} className="bg-white/10 border-white/30 text-white hover:bg-white/20">{copied ? "Copied!" : <Copy className="h-4 w-4" />}</Button>
                        </div>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
                    <div className="rounded-2xl overflow-hidden shadow-xl"><img src="/images/blog-scholarship-gwa.png" alt="Philippine student holding scholarship award letter with application forms and books" className="w-full h-56 sm:h-72 md:h-96 object-cover" width="1200" height="630" /></div>
                </div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                    <Card className="border-0 shadow-xl bg-white dark:bg-gray-800">
                        <CardContent className="p-6 sm:p-10">
                            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                                Paying for college in the Philippines is a real financial challenge for millions of families. Scholarships — government, private, institutional — can mean the difference between pursuing a dream education or dropping out. But every scholarship has requirements, and one of the most important is usually your <strong>GWA (General Weighted Average)</strong>.
                            </p>
                            <p className="text-gray-700 dark:text-gray-300 mb-8">
                                This guide compiles the GWA requirements for every major scholarship type available to Philippine college students in 2025, along with tips on how to qualify and maintain your grant.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Why GWA Matters for Scholarships</h2>
                            <p className="text-gray-700 dark:text-gray-300 mb-4">Scholarship bodies use GWA as a primary filter because it's objective and standardized. Most scholarships fall into two types:</p>
                            <div className="grid sm:grid-cols-2 gap-4 mb-8">
                                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-5 border border-blue-100 dark:border-blue-800">
                                    <h3 className="font-bold text-blue-900 dark:text-blue-300 mb-2">📊 Merit-Based</h3>
                                    <p className="text-blue-800 dark:text-blue-200 text-sm">Awarded primarily for academic excellence. GWA is the main criterion. Examples: DOST-SEI, Metrobank Foundation, university honor scholarships.</p>
                                </div>
                                <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-5 border border-green-100 dark:border-green-800">
                                    <h3 className="font-bold text-green-900 dark:text-green-300 mb-2">💰 Need-Based</h3>
                                    <p className="text-green-800 dark:text-green-200 text-sm">Prioritizes financial need, but usually has a minimum GWA requirement to screen for academic progress. Examples: SM Foundation, GSIS, LGU scholarships.</p>
                                </div>
                            </div>

                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Major Philippine Scholarships: GWA Requirements at a Glance</h2>
                            <div className="overflow-x-auto mb-8">
                                <table className="w-full border-collapse text-sm">
                                    <thead><tr className="bg-teal-50 dark:bg-gray-700">
                                        <th className="px-3 py-3 text-left font-bold text-gray-900 dark:text-white border border-gray-200 dark:border-gray-600">Scholarship</th>
                                        <th className="px-3 py-3 text-left font-bold text-gray-900 dark:text-white border border-gray-200 dark:border-gray-600">Min. GWA</th>
                                        <th className="px-3 py-3 text-left font-bold text-gray-900 dark:text-white border border-gray-200 dark:border-gray-600">Notes</th>
                                    </tr></thead>
                                    <tbody>
                                        {scholarships.map((s, i) => (
                                            <tr key={i} className={i % 2 === 0 ? "bg-white dark:bg-gray-800" : "bg-gray-50 dark:bg-gray-750"}>
                                                <td className="px-3 py-2.5 border border-gray-200 dark:border-gray-600 font-medium text-gray-900 dark:text-white">{s.name}</td>
                                                <td className="px-3 py-2.5 border border-gray-200 dark:border-gray-600 text-teal-700 dark:text-teal-400 font-semibold">{s.gwa}</td>
                                                <td className="px-3 py-2.5 border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300">{s.notes}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">How to Apply for Philippine Scholarships: Step-by-Step</h2>
                            <div className="space-y-4 mb-8">
                                {[
                                    { step: "1", title: "Compute Your Current GWA", desc: "Use our free GWA Calculator to get your exact GWA before applying. You'll need this on every scholarship application form." },
                                    { step: "2", title: "Check Your Eligibility", desc: "Review the requirements for each scholarship carefully — GWA minimum, income bracket, course/program, university accreditation, and citizenship." },
                                    { step: "3", title: "Prepare Required Documents", desc: "Typically: Transcript of Records (TOR) or Certification of Grades, birth certificate, family income proof (ITR or DOLE cert), barangay certificate, and recommendation letters." },
                                    { step: "4", title: "Apply Early and Follow Up", desc: "Most government scholarships open applications in the first semester of the academic year (usually July–August). Private scholarships vary. Set calendar reminders and follow up with the scholarship office." },
                                    { step: "5", title: "Prepare for Interviews and Tests", desc: "DOST-SEI requires an aptitude test. Some private scholarships include interviews to assess character and leadership. Prepare by reviewing your academic background and why you deserve the scholarship." },
                                ].map((s) => (
                                    <div key={s.step} className="flex gap-4">
                                        <div className="flex-shrink-0 w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-sm">{s.step}</div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{s.title}</h3>
                                            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{s.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">How to Maintain Your Scholarship</h2>
                            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300 mb-8">
                                <li>Maintain the required GWA every semester (usually 2.0 or 1.75)</li>
                                <li>Submit grade reports to your scholarship office on time each semester</li>
                                <li>Avoid failing or dropping subjects — these can trigger automatic disqualification</li>
                                <li>Do not exceed the maximum unit overload if your scholarship has a load requirement</li>
                                <li>Inform your scholarship body immediately if your academic status changes</li>
                            </ul>

                            <div className="bg-teal-600 text-white rounded-2xl p-6 text-center mt-10">
                                <h3 className="text-xl font-bold mb-2">Check Your GWA Before Applying</h3>
                                <p className="text-teal-100 mb-4">Make sure you meet the GWA requirement before submitting any scholarship application. Use our free calculator.</p>
                                <Link to="/" className="inline-block bg-white text-teal-700 font-bold px-6 py-3 rounded-xl hover:bg-teal-50 transition-colors">Calculate My GWA →</Link>
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

export default ScholarshipGwaBlog;
