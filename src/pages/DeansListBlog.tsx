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

const DeansListBlog = () => {
    const { toast } = useToast();
    const [copied, setCopied] = useState(false);

    const article = {
        id: 3,
        title: "Dean's List Requirements in the Philippines: UP, PLM, PUP, UST, DLSU & ADMU Guide (2025)",
        content: `Aiming for the Dean's List? You're not alone. It's one of the most prestigious academic achievements you can put on your CV. But here's the catch: every university in the Philippines has different GWA requirements.

In this guide, we've compiled the latest Dean's List requirements for the top universities in the country. Whether you're a freshie or a graduating student, here's exactly what you need to aim for.

## University of the Philippines (UP)

The UP system is competitive, and so are its honor standards. To be a **University Scholar** or **College Scholar**, you need to meet these GWA cutoffs per semester:

| Honor Title | Required GWA | Minimum Units |
|-------------|--------------|---------------|
| University Scholar | 1.00 - 1.45 | 15 academic units |
| College Scholar | 1.4501 - 1.75 | 15 academic units |

**Important Note:** You must not have a grade below 3.0 in any subject, and no Dropped (DRP) or Incomplete (INC) marks for that semester.

## Polytechnic University of the Philippines (PUP)

PUP uses a slightly different system. As a "Scholar ng Bayan," here's what you need to maintain to be on the President's or Dean's List:

| Honor Title | Required GWA | No Grade Below |
|-------------|--------------|----------------|
| President's Lister | 1.00 - 1.50 | 2.50 |
| Dean's Lister | 1.51 - 1.75 | 2.50 |

You typically need a regular load of at least 15 units.

## Pamantasan ng Lungsod ng Maynila (PLM)

For PLMers, the standards are high. PLM creates a ranking of scholars based on GWA:

| Honor | GWA Requirement | No Grade Below |
|-------|-----------------|----------------|
| College Scholar | 1.00 - 1.75 | 2.25 |
| University Scholar | 1.00 - 1.25 | 1.75 |

PLM is strict—usually, you cannot have dropped subjects or failing marks in your entire stay to graduate with Latin Honors.

## University of Santo Tomas (UST)

To be a consistent Dean's Lister in UST, you need the following:

- **GWA:** 1.75 or higher
- **No Grade Below:** 3.0 (Passing) in any subject
- **Load:** No underloading (unless it's your final regular semester)

UST calculates GWA strictly, so even one lower grade can pull you down. Use our [GWA Calculator](/tools/gwa-calculator) to check if you're safe.

## De La Salle University (DLSU)

DLSU follows a trimester system, so you have three chances per year to make the list.

| Honor | GPA Requirement | No Grade Below |
|-------|-----------------|----------------|
| First Honors | 3.400 - 4.000 | 2.0 |
| Second Honors | 3.000 - 3.399 | 1.5 |

**Note:** DLSU uses a 4.0 grading scale (not 1.0 like UP/PUP). Make sure you convert properly if you're comparing!

## Ateneo de Manila University (ADMU)

Ateneo sets the bar high for their Dean's List (DL) certification each semester:

| Honor | QPI Requirement | No Grade Below |
|-------|-----------------|----------------|
| First Honors | 3.70 - 4.00 | B+ |
| Second Honors | 3.35 - 3.69 | B |

*QPI stands for Quality Point Index, which is basically their term for GWA/GPA.*

## How to Calculate If You Made the Cut

Now that you know the targets, how do you know if you made it?

1. **List your grades:** Gather all your grades for this semester.
2. **Check the units:** Note the credit units for each (usually 3 units per major subject).
3. **Use the formula:** (Grade × Units) ÷ Total Units.
4. **Compare:** Match your result with your university's requirement table above.

**Too much math?**
Don't stress. Just plug your grades into our **[Free GWA Calculator](/)**. It handles the unit weighting automatically so you can see your exact average in seconds.

## Tips to Maintain Dean's List Status

Making the list once is hard; staying there is harder. Here's how to keep your streak:

### 1. Strategic Load Planning
Don't take all your "killer" major subjects in one sem if you can avoid it. Balance hard subjs with easier electives to keep your GWA stable.

### 2. Track Grades Mid-Sem
Don't wait for the finals. If you know you're failing a quiz mid-sem, compute what you need to score on the final exam using our **[Final Grade Calculator](/tools/final-grade-calculator)**.

### 3. Know the "No Grade Below" Rule
Most honors have a "no grade below X" rule. Even if your average is 1.25, a single 4.0 (conditional) or 5.0 (fail) or sometimes even a 2.75 can disqualify you. Read your handbook!

## Final Thoughts

Being a Dean's Lister is a huge achievement, but it's not the only measure of success. Use these goals to motivate you, but don't burn out chasing a number.

Study smart, track your grades, and good luck this semester!

*Note: Requirements may change per academic year. Always check your latest student handbook for the most official guidelines.*
`,
        author: "Academic Team",
        date: "2025-02-12",
        readTime: "6 min read",
        category: "Guide",
        tags: ["Dean's List", "Latin Honors", "GWA Requirements", "Philippines", "UP", "UST", "PUP"]
    };

    const currentUrl = "https://mygwacalculator.com/blog/deans-list-requirements-philippines";
    const imageUrl = "https://mygwacalculator.com/og-deans-list.jpg";

    const handleShareClick = async (platform?: string) => {
        const url = window.location.href;
        const text = `Check out this guide on Dean's List Requirements: ${article.title}`;

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
                                .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-blue-600 dark:text-blue-400 hover:underline">$1</a>')
                        }} />
                    </li>
                );
            }

            // Handle numbered lists
            if (/^\d+\./.test(line)) {
                return (
                    <li key={index} className="text-gray-700 dark:text-gray-300 mb-3 ml-6 leading-relaxed text-base md:text-lg list-decimal">
                        <span dangerouslySetInnerHTML={{
                            __html: line.replace(/^\d+\.\s*/, '').replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-gray-900 dark:text-white">$1</strong>')
                        }} />
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
                                .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-blue-600 dark:text-blue-400 hover:underline">$1</a>')
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
                <title>Dean's List Requirements Philippines: UP, UST, DLSU, PUP & More | GWA Calculator</title>
                <meta name="description" content="Complete guide to Dean's List GWA requirements for top Philippine universities (UP, UST, DLSU, ADMU, PUP, PLM). Learn the grades you need to be a university scholar." />
                <meta name="keywords" content="Dean's List requirements Philippines, UP University Scholar GWA, UST Dean's List requirements, PUP President's Lister, latin honors philippines, GWA calculator for honors" />
                <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                <meta name="author" content="Academic Team" />
                <link rel="canonical" href={currentUrl} />

                {/* Open Graph */}
                <meta property="og:type" content="article" />
                <meta property="og:title" content="Dean's List Requirements Philippines: UP, UST, DLSU & More" />
                <meta property="og:description" content="Checking if you made the cut? Here are the Dean's List GWA requirements for UP, UST, DLSU, ADMU, PUP, and PLM." />
                <meta property="og:url" content={currentUrl} />
                <meta property="og:image" content={imageUrl} />
                <meta property="section" content="Education" />
                <meta property="article:published_time" content="2025-02-12T00:00:00+08:00" />
                <meta property="article:modified_time" content="2025-02-12T00:00:00+08:00" />

                {/* Schema */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": article.title,
                        "description": "Complete guide to Dean's List GWA requirements for top Philippine universities.",
                        "image": imageUrl,
                        "url": currentUrl,
                        "datePublished": "2025-02-12T00:00:00+08:00",
                        "dateModified": "2025-02-12T00:00:00+08:00",
                        "author": {
                            "@type": "Organization",
                            "name": "GWA Calculator Team"
                        },
                        "publisher": {
                            "@type": "Organization",
                            "name": "GWA Calculator",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://mygwacalculator.com/logo.png"
                            }
                        }
                    })}
                </script>

                {/* FAQ Schema */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "What is the GWA requirement for UP Dean's List?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "For UP Diliman and other campuses, University Scholars need a GWA of 1.00-1.45, while College Scholars need 1.4501-1.75."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "What grade do I need for UST Dean's List?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "UST requires a GWA of 1.75 or higher, with no grade below 3.0 (Passing) in any subject."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Is GWA different from GPA?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes. In the Philippines, GWA is often on a 1.0-5.0 scale (1.0 is highest) or 100-point scale. GPA is often 4.0 or 5.0 scale (4.0 is highest). Use our GWA to GPA converter to switch between them."
                                }
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
                                {article.tags.slice(0, 3).map(tag => (
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
                                        What happens if I get a 2.75 but my GWA is 1.25?
                                    </AccordionTrigger>
                                    <AccordionContent className="text-gray-600 dark:text-gray-300">
                                        This depends on your university. For UP, you're safe as long as no grade is below 3.0. But for PLM or UST, a 2.75 might disqualify you from higher honors. Always check your student handbook.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2" className="border-gray-200 dark:border-gray-700">
                                    <AccordionTrigger className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
                                        Does NSTP or PE count in Dean's List GWA?
                                    </AccordionTrigger>
                                    <AccordionContent className="text-gray-600 dark:text-gray-300">
                                        In most universities (like UP and PNU), NSTP and PE affects your load requirement but are **excluded** from the computation of GWA for honors. However, you often still need to pass them to qualify.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3" className="border-gray-200 dark:border-gray-700">
                                    <AccordionTrigger className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
                                        Can I still be a Dean's Lister with a dropped subject?
                                    </AccordionTrigger>
                                    <AccordionContent className="text-gray-600 dark:text-gray-300">
                                        Usually, no. Dropping a subject (DRP) typically disqualifies you for that specific semester's honors because you didn't finish the required academic load.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </CardContent>
                    </Card>

                    {/* Tools Call-to-Action */}
                    <Card className="mt-12 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 border-0 shadow-xl">
                        <CardHeader className="text-center pb-6">
                            <CardTitle className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                                🚀 Check Your Honor Status
                            </CardTitle>
                            <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
                                Stop guessing. Calculate your exact GWA now and see if you made the cut.
                            </p>
                        </CardHeader>
                        <CardContent className="p-8">
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {[
                                    {
                                        name: "GWA Calculator",
                                        desc: "Calculate your exact GWA instantly",
                                        href: "/"
                                    },
                                    {
                                        name: "Final Grade Calculator",
                                        desc: "See what you need on finals to keep your streak",
                                        href: "/tools/final-grade-calculator"
                                    },
                                    {
                                        name: "Semester GPA Tool",
                                        desc: "Track your grades per semester",
                                        href: "/tools/semester-gpa-calculator"
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
                                                Calculate Now →
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

export default DeansListBlog;
