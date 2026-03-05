import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { AuthorCard } from "@/components/AuthorCard";
import { GraduationCap, ArrowLeft, CheckCircle, XCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const transferRequirements = [
    { univ: "University of the Philippines (UP)", req: 2.00, notes: "Program-specific, contact the college directly" },
    { univ: "De La Salle University (DLSU)", req: 2.50, notes: "85% equivalent; some programs require higher" },
    { univ: "Ateneo de Manila University", req: 2.00, notes: "B average; varies by school within Ateneo" },
    { univ: "University of Santo Tomas (UST)", req: 2.00, notes: "Plus interview for some faculties" },
    { univ: "Far Eastern University (FEU)", req: 2.50, notes: "Good moral character required" },
    { univ: "Polytechnic University of the Philippines (PUP)", req: 2.50, notes: "State university; affordable tuition" },
    { univ: "Mapúa University", req: 2.75, notes: "Engineering programs may require higher" },
    { univ: "National University (NU)", req: 2.50, notes: "Sports scholars may have different cutoff" },
];

const TransfereeGwa = () => {
    const [gwa, setGwa] = useState<string>("");
    const [units, setUnits] = useState<string>("");
    const [programType, setProgramType] = useState<"engineering" | "nursing" | "business" | "education" | "general">("general");
    const [results, setResults] = useState<null | { eligible: typeof transferRequirements; notEligible: typeof transferRequirements }>(null);

    const calculate = () => {
        const g = parseFloat(gwa);
        if (isNaN(g)) return;
        // Some programs have stricter requirements
        const programMultiplier = programType === "engineering" ? 0.25 : programType === "nursing" ? 0.25 : 0;
        const eligible = transferRequirements.filter(u => g <= u.req - programMultiplier);
        const notEligible = transferRequirements.filter(u => g > u.req - programMultiplier);
        setResults({ eligible, notEligible });
    };

    const faqData = [
        { q: "What GWA is required to transfer to UP Philippines?", a: "UP generally requires a GWA of 2.00 or better for transferees, but requirements vary by college and program. The College of Engineering and College of Medicine are more competitive. You also need to pass their qualifying exam (UPCAT for transferees from non-UP schools)." },
        { q: "Can I transfer universities with a 2.5 GWA in the Philippines?", a: "Yes, several universities accept a 2.5 GWA for transferees, including DLSU, PUP, and FEU. Some programs and universities are more flexible, especially for state universities. Use this calculator to see your options." },
        { q: "What documents are required for university transfer in the Philippines?", a: "Typically: Transcript of Records (TOR), Certificate of Grades, Transfer Credentials/Honorable Dismissal, Good Moral Certificate, and filled-out application form. Some universities also require an entrance exam and interview." },
        { q: "Does my GWA reset when I transfer to a new university?", a: "Generally, yes. Most Philippine universities compute your GWA fresh from courses taken at their institution. However, the number of units credited from your previous school may vary and can affect your graduation timeline." },
    ];

    return (
        <>
            <Helmet>
                <title>Transferee GWA Requirements Philippines 2025 — Can I Transfer? | mygwacalculator.com</title>
                <meta name="description" content="Check if your GWA meets the transfer requirements of top Philippine universities. See which universities accept your GWA as a transferee student — UP, DLSU, Ateneo, UST, PUP and more." />
                <meta name="keywords" content="transferee GWA requirements Philippines, GWA for transferees Philippines 2025, can I transfer to UP with 2.0 GWA, university transfer GWA Philippines, DLSU transferee GWA" />
                <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
                <link rel="canonical" href="https://mygwacalculator.com/tools/transferee-gwa" />
                <meta property="og:title" content="Transferee GWA Requirements Philippines" />
                <meta property="og:description" content="Check which Philippine universities you qualify to transfer to based on your GWA." />
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org", "@type": "SoftwareApplication",
                    "name": "Transferee GWA Evaluator Philippines",
                    "applicationCategory": "EducationalApplication",
                    "operatingSystem": "Any",
                    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "PHP" },
                    "author": { "@type": "Person", "name": "Anmol Gautam", "url": "https://mygwacalculator.com/about" }
                })}</script>
            </Helmet>

            <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
                <div className="bg-gradient-to-br from-indigo-600 via-blue-700 to-violet-800 text-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mt-14">
                        <Link to="/" className="inline-flex items-center text-white/80 hover:text-white text-sm mb-6"><ArrowLeft className="h-4 w-4 mr-1" /> Back to Tools</Link>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <Badge className="bg-white/20 text-white border-white/30">Transferee</Badge>
                            <Badge variant="outline" className="border-white/30 text-white">University Guide</Badge>
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">Transferee GWA Evaluator</h1>
                        <p className="text-indigo-100 text-lg max-w-2xl">Enter your current GWA and instantly see which Philippine universities you qualify to transfer to.</p>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                    <Card className="border-0 shadow-2xl bg-white dark:bg-gray-800 mb-8">
                        <CardHeader className="border-b border-gray-100 dark:border-gray-700">
                            <CardTitle className="flex items-center gap-2 text-xl text-gray-900 dark:text-white">
                                <GraduationCap className="h-5 w-5 text-indigo-600" /> Transferee Eligibility Checker
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-6 space-y-6">
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Your Current GWA (1.0–5.0)</label>
                                    <input type="number" step="0.01" min="1" max="5" value={gwa} onChange={e => setGwa(e.target.value)} placeholder="e.g. 2.00"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent" />
                                    <p className="text-xs text-gray-500 mt-1">Use our GWA Calculator if you don't know your GWA</p>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Units Completed</label>
                                    <input type="number" min="0" value={units} onChange={e => setUnits(e.target.value)} placeholder="e.g. 60"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent" />
                                    <p className="text-xs text-gray-500 mt-1">Total units earned at your current school</p>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Target Program Type</label>
                                <div className="flex flex-wrap gap-2">
                                    {([["general", "General / Arts & Sciences"], ["business", "Business / Accountancy"], ["education", "Education"], ["nursing", "Nursing / Allied Health"], ["engineering", "Engineering / Architecture"]] as const).map(([val, label]) => (
                                        <button key={val} onClick={() => setProgramType(val)}
                                            className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${programType === val ? "bg-indigo-600 text-white border-indigo-600" : "border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-indigo-400"}`}>{label}</button>
                                    ))}
                                </div>
                                <p className="text-xs text-gray-500 mt-1">Engineering and Nursing programs often have stricter requirements</p>
                            </div>
                            <Button onClick={calculate} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 text-base font-semibold rounded-xl">Check Eligibility</Button>

                            {results && (
                                <div className="space-y-4">
                                    {results.eligible.length > 0 && (
                                        <div>
                                            <h3 className="font-bold text-green-700 dark:text-green-400 mb-2 flex items-center gap-2">
                                                <CheckCircle className="h-5 w-5" /> Universities You May Qualify For ({results.eligible.length})
                                            </h3>
                                            <div className="space-y-2">
                                                {results.eligible.map((u, i) => (
                                                    <div key={i} className="flex items-start gap-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-xl p-3">
                                                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                                                        <div>
                                                            <p className="font-semibold text-gray-900 dark:text-white text-sm">{u.univ}</p>
                                                            <p className="text-xs text-gray-500">Min. GWA: {u.req.toFixed(2)} · {u.notes}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                    {results.notEligible.length > 0 && (
                                        <div>
                                            <h3 className="font-bold text-red-700 dark:text-red-400 mb-2 flex items-center gap-2">
                                                <XCircle className="h-5 w-5" /> May Not Qualify ({results.notEligible.length})
                                            </h3>
                                            <div className="space-y-2">
                                                {results.notEligible.map((u, i) => (
                                                    <div key={i} className="flex items-start gap-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 rounded-xl p-3">
                                                        <XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                                                        <div>
                                                            <p className="font-semibold text-gray-900 dark:text-white text-sm">{u.univ}</p>
                                                            <p className="text-xs text-gray-500">Requires: {u.req.toFixed(2)} · {u.notes}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                    <p className="text-xs text-gray-500 italic">* Always verify directly with the university's admissions office. Requirements change annually.</p>
                                </div>
                            )}
                        </CardContent>
                    </Card>


                    {/* SEO Article */}
                    <Card className="border-0 shadow-xl bg-white dark:bg-gray-800 mb-8">
                        <CardContent className="p-6 sm:p-10">
                            <article>
                                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                                    Complete Guide to University Transfer in the Philippines: GWA Requirements, Documents, and What to Expect
                                </h2>
                                <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg leading-relaxed">
                                    Transferring universities is one of the biggest academic decisions a Filipino college student can make. Whether you're moving to a better-fit program, relocating to another city, or aiming for a more prestigious institution, your <strong>GWA is the most critical factor in your application</strong>. This guide walks through everything you need to know — from eligibility requirements to documents, credit transfers, and what to expect after you transfer.
                                </p>

                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Why GWA Is the Most Important Transfer Factor</h3>
                                <p className="text-gray-700 dark:text-gray-300 mb-4">
                                    Philippine universities use GWA as the primary screening criterion for transferees because it summarizes your entire academic performance in one number. Unlike entrance exams (which measure potential), your GWA measures <em>demonstrated performance</em> — making it a reliable predictor of how you'll perform at a new institution. Most universities also require:
                                </p>
                                <ul className="space-y-2 mb-6 text-gray-700 dark:text-gray-300">
                                    {[
                                        "No failed subjects (5.0) in your record — even one can disqualify you from competitive programs",
                                        "Good moral character certification from your current university",
                                        "A minimum number of units completed (usually 30–60+ units depending on the university)",
                                        "Honorable Dismissal from your previous school (proof of good academic standing at departure)",
                                        "Official Transcript of Records (TOR) issued by the registrar",
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <span className="w-2 h-2 rounded-full bg-indigo-500 mt-2 flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Program-Specific GWA Requirements</h3>
                                <p className="text-gray-700 dark:text-gray-300 mb-4">
                                    Different programs within the same university may have different GWA cutoffs for transferees. Generally, the more competitive the program, the higher the required GWA:
                                </p>
                                <div className="overflow-x-auto mb-6">
                                    <table className="w-full border-collapse text-sm">
                                        <thead><tr className="bg-indigo-50 dark:bg-gray-700">
                                            {["Program Type", "Typical GWA Requirement", "Additional Criteria"].map(h => (
                                                <th key={h} className="px-4 py-3 text-left border border-gray-200 dark:border-gray-600 font-bold text-gray-900 dark:text-white">{h}</th>
                                            ))}
                                        </tr></thead>
                                        <tbody className="text-gray-700 dark:text-gray-300">
                                            {[
                                                ["Medicine / Law", "≤ 1.75 – 2.00", "NMAT/LSAT score, interview, plus no grade below 2.5 in science subjects"],
                                                ["Engineering / Architecture", "≤ 2.00 – 2.25", "Board exam subject grades scrutinized; lab units count separately"],
                                                ["Nursing / Allied Health", "≤ 2.00 – 2.25", "Clinical aptitude may be evaluated; PRC program regulations apply"],
                                                ["Business / Accountancy", "≤ 2.25 – 2.50", "CPA board eligibility requirements; some schools require ACCA units"],
                                                ["Education", "≤ 2.50", "LET eligibility requirements reviewed; practicum hours evaluated"],
                                                ["Arts & Sciences / General", "≤ 2.50 – 3.00", "Most flexible; often the easiest transfers to other institutions"],
                                            ].map((row, i) => (
                                                <tr key={i} className={i % 2 === 0 ? "bg-white dark:bg-gray-800" : "bg-gray-50 dark:bg-gray-900"}>
                                                    {row.map((cell, j) => <td key={j} className="px-4 py-2 border border-gray-200 dark:border-gray-600">{cell}</td>)}
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Will Your GWA Reset After Transferring?</h3>
                                <p className="text-gray-700 dark:text-gray-300 mb-4">
                                    This is the most common question among transferees — and the answer is <strong>generally yes</strong>. Most Philippine universities compute your new GWA exclusively from courses taken at their institution after your transfer. However, the units credited from your previous school count toward your program completion and may affect your graduation timeline.
                                </p>
                                <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-700 rounded-2xl p-5 mb-6">
                                    <p className="font-semibold text-indigo-800 dark:text-indigo-300 mb-2">⚡ Important: Credit Transfer Varies Widely</p>
                                    <p className="text-indigo-700 dark:text-indigo-300 text-sm">Some universities credit 80–90% of your previous units. Others may only credit 50–60%, requiring you to retake courses with similar content. Always request a credit evaluation from your target university's registrar <em>before</em> committing to the transfer.</p>
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Step-by-Step University Transfer Process in the Philippines</h3>
                                <ol className="list-decimal list-inside space-y-3 text-gray-700 dark:text-gray-300 mb-6">
                                    <li><strong>Compute your GWA</strong> using our <Link to="/" className="text-indigo-600 dark:text-indigo-400 underline font-medium">GWA Calculator</Link> and check eligibility using the tool above.</li>
                                    <li><strong>Request Honorable Dismissal</strong> from your current school — this certifies you left in good standing.</li>
                                    <li><strong>Obtain official TOR and grades</strong> from your registrar, including a certified copy for submission.</li>
                                    <li><strong>Submit application</strong> to the target university's admissions office during their prescribed intake period (usually January–February for first semester).</li>
                                    <li><strong>Follow up on credit evaluation</strong> — this determines how many units you still need to complete your degree.</li>
                                    <li><strong>Plan your new GWA trajectory</strong> using our <Link to="/tools/gwa-target-planner" className="text-indigo-600 dark:text-indigo-400 underline font-medium">GWA Target Planner</Link> from your fresh start at the new institution.</li>
                                </ol>

                                <p className="text-gray-700 dark:text-gray-300">
                                    If your GWA isn't meeting requirements yet, our guide on <Link to="/blog/how-to-improve-gwa-in-college" className="text-indigo-600 dark:text-indigo-400 underline font-medium">How to Improve Your GWA in College</Link> offers actionable techniques. And if a single failed or low grade is holding you back, read about <Link to="/tools/failing-subject-gwa-impact" className="text-indigo-600 dark:text-indigo-400 underline font-medium">how a failing subject affects your GWA</Link> and whether retaking can help.
                                </p>
                            </article>
                        </CardContent>
                    </Card>

                    <AuthorCard variant="full" />


                    <Card className="mt-8 border-0 shadow-xl bg-white dark:bg-gray-800">
                        <CardHeader><CardTitle className="text-xl font-bold text-gray-900 dark:text-white">Frequently Asked Questions</CardTitle></CardHeader>
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

                    <div className="mt-10 bg-indigo-600 text-white rounded-2xl p-6 text-center">
                        <h3 className="text-xl font-bold mb-2">Need to Compute Your GWA?</h3>
                        <p className="text-indigo-100 mb-4">Use our free GWA Calculator to get your exact GWA before checking transfer eligibility.</p>
                        <Link to="/" className="inline-block bg-white text-indigo-700 font-bold px-6 py-3 rounded-xl hover:bg-indigo-50 transition-colors">Open GWA Calculator →</Link>
                    </div>
                </div>
            </div>
        </>
    );
};
export default TransfereeGwa;
