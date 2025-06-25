import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, Share2, Copy, Facebook, Twitter, MessageCircle, ArrowLeft } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { ReadingProgressBar } from "@/components/ReadingProgressBar";
import { BackToTopButton } from "@/components/BackToTopButton";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const GradesInCollegeBlog = () => {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  
  const article = {
    id: 2,
    title: "How to Compute Grades in College (Without the Headache)",
    content: `Whether you're just starting college or halfway through your degree, one question always pops up: How do I actually calculate my grades? Knowing how to compute your grades gives you control, confidence, and clarity throughout the semester.

Gone are the days of waiting anxiously for your professor to post final grades. With the right approach, you can track your progress and even predict your final grade before the semester ends.

## Understanding College Grading Systems

College grading isn't like high school. Most universities use a weighted system where different components of your grade carry different percentages:

- **Quizzes**: 20-30%
- **Assignments**: 15-25%
- **Midterm Exam**: 25-30%
- **Final Exam**: 25-35%
- **Class Participation**: 5-10%

These percentages vary by professor and course, but understanding the breakdown is your first step to grade calculation mastery.

## The Basic Formula for Weighted Grades

Here's the fundamental formula you need to know:

**Final Grade = (Component Grade × Weight) + (Component Grade × Weight) + ... for all components**

Let's break this down with a real example:

### Example: Computing Your Psychology 101 Grade

Your professor gives you this breakdown:
- Quizzes: 25%
- Assignments: 20%
- Midterm: 25%
- Final Exam: 30%

Your current scores:
- Quiz Average: 88%
- Assignment Average: 92%
- Midterm: 85%
- Final Exam: 90%

**Calculation:**
- Quizzes: 88 × 0.25 = 22 points
- Assignments: 92 × 0.20 = 18.4 points
- Midterm: 85 × 0.25 = 21.25 points
- Final: 90 × 0.30 = 27 points

**Total: 88.65%** (That's a solid B+!)

## Different Types of College Grading

### 1. Percentage-Based Grading
Most common in the Philippines. Your final grade is calculated as a percentage, usually out of 100.

### 2. Letter Grade System
Common in the US and many international schools:
- A: 90-100%
- B: 80-89%
- C: 70-79%
- D: 60-69%
- F: Below 60%

### 3. GPA System
Grade Point Average uses a 4.0 or 5.0 scale:
- A = 4.0
- B = 3.0
- C = 2.0
- D = 1.0
- F = 0.0

## Step-by-Step Guide to Calculate Your Grades

### Step 1: Gather Your Syllabus
Every course syllabus contains the grading breakdown. If you don't have it, ask your professor or check your course portal.

### Step 2: List All Your Scores
Create a simple spreadsheet or use our grade calculator to input:
- All quiz scores
- Assignment grades
- Exam results
- Participation points (if applicable)

### Step 3: Calculate Component Averages
For each category (quizzes, assignments, etc.), calculate your average score.

### Step 4: Apply the Weights
Multiply each component average by its weight percentage.

### Step 5: Sum It Up
Add all weighted scores to get your final grade.

## Pro Tips for Grade Management

### Track Your Progress Weekly
Don't wait until the end of the semester. Check your grades weekly and calculate your running average.

### Communicate with Professors
If you're confused about grading, ask! Most professors are happy to explain their system.

### Focus on High-Weight Components
If your final exam is worth 40% of your grade, prioritize studying for it over a 5% quiz.

### Use Grade Calculators
Why do math manually when tools can do it for you? Our grade calculators handle complex weighted systems automatically.

## What If You're Missing Grades?

Sometimes you'll want to calculate your grade before all assignments are complete. Here's how:

### Calculate Your Current Standing
Add up all completed weighted components. If you've completed 70% of the coursework, you can see where you stand.

### Project Your Final Grade
Use our Final Grade Calculator to see what score you need on remaining assignments to reach your target grade.

## Common Grading Mistakes to Avoid

### Mistake #1: Ignoring Weights
All grades are not created equal. A 95% on a 5% quiz won't save you from a 70% on a 40% final exam.

### Mistake #2: Forgetting About Attendance
Many professors include attendance and participation in final grades. Those "easy points" add up!

### Mistake #3: Not Reading the Syllabus
Grading policies vary widely. Some professors drop the lowest quiz, others curve final grades. Know your professor's policies.

### Mistake #4: Waiting Too Long to Check
Monitor your grades throughout the semester. It's easier to improve a trending 85% than to rescue a final 65%.

## Tools That Make Grade Calculation Easy

### Our Grade Calculator Suite
We've built several calculators specifically for students:

1. **Weighted Grade Calculator**: Handles complex weighting systems
2. **Final Grade Calculator**: Shows what you need to achieve your target
3. **GWA Calculator**: Perfect for Filipino students
4. **Semester GPA Calculator**: Track your overall semester performance

### Spreadsheet Templates
If you prefer doing it yourself, create a simple spreadsheet with:
- Component names
- Individual scores
- Weights
- Calculated weighted scores

## Planning for Academic Success

### Set Realistic Grade Goals
Decide what grades you want to achieve and work backwards. If you need an 85% final grade and you're at 80% going into the final exam, you know exactly what score you need.

### Balance Your Effort
Don't spend equal time on every assignment. Prioritize based on weight and difficulty.

### Create a Grade Recovery Plan
If you're behind, calculate what scores you need on remaining work. Sometimes it's mathematically impossible to reach certain grades, so adjust your goals accordingly.

## Why Grade Calculation Matters Beyond College

Understanding how weighted systems work prepares you for:
- Performance reviews at work
- Understanding interest calculations
- Analyzing any weighted decision-making system

These skills transfer beyond the classroom.

## Final Thoughts: Take Control of Your Academic Journey

Computing your grades shouldn't be a mystery. With the right tools and understanding, you can:
- Predict your final grades mid-semester
- Identify which assignments matter most
- Make informed decisions about study time allocation
- Reduce anxiety around grade uncertainty

Remember: Knowledge is power, and knowing how to calculate your grades gives you the power to take control of your academic success.

Whether you use our calculators or do it manually, the important thing is that you're actively monitoring your progress. Your future self will thank you for staying organized and informed throughout your college journey.`,
    author: "Academic Team",
    date: "2025-01-22",
    readTime: "7 min read",
    category: "Guide",
    tags: ["College", "Grades", "Academic", "Calculator"]
  };

  const currentUrl = "https://mygwacalculator.com/blog/how-to-compute-grades-in-college";
  const imageUrl = "https://mygwacalculator.com/og-college-grades-guide.jpg";

  const handleShareClick = async (platform?: string) => {
    const url = window.location.href;
    const text = `Check out this helpful guide: ${article.title}`;
    
    if (platform === 'twitter') {
      window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
    } else if (platform === 'facebook') {
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
    } else if (platform === 'whatsapp') {
      window.open(`https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`, '_blank');
    } else {
      try {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        toast({
          title: "Link copied!",
          description: "Article link has been copied to clipboard"
        });
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        toast({
          title: "Copy failed",
          description: "Unable to copy link to clipboard",
          variant: "destructive"
        });
      }
    }
  };

  const formatContent = (text: string) => {
    return text.split('\n').map((line, index) => {
      if (line.startsWith('## ')) {
        return (
          <h2 key={index} className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6 first:mt-0 leading-tight">
            {line.replace('## ', '')}
          </h2>
        );
      }

      if (line.startsWith('### ')) {
        return (
          <h3 key={index} className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-200 mt-8 mb-4 leading-tight">
            {line.replace('### ', '')}
          </h3>
        );
      }

      if (line.includes('**') && line.trim().startsWith('**') && line.trim().endsWith('**')) {
        return (
          <p key={index} className="font-bold text-gray-900 dark:text-white mb-4 text-lg">
            {line.replace(/\*\*/g, '')}
          </p>
        );
      }

      if (line.startsWith('- ')) {
        return (
          <li key={index} className="text-gray-700 dark:text-gray-300 mb-3 ml-6 leading-relaxed text-base md:text-lg list-disc">
            <span dangerouslySetInnerHTML={{
              __html: line.replace('- ', '').replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-gray-900 dark:text-white">$1</strong>')
            }} />
          </li>
        );
      }

      if (/^\d+\./.test(line)) {
        return (
          <li key={index} className="text-gray-700 dark:text-gray-300 mb-3 ml-6 leading-relaxed text-base md:text-lg list-decimal">
            {line.replace(/^\d+\.\s*/, '')}
          </li>
        );
      }

      if (line.trim() === '') {
        return <div key={index} className="mb-6"></div>;
      }

      if (line.trim() !== '' && !line.startsWith('#')) {
        return (
          <p key={index} className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-base md:text-lg">
            <span dangerouslySetInnerHTML={{
              __html: line.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-gray-900 dark:text-white">$1</strong>')
                          .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
            }} />
          </p>
        );
      }

      return null;
    }).filter(Boolean);
  };

  return (
    <>
      <Helmet>
        <title>How to Compute Grades in College - Complete Guide | Grade Calculator Philippines</title>
        <meta name="description" content="Learn how to calculate your college grades step-by-step. Master weighted grading systems, GPA calculation, and grade management for academic success in the Philippines." />
        <meta name="keywords" content="how to compute college grades, grade calculator, weighted grades, college grading system, GPA calculation, academic performance, Philippines college, university grades" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="Academic Team" />
        <link rel="canonical" href={currentUrl} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="How to Compute Grades in College - Complete Guide | Grade Calculator Philippines" />
        <meta property="og:description" content="Learn how to calculate your college grades step-by-step. Master weighted grading systems and grade management for academic success." />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:site_name" content="GWA Calculator" />
        <meta property="og:locale" content="en_PH" />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="article:published_time" content="2025-01-22T00:00:00+08:00" />
        <meta property="article:modified_time" content="2025-01-22T00:00:00+08:00" />
        <meta property="article:author" content="Academic Team" />
        <meta property="article:section" content="Education" />
        <meta property="article:tag" content="College Grades" />
        <meta property="article:tag" content="Academic Performance" />
        <meta property="article:tag" content="Grade Calculator" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="How to Compute Grades in College - Complete Guide" />
        <meta name="twitter:description" content="Learn how to calculate your college grades step-by-step. Master weighted grading systems and grade management for academic success." />
        <meta name="twitter:image" content={imageUrl} />
        <meta name="twitter:creator" content="@gwacalculator" />
        <meta name="twitter:site" content="@gwacalculator" />

        {/* Additional SEO Meta Tags */}
        <meta name="geo.region" content="PH" />
        <meta name="geo.country" content="Philippines" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": article.title,
            "description": "Learn how to calculate your college grades step-by-step. Master weighted grading systems, GPA calculation, and grade management for academic success in the Philippines.",
            "image": imageUrl,
            "url": currentUrl,
            "datePublished": "2025-01-22T00:00:00+08:00",
            "dateModified": "2025-01-22T00:00:00+08:00",
            "author": {
              "@type": "Organization",
              "name": article.author,
              "url": "https://mygwacalculator.com/about"
            },
            "publisher": {
              "@type": "Organization",
              "name": "GWA Calculator",
              "url": "https://mygwacalculator.com",
              "logo": {
                "@type": "ImageObject",
                "url": "https://mygwacalculator.com/logo.png"
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": currentUrl
            },
            "articleSection": "Education",
            "keywords": article.tags.join(", "),
            "wordCount": article.content.split(' ').length,
            "timeRequired": "PT7M",
            "inLanguage": "en-PH",
            "isAccessibleForFree": true,
            "about": {
              "@type": "Thing",
              "name": "College Grade Calculation",
              "description": "Methods and systems for calculating academic grades in college"
            },
            "mentions": [
              {
                "@type": "Thing",
                "name": "Grade Calculator",
                "url": "https://mygwacalculator.com/tools/grade-average-calculator"
              },
              {
                "@type": "Thing", 
                "name": "Weighted Grading System",
                "description": "Academic grading system where different components have different weights"
              }
            ]
          })}
        </script>

        {/* FAQ Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How do you calculate weighted grades in college?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "To calculate weighted grades, multiply each component grade by its weight percentage, then add all weighted scores together. For example: (Quiz Average × Quiz Weight) + (Exam Grade × Exam Weight) + ... for all components."
                }
              },
              {
                "@type": "Question",
                "name": "What is the difference between GWA and GPA?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "GWA (General Weighted Average) is used in the Philippines and based on a 100-point system. GPA (Grade Point Average) is used internationally and typically based on a 4.0 or 5.0 scale."
                }
              },
              {
                "@type": "Question",
                "name": "How can I predict my final grade?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You can predict your final grade by calculating your current weighted average and determining what scores you need on remaining assignments. Use a final grade calculator to see what you need to achieve your target grade."
                }
              }
            ]
          })}
        </script>

        {/* Breadcrumb Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://mygwacalculator.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Blog",
                "item": "https://mygwacalculator.com/blog"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "How to Compute Grades in College",
                "item": currentUrl
              }
            ]
          })}
        </script>
      </Helmet>

      <ReadingProgressBar />
      <BackToTopButton />

      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 dark:from-gray-800 dark:via-gray-900 dark:to-black text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24 my-[54px]">
            {/* Back to Blog Link */}
            <div className="mb-6">
              <Link to="/blog" className="inline-flex items-center text-white/80 hover:text-white transition-colors text-sm font-medium">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-6 sm:mb-8 gap-4">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30 text-xs sm:text-sm px-2 sm:px-3 py-1">
                  {article.category}
                </Badge>
                {article.tags.slice(0, 2).map(tag => (
                  <Badge key={tag} variant="outline" className="border-white/30 text-white text-xs px-2 py-1">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 sm:mb-8 font-inter">
              {article.title}
            </h1>
            
            <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-3 sm:gap-6 text-white/90 mb-6 sm:mb-8">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="font-medium text-sm sm:text-base">{article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="text-sm sm:text-base">{article.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="text-sm sm:text-base">{article.readTime}</span>
              </div>
            </div>

            {/* Share Widget */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <span className="text-white/80 text-sm font-medium">Share:</span>
              <div className="flex flex-wrap gap-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => handleShareClick('twitter')} 
                  className="bg-white/10 border-white/30 text-white hover:bg-white/20 transition-colors text-xs sm:text-sm px-3 py-2"
                >
                  <Twitter className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="hidden sm:inline ml-1">Twitter</span>
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => handleShareClick('facebook')} 
                  className="bg-white/10 border-white/30 text-white hover:bg-white/20 transition-colors text-xs sm:text-sm px-3 py-2"
                >
                  <Facebook className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="hidden sm:inline ml-1">Facebook</span>
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => handleShareClick('whatsapp')} 
                  className="bg-white/10 border-white/30 text-white hover:bg-white/20 transition-colors text-xs sm:text-sm px-3 py-2"
                >
                  <MessageCircle className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="hidden sm:inline ml-1">WhatsApp</span>
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => handleShareClick()} 
                  className="bg-white/10 border-white/30 text-white hover:bg-white/20 transition-colors text-xs sm:text-sm px-3 py-2"
                >
                  {copied ? "Copied!" : (
                    <>
                      <Copy className="h-3 w-3 sm:h-4 sm:w-4" />
                      <span className="hidden sm:inline ml-1">Copy</span>
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <Card className="border-0 shadow-xl bg-white dark:bg-gray-800 transition-colors duration-300">
            <CardContent className="p-6 sm:p-8 md:p-12">
              <div className="prose max-w-none">
                <div className="space-y-6">
                  {formatContent(article.content)}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* FAQ Section */}
          <Card className="mt-12 border-0 shadow-xl bg-white dark:bg-gray-800">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-center">
                📚 Frequently Asked Questions
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-gray-200 dark:border-gray-700">
                  <AccordionTrigger className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
                    How do weighted grades work in college?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 dark:text-gray-300">
                    Weighted grades assign different importance to various components of your course. For example, your final exam might be worth 40% while quizzes are only 20%. This means your final exam score has more impact on your overall grade.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="border-gray-200 dark:border-gray-700">
                  <AccordionTrigger className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
                    Can I calculate my grade before all assignments are done?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 dark:text-gray-300">
                    Yes! You can calculate your current standing by adding up all completed weighted components. Use our Final Grade Calculator to see what scores you need on remaining work to achieve your target grade.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="border-gray-200 dark:border-gray-700">
                  <AccordionTrigger className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
                    What's the difference between percentage and letter grades?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 dark:text-gray-300">
                    Percentage grades show your exact score (like 87%), while letter grades group scores into ranges (like A for 90-100%). Both systems can be converted to GPA for comparison purposes.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4" className="border-gray-200 dark:border-gray-700">
                  <AccordionTrigger className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
                    How often should I check my grades?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 dark:text-gray-300">
                    Check your grades weekly to stay on top of your academic progress. This allows you to identify issues early and make adjustments to your study strategy if needed.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5" className="border-gray-200 dark:border-gray-700">
                  <AccordionTrigger className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
                    What should I do if I disagree with a grade?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 dark:text-gray-300">
                    First, review the grading rubric and your work. If you still believe there's an error, politely discuss it with your professor during office hours. Come prepared with specific examples and be open to their explanation.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* Tools Call-to-Action */}
          <Card className="mt-12 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 border-0 shadow-xl">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                🚀 Try Our Grade Calculators
              </CardTitle>
              <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
                Make grade calculation easy with our comprehensive suite of academic tools designed for students.
              </p>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    name: "Weighted Grade Calculator",
                    desc: "Handle complex weighting systems easily",
                    href: "/tools/weighted-grade-calculator"
                  },
                  {
                    name: "Final Grade Calculator",
                    desc: "See what you need to achieve your target grade",
                    href: "/tools/final-grade-calculator"
                  },
                  {
                    name: "GWA Calculator",
                    desc: "Calculate your General Weighted Average",
                    href: "/"
                  },
                  {
                    name: "Semester GPA Calculator",
                    desc: "Track your semester performance",
                    href: "/tools/semester-gpa-calculator"
                  },
                  {
                    name: "Grade Average Calculator",
                    desc: "Simple grade averaging tool",
                    href: "/tools/grade-average-calculator"
                  },
                  {
                    name: "GWA to GPA Converter",
                    desc: "Convert between grading systems",
                    href: "/tools/gwa-to-gpa-converter"
                  }
                ].map((tool, index) => (
                  <Card key={index} className="bg-white dark:bg-gray-800 hover:shadow-lg transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-700">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{tool.name}</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{tool.desc}</p>
                      <Link 
                        to={tool.href} 
                        className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                      >
                        Try it now →
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default GradesInCollegeBlog;
