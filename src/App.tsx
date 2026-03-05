
import { Toaster } from "@/components/ui/toaster";
import "./i18n";
import { Toaster as Sonner } from "sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import { HelmetProvider } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import GradesInCollegeBlog from "./pages/GradesInCollegeBlog";
import DeansListBlog from "./pages/DeansListBlog";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Disclaimer from "./pages/Disclaimer";
import NotFound from "./pages/NotFound";
import SitemapPage from "./pages/SitemapPage";
import GoodGwaBlog from "./pages/GoodGwaBlog";
import LatinHonorsBlog from "./pages/LatinHonorsBlog";
import ImproveGwaBlog from "./pages/ImproveGwaBlog";
import ScholarshipGwaBlog from "./pages/ScholarshipGwaBlog";
import GwaVsGpaBlog from "./pages/GwaVsGpaBlog";
import StudyHabitsBlog from "./pages/StudyHabitsBlog";
import SemestralGwaBlog from "./pages/SemestralGwaBlog";
import GwaCalculatorPage from "./pages/GwaCalculatorPage";
// Tool pages
import GwaToGpaConverter from "./pages/tools/GwaToGpaConverter";
import GradeAverageCalculator from "./pages/tools/GradeAverageCalculator";
import WeightedGradeCalculator from "./pages/tools/WeightedGradeCalculator";
import FinalGradeCalculator from "./pages/tools/FinalGradeCalculator";
import SemesterGpaCalculator from "./pages/tools/SemesterGpaCalculator";
import CgpaToPercentageCalculator from "./pages/tools/CgpaToPercentageCalculator";
import GradeNeededToPass from "./pages/tools/GradeNeededToPass";
import FailingSubjectImpact from "./pages/tools/FailingSubjectImpact";
import GwaTargetPlanner from "./pages/tools/GwaTargetPlanner";
import CumulativeGwaTracker from "./pages/tools/CumulativeGwaTracker";
import RetakeImpact from "./pages/tools/RetakeImpact";
import TransfereeGwa from "./pages/tools/TransfereeGwa";
import ToolsPage from "./pages/ToolsPage";
import GwaDashboard from "./pages/tools/GwaDashboard";
import LatinHonorsTracker from "./pages/tools/LatinHonorsTracker";
import ScholarshipEligibility from "./pages/tools/ScholarshipEligibility";
import GwaCalculatorUP from "./pages/universities/GwaCalculatorUP";
import GwaCalculatorDLSU from "./pages/universities/GwaCalculatorDLSU";
import GwaCalculatorUST from "./pages/universities/GwaCalculatorUST";
import GwaCalculatorPUP from "./pages/universities/GwaCalculatorPUP";
import GwaCalculatorAteneo from "./pages/universities/GwaCalculatorAteneo";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <ThemeProvider defaultTheme="light" storageKey="gwa-calculator-theme">
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <div className="min-h-screen flex flex-col font-inter bg-white dark:bg-gray-900 transition-colors">
              <Header />
              <main className="flex-1">
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/faq" element={<FAQ />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/disclaimer" element={<Disclaimer />} />
                  <Route path="/blog/how-to-compute-gwa" element={<BlogDetail />} />
                  <Route path="/blog/how-to-compute-grades-in-college" element={<GradesInCollegeBlog />} />
                  <Route path="/blog/deans-list-requirements-philippines" element={<DeansListBlog />} />
                  <Route path="/blog/what-is-a-good-gwa-philippines" element={<GoodGwaBlog />} />
                  <Route path="/blog/latin-honors-philippines" element={<LatinHonorsBlog />} />
                  <Route path="/blog/how-to-improve-gwa-in-college" element={<ImproveGwaBlog />} />
                  <Route path="/blog/scholarship-gwa-requirements-philippines" element={<ScholarshipGwaBlog />} />
                  <Route path="/blog/gwa-vs-gpa-differences" element={<GwaVsGpaBlog />} />
                  <Route path="/blog/study-habits-high-gwa-students" element={<StudyHabitsBlog />} />
                  <Route path="/blog/how-to-compute-semestral-gwa" element={<SemestralGwaBlog />} />
                  <Route path="/gwa-calculator" element={<GwaCalculatorPage />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/sitemap" element={<SitemapPage />} />
                  <Route path="/privacy" element={<Privacy />} />
                  <Route path="/terms" element={<Terms />} />
                  {/* Tool Routes */}
                  <Route path="/tools/gwa-to-gpa-converter" element={<GwaToGpaConverter />} />
                  <Route path="/tools/grade-average-calculator" element={<GradeAverageCalculator />} />
                  <Route path="/tools/weighted-grade-calculator" element={<WeightedGradeCalculator />} />
                  <Route path="/tools/final-grade-calculator" element={<FinalGradeCalculator />} />
                  <Route path="/tools/semester-gpa-calculator" element={<SemesterGpaCalculator />} />
                  <Route path="/tools/cgpa-to-percentage-calculator" element={<CgpaToPercentageCalculator />} />
                  <Route path="/tools" element={<ToolsPage />} />
                  <Route path="/tools/grade-needed-to-pass" element={<GradeNeededToPass />} />
                  <Route path="/tools/failing-subject-gwa-impact" element={<FailingSubjectImpact />} />
                  <Route path="/tools/gwa-target-planner" element={<GwaTargetPlanner />} />
                  <Route path="/tools/cumulative-gwa-tracker" element={<CumulativeGwaTracker />} />
                  <Route path="/tools/retake-impact-calculator" element={<RetakeImpact />} />
                  <Route path="/tools/transferee-gwa" element={<TransfereeGwa />} />
                  <Route path="/tools/gwa-dashboard" element={<GwaDashboard />} />
                  <Route path="/tools/latin-honors-tracker" element={<LatinHonorsTracker />} />
                  <Route path="/tools/scholarship-eligibility" element={<ScholarshipEligibility />} />
                  {/* University-Specific Pages */}
                  <Route path="/gwa-calculator-up" element={<GwaCalculatorUP />} />
                  <Route path="/gwa-calculator-dlsu" element={<GwaCalculatorDLSU />} />
                  <Route path="/gwa-calculator-ust" element={<GwaCalculatorUST />} />
                  <Route path="/gwa-calculator-pup" element={<GwaCalculatorPUP />} />
                  <Route path="/gwa-calculator-ateneo" element={<GwaCalculatorAteneo />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
