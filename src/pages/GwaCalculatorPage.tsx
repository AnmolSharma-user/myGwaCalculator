import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import {
    Calculator, BookOpen, GraduationCap, Target, Users, Star,
    CheckCircle, ArrowRight, ChevronDown
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

/**
 * /gwa-calculator  — a comprehensive EDUCATIONAL guide about the GWA calculation system
 * Target keyword: "General Weighted Average Calculator Philippines" / "gwa calculator guide"
 *
 * This page is INTENTIONALLY different from the home page:
 *  - Home (/):            Tool-first; CTA to use the live interactive calculator
 *  - This page (/gwa-calculator): Content-first; deep explanatory guide with embedded
 *                          calculator link, targeting informational search intent.
 *
 * This avoids Google keyword cannibalization by targeting different search intents.
 */

const universities = [
    { name: "University of the Philippines (UP)", scale: "1.0 – 5.0", passing: "3.0", best: "1.0", system: "Weighted by units" },
    { name: "University of Santo Tomas (UST)", scale: "1.0 – 5.0", passing: "3.0", best: "1.0", system: "Weighted by units" },
    { name: "Polytechnic Univ. of PH (PUP)", scale: "1.0 – 5.0", passing: "3.0", best: "1.0", system: "Weighted by units" },
    { name: "De La Salle University (DLSU)", scale: "0.0 – 4.0", passing: "2.0", best: "4.0", system: "Grade Points (US-style)" },
    { name: "Ateneo de Manila (ADMU)", scale: "0.0 – 4.0", passing: "2.0", best: "4.0", system: "Grade Points (US-style)" },
    { name: "PLM / FEU / Mapua / others", scale: "1.0 – 5.0", passing: "3.0", best: "1.0", system: "Weighted by units" },
];

const steps = [
    { n: "1", title: "List your subjects", desc: "Write down every subject you enrolled in this semester along with the exact number of units each one carries." },
    { n: "2", title: "Record your final grades", desc: "Gather your official grades (1.00, 1.25, 1.50, 1.75, 2.00, 2.25, 2.50, 2.75, 3.00, or 5.00) for each subject." },
    { n: "3", title: "Multiply grade × units", desc: "For each subject, multiply the grade by the number of units. This gives you the grade points contribution of that subject." },
    { n: "4", title: "Sum all grade points", desc: "Add up all the individual grade-points values you computed in Step 3." },
    { n: "5", title: "Sum all units", desc: "Add up the unit count for all subjects enrolled this semester." },
    { n: "6", title: "Divide and round", desc: "GWA = Total Grade Points ÷ Total Units. Round to 2 decimal places for your final GWA." },
];

const faqs = [
    { q: "What is a General Weighted Average (GWA)?", a: "GWA stands for General Weighted Average — the official academic performance measure used at Philippine universities. It is calculated by multiplying each subject's grade by its unit count, summing all those products, then dividing by the total number of units. A lower GWA is better: 1.0 is perfect, 5.0 is failing." },
    { q: "Is this GWA calculator free to use?", a: "Yes — our GWA Calculator is completely free forever. No registration, no subscription, no hidden fees. Just enter your grades and units and get your GWA instantly." },
    { q: "Which universities in the Philippines use GWA?", a: "Most state universities and colleges (SUCs) and many private institutions in the Philippines use the 1.0–5.0 GWA scale. Notable exceptions include DLSU and Ateneo, which use a 4.0 GPA scale. Our calculator supports both." },
    { q: "What is the difference between semestral GWA and cumulative GWA?", a: "Semestral GWA covers only one semester. Cumulative GWA is the weighted average across all semesters since your first year. Scholarships and Dean's List usually refer to semestral GWA; Latin Honors uses cumulative GWA." },
    { q: "How do I improve my GWA?", a: "Focus on high-unit subjects first (they move your GWA more), attend all classes, use active recall instead of passive re-reading, and use our Final Grade Calculator before exams to know exactly what you need. Read our full improvement guide on the blog." },
    { q: "Can I compute GWA for multiple semesters?", a: "Yes — our calculator lets you enter all your subjects across all semesters and computes the cumulative GWA automatically. Each semester's subjects are weighted by their unit count." },
    { q: "What GWA do I need for the Dean's List?", a: "Most Philippine universities require a semestral GWA of 1.75 or below (no failing grades) for Dean's List. UP requires 1.00–1.75 for University/College Scholar. Check your school's student handbook for exact requirements." },
];

const GwaCalculatorPage = () => {
    const [openExample, setOpenExample] = useState(false);

    const exampleRows = [
        { subj: "Mathematics", units: 5, grade: 1.25 },
        { subj: "English", units: 3, grade: 1.50 },
        { subj: "Natural Sciences", units: 4, grade: 1.75 },
        { subj: "Filipino", units: 3, grade: 1.50 },
        { subj: "Physical Education", units: 2, grade: 1.00 },
    ];
    const totalUnits = exampleRows.reduce((s, r) => s + r.units, 0);
    const totalGP = exampleRows.reduce((s, r) => s + r.units * r.grade, 0);
    const gwa = (totalGP / totalUnits).toFixed(4);

    return (
        <>
            <Helmet>
                <title>GWA Calculator Guide Philippines – How to Compute General Weighted Average (2025)</title>
                <meta name="description" content="Complete guide to understanding and computing your General Weighted Average (GWA) in the Philippines. Learn the formula, see a worked example, compare university scales, and use our free calculator." />
                <meta name="keywords" content="general weighted average calculator Philippines, GWA computation guide, GWA formula Philippines, how to use GWA calculator, compute GWA online Philippines 2025" />
                <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
                <link rel="canonical" href="https://mygwacalculator.com/gwa-calculator" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="GWA Calculator Guide Philippines – How to Compute Your General Weighted Average" />
                <meta property="og:description" content="Complete guide to understanding and computing your General Weighted Average in the Philippines." />
                <meta property="og:url" content="https://mygwacalculator.com/gwa-calculator" />
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Article",
                    "headline": "GWA Calculator Guide Philippines – How to Compute General Weighted Average",
                    "datePublished": "2025-03-05T00:00:00+08:00",
                    "dateModified": "2025-03-05T00:00:00+08:00",
                    "author": {
                        "@type": "Person",
                        "name": "Anmol Gautam",
                        "url": "https://mygwacalculator.com/about",
                        "jobTitle": "Founder",
                        "worksFor": { "@type": "Organization", "name": "mygwacalculator.com" }
                    },
                    "publisher": { "@type": "Organization", "name": "GWA Calculator", "url": "https://mygwacalculator.com" },
                    "url": "https://mygwacalculator.com/gwa-calculator",
                    "description": "Complete guide to computing GWA in the Philippines.",
                    "inLanguage": "en-PH"
                })}</script>
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } }))
                })}</script>
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "HowTo",
                    "name": "How to Compute Your GWA in the Philippines",
                    "step": steps.map(s => ({ "@type": "HowToStep", "name": s.title, "text": s.desc }))
                })}</script>
            </Helmet>

            <div className="min-h-screen bg-white dark:bg-gray-900">

                {/* ====================================================
            HERO
        ==================================================== */}
                <div className="bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 text-white pt-28 pb-16 px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 bg-white/15 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
                            <Calculator className="h-4 w-4" /> Free Academic Tool · No Sign-up Required
                        </div>
                        <h1 className="text-3xl sm:text-5xl font-extrabold mb-5 leading-tight">
                            GWA Calculator Guide Philippines
                        </h1>
                        <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto mb-8 leading-relaxed">
                            Everything you need to understand, compute, and improve your <strong>General Weighted Average (GWA)</strong> — the official academic performance metric of Philippine universities.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                to="/"
                                className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors shadow-lg text-base"
                            >
                                <Calculator className="h-5 w-5" /> Open Live GWA Calculator
                            </Link>
                            <a
                                href="#how-to-compute"
                                className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors text-base"
                            >
                                <BookOpen className="h-5 w-5" /> Read the Formula Guide
                                <ChevronDown className="h-4 w-4" />
                            </a>
                        </div>

                        {/* Trust stats */}
                        <div className="grid grid-cols-3 gap-4 mt-12 max-w-lg mx-auto">
                            {[["100 %", "Free Forever"], ["25 +", "Covered Pages"], ["10 +", "Blog Guides"]].map(([n, l], i) => (
                                <div key={i} className="bg-white/10 rounded-2xl p-4">
                                    <div className="text-2xl font-black text-white">{n}</div>
                                    <div className="text-xs text-blue-200 mt-1 font-medium">{l}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* ====================================================
              WHAT IS GWA
          ==================================================== */}
                    <section className="py-14">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                            What is a General Weighted Average (GWA)?
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-5">
                            The <strong>General Weighted Average (GWA)</strong> is the official measure of academic performance used at most universities in the Philippines. Unlike a simple average that treats all subjects equally, the GWA weights each subject's grade by the number of units it carries — so a 6-unit subject affects your GWA 6 times more than a 1-unit subject.
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-5">
                            Philippine universities use a <strong>1.0 to 5.0 scale</strong>, where <strong>lower is better</strong>. A GWA of 1.0 represents perfect academic performance, while 3.0 is the minimum passing grade at most institutions. This is the opposite of GPA systems used in the United States and most of the world, where higher is better.
                        </p>
                        <div className="grid sm:grid-cols-3 gap-4 mb-6">
                            {[
                                { icon: <Star className="h-5 w-5 text-yellow-500" />, label: "Best Possible GWA", value: "1.00", note: "Perfect score" },
                                { icon: <CheckCircle className="h-5 w-5 text-blue-500" />, label: "Typical Honors GWA", value: "1.75", note: "Dean's List cutoff" },
                                { icon: <Target className="h-5 w-5 text-green-500" />, label: "Minimum Passing", value: "3.00", note: "Per subject" },
                            ].map((s, i) => (
                                <div key={i} className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-5 text-center border border-gray-100 dark:border-gray-700">
                                    <div className="flex justify-center mb-2">{s.icon}</div>
                                    <div className="text-3xl font-black text-blue-600 dark:text-blue-400">{s.value}</div>
                                    <div className="font-semibold text-gray-900 dark:text-white text-sm mt-1">{s.label}</div>
                                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{s.note}</div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ====================================================
              FORMULA
          ==================================================== */}
                    <section id="how-to-compute" className="py-4 border-t border-gray-100 dark:border-gray-800">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mt-10 mb-6">
                            The GWA Formula
                        </h2>
                        <div className="bg-blue-600 text-white rounded-2xl p-6 sm:p-8 text-center mb-8 shadow-xl">
                            <p className="text-sm font-medium text-blue-200 uppercase tracking-widest mb-3">Philippine GWA Formula</p>
                            <p className="text-2xl sm:text-3xl font-black">GWA = Σ (Grade × Units) ÷ Total Units</p>
                            <p className="text-blue-200 text-sm mt-3">Where Σ = sum of all subjects · Grade is on the 1.0–5.0 scale · Units = credit hours per subject</p>
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Step-by-Step Computation</h3>
                        <div className="space-y-4 mb-10">
                            {steps.map((s) => (
                                <div key={s.n} className="flex gap-4 items-start">
                                    <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center font-black text-lg shadow">{s.n}</div>
                                    <div className="flex-1 bg-gray-50 dark:bg-gray-800 rounded-xl p-4 border border-gray-100 dark:border-gray-700">
                                        <h4 className="font-bold text-gray-900 dark:text-white mb-1">{s.title}</h4>
                                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{s.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Worked Example (toggle) */}
                        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl border border-blue-200 dark:border-blue-700 overflow-hidden mb-10">
                            <button
                                onClick={() => setOpenExample(!openExample)}
                                className="w-full flex items-center justify-between px-6 py-4 text-left font-bold text-blue-900 dark:text-blue-200 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                            >
                                <span className="flex items-center gap-2"><Calculator className="h-4 w-4" /> See a Worked Example</span>
                                <ChevronDown className={`h-4 w-4 transition-transform ${openExample ? "rotate-180" : ""}`} />
                            </button>
                            {openExample && (
                                <div className="px-6 pb-6">
                                    <div className="overflow-x-auto">
                                        <table className="w-full border-collapse text-sm">
                                            <thead><tr className="bg-blue-600 text-white">
                                                <th className="px-3 py-2.5 text-left border border-blue-500">Subject</th>
                                                <th className="px-3 py-2.5 text-center border border-blue-500">Units</th>
                                                <th className="px-3 py-2.5 text-center border border-blue-500">Grade</th>
                                                <th className="px-3 py-2.5 text-center border border-blue-500">Grade Points</th>
                                            </tr></thead>
                                            <tbody>
                                                {exampleRows.map((row, i) => (
                                                    <tr key={i} className={i % 2 === 0 ? "bg-white dark:bg-gray-800" : "bg-blue-50/50 dark:bg-gray-750"}>
                                                        <td className="px-3 py-2 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200">{row.subj}</td>
                                                        <td className="px-3 py-2 border border-gray-200 dark:border-gray-700 text-center text-gray-700 dark:text-gray-300">{row.units}</td>
                                                        <td className="px-3 py-2 border border-gray-200 dark:border-gray-700 text-center font-semibold text-blue-700 dark:text-blue-300">{row.grade.toFixed(2)}</td>
                                                        <td className="px-3 py-2 border border-gray-200 dark:border-gray-700 text-center text-gray-700 dark:text-gray-300">{(row.units * row.grade).toFixed(2)}</td>
                                                    </tr>
                                                ))}
                                                <tr className="bg-blue-600 text-white font-bold">
                                                    <td className="px-3 py-2.5 border border-blue-500">TOTAL</td>
                                                    <td className="px-3 py-2.5 border border-blue-500 text-center">{totalUnits}</td>
                                                    <td className="px-3 py-2.5 border border-blue-500 text-center"></td>
                                                    <td className="px-3 py-2.5 border border-blue-500 text-center">{totalGP.toFixed(2)}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="mt-4 bg-white dark:bg-gray-800 rounded-xl p-4 border border-blue-200 dark:border-blue-700 text-center">
                                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-1">GWA = {totalGP.toFixed(2)} ÷ {totalUnits} =</p>
                                        <p className="text-3xl font-black text-blue-600 dark:text-blue-400">{parseFloat(gwa).toFixed(2)}</p>
                                        <p className="text-green-600 dark:text-green-400 text-sm font-semibold mt-1">Very Good Standing — College Scholar eligible at most schools!</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </section>

                    {/* ====================================================
              UNIVERSITY SCALES
          ==================================================== */}
                    <section className="py-4 border-t border-gray-100 dark:border-gray-800">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mt-10 mb-2">
                            Grading Scales by University
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm">Not all Philippine universities use the same scale. Here's a quick reference:</p>
                        <div className="overflow-x-auto mb-10">
                            <table className="w-full border-collapse text-sm">
                                <thead><tr className="bg-gray-800 text-white">
                                    {["University", "Grade Scale", "Passing Grade", "Best Grade", "System"].map(h => (
                                        <th key={h} className="px-3 py-3 text-left border border-gray-700">{h}</th>
                                    ))}
                                </tr></thead>
                                <tbody>
                                    {universities.map((u, i) => (
                                        <tr key={i} className={i % 2 === 0 ? "bg-white dark:bg-gray-800" : "bg-gray-50 dark:bg-gray-750"}>
                                            <td className="px-3 py-2.5 border border-gray-200 dark:border-gray-700 font-medium text-gray-900 dark:text-white">{u.name}</td>
                                            <td className="px-3 py-2.5 border border-gray-200 dark:border-gray-700 text-blue-700 dark:text-blue-300 font-semibold">{u.scale}</td>
                                            <td className="px-3 py-2.5 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">{u.passing}</td>
                                            <td className="px-3 py-2.5 border border-gray-200 dark:border-gray-700 text-green-700 dark:text-green-400 font-semibold">{u.best}</td>
                                            <td className="px-3 py-2.5 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 text-xs">{u.system}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* ====================================================
              WHY USE OUR CALCULATOR
          ==================================================== */}
                    <section className="py-4 border-t border-gray-100 dark:border-gray-800">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mt-10 mb-6">
                            Why Use the mygwacalculator.com Calculator?
                        </h2>
                        <div className="grid sm:grid-cols-2 gap-4 mb-10">
                            {[
                                { icon: <Calculator className="h-5 w-5 text-blue-600" />, title: "Instant & Accurate", desc: "Enter your grades and units, get your GWA in milliseconds. No manual computation, no errors." },
                                { icon: <GraduationCap className="h-5 w-5 text-purple-600" />, title: "Multi-University Support", desc: "Supports both the 1.0–5.0 Philippine scale and 4.0 US-style GPA scale used at DLSU and Ateneo." },
                                { icon: <Target className="h-5 w-5 text-green-600" />, title: "Projection Mode", desc: "Enter projected grades to see your GWA before official results — perfect for finals preparation." },
                                { icon: <Users className="h-5 w-5 text-orange-600" />, title: "Built for Filipino Students", desc: "Designed with Philippine university requirements in mind: GWA, honours, scholarships, and Dean's List." },
                                { icon: <Star className="h-5 w-5 text-yellow-600" />, title: "All Tools Free", desc: "GWA Calculator, Final Grade Calculator, GPA Converter, Weighted Grades — all 100% free, forever." },
                                { icon: <CheckCircle className="h-5 w-5 text-teal-600" />, title: "No Sign-up Needed", desc: "Use all tools instantly without creating an account. Your data stays in your browser." },
                            ].map((f, i) => (
                                <div key={i} className="flex gap-4 p-5 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700">
                                    <div className="flex-shrink-0 w-10 h-10 bg-white dark:bg-gray-700 rounded-xl flex items-center justify-center shadow-sm">{f.icon}</div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 dark:text-white mb-1 text-sm">{f.title}</h3>
                                        <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">{f.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ====================================================
              OTHER TOOLS
          ==================================================== */}
                    <section className="py-4 border-t border-gray-100 dark:border-gray-800">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-6">Other Free Academic Tools</h2>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
                            {[
                                { title: "Final Grade Calculator", href: "/tools/final-grade-calculator", desc: "Find out what score you need on your final exam" },
                                { title: "GWA to GPA Converter", href: "/tools/gwa-to-gpa-converter", desc: "Convert Philippine GWA to 4.0 GPA for international applications" },
                                { title: "Weighted Grade Calculator", href: "/tools/weighted-grade-calculator", desc: "Calculate grades with different assignment weights" },
                                { title: "Grade Average Calculator", href: "/tools/grade-average-calculator", desc: "Simple average of multiple subject grades" },
                                { title: "Semester GPA Calculator", href: "/tools/semester-gpa-calculator", desc: "Track your GPA across a full semester" },
                                { title: "CGPA to Percentage", href: "/tools/cgpa-to-percentage-calculator", desc: "Convert CGPA to percentage score" },
                            ].map((t, i) => (
                                <Link key={i} to={t.href} className="group flex items-start gap-3 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-200">
                                    <Calculator className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0 group-hover:text-blue-600" />
                                    <div>
                                        <p className="text-sm font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{t.title}</p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{t.desc}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>

                    {/* ====================================================
              FAQ
          ==================================================== */}
                    <section className="py-4 border-t border-gray-100 dark:border-gray-800">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mt-10 mb-6">
                            Frequently Asked Questions
                        </h2>
                        <Accordion type="single" collapsible className="w-full mb-10">
                            {faqs.map((faq, i) => (
                                <AccordionItem key={i} value={`f-${i}`}>
                                    <AccordionTrigger className="text-gray-900 dark:text-white text-left font-semibold">{faq.q}</AccordionTrigger>
                                    <AccordionContent className="text-gray-700 dark:text-gray-300 leading-relaxed">{faq.a}</AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </section>

                    {/* ====================================================
              RELATED READING
          ==================================================== */}
                    <section className="py-4 border-t border-gray-100 dark:border-gray-800 mb-16">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-6">Related Guides</h2>
                        <div className="grid sm:grid-cols-2 gap-4 mb-10">
                            {[
                                { title: "What is a Good GWA in the Philippines?", href: "/blog/what-is-a-good-gwa-philippines", tag: "Guide" },
                                { title: "Latin Honors Philippines: Cum Laude, Magna, Summa", href: "/blog/latin-honors-philippines", tag: "Graduation" },
                                { title: "How to Improve Your GWA — 12 Strategies", href: "/blog/how-to-improve-gwa-in-college", tag: "Strategy" },
                                { title: "Scholarship GWA Requirements Philippines", href: "/blog/scholarship-gwa-requirements-philippines", tag: "Scholarships" },
                            ].map((p, i) => (
                                <Link key={i} to={p.href} className="group flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all">
                                    <BookOpen className="h-4 w-4 text-purple-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 text-xs mb-1">{p.tag}</Badge>
                                        <p className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">{p.title}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>

                    {/* ====================================================
              FINAL CTA
          ==================================================== */}
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-2xl p-8 text-center mb-16 shadow-xl">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-3">Ready to Compute Your GWA?</h2>
                        <p className="text-blue-100 mb-6 max-w-xl mx-auto">Use our free, instant GWA Calculator — no sign-up, no ads blocking the tool, built specifically for Filipino students.</p>
                        <Link to="/" className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors shadow-lg text-base">
                            <Calculator className="h-5 w-5" /> Open GWA Calculator <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>

                </div>
            </div>
        </>
    );
};

export default GwaCalculatorPage;
