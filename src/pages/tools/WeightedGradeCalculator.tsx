import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Plus, Trash2, Calculator } from "lucide-react";
import { ReadingProgressBar } from "@/components/ReadingProgressBar";
import { BackToTopButton } from "@/components/BackToTopButton";
import { ResultsActions } from "@/components/ResultsActions";
import { SEOHead } from "@/components/SEOHead";

interface WeightedGrade {
  id: string;
  name: string;
  grade: string;
  weight: string;
}

const WeightedGradeCalculator = () => {
  const [grades, setGrades] = useState<WeightedGrade[]>([
    { id: "1", name: "", grade: "", weight: "" }
  ]);
  const [result, setResult] = useState<number | null>(null);
  const [totalWeight, setTotalWeight] = useState<number>(0);

  const handleCopy = async () => {
    const validGrades = grades.filter(grade => 
      !isNaN(parseFloat(grade.grade)) && !isNaN(parseFloat(grade.weight))
    );
    const resultsText = `Weighted Grade Results\n\nAssignments:\n${validGrades.map((grade, index) => 
      `${grade.name || `Assignment ${index + 1}`}: ${grade.grade} (${grade.weight}%)`
    ).join('\n')}\n\nWeighted Average: ${result}\nTotal Weight: ${totalWeight}%`;
    
    await navigator.clipboard.writeText(resultsText);
  };

  const handlePrint = () => {
    const validGrades = grades.filter(grade => 
      !isNaN(parseFloat(grade.grade)) && !isNaN(parseFloat(grade.weight))
    );
    const printContent = `
      <div style="padding: 20px; font-family: Arial, sans-serif;">
        <h1>Weighted Grade Results</h1>
        <h2>Assignments:</h2>
        <ul>
          ${validGrades.map((grade, index) => 
            `<li>${grade.name || `Assignment ${index + 1}`}: ${grade.grade} (${grade.weight}%)</li>`
          ).join('')}
        </ul>
        <h2>Weighted Average: ${result}</h2>
        <p><strong>Total Weight:</strong> ${totalWeight}%</p>
        ${totalWeight !== 100 ? '<p style="color: orange;"><em>Note: Total weight is not 100%</em></p>' : ''}
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

  const addGrade = () => {
    const newGrade: WeightedGrade = {
      id: Date.now().toString(),
      name: "",
      grade: "",
      weight: ""
    };
    setGrades([...grades, newGrade]);
  };

  const removeGrade = (id: string) => {
    if (grades.length > 1) {
      setGrades(grades.filter(grade => grade.id !== id));
    }
  };

  const updateGrade = (id: string, field: keyof WeightedGrade, value: string) => {
    setGrades(grades.map(grade => 
      grade.id === id ? { ...grade, [field]: value } : grade
    ));
  };

  const calculateWeightedAverage = () => {
    const validGrades = grades.filter(grade => 
      !isNaN(parseFloat(grade.grade)) && !isNaN(parseFloat(grade.weight))
    );

    if (validGrades.length === 0) return;

    let totalWeightedPoints = 0;
    let totalWeights = 0;

    validGrades.forEach(grade => {
      const gradeValue = parseFloat(grade.grade);
      const weightValue = parseFloat(grade.weight);
      totalWeightedPoints += gradeValue * weightValue;
      totalWeights += weightValue;
    });

    setTotalWeight(totalWeights);
    
    if (totalWeights > 0) {
      const weightedAverage = totalWeightedPoints / totalWeights;
      setResult(Math.round(weightedAverage * 100) / 100);
    }
  };

  const faqData = [
    {
      question: "How do weighted grades work?",
      answer: "Weighted grades assign different importance to assignments. For example, if your final exam is 40% and homework is 20%, the final has twice the impact on your grade as homework."
    },
    {
      question: "What if my weights don't add up to 100%?",
      answer: "The calculator will still work and show your total weight percentage. However, for most accurate results representing your final grade, weights should add up to 100%."
    },
    {
      question: "Can I use this for course grade calculation?",
      answer: "Yes! This is perfect for calculating your course grade when different assignments have different weights - like midterms 30%, finals 40%, homework 20%, participation 10%."
    },
    {
      question: "How do I find the weights for my assignments?",
      answer: "Check your course syllabus - it usually lists the weight breakdown. If not available, ask your instructor for the grading breakdown percentages."
    },
    {
      question: "Can I calculate partial semester grades?",
      answer: "Yes, you can calculate your current standing by entering completed assignments and their weights. This helps you see where you stand mid-semester."
    },
    {
      question: "Is this weighted calculator free?",
      answer: "Completely free with no registration required. Add unlimited assignments and calculate as many weighted averages as you need."
    }
  ];

  return (
    <>
      <SEOHead
        title="Weighted Grade Calculator – Compute Weighted Averages for Assignments"
        description="Easily calculate your weighted grade average by entering grades and their weights. Ideal for students managing assignments, quizzes, and exams with different importance."
        keywords="weighted grade calculator, weighted average, assignment grades, grade calculator, academic tools, student grades, free online calculator, weighted grade average"
        canonicalUrl="https://mygwacalculator.com/tools/weighted-grade-calculator"
        structuredData={{
          "@id": "https://mygwacalculator.com/tools/weighted-grade-calculator#faq"
        }}
        faqData={faqData}
        toolType="Weighted Calculator"
        toolCategory="Educational"
        toolFeatures={[
          "Assignment weighting",
          "Dynamic grade input",
          "Weight percentage tracking",
          "Assignment naming",
          "Instant results",
          "Mobile-friendly"
        ]}
        toolBenefits={[
          "Accurate weighted calculations",
          "Assignment management",
          "Free to use",
          "No registration required",
          "Educational insights"
        ]}
      />
      <ReadingProgressBar />
      <div className="min-h-screen bg-gradient-to-br from-academic-blue-light via-white to-academic-gray dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-32 pb-8 sm:pb-12 px-3 sm:px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 px-2">
              Weighted Grade Calculator
            </h1>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 px-2">
              Calculate weighted averages considering the importance of each assignment
            </p>
          </div>

          <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm mx-2 sm:mx-0">
            <CardHeader className="pb-4 sm:pb-6">
              <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                <Calculator className="h-4 w-4 sm:h-5 sm:w-5" />
                Enter Grades and Weights
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                {grades.map((grade, index) => (
                  <div key={grade.id} className="space-y-3 sm:space-y-0 sm:flex sm:gap-4 sm:items-end">
                    <div className="flex-1">
                      <Label htmlFor={`name-${grade.id}`} className="text-sm sm:text-base">
                        Assignment {index + 1}
                      </Label>
                      <Input
                        id={`name-${grade.id}`}
                        placeholder="Assignment name (optional)"
                        value={grade.name}
                        onChange={(e) => updateGrade(grade.id, "name", e.target.value)}
                        className="mt-1 h-10 sm:h-11"
                      />
                    </div>
                    <div className="flex gap-3 sm:gap-4">
                      <div className="flex-1 sm:w-24 sm:flex-none">
                        <Label htmlFor={`grade-${grade.id}`} className="text-sm sm:text-base">Grade</Label>
                        <Input
                          id={`grade-${grade.id}`}
                          type="number"
                          step="0.01"
                          placeholder="0.00"
                          value={grade.grade}
                          onChange={(e) => updateGrade(grade.id, "grade", e.target.value)}
                          className="mt-1 h-10 sm:h-11"
                        />
                      </div>
                      <div className="flex-1 sm:w-24 sm:flex-none">
                        <Label htmlFor={`weight-${grade.id}`} className="text-sm sm:text-base">Weight (%)</Label>
                        <Input
                          id={`weight-${grade.id}`}
                          type="number"
                          step="0.01"
                          placeholder="0.00"
                          value={grade.weight}
                          onChange={(e) => updateGrade(grade.id, "weight", e.target.value)}
                          className="mt-1 h-10 sm:h-11"
                        />
                      </div>
                      <div className="flex items-end">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => removeGrade(grade.id)}
                          disabled={grades.length === 1}
                          className="h-10 w-10 sm:h-11 sm:w-11"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button variant="outline" onClick={addGrade} className="flex-1 h-10 sm:h-11 text-sm sm:text-base">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Assignment
                </Button>
                <Button onClick={calculateWeightedAverage} className="flex-1 h-10 sm:h-11 text-sm sm:text-base">
                  Calculate Weighted Average
                </Button>
              </div>

              {result !== null && (
                <div className="p-4 sm:p-6 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <div className="text-center mb-4">
                    <h3 className="text-base sm:text-lg font-semibold text-green-800 dark:text-green-200 mb-2">
                      Weighted Average
                    </h3>
                    <div className="text-2xl sm:text-3xl font-bold text-green-600 dark:text-green-400">
                      {result}
                    </div>
                  </div>
                  <div className="text-xs sm:text-sm text-green-700 dark:text-green-300 text-center">
                    Total Weight: {totalWeight}%
                    {totalWeight !== 100 && (
                      <div className="text-yellow-600 dark:text-yellow-400 mt-1">
                        Note: Total weight is not 100%
                      </div>
                    )}
                  </div>
                  <ResultsActions
                    onCopy={handleCopy}
                    onPrint={handlePrint}
                    customShareText={`My Weighted Average: ${result} (Total Weight: ${totalWeight}%) 📈`}
                  />
                </div>
              )}
            </CardContent>
          </Card>

          {/* SEO Content Area */}
          <Card className="mt-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm mx-2 sm:mx-0">
            <CardContent className="p-6 sm:p-8 prose prose-gray dark:prose-invert max-w-none">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Weighted Grade Calculator: What Actually Counts Toward Your Final Grade
              </h2>

              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Hey friends. Let's talk about something most students overlook — <em>how your final grade is really calculated</em>.
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-4">
                You think you're doing well. But then… your report card shows up. Your heart sinks.
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-6">
                <strong>What happened?</strong>
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Turns out, not all grades are equal. Some count more than others. And that's why <strong>you need to understand weighted grades</strong>.
              </p>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-4 mt-8">
                What's a Weighted Grade Anyway?
              </h3>

              <p className="text-gray-700 dark:text-gray-300 mb-4">Think of it like pizza toppings.</p>

              <p className="text-gray-700 dark:text-gray-300 mb-4">
                <strong>The cheese?</strong> That's your final exam.<br />
                <strong>The crust?</strong> Midterms.<br />
                <strong>Sprinkles of olives and onions?</strong> Your quizzes and assignments.
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Everything's part of the same pizza, but some parts just matter more.
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-6">
                That's how teachers build your final grade. They give each type of work a <strong>weight</strong>.
              </p>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-4 mt-8">
                Real-Life Example
              </h3>

              <p className="text-gray-700 dark:text-gray-300 mb-3">Let's say your class has this setup:</p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
                <li>Homework: 20%</li>
                <li>Midterm: 30%</li>
                <li>Final exam: 50%</li>
              </ul>

              <p className="text-gray-700 dark:text-gray-300 mb-3">And you got these grades:</p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
                <li>Homework: 85</li>
                <li>Midterm: 80</li>
                <li>Final: 90</li>
              </ul>

              <p className="text-gray-700 dark:text-gray-300 mb-3">Here's how the math works:</p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
                <li>Homework: 85 × 0.2 = 17</li>
                <li>Midterm: 80 × 0.3 = 24</li>
                <li>Final: 90 × 0.5 = 45</li>
              </ul>

              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Add them up:<br />
                17 + 24 + 45 = <strong>86</strong>
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-6">
                That's your real grade: <strong>86%</strong>.
              </p>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-4 mt-8">
                Why You Should Use a Weighted Grade Calculator
              </h3>

              <p className="text-gray-700 dark:text-gray-300 mb-4">Let's be honest. Doing this by hand? Kind of a pain.</p>

              <p className="text-gray-700 dark:text-gray-300 mb-4">
                One mistake and your whole average could be off. I've been there. Scribbling numbers, using phone calculators, second-guessing myself.
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-3">Here's the better way:</p>

              <p className="text-gray-700 dark:text-gray-300 mb-3">Use a weighted grade calculator. It:</p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
                <li>Saves time</li>
                <li>Avoids mistakes</li>
                <li>Helps you plan your next move</li>
              </ul>

              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>The good news?</strong> All you do is plug in:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
                <li>Each assignment or exam</li>
                <li>The score you got</li>
                <li>The weight (like 20%, 40%, etc.)</li>
              </ul>

              <p className="text-gray-700 dark:text-gray-300 mb-6">
                And boom — your final grade pops out.
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-6">No stress. No math headaches.</p>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-4 mt-8">
                When to Use It?
              </h3>

              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Anytime you ask yourself, <em>"How much will this test affect my grade?"</em>
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-3">That's your sign.</p>

              <p className="text-gray-700 dark:text-gray-300 mb-3">Also helpful when:</p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300">
                <li>You're tracking your grade during the semester</li>
                <li>You're figuring out what you need to pass</li>
                <li>You're prepping for finals and want to focus your study time</li>
                <li>Your school or course uses weighted systems (most do!)</li>
              </ul>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-4 mt-8">
                Quick Story: I Got Overconfident
              </h3>

              <p className="text-gray-700 dark:text-gray-300 mb-4">Let me tell you what happened to me.</p>

              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Back in college, I was getting 90s on every quiz. Felt great.
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-4">
                But then I checked my actual weighted average… It was 76.
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-4"><strong>What?!</strong></p>

              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Turns out, the midterm I bombed was worth 40%. I didn't realize how badly that one score dragged me down.
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-6">
                That's the moment I started using a weighted grade calculator. Wish I had done it earlier.
              </p>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-4 mt-8">
                What Makes This Tool Super Handy?
              </h3>

              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Because anytime someone knows their <em>real</em> grade, they can:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300">
                <li>Make smarter study choices</li>
                <li>Avoid last-minute surprises</li>
                <li>Focus on the work that matters most</li>
                <li>Plan ahead — especially if you're aiming for a scholarship or minimum GPA</li>
              </ul>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-4 mt-8">
                Pair It With These Tools
              </h3>

              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Want to be on top of all your grades? Use this calculator along with:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300">
                <li><strong>Final Grade Calculator</strong> – To see what you need to score on your next test</li>
                <li><strong>Grade Average Calculator</strong> – For simple class averages</li>
                <li><strong>GWA Calculator</strong> – Popular in the Philippines for college tracking</li>
                <li><strong>GWA to GPA Converter</strong> – Great if you're applying internationally</li>
                <li><strong>Semester GPA Calculator</strong> – For term-by-term performance</li>
              </ul>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-4 mt-8">
                Final Thoughts
              </h3>

              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Grades aren't just numbers. They tell a story. <strong>Your story.</strong>
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-4">
                And knowing what counts most helps you take charge of that story.
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-4">
                The weighted grade calculator? It's here to make sure you don't miss anything important.
              </p>

              <p className="text-gray-700 dark:text-gray-300">
                <strong>Use it often. Update it. And always know where you stand.</strong>
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

export default WeightedGradeCalculator;
