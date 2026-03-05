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

const GwaCalculatorPUP = () => {
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
        if (gwa <= 1.25) { honor = "Summa Cum Laude Track"; colorClass = "text-yellow-600"; }
        else if (gwa <= 1.50) { honor = "Magna Cum Laude Track"; colorClass = "text-gray-500"; }
        else if (gwa <= 1.75) { honor = "Cum Laude Track"; colorClass = "text-amber-700"; }
        else if (gwa <= 2.00) { honor = "With High Honors / Dean's Lister"; colorClass = "text-blue-600"; }
        else if (gwa <= 3.00) { honor = "Good Standing"; colorClass = "text-green-600"; }
        else { honor = "Academic Risk"; colorClass = "text-red-600"; }
        setResult({ gwa, units, honor, colorClass });
    };

    const faqData = [
        { q: "What is the PUP grading system?", a: "The Polytechnic University of the Philippines (PUP) uses a 1.0–5.0 grading scale where 1.00 is the highest grade (97–100%) and 5.00 is failing. The passing grade is 3.00 (75%). PUP follows the standard Philippine state university grading conventions." },
        { q: "What GWA do I need for Latin Honors at PUP?", a: "PUP awards Latin Honors at graduation: Summa Cum Laude (GWA ≤ 1.25), Magna Cum Laude (GWA ≤ 1.50), and Cum Laude (GWA ≤ 1.75). Note that PUP's Summa and Magna cutoffs are slightly stricter than some private universities." },
        { q: "Is PUP tuition really free?", a: "Yes. Under Republic Act 10931 (Universal Access to Quality Tertiary Education Act), all Filipino students enrolled in PUP and other state universities and colleges (SUCs) receive free tuition and miscellaneous fees. Students still pay for other expenses like books and board exams." },
        { q: "Does PUP have a Dean's List?", a: "Yes. PUP recognizes academic excellence through various honor awards per semester. Requirements include maintaining a GWA of 1.75 or better, no failing grades, satisfactory conduct, and regular enrollment status. Specific awards and cutoffs may vary by campus." },
    ];

    return (
        <>
            <Helmet>
                <title>PUP GWA Calculator — Polytechnic University of Philippines Grading System 2025 | mygwacalculator.com</title>
                <meta name="description" content="Free GWA calculator for PUP students. Understand the Polytechnic University of the Philippines grading system, Latin Honors cutoffs (Summa ≤1.25), free tuition benefits, and compute your GWA accurately." />
                <meta name="keywords" content="PUP GWA calculator, Polytechnic University Philippines grading system, PUP Latin honors GWA, PUP Dean's list requirements, PUP GWA 1 to 5 scale" />
                <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
                <link rel="canonical" href="https://mygwacalculator.com/gwa-calculator-pup" />
                <meta property="og:title" content="PUP GWA Calculator — Polytechnic University of the Philippines" />
                <meta property="og:description" content="Compute your GWA using the PUP grading scale. Check Latin Honors eligibility and academic standing instantly." />
                <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "SoftwareApplication", "name": "PUP GWA Calculator", "applicationCategory": "EducationalApplication", "operatingSystem": "Any", "offers": { "@type": "Offer", "price": "0", "priceCurrency": "PHP" }, "author": { "@type": "Person", "name": "Anmol Gautam", "url": "https://mygwacalculator.com/about" } })}</script>
            </Helmet>
            <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
                <div className="bg-gradient-to-br from-red-600 via-red-700 to-blue-900 text-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mt-14">
                        <Link to="/tools" className="inline-flex items-center text-white/80 hover:text-white text-sm mb-6">← All Tools</Link>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <Badge className="bg-white/20 text-white border-white/30">Polytechnic University</Badge>
                            <Badge variant="outline" className="border-white/30 text-white">Free Tuition SUC</Badge>
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">PUP GWA Calculator</h1>
                        <p className="text-red-100 text-lg max-w-2xl">Compute your GWA using the Polytechnic University of the Philippines grading scale. See your academic standing and Latin Honors progress.</p>
                    </div>
                </div>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                    {/* Latin Honors Quick Reference */}
                    <div className="grid sm:grid-cols-3 gap-4 mb-8">
                        {[{ label: "Summa Cum Laude", cutoff: "≤ 1.25", color: "text-yellow-600 border-yellow-300 bg-yellow-50" }, { label: "Magna Cum Laude", cutoff: "≤ 1.50", color: "text-gray-600 border-gray-300 bg-gray-50" }, { label: "Cum Laude", cutoff: "≤ 1.75", color: "text-amber-700 border-amber-300 bg-amber-50" }].map(h => (
                            <div key={h.label} className={`rounded-2xl border p-4 text-center ${h.color}`}>
                                <p className="font-bold text-sm mb-1">{h.label}</p>
                                <p className="text-2xl font-bold">{h.cutoff}</p>
                                <p className="text-xs mt-1 opacity-70">Cumulative GWA</p>
                            </div>
                        ))}
                    </div>

                    <Card className="border-0 shadow-2xl bg-white dark:bg-gray-800 mb-8">
                        <CardHeader className="border-b border-gray-100 dark:border-gray-700">
                            <CardTitle className="flex items-center gap-2 text-xl text-gray-900 dark:text-white"><Calculator className="h-5 w-5 text-red-600" /> PUP GWA Calculator</CardTitle>
                        </CardHeader>
                        <CardContent className="p-6 space-y-5">
                            <div className="space-y-3">
                                <div className="grid grid-cols-12 gap-2 text-xs font-semibold text-gray-500 px-1">
                                    <div className="col-span-5">Subject</div><div className="col-span-4">Grade (1–5)</div><div className="col-span-2">Units</div><div className="col-span-1"></div>
                                </div>
                                {subjects.map(sub => (
                                    <div key={sub.id} className="grid grid-cols-12 gap-2 items-center">
                                        <input className="col-span-5 px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-600 text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-red-600" value={sub.name} onChange={e => updateSubject(sub.id, "name", e.target.value)} placeholder="e.g. ES 101" />
                                        <div className="col-span-4">
                                            <select className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-600 text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-red-600" value={sub.grade} onChange={e => updateSubject(sub.id, "grade", e.target.value)}>
                                                <option value="">Select</option>
                                                {["1.00", "1.25", "1.50", "1.75", "2.00", "2.25", "2.50", "2.75", "3.00", "5.00"].map(g => <option key={g} value={g}>{g}</option>)}
                                            </select>
                                        </div>
                                        <input className="col-span-2 px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-600 text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-red-600" type="number" min="1" value={sub.units} onChange={e => updateSubject(sub.id, "units", e.target.value)} placeholder="Units" />
                                        <button className="col-span-1 flex justify-center text-red-400 hover:text-red-600" onClick={() => removeSubject(sub.id)}><Trash2 className="h-4 w-4" /></button>
                                    </div>
                                ))}
                            </div>
                            <Button variant="outline" onClick={addSubject} className="border-red-200 text-red-600 hover:bg-red-50 w-full"><Plus className="h-4 w-4 mr-2" /> Add Subject</Button>
                            <Button onClick={calculate} className="w-full bg-red-600 hover:bg-red-700 text-white py-3 text-base font-semibold rounded-xl">Compute PUP GWA</Button>
                            {result && (
                                <div className="rounded-2xl p-6 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700">
                                    <div className="grid grid-cols-3 gap-4 text-center">
                                        <div><p className="text-xs text-gray-500 mb-1">Your GWA</p><p className="text-4xl font-bold text-red-700">{result.gwa.toFixed(2)}</p></div>
                                        <div><p className="text-xs text-gray-500 mb-1">Total Units</p><p className="text-4xl font-bold text-gray-700 dark:text-gray-300">{result.units}</p></div>
                                        <div><p className="text-xs text-gray-500 mb-1">Status</p><p className={`text-base font-bold ${result.colorClass}`}>{result.honor}</p></div>
                                    </div>
                                </div>
                            )}
                        </CardContent>
                    </Card>

                    <Card className="border-0 shadow-xl bg-white dark:bg-gray-800 mb-8">
                        <CardContent className="p-6 sm:p-10">
                            <article>
                                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">PUP Grading System and Academic Excellence Guide for Filipino Students</h2>
                                <p className="text-gray-700 dark:text-gray-300 mb-5 text-lg leading-relaxed">The <strong>Polytechnic University of the Philippines (PUP)</strong> is one of the largest state universities in the Philippines, offering free tuition under RA 10931 to over 70,000 students. PUP uses a standard 1.0–5.0 grading scale, with slightly stricter Latin Honors cutoffs that reward academic excellence at the country's technology-focused flagship state university.</p>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Why PUP's Latin Honors Cutoffs Are Different</h3>
                                <p className="text-gray-700 dark:text-gray-300 mb-4">PUP follows CHED's minimum standards but enforces stricter Summa (≤1.25) and Magna (≤1.50) cutoffs compared to the CHED general minimum. This means a GWA of 1.30 earns Magna at CHED minimum but only Cum Laude at PUP — an important distinction to know if you're planning your academic career.</p>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Making the Most of Free Tuition at PUP</h3>
                                <ul className="space-y-2 mb-5 text-gray-700 dark:text-gray-300">{["Free tuition means you can invest more effort in academic excellence without financial pressure", "Use the money saved on tuition for review centers, books, and board exam preparation", "PUP engineering and technology programs have strong industry partnerships — high GWA opens internship and scholarship doors", "Consider the DOST-SEI scholarship for additional stipend support on top of free tuition", "Track your cumulative GWA every semester — especially for programs with board exams like Engineering and Education"].map((item, i) => <li key={i} className="flex items-start gap-2"><span className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0" />{item}</li>)}</ul>
                                <p className="text-gray-700 dark:text-gray-300">Use our <Link to="/tools/latin-honors-tracker" className="text-red-600 dark:text-red-400 underline font-medium">Latin Honors Tracker</Link> with PUP's stricter cutoffs and our <Link to="/tools/scholarship-eligibility" className="text-red-600 dark:text-red-400 underline font-medium">Scholarship Eligibility Checker</Link> to maximize your academic benefits at PUP.</p>
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
                    <div className="mt-10 bg-red-600 text-white rounded-2xl p-6 text-center">
                        <h3 className="text-xl font-bold mb-2">Check Your Scholarship Eligibility</h3>
                        <p className="text-red-100 mb-4">Even with free PUP tuition, scholarships like DOST, SM Foundation, and Metrobank provide valuable monthly stipends for high-GWA students.</p>
                        <Link to="/tools/scholarship-eligibility" className="inline-block bg-white text-red-700 font-bold px-6 py-3 rounded-xl hover:bg-red-50 transition-colors">Check Eligibility →</Link>
                    </div>
                </div>
            </div>
        </>
    );
};
export default GwaCalculatorPUP;
