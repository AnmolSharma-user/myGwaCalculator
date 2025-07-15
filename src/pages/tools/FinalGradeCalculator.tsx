import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Calculator, Target, BookOpen, CheckCircle, AlertCircle } from "lucide-react";
import { ReadingProgressBar } from "@/components/ReadingProgressBar";
import { BackToTopButton } from "@/components/BackToTopButton";
import { ResultsActions } from "@/components/ResultsActions";
import { SEOHead } from "@/components/SEOHead";

const FinalGradeCalculator = () => {
  const [currentGrade, setCurrentGrade] = useState("");
  const [finalWeight, setFinalWeight] = useState("");
  const [desiredGrade, setDesiredGrade] = useState("");
  const [requiredScore, setRequiredScore] = useState<number | null>(null);

  const handleCopy = async () => {
    const resultsText = `Final Grade Calculator Results\n\nCurrent Grade: ${currentGrade}%\nFinal Exam Weight: ${finalWeight}%\nDesired Grade: ${desiredGrade}%\nRequired Score: ${requiredScore}%\n\n${getScoreMessage(requiredScore || 0)}`;
    await navigator.clipboard.writeText(resultsText);
  };

  const handlePrint = () => {
    const printContent = `
      <div style="padding: 20px; font-family: Arial, sans-serif;">
        <h1>Final Grade Calculator Results</h1>
        <p><strong>Current Grade:</strong> ${currentGrade}%</p>
        <p><strong>Final Exam Weight:</strong> ${finalWeight}%</p>
        <p><strong>Desired Grade:</strong> ${desiredGrade}%</p>
        <p><strong>Required Score:</strong> ${requiredScore}%</p>
        <p><em>${getScoreMessage(requiredScore || 0)}</em></p>
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

  const calculateRequiredScore = () => {
    const current = parseFloat(currentGrade);
    const weight = parseFloat(finalWeight) / 100;
    const desired = parseFloat(desiredGrade);

    if (isNaN(current) || isNaN(weight) || isNaN(desired)) return;

    // Formula: (Desired Grade - Current Grade * (1 - Final Weight)) / Final Weight
    const required = (desired - current * (1 - weight)) / weight;
    setRequiredScore(Math.round(required * 100) / 100);
  };

  const getScoreColor = (score: number) => {
    if (score <= 100) return "text-green-600 dark:text-green-400";
    if (score <= 110) return "text-yellow-600 dark:text-yellow-400";
    return "text-red-600 dark:text-red-400";
  };

  const getScoreMessage = (score: number) => {
    if (score <= 100) return "Achievable with good preparation!";
    if (score <= 110) return "Very challenging but possible";
    return "May not be achievable - consider other options";
  };

  const faqData = [
    {
      question: "How do I use this final grade calculator?",
      answer: "Enter your current grade percentage, the weight of your final exam (like 30%), and your desired final grade. The calculator shows exactly what score you need on the final."
    },
    {
      question: "What does it mean if I need over 100% on the final?",
      answer: "This means your target grade isn't achievable with your current standing. You might need to lower your target, seek extra credit, or check if there are other grade components you missed."
    },
    {
      question: "Where do I find my current grade and final exam weight?",
      answer: "Check your course gradebook or syllabus. Your current grade is usually available online, and the final exam weight should be listed in the syllabus (commonly 20-50%)."
    },
    {
      question: "Can I use this calculator mid-semester?",
      answer: "Yes! Use your current grade at any point in the semester to see what you need on the final. This helps with study planning and goal setting."
    },
    {
      question: "What if my final is worth different percentages in different courses?",
      answer: "No problem! Just change the final exam weight for each course. The calculator works with any percentage from 10% to 100%."
    },
    {
      question: "Is this calculator free to use?",
      answer: "Yes, completely free with no registration needed. Use it for all your courses to plan your final exam preparation strategy."
    }
  ];

  return (
    <>
      <SEOHead
        title="Final Grade Calculator – Find Out What You Need on Your Final Exam"
        description="Discover the score you need on your final exam to achieve your target grade. Use this free final grade calculator to plan your study strategy and reach your academic goals."
        keywords="final grade calculator, required final exam score, grade goal, academic planning, student tools, free online calculator, final exam calculator"
        canonicalUrl="https://mygwacalculator.com/tools/final-grade-calculator"
        faqData={faqData}
        toolType="Final Grade Calculator"
        toolCategory="Educational"
        toolFeatures={[
          "Final exam score calculation",
          "Grade goal planning",
          "Study strategy tool",
          "Academic planning",
          "Instant results",
          "Mobile-friendly"
        ]}
        toolBenefits={[
          "Academic goal setting",
          "Study planning",
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
              Final Grade Calculator
            </h1>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 px-2">
              Calculate what you need on your final exam to achieve your desired grade
            </p>
          </div>

          <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm mx-2 sm:mx-0">
            <CardHeader className="pb-4 sm:pb-6">
              <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                <Target className="h-4 w-4 sm:h-5 sm:w-5" />
                Final Exam Requirements
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="current-grade" className="text-sm sm:text-base">Current Grade (%)</Label>
                    <Input
                      id="current-grade"
                      type="number"
                      step="0.01"
                      placeholder="85.5"
                      value={currentGrade}
                      onChange={(e) => setCurrentGrade(e.target.value)}
                      className="mt-1 h-10 sm:h-11"
                    />
                  </div>
                  <div>
                    <Label htmlFor="final-weight" className="text-sm sm:text-base">Final Exam Weight (%)</Label>
                    <Input
                      id="final-weight"
                      type="number"
                      step="0.01"
                      placeholder="30"
                      value={finalWeight}
                      onChange={(e) => setFinalWeight(e.target.value)}
                      className="mt-1 h-10 sm:h-11"
                    />
                  </div>
                  <div>
                    <Label htmlFor="desired-grade" className="text-sm sm:text-base">Desired Final Grade (%)</Label>
                    <Input
                      id="desired-grade"
                      type="number"
                      step="0.01"
                      placeholder="90"
                      value={desiredGrade}
                      onChange={(e) => setDesiredGrade(e.target.value)}
                      className="mt-1 h-10 sm:h-11"
                    />
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center py-4">
                  <Calculator className="h-12 w-12 sm:h-16 sm:w-16 text-academic-blue dark:text-blue-400 mx-auto mb-4" />
                  <Button 
                    onClick={calculateRequiredScore} 
                    className="w-full h-10 sm:h-11 text-sm sm:text-base"
                    disabled={!currentGrade || !finalWeight || !desiredGrade}
                  >
                    Calculate Required Score
                  </Button>
                </div>
              </div>

              {requiredScore !== null && (
                <div className="p-4 sm:p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <div className="text-center">
                    <h3 className="text-base sm:text-lg font-semibold text-blue-800 dark:text-blue-200 mb-2">
                      Required Final Exam Score
                    </h3>
                    <div className={`text-3xl sm:text-4xl font-bold mb-2 ${getScoreColor(requiredScore)}`}>
                      {requiredScore}%
                    </div>
                    <p className="text-xs sm:text-sm text-blue-700 dark:text-blue-300">
                      {getScoreMessage(requiredScore)}
                    </p>
                    <ResultsActions
                      onCopy={handleCopy}
                      onPrint={handlePrint}
                      customShareText={`I need ${requiredScore}% on my final exam to achieve my target grade! 📚`}
                    />
                  </div>
                </div>
              )}

              <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm sm:text-base">How it works:</h4>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  This calculator uses the formula: Required Score = (Desired Grade - Current Grade × (1 - Final Weight)) ÷ Final Weight
                </p>
              </div>
            </CardContent>
          </Card>

          {/* SEO Content Area */}
          <Card className="mt-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm mx-2 sm:mx-0">
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Final Grade Calculator: What You Need to Score (Before It's Too Late)
              </CardTitle>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <div className="space-y-6">
                <div className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p className="mb-4">
                    You've been working hard all semester.<br />
                    Taking notes. Turning in assignments. Surviving pop quizzes.
                  </p>
                  <p className="mb-4">
                    But now finals are here.<br />
                    And the big question hits you:<br />
                    <strong>"What do I need to score on the final to pass?"</strong>
                  </p>
                  <p className="mb-6">
                    That's where a <strong>Final Grade Calculator</strong> comes in.<br />
                    It tells you exactly what grade you need to hit your target.
                  </p>
                  <p>Let's break it down. Easy. Simple. No stress.</p>
                </div>

                <div className="border-l-4 border-blue-500 pl-6 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-r-lg">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    So, What Is a Final Grade Calculator?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    A final grade calculator is just a smart little tool.<br />
                    You plug in:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                    <li>Your current grade</li>
                    <li>The final exam's weight</li>
                    <li>The grade you want to end with</li>
                  </ul>
                  <p className="mt-4 text-gray-700 dark:text-gray-300">
                    And it tells you what you need to score on the final.
                  </p>
                  <p className="mt-2 text-gray-700 dark:text-gray-300">
                    No guessing.<br />
                    No panic.<br />
                    Just clarity.
                  </p>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    Real-Life Example
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    Let's say you're in a class where:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 ml-4 mb-4">
                    <li>Your current grade is 82%</li>
                    <li>The final is worth 30% of your grade</li>
                    <li>You want at least 90% overall</li>
                  </ul>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    You could try doing the math on paper. Or...<br />
                    Just use the calculator.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    It'll tell you this:<br />
                    <strong className="text-red-600 dark:text-red-400">You need a 102% on the final.</strong>
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">Ouch.</p>
                  <p className="text-gray-700 dark:text-gray-300">
                    Not always possible — but good to know.<br />
                    At least now, you can shift your focus or talk to your teacher.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <AlertCircle className="h-5 w-5 text-yellow-600" />
                    Why You Need This (Like, Right Now)
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Too many students wait until finals are done…<br />
                    …only to realize they were just a few points short.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    <strong>Avoid that.</strong>
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    Use the calculator early.<br />
                    It can help you:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4 mb-4">
                    <li>Plan study time better</li>
                    <li>Drop what doesn't matter</li>
                    <li>Go hard where it counts</li>
                    <li>Focus on what gets you that grade</li>
                  </ul>
                  <p className="text-gray-700 dark:text-gray-300">
                    Because when you know what you're aiming for, you study smarter.
                  </p>
                </div>

                <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border border-red-200 dark:border-red-800">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    My Mistake? Waiting Too Long
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    In my second semester, I thought I was good.<br />
                    Had a solid 85%. Wanted to end with a 90%. Easy, right?
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    I chilled before finals. Skipped review sessions.<br />
                    Then checked the math <em>after</em> the exam.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    Turns out… I needed a 94% on the final.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    I got 88.<br />
                    Final grade: <strong>89.5%</strong>.<br />
                    Rounded down. Missed honors by 0.5%.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 font-semibold">
                    <strong>Not fun.</strong>
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    How to Use the Final Grade Calculator
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Super simple. Here's what you'll need:
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4 mb-4">
                    <li><strong>Your current grade</strong> – what you've scored so far in the class</li>
                    <li><strong>Final exam weight</strong> – usually in the syllabus (like 20%, 30%, etc.)</li>
                    <li><strong>Target grade</strong> – the score you want overall</li>
                  </ol>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    Once you've got that:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 ml-4 mb-4">
                    <li>Enter the numbers</li>
                    <li>Hit calculate</li>
                    <li>Get your goal final score</li>
                  </ul>
                  <p className="text-gray-700 dark:text-gray-300">
                    No stress. No long formulas. Just answers.
                  </p>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Bonus: Combine With These Tools
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    Want to take full control of your academic performance?<br />
                    Pair this with tools like:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                    <li><strong>Weighted Grade Calculator</strong> – See what really counts</li>
                    <li><strong>Semester GPA Calculator</strong> – Track full-term performance</li>
                    <li><strong>GWA Calculator</strong> – For Filipino college students</li>
                    <li><strong>Grade Average Calculator</strong> – Get the simple average of scores</li>
                    <li><strong>CGPA to Percentage</strong> – For college percentage conversions</li>
                  </ul>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Final Thoughts
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Don't go into finals blind.<br />
                    Know what you need. Plan ahead.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    The Final Grade Calculator gives you that edge.<br />
                    Use it early. Use it often. And save yourself from last-minute regret.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    <strong>It's like GPS for your grades.</strong><br />
                    You plug in your destination — it shows the path.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 font-semibold text-lg">
                    Now go get that grade.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* How to Use Section */}
          <Card className="mt-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm mx-2 sm:mx-0">
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">How to Use the Final Grade Calculator</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-900 dark:text-white">Step 1: Current Grade</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Enter your current grade percentage before taking the final exam.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-900 dark:text-white">Step 2: Final Weight</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Input what percentage the final exam is worth in your overall grade.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-900 dark:text-white">Step 3: Desired Grade</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Enter the final grade you want to achieve in the course.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-900 dark:text-white">Step 4: Calculate</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Get the score you need on your final exam to reach your goal.
                  </p>
                </div>
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

export default FinalGradeCalculator;
