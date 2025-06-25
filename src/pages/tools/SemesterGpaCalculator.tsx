import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Plus, Trash2, Calculator, BookOpen } from "lucide-react";
import { ReadingProgressBar } from "@/components/ReadingProgressBar";
import { BackToTopButton } from "@/components/BackToTopButton";
import { ResultsActions } from "@/components/ResultsActions";
import { Helmet } from "react-helmet-async";

interface Course {
  id: string;
  name: string;
  grade: string;
  credits: string;
}

const SemesterGpaCalculator = () => {
  const [courses, setCourses] = useState<Course[]>([
    { id: "1", name: "", grade: "", credits: "" }
  ]);
  const [gpa, setGpa] = useState<number | null>(null);
  const [totalCredits, setTotalCredits] = useState<number>(0);

  const gradePoints: { [key: string]: number } = {
    "A+": 4.0, "A": 4.0, "A-": 3.7,
    "B+": 3.3, "B": 3.0, "B-": 2.7,
    "C+": 2.3, "C": 2.0, "C-": 1.7,
    "D+": 1.3, "D": 1.0, "F": 0.0
  };

  const handleCopy = async () => {
    const validCourses = courses.filter(course => 
      course.grade && course.credits && !isNaN(parseFloat(course.credits))
    );
    const resultsText = `Semester GPA Results\n\nCourses:\n${validCourses.map((course, index) => 
      `${course.name || `Course ${index + 1}`}: ${course.grade} (${course.credits} credits)`
    ).join('\n')}\n\nSemester GPA: ${gpa}\nTotal Credits: ${totalCredits}`;
    
    await navigator.clipboard.writeText(resultsText);
  };

  const handlePrint = () => {
    const validCourses = courses.filter(course => 
      course.grade && course.credits && !isNaN(parseFloat(course.credits))
    );
    const printContent = `
      <div style="padding: 20px; font-family: Arial, sans-serif;">
        <h1>Semester GPA Results</h1>
        <h2>Courses:</h2>
        <ul>
          ${validCourses.map((course, index) => 
            `<li>${course.name || `Course ${index + 1}`}: ${course.grade} (${course.credits} credits)</li>`
          ).join('')}
        </ul>
        <h2>Semester GPA: ${gpa}</h2>
        <p><strong>Total Credits:</strong> ${totalCredits}</p>
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

  const addCourse = () => {
    const newCourse: Course = {
      id: Date.now().toString(),
      name: "",
      grade: "",
      credits: ""
    };
    setCourses([...courses, newCourse]);
  };

  const removeCourse = (id: string) => {
    if (courses.length > 1) {
      setCourses(courses.filter(course => course.id !== id));
    }
  };

  const updateCourse = (id: string, field: keyof Course, value: string) => {
    setCourses(courses.map(course => 
      course.id === id ? { ...course, [field]: value } : course
    ));
  };

  const calculateGPA = () => {
    const validCourses = courses.filter(course => 
      course.grade && course.credits && !isNaN(parseFloat(course.credits))
    );

    if (validCourses.length === 0) return;

    let totalPoints = 0;
    let totalCreditHours = 0;

    validCourses.forEach(course => {
      const credits = parseFloat(course.credits);
      const points = gradePoints[course.grade] || 0;
      totalPoints += points * credits;
      totalCreditHours += credits;
    });

    setTotalCredits(totalCreditHours);
    
    if (totalCreditHours > 0) {
      const calculatedGPA = totalPoints / totalCreditHours;
      setGpa(Math.round(calculatedGPA * 100) / 100);
    }
  };

  const faqs = [
    {
      question: "How is semester GPA calculated?",
      answer: "Semester GPA is calculated by multiplying each course's grade points by its credit hours, summing these values, and dividing by the total credit hours for that semester."
    },
    {
      question: "What's the difference between semester GPA and cumulative GPA?",
      answer: "Semester GPA covers only one semester's courses, while cumulative GPA includes all semesters completed. This calculator focuses on semester GPA."
    },
    {
      question: "How many credit hours should I take per semester?",
      answer: "Most full-time students take 12-18 credit hours per semester. The typical course load is 15-16 credit hours, but this varies by institution and program."
    },
    {
      question: "What if my school uses a different grading scale?",
      answer: "This calculator uses the standard 4.0 scale. If your school uses a different scale, you may need to convert grades or use a different calculator specific to your system."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Semester GPA Calculator – Calculate Your GPA for the Semester</title>
        <meta name="description" content="Calculate your semester GPA quickly and accurately. Enter your courses, grades, and credits to get your GPA and track your academic progress." />
        <meta name="keywords" content="semester GPA calculator, GPA calculator, course grades, academic progress, student GPA, free online calculator" />
        <link rel="canonical" href="https://mygwacalculator.com/tools/semester-gpa-calculator" />
        <meta property="og:title" content="Semester GPA Calculator – Calculate Your GPA for the Semester" />
        <meta property="og:description" content="Calculate your semester GPA quickly and accurately. Enter your courses, grades, and credits to get your GPA and track your academic progress." />
        <meta property="og:url" content="https://mygwacalculator.com/tools/semester-gpa-calculator" />
        <meta property="og:type" content="website" />
      </Helmet>
      <ReadingProgressBar />
      <div className="min-h-screen bg-gradient-to-br from-academic-blue-light via-white to-academic-gray dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-32 pb-8 sm:pb-12 px-3 sm:px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 px-2">
              Semester GPA Calculator
            </h1>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 px-2">
              Calculate your GPA for the current semester
            </p>
          </div>

          <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm mx-2 sm:mx-0">
            <CardHeader className="pb-4 sm:pb-6">
              <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                <BookOpen className="h-4 w-4 sm:h-5 sm:w-5" />
                Enter Your Courses
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                {courses.map((course, index) => (
                  <div key={course.id} className="space-y-3 sm:space-y-0 sm:flex sm:gap-4 sm:items-end">
                    <div className="flex-1">
                      <Label htmlFor={`course-${course.id}`} className="text-sm sm:text-base">
                        Course {index + 1}
                      </Label>
                      <Input
                        id={`course-${course.id}`}
                        placeholder="Course name (optional)"
                        value={course.name}
                        onChange={(e) => updateCourse(course.id, "name", e.target.value)}
                        className="mt-1 h-10 sm:h-11"
                      />
                    </div>
                    <div className="flex gap-3 sm:gap-4">
                      <div className="flex-1 sm:w-32 sm:flex-none">
                        <Label htmlFor={`grade-${course.id}`} className="text-sm sm:text-base">Grade</Label>
                        <Select 
                          value={course.grade} 
                          onValueChange={(value) => updateCourse(course.id, "grade", value)}
                        >
                          <SelectTrigger className="mt-1 h-10 sm:h-11">
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="A+">A+ (4.0)</SelectItem>
                            <SelectItem value="A">A (4.0)</SelectItem>
                            <SelectItem value="A-">A- (3.7)</SelectItem>
                            <SelectItem value="B+">B+ (3.3)</SelectItem>
                            <SelectItem value="B">B (3.0)</SelectItem>
                            <SelectItem value="B-">B- (2.7)</SelectItem>
                            <SelectItem value="C+">C+ (2.3)</SelectItem>
                            <SelectItem value="C">C (2.0)</SelectItem>
                            <SelectItem value="C-">C- (1.7)</SelectItem>
                            <SelectItem value="D+">D+ (1.3)</SelectItem>
                            <SelectItem value="D">D (1.0)</SelectItem>
                            <SelectItem value="F">F (0.0)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex-1 sm:w-24 sm:flex-none">
                        <Label htmlFor={`credits-${course.id}`} className="text-sm sm:text-base">Credits</Label>
                        <Input
                          id={`credits-${course.id}`}
                          type="number"
                          step="0.5"
                          placeholder="3"
                          value={course.credits}
                          onChange={(e) => updateCourse(course.id, "credits", e.target.value)}
                          className="mt-1 h-10 sm:h-11"
                        />
                      </div>
                      <div className="flex items-end">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => removeCourse(course.id)}
                          disabled={courses.length === 1}
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
                <Button variant="outline" onClick={addCourse} className="flex-1 h-10 sm:h-11 text-sm sm:text-base">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Course
                </Button>
                <Button onClick={calculateGPA} className="flex-1 h-10 sm:h-11 text-sm sm:text-base">
                  <Calculator className="h-4 w-4 mr-2" />
                  Calculate GPA
                </Button>
              </div>

              {gpa !== null && (
                <div className="p-4 sm:p-6 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <div className="text-center">
                    <h3 className="text-base sm:text-lg font-semibold text-green-800 dark:text-green-200 mb-2">
                      Semester GPA
                    </h3>
                    <div className="text-3xl sm:text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
                      {gpa}
                    </div>
                    <p className="text-xs sm:text-sm text-green-700 dark:text-green-300">
                      Total Credits: {totalCredits}
                    </p>
                    <ResultsActions
                      onCopy={handleCopy}
                      onPrint={handlePrint}
                      customShareText={`My Semester GPA: ${gpa} with ${totalCredits} credits! 🎓`}
                    />
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Main Content Area */}
          <Card className="mt-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm mx-2 sm:mx-0">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                Semester GPA Calculator: See Where You Stand Before It's Too Late
              </CardTitle>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Alright. You've just finished a wild semester.
              </p>
              
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Some courses were a breeze. Others? Not so much.
              </p>
              
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Now you're wondering…<br />
                <strong className="text-gray-900 dark:text-white">"What's my GPA this term?"</strong>
              </p>
              
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Don't worry. We've got a tool for that. It's called the <strong className="text-gray-900 dark:text-white">Semester GPA Calculator</strong> — and it's exactly what it sounds like.
              </p>
              
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Let's walk through what it is, how to use it, and why it's super helpful.
              </p>
            </CardContent>
          </Card>

          {/* What Is Section */}
          <Card className="mt-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm mx-2 sm:mx-0">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
                First: What Even Is a Semester GPA?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Your GPA, or Grade Point Average, is a number that shows how well you're doing in school.
              </p>
              
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Now, a <strong className="text-gray-900 dark:text-white">semester GPA</strong>? That's just your average for <em>this term only</em>. It doesn't count past semesters or your full college career.
              </p>
              
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Think of it like a snapshot.<br />
                One term. One report card. One GPA.
              </p>
              
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <p className="text-gray-700 dark:text-gray-300 font-medium mb-2">It's useful when:</p>
                <ul className="space-y-1 text-gray-600 dark:text-gray-400">
                  <li>• You want to apply for scholarships</li>
                  <li>• You're checking if you made the Dean's List</li>
                  <li>• You need to meet academic probation rules</li>
                  <li>• Or… you just want to stay on top of things</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* How It Works Section */}
          <Card className="mt-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm mx-2 sm:mx-0">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
                How Does It Work?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Every class you take gives you:
              </p>
              
              <ol className="list-decimal list-inside space-y-2 text-gray-600 dark:text-gray-400">
                <li>A <strong className="text-gray-900 dark:text-white">grade</strong> (like A, B, C…)</li>
                <li>And <strong className="text-gray-900 dark:text-white">credit hours</strong> (like 3, 4, 5 units)</li>
              </ol>
              
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <p className="text-gray-700 dark:text-gray-300 font-medium mb-2">Here's the basic math:</p>
                <ul className="space-y-1 text-gray-600 dark:text-gray-400">
                  <li>• Turn your grade into a number (A = 4.0, B = 3.0, and so on)</li>
                  <li>• Multiply that number by the course's credit hours</li>
                  <li>• Do that for all your classes</li>
                  <li>• Add them up and divide by total credit hours</li>
                </ul>
              </div>
              
              <p className="text-lg font-semibold text-gray-900 dark:text-white">
                Boom — that's your semester GPA.
              </p>
            </CardContent>
          </Card>

          {/* Example Section */}
          <Card className="mt-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm mx-2 sm:mx-0">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
                Real-Life Example
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Let's say you took these classes:
              </p>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
                  <thead>
                    <tr className="bg-gray-50 dark:bg-gray-700">
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left font-semibold text-gray-900 dark:text-white">Subject</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left font-semibold text-gray-900 dark:text-white">Grade</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left font-semibold text-gray-900 dark:text-white">Credit Hours</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-600 dark:text-gray-400">Math</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-600 dark:text-gray-400">A</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-600 dark:text-gray-400">4</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-600 dark:text-gray-400">Science</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-600 dark:text-gray-400">B</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-600 dark:text-gray-400">3</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-600 dark:text-gray-400">Literature</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-600 dark:text-gray-400">A</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-600 dark:text-gray-400">3</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-600 dark:text-gray-400">History</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-600 dark:text-gray-400">C</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-600 dark:text-gray-400">2</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                <p className="text-gray-700 dark:text-gray-300 font-medium mb-2">Here's what you do:</p>
                <ul className="space-y-1 text-gray-600 dark:text-gray-400">
                  <li>• Math: 4.0 × 4 = 16</li>
                  <li>• Science: 3.0 × 3 = 9</li>
                  <li>• Literature: 4.0 × 3 = 12</li>
                  <li>• History: 2.0 × 2 = 4</li>
                </ul>
                
                <div className="mt-3 pt-3 border-t border-yellow-200 dark:border-yellow-700">
                  <p className="text-gray-700 dark:text-gray-300">
                    Add total grade points: 16 + 9 + 12 + 4 = <strong>41</strong><br />
                    Add credit hours: 4 + 3 + 3 + 2 = <strong>12</strong>
                  </p>
                  <p className="text-lg font-semibold text-gray-900 dark:text-white mt-2">
                    Final step: 41 ÷ 12 = 3.42
                  </p>
                  <p className="text-xl font-bold text-green-600 dark:text-green-400">
                    That's your semester GPA: 3.42
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Benefits Section */}
          <Card className="mt-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm mx-2 sm:mx-0">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
                Why Bother Calculating Semester GPA?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                <p className="text-gray-700 dark:text-gray-300 font-medium mb-3">Because it helps you:</p>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>• Spot early warning signs</li>
                  <li>• Qualify for programs or internships</li>
                  <li>• Plan your next term better</li>
                  <li>• See if you're meeting graduation goals</li>
                  <li>• Feel confident knowing exactly where you stand</li>
                </ul>
              </div>
              
              <div className="mt-6 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border-l-4 border-red-400">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">I Once Thought I Had a 3.5 GPA...</h4>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  ...Until I actually checked.
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-2">
                  Turned out one 2-credit elective I blew off tanked my whole semester.<br />
                  That tiny class? It hit harder than I expected.
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-2">
                  Since then, I always run the numbers.
                </p>
                <p className="font-semibold text-gray-900 dark:text-white mt-2">
                  Don't rely on gut feeling. Use the tool.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* How to Use Section */}
          <Card className="mt-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm mx-2 sm:mx-0">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
                How to Use a Semester GPA Calculator
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Using it is easier than ordering food online.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">What you'll need:</h4>
                  <ul className="space-y-1 text-gray-600 dark:text-gray-400">
                    <li>• Your subjects</li>
                    <li>• The grade you got in each</li>
                    <li>• The credit hours for each subject</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Then:</h4>
                  <ul className="space-y-1 text-gray-600 dark:text-gray-400">
                    <li>• Enter the info into the calculator</li>
                    <li>• Hit calculate</li>
                    <li>• Get your GPA instantly</li>
                  </ul>
                </div>
              </div>
              
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                It works for any major, school, or country (as long as it uses the 4.0 scale — which most do).
              </p>
            </CardContent>
          </Card>

          {/* Related Tools Section */}
          <Card className="mt-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm mx-2 sm:mx-0">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
                Extra Tip: Use It with Other Tools
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Want to go full academic pro? Combine it with:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Calculator className="h-4 w-4 text-blue-600" />
                    <a href="/tools/gwa-to-gpa-converter" className="font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline">GWA Calculator</a>
                    <span className="text-sm text-gray-500 dark:text-gray-400">– If you study in the Philippines</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calculator className="h-4 w-4 text-blue-600" />
                    <a href="/tools/final-grade-calculator" className="font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline">Final Grade Calculator</a>
                    <span className="text-sm text-gray-500 dark:text-gray-400">– Know what you need to pass</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calculator className="h-4 w-4 text-blue-600" />
                    <a href="/tools/cgpa-to-percentage-calculator" className="font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline">GPA to Percentage Converter</a>
                    <span className="text-sm text-gray-500 dark:text-gray-400">– For colleges that show marks</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Calculator className="h-4 w-4 text-blue-600" />
                    <a href="/tools/weighted-grade-calculator" className="font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline">Weighted Grade Calculator</a>
                    <span className="text-sm text-gray-500 dark:text-gray-400">– If every grade doesn't count equally</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calculator className="h-4 w-4 text-blue-600" />
                    <a href="/tools/grade-average-calculator" className="font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline">CGPA Tracker</a>
                    <span className="text-sm text-gray-500 dark:text-gray-400">– To see your full college performance</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Final Thoughts Section */}
          <Card className="mt-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm mx-2 sm:mx-0">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
                Final Thoughts
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Your semester GPA isn't just a number.<br />
                It's your report card in one glance.
              </p>
              
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                So don't wait for your transcript.<br />
                Know your score. Track your progress.
              </p>
              
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                And most of all — stay in control of your academic future.
              </p>
              
              <div className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 p-6 rounded-lg border-l-4 border-blue-400">
                <p className="text-lg font-semibold text-gray-900 dark:text-white">
                  Because when you're clear about where you stand, you'll know exactly where to go next.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* How to Use the Calculator Section */}
          <Card className="mt-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm mx-2 sm:mx-0">
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">How to Use the Semester GPA Calculator</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-900 dark:text-white">Step 1: Add Courses</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Enter each course you're taking this semester (course name is optional).
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-900 dark:text-white">Step 2: Select Grades</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Choose the letter grade you received for each course.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-900 dark:text-white">Step 3: Enter Credits</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Input the number of credit hours for each course.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-900 dark:text-white">Step 4: Calculate</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Click "Calculate GPA" to get your semester GPA.
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

export default SemesterGpaCalculator;
