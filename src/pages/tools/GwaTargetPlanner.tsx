import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { AuthorCard } from "@/components/AuthorCard";
import { Target, ArrowLeft, CheckCircle, AlertCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const GwaTargetPlanner = () => {
    const [currentGwa, setCurrentGwa] = useState<string>("");
    const [unitsCompleted, setUnitsCompleted] = useState<string>("");
    const [targetGwa, setTargetGwa] = useState<string>("");
    const [nextUnits, setNextUnits] = useState<string>("");
    const [result, setResult] = useState<null | { required: number; feasible: boolean; difficulty: string; message: string }>(null);

    const calculate = () => {
        const cg = parseFloat(currentGwa);
        const uc = parseFloat(unitsCompleted);
        const tg = parseFloat(targetGwa);
        const nu = parseFloat(nextUnits);
        if (isNaN(cg) || isNaN(uc) || isNaN(tg) || isNaN(nu)) return;
        const required = (tg * (uc + nu) - cg * uc) / nu;
        let difficulty = "";
        let message = "";
        if (required < 1.0) {
            difficulty = "Already achieved!";
            message = "Your current GWA already meets or exceeds your target. Keep it up!";
        } else if (required <= 1.5) {
            difficulty = "Ambitious but achievable";
            message = `You need a ${required.toFixed(2)} GWA next semester. Excellent performance level — achievable with dedicated study.`;
        } else if (required <= 2.0) {
            difficulty = "Achievable with effort";
            message = `You need a ${required.toFixed(2)} GWA next semester. A solid, realistic target with consistent attendance and effort.`;
        } else if (required <= 3.0) {
            difficulty = "Challenging";
            message = `You need a ${required.toFixed(2)} GWA next semester — close to the passing threshold. Consider adjusting your target timeline.`;
        } else {
            difficulty = "Not achievable in one semester";
            message = `The required GWA (${required.toFixed(2)}) is beyond what's possible. Adjust your target GWA or plan across more semesters.`;
        }
        setResult({ required: Math.max(1, required), feasible: required >= 1.0 && required <= 3.0, difficulty, message });
    };

    const faqData = [
        { q: "How do I increase my GWA in the Philippines?", a: "Focus on high-unit subjects (they carry more weight), prioritize subjects where improvements make big differences, avoid dropping or failing subjects, and use target planning tools like this one to know exactly what scores you need each semester." },
        { q: "Can I recover my GWA after a bad semester?", a: "Yes, but it takes time. The more total units you've accumulated, the harder it is to move your cumulative GWA. Early semesters are your best opportunity to build a strong foundation." },
        { q: "Is GWA 1.75 good enough for Latin Honors in the Philippines?", a: "Yes. A GWA of 1.75 typically qualifies for Cum Laude at most Philippine universities. Magna Cum Laude is usually 1.45 or below, and Summa Cum Laude is typically 1.20 or below." },
        { q: "What GWA do I need to graduate with honors at UP?", a: "At UP, Cum Laude requires a GWA of 1.75 or better; Magna Cum Laude requires 1.45 or better; Summa Cum Laude requires 1.20 or better. Additional requirements include residency and no failing grades." },
    ];

    return (
        <>
            <Helmet>
                <title>GWA Target Planner — How to Reach Your Target GWA Philippines (2025)</title>
                <meta name="description" content="Plan exactly what GWA you need next semester to reach your target cumulative GWA. Free calculator for Filipino college students — your roadmap to honors, scholarships, or graduation goals." />
                <meta name="keywords" content="GWA target planner Philippines, how to reach 1.75 GWA, improve GWA Philippines calculator, GWA improvement planner, cumulative GWA target calculator" />
                <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
                <link rel="canonical" href="https://mygwacalculator.com/tools/gwa-target-planner" />
                <meta property="og:title" content="GWA Target Planner Philippines" />
                <meta property="og:description" content="Plan the GWA you need next semester to hit your target." />
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org", "@type": "SoftwareApplication",
                    "name": "GWA Target Planner Philippines",
                    "applicationCategory": "EducationalApplication",
                    "operatingSystem": "Any",
                    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "PHP" },
                    "author": { "@type": "Person", "name": "Anmol Gautam", "url": "https://mygwacalculator.com/about" }
                })}</script>
            </Helmet>

            <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
                <div className="bg-gradient-to-br from-violet-600 via-purple-700 to-indigo-800 text-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mt-14">
                        <Link to="/" className="inline-flex items-center text-white/80 hover:text-white text-sm mb-6"><ArrowLeft className="h-4 w-4 mr-1" /> Back to Tools</Link>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <Badge className="bg-white/20 text-white border-white/30">Planner</Badge>
                            <Badge variant="outline" className="border-white/30 text-white">GWA Goals</Badge>
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">GWA Target Planner</h1>
                        <p className="text-violet-100 text-lg max-w-2xl">Know exactly what GWA you need to achieve next semester to hit your target — whether that's Cum Laude, a scholarship, or any personal goal.</p>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                    <Card className="border-0 shadow-2xl bg-white dark:bg-gray-800 mb-8">
                        <CardHeader className="border-b border-gray-100 dark:border-gray-700">
                            <CardTitle className="flex items-center gap-2 text-xl text-gray-900 dark:text-white">
                                <Target className="h-5 w-5 text-violet-600" /> GWA Target Calculator
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-6 space-y-6">
                            <div className="grid sm:grid-cols-2 gap-4">
                                {[
                                    { label: "Current Cumulative GWA", val: currentGwa, set: setCurrentGwa, placeholder: "e.g. 2.25", hint: "Your GWA after all completed semesters" },
                                    { label: "Total Units Completed", val: unitsCompleted, set: setUnitsCompleted, placeholder: "e.g. 72", hint: "Total units included in your current GWA" },
                                    { label: "Target GWA", val: targetGwa, set: setTargetGwa, placeholder: "e.g. 1.75", hint: "Your goal (1.75 = Cum Laude at most schools)" },
                                    { label: "Units Next Semester", val: nextUnits, set: setNextUnits, placeholder: "e.g. 21", hint: "Units you plan to take next semester" },
                                ].map(({ label, val, set, placeholder, hint }) => (
                                    <div key={label}>
                                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">{label}</label>
                                        <input type="number" step="0.01" value={val} onChange={e => set(e.target.value)} placeholder={placeholder}
                                            className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-violet-500 focus:border-transparent" />
                                        <p className="text-xs text-gray-500 mt-1">{hint}</p>
                                    </div>
                                ))}
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Quick Target:</p>
                                <div className="flex flex-wrap gap-2">
                                    {[["1.20", "Summa"], ["1.45", "Magna"], ["1.75", "Cum Laude"], ["2.00", "Good Standing"]].map(([g, label]) => (
                                        <button key={g} onClick={() => setTargetGwa(g)}
                                            className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${targetGwa === g ? "bg-violet-600 text-white border-violet-600" : "border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-violet-400"}`}>
                                            {g} — {label}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <Button onClick={calculate} className="w-full bg-violet-600 hover:bg-violet-700 text-white py-3 text-base font-semibold rounded-xl">Calculate Required GWA</Button>
                            {result && (
                                <div className={`rounded-2xl p-6 border ${result.required < 1 ? "bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-700" : result.feasible ? "bg-violet-50 border-violet-200 dark:bg-violet-900/20 dark:border-violet-700" : "bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-700"}`}>
                                    <div className="flex items-start gap-3">
                                        {result.required < 1 || result.feasible ? <CheckCircle className={`h-6 w-6 mt-0.5 flex-shrink-0 ${result.required < 1 ? "text-green-600" : "text-violet-600"}`} /> : <AlertCircle className="h-6 w-6 text-red-600 mt-0.5 flex-shrink-0" />}
                                        <div>
                                            <p className="text-sm text-gray-500 mb-1">Required GWA next semester:</p>
                                            <p className={`text-4xl font-bold mb-2 ${result.required < 1 ? "text-green-700" : result.feasible ? "text-violet-700 dark:text-violet-400" : "text-red-700 dark:text-red-400"}`}>
                                                {result.required < 1 ? "Already met!" : result.required.toFixed(2)}
                                            </p>
                                            <Badge className={`mb-2 ${result.required < 1 ? "bg-green-100 text-green-800" : result.feasible ? "bg-violet-100 text-violet-800" : "bg-red-100 text-red-800"}`}>{result.difficulty}</Badge>
                                            <p className="text-sm text-gray-700 dark:text-gray-300">{result.message}</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </CardContent>
                    </Card>

                    <Card className="border-0 shadow-xl bg-white dark:bg-gray-800 mb-8">
                        <CardContent className="p-6 sm:p-10">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Philippine Latin Honors GWA Requirements</h2>
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse text-sm">
                                    <thead><tr className="bg-violet-50 dark:bg-gray-700">
                                        {["Honors", "UP Diliman", "UST", "Most PH Schools"].map(h => <th key={h} className="px-4 py-3 text-left border border-gray-200 dark:border-gray-600 font-bold text-gray-900 dark:text-white">{h}</th>)}
                                    </tr></thead>
                                    <tbody className="text-gray-700 dark:text-gray-300">
                                        {[["Summa Cum Laude", "1.20 or below", "1.20 or below", "1.20 or below"], ["Magna Cum Laude", "1.21–1.45", "1.21–1.45", "1.21–1.50"], ["Cum Laude", "1.46–1.75", "1.46–1.75", "1.51–1.75"]].map(([h, ...vals], i) => (
                                            <tr key={i} className={i % 2 === 0 ? "bg-white dark:bg-gray-800" : "bg-gray-50 dark:bg-gray-750"}>
                                                <td className="px-4 py-2 border border-gray-200 dark:border-gray-600 font-semibold text-violet-700 dark:text-violet-400">{h}</td>
                                                {vals.map((v, j) => <td key={j} className="px-4 py-2 border border-gray-200 dark:border-gray-600">{v}</td>)}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-xs text-gray-500 mt-3 italic">* Approximate values — verify with your specific university handbook.</p>
                        </CardContent>
                    </Card>


                    {/* SEO Article */}
                    <Card className="border-0 shadow-xl bg-white dark:bg-gray-800 mb-8">
                        <CardContent className="p-6 sm:p-10">
                            <article>
                                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                                    How to Plan Your GWA Target in Philippine Universities: A Semester-by-Semester Guide
                                </h2>
                                <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg leading-relaxed">
                                    Whether you're chasing <strong>Latin Honors</strong>, a competitive scholarship, or recovering from a rough semester, knowing exactly <strong>what GWA you need next term</strong> is the most powerful first step. This guide shows you how Filipino students at UP, DLSU, Ateneo, and PUP structure their academic improvement plans — and how to build yours using real numbers.
                                </p>

                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Why Early Semesters Have the Most GWA Influence</h3>
                                <p className="text-gray-700 dark:text-gray-300 mb-4">
                                    The GWA weighted average system is mathematically biased toward early semesters. When you have only 21 units completed, a single excellent semester of 1.25 GWA dramatically shifts your cumulative average. But after 120 units, even a perfect 1.00 semester barely moves it. This is why <strong>1st and 2nd year performance sets the foundation</strong> for your final graduation GWA — and why older students need to set realistic multi-semester targets.
                                </p>
                                <div className="bg-violet-50 dark:bg-violet-900/20 border border-violet-200 dark:border-violet-700 rounded-2xl p-5 mb-6">
                                    <p className="font-semibold text-violet-800 dark:text-violet-300 mb-2">⚡ The Leverage Principle</p>
                                    <p className="text-violet-700 dark:text-violet-300 text-sm">A student with 21 units completed can shift their cumulative GWA by 0.5–1.0 points in one good semester. A student with 120 units can typically shift it only 0.05–0.15 points. The earlier you optimize, the greater your impact. <strong>Start planning now — don't wait until 3rd or 4th year.</strong></p>
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Smart Unit Load Strategy</h3>
                                <p className="text-gray-700 dark:text-gray-300 mb-4">
                                    A common mistake Filipino students make when trying to improve GWA is taking a heavy load — thinking more units equals faster recovery. This backfires more often than not. More subjects means more demand on your time and the risk of spreading performance thin.
                                </p>
                                <div className="grid sm:grid-cols-3 gap-4 mb-6">
                                    {[
                                        { range: "15–18 units", label: "Recovery Mode", desc: "Best after a rough semester. Focus on passing everything well before increasing load.", color: "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-700" },
                                        { range: "18–21 units", label: "Standard Load", desc: "Ideal for sustained improvement. Most Filipino students in good standing carry this load.", color: "bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-700" },
                                        { range: "21–24 units", label: "Heavy Load", desc: "Only recommended if your current GWA is already strong (sub-1.75) and you have excellent time management.", color: "bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-700" },
                                    ].map(item => (
                                        <div key={item.range} className={`rounded-xl p-4 border ${item.color}`}>
                                            <p className="font-bold text-gray-900 dark:text-white text-sm">{item.range}</p>
                                            <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">{item.label}</p>
                                            <p className="text-xs text-gray-600 dark:text-gray-400">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Subject Selection Tips to Boost GWA</h3>
                                <ul className="space-y-2 mb-6 text-gray-700 dark:text-gray-300">
                                    {[
                                        "Prioritize excellence in high-unit subjects (3–5 units). They carry 3–5× the GWA weight of minor or elective subjects.",
                                        "Schedule difficult major subjects in semesters with lighter overall loads. Don't stack your hard subjects together.",
                                        "Take PE (Physical Education), NSTP, and 1-unit electives to pad your unit count with lower-risk subjects.",
                                        "Avoid overloading in the same semester as board exam preparation (Nursing, Engineering) when study intensity peaks.",
                                        "Track semester-by-semester performance using our Cumulative GWA Tracker to catch downward trends early.",
                                    ].map((tip, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <span className="w-2 h-2 rounded-full bg-violet-500 mt-2 flex-shrink-0" />
                                            {tip}
                                        </li>
                                    ))}
                                </ul>

                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">GWA Requirements for Key Filipino Student Goals</h3>
                                <div className="overflow-x-auto mb-6">
                                    <table className="w-full border-collapse text-sm">
                                        <thead><tr className="bg-violet-50 dark:bg-gray-700">
                                            {["Goal", "GWA Required", "Key Conditions", "Related Tool"].map(h => (
                                                <th key={h} className="px-3 py-3 text-left border border-gray-200 dark:border-gray-600 font-bold text-gray-900 dark:text-white text-xs">{h}</th>
                                            ))}
                                        </tr></thead>
                                        <tbody className="text-gray-700 dark:text-gray-300 text-sm">
                                            {[
                                                ["Cum Laude", "≤ 1.75 cumulative", "No failing grades, full residency", "GWA Target Planner"],
                                                ["DOST Scholarship", "≤ 2.00 per semester", "No grade below 2.0 in major subjects", "Grade Needed to Pass"],
                                                ["Dean's List", "≤ 1.75 per semester", "Varies by school — no failing/INC grades", "GWA Target Planner"],
                                                ["Board Exam Eligibility", "≤ 2.50 cumulative", "Plus required units per PRC regulations", "Cumulative GWA Tracker"],
                                                ["University Transfer", "Typically ≤ 2.00–2.50", "Depends entirely on target university", "Transferee GWA Evaluator"],
                                            ].map((row, i) => (
                                                <tr key={i} className={i % 2 === 0 ? "bg-white dark:bg-gray-800" : "bg-gray-50 dark:bg-gray-900"}>
                                                    {row.map((cell, j) => <td key={j} className="px-3 py-2 border border-gray-200 dark:border-gray-600">{cell}</td>)}
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>

                                <p className="text-gray-700 dark:text-gray-300">
                                    For a deeper dive into GWA benchmarks and what they mean in the context of careers, scholarships, and graduate school in the Philippines, read our comprehensive guide: <Link to="/blog/what-is-a-good-gwa-philippines" className="text-violet-600 dark:text-violet-400 underline font-medium">What is a Good GWA in the Philippines?</Link> — and explore official <Link to="/blog/latin-honors-philippines" className="text-violet-600 dark:text-violet-400 underline font-medium">Latin Honors requirements by university</Link> if graduating with distinction is your goal. Already know your current GWA? Go straight to our <Link to="/" className="text-violet-600 dark:text-violet-400 underline font-medium">GWA Calculator</Link> to verify it or model a new semester.
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
                    <div className="mt-10 bg-violet-600 text-white rounded-2xl p-6 text-center">
                        <h3 className="text-xl font-bold mb-2">Compute Your Current GWA First</h3>
                        <p className="text-violet-100 mb-4">Use our free GWA Calculator to get your accurate current GWA before planning targets.</p>
                        <Link to="/" className="inline-block bg-white text-violet-700 font-bold px-6 py-3 rounded-xl hover:bg-violet-50 transition-colors">Open GWA Calculator →</Link>
                    </div>
                </div>
            </div>
        </>
    );
};
export default GwaTargetPlanner;
