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

const UST_SCALE = [
    { grade: "1.00", pct: "97–100%", desc: "Excellent" },
    { grade: "1.25", pct: "94–96%", desc: "Superior" },
    { grade: "1.50", pct: "91–93%", desc: "Very Good" },
    { grade: "1.75", pct: "88–90%", desc: "Good" },
    { grade: "2.00", pct: "85–87%", desc: "Good" },
    { grade: "2.25", pct: "82–84%", desc: "Satisfactory" },
    { grade: "2.50", pct: "79–81%", desc: "Satisfactory" },
    { grade: "2.75", pct: "76–78%", desc: "Passing" },
    { grade: "3.00", pct: "75%", desc: "Passing" },
    { grade: "5.00", pct: "Below 75%", desc: "Failing" },
];

const GwaCalculatorUST = () => {
    const [subjects, setSubjects] = useState<Subject[]>([{ id: 1, name: "", grade: "", units: "" }, { id: 2, name: "", grade: "", units: "" }]);
    const [result, setResult] = useState<null | { gwa: number; units: number; honor: string; colorClass: string }>(null);

    const addSubject = () => setSubjects(s => [...s, { id: Date.now(), name: "", grade: "", units: "" }]);
    const removeSubject = (id: number) => setSubjects(s => s.filter(x => x.id !== id));
    const updateSubject = (id: number, field: keyof Subject, val: string) => setSubjects(s => s.map(x => x.id === id ? { ...x, [field]: val } : x));

    const calculate = () => {
        let pts = 0; let units = 0;
        subjects.forEach(s => { const g = parseFloat(s.grade); const u = parseFloat(s.units); if (!isNaN(g) && !isNaN(u) && u > 0) { pts += g * u; units += u; } });
        if (units === 0) return;
        const gwa = pts / units;
        let honor = ""; let colorClass = "";
        if (gwa <= 1.20) { honor = "Summa Cum Laude Track"; colorClass = "text-yellow-600"; }
        else if (gwa <= 1.45) { honor = "Magna Cum Laude Track"; colorClass = "text-gray-500"; }
        else if (gwa <= 1.75) { honor = "Cum Laude Track"; colorClass = "text-amber-700"; }
        else if (gwa <= 2.00) { honor = "Dean's List Eligible"; colorClass = "text-blue-600"; }
        else if (gwa <= 3.00) { honor = "Good Standing"; colorClass = "text-green-600"; }
        else { honor = "Academic Risk"; colorClass = "text-red-600"; }
        setResult({ gwa, units, honor, colorClass });
    };

    const faqData = [
        { q: "What is the UST grading system?", a: "The University of Santo Tomas (UST) uses a 1.0–5.0 grading scale similar to most Philippine universities. A grade of 1.00 is the highest (97–100%) and 5.00 is failing (below 75%). The passing grade is 3.00 (75%). UST also uses INC for Incomplete and W for Withdrawal." },
        { q: "What GWA do I need to be on the UST Dean's List?", a: "UST Dean's List requirements vary by Faculty. Generally, you need a semester GWA of 1.75 or better with no failing grades and satisfactory conduct. Some Faculties have a stricter cutoff of 1.50. Always check with your specific Faculty's Office for exact requirements." },
        { q: "Does UST use percentage grades or numeric grades?", a: "UST uses numeric grades (1.0–5.0 scale) which correspond to percentage equivalents. While professors may initially compute scores as percentages, the final grade recorded and used for GWA computation is the numeric grade (e.g., 1.75, 2.00)." },
        { q: "How does UST compute GWA for Latin Honors?", a: "UST computes cumulative GWA the same way as other Philippine universities — using the weighted average formula (Grade × Units) / Total Units. Latin Honors cutoffs at UST: Cum Laude ≤ 1.75, Magna Cum Laude ≤ 1.45, Summa Cum Laude ≤ 1.20." },
    ];

    return (
        <>
            <Helmet>
                <title>UST GWA Calculator — University of Santo Tomas Grading System 2025 | mygwacalculator.com</title>
                <meta name="description" content="Free GWA calculator for University of Santo Tomas (UST) students. Understand the UST grading system, Dean's List requirements, Latin Honors cutoffs, and compute your GWA accurately." />
                <meta name="keywords" content="UST GWA calculator, University of Santo Tomas grading system, UST Dean's List GWA, UST Latin honors requirements Philippines, UST grade scale 1 to 5" />
                <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
                <link rel="canonical" href="https://mygwacalculator.com/gwa-calculator-ust" />
                <meta property="og:title" content="UST GWA Calculator — University of Santo Tomas Grading System" />
                <meta property="og:description" content="Compute your GWA using the UST grading scale. Check Dean's List and Latin Honors eligibility." />
                <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "SoftwareApplication", "name": "UST GWA Calculator", "applicationCategory": "EducationalApplication", "operatingSystem": "Any", "offers": { "@type": "Offer", "price": "0", "priceCurrency": "PHP" }, "author": { "@type": "Person", "name": "Anmol Gautam", "url": "https://mygwacalculator.com/about" } })}</script>
            </Helmet>
            <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
                <div className="bg-gradient-to-br from-yellow-600 via-yellow-700 to-amber-800 text-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mt-14">
                        <Link to="/tools" className="inline-flex items-center text-white/80 hover:text-white text-sm mb-6">← All Tools</Link>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <Badge className="bg-white/20 text-white border-white/30">University of Santo Tomas</Badge>
                            <Badge variant="outline" className="border-white/30 text-white">1.0–5.0 Scale</Badge>
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">UST GWA Calculator</h1>
                        <p className="text-yellow-100 text-lg max-w-2xl">Compute your GWA using the University of Santo Tomas grading scale. Check Dean's List and Latin Honors eligibility instantly.</p>
                    </div>
                </div>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                    <Card className="border-0 shadow-2xl bg-white dark:bg-gray-800 mb-8">
                        <CardHeader className="border-b border-gray-100 dark:border-gray-700">
                            <CardTitle className="flex items-center gap-2 text-xl text-gray-900 dark:text-white"><Calculator className="h-5 w-5 text-yellow-600" /> UST GWA Calculator</CardTitle>
                        </CardHeader>
                        <CardContent className="p-6 space-y-5">
                            <div className="space-y-3">
                                <div className="grid grid-cols-12 gap-2 text-xs font-semibold text-gray-500 px-1">
                                    <div className="col-span-5">Subject</div><div className="col-span-4">Grade (1–5)</div><div className="col-span-2">Units</div><div className="col-span-1"></div>
                                </div>
                                {subjects.map(sub => (
                                    <div key={sub.id} className="grid grid-cols-12 gap-2 items-center">
                                        <input className="col-span-5 px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-600 text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-yellow-600" value={sub.name} onChange={e => updateSubject(sub.id, "name", e.target.value)} placeholder="e.g. THEO 1" />
                                        <div className="col-span-4">
                                            <select className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-600 text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-yellow-600" value={sub.grade} onChange={e => updateSubject(sub.id, "grade", e.target.value)}>
                                                <option value="">Select</option>
                                                {["1.00", "1.25", "1.50", "1.75", "2.00", "2.25", "2.50", "2.75", "3.00", "5.00"].map(g => <option key={g} value={g}>{g}</option>)}
                                            </select>
                                        </div>
                                        <input className="col-span-2 px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-600 text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-yellow-600" type="number" min="1" value={sub.units} onChange={e => updateSubject(sub.id, "units", e.target.value)} placeholder="Units" />
                                        <button className="col-span-1 flex justify-center text-red-400 hover:text-red-600" onClick={() => removeSubject(sub.id)}><Trash2 className="h-4 w-4" /></button>
                                    </div>
                                ))}
                            </div>
                            <Button variant="outline" onClick={addSubject} className="border-yellow-300 text-yellow-700 hover:bg-yellow-50 w-full"><Plus className="h-4 w-4 mr-2" /> Add Subject</Button>
                            <Button onClick={calculate} className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-3 text-base font-semibold rounded-xl">Compute UST GWA</Button>
                            {result && (
                                <div className="rounded-2xl p-6 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700">
                                    <div className="grid grid-cols-3 gap-4 text-center">
                                        <div><p className="text-xs text-gray-500 mb-1">Your GWA</p><p className="text-4xl font-bold text-yellow-700">{result.gwa.toFixed(2)}</p></div>
                                        <div><p className="text-xs text-gray-500 mb-1">Total Units</p><p className="text-4xl font-bold text-gray-700 dark:text-gray-300">{result.units}</p></div>
                                        <div><p className="text-xs text-gray-500 mb-1">Status</p><p className={`text-base font-bold ${result.colorClass}`}>{result.honor}</p></div>
                                    </div>
                                </div>
                            )}
                        </CardContent>
                    </Card>

                    <Card className="border-0 shadow-xl bg-white dark:bg-gray-800 mb-8">
                        <CardHeader><CardTitle className="text-xl font-bold text-gray-900 dark:text-white">UST Grade Scale</CardTitle></CardHeader>
                        <CardContent className="p-6">
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse text-sm">
                                    <thead><tr className="bg-yellow-50 dark:bg-gray-700">{["Grade", "Percentage", "Description"].map(h => <th key={h} className="px-4 py-3 text-left border border-gray-200 dark:border-gray-600 font-bold text-gray-900 dark:text-white">{h}</th>)}</tr></thead>
                                    <tbody>{UST_SCALE.map((row, i) => <tr key={i} className={i % 2 === 0 ? "bg-white dark:bg-gray-800" : "bg-gray-50 dark:bg-gray-900"}><td className="px-4 py-2 border border-gray-200 dark:border-gray-600 font-bold text-gray-900 dark:text-white">{row.grade}</td><td className="px-4 py-2 border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300">{row.pct}</td><td className="px-4 py-2 border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300">{row.desc}</td></tr>)}</tbody>
                                </table>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border-0 shadow-xl bg-white dark:bg-gray-800 mb-8">
                        <CardContent className="p-6 sm:p-10">
                            <article>
                                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">University of Santo Tomas Grading System: Dean's List, UST Honors, and GWA Computation</h2>
                                <p className="text-gray-700 dark:text-gray-300 mb-5 text-lg leading-relaxed">The <strong>University of Santo Tomas (UST)</strong>, founded in 1611 and the oldest university in Asia, uses a 1.0–5.0 numeric grading scale with 3.00 as the minimum passing grade. Understanding UST's academic standards is essential for Thomasians aiming for Dean's List recognition, Latin Honors, board exam eligibility, and scholarship maintenance.</p>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">UST Dean's List Requirements by Faculty</h3>
                                <p className="text-gray-700 dark:text-gray-300 mb-4">UST's Dean's List criteria vary by faculty. The most common requirements include:</p>
                                <ul className="space-y-2 mb-5 text-gray-700 dark:text-gray-300">{["Semester GWA of 1.75 or better (some faculties require 1.50)", "No failing grades (5.00) in the semester", "No INC (Incomplete) grades", "Good conduct standing as certified by the prefect of students", "Must be a regular student (full unit load)"].map((item, i) => <li key={i} className="flex items-start gap-2"><span className="w-2 h-2 rounded-full bg-yellow-500 mt-2 flex-shrink-0" />{item}</li>)}</ul>
                                <p className="text-gray-700 dark:text-gray-300">Track your UST GWA over time with our <Link to="/tools/cumulative-gwa-tracker" className="text-yellow-700 dark:text-yellow-400 underline font-medium">Cumulative GWA Tracker</Link>. Planning to transfer to UST? Check our <Link to="/tools/transferee-gwa" className="text-yellow-700 dark:text-yellow-400 underline font-medium">Transferee GWA Evaluator</Link> to see if you meet UST's transfer requirements.</p>
                            </article>
                        </CardContent>
                    </Card>

                    <AuthorCard variant="full" />

                    <Card className="mt-8 border-0 shadow-xl bg-white dark:bg-gray-800">
                        <CardHeader><CardTitle className="text-xl font-bold text-gray-900 dark:text-white">Frequently Asked Questions</CardTitle></CardHeader>
                        <CardContent className="p-6 sm:p-8">
                            <Accordion type="single" collapsible className="w-full">
                                {faqData.map((faq, i) => (<AccordionItem key={i} value={`item-${i}`}><AccordionTrigger className="text-gray-900 dark:text-white text-left">{faq.q}</AccordionTrigger><AccordionContent className="text-gray-600 dark:text-gray-300">{faq.a}</AccordionContent></AccordionItem>))}
                            </Accordion>
                        </CardContent>
                    </Card>
                    <div className="mt-10 bg-yellow-600 text-white rounded-2xl p-6 text-center">
                        <h3 className="text-xl font-bold mb-2">Aiming for Latin Honors at UST?</h3>
                        <p className="text-yellow-100 mb-4">Use our Latin Honors Tracker to see exactly what GWA you need each semester for Cum Laude, Magna, or Summa at graduation.</p>
                        <Link to="/tools/latin-honors-tracker" className="inline-block bg-white text-yellow-700 font-bold px-6 py-3 rounded-xl hover:bg-yellow-50 transition-colors">Open Latin Honors Tracker →</Link>
                    </div>
                </div>
            </div>
        </>
    );
};
export default GwaCalculatorUST;
