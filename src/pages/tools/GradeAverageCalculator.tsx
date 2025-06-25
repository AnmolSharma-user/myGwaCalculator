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
import { Helmet } from "react-helmet-async";

interface Grade {
  id: string;
  value: string;
  subject: string;
}

const GradeAverageCalculator = () => {
  const [grades, setGrades] = useState<Grade[]>([
    { id: "1", value: "", subject: "" }
  ]);
  const [average, setAverage] = useState<number | null>(null);

  const handleCopy = async () => {
    const validGrades = grades.filter(grade => !isNaN(parseFloat(grade.value)));
    const resultsText = `Grade Average Results\n\nSubjects:\n${validGrades.map((grade, index) => 
      `${grade.subject || `Subject ${index + 1}`}: ${grade.value}`
    ).join('\n')}\n\nAverage: ${average}`;
    
    await navigator.clipboard.writeText(resultsText);
  };

  const handlePrint = () => {
    const validGrades = grades.filter(grade => !isNaN(parseFloat(grade.value)));
    const printContent = `
      <div style="padding: 20px; font-family: Arial, sans-serif;">
        <h1>Grade Average Results</h1>
        <h2>Subjects:</h2>
        <ul>
          ${validGrades.map((grade, index) => 
            `<li>${grade.subject || `Subject ${index + 1}`}: ${grade.value}</li>`
          ).join('')}
        </ul>
        <h2>Average: ${average}</h2>
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
    const newGrade: Grade = {
      id: Date.now().toString(),
      value: "",
      subject: ""
    };
    setGrades([...grades, newGrade]);
  };

  const removeGrade = (id: string) => {
    if (grades.length > 1) {
      setGrades(grades.filter(grade => grade.id !== id));
    }
  };

  const updateGrade = (id: string, field: keyof Grade, value: string) => {
    setGrades(grades.map(grade => 
      grade.id === id ? { ...grade, [field]: value } : grade
    ));
  };

  const calculateAverage = () => {
    const validGrades = grades
      .map(grade => parseFloat(grade.value))
      .filter(value => !isNaN(value));

    if (validGrades.length === 0) return;

    const sum = validGrades.reduce((acc, grade) => acc + grade, 0);
    const avg = sum / validGrades.length;
    setAverage(Math.round(avg * 100) / 100);
  };

  const faqs = [
    {
      question: "How is the grade average calculated?",
      answer: "The grade average is calculated by adding all your grades together and dividing by the number of grades. This gives you the arithmetic mean of your grades."
    },
    {
      question: "What's the difference between simple average and weighted average?",
      answer: "A simple average treats all grades equally, while a weighted average gives different importance to different grades based on credit hours or assignment weights."
    },
    {
      question: "Can I use this for different grading scales?",
      answer: "Yes! This calculator works with any numerical grading system - 0-100, 0-4.0, or any other scale your institution uses."
    },
    {
      question: "What if I have incomplete grades?",
      answer: "Only include completed grades with numerical values. Incomplete or pending grades should not be included in your average calculation."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Grade Average Calculator – Calculate Your Subject Grades Online</title>
        <meta name="description" content="Calculate the average of your grades across multiple subjects with this free online grade average calculator. Perfect for students to track academic performance and improve results." />
        <meta name="keywords" content="grade average calculator, calculate grade average, subject average, academic performance, student grades, average calculator, grade tracker, free online calculator" />
        <link rel="canonical" href="https://mygwacalculator.com/tools/grade-average-calculator" />
        <meta property="og:title" content="Grade Average Calculator – Calculate Your Subject Grades Online" />
        <meta property="og:description" content="Calculate the average of your grades across multiple subjects with this free online grade average calculator. Perfect for students to track academic performance and improve results." />
        <meta property="og:url" content="https://mygwacalculator.com/tools/grade-average-calculator" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Grade Average Calculator",
            "description": "Free online tool to calculate the average of grades across multiple subjects",
            "url": "https://mygwacalculator.com/tools/grade-average-calculator",
            "applicationCategory": "EducationalApplication",
            "operatingSystem": "Web Browser",
            "isAccessibleForFree": true,
            "creator": {
              "@type": "Organization",
              "name": "GWA Calculator"
            }
          })}
        </script>
      </Helmet>
      
      <ReadingProgressBar />
      <div className="min-h-screen bg-gradient-to-br from-academic-blue-light via-white to-academic-gray dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-32 pb-8 sm:pb-12 px-3 sm:px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 px-2">
              Free Grade Average Calculator
            </h1>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 px-2">
              Calculate the average of your grades across multiple subjects instantly
            </p>
          </div>

          <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm mx-2 sm:mx-0">
            <CardHeader className="pb-4 sm:pb-6">
              <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                <Calculator className="h-4 w-4 sm:h-5 sm:w-5" />
                Enter Your Grades
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                {grades.map((grade, index) => (
                  <div key={grade.id} className="space-y-3 sm:space-y-0 sm:flex sm:gap-4 sm:items-end">
                    <div className="flex-1">
                      <Label htmlFor={`subject-${grade.id}`} className="text-sm sm:text-base">
                        Subject {index + 1}
                      </Label>
                      <Input
                        id={`subject-${grade.id}`}
                        placeholder="Subject name (optional)"
                        value={grade.subject}
                        onChange={(e) => updateGrade(grade.id, "subject", e.target.value)}
                        className="mt-1 h-10 sm:h-11"
                      />
                    </div>
                    <div className="flex gap-3 sm:gap-4">
                      <div className="flex-1 sm:w-32 sm:flex-none">
                        <Label htmlFor={`grade-${grade.id}`} className="text-sm sm:text-base">Grade</Label>
                        <Input
                          id={`grade-${grade.id}`}
                          type="number"
                          step="0.01"
                          placeholder="0.00"
                          value={grade.value}
                          onChange={(e) => updateGrade(grade.id, "value", e.target.value)}
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
                  Add Subject
                </Button>
                <Button onClick={calculateAverage} className="flex-1 h-10 sm:h-11 text-sm sm:text-base">
                  Calculate Average
                </Button>
              </div>

              {average !== null && (
                <div className="p-4 sm:p-6 bg-green-50 dark:bg-green-900/20 rounded-lg text-center">
                  <h3 className="text-base sm:text-lg font-semibold text-green-800 dark:text-green-200 mb-2">
                    Your Grade Average
                  </h3>
                  <div className="text-2xl sm:text-3xl font-bold text-green-600 dark:text-green-400">
                    {average}
                  </div>
                  <ResultsActions
                    onCopy={handleCopy}
                    onPrint={handlePrint}
                    customShareText={`My Grade Average: ${average} 🎓`}
                  />
                </div>
              )}
            </CardContent>
          </Card>

          {/* SEO Content Area */}
          <Card className="mt-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm mx-2 sm:mx-0">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl">Grade Average Calculator: Simple, Fast, and Actually Useful</CardTitle>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-400">
                Ever sat there, staring at your grades, wondering, <em>"Am I doing okay?"</em>
              </p>
              
              <p className="text-gray-600 dark:text-gray-400">
                Yeah. Me too.
              </p>
              
              <p className="text-gray-600 dark:text-gray-400">
                Back in college, I'd scribble numbers on paper, try to work out the average, mess it up, start again. Exhausting.
              </p>
              
              <p className="text-gray-600 dark:text-gray-400">
                That's why this grade average calculator exists. To make it easy. So you can stop worrying about math and start focusing on your actual learning.
              </p>

              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-6 mb-4">What's a Grade Average?</h3>
              
              <p className="text-gray-600 dark:text-gray-400">Think of it like this:</p>
              
              <p className="text-gray-600 dark:text-gray-400">
                Your <strong>grade average</strong> is the middle point of all your grades. It's what you get when you combine every test, quiz, and project, then divide it out evenly.
              </p>
              
              <p className="text-gray-600 dark:text-gray-400">
                It gives you one simple number that shows how you're doing overall.
              </p>
              
              <p className="text-gray-600 dark:text-gray-400"><strong>Why should you care?</strong></p>
              
              <p className="text-gray-600 dark:text-gray-400">Because anytime you know your average, chances are you'll:</p>
              <ul className="text-gray-600 dark:text-gray-400 space-y-1">
                <li>plan your study time better</li>
                <li>avoid surprises before finals</li>
                <li>figure out if you're meeting that scholarship mark</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-6 mb-4">The Easy Math (No Stress, I Promise)</h3>
              
              <p className="text-gray-600 dark:text-gray-400">Here's the old-school way.</p>
              
              <p className="text-gray-600 dark:text-gray-400">Let's say these are your grades:</p>
              <ul className="text-gray-600 dark:text-gray-400 space-y-1">
                <li>Math quiz: 90</li>
                <li>Science test: 85</li>
                <li>English essay: 88</li>
                <li>History project: 92</li>
              </ul>
              
              <p className="text-gray-600 dark:text-gray-400">
                Add them up: 90 + 85 + 88 + 92 = 355<br/>
                Then divide: 355 ÷ 4 = <strong>88.75</strong>
              </p>
              
              <p className="text-gray-600 dark:text-gray-400">That's your average.</p>

              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-6 mb-4">But What If Your Grades Don't Count Equally?</h3>
              
              <p className="text-gray-600 dark:text-gray-400">Ah, good question.</p>
              
              <p className="text-gray-600 dark:text-gray-400">Some things count more. Like your final exam. Or your term paper.</p>
              
              <p className="text-gray-600 dark:text-gray-400">Here's where <strong>weighted average</strong> comes in.</p>
              
              <p className="text-gray-600 dark:text-gray-400">Let's say:</p>
              <ul className="text-gray-600 dark:text-gray-400 space-y-1">
                <li>Quiz is 20% of your grade</li>
                <li>Midterm is 30%</li>
                <li>Final is 50%</li>
              </ul>
              
              <p className="text-gray-600 dark:text-gray-400">And your scores:</p>
              <ul className="text-gray-600 dark:text-gray-400 space-y-1">
                <li>Quiz = 90</li>
                <li>Midterm = 85</li>
                <li>Final = 88</li>
              </ul>
              
              <p className="text-gray-600 dark:text-gray-400">Here's what you do:</p>
              <ul className="text-gray-600 dark:text-gray-400 space-y-1">
                <li>90 × 0.2 = 18</li>
                <li>85 × 0.3 = 25.5</li>
                <li>88 × 0.5 = 44</li>
              </ul>
              
              <p className="text-gray-600 dark:text-gray-400">Add them up: 18 + 25.5 + 44 = <strong>87.5</strong></p>
              
              <p className="text-gray-600 dark:text-gray-400">That's your final average.</p>

              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-6 mb-4">How to Use the Grade Average Calculator</h3>
              
              <p className="text-gray-600 dark:text-gray-400">It's built to be <em>dead simple</em>. You don't need to sign up. Or download anything.</p>
              
              <p className="text-gray-600 dark:text-gray-400">Just:</p>
              <ol className="text-gray-600 dark:text-gray-400 space-y-1">
                <li>Enter your grades</li>
                <li>Add weights (if your school uses them)</li>
                <li>Click "Calculate"</li>
              </ol>
              
              <p className="text-gray-600 dark:text-gray-400">Done.</p>
              
              <p className="text-gray-600 dark:text-gray-400">You get your average in one click. You can even update it as you go through the semester.</p>

              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-6 mb-4">Who's It For?</h3>
              
              <p className="text-gray-600 dark:text-gray-400">Honestly? Anyone who studies.</p>
              
              <p className="text-gray-600 dark:text-gray-400">It works for:</p>
              <ul className="text-gray-600 dark:text-gray-400 space-y-1">
                <li>High schoolers tracking grades</li>
                <li>College students calculating semester performance</li>
                <li>Parents helping kids stay on track</li>
                <li>Teachers checking student performance</li>
              </ul>
              
              <p className="text-gray-600 dark:text-gray-400">If you care about grades, this is for you.</p>

              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-6 mb-4">Bonus: Use It With These Tools</h3>
              
              <p className="text-gray-600 dark:text-gray-400">The cool part? This calculator works <em>even better</em> when paired with a few of our other tools:</p>
              <ul className="text-gray-600 dark:text-gray-400 space-y-1">
                <li><strong>GWA Calculator</strong> – For your final university average</li>
                <li><strong>GWA to GPA Converter</strong> – If you're applying to schools abroad</li>
                <li><strong>Final Grade Calculator</strong> – To know what score you need to pass</li>
                <li><strong>Semester GPA Calculator</strong> – College students love this one</li>
                <li><strong>CGPA to Percentage Converter</strong> – Perfect for resumes and forms</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-6 mb-4">A Quick Story…</h3>
              
              <p className="text-gray-600 dark:text-gray-400">A student messaged me last month. She was about to apply for a scholarship. Didn't know if her average was high enough.</p>
              
              <p className="text-gray-600 dark:text-gray-400">She plugged in her grades. Calculator said: <strong>89.25%</strong></p>
              
              <p className="text-gray-600 dark:text-gray-400">The requirement? 89%.</p>
              
              <p className="text-gray-600 dark:text-gray-400">She sent in her application the same day.</p>
              
              <p className="text-gray-600 dark:text-gray-400">Sometimes, that one number really matters.</p>

              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-6 mb-4">Why People Love It</h3>
              
              <p className="text-gray-600 dark:text-gray-400">The good news? You don't need to be good at math to stay on top of your grades.</p>
              
              <p className="text-gray-600 dark:text-gray-400">This tool:</p>
              <ul className="text-gray-600 dark:text-gray-400 space-y-1">
                <li>Works fast</li>
                <li>Shows results clearly</li>
                <li>Helps you plan your studies</li>
                <li>Takes the stress off your shoulders</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-6 mb-4">Final Thoughts</h3>
              
              <p className="text-gray-600 dark:text-gray-400">Look—grades aren't everything. But they matter.</p>
              
              <p className="text-gray-600 dark:text-gray-400">And knowing where you stand gives you peace of mind.</p>
              
              <p className="text-gray-600 dark:text-gray-400">The Grade Average Calculator was built for students who want to stay organized, stay focused, and save time.</p>
              
              <p className="text-gray-600 dark:text-gray-400"><strong>Try it. You'll be glad you did.</strong></p>
            </CardContent>
          </Card>

          {/* How to Use Section */}
          <Card className="mt-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm mx-2 sm:mx-0">
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">How to Use the Grade Average Calculator</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-900 dark:text-white">Step 1: Add Subjects</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Enter each subject name (optional) and its corresponding grade.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-900 dark:text-white">Step 2: Enter Grades</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Input numerical grades for each subject using your school's grading scale.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-900 dark:text-white">Step 3: Calculate</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Click "Calculate Average" to get your overall grade average.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-900 dark:text-white">Step 4: Review</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    View your calculated average and use it for academic planning.
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
                {faqs.map((faq, index) => (
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

export default GradeAverageCalculator;
