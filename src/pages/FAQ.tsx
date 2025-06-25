import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";

const FAQ = () => {
  const faqs = [{
    question: "How is GWA calculated?",
    answer: "GWA (General Weighted Average) is calculated using the formula: GWA = (Sum of Grade × Units) ÷ (Sum of Units). This means each subject's grade is multiplied by its unit value, all products are summed up, then divided by the total number of units. This gives more weight to subjects with higher unit values."
  }, {
    question: "What's the difference between GWA and GPA?",
    answer: "GWA (General Weighted Average) and GPA (Grade Point Average) are similar concepts but may use different scales. GWA typically uses a 100-point scale (0-100), while GPA often uses a 4.0 scale. Both consider the weight of units/credits, but the calculation method and scale may vary depending on the institution."
  }, {
    question: "Can I use this calculator for different grading systems?",
    answer: "Yes! Our calculator works with any numerical grading system. Whether your school uses a 100-point scale, 4.0 scale, or any other numerical system, you can input your grades and get an accurate weighted average. Just make sure all grades use the same scale."
  }, {
    question: "What if I have incomplete grades or pending subjects?",
    answer: "Only include subjects with final grades in your GWA calculation. Incomplete grades (INC) or subjects you're currently taking should not be included until you receive a final numerical grade. This ensures accuracy in your GWA computation."
  }, {
    question: "How often should I calculate my GWA?",
    answer: "It's recommended to calculate your GWA at the end of each semester or term to track your academic progress. You can also calculate it mid-semester to see how current grades might affect your overall average and plan accordingly for remaining coursework."
  }];

  return (
    <>
      <Helmet>
        <title>GWA Calculator FAQ – General Weighted Average Questions Answered</title>
        <meta name="description" content="Find answers to common questions about GWA calculation, grading systems, and how to use our free GWA Calculator tool. Get tips and expert advice for students in the Philippines." />
        <meta name="keywords" content="GWA FAQ, general weighted average, grade calculation, student questions, academic help, Philippines education, GWA Calculator" />
        <link rel="canonical" href="https://mygwacalculator.com/faq" />
        <meta property="og:title" content="GWA Calculator FAQ – General Weighted Average Questions Answered" />
        <meta property="og:description" content="Find answers to common questions about GWA calculation, grading systems, and how to use our free GWA Calculator tool. Get tips and expert advice for students in the Philippines." />
        <meta property="og:url" content="https://mygwacalculator.com/faq" />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 transition-colors">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center gap-2 my-[39px]">
              <HelpCircle className="h-8 w-8 text-academic-blue dark:text-blue-400" />
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Common questions about GWA calculation and our calculator tool
            </p>
          </div>

          {/* FAQ Content */}
          <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="text-gray-900 dark:text-white">
                GWA Calculator FAQ
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-gray-200 dark:border-gray-700">
                    <AccordionTrigger className="text-left font-semibold text-gray-900 dark:text-white hover:text-academic-blue dark:hover:text-blue-400">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          {/* Additional Help */}
          <Card className="mt-8 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Still have questions?
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                If you can't find the answer you're looking for, feel free to reach out to us. 
                We're here to help you understand GWA calculation and make the most of our tool.
              </p>
              <a href="/contact" className="inline-flex items-center px-4 py-2 bg-academic-blue hover:bg-academic-blue-dark dark:bg-blue-600 dark:hover:bg-blue-700 text-white rounded-lg transition-colors">
                Contact Us
              </a>
            </CardContent>
          </Card>

          {/* Tips Section */}
          <Card className="mt-8 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="text-gray-900 dark:text-white">
                Pro Tips for GWA Calculation
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h4 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">
                    Double-check your inputs
                  </h4>
                  <p className="text-sm text-blue-800 dark:text-blue-400">
                    Always verify that your grades and units are entered correctly before calculating.
                  </p>
                </div>
                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                  <h4 className="font-semibold text-green-900 dark:text-green-300 mb-2">
                    Keep records
                  </h4>
                  <p className="text-sm text-green-800 dark:text-green-400">
                    Save your calculated GWA for scholarship applications and academic planning.
                  </p>
                </div>
                <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
                  <h4 className="font-semibold text-purple-900 dark:text-purple-300 mb-2">
                    Plan ahead
                  </h4>
                  <p className="text-sm text-purple-800 dark:text-purple-400">
                    Use GWA to identify which subjects need more focus in upcoming terms.
                  </p>
                </div>
                <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800">
                  <h4 className="font-semibold text-orange-900 dark:text-orange-300 mb-2">
                    Understand your school's system
                  </h4>
                  <p className="text-sm text-orange-800 dark:text-orange-400">
                    Different institutions may have specific GWA requirements and scales.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default FAQ;
