
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import { HelmetProvider } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Index from "./pages/Index";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import GradesInCollegeBlog from "./pages/GradesInCollegeBlog";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";
// Tool pages
import GwaToGpaConverter from "./pages/tools/GwaToGpaConverter";
import GradeAverageCalculator from "./pages/tools/GradeAverageCalculator";
import WeightedGradeCalculator from "./pages/tools/WeightedGradeCalculator";
import FinalGradeCalculator from "./pages/tools/FinalGradeCalculator";
import SemesterGpaCalculator from "./pages/tools/SemesterGpaCalculator";
import CgpaToPercentageCalculator from "./pages/tools/CgpaToPercentageCalculator";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <ThemeProvider defaultTheme="light" storageKey="gwa-calculator-theme">
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <div className="min-h-screen flex flex-col font-inter bg-white dark:bg-gray-900 transition-colors">
              <Header />
              <main className="flex-1">
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/faq" element={<FAQ />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/blog/how-to-compute-gwa" element={<BlogDetail />} />
                  <Route path="/blog/how-to-compute-grades-in-college" element={<GradesInCollegeBlog />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/privacy" element={<Privacy />} />
                  <Route path="/terms" element={<Terms />} />
                  {/* Tool Routes */}
                  <Route path="/tools/gwa-to-gpa-converter" element={<GwaToGpaConverter />} />
                  <Route path="/tools/grade-average-calculator" element={<GradeAverageCalculator />} />
                  <Route path="/tools/weighted-grade-calculator" element={<WeightedGradeCalculator />} />
                  <Route path="/tools/final-grade-calculator" element={<FinalGradeCalculator />} />
                  <Route path="/tools/semester-gpa-calculator" element={<SemesterGpaCalculator />} />
                  <Route path="/tools/cgpa-to-percentage-calculator" element={<CgpaToPercentageCalculator />} />
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
