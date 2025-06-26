import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Calculator, ArrowRight } from "lucide-react";
import { ReadingProgressBar } from "@/components/ReadingProgressBar";
import { BackToTopButton } from "@/components/BackToTopButton";
import { ResultsActions } from "@/components/ResultsActions";
import { SEOHead } from "@/components/SEOHead";

const GwaToGpaConverter = () => {
  const [gwa, setGwa] = useState("");
  const [fromScale, setFromScale] = useState("1.0-5.0");
  const [toScale, setToScale] = useState("4.0");
  const [result, setResult] = useState<number | null>(null);

  const handleCopy = async () => {
    const fromScaleText = fromScale === "1.0-5.0" ? "Philippine GWA (1.0-5.0)" : fromScale === "4.0" ? "US GPA (0.0-4.0)" : "Percentage (0-100)";
    const toScaleText = toScale === "4.0" ? "US GPA (0.0-4.0)" : "Philippine GWA (1.0-5.0)";
    const resultsText = `Grade Scale Conversion\n\nOriginal Grade: ${gwa} (${fromScaleText})\nConverted Grade: ${result} (${toScaleText})`;
    await navigator.clipboard.writeText(resultsText);
  };

  const handlePrint = () => {
    const fromScaleText = fromScale === "1.0-5.0" ? "Philippine GWA (1.0-5.0)" : fromScale === "4.0" ? "US GPA (0.0-4.0)" : "Percentage (0-100)";
    const toScaleText = toScale === "4.0" ? "US GPA (0.0-4.0)" : "Philippine GWA (1.0-5.0)";
    const printContent = `
      <div style="padding: 20px; font-family: Arial, sans-serif;">
        <h1>Grade Scale Conversion</h1>
        <p><strong>Original Grade:</strong> ${gwa} (${fromScaleText})</p>
        <p><strong>Converted Grade:</strong> ${result} (${toScaleText})</p>
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

  const convertGwaToGpa = () => {
    const gwaValue = parseFloat(gwa);
    if (isNaN(gwaValue)) return;

    let convertedValue = 0;

    // Convert from source scale to 4.0 scale
    if (fromScale === "1.0-5.0" && toScale === "4.0") {
      // Philippine GWA (1.0-5.0) to US GPA (4.0)
      if (gwaValue <= 1.0) convertedValue = 4.0;
      else if (gwaValue <= 1.25) convertedValue = 3.75;
      else if (gwaValue <= 1.5) convertedValue = 3.5;
      else if (gwaValue <= 1.75) convertedValue = 3.25;
      else if (gwaValue <= 2.0) convertedValue = 3.0;
      else if (gwaValue <= 2.25) convertedValue = 2.75;
      else if (gwaValue <= 2.5) convertedValue = 2.5;
      else if (gwaValue <= 2.75) convertedValue = 2.25;
      else if (gwaValue <= 3.0) convertedValue = 2.0;
      else convertedValue = 0.0;
    } else if (fromScale === "4.0" && toScale === "1.0-5.0") {
      // US GPA (4.0) to Philippine GWA (1.0-5.0)
      if (gwaValue >= 3.75) convertedValue = 1.0;
      else if (gwaValue >= 3.5) convertedValue = 1.25;
      else if (gwaValue >= 3.25) convertedValue = 1.5;
      else if (gwaValue >= 3.0) convertedValue = 1.75;
      else if (gwaValue >= 2.75) convertedValue = 2.0;
      else if (gwaValue >= 2.5) convertedValue = 2.25;
      else if (gwaValue >= 2.25) convertedValue = 2.5;
      else if (gwaValue >= 2.0) convertedValue = 2.75;
      else if (gwaValue >= 1.0) convertedValue = 3.0;
      else convertedValue = 5.0;
    } else if (fromScale === "100" && toScale === "4.0") {
      // Percentage to 4.0 GPA
      if (gwaValue >= 97) convertedValue = 4.0;
      else if (gwaValue >= 93) convertedValue = 3.7;
      else if (gwaValue >= 90) convertedValue = 3.3;
      else if (gwaValue >= 87) convertedValue = 3.0;
      else if (gwaValue >= 83) convertedValue = 2.7;
      else if (gwaValue >= 80) convertedValue = 2.3;
      else if (gwaValue >= 77) convertedValue = 2.0;
      else if (gwaValue >= 73) convertedValue = 1.7;
      else if (gwaValue >= 70) convertedValue = 1.3;
      else if (gwaValue >= 60) convertedValue = 1.0;
      else convertedValue = 0.0;
    }

    setResult(Math.round(convertedValue * 100) / 100);
  };

  const faqData = [
    {
      question: "What's the difference between GWA and GPA?",
      answer: "GWA (General Weighted Average) is commonly used in the Philippines with a 1.0-5.0 scale, while GPA (Grade Point Average) typically uses a 4.0 scale in the US. Both measure academic performance but use different scales."
    },
    {
      question: "How accurate are these conversions?",
      answer: "These conversions provide general equivalents, but exact conversion may vary between institutions. Always check with your target school or employer for their specific conversion requirements."
    },
    {
      question: "Can I convert from percentage to GPA?",
      answer: "Yes! This tool supports conversion from percentage (0-100) to the 4.0 GPA scale, which is useful for international applications."
    },
    {
      question: "What if my school uses a different scale?",
      answer: "If your institution uses a scale not listed here, consult your academic office for official conversion guidelines, as conversion methods can vary significantly between schools."
    },
    {
      question: "Is this GWA to GPA converter free to use?",
      answer: "Yes, our GWA to GPA converter is completely free to use. No registration or payment required."
    },
    {
      question: "Can I convert multiple grades at once?",
      answer: "Currently, this tool converts one grade at a time. For multiple conversions, you can use the tool repeatedly or contact us for bulk conversion features."
    }
  ];

  return (
    <>
      <SEOHead
        title="GWA to GPA Converter – Convert Philippine GWA to US GPA Instantly"
        description="Instantly convert your Philippine General Weighted Average (GWA) to US GPA (4.0 scale) or vice versa. Free, accurate, and easy-to-use online grade conversion tool for students and professionals."
        keywords="GWA to GPA, GWA to GPA converter, Philippine GWA, US GPA, grade conversion, academic tools, student GPA, free online calculator, grade scale converter, international grade conversion"
        canonicalUrl="https://mygwacalculator.com/tools/gwa-to-gpa-converter"
        faqData={faqData}
        toolType="Grade Converter"
        toolCategory="Educational"
        toolFeatures={[
          "Philippine GWA to US GPA conversion",
          "US GPA to Philippine GWA conversion", 
          "Percentage to GPA conversion",
          "Multiple scale support",
          "Instant results",
          "Mobile-friendly"
        ]}
        toolBenefits={[
          "Accurate grade conversions",
          "International application support",
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
              GWA to GPA Converter
            </h1>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 px-2">
              Convert between different grading scales easily
            </p>
          </div>

          <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm mx-2 sm:mx-0">
            <CardHeader className="pb-4 sm:pb-6">
              <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                <Calculator className="h-4 w-4 sm:h-5 sm:w-5" />
                Grade Scale Converter
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="gwa-input" className="text-sm sm:text-base">Enter Grade</Label>
                    <Input
                      id="gwa-input"
                      type="number"
                      step="0.01"
                      value={gwa}
                      onChange={(e) => setGwa(e.target.value)}
                      placeholder="Enter your grade"
                      className="mt-1 h-10 sm:h-11"
                    />
                  </div>
                  <div>
                    <Label htmlFor="from-scale" className="text-sm sm:text-base">From Scale</Label>
                    <Select value={fromScale} onValueChange={setFromScale}>
                      <SelectTrigger className="mt-1 h-10 sm:h-11">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1.0-5.0">Philippine GWA (1.0-5.0)</SelectItem>
                        <SelectItem value="4.0">US GPA (0.0-4.0)</SelectItem>
                        <SelectItem value="100">Percentage (0-100)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex items-center justify-center py-2">
                  <ArrowRight className="h-6 w-6 sm:h-8 sm:w-8 text-academic-blue dark:text-blue-400" />
                </div>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="to-scale" className="text-sm sm:text-base">To Scale</Label>
                    <Select value={toScale} onValueChange={setToScale}>
                      <SelectTrigger className="mt-1 h-10 sm:h-11">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="4.0">US GPA (0.0-4.0)</SelectItem>
                        <SelectItem value="1.0-5.0">Philippine GWA (1.0-5.0)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  {result !== null && (
                    <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <Label className="text-sm sm:text-base">Converted Grade</Label>
                      <div className="text-xl sm:text-2xl font-bold text-green-600 dark:text-green-400 mt-1">
                        {result}
                      </div>
                      <ResultsActions
                        onCopy={handleCopy}
                        onPrint={handlePrint}
                        customShareText={`Grade Conversion: ${gwa} converted to ${result} 📊`}
                      />
                    </div>
                  )}
                </div>
              </div>

              <Button onClick={convertGwaToGpa} className="w-full h-10 sm:h-11 text-sm sm:text-base" disabled={!gwa}>
                Convert Grade
              </Button>
            </CardContent>
          </Card>

          {/* Comprehensive Guide Section */}
          <Card className="mt-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm mx-2 sm:mx-0">
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">GWA to GPA Converter: Simple Guide for Students Studying Abroad</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-gray-600 dark:text-gray-400">
                If you're applying to schools or scholarships outside the Philippines, chances are you've been asked for your GPA. But what if your school only provides GWA? Don't worry—you're not alone. This guide explains how you can convert your GWA to GPA easily and accurately using our free tool.
              </p>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">What is GWA?</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  <strong>GWA</strong> stands for <strong>General Weighted Average</strong>. It's used in the Philippines to reflect a student's overall academic performance based on grades and subject unit weight.
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  <strong>Formula:</strong> GWA = (Grade × Units for each subject) ÷ Total Units
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  In this system, a <strong>lower GWA</strong> means better performance. For example:
                </p>
                <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400">
                  <li>1.00 = Excellent</li>
                  <li>1.75 = Very Good</li>
                  <li>3.00 = Passing</li>
                  <li>5.00 = Failing</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">What is GPA?</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  <strong>GPA</strong> stands for <strong>Grade Point Average</strong>. It's the standard in the U.S., Canada, and many international universities, typically using a <strong>4-point scale</strong>.
                </p>
                <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400">
                  <li>A = 4.0</li>
                  <li>B = 3.0</li>
                  <li>C = 2.0</li>
                  <li>D = 1.0</li>
                  <li>F = 0.0</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">GWA vs GPA: What's the Difference?</h3>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Feature</TableHead>
                        <TableHead>GWA (Philippines)</TableHead>
                        <TableHead>GPA (US/International)</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Best Grade</TableCell>
                        <TableCell>1.00 (Lowest Value)</TableCell>
                        <TableCell>4.00 (Highest Value)</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Worst Grade</TableCell>
                        <TableCell>5.00</TableCell>
                        <TableCell>0.00</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Scale Direction</TableCell>
                        <TableCell>Lower = Better</TableCell>
                        <TableCell>Higher = Better</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Weighted by Units?</TableCell>
                        <TableCell>Yes</TableCell>
                        <TableCell>Yes</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Format</TableCell>
                        <TableCell>Numbers Only</TableCell>
                        <TableCell>Letters or Numbers</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Why Convert GWA to GPA?</h3>
                <p className="text-gray-600 dark:text-gray-400">You may need to convert GWA to GPA when:</p>
                <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400">
                  <li>Applying to study abroad</li>
                  <li>Submitting applications through Common App or similar portals</li>
                  <li>Applying for scholarships or internships requiring GPA</li>
                  <li>Joining student exchange programs</li>
                  <li>Sending transcripts to global employers</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">How to Use the GWA to GPA Converter</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We've built a simple, reliable tool to help you make the conversion in seconds.
                </p>
                <ol className="list-decimal pl-6 text-gray-600 dark:text-gray-400">
                  <li>Go to our GWA to GPA Converter (above)</li>
                  <li>Select your school's GWA scale (e.g., 1.00–5.00)</li>
                  <li>Input your current GWA</li>
                  <li>Click "Convert" to get your estimated GPA</li>
                </ol>
                <p className="text-sm text-gray-500 dark:text-gray-500">
                  <strong>Note:</strong> Always check with your target institution—they may have specific conversion policies.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">GWA to GPA Conversion Chart (Common Guide)</h3>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>GWA</TableHead>
                        <TableHead>Estimated GPA</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow><TableCell>1.00</TableCell><TableCell>4.00</TableCell></TableRow>
                      <TableRow><TableCell>1.25</TableCell><TableCell>3.75</TableCell></TableRow>
                      <TableRow><TableCell>1.50</TableCell><TableCell>3.50</TableCell></TableRow>
                      <TableRow><TableCell>1.75</TableCell><TableCell>3.25</TableCell></TableRow>
                      <TableRow><TableCell>2.00</TableCell><TableCell>3.00</TableCell></TableRow>
                      <TableRow><TableCell>2.25</TableCell><TableCell>2.75</TableCell></TableRow>
                      <TableRow><TableCell>2.50</TableCell><TableCell>2.50</TableCell></TableRow>
                      <TableRow><TableCell>2.75</TableCell><TableCell>2.25</TableCell></TableRow>
                      <TableRow><TableCell>3.00</TableCell><TableCell>2.00</TableCell></TableRow>
                      <TableRow><TableCell>3.25+</TableCell><TableCell>Below 2.00</TableCell></TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Why Use Our Converter Tool?</h3>
                <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400">
                  <li>No registration or downloads needed</li>
                  <li>Works across all devices (mobile, desktop, tablet)</li>
                  <li>Accurate and based on widely accepted GPA conversion standards</li>
                  <li>Part of a full set of academic tools made just for students</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Real Student Experiences</h3>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-500">
                  <p className="text-gray-700 dark:text-gray-300 italic">
                    "I used this tool to convert my GWA to GPA for my master's application in Canada. Super easy to use and accurate!"
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    — <strong>Kevin M., UST Graduate</strong>
                  </p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border-l-4 border-green-500">
                  <p className="text-gray-700 dark:text-gray-300 italic">
                    "My school only uses GWA. I had no idea what to put on Common App until I found this tool. It saved me a ton of confusion."
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    — <strong>Faye C., UCLA applicant</strong>
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">More Tools You Might Need</h3>
                <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400">
                  <li><a href="/tools/grade-average-calculator" className="text-blue-600 dark:text-blue-400 hover:underline">GWA Calculator</a> – Compute your GWA from grades and units</li>
                  <li><a href="/tools/semester-gpa-calculator" className="text-blue-600 dark:text-blue-400 hover:underline">Semester GPA Calculator</a> – Track your GPA each term</li>
                  <li><a href="/tools/cgpa-to-percentage-calculator" className="text-blue-600 dark:text-blue-400 hover:underline">CGPA to Percentage Tool</a> – Perfect for Indian/Asian transcripts</li>
                  <li><a href="/tools/final-grade-calculator" className="text-blue-600 dark:text-blue-400 hover:underline">Final Grade Needed Calculator</a> – See what score you need on finals</li>
                  <li><a href="/tools/weighted-grade-calculator" className="text-blue-600 dark:text-blue-400 hover:underline">Weighted Grade Calculator</a> – For complex grading breakdowns</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Final Thoughts</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  If your school uses GWA and you're applying internationally, converting your grades doesn't have to be complicated. Our <strong>GWA to GPA Converter</strong> makes it easy, fast, and accurate—so you can focus on building your dream academic path instead of struggling with numbers.
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  <strong>Try it now</strong> and take one step closer to that scholarship, dream university, or overseas career.
                </p>
              </div>
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

export default GwaToGpaConverter;
