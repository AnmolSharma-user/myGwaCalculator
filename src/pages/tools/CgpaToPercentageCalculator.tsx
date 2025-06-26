import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Calculator, Percent } from "lucide-react";
import { ReadingProgressBar } from "@/components/ReadingProgressBar";
import { BackToTopButton } from "@/components/BackToTopButton";
import { ResultsActions } from "@/components/ResultsActions";
import { SEOHead } from "@/components/SEOHead";

const CgpaToPercentageCalculator = () => {
  const [cgpa, setCgpa] = useState("");
  const [scale, setScale] = useState("10");
  const [percentage, setPercentage] = useState<number | null>(null);

  const handleCopy = async () => {
    const scaleText = scale === "10" ? "10-point scale" : scale === "4" ? "4-point scale" : "5-point scale";
    const resultsText = `CGPA to Percentage Conversion\n\nCGPA: ${cgpa} (${scaleText})\nEquivalent Percentage: ${percentage}%\nGrade Category: ${getGradeCategory(percentage || 0).category}`;
    await navigator.clipboard.writeText(resultsText);
  };

  const handlePrint = () => {
    const scaleText = scale === "10" ? "10-point scale" : scale === "4" ? "4-point scale" : "5-point scale";
    const printContent = `
      <div style="padding: 20px; font-family: Arial, sans-serif;">
        <h1>CGPA to Percentage Conversion</h1>
        <p><strong>CGPA:</strong> ${cgpa} (${scaleText})</p>
        <p><strong>Equivalent Percentage:</strong> ${percentage}%</p>
        <p><strong>Grade Category:</strong> ${getGradeCategory(percentage || 0).category}</p>
        <p style="margin-top: 20px; font-size: 12px; color: #666;">
          Generated on ${new Date().toLocaleDateString()}
        </p>
      </div>
    `;
    
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(printContent);
      printWindow.document.close();
      printWindow.print();
    }
  };

  const convertToPercentage = () => {
    const cgpaValue = parseFloat(cgpa);
    if (isNaN(cgpaValue)) return;

    let convertedPercentage = 0;

    switch (scale) {
      case "10":
        // 10-point scale: Percentage = CGPA × 9.5
        convertedPercentage = cgpaValue * 9.5;
        break;
      case "4":
        // 4-point scale: Percentage = (CGPA / 4) × 100
        convertedPercentage = (cgpaValue / 4) * 100;
        break;
      case "5":
        // 5-point scale: Percentage = (CGPA / 5) × 100
        convertedPercentage = (cgpaValue / 5) * 100;
        break;
    }

    // Cap at 100%
    convertedPercentage = Math.min(convertedPercentage, 100);
    setPercentage(Math.round(convertedPercentage * 100) / 100);
  };

  const getGradeCategory = (percentage: number) => {
    if (percentage >= 90) return { category: "Excellent", color: "text-green-600 dark:text-green-400" };
    if (percentage >= 80) return { category: "Very Good", color: "text-blue-600 dark:text-blue-400" };
    if (percentage >= 70) return { category: "Good", color: "text-yellow-600 dark:text-yellow-400" };
    if (percentage >= 60) return { category: "Above Average", color: "text-orange-600 dark:text-orange-400" };
    if (percentage >= 50) return { category: "Average", color: "text-gray-600 dark:text-gray-400" };
    return { category: "Below Average", color: "text-red-600 dark:text-red-400" };
  };

  const faqData = [
    {
      question: "What is CGPA?",
      answer: "CGPA stands for Cumulative Grade Point Average. It's the average of all grade points obtained in all semesters, representing overall academic performance throughout your course."
    },
    {
      question: "Which conversion formula is most accurate?",
      answer: "The accuracy depends on your institution's specific grading system. The 10-point scale formula (CGPA × 9.5) is commonly used in India, while the 4-point scale is standard in the US."
    },
    {
      question: "Can I use this for job applications?",
      answer: "Yes, many employers and graduate schools require percentage equivalents. However, always check if your institution provides official conversion guidelines first."
    },
    {
      question: "What if my CGPA doesn't fit these scales?",
      answer: "If your institution uses a different scale, consult with your academic office for the official conversion formula, as methods can vary between schools."
    },
    {
      question: "Is this CGPA to percentage calculator free to use?",
      answer: "Yes, our CGPA to percentage calculator is completely free to use. No registration or payment required."
    },
    {
      question: "Which scale should I use?",
      answer: "Use the scale that matches your institution's grading system. 10-point scale is common in India, 4-point scale in the US, and 5-point scale in some other countries."
    }
  ];

  return (
    <>
      <SEOHead
        title="CGPA to Percentage Calculator – Convert CGPA to Percentage Online"
        description="Convert your CGPA (on 10, 4, or 5 point scale) to percentage instantly. Free online CGPA to percentage conversion tool for students and job applications."
        keywords="CGPA to percentage, CGPA to percentage calculator, convert CGPA, academic tools, student grades, free online calculator, cumulative grade point average"
        canonicalUrl="https://mygwacalculator.com/tools/cgpa-to-percentage-calculator"
        faqData={faqData}
        toolType="Grade Converter"
        toolCategory="Educational"
        toolFeatures={[
          "Multiple scale support",
          "CGPA to percentage conversion",
          "Grade category display",
          "Instant results",
          "Mobile-friendly",
          "Job application ready"
        ]}
        toolBenefits={[
          "Academic conversion support",
          "Job application assistance",
          "Free to use",
          "No registration required",
          "Educational guidance"
        ]}
      />
      <ReadingProgressBar />
      <div className="min-h-screen bg-gradient-to-br from-academic-blue-light via-white to-academic-gray dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-32 pb-8 sm:pb-12 px-3 sm:px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 px-2">
              CGPA to Percentage Calculator
            </h1>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 px-2">
              Convert your Cumulative Grade Point Average to percentage
            </p>
          </div>

          <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm mx-2 sm:mx-0">
            <CardHeader className="pb-4 sm:pb-6">
              <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                <Percent className="h-4 w-4 sm:h-5 sm:w-5" />
                CGPA to Percentage Converter
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="cgpa-input" className="text-sm sm:text-base">Enter CGPA</Label>
                    <Input
                      id="cgpa-input"
                      type="number"
                      step="0.01"
                      placeholder="8.5"
                      value={cgpa}
                      onChange={(e) => setCgpa(e.target.value)}
                      className="mt-1 h-10 sm:h-11"
                    />
                  </div>
                  <div>
                    <Label htmlFor="scale-select" className="text-sm sm:text-base">CGPA Scale</Label>
                    <Select value={scale} onValueChange={setScale}>
                      <SelectTrigger className="mt-1 h-10 sm:h-11">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="10">10-Point Scale</SelectItem>
                        <SelectItem value="4">4-Point Scale (US)</SelectItem>
                        <SelectItem value="5">5-Point Scale</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button onClick={convertToPercentage} className="w-full h-10 sm:h-11 text-sm sm:text-base" disabled={!cgpa}>
                    <Calculator className="h-4 w-4 mr-2" />
                    Convert to Percentage
                  </Button>
                </div>

                <div className="space-y-4">
                  {percentage !== null && (
                    <div className="p-4 sm:p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <div className="text-center">
                        <h3 className="text-base sm:text-lg font-semibold text-blue-800 dark:text-blue-200 mb-2">
                          Equivalent Percentage
                        </h3>
                        <div className="text-3xl sm:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                          {percentage}%
                        </div>
                        <div className={`text-xs sm:text-sm font-medium ${getGradeCategory(percentage).color}`}>
                          {getGradeCategory(percentage).category}
                        </div>
                        <ResultsActions
                          onCopy={handleCopy}
                          onPrint={handlePrint}
                          customShareText={`My CGPA of ${cgpa} equals ${percentage}% - ${getGradeCategory(percentage).category}! 🎓`}
                        />
                      </div>
                    </div>
                  )}

                  <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm sm:text-base">Conversion Formula:</h4>
                    <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      <p>• 10-Point Scale: Percentage = CGPA × 9.5</p>
                      <p>• 4-Point Scale: Percentage = (CGPA ÷ 4) × 100</p>
                      <p>• 5-Point Scale: Percentage = (CGPA ÷ 5) × 100</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* SEO Content Area */}
          <Card className="mt-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm mx-2 sm:mx-0">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl text-gray-900 dark:text-white">
                Confused About CGPA to Percentage? Let's Fix That.
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Hey friends,<br />
                Ever stared at your <strong>CGPA</strong> and thought… <em>"Okay, but what does this mean in percentage?"</em>
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                You're not alone.<br />
                I remember checking my mark sheet in college.<br />
                <strong>8.4 CGPA.</strong> Great, right?<br />
                But then a job form asked me for <strong>percentage</strong>.<br />
                And that's when the stress hit.
              </p>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-4">
                First Things First — What's CGPA?
              </h3>
              
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                It stands for <strong>Cumulative Grade Point Average</strong>.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Think of it like your report card's average—but on a 10-point scale.<br />
                Most schools and colleges in India use this.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                But here's the twist...<br />
                Many universities, internships, and even recruiters?<br />
                They want <strong>percentage</strong>, not CGPA.
              </p>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-4">
                So How Do You Convert It?
              </h3>
              
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Here's the super simple trick:
              </p>
              
              <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-4 my-4">
                <p className="text-blue-800 dark:text-blue-200 font-semibold text-lg">
                  <strong>Percentage = CGPA × 9.5</strong>
                </p>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Yeah, that's it. Nothing fancy.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                <strong>Example:</strong><br />
                CGPA = 7.8<br />
                7.8 × 9.5 = <strong>74.1%</strong>
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Just like that, you've got your percentage.
              </p>
            </CardContent>
          </Card>

          <Card className="mt-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm mx-2 sm:mx-0">
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl text-gray-900 dark:text-white">
                "Wait… Is It Always 9.5?"
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Good question. The answer? <em>Mostly, yes.</em>
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                <strong>CBSE</strong> and many colleges in India use this formula.<br />
                But some universities have their own methods.<br />
                So always check your school's rules first.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Better yet?<br />
                Just use a <strong>CGPA to Percentage Calculator</strong> that does it for you.
              </p>
            </CardContent>
          </Card>

          <Card className="mt-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm mx-2 sm:mx-0">
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl text-gray-900 dark:text-white">
                Why I Use a Calculator Now (A Quick Story)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Once, I filled out a college form in a rush.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                I wrote: <strong>8.2 CGPA = 82%</strong>
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Sounded right.<br />
                But nope.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Later found out:<br />
                8.2 × 9.5 = <strong>77.9%</strong><br />
                Not even close.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                And yeah… I missed the shortlist.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                After that, I never did manual math again.
              </p>
            </CardContent>
          </Card>

          <Card className="mt-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm mx-2 sm:mx-0">
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl text-gray-900 dark:text-white">
                How the Calculator Works
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Using one is easier than ordering food online.
              </p>
              
              <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                <li>Enter your <strong>CGPA</strong></li>
                <li>Select your grading system (if needed)</li>
                <li>Hit <strong>calculate</strong></li>
              </ul>
              
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                <strong>Boom.</strong> Percentage = done.
              </p>
            </CardContent>
          </Card>

          <Card className="mt-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm mx-2 sm:mx-0">
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl text-gray-900 dark:text-white">
                Real Example? Let's Go.
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Let's say:<br />
                You got <strong>CGPA: 8.0</strong><br />
                You're on the CBSE system
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Now:<br />
                8.0 × 9.5 = <strong>76%</strong>
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Simple.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                You don't even need to think twice.
              </p>
            </CardContent>
          </Card>

          <Card className="mt-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm mx-2 sm:mx-0">
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl text-gray-900 dark:text-white">
                Why It Matters
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                When you apply for:
              </p>
              
              <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300 mb-4">
                <li><strong>Scholarships</strong></li>
                <li><strong>Postgrad programs</strong></li>
                <li><strong>Internships</strong></li>
                <li><strong>Jobs abroad</strong></li>
              </ul>
              
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                They often want percentage.<br />
                Not your CGPA.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                That small number?<br />
                Can be the difference between getting in or getting skipped.
              </p>
            </CardContent>
          </Card>

          <Card className="mt-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm mx-2 sm:mx-0">
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl text-gray-900 dark:text-white">
                Pair It With Other Tools
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Want to level up your grade game?<br />
                Here are a few tools that <em>really</em> help:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <Calculator className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <a href="/tools/gwa-to-gpa-converter" className="font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline">
                        GWA to GPA Converter
                      </a>
                      <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">– If you're applying internationally</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Calculator className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <a href="/tools/final-grade-calculator" className="font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline">
                        Final Grade Calculator
                      </a>
                      <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">– To know what score you need</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Calculator className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <a href="/tools/semester-gpa-calculator" className="font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline">
                        Semester GPA Calculator
                      </a>
                      <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">– To track term-by-term performance</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <Calculator className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <a href="/tools/weighted-grade-calculator" className="font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline">
                        Weighted Grade Calculator
                      </a>
                      <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">– For courses with different grading rules</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Calculator className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <a href="/tools/grade-average-calculator" className="font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline">
                        Grade Average Calculator
                      </a>
                      <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">– To get your plain subject average</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                Because when you've got all the numbers right?<br />
                Everything feels easier.
              </p>
            </CardContent>
          </Card>

          <Card className="mt-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm mx-2 sm:mx-0">
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl text-gray-900 dark:text-white">
                Before You Go…
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Don't guess your percentage.<br />
                <strong>Know it.</strong>
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Use a calculator.<br />
                Avoid silly errors.<br />
                Save time. And maybe save that opportunity, too.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Trust me — I learned the hard way.
              </p>
            </CardContent>
          </Card>

          {/* FAQ Section */}
          <Card className="mt-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm mx-2 sm:mx-0">
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {faqData.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-gray-600 dark:text-gray-400">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </div>
      <BackToTopButton />
    </>
  );
};

export default CgpaToPercentageCalculator;
