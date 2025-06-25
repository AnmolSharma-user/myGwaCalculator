
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogPosts = [{
    id: 1,
    title: "GWA Calculator - What It Is, Why It Matters, and the Easiest Way to Compute It",
    excerpt: "Let's be honest—being a student today is tough. You're juggling classes, deadlines, quizzes, and maybe even a part-time job. The last thing you want to deal with is sitting down with a calculator, trying to figure out your GWA (General Weighted Average). But here's the good news: you don't have to.",
    slug: "how-to-compute-gwa",
    author: "Anmol Sharma",
    date: "2025-01-20",
    readTime: "8 min read",
    category: "Tutorial",
    tags: ["GWA", "Calculator", "Academic", "Guide", "Student Tools"]
  }, {
    id: 2,
    title: "How to Compute Grades in College (Without the Headache)",
    excerpt: "Whether you're just starting college or halfway through your degree, one question always pops up: How do I actually calculate my grades? Knowing how to compute your grades gives you control, confidence, and clarity throughout the semester.",
    slug: "how-to-compute-grades-in-college",
    author: "Academic Team",
    date: "2025-01-22",
    readTime: "7 min read",
    category: "Guide",
    tags: ["College", "Grades", "Academic", "Calculator"]
  }];

  return (
    <>
      <Helmet>
        <title>Academic Blog - GWA & Grade Calculation Guides | GWA Calculator</title>
        <meta name="description" content="Expert guides on GWA calculation, grade computation, and academic success. Learn how to calculate your General Weighted Average and improve your academic performance in the Philippines." />
        <meta name="keywords" content="GWA calculator blog, academic guides, student tips, grade calculation, educational articles, General Weighted Average, Philippines education" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="GWA Calculator Team" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Academic Blog - GWA & Grade Calculation Guides | GWA Calculator" />
        <meta property="og:description" content="Expert guides on GWA calculation, grade computation, and academic success for Filipino students." />
        <meta property="og:url" content="https://mygwacalculator.com/blog" />
        <meta property="og:site_name" content="GWA Calculator" />
        <meta property="og:locale" content="en_PH" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Academic Blog - GWA & Grade Calculation Guides" />
        <meta name="twitter:description" content="Expert guides on GWA calculation, grade computation, and academic success for Filipino students." />
        <link rel="canonical" href="https://mygwacalculator.com/blog" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "GWA Calculator Academic Blog",
            "description": "Expert guides on GWA calculation, grade computation, and academic success for Filipino students",
            "url": "https://mygwacalculator.com/blog",
            "publisher": {
              "@type": "Organization",
              "name": "GWA Calculator",
              "url": "https://mygwacalculator.com"
            },
            "blogPost": blogPosts.map(post => ({
              "@type": "BlogPosting",
              "headline": post.title,
              "description": post.excerpt,
              "url": `https://mygwacalculator.com/blog/${post.slug}`,
              "datePublished": post.date,
              "author": {
                "@type": "Person",
                "name": post.author
              },
              "keywords": post.tags.join(", ")
            }))
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 dark:from-gray-800 dark:via-gray-900 dark:to-black text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 my-[52px]">
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 font-inter">
                Academic Blog
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-blue-100 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Expert guides on GWA calculation, grade computation, and academic success for Filipino students.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          {/* Featured Article */}
          <div className="mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">Featured Article</h2>
            <Card className="bg-white dark:bg-gray-800 hover:shadow-2xl transition-all duration-300 overflow-hidden border-0 shadow-xl">
              <CardContent className="p-0">
                <div className="p-8 sm:p-10 md:p-12">
                  <div className="flex flex-wrap items-center gap-3 mb-6">
                    <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      {blogPosts[0].category}
                    </span>
                    {blogPosts[0].tags.slice(0, 2).map(tag => (
                      <span key={tag} className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                    {blogPosts[0].title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg sm:text-xl leading-relaxed">
                    {blogPosts[0].excerpt}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                    <div className="flex flex-wrap items-center gap-6 text-gray-500 dark:text-gray-400">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-5 w-5" />
                        <span className="font-medium">{blogPosts[0].date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <User className="h-5 w-5" />
                        <span className="font-medium">{blogPosts[0].author}</span>
                      </div>
                      <span className="font-medium">{blogPosts[0].readTime}</span>
                    </div>
                    
                    <Link 
                      to={`/blog/${blogPosts[0].slug}`} 
                      className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors group"
                    >
                      Read Full Article
                      <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Second Article */}
          <div className="mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">Latest Guide</h2>
            <div className="max-w-4xl mx-auto">
              <Card className="bg-white dark:bg-gray-800 hover:shadow-xl transition-all duration-300 group border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm font-medium">
                      {blogPosts[1].category}
                    </span>
                    {blogPosts[1].tags.slice(0, 2).map(tag => (
                      <span key={tag} className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight">
                    {blogPosts[1].title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {blogPosts[1].excerpt}
                  </p>
                  
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{blogPosts[1].date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        <span>{blogPosts[1].author}</span>
                      </div>
                      <span>{blogPosts[1].readTime}</span>
                    </div>
                    
                    <Link 
                      to={`/blog/${blogPosts[1].slug}`} 
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors group"
                    >
                      Read More
                      <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Newsletter Section */}
          <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 border-0 shadow-xl">
            <CardContent className="p-8 sm:p-12 text-center">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Stay Updated
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
                Get the latest tips, guides, and updates about academic success 
                delivered directly to your email inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-6 py-4 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-lg" 
                />
                <button className="bg-blue-600 dark:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 dark:hover:bg-blue-700 transition-colors text-lg">
                  Subscribe
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Blog;
