import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, BookOpen, TrendingUp, GraduationCap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const allPosts = [
  {
    slug: "/blog/how-to-compute-gwa",
    title: "How to Compute GWA in the Philippines",
    excerpt: "A complete step-by-step guide to calculating your General Weighted Average using the official Philippine formula, with worked examples for UP, UST, PUP, and DLSU.",
    image: "/images/blog-compute-gwa.png",
    date: "February 12, 2025",
    readTime: "8 min read",
    category: "Tutorial",
    categoryColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
    featured: true,
  },
  {
    slug: "/blog/what-is-a-good-gwa-philippines",
    title: "What is a Good GWA in the Philippines? (2025 Guide)",
    excerpt: "Is your GWA good enough? We break down what GWA scores mean at every level — from excellent to passing — and what benchmarks apply for Dean's List, honors, and employment.",
    image: "/images/blog-good-gwa.png",
    date: "March 5, 2025",
    readTime: "9 min read",
    category: "Guide",
    categoryColor: "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300",
    featured: false,
  },
  {
    slug: "/blog/latin-honors-philippines",
    title: "Latin Honors Philippines: Cum Laude, Magna & Summa Requirements (All Universities)",
    excerpt: "Complete GWA cutoffs for Cum Laude, Magna Cum Laude, and Summa Cum Laude at UP, UST, DLSU, PUP and more. Plus rules that can disqualify you even with a great GWA.",
    image: "/images/blog-latin-honors.png",
    date: "March 5, 2025",
    readTime: "10 min read",
    category: "Graduation",
    categoryColor: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
    featured: false,
  },
  {
    slug: "/blog/how-to-improve-gwa-in-college",
    title: "How to Improve Your GWA in College Philippines — 12 Proven Strategies",
    excerpt: "Your GWA is not fixed. Discover 12 evidence-backed strategies from students who recovered their GWA from 2.5 to 1.75, including how to prioritize subjects strategically.",
    image: "/images/blog-improve-gwa.png",
    date: "March 5, 2025",
    readTime: "11 min read",
    category: "Strategy",
    categoryColor: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
    featured: false,
  },
  {
    slug: "/blog/how-to-compute-grades-in-college",
    title: "How to Compute Grades in College Philippines",
    excerpt: "Learn how to calculate your individual subject grades, semestral averages, and understand the difference between raw scores and weighted grades in Philippine colleges.",
    image: "/images/blog-college-grades.png",
    date: "February 12, 2025",
    readTime: "7 min read",
    category: "Tutorial",
    categoryColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
    featured: false,
  },
  {
    slug: "/blog/deans-list-requirements-philippines",
    title: "Dean's List Requirements Philippines: All Major Universities",
    excerpt: "Find out the exact GWA cutoffs for Dean's List and University/College Scholar recognition at UP, UST, DLSU, PUP, PLM, NU, and other Philippine universities.",
    image: "/images/blog-deans-list.png",
    date: "February 12, 2025",
    readTime: "9 min read",
    category: "Honors",
    categoryColor: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300",
    featured: false,
  },
  {
    slug: "/blog/scholarship-gwa-requirements-philippines",
    title: "College Scholarship GWA Requirements in the Philippines (2025)",
    excerpt: "Find out which scholarships you qualify for based on your GWA. Covers CHED, DOST-SEI, SM Foundation, Metrobank, GSIS, and LGU scholarships with GWA cutoffs for each.",
    image: "/images/blog-scholarship-gwa.png",
    date: "March 5, 2025",
    readTime: "9 min read",
    category: "Scholarships",
    categoryColor: "bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300",
    featured: false,
  },
  {
    slug: "/blog/gwa-vs-gpa-differences",
    title: "GWA vs GPA: Key Differences & Complete Conversion Chart",
    excerpt: "The Philippine GWA and international GPA work oppositely. We explain why, show you a complete GWA-to-GPA conversion table, and help you know which scale to use when applying abroad.",
    image: "/images/blog-gwa-vs-gpa.png",
    date: "March 5, 2025",
    readTime: "8 min read",
    category: "Explainer",
    categoryColor: "bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300",
    featured: false,
  },
  {
    slug: "/blog/study-habits-high-gwa-students",
    title: "Study Habits of High-GWA Filipino Students: 15 Science-Backed Techniques",
    excerpt: "How do students with GWA 1.5 actually study? Based on conversations with Cum Laude and Magna Cum Laude graduates, here are the 15 habits that make the difference.",
    image: "/images/blog-study-habits.png",
    date: "March 5, 2025",
    readTime: "12 min read",
    category: "Productivity",
    categoryColor: "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300",
    featured: false,
  },
  {
    slug: "/blog/how-to-compute-semestral-gwa",
    title: "How to Compute Your Semestral GWA Step by Step (Formula + Example)",
    excerpt: "The exact GWA formula used in Philippine universities, a fully worked example with multiple subjects and units, common mistakes to avoid, and a free calculator to verify your result.",
    image: "/images/blog-semestral-gwa.png",
    date: "March 5, 2025",
    readTime: "8 min read",
    category: "Tutorial",
    categoryColor: "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300",
    featured: false,
  },
];

