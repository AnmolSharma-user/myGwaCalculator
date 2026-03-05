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

// DLSU uses a 4.0 scale; we compute GWA equivalent on the fly
const DLSU_SCALE = [
    { fourPt: "4.00", phGwa: "1.00", desc: "Excellent" },
    { fourPt: "3.50", phGwa: "1.25", desc: "Very Good" },
    { fourPt: "3.00", phGwa: "1.50", desc: "Good" },
    { fourPt: "2.50", phGwa: "1.75", desc: "Above Average" },
    { fourPt: "2.00", phGwa: "2.00", desc: "Average" },
    { fourPt: "1.50", phGwa: "2.50", desc: "Below Average" },
    { fourPt: "1.00", phGwa: "3.00", desc: "Passing" },
    { fourPt: "0.00", phGwa: "5.00", desc: "Failing" },
];

// Map DLSU 4.0 grade to PH 1-5 GWA equivalent for calculation
const dlsuToGwa = (fourPt: number): number => {
    if (fourPt >= 4.00) return 1.00;
    if (fourPt >= 3.50) return 1.25;
    if (fourPt >= 3.00) return 1.50;
    if (fourPt >= 2.50) return 1.75;
    if (fourPt >= 2.00) return 2.00;
    if (fourPt >= 1.50) return 2.50;
    if (fourPt >= 1.00) return 3.00;
    return 5.00;
};

