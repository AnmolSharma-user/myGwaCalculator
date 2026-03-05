import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Home, Calculator, BookOpen, Phone, ArrowRight, Search } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const NotFound = () => {
  const popularPages = [
    { title: "GWA Calculator", desc: "Compute your General Weighted Average instantly", href: "/", icon: Calculator },
    { title: "Blog & Guides", desc: "Step-by-step academic guides for Filipino students", href: "/blog", icon: BookOpen },
    { title: "GWA to GPA Converter", desc: "Convert between PH GWA and international GPA", href: "/tools/gwa-to-gpa-converter", icon: ArrowRight },
    { title: "Final Grade Calculator", desc: "Find out what score you need on your final exam", href: "/tools/final-grade-calculator", icon: Calculator },
    { title: "Dean's List Requirements", desc: "Check GWA cut-offs for UP, UST, DLSU & more", href: "/blog/deans-list-requirements-philippines", icon: BookOpen },
    { title: "Contact Us", desc: "Have a question? Get in touch with our team", href: "/contact", icon: Phone },
  ];

  return (
    <>
      <Helmet>
        <title>Page Not Found (404) – GWA Calculator</title>
        <meta name="description" content="The page you are looking for could not be found. Explore our free GWA calculator, grade tools, and academic blog for Filipino students." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://mygwacalculator.com/404" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">

          {/* 404 Hero */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-blue-600 text-white rounded-3xl mb-6 shadow-xl">
              <Search className="h-12 w-12" />
            </div>
            <h1 className="text-6xl sm:text-8xl font-extrabold text-blue-600 dark:text-blue-400 mb-4">
              404
            </h1>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Page Not Found
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto mb-8">
              Oops! The page you're looking for doesn't exist or may have been moved.
              Don't worry — here are some helpful links to get you back on track.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-xl font-semibold text-base transition-colors shadow-lg"
            >
              <Home className="h-5 w-5" />
              Back to Home
            </Link>
          </div>

          {/* Popular Pages Grid */}
          <div>
            <h2 className="text-xl font-bold text-gray-700 dark:text-gray-300 mb-6 text-center uppercase tracking-wider">
              Popular Pages
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {popularPages.map((page, i) => {
                const Icon = page.icon;
                return (
                  <Link key={i} to={page.href} className="group">
                    <Card className="h-full bg-white dark:bg-gray-800 hover:shadow-xl transition-all duration-300 border-0 shadow-md hover:-translate-y-1">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                            <Icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                          </div>
                          <div>
                            <h3 className="font-bold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                              {page.title}
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400 leading-snug">
                              {page.desc}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* About Section */}
          <div className="mt-14 text-center">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8 max-w-2xl mx-auto">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                About GWA Calculator
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                GWA Calculator is a free online tool designed for Filipino students to compute their
                General Weighted Average (GWA), convert between grading systems, and access academic guides
                for universities across the Philippines including UP, UST, DLSU, PUP, and more.
              </p>
              <Link
                to="/about"
                className="text-blue-600 dark:text-blue-400 font-semibold text-sm hover:underline"
              >
                Learn more about us →
              </Link>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default NotFound;
