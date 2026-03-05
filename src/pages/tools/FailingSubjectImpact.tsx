import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { AuthorCard } from "@/components/AuthorCard";
import { TrendingDown, Plus, Trash2, ArrowLeft, AlertTriangle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface Subject { id: number; name: string; units: string; grade: string; }

const FailingSubjectImpact = () => {
    const [currentGwa, setCurrentGwa] = useState<string>("");
    const [currentUnits, setCurrentUnits] = useState<string>("");
    const [subjects, setSubjects] = useState<Subject[]>([{ id: 1, name: "Subject to Fail", units: "", grade: "5.0" }]);
    const [result, setResult] = useState<null | { originalGwa: number; newGwa: number; drop: number; status: string }>(null);

    const addSubject = () => setSubjects(s => [...s, { id: Date.now(), name: `Subject ${s.length + 1}`, units: "", grade: "5.0" }]);
    const removeSubject = (id: number) => setSubjects(s => s.filter(x => x.id !== id));
    const updateSubject = (id: number, field: keyof Subject, val: string) =>
        setSubjects(s => s.map(x => x.id === id ? { ...x, [field]: val } : x));

    const calculate = () => {
        const cg = parseFloat(currentGwa);
        const cu = parseFloat(currentUnits);
        if (isNaN(cg) || isNaN(cu)) return;
        // current total grade points
        let totalPoints = cg * cu;
        let totalUnits = cu;
        subjects.forEach(s => {
            const u = parseFloat(s.units);
            const g = parseFloat(s.grade);
            if (!isNaN(u) && !isNaN(g)) { totalPoints += g * u; totalUnits += u; }
        });
        const newGwa = totalPoints / totalUnits;
        const drop = newGwa - cg;
        let status = "Passing";
        if (newGwa > 3.0) status = "Failing (GWA below 3.0 threshold)";
        else if (newGwa > 2.0) status = "Acceptable";
        else if (newGwa > 1.75) status = "Good";
        else status = "Excellent";
        setResult({ originalGwa: cg, newGwa, drop, status });
    };

    const faqData = [
        { q: "Does failing a subject permanently affect my GWA in the Philippines?", a: "Yes — a failing grade (5.0) factors into your GWA calculation for that semester. Even if you retake the subject, most Philippine universities compute the original failing grade into the cumulative GWA unless the retake policy explicitly replaces the old grade. Always check your university's specific policy." },
        { q: "What is a 5.0 grade in the Philippines?", a: "A 5.0 grade in Philippine universities means you failed the subject. It is equivalent to below 65% performance and results in 0 units credited for that semester. You will need to retake the subject to earn the units." },
        { q: "Can a 5.0 grade disqualify me from a scholarship?", a: "Yes. Most government scholarships (CHED, DOST, GOVPH) and institutional scholarships have a 'no failing grade' clause. Even one 5.0 in a semester can immediately disqualify you. Read your scholarship's terms-of-continuance carefully." },
        { q: "How many units can I fail before losing my enrollment?", a: "This varies by university. Most schools put students on probation if they fail more than 50% of their academic load. Check your institution's academic standing policy in the student handbook." },
    ];

    return (
        <>
            <Helmet>
                <title>Failing Subject GWA Impact Calculator Philippines (2025) | mygwacalculator.com</title>
                <meta name="description" content="See exactly how failing a subject affects your GWA in the Philippines. Enter your current GWA and failing subject to instantly calculate your new GWA." />
                <meta name="keywords" content="failing subject GWA impact Philippines, what happens to GWA if I fail a subject, failed grade GWA calculator Philippines, 5.0 grade GWA effect" />
                <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
                <link rel="canonical" href="https://mygwacalculator.com/tools/failing-subject-gwa-impact" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Failing Subject GWA Impact Calculator Philippines" />
                <meta property="og:description" content="See exactly how a failing grade (5.0) affects your GWA." />
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org", "@type": "SoftwareApplication",
                    "name": "Failing Subject GWA Impact Calculator",
                    "applicationCategory": "EducationalApplication",
                    "operatingSystem": "Any",
                    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "PHP" },
                    "author": { "@type": "Person", "name": "Anmol Gautam", "url": "https://mygwacalculator.com/about" }
                })}</script>
            </Helmet>

            <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
                <div className="bg-gradient-to-br from-red-600 via-rose-700 to-pink-800 text-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mt-14">
                        <Link to="/" className="inline-flex items-center text-white/80 hover:text-white text-sm mb-6"><ArrowLeft className="h-4 w-4 mr-1" /> Back to Tools</Link>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <Badge className="bg-white/20 text-white border-white/30">Calculator</Badge>
                            <Badge variant="outline" className="border-white/30 text-white">GWA Impact</Badge>
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">Failing Subject GWA Impact Calculator</h1>
                        <p className="text-rose-100 text-lg max-w-2xl">Find out exactly how much a failing grade (5.0) will drop your GWA — before it happens.</p>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                    <Card className="border-0 shadow-2xl bg-white dark:bg-gray-800 mb-8">
                        <CardHeader className="border-b border-gray-100 dark:border-gray-700">
                            <CardTitle className="flex items-center gap-2 text-xl text-gray-900 dark:text-white">
                                <TrendingDown className="h-5 w-5 text-red-600" /> GWA Impact Calculator
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-6 space-y-6">
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Current GWA (1.0–3.0)</label>
                                    <input type="number" min="1" max="3" step="0.01" value={currentGwa} onChange={e => setCurrentGwa(e.target.value)}
                                        placeholder="e.g. 1.75" className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-red-500 focus:border-transparent" />
                                    <p className="text-xs text-gray-500 mt-1">Your current GWA before this semester's failing grade</p>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Total Units Completed So Far</label>
                                    <input type="number" min="1" value={currentUnits} onChange={e => setCurrentUnits(e.target.value)}
                                        placeholder="e.g. 60" className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-red-500 focus:border-transparent" />
                                    <p className="text-xs text-gray-500 mt-1">Total number of units earning your current GWA</p>
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between mb-3">
                                    <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Subjects You Might Fail</label>
                                    <Button variant="outline" size="sm" onClick={addSubject} className="border-red-300 text-red-600 hover:bg-red-50 text-xs">
                                        <Plus className="h-3 w-3 mr-1" /> Add Subject
                                    </Button>
                                </div>
                                <div className="space-y-3">
                                    {subjects.map((s) => (
                                        <div key={s.id} className="grid grid-cols-12 gap-2 items-start bg-red-50 dark:bg-gray-700/50 rounded-xl p-3 border border-red-100 dark:border-gray-600">
                                            <input className="col-span-5 px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-red-500"
                                                placeholder="Subject name" value={s.name} onChange={e => updateSubject(s.id, "name", e.target.value)} />
                                            <div className="col-span-3">
                                                <input className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-red-500"
                                                    placeholder="Units" type="number" min="1" max="6" value={s.units} onChange={e => updateSubject(s.id, "units", e.target.value)} />
                                            </div>
                                            <div className="col-span-3">
                                                <select className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-red-500"
                                                    value={s.grade} onChange={e => updateSubject(s.id, "grade", e.target.value)}>
                                                    <option value="5.0">5.0 (Failed)</option>
                                                    <option value="4.0">4.0 (Conditional)</option>
                                                    <option value="3.5">3.5 (Poor)</option>
                                                </select>
                                            </div>
                                            <button className="col-span-1 flex justify-center pt-2 text-red-400 hover:text-red-600" onClick={() => removeSubject(s.id)}>
                                                <Trash2 className="h-4 w-4" />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <Button onClick={calculate} className="w-full bg-red-600 hover:bg-red-700 text-white py-3 text-base font-semibold rounded-xl">
                                Calculate GWA Impact
                            </Button>

                            {result && (
                                <div className={`rounded-2xl p-6 border ${result.newGwa > 3.0 ? "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-700" : "bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-700"}`}>
                                    <div className="flex items-start gap-3">
                                        <AlertTriangle className={`h-6 w-6 mt-0.5 flex-shrink-0 ${result.newGwa > 3.0 ? "text-red-600" : "text-amber-600"}`} />
                                        <div className="flex-1">
                                            <div className="grid grid-cols-3 gap-4 mb-4">
                                                <div className="text-center">
                                                    <p className="text-xs text-gray-500 mb-1">Current GWA</p>
                                                    <p className="text-2xl font-bold text-blue-700 dark:text-blue-400">{result.originalGwa.toFixed(2)}</p>
                                                </div>
                                                <div className="text-center">
                                                    <p className="text-xs text-gray-500 mb-1">Change</p>
                                                    <p className="text-2xl font-bold text-red-600">+{result.drop.toFixed(2)}</p>
                                                </div>
                                                <div className="text-center">
                                                    <p className="text-xs text-gray-500 mb-1">New GWA</p>
                                                    <p className={`text-2xl font-bold ${result.newGwa > 3.0 ? "text-red-700 dark:text-red-400" : "text-amber-700 dark:text-amber-400"}`}>{result.newGwa.toFixed(2)}</p>
                                                </div>
                                            </div>
                                            <div className={`rounded-lg px-4 py-2 text-sm font-medium text-center ${result.newGwa > 3.0 ? "bg-red-100 dark:bg-red-900/40 text-red-800 dark:text-red-200" : "bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-200"}`}>
                                                Academic Status: {result.status}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </CardContent>
                    </Card>

                    <Card className="border-0 shadow-xl bg-white dark:bg-gray-800 mb-8">
                        <CardContent className="p-6 sm:p-10 prose dark:prose-invert max-w-none">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">What Really Happens When You Fail a Subject?</h2>
                            <p className="text-gray-700 dark:text-gray-300 mb-4">Failing a subject in a Philippine university has consequences beyond just the GWA drop. Here's what you need to know:</p>
                            <div className="grid sm:grid-cols-2 gap-4 mb-8">
                                {[
                                    { title: "GWA Impact", desc: "A 5.0 is the worst grade on the PH scale. Even one failed 3-unit subject can swing your GWA significantly, especially in early semesters when your total unit count is low." },
                                    { title: "Scholarship Risk", desc: "Most scholarships (CHED, DOST, private) disqualify students with any failing grade in a semester. Always check your scholarship's continuance requirements." },
                                    { title: "Honors Eligibility", desc: "One failing grade typically disqualifies you from Dean's List and Latin Honors at most PH universities, regardless of your overall GWA." },
                                    { title: "Retake Rules", desc: "Some schools allow retakes to replace the grade (DLSU, Ateneo). Others average the retake. Most just record both. Confirm with your registrar." },
                                ].map((item, i) => (
                                    <div key={i} className="bg-red-50 dark:bg-gray-700 rounded-xl p-4 border border-red-100 dark:border-gray-600">
                                        <h3 className="font-bold text-gray-900 dark:text-white mb-1">{item.title}</h3>
                                        <p className="text-sm text-gray-700 dark:text-gray-300">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>


                    {/* Rich SEO Article */}
                    <Card className="border-0 shadow-xl bg-white dark:bg-gray-800 mb-8">
                        <CardContent className="p-6 sm:p-10">
                            <article>
                                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                                    What Happens to Your GWA When You Fail a Subject in the Philippines?
                                </h2>
                                <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg leading-relaxed">
                                    Failing a subject in a Philippine university is one of the most stressful academic experiences — but understanding <strong>exactly how a failing grade (5.0) affects your GWA</strong> gives you the clarity to create a concrete recovery plan. This guide covers the math, the non-GWA consequences, university retake policies, and specific steps to protect your academic standing.
                                </p>

                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Why a 5.0 Grade Damages GWA Significantly</h3>
                                <p className="text-gray-700 dark:text-gray-300 mb-4">
                                    In the Philippine grading system, a <strong>5.0 is the worst possible grade</strong> on the 1.0–5.0 numeric scale. Your GWA is computed as a <strong>weighted average by unit count</strong>, so a failing grade in a 5-unit subject hurts five times more than failing a 1-unit subject. Early-semester students feel this most acutely — with fewer total units, one failed subject can move the GWA by 0.20 to 0.50 points or more.
                                </p>
                                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 rounded-2xl p-5 mb-6">
                                    <p className="font-semibold text-red-800 dark:text-red-300 mb-2">📊 Real Impact Example</p>
                                    <div className="font-mono text-sm text-red-700 dark:text-red-300 space-y-1">
                                        <p>Current GWA: 1.80 — Total units completed: 60</p>
                                        <p>Grade points: 1.80 × 60 = 108</p>
                                        <p>Add failing 3-unit subject: 108 + (5.0 × 3) = 123</p>
                                        <p>New GWA = 123 ÷ 63 = <strong>1.952</strong> — that's a 0.15-point drop from one subject.</p>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Consequences Beyond GWA</h3>
                                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                                    {[
                                        { t: "Academic Probation", d: "Most Philippine universities put students on probation if they fail more than 50% of enrolled units in a semester. Two consecutive probation terms often result in dismissal." },
                                        { t: "Scholarship Termination", d: "DOST, CHED, SM, Metrobank, and most institutional scholarships have a 'no failing grade' clause — one 5.0 can cause immediate disqualification." },
                                        { t: "Delayed Graduation", d: "Failed subjects must be retaken, adding at least one semester to your timeline. This cascades into delayed board exam eligibility and later career entry." },
                                        { t: "Latin Honors Disqualification", d: "Virtually all Philippine universities disqualify students with any failing grade from graduating with Latin Honors, regardless of their overall GWA." },
                                    ].map((item, i) => (
                                        <div key={i} className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 border border-gray-200 dark:border-gray-600">
                                            <h4 className="font-bold text-gray-900 dark:text-white mb-1 text-sm">{item.t}</h4>
                                            <p className="text-xs text-gray-600 dark:text-gray-400">{item.d}</p>
                                        </div>
                                    ))}
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Retake Policies Across Philippine Universities</h3>
                                <p className="text-gray-700 dark:text-gray-300 mb-4">
                                    Understanding your school's retake policy is critical — it determines whether retaking actually improves your cumulative GWA. Use our <Link to="/tools/retake-impact-calculator" className="text-rose-600 dark:text-rose-400 underline font-medium">Retake Impact Calculator</Link> to model the exact GWA effect.
                                </p>
                                <div className="overflow-x-auto mb-6">
                                    <table className="w-full border-collapse text-sm">
                                        <thead><tr className="bg-red-50 dark:bg-gray-700">
                                            {["University / Type", "Retake Policy", "GWA Impact"].map(h => (
                                                <th key={h} className="px-4 py-3 text-left border border-gray-200 dark:border-gray-600 font-bold text-gray-900 dark:text-white">{h}</th>
                                            ))}
                                        </tr></thead>
                                        <tbody className="text-gray-700 dark:text-gray-300">
                                            {[
                                                ["DLSU, Ateneo de Manila", "New grade replaces old", "Old 5.0 removed from GWA"],
                                                ["UP System", "Both grades recorded", "Both counted in weighted average"],
                                                ["UST, FEU, PUP", "Varies by college", "Check with registrar/dean"],
                                                ["Most State Universities", "Both grades counted", "Typically both included"],
                                            ].map((row, i) => (
                                                <tr key={i} className={i % 2 === 0 ? "bg-white dark:bg-gray-800" : "bg-gray-50 dark:bg-gray-900"}>
                                                    {row.map((cell, j) => <td key={j} className="px-4 py-2 border border-gray-200 dark:border-gray-600">{cell}</td>)}
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">5-Step Recovery Plan After a Failed Subject</h3>
                                <ol className="list-decimal list-inside space-y-3 text-gray-700 dark:text-gray-300 mb-6">
                                    <li><strong>Calculate your new GWA</strong> — use this calculator to know your exact standing before making any decisions.</li>
                                    <li><strong>Check academic probation status</strong> — review your university's academic standing policy in the student handbook immediately.</li>
                                    <li><strong>Notify your scholarship provider proactively</strong> — don't wait for them to find out. Early communication sometimes results in grace periods.</li>
                                    <li><strong>Enroll in the retake at the earliest opportunity</strong> — summer or next semester. Delayed retakes compound the graduation timeline impact.</li>
                                    <li><strong>Plan next semester's GWA target</strong> — use our <Link to="/tools/gwa-target-planner" className="text-rose-600 dark:text-rose-400 underline font-medium">GWA Target Planner</Link> to map what you need to recover your standing.</li>
                                </ol>

                                <p className="text-gray-700 dark:text-gray-300">
                                    For study strategies to prevent this from happening again, read our expert-written guide: <Link to="/blog/how-to-improve-gwa-in-college" className="text-rose-600 dark:text-rose-400 underline font-medium">How to Improve Your GWA in College</Link> — 12 proven techniques used by top Filipino students. And if you're worried about multiple subjects, don't guess: our <Link to="/" className="text-rose-600 dark:text-rose-400 underline font-medium">GWA Calculator</Link> lets you model any combination of grades instantly.
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

                    <div className="mt-10 bg-red-600 text-white rounded-2xl p-6 text-center">
                        <h3 className="text-xl font-bold mb-2">Compute Your GWA Now</h3>
                        <p className="text-red-100 mb-4">Know exactly where you stand before grades are finalized.</p>
                        <Link to="/" className="inline-block bg-white text-red-700 font-bold px-6 py-3 rounded-xl hover:bg-red-50 transition-colors">Open GWA Calculator →</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FailingSubjectImpact;
