import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { AuthorCard } from "@/components/AuthorCard";
import { Plus, Trash2, Calculator } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface Subject { id: number; name: string; grade: string; units: string; }

const UP_SCALE = [
    { grade: "1.00", description: "Excellent", equiv: "97–100%" },
    { grade: "1.25", description: "Excellent", equiv: "94–96%" },
    { grade: "1.50", description: "Very Good", equiv: "91–93%" },
    { grade: "1.75", description: "Very Good", equiv: "88–90%" },
    { grade: "2.00", description: "Good", equiv: "85–87%" },
    { grade: "2.25", description: "Good", equiv: "82–84%" },
    { grade: "2.50", description: "Satisfactory", equiv: "79–81%" },
    { grade: "2.75", description: "Satisfactory", equiv: "76–78%" },
    { grade: "3.00", description: "Passing", equiv: "75%" },
    { grade: "4.00", description: "Conditionally Passing", equiv: "70–74%" },
    { grade: "5.00", description: "Failing", equiv: "Below 70%" },
    { grade: "INC", description: "Incomplete", equiv: "—" },
    { grade: "DRP", description: "Dropped", equiv: "—" },
];

const GwaCalculatorUP = () => {
    const [subjects, setSubjects] = useState<Subject[]>([
        { id: 1, name: "", grade: "", units: "" },
        { id: 2, name: "", grade: "", units: "" },
        { id: 3, name: "", grade: "", units: "" },
    ]);
    const [result, setResult] = useState<null | { gwa: number; units: number; honor: string; colorClass: string }>(null);

    const addSubject = () => setSubjects(s => [...s, { id: Date.now(), name: "", grade: "", units: "" }]);
    const removeSubject = (id: number) => setSubjects(s => s.filter(x => x.id !== id));
    const updateSubject = (id: number, field: keyof Subject, val: string) =>
        setSubjects(s => s.map(x => x.id === id ? { ...x, [field]: val } : x));

    const calculate = () => {
        let pts = 0; let units = 0;
        subjects.forEach(s => {
            const g = parseFloat(s.grade); const u = parseFloat(s.units);
            if (!isNaN(g) && !isNaN(u) && u > 0) { pts += g * u; units += u; }
        });
        if (units === 0) return;
        const gwa = pts / units;
        let honor = ""; let colorClass = "";
        if (gwa <= 1.20) { honor = "University Scholar (Summa track)"; colorClass = "text-yellow-600"; }
        else if (gwa <= 1.45) { honor = "College Scholar (Magna track)"; colorClass = "text-gray-500"; }
        else if (gwa <= 1.75) { honor = "Cum Laude Track"; colorClass = "text-amber-700"; }
        else if (gwa <= 2.00) { honor = "Dean's Lister eligible"; colorClass = "text-blue-600"; }
        else if (gwa <= 3.00) { honor = "Good Standing"; colorClass = "text-green-600"; }
        else { honor = "Conditioned / At Risk"; colorClass = "text-red-600"; }
        setResult({ gwa, units, honor, colorClass });
    };

    const faqData = [
        { q: "What is the UP grading system?", a: "UP uses a 5-point grading scale where 1.00 is the highest (Excellent, 97–100%) and 5.00 is failing (below 70%). Passing is 3.00 (75%). A grade of 4.00 is \"conditionally passing\" — you must pass a removal exam. UP also uses INC (Incomplete) and DRP (Dropped)." },
        { q: "What GWA do I need to be a University Scholar at UP?", a: "To be recognized as University Scholar at UP, you generally need a semester GWA of 1.45 or better with no grade below 3.0 and no incomplete or failing grades. Summa Cum Laude at graduation requires a cumulative GWA of 1.20 or better." },
        { q: "What is the difference between Dean's Lister and University Scholar at UP?", a: "Dean's Lister recognition comes from your College (based on college-specific criteria, typically GWA ≤ 2.00 with no failing grades). University Scholar is a UP-wide recognition for students with GWA ≤ 1.45 each semester. University Scholars receive special academic privileges and priority registration." },
        { q: "Does UP compute GWA the same way as other universities?", a: "Yes, UP uses the standard Philippine weighted average formula: GWA = Sum(Grade × Units) / Total Units. The scale is 1.0–5.0 like most Philippine schools, but UP's grade boundaries (e.g., 1.25, 1.50, 1.75) are more granular than many private universities." },
    ];

    return (
        <>
            <Helmet>
                <title>UP GWA Calculator — University of the Philippines Grading System Guide 2025 | mygwacalculator.com</title>
                <meta name="description" content="Free GWA calculator for University of the Philippines (UP) students. Understand the UP grading scale (1.0–5.0), UP University Scholar requirements, Latin Honors GWA cutoffs, and how to compute your UP GWA accurately." />
                <meta name="keywords" content="UP GWA calculator Philippines, University of the Philippines grading system, UP grading scale 1.0 to 5.0, UP University Scholar GWA, UP Diliman GWA calculator" />
                <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
                <link rel="canonical" href="https://mygwacalculator.com/gwa-calculator-up" />
                <meta property="og:title" content="UP GWA Calculator — University of the Philippines Grading System" />
                <meta property="og:description" content="Compute your GWA using the UP grading scale. Check University Scholar and Latin Honors eligibility." />
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org", "@type": "SoftwareApplication",
                    "name": "UP GWA Calculator — University of the Philippines",
                    "applicationCategory": "EducationalApplication", "operatingSystem": "Any",
                    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "PHP" },
                    "author": { "@type": "Person", "name": "Anmol Gautam", "url": "https://mygwacalculator.com/about" }
                })}</script>
            </Helmet>

            <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
                <div className="bg-gradient-to-br from-red-700 via-red-800 to-green-900 text-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mt-14">
                        <Link to="/tools" className="inline-flex items-center text-white/80 hover:text-white text-sm mb-6">← All Tools</Link>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <Badge className="bg-white/20 text-white border-white/30">University of the Philippines</Badge>
                            <Badge variant="outline" className="border-white/30 text-white">1.0–5.0 Scale</Badge>
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">UP GWA Calculator</h1>
                        <p className="text-red-100 text-lg max-w-2xl">Compute your General Weighted Average (GWA) using the University of the Philippines grading scale. Check University Scholar and Latin Honors eligibility instantly.</p>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                    <Card className="border-0 shadow-2xl bg-white dark:bg-gray-800 mb-8">
                        <CardHeader className="border-b border-gray-100 dark:border-gray-700">
                            <CardTitle className="flex items-center gap-2 text-xl text-gray-900 dark:text-white">
                                <Calculator className="h-5 w-5 text-red-700" /> UP GWA Calculator
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-6 space-y-5">
                            <div className="space-y-3">
                                <div className="grid grid-cols-12 gap-2 text-xs font-semibold text-gray-500 px-1">
                                    <div className="col-span-5">Subject</div>
                                    <div className="col-span-4">Grade (UP Scale)</div>
                                    <div className="col-span-2">Units</div>
                                    <div className="col-span-1"></div>
                                </div>
                                {subjects.map(sub => (
                                    <div key={sub.id} className="grid grid-cols-12 gap-2 items-center">
                                        <input className="col-span-5 px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-600 text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-red-700"
                                            value={sub.name} onChange={e => updateSubject(sub.id, "name", e.target.value)} placeholder="e.g. Math 17" />
                                        <div className="col-span-4">
                                            <select className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-600 text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-red-700"
                                                value={sub.grade} onChange={e => updateSubject(sub.id, "grade", e.target.value)}>
                                                <option value="">Select grade</option>
                                                {["1.00", "1.25", "1.50", "1.75", "2.00", "2.25", "2.50", "2.75", "3.00", "4.00", "5.00"].map(g => (
                                                    <option key={g} value={g}>{g}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <input className="col-span-2 px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-600 text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-red-700"
                                            type="number" min="1" value={sub.units}
                                            onChange={e => updateSubject(sub.id, "units", e.target.value)} placeholder="Units" />
                                        <button className="col-span-1 text-red-400 hover:text-red-600 flex justify-center" onClick={() => removeSubject(sub.id)}>
                                            <Trash2 className="h-4 w-4" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                            <Button variant="outline" onClick={addSubject} className="border-red-200 text-red-700 hover:bg-red-50 w-full">
                                <Plus className="h-4 w-4 mr-2" /> Add Subject
                            </Button>
                            <Button onClick={calculate} className="w-full bg-red-700 hover:bg-red-800 text-white py-3 text-base font-semibold rounded-xl">
                                Compute UP GWA
                            </Button>
                            {result && (
                                <div className="rounded-2xl p-6 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700">
                                    <div className="grid grid-cols-3 gap-4 text-center">
                                        <div>
                                            <p className="text-xs text-gray-500 mb-1">Your GWA</p>
                                            <p className="text-4xl font-bold text-red-700 dark:text-red-400">{result.gwa.toFixed(2)}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500 mb-1">Total Units</p>
                                            <p className="text-4xl font-bold text-gray-700 dark:text-gray-300">{result.units}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500 mb-1">Status</p>
                                            <p className={`text-base font-bold ${result.colorClass}`}>{result.honor}</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </CardContent>
                    </Card>

                    {/* UP Grade Scale Table */}
                    <Card className="border-0 shadow-xl bg-white dark:bg-gray-800 mb-8">
                        <CardHeader><CardTitle className="text-xl font-bold text-gray-900 dark:text-white">UP Grading Scale (1.0–5.0)</CardTitle></CardHeader>
                        <CardContent className="p-6">
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse text-sm">
                                    <thead><tr className="bg-red-50 dark:bg-gray-700">
                                        {["Grade", "Description", "Percentage Equivalent"].map(h => (
                                            <th key={h} className="px-4 py-3 text-left border border-gray-200 dark:border-gray-600 font-bold text-gray-900 dark:text-white">{h}</th>
                                        ))}
                                    </tr></thead>
                                    <tbody>
                                        {UP_SCALE.map((row, i) => (
                                            <tr key={i} className={i % 2 === 0 ? "bg-white dark:bg-gray-800" : "bg-gray-50 dark:bg-gray-900"}>
                                                <td className={`px-4 py-2 border border-gray-200 dark:border-gray-600 font-bold ${row.grade === "5.00" ? "text-red-600" : row.grade === "3.00" ? "text-green-600" : "text-gray-900 dark:text-white"}`}>{row.grade}</td>
                                                <td className="px-4 py-2 border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300">{row.description}</td>
                                                <td className="px-4 py-2 border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300">{row.equiv}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border-0 shadow-xl bg-white dark:bg-gray-800 mb-8">
                        <CardContent className="p-6 sm:p-10">
                            <article>
                                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                                    University of the Philippines Grading System Explained: GWA, University Scholars, and Latin Honors
                                </h2>
                                <p className="text-gray-700 dark:text-gray-300 mb-5 text-lg leading-relaxed">
                                    The <strong>University of the Philippines (UP) grading system</strong> uses a 5-point scale that is unique in its precision — with grades awarded in increments of 0.25 (1.00, 1.25, 1.50, 1.75, 2.00, 2.25, 2.50, 2.75, 3.00, 4.00, 5.00). Understanding this system is critical for every Iskolar ng Bayan, whether you're in UP Diliman, UP Manila, UP Los Baños, or any other constituent university.
                                </p>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">University Scholar vs. College Scholar at UP</h3>
                                <p className="text-gray-700 dark:text-gray-300 mb-4">
                                    UP has two main academic honor rolls per semester:
                                </p>
                                <div className="grid sm:grid-cols-2 gap-4 mb-5">
                                    {[
                                        { t: "University Scholar", d: "Awarded to students with a semester GWA of 1.45 or better, no grade below 3.00, and no INC or failing grades. These students receive special privileges including priority registration." },
                                        { t: "College Scholar", d: "Awarded by the College to students with a semester GWA of 1.75 or better, no failing grades. Requirements vary slightly by college — check with your college's Office of the Secretary." },
                                    ].map((item, i) => (
                                        <div key={i} className="bg-red-50 dark:bg-gray-700 rounded-xl p-4 border border-red-100 dark:border-gray-600">
                                            <h4 className="font-bold text-red-800 dark:text-red-300 mb-1 text-sm">{item.t}</h4>
                                            <p className="text-xs text-gray-600 dark:text-gray-400">{item.d}</p>
                                        </div>
                                    ))}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Special UP Grades: INC, DRP, and 4.00</h3>
                                <ul className="space-y-2 mb-5 text-gray-700 dark:text-gray-300">
                                    {[
                                        "INC (Incomplete): You did not complete course requirements but passed the rest. You have one year to resolve it, otherwise it becomes 5.00.",
                                        "DRP (Dropped): Officially dropped from the course. Not computed in GWA but may affect scholarship status if you had no other subjects.",
                                        "4.00 (Conditionally Passing): You must pass a removal exam. If you pass, it becomes 3.00. If you fail, it becomes 5.00.",
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-2"><span className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0" />{item}</li>
                                    ))}
                                </ul>
                                <p className="text-gray-700 dark:text-gray-300">
                                    Track your UP GWA over time with our <Link to="/tools/cumulative-gwa-tracker" className="text-red-700 dark:text-red-400 underline font-medium">Cumulative GWA Tracker</Link>, and plan your path to University Scholar status with our <Link to="/tools/gwa-target-planner" className="text-red-700 dark:text-red-400 underline font-medium">GWA Target Planner</Link>. If you're considering transferring to UP, check our <Link to="/tools/transferee-gwa" className="text-red-700 dark:text-red-400 underline font-medium">Transferee GWA Evaluator</Link> to see if your GWA qualifies.
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

                    <div className="mt-10 bg-red-700 text-white rounded-2xl p-6 text-center">
                        <h3 className="text-xl font-bold mb-2">Planning to Transfer or Apply to UP?</h3>
                        <p className="text-red-100 mb-4">Check if your GWA meets UP's transferee requirements and see other top Philippine universities you qualify for.</p>
                        <Link to="/tools/transferee-gwa" className="inline-block bg-white text-red-700 font-bold px-6 py-3 rounded-xl hover:bg-red-50 transition-colors">Check Transfer Eligibility →</Link>
                    </div>
                </div>
            </div>
        </>
    );
};
export default GwaCalculatorUP;
