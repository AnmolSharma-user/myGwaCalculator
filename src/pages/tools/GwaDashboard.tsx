import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { AuthorCard } from "@/components/AuthorCard";
import { Plus, Trash2, ArrowLeft, LayoutDashboard, TrendingUp, Download, Printer } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface Subject { id: number; name: string; grade: string; units: string; }
interface Semester { id: number; name: string; subjects: Subject[]; }

const STORAGE_KEY = "gwa_dashboard_v1";

const getHonor = (gwa: number) => {
    if (gwa <= 1.20) return { label: "Summa Cum Laude Track", color: "text-yellow-600", bg: "bg-yellow-50 border-yellow-200" };
    if (gwa <= 1.45) return { label: "Magna Cum Laude Track", color: "text-gray-500", bg: "bg-gray-50 border-gray-200" };
    if (gwa <= 1.75) return { label: "Cum Laude Track", color: "text-amber-700", bg: "bg-amber-50 border-amber-200" };
    if (gwa <= 2.50) return { label: "Good Standing", color: "text-blue-600", bg: "bg-blue-50 border-blue-200" };
    if (gwa <= 3.00) return { label: "Passing", color: "text-green-600", bg: "bg-green-50 border-green-200" };
    return { label: "Academic Concern", color: "text-red-600", bg: "bg-red-50 border-red-200" };
};

const computeGwa = (subjects: Subject[]) => {
    let pts = 0; let units = 0;
    subjects.forEach(s => {
        const g = parseFloat(s.grade); const u = parseFloat(s.units);
        if (!isNaN(g) && !isNaN(u) && u > 0) { pts += g * u; units += u; }
    });
    return units > 0 ? { gwa: pts / units, units } : null;
};

