import { lazy, Suspense } from "react";
import { ReadingProgressBar } from "@/components/ReadingProgressBar";
import { BackToTopButton } from "@/components/BackToTopButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BookOpen, Calculator, TrendingUp, Users, GraduationCap, Award, Target, BarChart, HelpCircle, CheckCircle, Star, BookMarked } from "lucide-react";
import { Helmet } from "react-helmet-async";

// Lazy load the GWA Calculator to reduce initial bundle size
const GWACalculator = lazy(() => import("@/components/GWACalculator").then(module => ({
  default: module.GWACalculator
})));

const Index = () => {
  const features = [{
    icon: Calculator,
    title: "Easy Calculation",
    description: "Simple and intuitive interface to calculate your GWA quickly"
  }, {
    icon: BookOpen,
    title: "Academic Focused",
    description: "Designed specifically for students and academic institutions"
  }, {
    icon: TrendingUp,
    title: "Track Progress",
    description: "Monitor your academic performance and identify areas for improvement"
  }, {
    icon: Users,
    title: "Free to Use",
    description: "Completely free tool accessible to all students"
  }];

  const faqs = [{
    question: "How is GWA calculated?",
    answer: "GWA (General Weighted Average) is calculated using the formula: GWA = (Sum of Grade × Units) ÷ (Sum of Units). This means each subject's grade is multiplied by its unit value, all products are summed up, then divided by the total number of units. This gives more weight to subjects with higher unit values."
  }, {
    question: "What's the difference between GWA and GPA?",
    answer: "GWA (General Weighted Average) and GPA (Grade Point Average) are similar concepts but may use different scales. GWA typically uses a 100-point scale (0-100), while GPA often uses a 4.0 scale. Both consider the weight of units/credits, but the calculation method and scale may vary depending on the institution."
  }, {
    question: "Can I use this calculator for different grading systems?",
    answer: "Yes! Our calculator works with any numerical grading system. Whether your school uses a 100-point scale, 4.0 scale, or any other numerical system, you can input your grades and get an accurate weighted average. Just make sure all grades use the same scale."
  }, {
    question: "What if I have incomplete grades or pending subjects?",
    answer: "Only include subjects with final grades in your GWA calculation. Incomplete grades (INC) or subjects you're currently taking should not be included until you receive a final numerical grade. This ensures accuracy in your GWA computation."
  }, {
    question: "How often should I calculate my GWA?",
    answer: "It's recommended to calculate your GWA at the end of each semester or term to track your academic progress. You can also calculate it mid-semester to see how current grades might affect your overall average and plan accordingly for remaining coursework."
  }];

  return <>
      <Helmet>
        <title>Free GWA Calculator - Calculate General Weighted Average Online | 2024</title>
        <meta name="description" content="Calculate your General Weighted Average (GWA) for free with our accurate online tool. Perfect for Filipino students, supports all grading systems. Get instant results!" />
        <meta name="keywords" content="GWA calculator, General Weighted Average calculator, grade calculator Philippines, academic performance tracker, student GPA calculator, free online calculator, main GWA tool" />
        <link rel="canonical" href="https://mygwacalculator.com/" />
        <meta property="og:title" content="Free GWA Calculator - Calculate General Weighted Average Online" />
        <meta property="og:description" content="Calculate your General Weighted Average (GWA) for free with our accurate online tool. Perfect for Filipino students, supports all grading systems." />
        <meta property="og:url" content="https://mygwacalculator.com/" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
          "@id": "https://mygwacalculator.com/#faq",
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "GWA Calculator - Free Online Tool",
          "description": "Calculate your General Weighted Average (GWA) easily with our free online tool",
          "url": "https://mygwacalculator.com/",
          "mainEntity": {
            "@type": "SoftwareApplication",
            "name": "GWA Calculator",
            "applicationCategory": "EducationalApplication",
            "operatingSystem": "Web Browser"
          },
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [{
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://mygwacalculator.com/"
            }]
          }
        })}
        </script>
      </Helmet>
      
      {/* Main Page FAQ Schema - Separate from tool pages */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "@id": "https://mygwacalculator.com/#main-faq",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-academic-blue-light via-white to-academic-gray dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors">
        <ReadingProgressBar />
        
        {/* Hero Section - Mobile First with top padding for fixed header */}
        <section className="pt-32 pb-8 px-4 sm:pt-36 sm:pb-12 md:pt-40 md:pb-16">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
              Free GWA Calculator Online
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-3 sm:mb-4">
              Calculate Your General Weighted Average Instantly
            </h2>
            <p className="text-base sm:text-lg text-gray-500 dark:text-gray-400 max-w-3xl mx-auto mb-8 sm:mb-12 px-2">
              The most accurate and easy-to-use GWA calculator for Filipino students. Calculate your General Weighted Average 
              in seconds and track your academic performance effectively. Supports all grading systems.
            </p>
          </div>
        </section>

        {/* Calculator Section - Mobile First with Lazy Loading */}
        <section className="py-6 px-4 sm:py-8 md:py-12" id="calculator">
          <div className="max-w-7xl mx-auto">
            <Suspense fallback={<div className="flex items-center justify-center p-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-academic-blue" />
              </div>}>
              <GWACalculator />
            </Suspense>
          </div>
        </section>

        {/* Features Section - Mobile First */}
        <section className="py-12 px-4 sm:py-16 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm transition-colors">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Why Choose Our GWA Calculator?
              </h2>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-2">
                The best free online GWA calculator designed specifically for students, providing accurate calculations and helpful academic insights.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {features.map((feature, index) => <Card key={index} className="text-center hover:shadow-lg dark:hover:shadow-xl transition-shadow bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-gray-200/50 dark:border-gray-700/50">
                  <CardContent className="p-4 sm:p-6">
                    <feature.icon className="h-10 w-10 sm:h-12 sm:w-12 text-academic-blue dark:text-blue-400 mx-auto mb-3 sm:mb-4" />
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </section>

        {/* Content Area - Complete Guide Section */}
        <section className="py-12 px-4 sm:py-16 bg-gray-50/80 dark:bg-gray-800/80 backdrop-blur-sm transition-colors">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Complete Guide to GWA Calculation
                </h2>
              </div>

              <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-lg p-6 sm:p-8 shadow-sm border border-gray-200/50 dark:border-gray-700/50 mb-8">
                <div className="prose prose-gray dark:prose-invert max-w-none">
                  <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-4">
                    <strong>So, what's this GWA thing everyone keeps talking about?</strong><br />
                    If you've ever looked at your grades and wondered how you're really doing overall — GWA is the answer.
                  </p>

                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-6">
                    Back in college, I remember getting my grades and thinking, <em>"Okay... but is this good enough for the dean's list?"</em> That's when I first heard about GWA — and honestly, it changed how I looked at my performance.
                  </p>

                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-academic-blue dark:text-blue-400" />
                    What Exactly Is GWA?
                  </h3>

                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4">
                    GWA stands for <strong>General Weighted Average</strong>. Sounds fancy, but it's just a smarter way of figuring out how well you're doing across all your subjects.
                  </p>

                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-6">
                    Here's the idea: Not all subjects are equal. Your 3-unit math class? That should count more than your 1-unit PE class, right?<br />
                    GWA gets that. It gives more "weight" to subjects with more credit units. That's what makes it more accurate than just averaging your grades.
                  </p>

                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <Target className="h-5 w-5 text-academic-blue dark:text-blue-400" />
                    Why Should You Even Care?
                  </h3>

                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-3">
                    Simple — GWA affects a lot of things:
                  </p>
                  <ul className="list-disc list-inside text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-6 space-y-1">
                    <li>Your shot at a <strong>scholarship</strong></li>
                    <li>Getting into the <strong>dean's list</strong></li>
                    <li>Applying to <strong>grad school</strong> or even <strong>jobs</strong></li>
                  </ul>

                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-6">
                    It's kind of like your academic reputation. A strong GWA shows consistent hard work — not just one lucky test.
                  </p>

                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <Award className="h-5 w-5 text-academic-blue dark:text-blue-400" />
                    Grading Scale: How It Works
                  </h3>

                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-3">
                    In most Philippine colleges, the system looks like this:
                  </p>
                  <ul className="list-disc list-inside text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-6 space-y-1">
                    <li><strong>1.0</strong> – Top marks</li>
                    <li><strong>1.75 to 2.0</strong> – Still excellent</li>
                    <li><strong>2.5</strong> – Decent</li>
                    <li><strong>3.0</strong> – Barely passing</li>
                    <li><strong>5.0</strong> – Fail</li>
                  </ul>

                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-6">
                    Some schools might use a <strong>4.0 scale</strong> or <strong>percentages</strong> instead. So always check what your school uses before calculating your GWA.
                  </p>

                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <Star className="h-5 w-5 text-academic-blue dark:text-blue-400" />
                    What's Considered a "Good" GWA?
                  </h3>

                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-3">
                    It depends on your goal, but here's a general guide:
                  </p>
                  <ul className="list-disc list-inside text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-6 space-y-1">
                    <li><strong>1.0 – 1.75</strong> → You're doing great (and probably making your parents proud)</li>
                    <li><strong>2.0 – 2.5</strong> → Still solid</li>
                    <li><strong>2.6 – 3.0</strong> → Not bad, but you've got room to grow</li>
                    <li><strong>Above 3.0</strong> → Time to rethink a few habits</li>
                  </ul>

                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-6">
                    Remember, some scholarships or honors programs require you to stay under 2.0 — so it's worth aiming high.
                  </p>

                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <BarChart className="h-5 w-5 text-academic-blue dark:text-blue-400" />
                    How To Improve Your GWA (Without Losing Your Mind)
                  </h3>

                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4">
                    Here's what worked for me (and might help you too):
                  </p>

                  <div className="bg-academic-blue/5 dark:bg-blue-900/20 rounded-lg p-4 mb-6">
                    <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-academic-blue dark:text-blue-400" />
                      Focus on Big Subjects
                    </h4>
                    <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                      Subjects with more units affect your GWA more. Prioritize them in your study plan.
                    </p>
                  </div>

                  <div className="bg-academic-blue/5 dark:bg-blue-900/20 rounded-lg p-4 mb-6">
                    <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-academic-blue dark:text-blue-400" />
                      Don't Cram Everything
                    </h4>
                    <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                      Set a routine. Even just 30 minutes of focused study daily can make a huge difference.
                    </p>
                  </div>

                  <div className="bg-academic-blue/5 dark:bg-blue-900/20 rounded-lg p-4 mb-6">
                    <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-academic-blue dark:text-blue-400" />
                      Ask Questions
                    </h4>
                    <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                      Confused? Don't wait. Ask your professor or classmates — or even Google. Seriously.
                    </p>
                  </div>

                  <div className="bg-academic-blue/5 dark:bg-blue-900/20 rounded-lg p-4 mb-6">
                    <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-academic-blue dark:text-blue-400" />
                      Be Consistent
                    </h4>
                    <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                      GWA isn't about one test. It's the average of everything. So even small quizzes matter.
                    </p>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <BookMarked className="h-5 w-5 text-academic-blue dark:text-blue-400" />
                    A Quick Story From My College Life
                  </h3>

                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4">
                    There was this one term I thought I was doing fine. I crushed two subjects but totally ignored one class with 4 units.
                  </p>

                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4">
                    <strong>Bad idea.</strong>
                  </p>

                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-6">
                    That one class pulled my GWA way down.
                  </p>

                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-6">
                    After that? I started using a simple <strong>GWA calculator</strong> online. It showed me how even one subject can shift everything. Total eye-opener.
                  </p>

                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <Calculator className="h-5 w-5 text-academic-blue dark:text-blue-400" />
                    Use a GWA Calculator — Seriously
                  </h3>

                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4">
                    Why do all the math in your head?<br />
                    Just pop your grades and units into a calculator, and you'll get your exact GWA instantly.
                  </p>

                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-6">
                    Even better? Most calculators let you switch between grading systems — super handy if you're applying somewhere that uses percentages or the 4.0 scale.
                  </p>

                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-4">
                    Final Thoughts
                  </h3>

                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4">
                    GWA might just look like a number on paper.<br />
                    But it says a lot about how you're doing — and where you're headed.
                  </p>

                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4">
                    <strong>The good news?</strong><br />
                    You're in control. With the right tools, habits, and mindset, keeping a strong GWA is totally doable.
                  </p>

                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4">
                    So if you're serious about your grades — use a GWA calculator, stay consistent, and focus on what really counts.
                  </p>

                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                    And hey, don't stress too much.<br />
                    <strong>You've got this.</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section - Mobile First */}
        <section className="py-12 px-4 sm:py-16 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm transition-colors">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center gap-2">
                <HelpCircle className="h-6 w-6 sm:h-8 sm:w-8 text-academic-blue dark:text-blue-400" />
                Frequently Asked Questions
              </h2>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-2">
                Common questions about GWA calculation and our calculator tool
              </p>
            </div>

            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-gray-200/50 dark:border-gray-700/50">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white">GWA Calculator FAQ</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => <AccordionItem key={index} value={`item-${index}`} className="border-gray-200 dark:border-gray-700">
                      <AccordionTrigger className="text-left font-semibold text-gray-900 dark:text-white hover:text-academic-blue dark:hover:text-blue-400">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>)}
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section - Mobile First */}
        <section className="py-12 px-4 sm:py-16 bg-academic-blue/90 dark:bg-blue-900/90 backdrop-blur-sm text-white transition-colors">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Start Calculating Your GWA Now!</h2>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90 px-2">
              Join thousands of students who trust our free GWA calculator for accurate academic performance tracking.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md sm:max-w-none mx-auto">
              <a href="#calculator" className="bg-white text-academic-blue dark:text-blue-900 px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-200 transition-colors text-center">
                Use Free Calculator
              </a>
              <a href="/about" className="border-2 border-white text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-academic-blue dark:hover:text-blue-900 transition-colors text-center">
                Learn More About GWA
              </a>
            </div>
          </div>
        </section>

        <BackToTopButton />
      </div>
    </>;
};

export default Index;