const GwaCalculatorDLSU = () => {
    const [subjects, setSubjects] = useState<Subject[]>([
        { id: 1, name: "", grade: "", units: "" },
        { id: 2, name: "", grade: "", units: "" },
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
            if (!isNaN(g) && !isNaN(u) && u > 0) { const gwaEq = dlsuToGwa(g); pts += gwaEq * u; units += u; }
        });
        if (units === 0) return;
        const gwa = pts / units;
        let honor = ""; let colorClass = "";
        if (gwa <= 1.20) { honor = "High Honors (Magna Honor Roll)"; colorClass = "text-yellow-600"; }
        else if (gwa <= 1.45) { honor = "Magna Honor Roll Track"; colorClass = "text-gray-500"; }
        else if (gwa <= 1.75) { honor = "Cum Laude Track"; colorClass = "text-amber-700"; }
        else if (gwa <= 2.00) { honor = "Dean's List eligible"; colorClass = "text-blue-600"; }
        else if (gwa <= 3.00) { honor = "Good Standing"; colorClass = "text-green-600"; }
        else { honor = "At Risk"; colorClass = "text-red-600"; }
        setResult({ gwa, units, honor, colorClass });
    };

    const faqData = [
        { q: "What grading system does DLSU use?", a: "De La Salle University uses a 4.0 grading scale where 4.00 is the highest grade (Excellent) and 0.00 is failing. Unlike most Philippine universities that use a 1.0–5.0 scale, DLSU's system is similar to the American GPA system. The passing grade at DLSU is 1.00 (equivalent to 3.00 in the PH scale)." },
        { q: "How do I convert my DLSU grade to Philippine GWA?", a: "The approximate conversion is: 4.00 = 1.00 GWA, 3.50 = 1.25, 3.00 = 1.50, 2.50 = 1.75, 2.00 = 2.00, 1.50 = 2.50, 1.00 = 3.00, 0.00 = 5.00. This calculator automatically converts your DLSU grades to the standard Philippine GWA scale for comparison." },
        { q: "What is the Magna Honor Roll at DLSU?", a: "The Magna Honor Roll equivalent at DLSU recognizes students with a term GWA of 1.20 or better (4.00 equivalent), no failing grades, and satisfactory conduct standing. It is awarded each term (trimester) and is a major academic distinction at La Salle." },
        { q: "What GWA do I need for Latin Honors at DLSU?", a: "DLSU awards Latin Honors at graduation based on your cumulative GWA: Cum Laude (≤ 1.75), Magna Cum Laude (≤ 1.45), and Summa Cum Laude (≤ 1.20), with no failing grades and completion within the prescribed period." },
    ];

    return (
        <>
            <Helmet>
                <title>DLSU GWA Calculator — De La Salle University Grading System 2025 | mygwacalculator.com</title>
                <meta name="description" content="Free GWA calculator for De La Salle University (DLSU) students. Convert DLSU 4.0 grades to Philippine GWA, check Magna Honor Roll eligibility, and understand DLSU Latin Honors requirements." />
                <meta name="keywords" content="DLSU GWA calculator, De La Salle grading system Philippines, DLSU grade conversion GWA, DLSU magna honor roll GWA, DLSU Latin honors requirements" />
                <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
                <link rel="canonical" href="https://mygwacalculator.com/gwa-calculator-dlsu" />
                <meta property="og:title" content="DLSU GWA Calculator — De La Salle University Grading System" />
                <meta property="og:description" content="Convert DLSU 4.0 grades to Philippine GWA. Check Magna Honor Roll and Latin Honors eligibility instantly." />
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org", "@type": "SoftwareApplication",
                    "name": "DLSU GWA Calculator — De La Salle University",
                    "applicationCategory": "EducationalApplication", "operatingSystem": "Any",
                    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "PHP" },
                    "author": { "@type": "Person", "name": "Anmol Gautam", "url": "https://mygwacalculator.com/about" }
                })}</script>
            </Helmet>

            <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
                <div className="bg-gradient-to-br from-green-700 via-green-800 to-emerald-900 text-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mt-14">
                        <Link to="/tools" className="inline-flex items-center text-white/80 hover:text-white text-sm mb-6">← All Tools</Link>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <Badge className="bg-white/20 text-white border-white/30">De La Salle University</Badge>
                            <Badge variant="outline" className="border-white/30 text-white">4.0 Scale</Badge>
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">DLSU GWA Calculator</h1>
                        <p className="text-green-100 text-lg max-w-2xl">Compute your GWA using De La Salle University's 4.0 grading scale. Automatically converts to the Philippine GWA scale for scholarships and transfer comparison.</p>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                    <Card className="border-0 shadow-2xl bg-white dark:bg-gray-800 mb-8">
                        <CardHeader className="border-b border-gray-100 dark:border-gray-700">
                            <CardTitle className="flex items-center gap-2 text-xl text-gray-900 dark:text-white">
                                <Calculator className="h-5 w-5 text-green-700" /> DLSU GWA Calculator
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-6 space-y-5">
                            <div className="space-y-3">
                                <div className="grid grid-cols-12 gap-2 text-xs font-semibold text-gray-500 px-1">
                                    <div className="col-span-5">Subject</div>
                                    <div className="col-span-4">Grade (4.0 Scale)</div>
                                    <div className="col-span-2">Units</div>
                                    <div className="col-span-1"></div>
                                </div>
                                {subjects.map(sub => (
                                    <div key={sub.id} className="grid grid-cols-12 gap-2 items-center">
                                        <input className="col-span-5 px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-600 text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-700"
                                            value={sub.name} onChange={e => updateSubject(sub.id, "name", e.target.value)} placeholder="e.g. MATH101M" />
                                        <div className="col-span-4">
                                            <select className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-600 text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-700"
                                                value={sub.grade} onChange={e => updateSubject(sub.id, "grade", e.target.value)}>
                                                <option value="">Select grade</option>
                                                {["4.00", "3.50", "3.00", "2.50", "2.00", "1.50", "1.00", "0.00"].map(g => (
                                                    <option key={g} value={g}>{g}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <input className="col-span-2 px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-600 text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-700"
                                            type="number" min="1" value={sub.units}
                                            onChange={e => updateSubject(sub.id, "units", e.target.value)} placeholder="Units" />
                                        <button className="col-span-1 flex justify-center text-red-400 hover:text-red-600" onClick={() => removeSubject(sub.id)}>
                                            <Trash2 className="h-4 w-4" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                            <Button variant="outline" onClick={addSubject} className="border-green-200 text-green-700 hover:bg-green-50 w-full">
                                <Plus className="h-4 w-4 mr-2" /> Add Subject
                            </Button>
                            <Button onClick={calculate} className="w-full bg-green-700 hover:bg-green-800 text-white py-3 text-base font-semibold rounded-xl">
                                Compute DLSU GWA
                            </Button>
                            {result && (
                                <div className="rounded-2xl p-6 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700">
                                    <div className="grid grid-cols-3 gap-4 text-center">
                                        <div><p className="text-xs text-gray-500 mb-1">PH GWA Equivalent</p><p className="text-4xl font-bold text-green-700 dark:text-green-400">{result.gwa.toFixed(2)}</p></div>
                                        <div><p className="text-xs text-gray-500 mb-1">Total Units</p><p className="text-4xl font-bold text-gray-700 dark:text-gray-300">{result.units}</p></div>
                                        <div><p className="text-xs text-gray-500 mb-1">Status</p><p className={`text-base font-bold ${result.colorClass}`}>{result.honor}</p></div>
                                    </div>
                                </div>
                            )}
                        </CardContent>
                    </Card>

                    <Card className="border-0 shadow-xl bg-white dark:bg-gray-800 mb-8">
                        <CardHeader><CardTitle className="text-xl font-bold text-gray-900 dark:text-white">DLSU Grade Scale Conversion Table</CardTitle></CardHeader>
                        <CardContent className="p-6">
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse text-sm">
                                    <thead><tr className="bg-green-50 dark:bg-gray-700">
                                        {["DLSU Grade (4.0)", "PH GWA Equivalent", "Description"].map(h => (
                                            <th key={h} className="px-4 py-3 text-left border border-gray-200 dark:border-gray-600 font-bold text-gray-900 dark:text-white">{h}</th>
                                        ))}
                                    </tr></thead>
                                    <tbody>
                                        {DLSU_SCALE.map((row, i) => (
                                            <tr key={i} className={i % 2 === 0 ? "bg-white dark:bg-gray-800" : "bg-gray-50 dark:bg-gray-900"}>
                                                <td className="px-4 py-2 border border-gray-200 dark:border-gray-600 font-bold text-gray-900 dark:text-white">{row.fourPt}</td>
                                                <td className="px-4 py-2 border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300">{row.phGwa}</td>
                                                <td className="px-4 py-2 border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300">{row.desc}</td>
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
                                    De La Salle University Grading System: Understanding DLSU's 4.0 Scale, Honor Roll, and Latin Honors
                                </h2>
                                <p className="text-gray-700 dark:text-gray-300 mb-5 text-lg leading-relaxed">
                                    <strong>De La Salle University (DLSU)</strong> is unique among Philippine universities for using a 4.0-based grading scale rather than the standard 1.0–5.0 system. This can be confusing for students comparing GWAs across schools, especially for scholarship applications and transfer eligibility. This guide explains the DLSU grading system, its honors criteria, and how to accurately convert DLSU grades to the Philippine GWA scale.
                                </p>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">DLSU Academic Honor Criteria</h3>
                                <div className="grid sm:grid-cols-2 gap-4 mb-5">
                                    {[
                                        { t: "Magna Honor Roll (Per Term)", d: "Requires term GWA of 4.00 in DLSU scale (≡ 1.00 PH GWA), no failing grades, satisfactory conduct rating. Awarded every trimester." },
                                        { t: "Dean's List (Per Term)", d: "Generally a term GWA of 3.00+ (≡ 1.50 PH GWA), no failing grades. Criteria may vary by college." },
                                        { t: "Latin Honors (Graduation)", d: "Based on cumulative GWA in PH equivalent: Cum Laude ≤ 1.75, Magna ≤ 1.45, Summa ≤ 1.20. No failing grades throughout." },
                                        { t: "Academic Excellence Award", d: "Awarded to students with consistently outstanding academic performance throughout their program." },
                                    ].map((item, i) => (
                                        <div key={i} className="bg-green-50 dark:bg-gray-700 rounded-xl p-4 border border-green-100 dark:border-gray-600">
                                            <h4 className="font-bold text-green-800 dark:text-green-300 mb-1 text-sm">{item.t}</h4>
                                            <p className="text-xs text-gray-600 dark:text-gray-400">{item.d}</p>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-gray-700 dark:text-gray-300">
                                    Use our <Link to="/tools/latin-honors-tracker" className="text-green-700 dark:text-green-400 underline font-medium">Latin Honors Tracker</Link> to monitor your progress toward graduation with honors. To compare your transferred credits to DLSU's requirements, visit our <Link to="/tools/transferee-gwa" className="text-green-700 dark:text-green-400 underline font-medium">Transferee GWA Evaluator</Link>.
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

                    <div className="mt-10 bg-green-700 text-white rounded-2xl p-6 text-center">
                        <h3 className="text-xl font-bold mb-2">Track Your Cumulative GWA Across Trimesters</h3>
                        <p className="text-green-100 mb-4">DLSU uses trimesters — track all three terms per year with our Cumulative GWA Tracker.</p>
                        <Link to="/tools/cumulative-gwa-tracker" className="inline-block bg-white text-green-700 font-bold px-6 py-3 rounded-xl hover:bg-green-50 transition-colors">Open Cumulative GWA Tracker →</Link>
                    </div>
                </div>
            </div>
        </>
    );
};
export default GwaCalculatorDLSU;
