import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { AuthorCard } from "@/components/AuthorCard";
import {
    Calculator, TrendingDown, Target, TrendingUp,
    RefreshCw, GraduationCap, ArrowRight, BookOpen,
    CheckCircle, Repeat2, BarChart3, Percent, Star,
    LayoutDashboard, Award
} from "lucide-react";

const allTools = [
    {
        category: "GWA Essentials",
        color: "blue",
        tools: [
            {
                icon: <Calculator className="h-6 w-6" />,
                name: "GWA Calculator",
                desc: "Compute your General Weighted Average instantly. Enter subjects, units, and grades — get your GWA in seconds.",
                href: "/",
                badge: "Most Popular",
                badgeColor: "bg-blue-600",
            },
            {
                icon: <TrendingUp className="h-6 w-6" />,
                name: "Cumulative GWA Tracker",
                desc: "Track your GWA across all semesters from 1st year to senior year and see your cumulative academic standing.",
                href: "/tools/cumulative-gwa-tracker",
                badge: "New",
                badgeColor: "bg-emerald-600",
            },
            {
                icon: <Target className="h-6 w-6" />,
                name: "GWA Target Planner",
                desc: "Find out what GWA you need next semester to reach your target — Cum Laude, scholarship, or any goal.",
                href: "/tools/gwa-target-planner",
                badge: "New",
                badgeColor: "bg-emerald-600",
            },
        ],
    },
    {
        category: "Grade Planning",
        color: "emerald",
        tools: [
            {
                icon: <CheckCircle className="h-6 w-6" />,
                name: "Grade Needed to Pass",
                desc: "Calculate the exact grade you need on your final exam or remaining assessments to pass your subject.",
                href: "/tools/grade-needed-to-pass",
                badge: "New",
                badgeColor: "bg-emerald-600",
            },
            {
                icon: <Calculator className="h-6 w-6" />,
                name: "Final Grade Calculator",
                desc: "Determine the final exam score needed to achieve your desired subject grade.",
                href: "/tools/final-grade-calculator",
                badge: null,
                badgeColor: "",
            },
            {
                icon: <BarChart3 className="h-6 w-6" />,
                name: "Weighted Grade Calculator",
                desc: "Calculate your subject grade from multiple weighted components — quizzes, assignments, midterms, finals.",
                href: "/tools/weighted-grade-calculator",
                badge: null,
                badgeColor: "",
            },
            {
                icon: <Calculator className="h-6 w-6" />,
                name: "Grade Average Calculator",
                desc: "Simple and fast grade averaging tool for any number of scores.",
                href: "/tools/grade-average-calculator",
                badge: null,
                badgeColor: "",
            },
        ],
    },
    {
        category: "Impact & What-If Analysis",
        color: "red",
        tools: [
            {
                icon: <TrendingDown className="h-6 w-6" />,
                name: "Failing Subject GWA Impact",
                desc: "See exactly how much a failing grade (5.0) will drop your GWA — before it happens. Support for multiple subjects.",
                href: "/tools/failing-subject-gwa-impact",
                badge: "New",
                badgeColor: "bg-emerald-600",
            },
            {
                icon: <RefreshCw className="h-6 w-6" />,
                name: "Retake Impact Calculator",
                desc: "Calculate how retaking a subject will change your GWA. Supports grade replacement, averaging, and both-counted policies.",
                href: "/tools/retake-impact-calculator",
                badge: "New",
                badgeColor: "bg-emerald-600",
            },
        ],
    },
    {
        category: "GPA & Conversion",
        color: "purple",
        tools: [
            {
                icon: <Repeat2 className="h-6 w-6" />,
                name: "GWA to GPA Converter",
                desc: "Convert your Philippine GWA to international GPA scales (4.0, UK, Australian, and more).",
                href: "/tools/gwa-to-gpa-converter",
                badge: null,
                badgeColor: "",
            },
            {
                icon: <Calculator className="h-6 w-6" />,
                name: "Semester GPA Calculator",
                desc: "Calculate your semester GPA quickly with custom weights and grading scales.",
                href: "/tools/semester-gpa-calculator",
                badge: null,
                badgeColor: "",
            },
            {
                icon: <Percent className="h-6 w-6" />,
                name: "CGPA to Percentage",
                desc: "Convert your Cumulative GPA to percentage equivalent for job applications and graduate admissions.",
                href: "/tools/cgpa-to-percentage-calculator",
                badge: null,
                badgeColor: "",
            },
        ],
    },
    {
        category: "University & Transfer",
        color: "indigo",
        tools: [
            {
                icon: <GraduationCap className="h-6 w-6" />,
                name: "Transferee GWA Evaluator",
                desc: "Check if your GWA meets transfer requirements for UP, DLSU, Ateneo, UST, PUP, and other top PH universities.",
                href: "/tools/transferee-gwa",
                badge: "Phase 1",
                badgeColor: "bg-emerald-600",
            },
        ],
    },
    {
        category: "Honors & Scholarships",
        color: "amber",
        tools: [
            {
                icon: <LayoutDashboard className="h-6 w-6" />,
                name: "GWA Dashboard",
                desc: "Semester-by-semester grade tracker with auto-save, trend chart, cumulative GWA, and CSV export. No login needed.",
                href: "/tools/gwa-dashboard",
                badge: "Phase 2",
                badgeColor: "bg-violet-600",
            },
            {
                icon: <Award className="h-6 w-6" />,
                name: "Latin Honors Tracker",
                desc: "See if you're on track for Cum Laude, Magna, or Summa Cum Laude. Get exact GWA projections for remaining semesters.",
                href: "/tools/latin-honors-tracker",
                badge: "Phase 2",
                badgeColor: "bg-violet-600",
            },
            {
                icon: <BookOpen className="h-6 w-6" />,
                name: "Scholarship Eligibility Checker",
                desc: "Enter your GWA and instantly see which Philippine scholarships you qualify for — DOST, CHED, SM Foundation, and more.",
                href: "/tools/scholarship-eligibility",
                badge: "Phase 2",
                badgeColor: "bg-violet-600",
            },
        ],
    },
    {
        category: "By University",
        color: "slate",
        tools: [
            {
                icon: <GraduationCap className="h-6 w-6" />,
                name: "UP GWA Calculator",
                desc: "Compute your GWA using the University of the Philippines 1.0–5.0 grading scale. Check University Scholar eligibility.",
                href: "/gwa-calculator-up",
                badge: null,
                badgeColor: "",
            },
            {
                icon: <GraduationCap className="h-6 w-6" />,
                name: "DLSU GWA Calculator",
                desc: "Convert De La Salle University 4.0 grades to Philippine GWA. Check Magna Honor Roll and Latin Honors eligibility.",
                href: "/gwa-calculator-dlsu",
                badge: null,
                badgeColor: "",
            },
            {
                icon: <GraduationCap className="h-6 w-6" />,
                name: "UST GWA Calculator",
                desc: "Compute your GWA using the University of Santo Tomas grading scale. Check Dean's List requirements.",
                href: "/gwa-calculator-ust",
                badge: null,
                badgeColor: "",
            },
            {
                icon: <GraduationCap className="h-6 w-6" />,
                name: "PUP GWA Calculator",
                desc: "GWA calculator for Polytechnic University students with PUP's stricter Latin Honors cutoffs (Summa ≤1.25).",
                href: "/gwa-calculator-pup",
                badge: null,
                badgeColor: "",
            },
            {
                icon: <GraduationCap className="h-6 w-6" />,
                name: "Ateneo GWA Calculator",
                desc: "Convert Ateneo letter grades (A, B+, B, C+) to Philippine GWA. Check Dean's List and Latin Honors eligibility.",
                href: "/gwa-calculator-ateneo",
                badge: null,
                badgeColor: "",
            },
        ],
    },
];

