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
      <title>GWA Calculator - Calculate General Weighted Average Online | Philippines</title>
      <meta name="description" content="Calculate your General Weighted Average (GWA) for free with our accurate online tool. Perfect for Filipino students, supports all grading systems. Get instant results!" />
      <meta name="keywords" content="GWA calculator, General Weighted Average calculator, grade calculator Philippines, academic performance tracker, student GPA calculator, free online calculator" />
      <link rel="canonical" href="https://mygwacalculator.com/" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
      <meta name="author" content="Anmol Gautam" />
      <meta name="geo.region" content="PH" />
      <meta name="geo.country" content="Philippines" />

      {/* Open Graph */}
      <meta property="og:title" content="Free GWA Calculator - Calculate General Weighted Average Online" />
      <meta property="og:description" content="Calculate your General Weighted Average (GWA) for free. Perfect for Filipino students, supports all grading systems." />
      <meta property="og:url" content="https://mygwacalculator.com/" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://mygwacalculator.com/android-chrome-512x512.png" />
      <meta property="og:locale" content="en_PH" />
      <meta property="og:site_name" content="mygwacalculator.com" />
      <link rel="alternate" hrefLang="en" href="https://mygwacalculator.com/" />
      <link rel="alternate" hrefLang="fil" href="https://mygwacalculator.com/?lng=fil" />
      <link rel="alternate" hrefLang="x-default" href="https://mygwacalculator.com/" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Free GWA Calculator Philippines" />
      <meta name="twitter:description" content="Calculate your GWA free. Built for Filipino students." />
      <meta name="twitter:image" content="https://mygwacalculator.com/android-chrome-512x512.png" />

      {/* Schema: SoftwareApplication */}
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "GWA Calculator",
        "description": "Free online General Weighted Average calculator for Filipino college students.",
        "url": "https://mygwacalculator.com/",
        "applicationCategory": "EducationalApplication",
        "operatingSystem": "Any",
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "PHP", "availability": "https://schema.org/InStock" },
        "author": { "@type": "Person", "name": "Anmol Gautam", "url": "https://mygwacalculator.com/about" },
        "publisher": { "@type": "Organization", "name": "mygwacalculator.com", "url": "https://mygwacalculator.com", "logo": { "@type": "ImageObject", "url": "https://mygwacalculator.com/android-chrome-512x512.png" } },
        "inLanguage": "en-PH",
        "isAccessibleForFree": true
      })}</script>

      {/* Schema: HowTo */}
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Calculate GWA (General Weighted Average)",
        "description": "Step-by-step guide to calculating your GWA using the weighted average formula.",
        "totalTime": "PT5M",
        "step": [
          { "@type": "HowToStep", "name": "Gather Grades and Units", "text": "List all your subjects for the semester with their grades and number of units.", "url": "https://mygwacalculator.com/#step1" },
          { "@type": "HowToStep", "name": "Multiply Grade by Units", "text": "For each subject, multiply the grade by the number of units (e.g., Grade 1.5 × 3 units = 4.5).", "url": "https://mygwacalculator.com/#step2" },
          { "@type": "HowToStep", "name": "Sum All Products", "text": "Add up all the grade × units results.", "url": "https://mygwacalculator.com/#step3" },
          { "@type": "HowToStep", "name": "Divide by Total Units", "text": "Divide the total weighted points by the total number of units. The result is your GWA.", "url": "https://mygwacalculator.com/#step4" }
        ]
      })}</script>

      {/* Schema: FAQPage — exactly one FAQPage on this URL */}
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
        }))
      })}</script>
    </Helmet>

    <div className="min-h-screen bg-gradient-to-br from-academic-blue-light via-white to-academic-gray dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors">
      <ReadingProgressBar />

      {/* Hero Section - Two-column layout with illustration */}
      <section className="pt-28 pb-6 px-4 sm:pt-32 sm:pb-10 md:pt-36 md:pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            {/* Text Column */}
            <div className="flex-1 text-center lg:text-left">
              <span className="inline-block bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
                🎓 Free for All Filipino Students
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-5 leading-tight">
                {t('hero.title')}
              </h1>
              <h2 className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-3 sm:mb-4">
                {t('hero.subtitle')}
              </h2>
              <p className="text-base sm:text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto lg:mx-0 mb-7 px-1">
                {t('hero.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <a href="#calculator" className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-3.5 rounded-xl font-semibold text-base transition-colors shadow-lg shadow-blue-200 dark:shadow-none">
                  Calculate My GWA Free →
                </a>
                <a href="/blog" className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-500 dark:hover:border-blue-400 px-7 py-3.5 rounded-xl font-semibold text-base transition-colors">
                  Read Guides
                </a>
              </div>
            </div>
            {/* Illustration Column */}
            <div className="flex-1 max-w-sm lg:max-w-lg w-full">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/hero-illustration.png"
                  alt="Filipino student using GWA calculator online with grade charts and academic tools"
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                  width="600"
                  height="400"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Stats Bar */}
      <section className="py-6 px-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-y border-gray-100 dark:border-gray-700">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            {[{
              value: "50,000+",
              label: "GWAs Calculated"
            }, {
              value: "6 Free",
              label: "Academic Tools"
            }, {
              value: "100%",
              label: "Free Forever"
            }, {
              value: "All PH",
              label: "Universities Supported"
            }].map((stat, i) => (
              <div key={i} className="py-3">
                <div className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400">{stat.value}</div>
                <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator Section - with Lazy Loading */}
      <section className="py-8 px-4 sm:py-10 md:py-14" id="calculator">
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
            {[{
              slug: "how-to-compute-gwa",
              label: "Guide",
              image: "/images/blog-compute-gwa.png",
              alt: "Notebook with GWA formula, calculator and graduation cap",
              title: "How to Compute GWA: Step-by-Step Guide",
              desc: "Learn the complete process of computing your General Weighted Average with examples and formulas."
            }, {
              slug: "how-to-compute-grades-in-college",
              label: "Tutorial",
              image: "/images/blog-college-grades.png",
              alt: "College student with textbooks and grade sheets",
              title: "How to Compute Grades in College",
              desc: "A complete guide to understanding and computing your college grades in the Philippine education system."
            }, {
              slug: "deans-list-requirements-philippines",
              label: "Exclusive",
              image: "/images/blog-deans-list.png",
              alt: "Dean's List honor board with graduation cap",
              title: "Dean's List Requirements 2025",
              desc: "Check the GWA requirements for Dean's List at UP, PUP, UST, DLSU, PLM, and other top universities."
            }].map((post, i) => (
              <Link key={i} to={`/blog/${post.slug}`} className="group">
                <Card className="h-full bg-white/80 dark:bg-gray-800/80 border-gray-200/50 dark:border-gray-700/50 hover:border-academic-blue dark:hover:border-blue-500 transition-all hover:shadow-lg overflow-hidden">
                  <div className="overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.alt}
                      className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-500"
                      width="400"
                      height="144"
                      loading="lazy"
                    />
                  </div>
                  <CardContent className="p-5">
                    <span className="text-xs font-medium text-academic-blue dark:text-blue-400 bg-academic-blue/10 dark:bg-blue-900/20 px-2 py-1 rounded-full">{post.label}</span>
                    <h3 className="font-bold text-gray-900 dark:text-white mt-3 mb-2 group-hover:text-academic-blue dark:group-hover:text-blue-400">{post.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{post.desc}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
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
