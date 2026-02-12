
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Target, Award, Calculator, User, Shield, Heart } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About GWA Calculator - Free General Weighted Average Calculator Tool</title>
        <meta name="description" content="Learn about GWA (General Weighted Average), how it's calculated, and why it matters for Filipino students. Built by Anmol Sharma to help students track academic performance." />
        <meta name="keywords" content="GWA meaning, General Weighted Average explained, academic performance, grade calculation, Philippines education system, Anmol Sharma" />
        <link rel="canonical" href="https://mygwacalculator.com/about" />
        <meta property="og:title" content="About GWA Calculator - Understanding General Weighted Average" />
        <meta property="og:description" content="Complete guide to General Weighted Average (GWA) calculation and its importance in Philippine education system." />
        <meta property="og:url" content="https://mygwacalculator.com/about" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About GWA Calculator",
            "description": "Learn about General Weighted Average calculation and our free online tool",
            "url": "https://mygwacalculator.com/about",
            "dateModified": "2026-02-12",
            "mainEntity": {
              "@type": "Organization",
              "name": "GWA Calculator",
              "description": "Free online tool for calculating General Weighted Average for Filipino students",
              "url": "https://mygwacalculator.com",
              "foundingDate": "2024",
              "founder": {
                "@type": "Person",
                "name": "Anmol Sharma",
                "jobTitle": "Developer & Education Advocate",
                "description": "Creator of GWA Calculator, passionate about making academic tools accessible to Filipino students"
              },
              "sameAs": [
                "https://github.com/AnmolSharma-user"
              ]
            }
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Anmol Sharma",
            "jobTitle": "Developer & Education Advocate",
            "url": "https://mygwacalculator.com/about",
            "sameAs": [
              "https://github.com/AnmolSharma-user"
            ],
            "worksFor": {
              "@type": "Organization",
              "name": "GWA Calculator",
              "url": "https://mygwacalculator.com"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 py-12 transition-colors">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About GWA Calculator</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Understanding General Weighted Average and why it matters for your academic success
            </p>
          </div>

          {/* Meet the Creator - E-E-A-T Section */}
          <Card className="mb-8 border-academic-blue/20 dark:border-blue-800/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-6 w-6 text-academic-blue dark:text-blue-400" />
                Meet the Creator
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-shrink-0 flex justify-center">
                  <div className="w-24 h-24 rounded-full bg-academic-blue/10 dark:bg-blue-900/30 flex items-center justify-center">
                    <User className="h-12 w-12 text-academic-blue dark:text-blue-400" />
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Anmol Sharma</h3>
                    <p className="text-sm text-academic-blue dark:text-blue-400 font-medium">Developer & Education Advocate</p>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Hi! I'm Anmol, the creator of GWA Calculator. As someone who has experienced
                    the challenges of tracking academic performance firsthand, I built this tool to make GWA calculation
                    simple and accessible for every Filipino student. I remember the stress of manually computing weighted
                    averages during finals season — one miscalculation could mean the difference between making the dean's
                    list or not.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    That frustration inspired me to create a free, accurate, and easy-to-use calculator that handles all
                    the math for you. Since launching GWA Calculator, I've been dedicated to continuously improving
                    the tool based on feedback from students across the Philippines.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="px-3 py-1 bg-academic-blue/10 dark:bg-blue-900/20 text-academic-blue dark:text-blue-400 text-xs font-medium rounded-full">Web Development</span>
                    <span className="px-3 py-1 bg-academic-blue/10 dark:bg-blue-900/20 text-academic-blue dark:text-blue-400 text-xs font-medium rounded-full">EdTech</span>
                    <span className="px-3 py-1 bg-academic-blue/10 dark:bg-blue-900/20 text-academic-blue dark:text-blue-400 text-xs font-medium rounded-full">Academic Tools</span>
                    <span className="px-3 py-1 bg-academic-blue/10 dark:bg-blue-900/20 text-academic-blue dark:text-blue-400 text-xs font-medium rounded-full">Open Source</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* What is GWA */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-6 w-6 text-academic-blue dark:text-blue-400" />
                What is GWA (General Weighted Average)?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>General Weighted Average (GWA)</strong> is a method of calculating a student's overall academic performance
                by considering both the grades received and the number of units or credit hours for each subject. This system is
                widely used in Philippine universities and colleges to provide a fair assessment of academic achievement.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Unlike a simple average, GWA gives more weight to subjects with higher unit values, providing a more accurate
                representation of a student's academic achievement across different courses. This ensures that major subjects
                with more credit hours have appropriate influence on your overall academic standing.
              </p>
              <div className="bg-academic-blue-light dark:bg-blue-900/20 p-4 rounded-lg">
                <h4 className="font-semibold text-academic-blue-dark dark:text-blue-400 mb-2">GWA Formula:</h4>
                <p className="text-academic-blue-dark dark:text-blue-300 font-mono text-lg">
                  GWA = (Sum of Grade × Units) ÷ (Sum of Units)
                </p>
                <p className="text-sm text-academic-blue-dark dark:text-blue-300 mt-2">
                  Each subject's grade is multiplied by its unit value, all products are summed, then divided by total units.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Why GWA Matters */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-6 w-6 text-academic-blue dark:text-blue-400" />
                Why GWA Matters in Philippine Education
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Academic Recognition</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    GWA is used for determining academic honors, scholarships, and graduation distinctions like Cum Laude, Magna Cum Laude, and Summa Cum Laude.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Graduate School Admission</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Many graduate programs in the Philippines and abroad require a minimum GWA for admission consideration and scholarship eligibility.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Employment Opportunities</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Employers, especially government agencies and large corporations, often consider GWA when evaluating fresh graduates for entry-level positions.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Academic Planning</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Regular GWA calculation helps students track their academic progress and identify areas for improvement throughout their studies.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* GWA Grading Scale */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-6 w-6 text-academic-blue dark:text-blue-400" />
                Philippine GWA Grading Scale & Academic Recognition
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex justify-between p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-500">
                    <span className="font-semibold dark:text-white">Summa Cum Laude</span>
                    <span className="text-green-700 dark:text-green-400">95-100 / 1.00-1.20</span>
                  </div>
                  <div className="flex justify-between p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
                    <span className="font-semibold dark:text-white">Magna Cum Laude</span>
                    <span className="text-blue-700 dark:text-blue-400">90-94 / 1.21-1.45</span>
                  </div>
                  <div className="flex justify-between p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg border-l-4 border-purple-500">
                    <span className="font-semibold dark:text-white">Cum Laude</span>
                    <span className="text-purple-700 dark:text-purple-400">85-89 / 1.46-1.75</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border-l-4 border-yellow-500">
                    <span className="font-semibold dark:text-white">Good Standing</span>
                    <span className="text-yellow-700 dark:text-yellow-400">80-84 / 1.76-2.00</span>
                  </div>
                  <div className="flex justify-between p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg border-l-4 border-orange-500">
                    <span className="font-semibold dark:text-white">Fair Standing</span>
                    <span className="text-orange-700 dark:text-orange-400">75-79 / 2.01-2.50</span>
                  </div>
                  <div className="flex justify-between p-3 bg-red-50 dark:bg-red-900/20 rounded-lg border-l-4 border-red-500">
                    <span className="font-semibold dark:text-white">Needs Improvement</span>
                    <span className="text-red-700 dark:text-red-400">Below 75 / 2.51+</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                <em>Note: Grading scales may vary between institutions. Some use 1.0-5.0 scale while others use percentage-based systems. Always check with your school for specific requirements.</em>
              </p>
            </CardContent>
          </Card>

          {/* Editorial Standards - E-E-A-T */}
          <Card className="mb-8 border-green-200/50 dark:border-green-800/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-6 w-6 text-green-600 dark:text-green-400" />
                Our Editorial Standards
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 dark:text-gray-300">
                At GWA Calculator, we are committed to providing accurate, trustworthy, and up-to-date information.
                Our content is created and reviewed following these principles:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">✅ Accuracy First</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    All calculator formulas are based on standard mathematical methods used by Philippine educational institutions.
                    We regularly verify our formulas against official computation guidelines.
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">📚 Research-Based Content</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Our blog articles and guides are written based on official Philippine education policies, CHED guidelines,
                    and firsthand academic experience.
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">🔄 Regular Updates</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    We update our content and tools regularly to reflect the latest changes in Philippine academic standards
                    and grading systems.
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">🎯 Student-Focused</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Every feature and piece of content is designed with Filipino students in mind. We prioritize clarity,
                    accessibility, and practical usefulness.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* About Our Tool */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="h-6 w-6 text-academic-blue dark:text-blue-400" />
                About Our Free GWA Calculator Tool
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 dark:text-gray-300">
                Our GWA Calculator is designed specifically for Filipino students to accurately compute their General Weighted Average
                with ease and precision. Whether you're a high school student planning for college or a university
                student tracking your academic progress, our comprehensive tool suite provides:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                  <li>Simple and intuitive interface</li>
                  <li>Accurate GWA calculations based on standard formulas</li>
                  <li>Dynamic subject management (add/remove subjects)</li>
                  <li>Input validation to prevent calculation errors</li>
                  <li>Mobile-friendly responsive design</li>
                </ul>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                  <li>Multiple calculator tools for different needs</li>
                  <li>Share and print functionality</li>
                  <li>Support for all Philippine grading systems</li>
                  <li>Completely free to use — no registration required</li>
                  <li>Privacy-focused — no data stored on servers</li>
                </ul>
              </div>

              {/* Tools List - Internal Linking for SEO */}
              <div className="mt-6">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Our Complete Tool Suite:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <Link to="/" className="text-academic-blue dark:text-blue-400 hover:underline text-sm flex items-center gap-1">
                    <Calculator className="h-3 w-3" /> GWA Calculator (Main Tool)
                  </Link>
                  <Link to="/tools/gwa-to-gpa-converter" className="text-academic-blue dark:text-blue-400 hover:underline text-sm flex items-center gap-1">
                    <Calculator className="h-3 w-3" /> GWA to GPA Converter
                  </Link>
                  <Link to="/tools/grade-average-calculator" className="text-academic-blue dark:text-blue-400 hover:underline text-sm flex items-center gap-1">
                    <Calculator className="h-3 w-3" /> Grade Average Calculator
                  </Link>
                  <Link to="/tools/weighted-grade-calculator" className="text-academic-blue dark:text-blue-400 hover:underline text-sm flex items-center gap-1">
                    <Calculator className="h-3 w-3" /> Weighted Grade Calculator
                  </Link>
                  <Link to="/tools/final-grade-calculator" className="text-academic-blue dark:text-blue-400 hover:underline text-sm flex items-center gap-1">
                    <Calculator className="h-3 w-3" /> Final Grade Calculator
                  </Link>
                  <Link to="/tools/semester-gpa-calculator" className="text-academic-blue dark:text-blue-400 hover:underline text-sm flex items-center gap-1">
                    <Calculator className="h-3 w-3" /> Semester GPA Calculator
                  </Link>
                  <Link to="/tools/cgpa-to-percentage-calculator" className="text-academic-blue dark:text-blue-400 hover:underline text-sm flex items-center gap-1">
                    <Calculator className="h-3 w-3" /> CGPA to Percentage Calculator
                  </Link>
                </div>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mt-4">
                We believe that every student should have access to tools that help them succeed academically.
                Our calculator is built with precision and user experience in mind, ensuring accurate results every time.
                All calculations are performed locally in your browser, ensuring your academic data remains private and secure.
              </p>

              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <Heart className="h-4 w-4 text-red-500" />
                  Our Mission
                </h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  To empower Filipino students with free, accurate, and easy-to-use academic tools that help them
                  track their progress, plan their studies, and achieve their educational goals. We are committed to
                  keeping our tools free and accessible — always.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default About;
