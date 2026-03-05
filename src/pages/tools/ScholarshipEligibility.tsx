import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { AuthorCard } from "@/components/AuthorCard";
import { ArrowLeft, CheckCircle, XCircle, GraduationCap } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const SCHOLARSHIPS = [
    { name: "DOST-SEI Merit Scholarship", org: "DOST", cutoff: 1.75, additionalReq: "DOST exam passer, science/tech/engineering program", amount: "Full tuition + ₱7,000/month stipend", renewable: "Annually, maintain GWA ≤ 1.75 per sem", link: "https://sei.dost.gov.ph", color: "bg-blue-50 border-blue-200 dark:bg-blue-900/20 dark:border-blue-700" },
    { name: "CHED Tulong Dunong Program", org: "CHED", cutoff: 2.50, additionalReq: "Financially disadvantaged, enrolled in CHED-recognized school", amount: "Up to ₱40,000/year", renewable: "Annually, maintain good standing", link: "https://ched.gov.ph", color: "bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-700" },
    { name: "SM Foundation Scholarship", org: "SM Foundation", cutoff: 1.80, additionalReq: "First or second year student, annual income ≤ ₱400,000", amount: "₱40,000/year", renewable: "Up to 4 years with GWA maintenance", link: "https://smfoundation.org.ph", color: "bg-yellow-50 border-yellow-200 dark:bg-yellow-900/20 dark:border-yellow-700" },
    { name: "Metrobank Foundation Scholarship", org: "Metrobank", cutoff: 1.75, additionalReq: "Must pass selection exam and interview", amount: "Full tuition + monthly allowance", renewable: "Annually with GWA ≤ 1.75 maintenance", link: "https://mb.com.ph", color: "bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-700" },
    { name: "Ayala Foundation Scholarship", org: "Ayala Foundation", cutoff: 1.75, additionalReq: "Financial need, leadership potential", amount: "Tuition + allowance", renewable: "Annual review", link: "https://ayalafoundation.org", color: "bg-purple-50 border-purple-200 dark:bg-purple-900/20 dark:border-purple-700" },
    { name: "OWWA Scholarship (OFW dependents)", org: "OWWA", cutoff: 2.50, additionalReq: "Active OWWA member's child/spouse", amount: "₱10,000/semester", renewable: "Per semester with good standing", link: "https://owwa.gov.ph", color: "bg-teal-50 border-teal-200 dark:bg-teal-900/20 dark:border-teal-700" },
    { name: "GSIS Educational Loan (dependents)", org: "GSIS", cutoff: 2.25, additionalReq: "GSIS active member's qualified dependent", amount: "Up to ₱100,000/year loan", renewable: "Annual application", link: "https://gsis.gov.ph", color: "bg-orange-50 border-orange-200 dark:bg-orange-900/20 dark:border-orange-700" },
    { name: "SSS Educational Assistance (dependents)", org: "SSS", cutoff: 2.50, additionalReq: "SSS member's child, member incapacitated/deceased", amount: "₱5,000/semester (up to 8 sems)", renewable: "Per semester", link: "https://www.sss.gov.ph", color: "bg-pink-50 border-pink-200 dark:bg-pink-900/20 dark:border-pink-700" },
    { name: "Iskolar ng Bayan (SUC Free Tuition)", org: "CHED / RA 10931", cutoff: 3.00, additionalReq: "Filipino citizen enrolled in state university or college", amount: "Free tuition and miscellaneous fees", renewable: "As long as pass all subjects", link: "https://ched.gov.ph", color: "bg-gray-50 border-gray-200 dark:bg-gray-700 dark:border-gray-600" },
    { name: "Jollibee Foundation Scholarship", org: "Jollibee Foundation", cutoff: 2.00, additionalReq: "Financial need, barangay endorsement", amount: "₱12,000/year", renewable: "Annually with maintained GWA", link: "https://jollibee.com.ph/foundation", color: "bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-700" },
];

