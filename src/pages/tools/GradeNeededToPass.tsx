import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { AuthorCard } from "@/components/AuthorCard";
import { Calculator, AlertCircle, CheckCircle, ArrowLeft } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const GradeNeededToPass = () => {
    const [passingGrade, setPassingGrade] = useState(3.0);
    const [currentGrade, setCurrentGrade] = useState<string>("");
    const [currentWeight, setCurrentWeight] = useState<string>("");
    const [finalWeight, setFinalWeight] = useState<string>("");
    const [result, setResult] = useState<null | { needed: number; possible: boolean; message: string }>(null);

    const calculate = () => {
        const cg = parseFloat(currentGrade);
        const cw = parseFloat(currentWeight) / 100;
        const fw = parseFloat(finalWeight) / 100;
        if (isNaN(cg) || isNaN(cw) || isNaN(fw) || cw + fw > 1.001) return;
        // GWA formula for Philippines (1.0 best, 5.0 failing)
        // passingGrade = cg*cw + needed*fw
        // needed = (passingGrade - cg*cw) / fw
        const needed = (passingGrade - cg * cw) / fw;
        const possible = needed >= 1.0 && needed <= 5.0;
        const message = !possible
            ? needed < 1.0
                ? "Great news — you've already secured a passing grade! Even a 1.00 on the final keeps you passing."
                : "Unfortunately, even a perfect score (1.00) won't be enough. Consider talking to your professor."
            : needed <= 2.0
                ? "You're in great shape! A solid performance on the final should keep you passing comfortably."
                : needed <= 3.0
                    ? "Achievable — but study hard for the final to make sure you hit your target."
                    : "You'll need to pass the final but the required grade is near the minimum. Focus on the essentials.";
        setResult({ needed: Math.max(1, Math.min(5, needed)), possible, message });
    };

    const faqData = [
        { q: "What is the passing grade in Philippine universities?", a: "Most Philippine universities require a minimum grade of 3.0 (equivalent to 75–75%) to pass a subject. Below 3.0 (e.g., 4.0 or 5.0) means you failed or need conditional passing. Always check your specific university handbook." },
        { q: "How is the final grade computed in college Philippines?", a: "Most professors use a weighted average: Final Grade = (Quiz % × weight) + (Midterm % × weight) + (Final Exam % × weight). The total weight must equal 100%. Each university and professor may have a different breakdown." },
        { q: "Can I still pass if I get a very low grade on the final?", a: "It depends on your current grade and the weight of the final exam. Use this calculator to find out. If the required grade is below 1.0 on the PH scale, you're already safe. If it's above 3.0 (the passing cutoff), you're at risk." },
        { q: "What happens if I fail a subject in the Philippines?", a: "Failing a subject (grade of 5.0 or INC that becomes 5.0) means you need to retake it. It also negatively impacts your GWA calculation for that semester. Some scholarships and honors programs will disqualify you for a failed subject even if you retake it." },
    ];

    return (
        <>
            <Helmet>
                <title>Grade Needed to Pass Calculator Philippines (2025) | GWA Calculator</title>
                <meta name="description" content="Calculate exactly what grade you need on your final exam or remaining assessments to pass your subject in a Philippine university. Free, instant, and built for Filipino students." />
                <meta name="keywords" content="grade needed to pass calculator Philippines, what grade do I need to pass Philippines, final grade needed calculator, passing grade calculator college PH" />
                <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
                <link rel="canonical" href="https://mygwacalculator.com/tools/grade-needed-to-pass" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Grade Needed to Pass Calculator Philippines" />
                <meta property="og:description" content="Find out exactly what you need on your final exam to pass your subject." />
                <meta property="og:url" content="https://mygwacalculator.com/tools/grade-needed-to-pass" />
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org", "@type": "SoftwareApplication",
                    "name": "Grade Needed to Pass Calculator Philippines",
                    "applicationCategory": "EducationalApplication",
                    "operatingSystem": "Any",
                    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "PHP" },
                    "description": "Calculate the grade you need on your final exam to pass your subject in a Philippine university.",
                    "author": { "@type": "Person", "name": "Anmol Gautam", "url": "https://mygwacalculator.com/about" }
                })}</script>
            </Helmet>

            <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
                {/* Hero */}
                <div className="bg-gradient-to-br from-emerald-600 via-teal-700 to-cyan-800 text-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mt-14">
                        <Link to="/" className="inline-flex items-center text-white/80 hover:text-white text-sm mb-6">
                            <ArrowLeft className="h-4 w-4 mr-1" /> Back to Tools
                        </Link>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <Badge className="bg-white/20 text-white border-white/30">Calculator</Badge>
                            <Badge variant="outline" className="border-white/30 text-white">Philippines</Badge>
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
                            Grade Needed to Pass Calculator
                        </h1>
                        <p className="text-emerald-100 text-lg max-w-2xl">
                            Find out exactly what grade you need on your final exam or remaining assessments to pass your subject — no guessing, just clear math.
                        </p>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                    {/* Calculator */}
                    <Card className="border-0 shadow-2xl bg-white dark:bg-gray-800 mb-8">
                        <CardHeader className="border-b border-gray-100 dark:border-gray-700">
                            <CardTitle className="flex items-center gap-2 text-xl text-gray-900 dark:text-white">
                                <Calculator className="h-5 w-5 text-emerald-600" /> Grade Needed to Pass
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-6 space-y-6">
                            {/* Passing grade selector */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Passing Grade Threshold</label>
                                <div className="flex gap-3 flex-wrap">
                                    {[3.0, 2.5, 2.0].map(g => (
                                        <button key={g} onClick={() => setPassingGrade(g)}
                                            className={`px-4 py-2 rounded-lg border text-sm font-medium transition-colors ${passingGrade === g ? "bg-emerald-600 text-white border-emerald-600" : "border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-emerald-400"}`}>
                                            {g.toFixed(1)} {g === 3.0 ? "(Most PH schools)" : g === 2.5 ? "(Some programs)" : "(Honors track)"}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="grid sm:grid-cols-3 gap-4">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Current Grade (1.0–5.0)</label>
                                    <input type="number" min="1" max="5" step="0.25" value={currentGrade} onChange={e => setCurrentGrade(e.target.value)}
                                        placeholder="e.g. 2.0" className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent" />
                                    <p className="text-xs text-gray-500 mt-1">Your grade so far (prelim/midterm)</p>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Weight of Current Grade (%)</label>
                                    <input type="number" min="1" max="99" value={currentWeight} onChange={e => setCurrentWeight(e.target.value)}
                                        placeholder="e.g. 60" className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent" />
                                    <p className="text-xs text-gray-500 mt-1">% weight of assessments done</p>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Remaining Weight (%)</label>
                                    <input type="number" min="1" max="99" value={finalWeight} onChange={e => setFinalWeight(e.target.value)}
                                        placeholder="e.g. 40" className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent" />
                                    <p className="text-xs text-gray-500 mt-1">% weight of remaining exams</p>
                                </div>
                            </div>

                            <Button onClick={calculate} className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 text-base font-semibold rounded-xl">
                                Calculate Required Grade
                            </Button>

                            {result && (
                                <div className={`rounded-2xl p-6 ${result.possible ? "bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-700" : result.needed < 1 ? "bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700" : "bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700"}`}>
                                    <div className="flex items-start gap-3">
                                        {result.possible ? <CheckCircle className="h-6 w-6 text-emerald-600 mt-0.5 flex-shrink-0" /> : result.needed < 1 ? <CheckCircle className="h-6 w-6 text-blue-600 mt-0.5 flex-shrink-0" /> : <AlertCircle className="h-6 w-6 text-red-600 mt-0.5 flex-shrink-0" />}
                                        <div>
                                            <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">You need to score:</p>
                                            <p className={`text-4xl font-bold mb-2 ${result.possible ? "text-emerald-700 dark:text-emerald-400" : result.needed < 1 ? "text-blue-700 dark:text-blue-400" : "text-red-700 dark:text-red-400"}`}>
                                                {result.needed < 1 ? "Any grade" : result.needed > 5 ? "Impossible" : result.needed.toFixed(2)}{" "}
                                                {result.possible && <span className="text-lg font-normal text-gray-500">or better</span>}
                                            </p>
                                            <p className="text-sm text-gray-700 dark:text-gray-300">{result.message}</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </CardContent>
                    </Card>

                    {/* Explanation */}
                    <Card className="border-0 shadow-xl bg-white dark:bg-gray-800 mb-8">
                        <CardContent className="p-6 sm:p-10 prose dark:prose-invert max-w-none">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How Is This Calculated?</h2>
                            <p className="text-gray-700 dark:text-gray-300 mb-4">The calculator uses the weighted grade formula used by most Philippine universities:</p>
                            <div className="bg-gray-100 dark:bg-gray-700 rounded-xl p-4 font-mono text-sm mb-6">
                                <p className="text-gray-800 dark:text-gray-200 font-bold">Required Grade = (Passing Grade − Current Grade × Current Weight) ÷ Remaining Weight</p>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300 mb-4">For example: if your current grade is 2.0 (60% weight) and you need a 3.0 to pass with a 40% final exam:</p>
                            <div className="bg-gray-100 dark:bg-gray-700 rounded-xl p-4 font-mono text-sm mb-6">
                                <p>Required = (3.0 − 2.0 × 0.60) ÷ 0.40</p>
                                <p>Required = (3.0 − 1.20) ÷ 0.40</p>
                                <p className="font-bold text-emerald-600 dark:text-emerald-400">Required = 1.80 ÷ 0.40 = 4.50</p>
                                <p className="text-xs text-gray-500 mt-2">⚠ A 4.50 is near failing — you'd need to significantly improve your final exam performance or see if extra credit is available.</p>
                            </div>

                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Philippine Grading Scale Reference</h2>
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse text-sm">
                                    <thead><tr className="bg-emerald-50 dark:bg-gray-700"><th className="px-4 py-3 text-left border border-gray-200 dark:border-gray-600 font-bold text-gray-900 dark:text-white">GWA / Grade</th><th className="px-4 py-3 text-left border border-gray-200 dark:border-gray-600 font-bold text-gray-900 dark:text-white">Percentage Equivalent</th><th className="px-4 py-3 text-left border border-gray-200 dark:border-gray-600 font-bold text-gray-900 dark:text-white">Description</th></tr></thead>
                                    <tbody className="text-gray-700 dark:text-gray-300">
                                        {[["1.00", "97–100%", "Outstanding"], ["1.25", "93–96%", "Excellent"], ["1.50", "89–92%", "Very Good"], ["1.75", "85–88%", "Good"], ["2.00", "81–84%", "Meritorious"], ["2.25", "77–80%", "Very Satisfactory"], ["2.50", "73–76%", "Satisfactory"], ["2.75", "70–72%", "Fairly Satisfactory"], ["3.00", "67–69%", "Passing (minimum)"], ["5.00", "Below 65%", "Failed"]].map(([g, p, d], i) => (
                                            <tr key={i} className={`${g === "3.00" ? "bg-amber-50 dark:bg-amber-900/20 font-semibold" : i % 2 === 0 ? "bg-white dark:bg-gray-800" : "bg-gray-50 dark:bg-gray-750"}`}>
                                                <td className="px-4 py-2 border border-gray-200 dark:border-gray-600">{g}</td>
                                                <td className="px-4 py-2 border border-gray-200 dark:border-gray-600">{p}</td>
                                                <td className="px-4 py-2 border border-gray-200 dark:border-gray-600">{d}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </CardContent>
                    </Card>


                    {/* Rich SEO Article */}
                    <Card className="border-0 shadow-xl bg-white dark:bg-gray-800 mb-8">
                        <CardContent className="p-6 sm:p-10">
                            <article>
                                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                                    How to Calculate the Grade You Need to Pass in Philippine Universities
                                </h2>
                                <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg leading-relaxed">
                                    Every Filipino college student has faced this moment: midterms are done, your grade isn't ideal, and finals are coming up fast. Instead of guessing or panicking, you can calculate <strong>exactly what grade you need to pass</strong> using the weighted grade formula used by most Philippine universities. This guide explains how it works, what the numbers mean, and what to do if your required grade looks impossible to achieve.
                                </p>

                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Understanding the Philippine University Grading System</h3>
                                <p className="text-gray-700 dark:text-gray-300 mb-4">
                                    Most Philippine universities under the <strong>Commission on Higher Education (CHED)</strong> framework use a numeric grading scale from <strong>1.0 (highest/best)</strong> to <strong>5.0 (failing)</strong>. A grade of <strong>3.0 is the minimum passing grade</strong> in most institutions, though some programs — like Engineering, Nursing, and Medicine — require a 2.5 or even 2.0 to proceed to the next level or maintain scholarship eligibility.
                                </p>
                                <p className="text-gray-700 dark:text-gray-300 mb-6">
                                    Your final subject grade is a <strong>weighted average</strong> of all your graded activities: quizzes, recitations, major exams (midterm and final), projects, and laboratory work. Each component carries a percentage that the professor defines in the syllabus — and the total always sums to 100%.
                                </p>

                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">The Formula Behind This Calculator</h3>
                                <div className="bg-gray-100 dark:bg-gray-700 rounded-2xl p-5 font-mono text-sm mb-4">
                                    <p className="text-gray-800 dark:text-gray-200 font-bold">Required Grade = (Passing Grade − Current Grade × Current Weight%) ÷ Remaining Weight%</p>
                                </div>
                                <p className="text-gray-700 dark:text-gray-300 mb-6">
                                    For example: if your prelim + midterm combined grade is 2.0 (at 60% weight), and you need a 3.0 to pass with a 40% final exam weight: <strong>Required = (3.0 − 2.0 × 0.60) ÷ 0.40 = (3.0 − 1.20) ÷ 0.40 = 4.50</strong>. That means the required final exam grade is 4.50 — near the failing mark — signaling you must consult your professor immediately.
                                </p>

                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">What If the Required Grade Is Too High?</h3>
                                <ul className="space-y-3 mb-6">
                                    {[
                                        { t: "Talk to your professor early", d: "Many professors offer extra credit, project revisions, or grade reconsideration. Ask before the final exam — not after." },
                                        { t: "Focus on high-weight remaining items", d: "If your final exam is 40% of your grade, it deserves at least 40% of your remaining study energy." },
                                        { t: "Check for conditional passing (4.0)", d: "Some universities offer a '4.0 conditional' grade that can be raised to passing through a make-up exam." },
                                        { t: "Consider late withdrawal", d: "If passing is mathematically impossible, withdrawing before the deadline may protect your GWA. Use our Failing Subject GWA Impact Calculator to compare scenarios." },
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 bg-emerald-50 dark:bg-gray-700 rounded-xl p-4">
                                            <span className="flex-shrink-0 w-6 h-6 bg-emerald-600 text-white rounded-full text-xs font-bold flex items-center justify-center mt-0.5">{i + 1}</span>
                                            <div><strong className="text-gray-900 dark:text-white">{item.t}:</strong>{" "}<span className="text-gray-700 dark:text-gray-300">{item.d}</span></div>
                                        </li>
                                    ))}
                                </ul>

                                <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 rounded-2xl p-5 mb-6">
                                    <h4 className="font-bold text-amber-800 dark:text-amber-300 mb-2">⚠️ Passing Grade Varies by University and Program</h4>
                                    <p className="text-amber-700 dark:text-amber-300 text-sm">While 3.0 is standard, Engineering, Nursing, and some professional programs at UP, UST, and Ateneo may require 2.5 or higher to proceed. Scholarship holders (DOST, CHED, institutional) often need a 2.0 or better in all subjects. Always verify your specific program's academic standards in your student handbook.</p>
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">How This Grade Feeds Into Your Overall GWA</h3>
                                <p className="text-gray-700 dark:text-gray-300 mb-4">
                                    Every subject grade you earn contributes to your <strong>General Weighted Average (GWA)</strong>, weighted by the number of units. A 5-unit major subject has five times the GWA impact of a 1-unit PE class. Use our <Link to="/tools/failing-subject-gwa-impact" className="text-emerald-600 dark:text-emerald-400 underline font-medium">Failing Subject GWA Impact Calculator</Link> to see how a potential failure would affect your overall GWA, and our <Link to="/tools/gwa-target-planner" className="text-emerald-600 dark:text-emerald-400 underline font-medium">GWA Target Planner</Link> to chart your path to Cum Laude or other honors goals.
                                </p>
                                <p className="text-gray-700 dark:text-gray-300">
                                    For a deeper understanding of how academic grades are structured in the Philippines, read our guide on <Link to="/blog/how-to-compute-grades-in-college" className="text-emerald-600 dark:text-emerald-400 underline font-medium">How to Compute Grades in College Philippines</Link>. If you're tracking your standing across all subjects, our main <Link to="/" className="text-emerald-600 dark:text-emerald-400 underline font-medium">GWA Calculator</Link> is the fastest way to get your full academic picture in seconds.
                                </p>
                            </article>
                        </CardContent>
                    </Card>

                    <AuthorCard variant="full" />


                    {/* FAQ */}
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

                    <div className="mt-10 bg-emerald-600 text-white rounded-2xl p-6 text-center">
                        <h3 className="text-xl font-bold mb-2">Also Check Your Full GWA</h3>
                        <p className="text-emerald-100 mb-4">Know your full General Weighted Average across all subjects with our free GWA Calculator.</p>
                        <Link to="/" className="inline-block bg-white text-emerald-700 font-bold px-6 py-3 rounded-xl hover:bg-emerald-50 transition-colors">Open GWA Calculator →</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default GradeNeededToPass;
