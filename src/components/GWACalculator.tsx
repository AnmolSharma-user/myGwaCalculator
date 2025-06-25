import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Trash2, Calculator, Copy, Share, Printer } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { ShareModal } from "./ShareModal";

interface Subject {
  id: number;
  name: string;
  grade: string;
  units: string;
}

export const GWACalculator = () => {
  const [subjects, setSubjects] = useState<Subject[]>([
    { id: 1, name: "", grade: "", units: "" },
  ]);
  const [gwa, setGwa] = useState<number | null>(null);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const { toast } = useToast();

  const addSubject = () => {
    const newId = Math.max(...subjects.map(s => s.id)) + 1;
    setSubjects([...subjects, { id: newId, name: "", grade: "", units: "" }]);
  };

  const removeSubject = (id: number) => {
    if (subjects.length > 1) {
      setSubjects(subjects.filter(s => s.id !== id));
    }
  };

  const updateSubject = (id: number, field: keyof Subject, value: string) => {
    setSubjects(subjects.map(s => 
      s.id === id ? { ...s, [field]: value } : s
    ));
  };

  const calculateGWA = () => {
    // Validate inputs
    const validSubjects = subjects.filter(s => s.name && s.grade && s.units);
    
    if (validSubjects.length === 0) {
      toast({
        title: "Invalid Input",
        description: "Please fill in at least one complete subject with name, grade, and units.",
        variant: "destructive",
      });
      return;
    }

    // Check for invalid grades or units
    for (const subject of validSubjects) {
      const grade = parseFloat(subject.grade);
      const units = parseFloat(subject.units);
      
      if (isNaN(grade) || grade < 0 || grade > 100) {
        toast({
          title: "Invalid Grade",
          description: `Grade for ${subject.name} must be a number between 0 and 100.`,
          variant: "destructive",
        });
        return;
      }
      
      if (isNaN(units) || units <= 0) {
        toast({
          title: "Invalid Units",
          description: `Units for ${subject.name} must be a positive number.`,
          variant: "destructive",
        });
        return;
      }
    }

    // Calculate GWA
    let totalGradePoints = 0;
    let totalUnits = 0;

    validSubjects.forEach(subject => {
      const grade = parseFloat(subject.grade);
      const units = parseFloat(subject.units);
      totalGradePoints += grade * units;
      totalUnits += units;
    });

    const calculatedGwa = totalGradePoints / totalUnits;
    setGwa(Math.round(calculatedGwa * 100) / 100);

    toast({
      title: "GWA Calculated!",
      description: `Your General Weighted Average is ${calculatedGwa.toFixed(2)}`,
    });
  };

  const getGWAText = () => {
    if (gwa === null) return "";
    
    const validSubjects = subjects.filter(s => s.name && s.grade && s.units);
    let text = "My GWA Calculation Results\n\n";
    text += "Subjects:\n";
    
    validSubjects.forEach((subject, index) => {
      text += `${index + 1}. ${subject.name} - Grade: ${subject.grade}, Units: ${subject.units}\n`;
    });
    
    text += `\nCalculated GWA: ${gwa.toFixed(2)}`;
    
    if (gwa >= 90) text += "\nExcellent! Keep up the great work!";
    else if (gwa >= 80) text += "\nGood job! You're doing well!";
    else if (gwa >= 70) text += "\nFair performance. There's room for improvement!";
    else text += "\nKeep working hard. You can do better!";
    
    return text;
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(getGWAText());
      toast({
        title: "Copied!",
        description: "GWA results copied to clipboard",
      });
    } catch (err) {
      toast({
        title: "Copy Failed",
        description: "Unable to copy to clipboard",
        variant: "destructive",
      });
    }
  };

  const handleShare = async () => {
    if (gwa === null) {
      toast({
        title: "No GWA to Share",
        description: "Please calculate your GWA first before sharing.",
        variant: "destructive",
      });
      return;
    }

    setIsShareModalOpen(true);
  };

  const handlePrint = () => {
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      const validSubjects = subjects.filter(s => s.name && s.grade && s.units);
      
      printWindow.document.write(`
        <html>
          <head>
            <title>GWA Results</title>
            <style>
              body { font-family: Arial, sans-serif; padding: 20px; }
              h1 { color: #1e40af; margin-bottom: 20px; }
              h2 { color: #374151; margin-top: 20px; }
              table { width: 100%; border-collapse: collapse; margin: 20px 0; }
              th, td { border: 1px solid #ddd; padding: 12px; text-align: left; }
              th { background-color: #f3f4f6; font-weight: bold; }
              .result { background-color: #dbeafe; padding: 15px; border-radius: 8px; margin: 20px 0; }
              .result h3 { margin: 0 0 10px 0; color: #1e40af; }
              .feedback { margin-top: 10px; font-style: italic; }
            </style>
          </head>
          <body>
            <h1>🎓 GWA Calculation Results</h1>
            
            <h2>Subject Details</h2>
            <table>
              <thead>
                <tr>
                  <th>Subject Name</th>
                  <th>Grade</th>
                  <th>Units</th>
                  <th>Grade Points</th>
                </tr>
              </thead>
              <tbody>
                ${validSubjects.map(subject => {
                  const grade = parseFloat(subject.grade);
                  const units = parseFloat(subject.units);
                  const gradePoints = grade * units;
                  return `
                    <tr>
                      <td>${subject.name}</td>
                      <td>${grade}</td>
                      <td>${units}</td>
                      <td>${gradePoints.toFixed(2)}</td>
                    </tr>
                  `;
                }).join('')}
              </tbody>
            </table>
            
            <div class="result">
              <h3>Your General Weighted Average (GWA): ${gwa?.toFixed(2)}</h3>
              <div class="feedback">
                ${gwa && gwa >= 90 ? "Excellent! Keep up the great work!" :
                  gwa && gwa >= 80 ? "Good job! You're doing well!" :
                  gwa && gwa >= 70 ? "Fair performance. There's room for improvement!" :
                  "Keep working hard. You can do better!"}
              </div>
            </div>
            
            <p><strong>Calculation Formula:</strong> GWA = (Sum of Grade × Units) ÷ (Sum of Units)</p>
            <p><strong>Total Grade Points:</strong> ${validSubjects.reduce((sum, subject) => sum + (parseFloat(subject.grade) * parseFloat(subject.units)), 0).toFixed(2)}</p>
            <p><strong>Total Units:</strong> ${validSubjects.reduce((sum, subject) => sum + parseFloat(subject.units), 0)}</p>
            
            <p style="margin-top: 30px; color: #6b7280; font-size: 12px;">
              Generated on ${new Date().toLocaleDateString()} using GWA Calculator
            </p>
          </body>
        </html>
      `);
      
      printWindow.document.close();
      printWindow.print();
    } else {
      toast({
        title: "Print Failed",
        description: "Unable to open print window",
        variant: "destructive",
      });
    }
  };

  return (
    <>
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader className="text-center p-4 sm:p-6">
          <CardTitle className="text-xl sm:text-2xl font-bold text-gray-900 flex items-center justify-center gap-2">
            <Calculator className="h-5 w-5 sm:h-6 sm:w-6 text-academic-blue" />
            GWA Calculator
          </CardTitle>
          <p className="text-sm sm:text-base text-gray-600 px-2">
            Enter your subjects, grades, and units to calculate your General Weighted Average
          </p>
        </CardHeader>
        <CardContent className="space-y-4 sm:space-y-6 p-4 sm:p-6">
          {/* Mobile-First Table Header */}
          <div className="hidden sm:grid sm:grid-cols-12 gap-4 p-4 bg-academic-gray rounded-lg font-medium text-gray-700">
            <div className="col-span-5">Subject Name</div>
            <div className="col-span-2">Grade</div>
            <div className="col-span-2">Units</div>
            <div className="col-span-3">Action</div>
          </div>

          {/* Subject Rows - Mobile First */}
          <div className="space-y-3">
            {subjects.map((subject) => (
              <div key={subject.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                {/* Mobile Layout */}
                <div className="space-y-3 sm:hidden">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Subject Name</label>
                    <Input
                      placeholder="e.g., Mathematics"
                      value={subject.name}
                      onChange={(e) => updateSubject(subject.id, 'name', e.target.value)}
                      className="w-full"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Grade</label>
                      <Input
                        placeholder="85"
                        type="number"
                        min="0"
                        max="100"
                        step="0.01"
                        value={subject.grade}
                        onChange={(e) => updateSubject(subject.id, 'grade', e.target.value)}
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Units</label>
                      <Input
                        placeholder="3"
                        type="number"
                        min="0.5"
                        step="0.5"
                        value={subject.units}
                        onChange={(e) => updateSubject(subject.id, 'units', e.target.value)}
                        className="w-full"
                      />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      onClick={addSubject}
                      size="sm"
                      variant="outline"
                      className="flex-1"
                    >
                      <Plus className="h-4 w-4 mr-1" />
                      Add
                    </Button>
                    {subjects.length > 1 && (
                      <Button
                        onClick={() => removeSubject(subject.id)}
                        size="sm"
                        variant="outline"
                        className="text-red-600 hover:text-red-700 flex-1"
                      >
                        <Trash2 className="h-4 w-4 mr-1" />
                        Remove
                      </Button>
                    )}
                  </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden sm:grid sm:grid-cols-12 gap-4 items-center">
                  <div className="col-span-5">
                    <Input
                      placeholder="e.g., Mathematics"
                      value={subject.name}
                      onChange={(e) => updateSubject(subject.id, 'name', e.target.value)}
                      className="w-full"
                    />
                  </div>
                  <div className="col-span-2">
                    <Input
                      placeholder="85"
                      type="number"
                      min="0"
                      max="100"
                      step="0.01"
                      value={subject.grade}
                      onChange={(e) => updateSubject(subject.id, 'grade', e.target.value)}
                      className="w-full"
                    />
                  </div>
                  <div className="col-span-2">
                    <Input
                      placeholder="3"
                      type="number"
                      min="0.5"
                      step="0.5"
                      value={subject.units}
                      onChange={(e) => updateSubject(subject.id, 'units', e.target.value)}
                      className="w-full"
                    />
                  </div>
                  <div className="col-span-3 flex gap-2">
                    <Button
                      onClick={addSubject}
                      size="sm"
                      variant="outline"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                    {subjects.length > 1 && (
                      <Button
                        onClick={() => removeSubject(subject.id)}
                        size="sm"
                        variant="outline"
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Calculate Button */}
          <div className="flex justify-center pt-4">
            <Button 
              onClick={calculateGWA} 
              size="lg"
              className="bg-academic-blue hover:bg-academic-blue-dark text-white px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold w-full sm:w-auto"
            >
              Calculate GWA
            </Button>
          </div>

          {/* Result Display */}
          {gwa !== null && (
            <div className="text-center py-6 bg-academic-blue-light rounded-lg border-2 border-academic-blue">
              <p className="text-2xl sm:text-3xl font-bold text-academic-blue-dark mb-2">
                🎓 Your GWA is: {gwa.toFixed(2)}
              </p>
              <p className="text-sm sm:text-base text-gray-600 px-2 mb-4">
                {gwa >= 90 && "Excellent! Keep up the great work!"}
                {gwa >= 80 && gwa < 90 && "Good job! You're doing well!"}
                {gwa >= 70 && gwa < 80 && "Fair performance. There's room for improvement!"}
                {gwa < 70 && "Keep working hard. You can do better!"}
              </p>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center mt-4 px-4">
                <Button
                  onClick={handleCopy}
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2"
                >
                  <Copy className="h-4 w-4" />
                  Copy GWA
                </Button>
                <Button
                  onClick={handleShare}
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2"
                >
                  <Share className="h-4 w-4" />
                  Share GWA
                </Button>
                <Button
                  onClick={handlePrint}
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2"
                >
                  <Printer className="h-4 w-4" />
                  Print GWA
                </Button>
              </div>
            </div>
          )}

          {/* Formula Explanation */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">How GWA is Calculated:</h4>
            <p className="text-sm text-gray-600 mb-2">
              GWA = (Sum of Grade × Units) ÷ (Sum of Units)
            </p>
            <p className="text-xs sm:text-sm text-gray-500">
              Example: If you have Math (85 grade, 3 units) and English (90 grade, 2 units):
              GWA = (85×3 + 90×2) ÷ (3+2) = (255 + 180) ÷ 5 = 87
            </p>
          </div>
        </CardContent>
      </Card>

      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
        subjects={subjects}
        gwa={gwa || 0}
      />
    </>
  );
};