const GwaDashboard = () => {
    const [semesters, setSemesters] = useState<Semester[]>([
        { id: 1, name: "1st Year — 1st Sem", subjects: [{ id: 1, name: "", grade: "", units: "" }] },
    ]);

    useEffect(() => {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) { try { setSemesters(JSON.parse(saved)); } catch { /* ignore */ } }
    }, []);

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(semesters));
    }, [semesters]);

    const addSemester = () => {
        const n = semesters.length + 1;
        const year = Math.ceil(n / 2);
        const sem = n % 2 === 1 ? "1st" : "2nd";
        const yearLabel = ["1st", "2nd", "3rd", "4th"][Math.min(year - 1, 3)];
        setSemesters(s => [...s, { id: Date.now(), name: `${yearLabel} Year — ${sem} Sem`, subjects: [{ id: Date.now() + 1, name: "", grade: "", units: "" }] }]);
    };

    const removeSemester = (id: number) => setSemesters(s => s.filter(x => x.id !== id));

    const addSubject = (semId: number) => setSemesters(s => s.map(sem => sem.id === semId ? { ...sem, subjects: [...sem.subjects, { id: Date.now(), name: "", grade: "", units: "" }] } : sem));
    const removeSubject = (semId: number, subId: number) => setSemesters(s => s.map(sem => sem.id === semId ? { ...sem, subjects: sem.subjects.filter(x => x.id !== subId) } : sem));
    const updateSubject = (semId: number, subId: number, field: keyof Subject, val: string) => setSemesters(s => s.map(sem => sem.id === semId ? { ...sem, subjects: sem.subjects.map(sub => sub.id === subId ? { ...sub, [field]: val } : sub) } : sem));
    const updateSemName = (semId: number, name: string) => setSemesters(s => s.map(sem => sem.id === semId ? { ...sem, name } : sem));

    const clearAll = () => { if (confirm("Clear all data? This cannot be undone.")) { setSemesters([{ id: Date.now(), name: "1st Year — 1st Sem", subjects: [{ id: Date.now() + 1, name: "", grade: "", units: "" }] }]); } };

    // Cumulative GWA across all semesters
    const allSemResults = semesters.map(sem => ({ sem, result: computeGwa(sem.subjects) }));
    const cumulativePts = allSemResults.reduce((a, { result }) => a + (result ? result.gwa * result.units : 0), 0);
    const cumulativeUnits = allSemResults.reduce((a, { result }) => a + (result ? result.units : 0), 0);
    const cumulativeGwa = cumulativeUnits > 0 ? cumulativePts / cumulativeUnits : null;

    const exportCSV = () => {
        const rows: string[] = ["Semester,Subject,Grade,Units"];
        semesters.forEach(sem => { sem.subjects.forEach(s => { rows.push(`"${sem.name}","${s.name}",${s.grade},${s.units}`); }); });
        const blob = new Blob([rows.join("\n")], { type: "text/csv" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a"); a.href = url; a.download = "my-gwa-report.csv"; a.click();
    };

    const faqData = [
        { q: "Does this save my data automatically?", a: "Yes! Your data is saved in your browser's localStorage every time you make a change. It stays even when you close the tab — as long as you use the same browser and don't clear browser data." },
        { q: "Can I track multiple schools or programs?", a: "The dashboard is single-program. If you're tracking two different schools, we recommend using a separate browser profile for each, since they use the same localStorage key." },
        { q: "How is the cumulative GWA computed here?", a: "The cumulative GWA is computed by summing (GWA × Units) for all semesters, then dividing by the total units. Semesters with more units carry more weight — exactly how Philippine universities compute it." },
        { q: "Can I print or export my GWA report?", a: "Yes! Use the Export CSV button to download a spreadsheet of all your grades. Use Print to generate a printer-friendly version of your dashboard." },
    ];

    return (
        <>
            <Helmet>
                <title>GWA Dashboard — Semester-by-Semester Grade Tracker Philippines | mygwacalculator.com</title>
                <meta name="description" content="Track your GWA across all semesters with this free, auto-saving GWA Dashboard. Add subjects, compute per-semester GWA, see your cumulative average, and monitor your Latin Honors progress — no account needed." />
                <meta name="keywords" content="GWA dashboard Philippines, semester grade tracker Philippines, cumulative GWA tracker, GWA monitor college Philippines, track GWA all semesters" />
                <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
                <link rel="canonical" href="https://mygwacalculator.com/tools/gwa-dashboard" />
                <meta property="og:title" content="GWA Dashboard — Track Your Grades Across All Semesters" />
                <meta property="og:description" content="Free semester-by-semester GWA tracker for Filipino college students. Saves automatically, no login needed." />
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org", "@type": "SoftwareApplication",
                    "name": "GWA Dashboard Philippines", "applicationCategory": "EducationalApplication",
                    "operatingSystem": "Any", "offers": { "@type": "Offer", "price": "0", "priceCurrency": "PHP" },
                    "author": { "@type": "Person", "name": "Anmol Gautam", "url": "https://mygwacalculator.com/about" }
                })}</script>
            </Helmet>

            <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
                <div className="bg-gradient-to-br from-violet-600 via-purple-700 to-indigo-800 text-white">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mt-14">
                        <Link to="/tools" className="inline-flex items-center text-white/80 hover:text-white text-sm mb-6"><ArrowLeft className="h-4 w-4 mr-1" /> All Tools</Link>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <Badge className="bg-white/20 text-white border-white/30">Dashboard</Badge>
                            <Badge variant="outline" className="border-white/30 text-white">Auto-Saves</Badge>
                            <Badge variant="outline" className="border-white/30 text-white">No Login</Badge>
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">GWA Dashboard</h1>
                        <p className="text-purple-100 text-lg max-w-2xl">Your complete semester-by-semester grade tracker. Add subjects, track your GWA trend, and see your Latin Honors progress — saved automatically in your browser.</p>
                        {cumulativeGwa !== null && (
                            <div className="mt-6 flex flex-wrap gap-4">
                                <div className="bg-white/15 rounded-2xl px-6 py-3 text-center">
                                    <p className="text-xs text-purple-200 mb-1">Cumulative GWA</p>
                                    <p className="text-3xl font-bold">{cumulativeGwa.toFixed(2)}</p>
                                </div>
                                <div className="bg-white/15 rounded-2xl px-6 py-3 text-center">
                                    <p className="text-xs text-purple-200 mb-1">Total Units</p>
                                    <p className="text-3xl font-bold">{cumulativeUnits}</p>
                                </div>
                                <div className={`rounded-2xl px-6 py-3 text-center bg-white/15`}>
                                    <p className="text-xs text-purple-200 mb-1">Status</p>
                                    <p className="text-lg font-bold">{getHonor(cumulativeGwa).label}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                    {/* Actions bar */}
                    <div className="flex flex-wrap gap-3 mb-6 justify-between items-center">
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white">My Grade Record</h2>
                        <div className="flex flex-wrap gap-2">
                            <Button variant="outline" size="sm" onClick={exportCSV} className="text-sm gap-2"><Download className="h-4 w-4" /> Export CSV</Button>
                            <Button variant="outline" size="sm" onClick={() => window.print()} className="text-sm gap-2"><Printer className="h-4 w-4" /> Print</Button>
                            <Button variant="outline" size="sm" onClick={clearAll} className="text-sm text-red-600 border-red-200 hover:bg-red-50">Clear All</Button>
                        </div>
                    </div>

                    {/* Semesters */}
                    <div className="space-y-6 mb-6">
                        {semesters.map((sem) => {
                            const result = computeGwa(sem.subjects);
                            const honor = result ? getHonor(result.gwa) : null;
                            return (
                                <Card key={sem.id} className="border-0 shadow-xl bg-white dark:bg-gray-800">
                                    <CardHeader className="border-b border-gray-100 dark:border-gray-700 pb-4">
                                        <div className="flex items-center justify-between gap-3 flex-wrap">
                                            <div className="flex items-center gap-2">
                                                <LayoutDashboard className="h-5 w-5 text-violet-600 flex-shrink-0" />
                                                <input
                                                    value={sem.name}
                                                    onChange={e => updateSemName(sem.id, e.target.value)}
                                                    className="font-bold text-gray-900 dark:text-white bg-transparent border-0 border-b border-dashed border-gray-300 dark:border-gray-600 focus:outline-none focus:border-violet-500 text-base w-48"
                                                />
                                            </div>
                                            <div className="flex items-center gap-3">
                                                {result && honor && (
                                                    <span className={`text-xs font-bold px-3 py-1 rounded-full border ${honor.bg} ${honor.color}`}>
                                                        GWA {result.gwa.toFixed(2)} · {honor.label}
                                                    </span>
                                                )}
                                                {semesters.length > 1 && (
                                                    <button onClick={() => removeSemester(sem.id)} className="text-red-400 hover:text-red-600 text-xs flex items-center gap-1">
                                                        <Trash2 className="h-4 w-4" />
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="p-4 sm:p-6">
                                        <div className="space-y-2 mb-4">
                                            <div className="grid grid-cols-12 gap-2 text-xs font-semibold text-gray-500 dark:text-gray-400 px-1">
                                                <div className="col-span-6">Subject</div>
                                                <div className="col-span-3">Grade (1–5)</div>
                                                <div className="col-span-2">Units</div>
                                                <div className="col-span-1"></div>
                                            </div>
                                            {sem.subjects.map(sub => (
                                                <div key={sub.id} className="grid grid-cols-12 gap-2 items-center">
                                                    <input
                                                        className="col-span-6 px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-600 text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-violet-500"
                                                        value={sub.name} onChange={e => updateSubject(sem.id, sub.id, "name", e.target.value)}
                                                        placeholder="e.g. Mathematics 1"
                                                    />
                                                    <input
                                                        className="col-span-3 px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-600 text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-violet-500"
                                                        type="number" step="0.25" min="1" max="5"
                                                        value={sub.grade} onChange={e => updateSubject(sem.id, sub.id, "grade", e.target.value)}
                                                        placeholder="1.75"
                                                    />
                                                    <input
                                                        className="col-span-2 px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-600 text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-violet-500"
                                                        type="number" min="1"
                                                        value={sub.units} onChange={e => updateSubject(sem.id, sub.id, "units", e.target.value)}
                                                        placeholder="3"
                                                    />
                                                    <button className="col-span-1 flex justify-center text-red-400 hover:text-red-600" onClick={() => removeSubject(sem.id, sub.id)}>
                                                        <Trash2 className="h-4 w-4" />
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                        <Button variant="outline" size="sm" onClick={() => addSubject(sem.id)} className="border-violet-300 text-violet-600 hover:bg-violet-50 w-full text-xs">
                                            <Plus className="h-3 w-3 mr-1" /> Add Subject
                                        </Button>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>

                    <Button onClick={addSemester} variant="outline" className="w-full border-violet-300 text-violet-600 hover:bg-violet-50 py-3 mb-8">
                        <Plus className="h-4 w-4 mr-2" /> Add Next Semester
                    </Button>

                    {/* GWA Trend Chart */}
                    {allSemResults.filter(r => r.result).length > 1 && (
                        <Card className="border-0 shadow-xl bg-white dark:bg-gray-800 mb-8">
                            <CardHeader><CardTitle className="flex items-center gap-2 text-gray-900 dark:text-white"><TrendingUp className="h-5 w-5 text-violet-600" />GWA Trend</CardTitle></CardHeader>
                            <CardContent className="p-6">
                                <div className="flex items-end gap-3 h-40 overflow-x-auto">
                                    {allSemResults.filter(r => r.result).map(({ sem, result }) => {
                                        const gwa = result!.gwa;
                                        const heightPct = Math.max(0, Math.min(100, ((5 - gwa) / 4) * 100));
                                        const honor = getHonor(gwa);
                                        return (
                                            <div key={sem.id} className="flex flex-col items-center gap-1 flex-shrink-0">
                                                <span className={`text-xs font-bold ${honor.color}`}>{gwa.toFixed(2)}</span>
                                                <div className="w-12 bg-gray-100 dark:bg-gray-700 rounded-t-lg overflow-hidden" style={{ height: "100px" }}>
                                                    <div
                                                        className="w-full bg-violet-500 rounded-t-lg transition-all duration-500"
                                                        style={{ height: `${heightPct}%`, marginTop: `${100 - heightPct}%` }}
                                                    />
                                                </div>
                                                <span className="text-xs text-gray-500 text-center w-14 leading-tight">{sem.name.split("—")[1]?.trim() || sem.name}</span>
                                            </div>
                                        );
                                    })}
                                </div>
                                <p className="text-xs text-gray-400 mt-3 text-center">Higher bars = better GWA (lower number is better in PH scale)</p>
                            </CardContent>
                        </Card>
                    )}

                    {/* Article */}
                    <Card className="border-0 shadow-xl bg-white dark:bg-gray-800 mb-8">
                        <CardContent className="p-6 sm:p-10">
                            <article>
                                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                                    Why Every Filipino College Student Needs a GWA Dashboard
                                </h2>
                                <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg leading-relaxed">
                                    Most students only check their GWA reactively — after grades are released, when scholarships ask for it, or right before graduation. By then, fixing a low cumulative GWA is either impossible or requires enormous sacrifice. A <strong>GWA Dashboard lets you track proactively</strong>, so every semester decision is informed by real data about where you stand.
                                </p>

                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">What This Dashboard Does (and Why It's Different)</h3>
                                <p className="text-gray-700 dark:text-gray-300 mb-4">
                                    Unlike simple one-semester calculators, this dashboard stores your <em>entire academic history</em> — subject by subject, semester by semester — using your browser's localStorage so it survives page refreshes and browser closings with no account required. It computes:
                                </p>
                                <ul className="space-y-2 mb-6 text-gray-700 dark:text-gray-300">
                                    {[
                                        "Per-semester GWA (weighted by units) — so you see exactly how each semester affected your average",
                                        "Running cumulative GWA — the number that matters for graduation honors and board exam eligibility",
                                        "Latin Honors status for every semester — Cum Laude, Magna, or Summa Cum Laude tracking",
                                        "Visual GWA trend chart — spot if your grades are improving or declining over time",
                                        "CSV export — download your full academic record for scholarship applications or personal records",
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <span className="w-2 h-2 rounded-full bg-violet-500 mt-2 flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">When to Update Your Dashboard</h3>
                                <p className="text-gray-700 dark:text-gray-300 mb-4">
                                    The best time to update your GWA Dashboard is immediately after your grades are officially released. Many Philippine universities post grades 2–4 weeks after the end of each semester. Here's a recommended workflow:
                                </p>
                                <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-6">
                                    <li>Wait for your official grades from your university student portal or registrar.</li>
                                    <li>Add each subject with its grade and unit count to the current semester in this dashboard.</li>
                                    <li>Check your cumulative GWA and compare it to your Latin Honors target.</li>
                                    <li>Use the <Link to="/tools/gwa-target-planner" className="text-violet-600 dark:text-violet-400 underline font-medium">GWA Target Planner</Link> to plan what grades you need next semester to stay on track.</li>
                                    <li>If any subject is at risk of failing, use the <Link to="/tools/failing-subject-gwa-impact" className="text-violet-600 dark:text-violet-400 underline font-medium">Failing Subject GWA Impact Calculator</Link> to model the worst case before it happens.</li>
                                </ol>

                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Using Your GWA Data Strategically</h3>
                                <p className="text-gray-700 dark:text-gray-300 mb-4">
                                    Your dashboard data is most powerful when you use it to make decisions about upcoming semesters. A few strategic applications:
                                </p>
                                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                                    {[
                                        { t: "Subject Load Decisions", d: "If your cumulative GWA is at risk, consider taking lighter subject loads next semester (fewer units = each grade has more leverage on your per-semester GWA)." },
                                        { t: "Retake Strategy", d: "Your dashboard shows which semester's GWA dragged your cumulative down the most. If retakes are allowed, prioritize those subjects first." },
                                        { t: "Scholarship Applications", d: "Export your CSV for use in scholarship applications. Many scholarship forms ask for a semester-by-semester grade breakdown." },
                                        { t: "Graduation Planning", d: "See exactly how many more units you need and what cumulative GWA you must maintain to qualify for Latin Honors or board exam eligibility." },
                                    ].map((item, i) => (
                                        <div key={i} className="bg-violet-50 dark:bg-gray-700 rounded-xl p-4 border border-violet-100 dark:border-gray-600">
                                            <h4 className="font-bold text-gray-900 dark:text-white mb-1 text-sm">{item.t}</h4>
                                            <p className="text-xs text-gray-600 dark:text-gray-400">{item.d}</p>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-gray-700 dark:text-gray-300">
                                    Pair this dashboard with our <Link to="/tools/latin-honors-tracker" className="text-violet-600 dark:text-violet-400 underline font-medium">Latin Honors Tracker</Link> to see if you're on pace for graduation with honors. And for a full picture of scholarship options sorted by GWA, visit our <Link to="/tools/scholarship-eligibility" className="text-violet-600 dark:text-violet-400 underline font-medium">Scholarship Eligibility Checker</Link>.
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
                        <h3 className="text-xl font-bold mb-2">Track Your Path to Latin Honors</h3>
                        <p className="text-violet-100 mb-4">Use the Latin Honors Tracker to see exactly what you need each semester to graduate Cum Laude, Magna, or Summa.</p>
                        <Link to="/tools/latin-honors-tracker" className="inline-block bg-white text-violet-700 font-bold px-6 py-3 rounded-xl hover:bg-violet-50 transition-colors">Open Latin Honors Tracker →</Link>
                    </div>
                </div>
            </div>
        </>
    );
};
export default GwaDashboard;
