import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { AuthorCard } from "@/components/AuthorCard";
import { Plus, Trash2, ArrowLeft, TrendingUp } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface Semester { id: number; name: string; gwa: string; units: string; }

const CumulativeGwaTracker = () => {
    const [semesters, setSemesters] = useState<Semester[]>([
        { id: 1, name: "1st Year — 1st Sem", gwa: "", units: "" },
        { id: 2, name: "1st Year — 2nd Sem", gwa: "", units: "" },
    ]);
    const [result, setResult] = useState<null | { cumulative: number; totalUnits: number; honor: string; honorColor: string }>(null);

    const addSemester = () => {
        const count = semesters.length + 1;
        const year = Math.ceil(count / 2);
        const sem = count % 2 === 1 ? "1st" : "2nd";
        setSemesters(s => [...s, { id: Date.now(), name: `${year === 1 ? "1st" : year === 2 ? "2nd" : year === 3 ? "3rd" : year + "th"} Year — ${sem} Sem`, gwa: "", units: "" }]);
    };
    const removeSemester = (id: number) => setSemesters(s => s.filter(x => x.id !== id));
    const updateSemester = (id: number, field: keyof Semester, val: string) => setSemesters(s => s.map(x => x.id === id ? { ...x, [field]: val } : x));

    const calculate = () => {
        let totalPoints = 0; let totalUnits = 0;
        semesters.forEach(s => {
            const g = parseFloat(s.gwa); const u = parseFloat(s.units);
            if (!isNaN(g) && !isNaN(u) && u > 0) { totalPoints += g * u; totalUnits += u; }
        });
        if (totalUnits === 0) return;
        const cumulative = totalPoints / totalUnits;
        let honor = "No honors yet"; let honorColor = "text-gray-600";
        if (cumulative <= 1.20) { honor = "Summa Cum Laude Track"; honorColor = "text-yellow-600"; }
        else if (cumulative <= 1.45) { honor = "Magna Cum Laude Track"; honorColor = "text-gray-500"; }
        else if (cumulative <= 1.75) { honor = "Cum Laude Track"; honorColor = "text-amber-700"; }
        else if (cumulative <= 2.50) { honor = "Good Standing"; honorColor = "text-blue-600"; }
        else if (cumulative <= 3.0) { honor = "Passing"; honorColor = "text-green-600"; }
        else { honor = "Academic Concern"; honorColor = "text-red-600"; }
        setResult({ cumulative, totalUnits, honor, honorColor });
    };

    const faqData = [
        { q: "What is cumulative GWA?", a: "Cumulative GWA is the weighted average of all your grades across all semesters combined. Unlike semestral GWA (which is per semester), cumulative GWA reflects your overall academic performance from your first semester to your most recent one." },
        { q: "Does each semester have equal weight in cumulative GWA?", a: "No. Semesters with more units carry more weight. If you took 24 units in semester 1 and 18 in semester 2, semester 1 has a larger impact on your cumulative GWA." },
        { q: "How often should I check my cumulative GWA?", a: "Check it every semester before and after grades are released. This helps you plan your next semester's target GWA, especially if you're aiming for Latin Honors or scholarship requirements." },
        { q: "Is cumulative GWA what's used for Latin Honors?", a: "Yes. Latin Honors in the Philippines are awarded based on your cumulative GWA upon graduation, not your semestral average. That's why maintaining consistency every semester is crucial." },
    ];

    return (
        <>
            <Helmet>
                <title>Cumulative GWA Tracker & Calculator Philippines (2025) | mygwacalculator.com</title>
                <meta name="description" content="Track your cumulative GWA semester by semester. See your total academic standing across all years of college. Free, instant, and accurate calculator for Filipino students." />
                <meta name="keywords" content="cumulative GWA calculator Philippines, cumulative GWA tracker, how to compute cumulative GWA, GWA across semesters Philippines, total GWA college" />
                <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
                <link rel="canonical" href="https://mygwacalculator.com/tools/cumulative-gwa-tracker" />
                <meta property="og:title" content="Cumulative GWA Tracker Philippines" />
                <meta property="og:description" content="Track your cumulative GWA across all semesters." />
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org", "@type": "SoftwareApplication",
                    "name": "Cumulative GWA Tracker Philippines",
                    "applicationCategory": "EducationalApplication",
                    "operatingSystem": "Any",
                    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "PHP" },
                    "author": { "@type": "Person", "name": "Anmol Gautam", "url": "https://mygwacalculator.com/about" }
                })}</script>
            </Helmet>

            <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
                <div className="bg-gradient-to-br from-blue-600 via-sky-700 to-cyan-800 text-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mt-14">
                        <Link to="/" className="inline-flex items-center text-white/80 hover:text-white text-sm mb-6"><ArrowLeft className="h-4 w-4 mr-1" /> Back to Tools</Link>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <Badge className="bg-white/20 text-white border-white/30">Tracker</Badge>
                            <Badge variant="outline" className="border-white/30 text-white">Multi-Semester</Badge>
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">Cumulative GWA Tracker</h1>
                        <p className="text-sky-100 text-lg max-w-2xl">Track your academic standing across all semesters and instantly see your cumulative GWA and honors status.</p>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                    <Card className="border-0 shadow-2xl bg-white dark:bg-gray-800 mb-8">
                        <CardHeader className="border-b border-gray-100 dark:border-gray-700">
                            <CardTitle className="flex items-center gap-2 text-xl text-gray-900 dark:text-white">
                                <TrendingUp className="h-5 w-5 text-blue-600" /> Multi-Semester GWA Tracker
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-6 space-y-6">
                            <div className="space-y-3">
                                {semesters.map((s, idx) => (
                                    <div key={s.id} className="grid grid-cols-12 gap-2 items-center bg-blue-50 dark:bg-gray-700/50 rounded-xl p-3 border border-blue-100 dark:border-gray-600">
                                        <div className="col-span-1 text-xs font-bold text-blue-600 dark:text-blue-400 text-center">{idx + 1}</div>
                                        <input className="col-span-5 px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                                            value={s.name} onChange={e => updateSemester(s.id, "name", e.target.value)} placeholder="Semester name" />
                                        <input className="col-span-2 px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                                            type="number" step="0.01" min="1" max="5" value={s.gwa} onChange={e => updateSemester(s.id, "gwa", e.target.value)} placeholder="GWA" />
                                        <input className="col-span-2 px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                                            type="number" min="1" value={s.units} onChange={e => updateSemester(s.id, "units", e.target.value)} placeholder="Units" />
                                        <button className="col-span-2 flex justify-end pr-1 text-red-400 hover:text-red-600" onClick={() => removeSemester(s.id)}>
                                            <Trash2 className="h-4 w-4" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                            <Button variant="outline" onClick={addSemester} className="border-blue-300 text-blue-600 hover:bg-blue-50 w-full">
                                <Plus className="h-4 w-4 mr-2" /> Add Semester
                            </Button>
                            <Button onClick={calculate} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-base font-semibold rounded-xl">
                                Calculate Cumulative GWA
                            </Button>
                            {result && (
                                <div className="rounded-2xl p-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700">
                                    <div className="grid grid-cols-3 gap-4 text-center">
                                        <div>
                                            <p className="text-xs text-gray-500 mb-1">Cumulative GWA</p>
                                            <p className="text-4xl font-bold text-blue-700 dark:text-blue-400">{result.cumulative.toFixed(2)}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500 mb-1">Total Units</p>
                                            <p className="text-4xl font-bold text-gray-700 dark:text-gray-300">{result.totalUnits}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500 mb-1">Academic Status</p>
                                            <p className={`text-lg font-bold ${result.honorColor}`}>{result.honor}</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </CardContent>
                    </Card>


                    {/* Rich SEO Article */}
                    <Card className="border-0 shadow-xl bg-white dark:bg-gray-800 mb-8">
                        <CardContent className="p-6 sm:p-10">
                            <article>
                                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                                    What is Cumulative GWA and How to Track It Across All Semesters in the Philippines
                                </h2>
                                <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg leading-relaxed">
                                    Your <strong>cumulative GWA (General Weighted Average)</strong> is one of the most important numbers in your college career — yet many Filipino students only pay attention to their semestral GWA. This guide explains the difference, why cumulative GWA matters more for graduation honors and scholarships, and how to monitor it semester by semester to stay on track.
                                </p>

                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Cumulative GWA vs. Semestral GWA: What's the Difference?</h3>
                                <div className="overflow-x-auto mb-6">
                                    <table className="w-full border-collapse text-sm">
                                        <thead><tr className="bg-blue-50 dark:bg-gray-700">
                                            {["", "Semestral GWA", "Cumulative GWA"].map(h => (
                                                <th key={h} className="px-4 py-3 text-left border border-gray-200 dark:border-gray-600 font-bold text-gray-900 dark:text-white">{h}</th>
                                            ))}
                                        </tr></thead>
                                        <tbody className="text-gray-700 dark:text-gray-300">
                                            {[
                                                ["What it measures", "One semester only", "All semesters combined"],
                                                ["Used for Dean's List?", "Yes — each semester", "No (semestral only)"],
                                                ["Used for Latin Honors?", "No", "Yes — this is what counts at graduation"],
                                                ["Used for Scholarships?", "Often (per-sem requirement)", "Sometimes (overall requirement)"],
                                                ["How it's calculated", "Weighted avg of current semester", "Weighted avg across all semesters and units"],
                                            ].map((row, i) => (
                                                <tr key={i} className={i % 2 === 0 ? "bg-white dark:bg-gray-800" : "bg-gray-50 dark:bg-gray-750"}>
                                                    {row.map((cell, j) => <td key={j} className={`px-4 py-2 border border-gray-200 dark:border-gray-600 ${j === 0 ? "font-medium" : ""}`}>{cell}</td>)}
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Why Your Early Semesters Matter Most</h3>
                                <p className="text-gray-700 dark:text-gray-300 mb-4">
                                    In the Philippine GWA computation system, each semester contributes to your cumulative average in proportion to its <strong>unit count</strong>. This means:
                                </p>
                                <ul className="space-y-2 mb-6 text-gray-700 dark:text-gray-300">
                                    {[
                                        "A semester with 24 units influences your cumulative GWA more than a semester with 12 units.",
                                        "Strong 1st year performance (when cumulative units are low) has the highest leverage on your final graduation GWA.",
                                        "By 4th year, each semester can only nudge your cumulative GWA by a small margin — making early investment in grades critical.",
                                        "This is why advisers consistently recommend focusing on 1st and 2nd year performance above all else.",
                                    ].map((tip, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                                            {tip}
                                        </li>
                                    ))}
                                </ul>

                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">How Cumulative GWA Is Used at Philippine Universities</h3>
                                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                                    {[
                                        { t: "Latin Honors at Graduation", d: "Summa Cum Laude (≤1.20), Magna (≤1.45), and Cum Laude (≤1.75) are all determined by your cumulative GWA at the end of your degree — not your semester GWA." },
                                        { t: "Board Exam Requirements", d: "PRC (Professional Regulation Commission) requires a minimum cumulative GWA (typically ≤2.50) for board exam eligibility in regulated professions like Engineering, Nursing, and Architecture." },
                                        { t: "Graduate School Applications", d: "Most Philippine graduate schools (Masters, Law, Med) ask for your official cumulative GWA from your undergraduate TOR when evaluating applicants." },
                                        { t: "Employment and Civil Service", d: "Many government agencies, banks, and large corporations ask for GWA in job applications. The cumulative GWA from your TOR is the standard reference." },
                                    ].map((item, i) => (
                                        <div key={i} className="bg-blue-50 dark:bg-gray-700 rounded-xl p-4 border border-blue-100 dark:border-gray-600">
                                            <h4 className="font-bold text-gray-900 dark:text-white mb-1 text-sm">{item.t}</h4>
                                            <p className="text-xs text-gray-600 dark:text-gray-400">{item.d}</p>
                                        </div>
                                    ))}
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">How to Use This Tracker Effectively</h3>
                                <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-6">
                                    <li>Enter your <strong>semestral GWA</strong> for each semester (use our <Link to="/" className="text-blue-600 dark:text-blue-400 underline font-medium">GWA Calculator</Link> to get each semester's GWA first if needed).</li>
                                    <li>Enter the <strong>units you took</strong> that semester — this is what the weighted average uses to compute the cumulative correctly.</li>
                                    <li>Add as many semesters as you need. The tool computes your running total instantly.</li>
                                    <li>Use your computed cumulative GWA with our <Link to="/tools/gwa-target-planner" className="text-blue-600 dark:text-blue-400 underline font-medium">GWA Target Planner</Link> to find out what you need next semester to reach your graduation goal.</li>
                                </ol>

                                <p className="text-gray-700 dark:text-gray-300">
                                    For everything you need to know about Latin Honors cutoffs at UP, DLSU, Ateneo, UST, and other top Philippine universities, our blog post on <Link to="/blog/latin-honors-philippines" className="text-blue-600 dark:text-blue-400 underline font-medium">Latin Honors Philippines Requirements</Link> is the most comprehensive resource available. And if you're evaluating a scholarship's GWA requirements, our <Link to="/blog/scholarship-gwa-requirements-philippines" className="text-blue-600 dark:text-blue-400 underline font-medium">Scholarship GWA Requirements Philippines</Link> guide covers DOST, CHED, SM, Metrobank, and more.
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
                    <div className="mt-10 bg-blue-600 text-white rounded-2xl p-6 text-center">
                        <h3 className="text-xl font-bold mb-2">Compute Your Semestral GWA First</h3>
                        <p className="text-blue-100 mb-4">Use our free GWA Calculator to compute each semester's GWA, then track it cumulatively here.</p>
                        <Link to="/" className="inline-block bg-white text-blue-700 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors">Open GWA Calculator →</Link>
                    </div>
                </div>
            </div>
        </>
    );
};
export default CumulativeGwaTracker;
