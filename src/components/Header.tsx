import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Calculator, ChevronDown } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "FAQ", path: "/faq" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const toolsItems = [
    { name: "GWA to GPA Converter", path: "/tools/gwa-to-gpa-converter" },
    { name: "Grade Average Calculator", path: "/tools/grade-average-calculator" },
    { name: "Weighted Grade Calculator", path: "/tools/weighted-grade-calculator" },
    { name: "Final Grade Calculator", path: "/tools/final-grade-calculator" },
    { name: "Semester GPA Calculator", path: "/tools/semester-gpa-calculator" },
    { name: "CGPA to Percentage Calculator", path: "/tools/cgpa-to-percentage-calculator" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-white/20 dark:border-gray-800/30 shadow-lg shadow-black/5 dark:shadow-black/20 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src="/android-chrome-512x512.png" alt="GWA Calculator Logo" className="h-8 w-8" />
            <span className="text-xl font-semibold text-gray-900 dark:text-white">
              GWA Calculator
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-all duration-200 px-3 py-2 rounded-lg hover:bg-white/60 dark:hover:bg-gray-800/60 ${
                  isActive(item.path)
                    ? "text-academic-blue dark:text-blue-400 bg-white/40 dark:bg-gray-800/40"
                    : "text-gray-600 dark:text-gray-300 hover:text-academic-blue dark:hover:text-blue-400"
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* More Tools Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-academic-blue dark:hover:text-blue-400 transition-all duration-200 px-3 py-2 rounded-lg hover:bg-white/60 dark:hover:bg-gray-800/60">
                More Tools
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                {toolsItems.map((tool) => (
                  <DropdownMenuItem key={tool.path} asChild>
                    <Link
                      to={tool.path}
                      className="w-full px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-academic-blue dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    >
                      {tool.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <div className="flex items-center space-x-3">
              <ThemeToggle />
            </div>
          </nav>

          {/* Mobile menu button and controls */}
          <div className="md:hidden flex items-center space-x-3">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:text-academic-blue dark:hover:text-blue-400 hover:bg-white/60 dark:hover:bg-gray-800/60 transition-all duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/20 dark:border-gray-800/30">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive(item.path)
                      ? "text-academic-blue dark:text-blue-400 bg-white/40 dark:bg-gray-800/40"
                      : "text-gray-600 dark:text-gray-300 hover:text-academic-blue dark:hover:text-blue-400 hover:bg-white/60 dark:hover:bg-gray-800/60"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Tools Section */}
              <div className="pt-2 border-t border-white/20 dark:border-gray-800/30 mt-2">
                <div className="px-3 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  More Tools
                </div>
                {toolsItems.map((tool) => (
                  <Link
                    key={tool.path}
                    to={tool.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 text-gray-600 dark:text-gray-300 hover:text-academic-blue dark:hover:text-blue-400 hover:bg-white/60 dark:hover:bg-gray-800/60 block"
                  >
                    {tool.name}
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