const ScholarshipEligibility = () => {
    const [gwa, setGwa] = useState<string>("");
    const [results, setResults] = useState<null | { eligible: typeof SCHOLARSHIPS; notEligible: typeof SCHOLARSHIPS }>(null);

    const check = () => {
        const g = parseFloat(gwa);
        if (isNaN(g)) return;
        setResults({
            eligible: SCHOLARSHIPS.filter(s => g <= s.cutoff),
            notEligible: SCHOLARSHIPS.filter(s => g > s.cutoff),
        });
    };

    const faqData = [
        { q: "What GWA do I need for the DOST scholarship?", a: "You need a GWA of 1.75 or better (lower number in PH scale) per semester to maintain your DOST-SEI Merit Scholarship. For initial application, you also need to pass the DOST qualifying exam and be enrolled in a STEM program." },
        { q: "Does CHED check my GWA for Tulong Dunong?", a: "Yes. The CHED Tulong Dunong Program requires you to maintain good academic standing (typically a GWA of 2.50 or better) and be enrolled in a CHED-recognized institution. Financial need is the primary eligibility criterion." },
        { q: "Can I apply for multiple scholarships at the same time in the Philippines?", a: "Generally, most Philippine scholarships prohibit concurrent receipt of another scholarship that covers the same expenses (e.g., two full-tuition scholarships). However, some allow a primary scholarship plus allowance-only supplemental grants. Always read each scholarship's terms carefully." },
        { q: "Do scholarships look at my GWA or per-semester grades?", a: "Most Philippine scholarships require you to maintain both a per-semester GWA and sometimes a cumulative GWA. DOST-SEI, for example, requires you maintain GWA ≤ 1.75 each semester. Failing a single semester can put your scholarship at risk even if your cumulative average is fine." },
    ];

    return (
        <>
            <Helmet>
                <title>Scholarship GWA Eligibility Checker Philippines 2025 — DOST, CHED, SM Foundation | mygwacalculator.com</title>
                <meta name="description" content="Check which Philippine scholarships you qualify for based on your GWA. Covers DOST, CHED Tulong Dunong, SM Foundation, Metrobank, Ayala, OWWA, SSS, and more. Free, instant eligibility checker." />
                <meta name="keywords" content="scholarship GWA requirements Philippines 2025, DOST scholarship GWA, CHED scholarship GWA, SM foundation scholarship GWA Philippines, scholarship eligibility GWA checker" />
                <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
                <link rel="canonical" href="https://mygwacalculator.com/tools/scholarship-eligibility" />
                <meta property="og:title" content="Scholarship Eligibility Checker Philippines — DOST, CHED, SM and More" />
                <meta property="og:description" content="Enter your GWA and instantly see which Philippine scholarships you qualify for." />
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org", "@type": "SoftwareApplication",
                    "name": "Scholarship GWA Eligibility Checker Philippines", "applicationCategory": "EducationalApplication",
                    "operatingSystem": "Any", "offers": { "@type": "Offer", "price": "0", "priceCurrency": "PHP" },
                    "author": { "@type": "Person", "name": "Anmol Gautam", "url": "https://mygwacalculator.com/about" }
                })}</script>
            </Helmet>

            <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
                <div className="bg-gradient-to-br from-emerald-600 via-teal-700 to-cyan-800 text-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mt-14">
                        <Link to="/tools" className="inline-flex items-center text-white/80 hover:text-white text-sm mb-6"><ArrowLeft className="h-4 w-4 mr-1" /> All Tools</Link>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <Badge className="bg-white/20 text-white border-white/30">Scholarships</Badge>
                            <Badge variant="outline" className="border-white/30 text-white">10+ Programs</Badge>
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Scholarship Eligibility Checker</h1>
                        <p className="text-teal-100 text-lg max-w-2xl">Enter your GWA to instantly see which Philippine scholarships you may qualify for — DOST, CHED, SM Foundation, Metrobank, OWWA, and more.</p>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                    <Card className="border-0 shadow-2xl bg-white dark:bg-gray-800 mb-8">
                        <CardHeader className="border-b border-gray-100 dark:border-gray-700">
                            <CardTitle className="flex items-center gap-2 text-xl text-gray-900 dark:text-white">
                                <GraduationCap className="h-5 w-5 text-teal-600" /> Check Your Eligibility
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-6 space-y-5">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Your Current GWA (1.0–5.0)</label>
                                <div className="flex gap-3">
                                    <input type="number" step="0.01" min="1" max="5" value={gwa} onChange={e => setGwa(e.target.value)}
                                        placeholder="e.g. 1.75"
                                        className="flex-1 sm:max-w-xs px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent text-xl font-bold" />
                                    <Button onClick={check} className="bg-teal-600 hover:bg-teal-700 text-white px-6 rounded-xl font-semibold">Check</Button>
                                </div>
                                <p className="text-xs text-gray-500 mt-2">Don't know your GWA? Use our <Link to="/" className="text-teal-600 underline">GWA Calculator</Link> first.</p>
                            </div>

                            {/* Quick pick */}
                            <div className="flex flex-wrap gap-2">
                                {["1.00", "1.25", "1.50", "1.75", "2.00", "2.25", "2.50", "3.00"].map(g => (
                                    <button key={g} onClick={() => setGwa(g)}
                                        className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${gwa === g ? "bg-teal-600 text-white border-teal-600" : "border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-teal-400"}`}>{g}</button>
                                ))}
                            </div>

                            {results && (
                                <div className="space-y-6">
                                    {results.eligible.length > 0 && (
                                        <div>
                                            <h3 className="font-bold text-green-700 dark:text-green-400 mb-3 flex items-center gap-2">
                                                <CheckCircle className="h-5 w-5" /> Scholarships You May Qualify For ({results.eligible.length})
                                            </h3>
                                            <div className="space-y-3">
                                                {results.eligible.map((s, i) => (
                                                    <div key={i} className={`border rounded-2xl p-4 ${s.color}`}>
                                                        <div className="flex items-start justify-between gap-2 flex-wrap mb-2">
                                                            <div>
                                                                <p className="font-bold text-gray-900 dark:text-white text-sm">{s.name}</p>
                                                                <p className="text-xs text-gray-500">{s.org} · GWA cutoff: ≤ {s.cutoff.toFixed(2)}</p>
                                                            </div>
                                                            <Badge className="bg-green-100 text-green-700 border-green-300 text-xs flex-shrink-0">Possibly Eligible</Badge>
                                                        </div>
                                                        <div className="grid sm:grid-cols-2 gap-2 text-xs text-gray-600 dark:text-gray-400">
                                                            <div><span className="font-medium">Amount:</span> {s.amount}</div>
                                                            <div><span className="font-medium">Renewal:</span> {s.renewable}</div>
                                                            <div className="sm:col-span-2"><span className="font-medium">Requirements:</span> {s.additionalReq}</div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                    {results.notEligible.length > 0 && (
                                        <div>
                                            <h3 className="font-bold text-gray-500 mb-3 flex items-center gap-2">
                                                <XCircle className="h-5 w-5 text-gray-400" /> GWA Requirement Not Met ({results.notEligible.length})
                                            </h3>
                                            <div className="space-y-2">
                                                {results.notEligible.map((s, i) => (
                                                    <div key={i} className="border border-gray-200 dark:border-gray-600 rounded-xl p-3 bg-gray-50 dark:bg-gray-700 flex justify-between items-center">
                                                        <div>
                                                            <p className="font-medium text-gray-500 dark:text-gray-400 text-sm">{s.name}</p>
                                                            <p className="text-xs text-gray-400">Requires GWA ≤ {s.cutoff.toFixed(2)}</p>
                                                        </div>
                                                        <span className="text-xs text-gray-400">Need {(s.cutoff - parseFloat(gwa)).toFixed(2)} improvement</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                    <p className="text-xs text-gray-500 italic">* Eligibility is based on GWA alone. All scholarships have additional requirements. Always verify directly with the scholarship provider before applying.</p>
                                </div>
                            )}
                        </CardContent>
                    </Card>

                    <Card className="border-0 shadow-xl bg-white dark:bg-gray-800 mb-8">
                        <CardContent className="p-6 sm:p-10">
                            <article>
                                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                                    Philippine Scholarship GWA Requirements 2025: DOST, CHED, SM Foundation, and More
                                </h2>
                                <p className="text-gray-700 dark:text-gray-300 mb-5 text-lg leading-relaxed">
                                    Maintaining a good GWA isn't just about graduation honors — it's also your key to <strong>thousands of pesos in scholarship support</strong> every semester. This guide covers the most important Philippine scholarships, their GWA requirements, and what else you need to qualify.
                                </p>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Top Philippine Scholarships by GWA Requirement</h3>
                                <div className="overflow-x-auto mb-6">
                                    <table className="w-full border-collapse text-sm">
                                        <thead><tr className="bg-teal-50 dark:bg-gray-700">
                                            {["Scholarship", "Org", "Min GWA", "Amount"].map(h => (
                                                <th key={h} className="px-4 py-3 text-left border border-gray-200 dark:border-gray-600 font-bold text-gray-900 dark:text-white">{h}</th>
                                            ))}
                                        </tr></thead>
                                        <tbody className="text-gray-700 dark:text-gray-300">
                                            {SCHOLARSHIPS.slice(0, 7).map((s, i) => (
                                                <tr key={i} className={i % 2 === 0 ? "bg-white dark:bg-gray-800" : "bg-gray-50 dark:bg-gray-900"}>
                                                    <td className="px-4 py-2 border border-gray-200 dark:border-gray-600 font-medium">{s.name}</td>
                                                    <td className="px-4 py-2 border border-gray-200 dark:border-gray-600">{s.org}</td>
                                                    <td className="px-4 py-2 border border-gray-200 dark:border-gray-600">≤ {s.cutoff.toFixed(2)}</td>
                                                    <td className="px-4 py-2 border border-gray-200 dark:border-gray-600">{s.amount}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">How to Maintain Your GWA for Scholarship Renewal</h3>
                                <p className="text-gray-700 dark:text-gray-300 mb-4">
                                    Most Philippine scholarships require not just an initial qualifying GWA, but also a maintained GWA every semester. Losing your scholarship mid-program can be financially and academically devastating. Here's how top scholars maintain their standing:
                                </p>
                                <ul className="space-y-2 mb-5 text-gray-700 dark:text-gray-300">
                                    {["Compute your GWA target every semester using our GWA Target Planner before enrollment", "Avoid overloading your schedule with difficult subjects in the same semester", "Track your grades subject-by-subject using the GWA Dashboard throughout the semester", "File for grade reconsideration if you believe any subject was graded unfairly", "If you're near the cutoff, avoid dropping subjects mid-semester as Ws can count in some universities"].map((item, i) => (
                                        <li key={i} className="flex items-start gap-2"><span className="w-2 h-2 rounded-full bg-teal-500 mt-2 flex-shrink-0" />{item}</li>
                                    ))}
                                </ul>
                                <p className="text-gray-700 dark:text-gray-300">
                                    Read our dedicated blog post on <Link to="/blog/scholarship-gwa-requirements-philippines" className="text-teal-600 dark:text-teal-400 underline font-medium">Scholarship GWA Requirements in the Philippines</Link> for a full breakdown of additional requirements. To plan your grades each semester, use our <Link to="/tools/gwa-target-planner" className="text-teal-600 dark:text-teal-400 underline font-medium">GWA Target Planner</Link>.
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
                    <div className="mt-10 bg-teal-600 text-white rounded-2xl p-6 text-center">
                        <h3 className="text-xl font-bold mb-2">Track Your Latin Honors Progress Too</h3>
                        <p className="text-teal-100 mb-4">A high GWA not only earns scholarships — it can earn you Cum Laude, Magna, or Summa at graduation. See where you stand.</p>
                        <Link to="/tools/latin-honors-tracker" className="inline-block bg-white text-teal-700 font-bold px-6 py-3 rounded-xl hover:bg-teal-50 transition-colors">Open Latin Honors Tracker →</Link>
                    </div>
                </div>
            </div>
        </>
    );
};
export default ScholarshipEligibility;
