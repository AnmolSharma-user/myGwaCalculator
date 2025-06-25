
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Target, Award, Calculator } from "lucide-react";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About GWA Calculator - Free General Weighted Average Calculator Tool</title>
        <meta name="description" content="Learn about GWA (General Weighted Average), how it's calculated, and why it matters for Filipino students. Comprehensive guide to academic performance tracking." />
        <meta name="keywords" content="GWA meaning, General Weighted Average explained, academic performance, grade calculation, Philippines education system" />
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
            "mainEntity": {
              "@type": "Organization",
              "name": "GWA Calculator",
              "description": "Free online tool for calculating General Weighted Average",
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

          {/* What is GWA */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-6 w-6 text-academic-blue" />
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
                <Target className="h-6 w-6 text-academic-blue" />
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
                <Award className="h-6 w-6 text-academic-blue" />
                Philippine GWA Grading Scale & Academic Recognition
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex justify-between p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-500">
                    <span className="font-semibold">Summa Cum Laude</span>
                    <span className="text-green-700 dark:text-green-400">95-100 / 1.00-1.20</span>
                  </div>
                  <div className="flex justify-between p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
                    <span className="font-semibold">Magna Cum Laude</span>
                    <span className="text-blue-700 dark:text-blue-400">90-94 / 1.21-1.45</span>
                  </div>
                  <div className="flex justify-between p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg border-l-4 border-purple-500">
                    <span className="font-semibold">Cum Laude</span>
                    <span className="text-purple-700 dark:text-purple-400">85-89 / 1.46-1.75</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border-l-4 border-yellow-500">
                    <span className="font-semibold">Good Standing</span>
                    <span className="text-yellow-700 dark:text-yellow-400">80-84 / 1.76-2.00</span>
                  </div>
                  <div className="flex justify-between p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg border-l-4 border-orange-500">
                    <span className="font-semibold">Fair Standing</span>
                    <span className="text-orange-700 dark:text-orange-400">75-79 / 2.01-2.50</span>
                  </div>
                  <div className="flex justify-between p-3 bg-red-50 dark:bg-red-900/20 rounded-lg border-l-4 border-red-500">
                    <span className="font-semibold">Needs Improvement</span>
                    <span className="text-red-700 dark:text-red-400">Below 75 / 2.51+</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                <em>Note: Grading scales may vary between institutions. Some use 1.0-5.0 scale while others use percentage-based systems. Always check with your school for specific requirements.</em>
              </p>
            </CardContent>
          </Card>

          {/* About Our Tool */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="h-6 w-6 text-academic-blue" />
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
                  <li>Completely free to use - no registration required</li>
                  <li>Privacy-focused - no data stored on servers</li>
                </ul>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                We believe that every student should have access to tools that help them succeed academically. 
                Our calculator is built with precision and user experience in mind, ensuring accurate results every time. 
                All calculations are performed locally in your browser, ensuring your academic data remains private and secure.
              </p>
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Our Mission</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  To empower Filipino students with free, accurate, and easy-to-use academic tools that help them 
                  track their progress, plan their studies, and achieve their educational goals.
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