const colorMap: Record<string, { bg: string; border: string; icon: string; header: string }> = {
    blue: { bg: "bg-blue-50 dark:bg-blue-900/10", border: "border-blue-200 dark:border-blue-800", icon: "text-blue-600", header: "bg-blue-600" },
    emerald: { bg: "bg-emerald-50 dark:bg-emerald-900/10", border: "border-emerald-200 dark:border-emerald-800", icon: "text-emerald-600", header: "bg-emerald-600" },
    red: { bg: "bg-red-50 dark:bg-red-900/10", border: "border-red-200 dark:border-red-800", icon: "text-red-600", header: "bg-red-600" },
    purple: { bg: "bg-purple-50 dark:bg-purple-900/10", border: "border-purple-200 dark:border-purple-800", icon: "text-purple-600", header: "bg-purple-600" },
    indigo: { bg: "bg-indigo-50 dark:bg-indigo-900/10", border: "border-indigo-200 dark:border-indigo-800", icon: "text-indigo-600", header: "bg-indigo-600" },
    amber: { bg: "bg-amber-50 dark:bg-amber-900/10", border: "border-amber-200 dark:border-amber-800", icon: "text-amber-600", header: "bg-amber-600" },
    slate: { bg: "bg-slate-50 dark:bg-slate-900/10", border: "border-slate-200 dark:border-slate-800", icon: "text-slate-600", header: "bg-slate-600" },
};