const Blog = () => {
  const featured = allPosts[0];
  const gridPosts = allPosts.slice(1);

  return (
    <>
      <Helmet>
        <title>GWA Calculator Blog – Academic Guides for Filipino Students</title>
        <meta name="description" content="Helpful academic guides for Filipino college students: how to compute GWA, Latin honors requirements, Dean's List cutoffs, study habits, scholarship GWA requirements, and more." />
        <meta name="keywords" content="GWA blog Philippines, how to compute GWA, Filipino student guides, Dean's List requirements, Latin honors Philippines, scholarship GWA" />
        <link rel="canonical" href="https://mygwacalculator.com/blog" />
        <meta property="og:title" content="GWA Calculator Blog – Academic Guides for Filipino Students" />
        <meta property="og:description" content="Read expert guides on GWA computation, Dean's List requirements, scholarship GWA cutoffs, and academic success strategies." />
        <meta property="og:url" content="https://mygwacalculator.com/blog" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org", "@type": "Blog",
          "name": "GWA Calculator Blog",
          "url": "https://mygwacalculator.com/blog",
          "description": "Academic guides and resources for Filipino college students",
          "blogPost": allPosts.map(p => ({ "@type": "BlogPosting", "headline": p.title, "url": `https://mygwacalculator.com${p.slug}`, "image": `https://mygwacalculator.com${p.image}`, "datePublished": p.date }))
        })}</script>
      </Helmet>

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              <BookOpen className="h-4 w-4" /> Academic Guides
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">GWA Calculator Blog</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">Helpful guides, tips, and resources to help Filipino college students understand GWA, qualify for honors, and achieve their academic best.</p>
            <div className="flex items-center justify-center gap-2 mt-4 text-sm text-gray-500 dark:text-gray-400">
              <TrendingUp className="h-4 w-4 text-green-500" />
              <span>{allPosts.length} articles published</span>
            </div>
          </div>

          {/* Featured Post */}
          <div className="mb-12">
            <h2 className="text-sm font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-4">Featured Article</h2>
            <Link to={featured.slug} className="group">
              <Card className="overflow-hidden bg-white dark:bg-gray-800 border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="sm:flex">
                  <div className="sm:w-2/5 flex-shrink-0">
                    <img
                      src={featured.image}
                      alt={featured.title}
                      className="w-full h-56 sm:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      width="600" height="400"
                    />
                  </div>
                  <CardContent className="p-6 sm:p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-3">
                      <Badge className={featured.categoryColor}>{featured.category}</Badge>
                      <Badge variant="outline" className="border-orange-300 text-orange-600 dark:border-orange-600 dark:text-orange-400">Featured</Badge>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">{featured.title}</h2>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-5 line-clamp-3">{featured.excerpt}</p>
                    <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400 mb-5">
                      <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" />{featured.date}</span>
                      <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{featured.readTime}</span>
                    </div>
                    <div className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 font-semibold text-sm group-hover:gap-2 transition-all">
                      Read Full Article <ArrowRight className="h-4 w-4" />
                    </div>
                  </CardContent>
                </div>
              </Card>
            </Link>
          </div>

          {/* All Other Posts Grid */}
          <div>
            <h2 className="text-sm font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-6 flex items-center gap-2">
              <GraduationCap className="h-4 w-4" /> All Articles ({gridPosts.length})
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {gridPosts.map((post, i) => (
                <Link key={i} to={post.slug} className="group">
                  <Card className="h-full overflow-hidden bg-white dark:bg-gray-800 border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
                    <div className="overflow-hidden h-44 flex-shrink-0">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        width="400" height="220"
                      />
                    </div>
                    <CardContent className="p-5 flex flex-col flex-1">
                      <Badge className={`${post.categoryColor} mb-3 w-fit text-xs`}>{post.category}</Badge>
                      <h3 className="font-bold text-gray-900 dark:text-white mb-2 leading-snug text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">{post.title}</h3>
                      <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed mb-4 flex-1 line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-xs text-gray-400 dark:text-gray-500 pt-3 border-t border-gray-100 dark:border-gray-700">
                        <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{post.date}</span>
                        <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{post.readTime}</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 bg-blue-600 rounded-2xl p-8 text-center text-white shadow-xl">
            <h2 className="text-2xl font-bold mb-3">Ready to Calculate Your GWA?</h2>
            <p className="text-blue-100 mb-6 max-w-xl mx-auto">Use our free GWA Calculator to compute your semestral or cumulative GWA instantly — no sign-up required.</p>
            <Link to="/" className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-8 py-3.5 rounded-xl hover:bg-blue-50 transition-colors shadow-md">
              Open GWA Calculator <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

        </div>
      </div>
    </>
  );
};

export default Blog;
