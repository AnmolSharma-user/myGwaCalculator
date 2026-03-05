import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { AuthorCard } from "@/components/AuthorCard";
import { Plus, Trash2, ArrowLeft, Award } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface Semester { id: number; name: string; gwa: string; units: string; }

const HONORS = [
    { label: "Summa Cum Laude", cutoff: 1.20, color: "text-yellow-600", bg: "bg-yellow-50 border-yellow-300", desc: "Highest academic honor. GWA ≤ 1.20." },
    { label: "Magna Cum Laude", cutoff: 1.45, color: "text-slate-600", bg: "bg-slate-50 border-slate-300", desc: "Second highest honor. GWA 1.21–1.45." },
    { label: "Cum Laude", cutoff: 1.75, color: "text-amber-700", bg: "bg-amber-50 border-amber-300", desc: "Third honor. GWA 1.46–1.75." },
];

const LatinHonorsTracker = () => {
    const [semesters, setSemesters] = useState<Semester[]>([
        { id: 1, name: "1st Year — 1st Sem", gwa: "", units: "" },
        { id: 2, name: "1st Year — 2nd Sem", gwa: "", units: "" },
    ]);
    const [targetUnitsRemaining, setTargetUnitsRemaining] = useState("");
    const [result, setResult] = useState<null | { cumulativeGwa: number; totalUnits: number; projections: { honor: string; cutoff: number; neededNext: number | null; isAchieved: boolean }[] }>(null);

    const addSemester = () => {
        const n = semesters.length + 1;
        const year = Math.ceil(n / 2);
        const sem = n % 2 === 1 ? "1st" : "2nd";
        const yearLabel = ["1st", "2nd", "3rd", "4th"][Math.min(year - 1, 3)];
        setSemesters(s => [...s, { id: Date.now(), name: `${yearLabel} Year — ${sem} Sem`, gwa: "", units: "" }]);
    };
    const removeSemester = (id: number) => setSemesters(s => s.filter(x => x.id !== id));
    const updateSemester = (id: number, field: keyof Semester, val: string) =>
        setSemesters(s => s.map(x => x.id === id ? { ...x, [field]: val } : x));

    const calculate = () => {
        let totalPts = 0; let totalUnits = 0;
        semesters.forEach(s => {
            const g = parseFloat(s.gwa); const u = parseFloat(s.units);
            if (!isNaN(g) && !isNaN(u) && u > 0) { totalPts += g * u; totalUnits += u; }
        });
        if (totalUnits === 0) return;
        const cumulativeGwa = totalPts / totalUnits;
        const remaining = parseFloat(targetUnitsRemaining) || 0;

        const projections = HONORS.map(({ label, cutoff }) => {
            const isAchieved = cumulativeGwa <= cutoff;
            let neededNext: number | null = null;
            if (!isAchieved && remaining > 0) {
                const needed = (cutoff * (totalUnits + remaining) - totalPts) / remaining;
                neededNext = needed >= 1.0 && needed <= 5.0 ? needed : null;
            }
            return { honor: label, cutoff, neededNext, isAchieved };
        });
        setResult({ cumulativeGwa, totalUnits, projections });
    };

    const faqData = [
        { q: "What GWA do I need for Cum Laude in the Philippines?", a: "Most Philippine universities require a cumulative GWA of 1.75 or better for Cum Laude, 1.45 for Magna Cum Laude, and 1.20 for Summa Cum Laude. Exact cutoffs vary by school — always verify with your registrar." },
        { q: "Can I still graduate with honors after one bad semester?", a: "Yes. Latin Honors is based on your cumulative GWA, not any single semester. One bad semester can be offset by stronger performance in others, especially if it had fewer units." },
        { q: "Does an INC grade affect my Latin Honors eligibility?", a: "An INC is typically not computed in your GWA until resolved. However, many universities require no INC or failing grades at graduation time, even if your GWA meets the cutoff." },
        { q: "Are there other requirements beyond GWA?", a: "Yes: no failing grades throughout your stay, no unresolved INC at graduation, completion within the prescribed period, no pending disciplinary action, and usually at least 75% of your units taken at the degree-awarding institution." },
    ];

    return (
        <>
            <Helmet>
                <title>Latin Honors Tracker Philippines — Cum Laude GWA Requirements 2025 | mygwacalculator.com</title>
                <meta name="description" content="Track your progress toward Latin Honors (Cum Laude, Magna Cum Laude, Summa Cum Laude) in the Philippines. Enter your semesters and see exactly what GWA you need next to graduate with honors." />
                <meta name="keywords" content="latin honors tracker Philippines, cum laude GWA requirement Philippines, magna cum laude GWA Philippines, summa cum laude requirement Philippines" />
                <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
                <link rel="canonical" href="https://mygwacalculator.com/tools/latin-honors-tracker" />
                <meta property="og:title" content="Latin Honors Tracker Philippines — Cum Laude, Magna, Summa" />
                <meta property="og:description" content="Free tracker to see if you're on pace for Latin Honors in the Philippines." />
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org", "@type": "SoftwareApplication",
                    "name": "Latin Honors Tracker Philippines", "applicationCategory": "EducationalApplication",
                    "operatingSystem": "Any", "offers": { "@type": "Offer", "price": "0", "priceCurrency": "PHP" },
                    "author": { "@type": "Person", "name": "Anmol Gautam", "url": "https://mygwacalculator.com/about" }
                })}</script>
            </Helmet>

            <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
                <div className="bg-gradient-to-br from-yellow-500 via-amber-600 to-orange-700 text-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mt-14">
                        <Link to="/tools" className="inline-flex items-center text-white/80 hover:text-white text-sm mb-6"><ArrowLeft className="h-4 w-4 mr-1" /> All Tools</Link>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <Badge className="bg-white/20 text-white border-white/30">Honors</Badge>
                            <Badge variant="outline" className="border-white/30 text-white">Tracker</Badge>
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Latin Honors Tracker</h1>
                        <p className="text-yellow-100 text-lg max-w-2xl">Enter your semester GWAs to see if you're on track for Cum Laude, Magna, or Summa Cum Laude — and exactly what you need next semester.</p>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                    <div className="grid sm:grid-cols-3 gap-4 mb-8">
                        {HONORS.map(h => (
                            <div key={h.label} className={`rounded-2xl border p-4 text-center ${h.bg}`}>
                                <Award className={`h-6 w-6 mx-auto mb-2 ${h.color}`} />
                                <p className={`font-bold text-sm ${h.color}`}>{h.label}</p>
                                <p className={`text-2xl font-bold ${h.color}`}>≤ {h.cutoff.toFixed(2)}</p>
                                <p className="text-xs text-gray-600 mt-1">GWA required</p>
                            </div>
                        ))}
                    </div>

                    <Card className="border-0 shadow-2xl bg-white dark:bg-gray-800 mb-8">
                        <CardHeader className="border-b border-gray-100 dark:border-gray-700">
                            <CardTitle className="flex items-center gap-2 text-xl text-gray-900 dark:text-white">
                                <Award className="h-5 w-5 text-amber-600" /> My Semester History
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-6 space-y-5">
                            <div className="space-y-3">
                                {semesters.map((s, idx) => (
                                    <div key={s.id} className="grid grid-cols-12 gap-2 items-center bg-amber-50 dark:bg-gray-700/50 rounded-xl p-3 border border-amber-100 dark:border-gray-600">
                                        <div className="col-span-1 text-xs font-bold text-amber-600 text-center">{idx + 1}</div>
                                        <input className="col-span-5 px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-amber-500"
                                            value={s.name} onChange={e => updateSemester(s.id, "name", e.target.value)} placeholder="Semester name" />
                                        <input className="col-span-2 px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-amber-500"
                                            type="number" step="0.01" min="1" max="5" value={s.gwa}
                                            onChange={e => updateSemester(s.id, "gwa", e.target.value)} placeholder="GWA" />
                                        <input className="col-span-2 px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-amber-500"
                                            type="number" min="1" value={s.units}
                                            onChange={e => updateSemester(s.id, "units", e.target.value)} placeholder="Units" />
                                        <button className="col-span-2 flex justify-end pr-1 text-red-400 hover:text-red-600" onClick={() => removeSemester(s.id)}>
                                            <Trash2 className="h-4 w-4" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                            <Button variant="outline" onClick={addSemester} className="border-amber-300 text-amber-600 hover:bg-amber-50 w-full">
                                <Plus className="h-4 w-4 mr-2" /> Add Semester
                            </Button>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Remaining Units Until Graduation</label>
                                <input type="number" min="0" value={targetUnitsRemaining}
                                    onChange={e => setTargetUnitsRemaining(e.target.value)} placeholder="e.g. 36"
                                    className="w-full sm:w-48 px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-amber-500" />
                                <p className="text-xs text-gray-500 mt-1">Used to project what GWA you need next to achieve each honors tier</p>
                            </div>
                            <Button onClick={calculate} className="w-full bg-amber-500 hover:bg-amber-600 text-white py-3 text-base font-semibold rounded-xl">
                                Check Honors Status
                            </Button>
                            {result && (
                                <div className="space-y-4">
                                    <div className="rounded-2xl p-5 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-center">
                                        <p className="text-xs text-gray-500 mb-1">Your Cumulative GWA</p>
                                        <p className="text-5xl font-bold text-amber-600">{result.cumulativeGwa.toFixed(3)}</p>
                                        <p className="text-sm text-gray-500 mt-1">Based on {result.totalUnits} units completed</p>
                                    </div>
                                    {result.projections.map(p => {
                                        const progressPct = p.isAchieved ? 100 : Math.min(99, (p.cutoff / result.cumulativeGwa) * 100);
                                        return (
                                            <div key={p.honor} className={`rounded-2xl p-5 border ${p.isAchieved ? "bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-700" : "bg-gray-50 border-gray-200 dark:bg-gray-700 dark:border-gray-600"}`}>
                                                <div className="flex justify-between items-center mb-3 flex-wrap gap-2">
                                                    <div>
                                                        <p className={`font-bold text-base ${p.isAchieved ? "text-green-700 dark:text-green-400" : "text-gray-700 dark:text-gray-300"}`}>{p.honor}</p>
                                                        <p className="text-xs text-gray-500">Requires GWA ≤ {p.cutoff.toFixed(2)}</p>
                                                    </div>
                                                    {p.isAchieved ? (
                                                        <span className="text-xs font-bold bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300 px-3 py-1 rounded-full">✓ On Track</span>
                                                    ) : p.neededNext !== null ? (
                                                        <span className="text-xs font-bold bg-amber-100 text-amber-700 px-3 py-1 rounded-full">Need ≤ {p.neededNext.toFixed(2)} next</span>
                                                    ) : (
                                                        <span className="text-xs font-bold bg-red-100 text-red-700 px-3 py-1 rounded-full">Not achievable with remaining units</span>
                                                    )}
                                                </div>
                                                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                                                    <div className={`h-2 rounded-full ${p.isAchieved ? "bg-green-500" : "bg-amber-400"}`} style={{ width: `${progressPct}%` }} />
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            )}
                        </CardContent>
                    </Card>

                    <Card className="border-0 shadow-xl bg-white dark:bg-gray-800 mb-8">
                        <CardContent className="p-6 sm:p-10">
                            <article>
                                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                                    Latin Honors in the Philippines: Complete Guide to Cum Laude, Magna, and Summa Requirements
                                </h2>
                                <p className="text-gray-700 dark:text-gray-300 mb-5 text-lg leading-relaxed">
                                    Graduating with <strong>Latin Honors in the Philippines</strong> is one of the most prestigious distinctions a Filipino college student can earn — and your cumulative GWA is the #1 requirement. Here's everything you need to know.
                                </p>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">GWA Cutoffs by University</h3>
                                <div className="overflow-x-auto mb-6">
                                    <table className="w-full border-collapse text-sm">
                                        <thead><tr className="bg-amber-50 dark:bg-gray-700">
                                            {["University", "Cum Laude", "Magna Cum Laude", "Summa Cum Laude"].map(h => (
                                                <th key={h} className="px-4 py-3 text-left border border-gray-200 dark:border-gray-600 font-bold text-gray-900 dark:text-white">{h}</th>
                                            ))}
                                        </tr></thead>
                                        <tbody className="text-gray-700 dark:text-gray-300">
                                            {[
                                                ["UP System", "≤ 1.75", "≤ 1.45", "≤ 1.20"],
                                                ["DLSU", "≤ 1.75", "≤ 1.45", "≤ 1.20"],
                                                ["Ateneo de Manila", "≤ 1.75", "≤ 1.45", "≤ 1.20"],
                                                ["UST", "≤ 1.75", "≤ 1.45", "≤ 1.20"],
                                                ["PUP", "≤ 1.75", "≤ 1.50", "≤ 1.25"],
                                                ["CHED General", "≤ 1.75", "≤ 1.50", "≤ 1.25"],
                                            ].map((row, i) => (
                                                <tr key={i} className={i % 2 === 0 ? "bg-white dark:bg-gray-800" : "bg-gray-50 dark:bg-gray-900"}>
                                                    {row.map((cell, j) => <td key={j} className="px-4 py-2 border border-gray-200 dark:border-gray-600">{cell}</td>)}
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Additional Requirements Beyond GWA</h3>
                                <ul className="space-y-2 mb-5 text-gray-700 dark:text-gray-300">
                                    {["No failing grades (5.0) throughout your entire stay", "No unresolved INC grades at graduation", "Completion of your degree within the prescribed period (4–5 years)", "No pending academic disciplinary action", "At least 75% of units must be taken at the degree-awarding school"].map((item, i) => (
                                        <li key={i} className="flex items-start gap-2"><span className="w-2 h-2 rounded-full bg-amber-500 mt-2 flex-shrink-0" />{item}</li>
                                    ))}
                                </ul>
                                <p className="text-gray-700 dark:text-gray-300">
                                    Pair this with our <Link to="/tools/cumulative-gwa-tracker" className="text-amber-600 dark:text-amber-400 underline font-medium">Cumulative GWA Tracker</Link> and <Link to="/tools/gwa-target-planner" className="text-amber-600 dark:text-amber-400 underline font-medium">GWA Target Planner</Link> for the full picture. Read our blog on <Link to="/blog/latin-honors-philippines" className="text-amber-600 dark:text-amber-400 underline font-medium">Latin Honors Philippines</Link> for a deeper breakdown.
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

                    <div className="mt-10 bg-amber-500 text-white rounded-2xl p-6 text-center">
                        <h3 className="text-xl font-bold mb-2">Check Your Scholarship Eligibility</h3>
                        <p className="text-amber-100 mb-4">Your GWA may qualify you for DOST, CHED, SM Foundation, and other Philippine scholarships.</p>
                        <Link to="/tools/scholarship-eligibility" className="inline-block bg-white text-amber-700 font-bold px-6 py-3 rounded-xl hover:bg-amber-50 transition-colors">Check Eligibility →</Link>
                    </div>
                </div>
            </div>
        </>
    );
};
export default LatinHonorsTracker;