const ToolsPage = () => {
    const totalTools = allTools.reduce((acc, cat) => acc + cat.tools.length, 0);

    return (
        <>
            <Helmet>
                <title>All GWA Calculator Tools Philippines (2025) — Free Academic Tools | mygwacalculator.com</title>
                <meta name="description" content={`${totalTools} free academic calculator tools for Filipino college students. Compute GWA, plan your target grade, check failing subject impact, track cumulative GWA, and more. No sign-up, 100% free.`} />
                <meta name="keywords" content="GWA calculator tools Philippines, free academic tools Filipino students, grade calculator Philippines, GWA tools 2025, college grade tools Philippines" />
                <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
                <link rel="canonical" href="https://mygwacalculator.com/tools" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="All GWA Calculator Tools Philippines — Free Academic Tools" />
                <meta property="og:description" content={`${totalTools} free tools for Filipino students. GWA calculator, grade planner, retake impact, transferee evaluator and more.`} />
                <meta property="og:url" content="https://mygwacalculator.com/tools" />
                <meta name="geo.region" content="PH" />
                <meta name="geo.country" content="Philippines" />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "CollectionPage",
                        "name": "GWA Calculator Tools — Philippine Academic Calculators",
                        "description": `${totalTools} free academic calculator tools for Filipino college students`,
                        "url": "https://mygwacalculator.com/tools",
                        "author": { "@type": "Person", "name": "Anmol Gautam", "url": "https://mygwacalculator.com/about" },
                        "hasPart": allTools.flatMap(cat => cat.tools.map(t => ({
                            "@type": "SoftwareApplication",
                            "name": t.name,
                            "description": t.desc,
                            "url": `https://mygwacalculator.com${t.href}`,
                            "applicationCategory": "EducationalApplication",
                            "offers": { "@type": "Offer", "price": "0", "priceCurrency": "PHP" }
                        })))
                    })}
                </script>
            </Helmet>

            <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
                {/* Hero */}
                <div className="bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 text-white">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 mt-14 text-center">
                        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-sm font-medium px-4 py-2 rounded-full mb-6">
                            <Star className="h-4 w-4 text-yellow-300" />
                            {totalTools} Free Tools — No Sign-Up Required
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
                            All Academic Tools<br />
                            <span className="text-blue-300">for Filipino Students</span>
                        </h1>
                        <p className="text-blue-100 text-xl max-w-2xl mx-auto mb-8">
                            From computing your GWA to planning your target grade, checking transfer eligibility, and tracking your cumulative standing — everything you need in one place.
                        </p>
                        <div className="flex flex-wrap justify-center gap-3">
                            <Link to="/" className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors">
                                <Calculator className="h-4 w-4" /> GWA Calculator
                            </Link>
                            <Link to="/tools/gwa-target-planner" className="inline-flex items-center gap-2 bg-white/10 border border-white/30 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/20 transition-colors">
                                <Target className="h-4 w-4" /> Target Planner
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    {/* Stats bar */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
                        {[
                            { label: "Free Tools", value: `${totalTools}` },
                            { label: "No Sign-Up", value: "100%" },
                            { label: "Philippine Grading", value: "Built-in" },
                            { label: "Students Helped", value: "10,000+" },
                        ].map(({ label, value }) => (
                            <div key={label} className="bg-white dark:bg-gray-800 rounded-2xl p-4 text-center shadow-lg border border-gray-100 dark:border-gray-700">
                                <p className="text-2xl font-bold text-blue-700 dark:text-blue-400">{value}</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{label}</p>
                            </div>
                        ))}
                    </div>

                    {/* Tool Categories */}
                    <div className="space-y-10">
                        {allTools.map((cat) => {
                            const colors = colorMap[cat.color];
                            return (
                                <div key={cat.category}>
                                    <div className={`inline-flex items-center gap-2 ${colors.header} text-white text-sm font-bold px-4 py-2 rounded-xl mb-5`}>
                                        {cat.category}
                                    </div>
                                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                                        {cat.tools.map((tool) => (
                                            <Link
                                                key={tool.href}
                                                to={tool.href}
                                                className={`group relative flex flex-col p-6 rounded-2xl border ${colors.bg} ${colors.border} hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
                                            >
                                                {tool.badge && (
                                                    <span className={`absolute top-3 right-3 text-xs font-bold text-white px-2 py-0.5 rounded-full ${tool.badgeColor}`}>
                                                        {tool.badge}
                                                    </span>
                                                )}
                                                <div className={`${colors.icon} mb-4 w-10 h-10 flex items-center justify-center rounded-xl bg-white dark:bg-gray-800 shadow-sm`}>
                                                    {tool.icon}
                                                </div>
                                                <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
                                                    {tool.name}
                                                </h3>
                                                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed flex-1">
                                                    {tool.desc}
                                                </p>
                                                <div className={`mt-4 flex items-center gap-1 text-sm font-semibold ${colors.icon}`}>
                                                    Use Tool <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Blog interlinking */}
                    <div className="mt-16 bg-gradient-to-br from-purple-600 to-indigo-700 rounded-3xl p-8 text-white">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                            <div>
                                <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
                                    <BookOpen className="h-6 w-6" /> Learn More with Our Guides
                                </h2>
                                <p className="text-purple-100 max-w-xl">
                                    Not sure which tool to use? Our blog has step-by-step guides on GWA computation, Latin Honors, scholarships, and more — all written for Filipino students.
                                </p>
                            </div>
                            <Link to="/blog" className="flex-shrink-0 bg-white text-purple-700 font-bold px-6 py-3 rounded-xl hover:bg-purple-50 transition-colors inline-flex items-center gap-2">
                                Read the Blog <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>

                    {/* About Author */}
                    <div className="mt-10">
                        <AuthorCard variant="full" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ToolsPage;
