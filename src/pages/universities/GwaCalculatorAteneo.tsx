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

// Ateneo Loyola Schools uses letter grades mapped to quality points
const ATENEO_SCALE = [
    { letter: "A", gpa: "4.00", phGwa: "1.00", desc: "Excellent" },
    { letter: "B+", gpa: "3.50", phGwa: "1.25", desc: "Very Good" },
    { letter: "B", gpa: "3.00", phGwa: "1.50", desc: "Good" },
    { letter: "C+", gpa: "2.50", phGwa: "1.75", desc: "Above Average" },
    { letter: "C", gpa: "2.00", phGwa: "2.25", desc: "Average / Passing" },
    { letter: "D", gpa: "1.00", phGwa: "3.00", desc: "Conditional" },
    { letter: "F", gpa: "0.00", phGwa: "5.00", desc: "Failing" },
];

const letterToGwa = (letter: string): number => {
    const map: Record<string, number> = { "A": 1.00, "B+": 1.25, "B": 1.50, "C+": 1.75, "C": 2.25, "D": 3.00, "F": 5.00 };
    return map[letter] ?? NaN;
};

const GwaCalculatorAteneo = () => {
    const [subjects, setSubjects] = useState<Subject[]>([{ id: 1, name: "", grade: "", units: "" }, { id: 2, name: "", grade: "", units: "" }]);
    const [result, setResult] = useState<null | { gwa: number; gpa: number; units: number; honor: string; colorClass: string }>(null);

    const addSubject = () => setSubjects(s => [...s, { id: Date.now(), name: "", grade: "", units: "" }]);
    const removeSubject = (id: number) => setSubjects(s => s.filter(x => x.id !== id));
    const updateSubject = (id: number, field: keyof Subject, val: string) => setSubjects(s => s.map(x => x.id === id ? { ...x, [field]: val } : x));

    const calculate = () => {
        let ptsGwa = 0; let ptsGpa = 0; let units = 0;
        subjects.forEach(s => {
            const u = parseFloat(s.units);
            const gwaEq = letterToGwa(s.grade);
            const row = ATENEO_SCALE.find(r => r.letter === s.grade);
            const gpaEq = row ? parseFloat(row.gpa) : NaN;
            if (!isNaN(gwaEq) && !isNaN(u) && u > 0) { ptsGwa += gwaEq * u; ptsGpa += gpaEq * u; units += u; }
        });
        if (units === 0) return;
        const gwa = ptsGwa / units;
        const gpa = ptsGpa / units;
        let honor = ""; let colorClass = "";
        if (gwa <= 1.20) { honor = "Summa Cum Laude Track"; colorClass = "text-yellow-600"; }
        else if (gwa <= 1.45) { honor = "Magna Cum Laude Track"; colorClass = "text-gray-500"; }
        else if (gwa <= 1.75) { honor = "Cum Laude Track"; colorClass = "text-amber-700"; }
        else if (gwa <= 2.00) { honor = "Dean's List Eligible"; colorClass = "text-blue-600"; }
        else if (gwa <= 3.00) { honor = "Good Standing"; colorClass = "text-green-600"; }
        else { honor = "Academic Risk"; colorClass = "text-red-600"; }
        setResult({ gwa, gpa, units, honor, colorClass });
    };

    const faqData = [
        { q: "What grading system does Ateneo use?", a: "Ateneo de Manila University (Loyola Schools) uses a letter-grade system (A, B+, B, C+, C, D, F) mapped to quality points on a 4.0 GPA scale. This is different from most Philippine universities that use a 1.0–5.0 numeric grade. For purposes of scholarship applications and transfer, Ateneo grades are converted to the Philippine GWA scale." },
        { q: "What GPA do I need for the Dean's List at Ateneo?", a: "At Ateneo de Manila's Loyola Schools, the Dean's List typically requires a trimestral/semestral GPA equivalent to a B or better average (3.00 on the 4.0 scale), which corresponds approximately to a 1.50 GWA equivalent. Exact requirements vary by school within Ateneo." },
        { q: "How does Ateneo compute cumulative GPA?", a: "Ateneo computes cumulative GPA using the weighted average of quality points (A=4.00, B+=3.50, B=3.00, etc.) multiplied by units, divided by total units. For comparison with Philippine GWA, an approximate conversion table is used." },
        { q: "What Latin Honors GWA equivalent does Ateneo require?", a: "Ateneo's Latin Honors roughly correspond to: Summa Cum Laude (GPA ≥ 3.80 / GWA ≤ 1.20), Magna Cum Laude (GPA ≥ 3.50 / GWA ≤ 1.45), Cum Laude (GPA ≥ 3.00 / GWA ≤ 1.75). No failing grade, no conduct violation, within the prescribed program period." },
    ];

    return (
        <>
            <Helmet>
                <title>Ateneo GWA Calculator — Ateneo de Manila Grading System & GPA Conversion 2025 | mygwacalculator.com</title>
                <meta name="description" content="Free GWA calculator for Ateneo de Manila University students. Convert Ateneo letter grades (A, B+, B, C+) to Philippine GWA, check Dean's List and Latin Honors eligibility, and understand Ateneo's grading system." />
                <meta name="keywords" content="Ateneo GWA calculator, Ateneo de Manila grading system, Ateneo letter grade GWA conversion, Ateneo GPA Philippines, Ateneo Dean's List requirement" />
                <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
                <link rel="canonical" href="https://mygwacalculator.com/gwa-calculator-ateneo" />
                <meta property="og:title" content="Ateneo GWA Calculator — Ateneo de Manila Grading System" />
                <meta property="og:description" content="Convert Ateneo letter grades to Philippine GWA. Check Dean's List and Latin Honors eligibility instantly." />
                <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "SoftwareApplication", "name": "Ateneo GWA Calculator", "applicationCategory": "EducationalApplication", "operatingSystem": "Any", "offers": { "@type": "Offer", "price": "0", "priceCurrency": "PHP" }, "author": { "@type": "Person", "name": "Anmol Gautam", "url": "https://mygwacalculator.com/about" } })}</script>
            </Helmet>
            <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
                <div className="bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 text-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mt-14">
                        <Link to="/tools" className="inline-flex items-center text-white/80 hover:text-white text-sm mb-6">← All Tools</Link>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <Badge className="bg-white/20 text-white border-white/30">Ateneo de Manila</Badge>
                            <Badge variant="outline" className="border-white/30 text-white">Letter Grade System</Badge>
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Ateneo GWA Calculator</h1>
                        <p className="text-blue-100 text-lg max-w-2xl">Convert your Ateneo letter grades (A, B+, B, C+, C) to Philippine GWA. Check Dean's List and Latin Honors eligibility in seconds.</p>
                    </div>
                </div>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                    <Card className="border-0 shadow-2xl bg-white dark:bg-gray-800 mb-8">
                        <CardHeader className="border-b border-gray-100 dark:border-gray-700">
                            <CardTitle className="flex items-center gap-2 text-xl text-gray-900 dark:text-white"><Calculator className="h-5 w-5 text-blue-700" /> Ateneo GWA Calculator</CardTitle>
                        </CardHeader>
                        <CardContent className="p-6 space-y-5">
                            <div className="space-y-3">
                                <div className="grid grid-cols-12 gap-2 text-xs font-semibold text-gray-500 px-1">
                                    <div className="col-span-5">Subject</div><div className="col-span-4">Letter Grade</div><div className="col-span-2">Units</div><div className="col-span-1"></div>
                                </div>
                                {subjects.map(sub => (
                                    <div key={sub.id} className="grid grid-cols-12 gap-2 items-center">
                                        <input className="col-span-5 px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-600 text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-700" value={sub.name} onChange={e => updateSubject(sub.id, "name", e.target.value)} placeholder="e.g. MATH 11" />
                                        <div className="col-span-4">
                                            <select className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-600 text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-700" value={sub.grade} onChange={e => updateSubject(sub.id, "grade", e.target.value)}>
                                                <option value="">Select</option>
                                                {ATENEO_SCALE.map(r => <option key={r.letter} value={r.letter}>{r.letter} ({r.gpa} GPA)</option>)}
                                            </select>
                                        </div>
                                        <input className="col-span-2 px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-600 text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-700" type="number" min="1" value={sub.units} onChange={e => updateSubject(sub.id, "units", e.target.value)} placeholder="Units" />
                                        <button className="col-span-1 flex justify-center text-red-400 hover:text-red-600" onClick={() => removeSubject(sub.id)}><Trash2 className="h-4 w-4" /></button>
                                    </div>
                                ))}
                            </div>
                            <Button variant="outline" onClick={addSubject} className="border-blue-200 text-blue-700 hover:bg-blue-50 w-full"><Plus className="h-4 w-4 mr-2" /> Add Subject</Button>
                            <Button onClick={calculate} className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 text-base font-semibold rounded-xl">Compute Ateneo GWA</Button>
                            {result && (
                                <div className="rounded-2xl p-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700">
                                    <div className="grid grid-cols-4 gap-4 text-center">
                                        <div><p className="text-xs text-gray-500 mb-1">PH GWA</p><p className="text-3xl font-bold text-blue-700 dark:text-blue-400">{result.gwa.toFixed(2)}</p></div>
                                        <div><p className="text-xs text-gray-500 mb-1">GPA (4.0)</p><p className="text-3xl font-bold text-indigo-700 dark:text-indigo-400">{result.gpa.toFixed(2)}</p></div>
                                        <div><p className="text-xs text-gray-500 mb-1">Units</p><p className="text-3xl font-bold text-gray-700 dark:text-gray-300">{result.units}</p></div>
                                        <div><p className="text-xs text-gray-500 mb-1">Status</p><p className={`text-sm font-bold ${result.colorClass}`}>{result.honor}</p></div>
                                    </div>
                                </div>
                            )}
                        </CardContent>
                    </Card>

                    <Card className="border-0 shadow-xl bg-white dark:bg-gray-800 mb-8">
                        <CardHeader><CardTitle className="text-xl font-bold text-gray-900 dark:text-white">Ateneo Letter Grade → GWA Conversion Table</CardTitle></CardHeader>
                        <CardContent className="p-6">
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse text-sm">
                                    <thead><tr className="bg-blue-50 dark:bg-gray-700">{["Letter Grade", "GPA (4.0)", "PH GWA Equivalent", "Description"].map(h => <th key={h} className="px-4 py-3 text-left border border-gray-200 dark:border-gray-600 font-bold text-gray-900 dark:text-white">{h}</th>)}</tr></thead>
                                    <tbody>{ATENEO_SCALE.map((row, i) => <tr key={i} className={i % 2 === 0 ? "bg-white dark:bg-gray-800" : "bg-gray-50 dark:bg-gray-900"}><td className="px-4 py-2 border border-gray-200 dark:border-gray-600 font-bold text-gray-900 dark:text-white">{row.letter}</td><td className="px-4 py-2 border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300">{row.gpa}</td><td className="px-4 py-2 border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300">{row.phGwa}</td><td className="px-4 py-2 border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300">{row.desc}</td></tr>)}</tbody>
                                </table>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border-0 shadow-xl bg-white dark:bg-gray-800 mb-8">
                        <CardContent className="p-6 sm:p-10">
                            <article>
                                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">Ateneo de Manila University Grading System: Letter Grades, GPA, and Philippine GWA Conversion</h2>
                                <p className="text-gray-700 dark:text-gray-300 mb-5 text-lg leading-relaxed"><strong>Ateneo de Manila University</strong>, particularly its Loyola Schools (undergraduate programs), uses a letter grading system (A, B+, B, C+, C, D, F) rather than the 1.0–5.0 numeric scale used by most Philippine universities. This makes Ateneo unique — and it requires special conversion when comparing Ateneo student GPAs to the standard Philippine GWA used for scholarships, transfer applications, and board exams.</p>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Key Differences in the Ateneo System</h3>
                                <ul className="space-y-2 mb-5 text-gray-700 dark:text-gray-300">{["Ateneo uses quality points on a 4.0 scale rather than the PH 1.0–5.0 scale", "The passing grade at Ateneo is C (2.00 GPA), not D or F", "A grade of D (1.00) is considered 'conditional' — similar to UP's 4.00, requiring further remediation", "Final examination policy at Ateneo may differ by department — some exempt A students from finals", "Ateneo's trimestral calendar (3 terms per year) means GWA is computed across 3 terms, unlike semestral schools"].map((item, i) => <li key={i} className="flex items-start gap-2"><span className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0" />{item}</li>)}</ul>
                                <p className="text-gray-700 dark:text-gray-300">For Latin Honors tracking at Ateneo, use our <Link to="/tools/latin-honors-tracker" className="text-blue-700 dark:text-blue-400 underline font-medium">Latin Honors Tracker</Link> (enter the GWA equivalent from the table above). To compare your Ateneo GPA to what's needed for scholarship applications across the Philippines, see our <Link to="/tools/scholarship-eligibility" className="text-blue-700 dark:text-blue-400 underline font-medium">Scholarship Eligibility Checker</Link>.</p>
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
                    <div className="mt-10 bg-blue-700 text-white rounded-2xl p-6 text-center">
                        <h3 className="text-xl font-bold mb-2">Track Your Cumulative GWA Across All Terms</h3>
                        <p className="text-blue-100 mb-4">Ateneo runs on trimesters — track all your terms in our Cumulative GWA Tracker using GWA equivalents from the conversion table above.</p>
                        <Link to="/tools/cumulative-gwa-tracker" className="inline-block bg-white text-blue-700 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors">Open Cumulative GWA Tracker →</Link>
                    </div>
                </div>
            </div>
        </>
    );
};
export default GwaCalculatorAteneo;
