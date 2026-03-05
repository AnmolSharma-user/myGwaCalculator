import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { AuthorCard } from "@/components/AuthorCard";
import { RefreshCw, ArrowLeft, TrendingUp, TrendingDown } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const RetakeImpact = () => {
    const [currentGwa, setCurrentGwa] = useState<string>("");
    const [totalUnits, setTotalUnits] = useState<string>("");
    const [subjectUnits, setSubjectUnits] = useState<string>("");
    const [oldGrade, setOldGrade] = useState<string>("");
    const [newGrade, setNewGrade] = useState<string>("");
    const [retakePolicy, setRetakePolicy] = useState<"replace" | "average" | "both">("replace");
    const [result, setResult] = useState<null | { current: number; after: number; change: number; isImprovement: boolean }>(null);

    const calculate = () => {
        const cg = parseFloat(currentGwa); const tu = parseFloat(totalUnits);
        const su = parseFloat(subjectUnits); const og = parseFloat(oldGrade); const ng = parseFloat(newGrade);
        if ([cg, tu, su, og, ng].some(isNaN)) return;
        const totalPoints = cg * tu;
        let newTotalPoints: number;
        if (retakePolicy === "replace") {
            // Remove old grade points, add new ones (same units already counted)
            newTotalPoints = totalPoints - og * su + ng * su;
        } else if (retakePolicy === "average") {
            const averaged = (og + ng) / 2;
            newTotalPoints = totalPoints - og * su + averaged * su;
        } else {
            // Both counted: add new grade with same units
            newTotalPoints = totalPoints + ng * su;
        }
        const newUnits = retakePolicy === "both" ? tu + su : tu;
        const after = newTotalPoints / newUnits;
        setResult({ current: cg, after, change: after - cg, isImprovement: after < cg }); // lower = better in PH scale
    };

    const faqData = [
        { q: "Do retake grades replace the original grade in the Philippines?", a: "It depends on your university's policy. DLSU and Ateneo generally allow the retake grade to replace the original. UP and most state universities typically record both grades and count both in the GWA. Always verify with your registrar." },
        { q: "Is it better to retake a failed subject or move on?", a: "If your school allows grade replacement, retaking is always better — especially for 5.0 grades. Even if both grades are counted, passing the retake (getting 3.0 or better) reduces the negative GWA impact. Plus, it earns you the units you need to graduate." },
        { q: "Can retaking a subject affect scholarship eligibility?", a: "Yes. Some scholarships with a 'no retake' clause (especially DOST and CHED-funded ones) may disqualify you for retaking subjects. However, other scholarships only look at your current GWA without considering retakes. Read your scholarship terms carefully." },
        { q: "How many times can I retake a subject in Philippine universities?", a: "Most Philippine universities allow a maximum of 2–3 retakes per subject. After that, you may need to officially withdraw from the program or seek special permission from the dean or academic council." },
    ];

    return (
        <>
            <Helmet>
                <title>Retake Impact Calculator — How Retaking a Subject Affects Your GWA (Philippines 2025)</title>
                <meta name="description" content="Calculate how retaking a failed or low-grade subject will change your GWA in the Philippines. Supports 3 retake policies: grade replacement, grade averaging, and both grades counted." />
                <meta name="keywords" content="retake impact calculator Philippines, how retaking a subject affects GWA, retake grade GWA calculator, failed subject retake Philippines GWA" />
                <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
                <link rel="canonical" href="https://mygwacalculator.com/tools/retake-impact-calculator" />
                <meta property="og:title" content="Retake Impact Calculator Philippines" />
                <meta property="og:description" content="See how retaking a subject changes your GWA." />
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org", "@type": "SoftwareApplication",
                    "name": "Retake Impact Calculator Philippines",
                    "applicationCategory": "EducationalApplication",
                    "operatingSystem": "Any",
                    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "PHP" },
                    "author": { "@type": "Person", "name": "Anmol Gautam", "url": "https://mygwacalculator.com/about" }
                })}</script>
            </Helmet>

            <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
                <div className="bg-gradient-to-br from-orange-500 via-amber-600 to-yellow-700 text-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mt-14">
                        <Link to="/" className="inline-flex items-center text-white/80 hover:text-white text-sm mb-6"><ArrowLeft className="h-4 w-4 mr-1" /> Back to Tools</Link>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <Badge className="bg-white/20 text-white border-white/30">Calculator</Badge>
                            <Badge variant="outline" className="border-white/30 text-white">Retake</Badge>
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">Retake Impact Calculator</h1>
                        <p className="text-amber-100 text-lg max-w-2xl">Find out exactly how much your GWA will change when you retake a subject — based on your school's retake policy.</p>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                    <Card className="border-0 shadow-2xl bg-white dark:bg-gray-800 mb-8">
                        <CardHeader className="border-b border-gray-100 dark:border-gray-700">
                            <CardTitle className="flex items-center gap-2 text-xl text-gray-900 dark:text-white">
                                <RefreshCw className="h-5 w-5 text-orange-600" /> Retake GWA Impact
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-6 space-y-6">
                            {/* Retake Policy */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Your University's Retake Policy</label>
                                <div className="grid sm:grid-cols-3 gap-2">
                                    {([
                                        { val: "replace", label: "Grade Replacement", desc: "New grade replaces old (DLSU, Ateneo)" },
                                        { val: "average", label: "Grade Averaging", desc: "Both grades are averaged" },
                                        { val: "both", label: "Both Counted", desc: "Both grades counted separately (UP, most state univ.)" },
                                    ] as const).map(({ val, label, desc }) => (
                                        <button key={val} onClick={() => setRetakePolicy(val)}
                                            className={`p-3 rounded-xl border text-left transition-colors ${retakePolicy === val ? "bg-orange-500 text-white border-orange-500" : "border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-orange-400"}`}>
                                            <p className="font-semibold text-sm">{label}</p>
                                            <p className={`text-xs mt-0.5 ${retakePolicy === val ? "text-orange-100" : "text-gray-500"}`}>{desc}</p>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-4">
                                {[
                                    { label: "Current GWA", val: currentGwa, set: setCurrentGwa, placeholder: "e.g. 2.00", hint: "Your GWA including the old grade" },
                                    { label: "Total Units (with old grade)", val: totalUnits, set: setTotalUnits, placeholder: "e.g. 60", hint: "Total units including the subject being retaken" },
                                    { label: "Subject Units", val: subjectUnits, set: setSubjectUnits, placeholder: "e.g. 3", hint: "Units of the subject you are retaking" },
                                    { label: "Old Grade (1.0–5.0)", val: oldGrade, set: setOldGrade, placeholder: "e.g. 5.0", hint: "The grade you got originally" },
                                ].map(({ label, val, set, placeholder, hint }) => (
                                    <div key={label}>
                                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">{label}</label>
                                        <input type="number" step="0.01" value={val} onChange={e => set(e.target.value)} placeholder={placeholder}
                                            className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent" />
                                        <p className="text-xs text-gray-500 mt-1">{hint}</p>
                                    </div>
                                ))}
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Expected New Grade After Retake</label>
                                <div className="flex gap-2 flex-wrap mb-3">
                                    {["1.00", "1.25", "1.50", "1.75", "2.00", "2.25", "2.50", "2.75", "3.00"].map(g => (
                                        <button key={g} onClick={() => setNewGrade(g)}
                                            className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${newGrade === g ? "bg-orange-500 text-white border-orange-500" : "border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-orange-400"}`}>{g}</button>
                                    ))}
                                </div>
                                <input type="number" step="0.25" min="1" max="5" value={newGrade} onChange={e => setNewGrade(e.target.value)} placeholder="Or type a custom grade"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent" />
                            </div>

                            <Button onClick={calculate} className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 text-base font-semibold rounded-xl">Calculate Retake Impact</Button>

                            {result && (
                                <div className={`rounded-2xl p-6 border ${result.isImprovement ? "bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-700" : "bg-amber-50 border-amber-200 dark:bg-amber-900/20 dark:border-amber-700"}`}>
                                    <div className="grid grid-cols-3 gap-4 text-center">
                                        <div>
                                            <p className="text-xs text-gray-500 mb-1">Before Retake</p>
                                            <p className="text-3xl font-bold text-gray-700 dark:text-gray-300">{result.current.toFixed(2)}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500 mb-1">Change</p>
                                            <div className="flex items-center justify-center gap-1">
                                                {result.isImprovement ? <TrendingUp className="h-5 w-5 text-green-600" /> : <TrendingDown className="h-5 w-5 text-amber-600" />}
                                                <p className={`text-2xl font-bold ${result.isImprovement ? "text-green-600" : "text-amber-600"}`}>
                                                    {result.change.toFixed(2)}
                                                </p>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500 mb-1">After Retake</p>
                                            <p className={`text-3xl font-bold ${result.isImprovement ? "text-green-700 dark:text-green-400" : "text-amber-700 dark:text-amber-400"}`}>{result.after.toFixed(2)}</p>
                                        </div>
                                    </div>
                                    <p className="text-sm text-center mt-4 text-gray-600 dark:text-gray-400">
                                        {result.isImprovement ? "Your GWA will improve after this retake." : "Your GWA will not improve much — you may need a higher target grade."}
                                    </p>
                                </div>
                            )}
                        </CardContent>
                    </Card>


                    {/* SEO Article */}
                    <Card className="border-0 shadow-xl bg-white dark:bg-gray-800 mb-8">
                        <CardContent className="p-6 sm:p-10">
                            <article>
                                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                                    Should You Retake a Subject in the Philippines? A Complete Guide to Retake Policies and GWA Impact
                                </h2>
                                <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg leading-relaxed">
                                    Getting a 5.0 or a very low grade in a subject is a stressful experience — but before deciding whether to retake, you need to understand <strong>exactly how it will affect your GWA</strong> and whether it's worth it. The answer depends heavily on your university's retake policy, the number of units involved, and your scholarship status.
                                </p>

                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">The 3 Types of Retake Policies in Philippine Universities</h3>
                                <p className="text-gray-700 dark:text-gray-300 mb-4">
                                    Not all Philippine universities treat retakes the same way. This is the single most important thing to know before retaking any subject — because it determines whether retaking actually helps your GWA.
                                </p>
                                <div className="space-y-3 mb-6">
                                    {[
                                        { type: "Grade Replacement (Best for GWA)", schools: "DLSU, Ateneo de Manila", desc: "Your new retake grade completely replaces the old grade in your academic record. A 5.0 is removed, and the new passing grade is used instead. This is the most GWA-friendly retake policy.", color: "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-700" },
                                        { type: "Grade Averaging", schools: "Some private universities", desc: "The original grade and the retake grade are averaged together. A 5.0 + 2.0 = 3.5 average enters your GWA. Better than just a 5.0, but not as good as replacement.", color: "bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-700" },
                                        { type: "Both Grades Counted (Least favorable)", schools: "UP System, most state universities", desc: "Both the original failing grade and the retake grade are recorded and factored into your GWA. The retake helps you earn units but only partially recovers your average.", color: "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-700" },
                                    ].map((p, i) => (
                                        <div key={i} className={`border rounded-2xl p-5 ${p.color}`}>
                                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                                                <h4 className="font-bold text-gray-900 dark:text-white">{p.type}</h4>
                                                <span className="text-xs bg-white/70 dark:bg-gray-800/70 text-gray-600 dark:text-gray-300 px-3 py-1 rounded-full font-medium flex-shrink-0">{p.schools}</span>
                                            </div>
                                            <p className="text-sm text-gray-700 dark:text-gray-300">{p.desc}</p>
                                        </div>
                                    ))}
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">When Is Retaking Worth It?</h3>
                                <p className="text-gray-700 dark:text-gray-300 mb-4">
                                    Here's a strategic framework Filipino students should use when deciding whether to retake:
                                </p>
                                <ul className="space-y-3 mb-6">
                                    {[
                                        { cond: "Always worth retaking", when: "If your school uses grade replacement — the old failing grade is erased, your GWA improves, and you earn the units." },
                                        { cond: "Usually worth retaking", when: "If you need the subject's units for graduation, even if both grades are counted. You'll earn units while limiting vs. not retaking at all." },
                                        { cond: "Evaluate carefully", when: "If you're on scholarship with a 'no retake' clause — retaking may void your scholarship even if it helps your GWA." },
                                        { cond: "Not worth retaking", when: "If you're near graduation, the subject is non-major, the GWA improvement is negligible (use this calculator to check), and the retake costs more time/money than it's worth." },
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 bg-gray-50 dark:bg-gray-700 rounded-xl p-4">
                                            <span className="flex-shrink-0 w-2 h-2 rounded-full bg-orange-500 mt-2" />
                                            <div><strong className="text-gray-900 dark:text-white">{item.cond}:</strong>{" "}<span className="text-gray-700 dark:text-gray-300">{item.when}</span></div>
                                        </li>
                                    ))}
                                </ul>

                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Retake Limits: How Many Times Can You Retake?</h3>
                                <p className="text-gray-700 dark:text-gray-300 mb-4">
                                    Most Philippine universities limit how many times you can retake a subject:
                                </p>
                                <div className="overflow-x-auto mb-6">
                                    <table className="w-full border-collapse text-sm">
                                        <thead><tr className="bg-orange-50 dark:bg-gray-700">
                                            {["University Type", "Max Retakes Allowed", "What Happens After"].map(h => (
                                                <th key={h} className="px-4 py-3 text-left border border-gray-200 dark:border-gray-600 font-bold text-gray-900 dark:text-white">{h}</th>
                                            ))}
                                        </tr></thead>
                                        <tbody className="text-gray-700 dark:text-gray-300">
                                            {[
                                                ["Most private universities", "2–3 retakes", "Dean/academic council approval required"],
                                                ["UP System", "2 retakes max per subject", "Dismissal risk after multiple failures"],
                                                ["State Universities (SUCs)", "2 retakes typically", "Academic dismissal proceedings may begin"],
                                                ["CHED-regulated programs", "Varies", "Accrediting body rules apply for professional courses"],
                                            ].map((row, i) => (
                                                <tr key={i} className={i % 2 === 0 ? "bg-white dark:bg-gray-800" : "bg-gray-50 dark:bg-gray-900"}>
                                                    {row.map((cell, j) => <td key={j} className="px-4 py-2 border border-gray-200 dark:border-gray-600">{cell}</td>)}
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Next Steps After Retaking</h3>
                                <p className="text-gray-700 dark:text-gray-300 mb-4">
                                    After passing your retake, update your cumulative GWA using our <Link to="/tools/cumulative-gwa-tracker" className="text-orange-600 dark:text-orange-400 underline font-medium">Cumulative GWA Tracker</Link> to see how your academic standing has changed. If you failed a subject significantly, also use our <Link to="/tools/failing-subject-gwa-impact" className="text-orange-600 dark:text-orange-400 underline font-medium">Failing Subject GWA Impact Calculator</Link> to model the worst-case scenario against the retake outcome.
                                </p>
                                <p className="text-gray-700 dark:text-gray-300">
                                    For broader strategies to avoid needing retakes in the future, read our expert guide on <Link to="/blog/how-to-improve-gwa-in-college" className="text-orange-600 dark:text-orange-400 underline font-medium">How to Improve Your GWA in College</Link> — with 12 proven techniques from top-performing Filipino students. To plan your path to honors despite a rocky semester, use our <Link to="/tools/gwa-target-planner" className="text-orange-600 dark:text-orange-400 underline font-medium">GWA Target Planner</Link>.
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
                    <div className="mt-10 bg-orange-500 text-white rounded-2xl p-6 text-center">
                        <h3 className="text-xl font-bold mb-2">Calculate Your Latest GWA</h3>
                        <p className="text-orange-100 mb-4">Use our GWA Calculator to get your current GWA before computing retake impact.</p>
                        <Link to="/" className="inline-block bg-white text-orange-700 font-bold px-6 py-3 rounded-xl hover:bg-orange-50 transition-colors">Open GWA Calculator →</Link>
                    </div>
                </div>
            </div>
        </>
    );
};
export default RetakeImpact;
