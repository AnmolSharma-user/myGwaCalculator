import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Calculator, BookOpen, FileText, Info, Mail, Shield, Scale, HelpCircle, Map, ExternalLink } from "lucide-react";

const sections = [
    {
        icon: <Calculator className="h-5 w-5 text-blue-600" />,
        title: "Calculator Tools",
        color: "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-700",
        headerColor: "bg-blue-600",
        pages: [
            { label: "All Tools (Hub)", href: "/tools", desc: "Browse all 20 free academic calculator tools" },
            { label: "GWA Calculator (Home)", href: "/", desc: "Compute your General Weighted Average instantly" },
            { label: "GWA to GPA Converter", href: "/tools/gwa-to-gpa-converter", desc: "Convert Philippine GWA to international GPA scale" },
            { label: "Grade Average Calculator", href: "/tools/grade-average-calculator", desc: "Simple average of multiple subject grades" },
            { label: "Weighted Grade Calculator", href: "/tools/weighted-grade-calculator", desc: "Calculate grades with different assignment weights" },
            { label: "Final Grade Calculator", href: "/tools/final-grade-calculator", desc: "Find out what score you need on your final exam" },
            { label: "Semester GPA Calculator", href: "/tools/semester-gpa-calculator", desc: "Track your GPA for a full semester" },
            { label: "CGPA to Percentage Calculator", href: "/tools/cgpa-to-percentage-calculator", desc: "Convert cumulative GPA to percentage" },
            { label: "Grade Needed to Pass", href: "/tools/grade-needed-to-pass", desc: "Calculate the exact grade needed to pass your subject" },
            { label: "Failing Subject GWA Impact", href: "/tools/failing-subject-gwa-impact", desc: "See how a 5.0 grade affects your overall GWA" },
            { label: "GWA Target Planner", href: "/tools/gwa-target-planner", desc: "Plan the GWA you need next semester to hit your goal" },
            { label: "Cumulative GWA Tracker", href: "/tools/cumulative-gwa-tracker", desc: "Track GWA across all your college semesters" },
            { label: "Retake Impact Calculator", href: "/tools/retake-impact-calculator", desc: "How retaking a subject changes your GWA" },
            { label: "Transferee GWA Evaluator", href: "/tools/transferee-gwa", desc: "Check GWA requirements for PH university transfers" },
            { label: "GWA Dashboard (Semester Tracker)", href: "/tools/gwa-dashboard", desc: "Multi-semester grade tracker with auto-save and trend chart" },
            { label: "Latin Honors Tracker", href: "/tools/latin-honors-tracker", desc: "Track your progress toward Cum Laude, Magna, or Summa" },
            { label: "Scholarship Eligibility Checker", href: "/tools/scholarship-eligibility", desc: "Check which PH scholarships you qualify for by GWA" },
            { label: "UP GWA Calculator", href: "/gwa-calculator-up", desc: "University of Philippines grading scale and University Scholar guide" },
            { label: "DLSU GWA Calculator", href: "/gwa-calculator-dlsu", desc: "De La Salle University 4.0 scale conversion and Magna Honor Roll" },
            { label: "UST GWA Calculator", href: "/gwa-calculator-ust", desc: "University of Santo Tomas grading system and Dean's List guide" },
            { label: "PUP GWA Calculator", href: "/gwa-calculator-pup", desc: "Polytechnic University of the Philippines GWA and Latin Honors" },
            { label: "Ateneo GWA Calculator", href: "/gwa-calculator-ateneo", desc: "Ateneo de Manila letter grade to Philippine GWA conversion" },
        ],
    },
    {
        icon: <BookOpen className="h-5 w-5 text-purple-600" />,
        title: "Blog & Guides",
        color: "bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-700",
        headerColor: "bg-purple-600",
        pages: [
            { label: "All Blog Posts", href: "/blog", desc: "Browse all academic guides and articles" },
            { label: "How to Compute GWA", href: "/blog/how-to-compute-gwa", desc: "Step-by-step GWA calculation guide" },
            { label: "How to Compute Grades in College", href: "/blog/how-to-compute-grades-in-college", desc: "Understanding college grade computation" },
            { label: "Dean's List Requirements Philippines", href: "/blog/deans-list-requirements-philippines", desc: "GWA cutoffs for Dean's List at all major schools" },
            { label: "What is a Good GWA in the Philippines?", href: "/blog/what-is-a-good-gwa-philippines", desc: "GWA benchmarks for honors, scholarships, employment" },
            { label: "Latin Honors Philippines", href: "/blog/latin-honors-philippines", desc: "Cum Laude, Magna, Summa requirements by university" },
            { label: "How to Improve Your GWA in College", href: "/blog/how-to-improve-gwa-in-college", desc: "12 proven strategies to raise your GWA" },
            { label: "Scholarship GWA Requirements Philippines", href: "/blog/scholarship-gwa-requirements-philippines", desc: "DOST, CHED, SM, Metrobank and more" },
            { label: "GWA vs GPA: Key Differences", href: "/blog/gwa-vs-gpa-differences", desc: "Comparison table and full conversion chart" },
            { label: "Study Habits of High-GWA Students", href: "/blog/study-habits-high-gwa-students", desc: "15 science-backed techniques from top Filipino students" },
            { label: "How to Compute Semestral GWA", href: "/blog/how-to-compute-semestral-gwa", desc: "Formula, worked example, and free calculator" },
        ],
    },
    {
        icon: <Info className="h-5 w-5 text-green-600" />,
        title: "About & Support",
        color: "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-700",
        headerColor: "bg-green-600",
        pages: [
            { label: "About Us", href: "/about", desc: "Learn about the GWA Calculator team and mission" },
            { label: "FAQ", href: "/faq", desc: "Frequently asked questions about GWA computation" },
            { label: "Contact Us", href: "/contact", desc: "Send us a message or report a bug" },
        ],
    },
    {
        icon: <Shield className="h-5 w-5 text-gray-600" />,
        title: "Legal",
        color: "bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-600",
        headerColor: "bg-gray-600",
        pages: [
            { label: "Privacy Policy", href: "/privacy", desc: "How we collect and protect your information" },
            { label: "Terms & Conditions", href: "/terms", desc: "Rules for using GWA Calculator" },
            { label: "Disclaimer", href: "/disclaimer", desc: "Accuracy and educational use notice" },
        ],
    },
];

