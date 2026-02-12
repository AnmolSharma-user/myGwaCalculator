import { useTranslation } from "react-i18next";
import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { ReadingProgressBar } from "@/components/ReadingProgressBar";
import { BackToTopButton } from "@/components/BackToTopButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BookOpen, Calculator, TrendingUp, Users, GraduationCap, Award, Target, BarChart, HelpCircle, CheckCircle, Star, BookMarked, ArrowRight, Newspaper } from "lucide-react";
import { Helmet } from "react-helmet-async";

// Lazy load the GWA Calculator to reduce initial bundle size
const GWACalculator = lazy(() => import("@/components/GWACalculator").then(module => ({
  default: module.GWACalculator
})));

const Index = () => {
  const { t } = useTranslation();

  const features = [{
    icon: Calculator,
    title: t('features.items.easy.title'),
    description: t('features.items.easy.description')
  }, {
    icon: BookOpen,
    title: t('features.items.academic.title'),
    description: t('features.items.academic.description')
  }, {
    icon: TrendingUp,
    title: t('features.items.track.title'),
    description: t('features.items.track.description')
  }, {
    icon: Users,
    title: t('features.items.free.title'),
    description: t('features.items.free.description')
  }];

  const faqs = [{
    question: t('faq.q1'),
    answer: t('faq.a1')
  }, {
    question: t('faq.q2'),
    answer: t('faq.a2')
  }, {
    question: t('faq.q3'),
    answer: t('faq.a3')
  }, {
    question: t('faq.q4'),
    answer: t('faq.a4')
  }, {
    question: t('faq.q5'),
    answer: t('faq.a5')
  }];

  return <>
    <Helmet>
      <title>GWA Calculator - Calculate General Weighted Average Online | philippines</title>
      <meta name="description" content="Calculate your General Weighted Average (GWA) for free with our accurate online tool. Perfect for Filipino students, supports all grading systems. Get instant results!" />
      <meta name="keywords" content="GWA calculator, General Weighted Average calculator, grade calculator Philippines, academic performance tracker, student GPA calculator, free online calculator, main GWA tool" />
      <link rel="canonical" href="https://mygwacalculator.com/" />
      <meta property="og:title" content="Free GWA Calculator - Calculate General Weighted Average Online" />
      <meta property="og:description" content="Calculate your General Weighted Average (GWA) for free with our accurate online tool. Perfect for Filipino students, supports all grading systems." />
      <meta property="og:url" content="https://mygwacalculator.com/" />
      <meta property="og:type" content="website" />
      <link rel="alternate" hrefLang="en" href="https://mygwacalculator.com/" />
      <link rel="alternate" hrefLang="fil" href="https://mygwacalculator.com/?lng=fil" />
      <link rel="alternate" hrefLang="x-default" href="https://mygwacalculator.com/" />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": "https://mygwacalculator.com/#webpage",
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

    {/* HowTo Schema for Calculator Usage */}
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HowTo",
          "name": "How to Calculate GWA (General Weighted Average)",
          "description": "Step-by-step guide to calculating your GWA using the weighted average formula.",
          "image": "https://mygwacalculator.com/og-image.jpg",
          "totalTime": "PT5M",
          "step": [
            {
              "@type": "HowToStep",
              "name": "Gather Grades and Units",
              "text": "List down all your subjects for the semester/term along with their corresponding grades and number of units/credits.",
              "image": "https://mygwacalculator.com/step1-grades.jpg",
              "url": "https://mygwacalculator.com/#step1"
            },
            {
              "@type": "HowToStep",
              "name": "Multiply Grade by Units",
              "text": "For each subject, multiply the grade by the number of units. (e.g., Grade 1.5 x 3 units = 4.5)",
              "image": "https://mygwacalculator.com/step2-multiply.jpg",
              "url": "https://mygwacalculator.com/#step2"
            },
            {
              "@type": "HowToStep",
              "name": "Get the Sum of Products",
              "text": "Add up all the results from the previous step to get the total weighted points.",
              "image": "https://mygwacalculator.com/step3-sum.jpg",
              "url": "https://mygwacalculator.com/#step3"
            },
            {
              "@type": "HowToStep",
              "name": "Divide by Total Units",
              "text": "Divide the total weighted points by the total number of units. The result is your GWA.",
              "image": "https://mygwacalculator.com/step4-divide.jpg",
              "url": "https://mygwacalculator.com/#step4"
            }
          ]
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
            {t('hero.title')}
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-3 sm:mb-4">
            {t('hero.subtitle')}
          </h2>
          <p className="text-base sm:text-lg text-gray-500 dark:text-gray-400 max-w-3xl mx-auto mb-8 sm:mb-12 px-2">
            {t('hero.description')}
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
              {t('features.title')}
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-2">
              {t('features.description')}
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
                  <strong>{t('guide.intro_q')}</strong><br />
                  {t('guide.intro_a')}
                </p>

                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-6">
                  {t('guide.intro_story')}
                </p>

                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-academic-blue dark:text-blue-400" />
                  {t('guide.what_is_title')}
                </h3>

                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4">
                  {t('guide.what_is_p1')}
                </p>

                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-6">
                  {t('guide.what_is_p2')}
                </p>

                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <Target className="h-5 w-5 text-academic-blue dark:text-blue-400" />
                  {t('guide.why_care_title')}
                </h3>

                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-3">
                  {t('guide.why_care_intro')}
                </p>
                <ul className="list-disc list-inside text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-6 space-y-1">
                  <li>{t('guide.care_list_1')}</li>
                  <li>{t('guide.care_list_2')}</li>
                  <li>{t('guide.care_list_3')}</li>
                </ul>

                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-6">
                  {t('guide.why_care_outro')}
                </p>

                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <Award className="h-5 w-5 text-academic-blue dark:text-blue-400" />
                  {t('guide.scale_title')}
                </h3>

                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-3">
                  {t('guide.scale_intro')}
                </p>
                <ul className="list-disc list-inside text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-6 space-y-1">
                  <li>{t('guide.scale_1')}</li>
                  <li>{t('guide.scale_2')}</li>
                  <li>{t('guide.scale_3')}</li>
                  <li>{t('guide.scale_4')}</li>
                  <li>{t('guide.scale_5')}</li>
                </ul>

                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-6">
                  {t('guide.scale_outro')}
                </p>

                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <Star className="h-5 w-5 text-academic-blue dark:text-blue-400" />
                  {t('guide.good_gwa_title')}
                </h3>

                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-3">
                  {t('guide.good_gwa_intro')}
                </p>
                <ul className="list-disc list-inside text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-6 space-y-1">
                  <li>{t('guide.good_1')}</li>
                  <li>{t('guide.good_2')}</li>
                  <li>{t('guide.good_3')}</li>
                  <li>{t('guide.good_4')}</li>
                </ul>

                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-6">
                  {t('guide.good_outro')}
                </p>

                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <BarChart className="h-5 w-5 text-academic-blue dark:text-blue-400" />
                  {t('guide.improve_title')}
                </h3>

                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4">
                  {t('guide.improve_intro')}
                </p>

                <div className="bg-academic-blue/5 dark:bg-blue-900/20 rounded-lg p-4 mb-6">
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-academic-blue dark:text-blue-400" />
                    {t('guide.tip_1_title')}
                  </h4>
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                    {t('guide.tip_1_desc')}
                  </p>
                </div>

                <div className="bg-academic-blue/5 dark:bg-blue-900/20 rounded-lg p-4 mb-6">
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-academic-blue dark:text-blue-400" />
                    {t('guide.tip_2_title')}
                  </h4>
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                    {t('guide.tip_2_desc')}
                  </p>
                </div>

                <div className="bg-academic-blue/5 dark:bg-blue-900/20 rounded-lg p-4 mb-6">
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-academic-blue dark:text-blue-400" />
                    {t('guide.tip_3_title')}
                  </h4>
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                    {t('guide.tip_3_desc')}
                  </p>
                </div>

                <div className="bg-academic-blue/5 dark:bg-blue-900/20 rounded-lg p-4 mb-6">
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-academic-blue dark:text-blue-400" />
                    {t('guide.tip_4_title')}
                  </h4>
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                    {t('guide.tip_4_desc')}
                  </p>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <BookMarked className="h-5 w-5 text-academic-blue dark:text-blue-400" />
                  {t('guide.story_title')}
                </h3>

                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4">
                  {t('guide.story_p1')}
                </p>

                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4">
                  <strong>{t('guide.story_p2')}</strong>
                </p>

                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-6">
                  {t('guide.story_p3')}
                </p>

                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-6">
                  {t('guide.story_p4')}
                </p>

                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <Calculator className="h-5 w-5 text-academic-blue dark:text-blue-400" />
                  {t('guide.calculator_title')}
                </h3>

                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4">
                  {t('guide.calculator_p1')}
                </p>

                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-6">
                  {t('guide.calculator_p2')}
                </p>

                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('guide.final_title')}
                </h3>

                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4">
                  {t('guide.final_p1')}
                </p>

                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4">
                  <strong>{t('guide.final_p2')}</strong>
                </p>

                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4">
                  {t('guide.final_p3')}
                </p>

                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                  {t('guide.final_p4')}
                  <strong>{t('guide.final_p5')}</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Free Tools Section - Internal Linking for SEO */}
      <section className="py-12 px-4 sm:py-16 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm transition-colors">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center gap-2">
              <Calculator className="h-6 w-6 sm:h-8 sm:w-8 text-academic-blue dark:text-blue-400" />
              Explore Our Free Academic Tools
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-2">
              Beyond GWA calculation, we offer a complete suite of free tools to help Filipino students track and improve their academic performance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <Link to="/tools/gwa-to-gpa-converter" className="group">
              <Card className="h-full bg-white/80 dark:bg-gray-800/80 border-gray-200/50 dark:border-gray-700/50 hover:border-academic-blue dark:hover:border-blue-500 transition-all hover:shadow-lg">
                <CardContent className="p-5">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white mb-2 group-hover:text-academic-blue dark:group-hover:text-blue-400">GWA to GPA Converter</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Convert your Philippine GWA to the international 4.0 GPA scale for applications abroad.</p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-academic-blue dark:group-hover:text-blue-400 transition-colors flex-shrink-0 mt-1" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link to="/tools/grade-average-calculator" className="group">
              <Card className="h-full bg-white/80 dark:bg-gray-800/80 border-gray-200/50 dark:border-gray-700/50 hover:border-academic-blue dark:hover:border-blue-500 transition-all hover:shadow-lg">
                <CardContent className="p-5">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white mb-2 group-hover:text-academic-blue dark:group-hover:text-blue-400">Grade Average Calculator</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Calculate your simple grade average across all subjects quickly and accurately.</p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-academic-blue dark:group-hover:text-blue-400 transition-colors flex-shrink-0 mt-1" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link to="/tools/weighted-grade-calculator" className="group">
              <Card className="h-full bg-white/80 dark:bg-gray-800/80 border-gray-200/50 dark:border-gray-700/50 hover:border-academic-blue dark:hover:border-blue-500 transition-all hover:shadow-lg">
                <CardContent className="p-5">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white mb-2 group-hover:text-academic-blue dark:group-hover:text-blue-400">Weighted Grade Calculator</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Compute weighted grades with different category weights for assignments, exams, and more.</p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-academic-blue dark:group-hover:text-blue-400 transition-colors flex-shrink-0 mt-1" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link to="/tools/final-grade-calculator" className="group">
              <Card className="h-full bg-white/80 dark:bg-gray-800/80 border-gray-200/50 dark:border-gray-700/50 hover:border-academic-blue dark:hover:border-blue-500 transition-all hover:shadow-lg">
                <CardContent className="p-5">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white mb-2 group-hover:text-academic-blue dark:group-hover:text-blue-400">Final Grade Calculator</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Find out what grade you need on your final exam to achieve your target grade.</p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-academic-blue dark:group-hover:text-blue-400 transition-colors flex-shrink-0 mt-1" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link to="/tools/semester-gpa-calculator" className="group">
              <Card className="h-full bg-white/80 dark:bg-gray-800/80 border-gray-200/50 dark:border-gray-700/50 hover:border-academic-blue dark:hover:border-blue-500 transition-all hover:shadow-lg">
                <CardContent className="p-5">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white mb-2 group-hover:text-academic-blue dark:group-hover:text-blue-400">Semester GPA Calculator</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Calculate your GPA for a specific semester with accurate credit hour weighting.</p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-academic-blue dark:group-hover:text-blue-400 transition-colors flex-shrink-0 mt-1" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link to="/tools/cgpa-to-percentage-calculator" className="group">
              <Card className="h-full bg-white/80 dark:bg-gray-800/80 border-gray-200/50 dark:border-gray-700/50 hover:border-academic-blue dark:hover:border-blue-500 transition-all hover:shadow-lg">
                <CardContent className="p-5">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white mb-2 group-hover:text-academic-blue dark:group-hover:text-blue-400">CGPA to Percentage Calculator</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Convert your CGPA to percentage format used in job applications and further studies.</p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-academic-blue dark:group-hover:text-blue-400 transition-colors flex-shrink-0 mt-1" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Section - SEO Content Hub */}
      <section className="py-12 px-4 sm:py-16 bg-gray-50/80 dark:bg-gray-800/60 backdrop-blur-sm transition-colors">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center gap-2">
              <Newspaper className="h-6 w-6 sm:h-8 sm:w-8 text-academic-blue dark:text-blue-400" />
              Latest from Our Blog
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-2">
              Expert guides, tips, and insights to help you succeed academically in the Philippines.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
            <Link to="/blog/how-to-compute-gwa" className="group">
              <Card className="h-full bg-white/80 dark:bg-gray-800/80 border-gray-200/50 dark:border-gray-700/50 hover:border-academic-blue dark:hover:border-blue-500 transition-all hover:shadow-lg">
                <CardContent className="p-5">
                  <span className="text-xs font-medium text-academic-blue dark:text-blue-400 bg-academic-blue/10 dark:bg-blue-900/20 px-2 py-1 rounded-full">Guide</span>
                  <h3 className="font-bold text-gray-900 dark:text-white mt-3 mb-2 group-hover:text-academic-blue dark:group-hover:text-blue-400">How to Compute GWA: Step-by-Step Guide</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Learn the complete process of computing your General Weighted Average with examples and formulas.</p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/blog/how-to-compute-grades-in-college" className="group">
              <Card className="h-full bg-white/80 dark:bg-gray-800/80 border-gray-200/50 dark:border-gray-700/50 hover:border-academic-blue dark:hover:border-blue-500 transition-all hover:shadow-lg">
                <CardContent className="p-5">
                  <span className="text-xs font-medium text-academic-blue dark:text-blue-400 bg-academic-blue/10 dark:bg-blue-900/20 px-2 py-1 rounded-full">Tutorial</span>
                  <h3 className="font-bold text-gray-900 dark:text-white mt-3 mb-2 group-hover:text-academic-blue dark:group-hover:text-blue-400">How to Compute Grades in College</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">A complete guide to understanding and computing your college grades in the Philippine education system.</p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/blog/deans-list-requirements-philippines" className="group">
              <Card className="h-full bg-white/80 dark:bg-gray-800/80 border-gray-200/50 dark:border-gray-700/50 hover:border-academic-blue dark:hover:border-blue-500 transition-all hover:shadow-lg">
                <CardContent className="p-5">
                  <span className="text-xs font-medium text-academic-blue dark:text-blue-400 bg-academic-blue/10 dark:bg-blue-900/20 px-2 py-1 rounded-full">Exclusive</span>
                  <h3 className="font-bold text-gray-900 dark:text-white mt-3 mb-2 group-hover:text-academic-blue dark:group-hover:text-blue-400">Dean's List Requirements 2025</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Check the GWA requirements for Dean's List at UP, PUP, UST, DLSU, PLM, and other top universities.</p>
                </CardContent>
              </Card>
            </Link>
          </div>

          <div className="text-center">
            <Link to="/blog" className="inline-flex items-center gap-2 text-academic-blue dark:text-blue-400 font-semibold hover:underline">
              View All Blog Posts <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section - Mobile First */}
      <section className="py-12 px-4 sm:py-16 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm transition-colors">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center gap-2">
              <HelpCircle className="h-6 w-6 sm:h-8 sm:w-8 text-academic-blue dark:text-blue-400" />
              {t('faq.title')}
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-2">
              {t('faq.desc')}
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
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">{t('cta.title')}</h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90 px-2">
            {t('cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md sm:max-w-none mx-auto">
            <a href="#calculator" className="bg-white text-academic-blue dark:text-blue-900 px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-200 transition-colors text-center">
              {t('cta.button_use')}
            </a>
            <a href="/about" className="border-2 border-white text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-academic-blue dark:hover:text-blue-900 transition-colors text-center">
              {t('cta.button_learn')}
            </a>
          </div>
        </div>
      </section>

      <BackToTopButton />
    </div>
  </>;
};

export default Index;
