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
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const BlogDetail = () => {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  
  const article = {
    id: 1,
    title: "GWA Calculator - What It Is, Why It Matters, and the Easiest Way to Compute It",
    content: `Let's be honest—being a student today is tough. You're juggling classes, deadlines, quizzes, and maybe even a part-time job. The last thing you want to deal with is sitting down with a calculator, trying to figure out your GWA (General Weighted Average).

But here's the good news: you don't have to. In this guide, I'll walk you through what GWA is, why it's important, and how you can compute it the easy way (hint: we've got a tool for that).

## So… What Exactly Is GWA?

GWA stands for General Weighted Average. Think of it as your overall performance score in school, but smarter. Instead of just adding all your grades and dividing them by the number of subjects, GWA takes into account how much each subject matters.

For example, your major subjects with more units weigh more in your average than minor ones. So if you aced Math (3 units) but just passed PE (1 unit), don't worry—Math will still carry more weight in your GWA.

## Why Does GWA Even Matter?

You might be wondering—"Is this just another school number?" Well, yes… but it's a very important number. Your GWA can open doors for you, such as:

- Scholarship applications
- Academic awards like the Dean's List or honors
- University admissions
- Job interviews after college

Think of your GWA as your academic passport. The higher it is, the more places you can go.

## How to Compute GWA (Let's Keep It Simple)

Here's the basic formula behind GWA:

**GWA = (Grade × Units for each subject) ÷ Total Units**

Let's say you took these classes:

| Subject | Grade | Units | Grade × Units |
|---------|-------|-------|---------------|
| Math    | 90    | 3     | 270          |
| English | 85    | 2     | 170          |
| Science | 92    | 2     | 184          |
| History | 88    | 3     | 264          |

- Total Units = 10
- Total Grade Points = 888
- GWA = 888 ÷ 10 = 88.8%

Simple enough when you only have a few subjects. But what if you have 8 subjects? Or different grading systems?

That's when things get messy… unless you use a calculator.

## Why Use an Online GWA Calculator Instead?

Let me save you the time and trouble. Instead of manually doing math, you can use our Online GWA Calculator. It's free, super easy to use, and gives you results in seconds.

All you have to do is:

1. Enter your subjects, grades, and units
2. Click "Calculate."
3. Boom—your GWA shows up instantly

Plus, it works on both mobile and desktop, so you can use it anywhere—even on your way to class.

## Need More? We've Got Extra Tools for You

We didn't stop at just one tool. We've also created supporting calculators to make your academic life even easier. Here are some that might help:

| Tool | What It Does |
|------|-------------|
| GWA to GPA Converter | Applying abroad? Convert your GWA to GPA (4.0 or 5.0 scale) |
| Grade Average Calculator | Want your plain average without weighting? Use this. |
| Weighted Grade Calculator | For subjects where midterms, finals, and projects have different weights |
| Final Grade Calculator | Tells you what grade you need on your final to reach a goal |
| Semester GPA Calculator | Ideal for college students calculating GPA per term |
| CGPA to Percentage Converter | For Indian or other grading systems that use percentages |

You can find all these in our Student Tools section. They're built for students just like you, and yes—they're all free to use.

## GWA vs GPA – Aren't They the Same?

They're kind of similar, but not quite the same.

| GWA | GPA |
|-----|-----|
| Common in the Philippines 🇵🇭 | Common in the U.S. and global schools |
| Based on 100-point system | Based on 4.0 or 5.0 scale |
| Uses subject credit units | Uses grade points (A=4, B=3...) |

If you're applying internationally, you'll probably need to convert your GWA to GPA. Don't worry—we made a tool for that too.

## Real Talk: Why You Should Track Your GWA

Tracking your GWA regularly can seriously help you stay on top of your studies. It lets you:

- Know where you stand after each term
- Set smarter academic goals
- See if you're on track for scholarships
- Stop guessing and start planning

I personally wish I started using a GWA calculator earlier. It would've saved me from a lot of panic moments right before grades came out!

## Quick Example: How Online GWA Calculation Works

Let's take one subject—History. The school gives you weights like:

- Quizzes: 30%
- Assignments: 20%
- Midterm: 25%
- Final Exam: 25%

And your grades were:

- Quizzes: 90
- Assignments: 80
- Midterm: 85
- Final Exam: 90

Here's how the calculator works behind the scenes:

- Quizzes: 90 × 0.30 = 27
- Assignments: 80 × 0.20 = 16
- Midterm: 85 × 0.25 = 21.25
- Final Exam: 90 × 0.25 = 22.5
- **Total = 86.75 → Your GWA for History is 86.75%**

Our calculator does this instantly—just enter the numbers, and you're done.

## Why Students Love Our Tools

Here's why thousands of students use our online GWA calculator (and other tools):

- **Saves time** – Get results instantly
- **No math skills needed** – Just input your grades
- **Accurate** – No risk of human error
- **Works anywhere** – Mobile-friendly and fast
- **Supports multiple systems** – 100-point, 4.0 GPA, and more

Seriously, once you try it, you'll never go back to paper and pen.

## Final Thoughts (You Got This!)

Your GWA might seem like a small number, but it holds a lot of power. It can shape your opportunities, influence your future plans, and give you confidence that you're on the right track.

So if you've been stressing about how to compute it, don't. Use our GWA Calculator, explore the Student Tools, and take control of your academic journey.

Whether you're pushing for honors, applying for a scholarship, or just trying to pass this semester—you've got this!`,
    author: "Anmol Sharma",
    date: "2025-01-20",
    readTime: "8 min read",
    category: "Tutorial",
    tags: ["GWA", "Calculator", "Academic", "Guide", "Student Tools"]
  };

  const currentUrl = "https://mygwacalculator.com/blog/how-to-compute-gwa";
  const imageUrl = "https://mygwacalculator.com/og-gwa-guide.jpg";

  const handleShareClick = async (platform?: string) => {
    const url = window.location.href;
    const text = `Check out this comprehensive guide: ${article.title}`;
    
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

  // ... keep existing code (formatContent function)
  const formatContent = (text: string) => {
    return text.split('\n').map((line, index) => {
      // Handle headers
      if (line.startsWith('## ')) {
        return (
          <h2 key={index} className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6 first:mt-0 leading-tight">
            {line.replace('## ', '')}
          </h2>
        );
      }

      // Handle subheadings
      if (line.startsWith('### ')) {
        return (
          <h3 key={index} className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-200 mt-8 mb-4 leading-tight">
            {line.replace('### ', '')}
          </h3>
        );
      }

      // Handle bold text
      if (line.includes('**') && line.trim().startsWith('**') && line.trim().endsWith('**')) {
        return (
          <p key={index} className="font-bold text-gray-900 dark:text-white mb-4 text-lg">
            {line.replace(/\*\*/g, '')}
          </p>
        );
      }

      // Handle bullet points
      if (line.startsWith('- ')) {
        return (
          <li key={index} className="text-gray-700 dark:text-gray-300 mb-3 ml-6 leading-relaxed text-base md:text-lg list-disc">
            <span dangerouslySetInnerHTML={{
              __html: line.replace('- ', '').replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-gray-900 dark:text-white">$1</strong>')
            }} />
          </li>
        );
      }

      // Handle numbered lists
      if (/^\d+\./.test(line)) {
        return (
          <li key={index} className="text-gray-700 dark:text-gray-300 mb-3 ml-6 leading-relaxed text-base md:text-lg list-decimal">
            {line.replace(/^\d+\.\s*/, '')}
          </li>
        );
      }

      // Handle table rows (simple detection)
      if (line.includes('|') && line.trim() !== '' && !line.includes('---')) {
        const cells = line.split('|').map(cell => cell.trim()).filter(cell => cell);
        if (cells.length > 1) {
          const isHeader = index === 0 || text.split('\n')[index - 1].includes('---');
          return (
            <tr key={index} className="border-b border-gray-200 dark:border-gray-700">
              {cells.map((cell, cellIndex) => 
                isHeader ? (
                  <th key={cellIndex} className="px-4 py-3 text-left font-semibold text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-800">
                    {cell.replace(/\*\*(.*?)\*\*/g, '$1')}
                  </th>
                ) : (
                  <td key={cellIndex} className="px-4 py-3 text-gray-700 dark:text-gray-300">
                    {cell.replace(/\*\*(.*?)\*\*/g, '$1')}
                  </td>
                )
              )}
            </tr>
          );
        }
      }

      // Handle empty lines
      if (line.trim() === '') {
        return <div key={index} className="mb-6"></div>;
      }

      // Handle regular paragraphs
      if (line.trim() !== '' && !line.startsWith('#') && !line.includes('|') && !line.includes('---')) {
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
        <title>How to Compute GWA - Complete Guide with Calculator | GWA Calculator Philippines</title>
        <meta name="description" content="Learn what GWA is, why it matters, and how to calculate it easily. Complete step-by-step guide with examples, formula explanation, and free online calculator tools for Filipino students." />
        <meta name="keywords" content="how to compute GWA, GWA calculator, general weighted average, academic performance, student tools, grade calculation, Philippines education, college grades, university GWA" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="Anmol Sharma" />
        <link rel="canonical" href={currentUrl} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="How to Compute GWA - Complete Guide with Calculator | GWA Calculator Philippines" />
        <meta property="og:description" content="Learn what GWA is, why it matters, and how to calculate it easily. Complete step-by-step guide with examples for Filipino students." />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:site_name" content="GWA Calculator" />
        <meta property="og:locale" content="en_PH" />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="article:published_time" content="2025-01-20T00:00:00+08:00" />
        <meta property="article:modified_time" content="2025-01-20T00:00:00+08:00" />
        <meta property="article:author" content="Anmol Sharma" />
        <meta property="article:section" content="Education" />
        <meta property="article:tag" content="GWA Calculator" />
        <meta property="article:tag" content="Academic Performance" />
        <meta property="article:tag" content="Student Tools" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="How to Compute GWA - Complete Guide with Calculator" />
        <meta name="twitter:description" content="Learn what GWA is, why it matters, and how to calculate it easily. Complete step-by-step guide with examples for Filipino students." />
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
            "description": "Learn what GWA is, why it matters, and how to calculate it easily. Complete step-by-step guide with examples, formula explanation, and free online calculator tools for Filipino students.",
            "image": imageUrl,
            "url": currentUrl,
            "datePublished": "2025-01-20T00:00:00+08:00",
            "dateModified": "2025-01-20T00:00:00+08:00",
            "author": {
              "@type": "Person",
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
            "timeRequired": "PT8M",
            "inLanguage": "en-PH",
            "isAccessibleForFree": true,
            "about": {
              "@type": "Thing",
              "name": "General Weighted Average",
              "description": "A grading system used in the Philippines to calculate academic performance"
            },
            "mentions": [
              {
                "@type": "Thing",
                "name": "GWA Calculator",
                "url": "https://mygwacalculator.com"
              },
              {
                "@type": "Thing", 
                "name": "Academic Performance",
                "description": "Student academic achievement and grading"
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
                "name": "What is GWA?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "GWA stands for General Weighted Average. It's your overall performance score in school that takes into account how much each subject matters based on their credit units."
                }
              },
              {
                "@type": "Question",
                "name": "How do you calculate GWA?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "GWA = (Grade × Units for each subject) ÷ Total Units. You multiply each grade by its units, sum all results, then divide by total units."
                }
              },
              {
                "@type": "Question",
                "name": "Is the GWA calculator free to use?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes! All our calculators and tools are completely free to use. No hidden fees, no subscriptions required."
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
                "name": "How to Compute GWA",
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
                  {formatContent(article.content).map((element, index) => {
                    // Wrap table rows in table structure
                    if (element && element.type === 'tr') {
                      const tableRows = formatContent(article.content).filter(el => el && el.type === 'tr');
                      if (tableRows[0] === element) {
                        return (
                          <div key={`table-${index}`} className="my-8 overflow-x-auto">
                            <Table className="w-full border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                              <TableHeader>
                                {tableRows[0]}
                              </TableHeader>
                              <TableBody>
                                {tableRows.slice(1)}
                              </TableBody>
                            </Table>
                          </div>
                        );
                      }
                      return null;
                    }
                    return element;
                  })}
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
                    Is the GWA calculator free to use?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 dark:text-gray-300">
                    Yes! All our calculators and tools are completely free to use. No hidden fees, no subscriptions required.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="border-gray-200 dark:border-gray-700">
                  <AccordionTrigger className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
                    How accurate are the calculations?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 dark:text-gray-300">
                    Our calculators use precise mathematical formulas and are thoroughly tested. They eliminate human error and provide accurate results every time.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="border-gray-200 dark:border-gray-700">
                  <AccordionTrigger className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
                    Can I use this for different grading systems?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 dark:text-gray-300">
                    Absolutely! Our tools support various grading systems including 100-point scale, 4.0 GPA, 5.0 GPA, and percentage-based systems.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4" className="border-gray-200 dark:border-gray-700">
                  <AccordionTrigger className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
                    Is my data saved or shared?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 dark:text-gray-300">
                    No, we don't store any of your grade data. All calculations are done locally in your browser for complete privacy and security.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5" className="border-gray-200 dark:border-gray-700">
                  <AccordionTrigger className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
                    What's the difference between GWA and GPA?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 dark:text-gray-300">
                    GWA (General Weighted Average) is commonly used in the Philippines and is based on a 100-point system. GPA (Grade Point Average) is used internationally and is typically based on a 4.0 or 5.0 scale.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* Tools Call-to-Action */}
          <Card className="mt-12 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 border-0 shadow-xl">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                🚀 Explore Our Student Tools
              </CardTitle>
              <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
                Take your academic performance to the next level with our comprehensive suite of calculators and tools.
              </p>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    name: "GWA to GPA Converter",
                    desc: "Convert your GWA to international GPA scales",
                    href: "/tools/gwa-to-gpa-converter"
                  },
                  {
                    name: "Final Grade Calculator",
                    desc: "Find out what you need on your final exam",
                    href: "/tools/final-grade-calculator"
                  },
                  {
                    name: "Weighted Grade Calculator",
                    desc: "Calculate grades with different weight categories",
                    href: "/tools/weighted-grade-calculator"
                  },
                  {
                    name: "Semester GPA Tool",
                    desc: "Track your GPA per semester",
                    href: "/tools/semester-gpa-calculator"
                  },
                  {
                    name: "Grade Average Tool",
                    desc: "Simple average calculator for your grades",
                    href: "/tools/grade-average-calculator"
                  },
                  {
                    name: "CGPA to Percentage",
                    desc: "Convert CGPA to percentage easily",
                    href: "/tools/cgpa-to-percentage-calculator"
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

export default BlogDetail;