const SitemapPage = () => {
    const totalPages = sections.reduce((acc, s) => acc + s.pages.length, 0);

    return (
        <>
            <Helmet>
                <title>Sitemap – GWA Calculator Philippines</title>
                <meta name="description" content="Full sitemap of mygwacalculator.com — find all calculator tools, blog guides, and informational pages for Filipino college students." />
                <link rel="canonical" href="https://mygwacalculator.com/sitemap" />
                <meta name="robots" content="index, follow" />
            </Helmet>

            <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 pb-16 px-4 transition-colors">
                <div className="max-w-5xl mx-auto">

                    {/* Header */}
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                            <Map className="h-4 w-4" /> Site Navigation
                        </div>
                        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">Sitemap</h1>
                        <p className="text-gray-500 dark:text-gray-400 text-base max-w-xl mx-auto">
                            All {totalPages} pages on mygwacalculator.com, organized by category. Looking for something specific?
                        </p>
                        <a
                            href="/sitemap.xml"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 mt-4 text-sm text-blue-600 dark:text-blue-400 hover:underline font-medium"
                        >
                            <FileText className="h-4 w-4" />
                            View XML Sitemap (for search engines)
                            <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                    </div>

                    {/* Sections */}
                    <div className="space-y-8">
                        {sections.map((section, si) => (
                            <div key={si} className={`rounded-2xl border overflow-hidden shadow-sm ${section.color}`}>
                                {/* Section Header */}
                                <div className={`${section.headerColor} text-white px-6 py-4 flex items-center gap-3`}>
                                    <div className="w-9 h-9 bg-white/20 rounded-xl flex items-center justify-center">
                                        {section.icon}
                                    </div>
                                    <div>
                                        <h2 className="font-bold text-lg">{section.title}</h2>
                                        <p className="text-white/75 text-xs">{section.pages.length} pages</p>
                                    </div>
                                </div>

                                {/* Pages Grid */}
                                <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                    {section.pages.map((page, pi) => (
                                        <Link
                                            key={pi}
                                            to={page.href}
                                            className="flex items-start gap-3 p-3.5 bg-white dark:bg-gray-800 rounded-xl hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 border border-transparent hover:border-blue-200 dark:hover:border-blue-700 group"
                                        >
                                            <span className="flex-shrink-0 mt-0.5 w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600 group-hover:bg-blue-500 transition-colors" />
                                            <div>
                                                <span className="text-sm font-semibold text-gray-800 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug block">
                                                    {page.label}
                                                </span>
                                                <span className="text-xs text-gray-500 dark:text-gray-400 leading-snug mt-0.5 block">
                                                    {page.desc}
                                                </span>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Footer Note */}
                    <div className="mt-10 text-center">
                        <p className="text-sm text-gray-400 dark:text-gray-500">
                            Can't find what you're looking for?{" "}
                            <Link to="/faq" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">Check our FAQ</Link>
                            {" "}or{" "}
                            <Link to="/contact" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">contact us</Link>.
                        </p>
                    </div>

                </div>
            </div>
        </>
    );
};

export default SitemapPage;
