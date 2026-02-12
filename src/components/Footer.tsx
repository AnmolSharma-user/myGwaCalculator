import { Link } from "react-router-dom";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <img src="/android-chrome-512x512.png" alt="GWA Calculator Logo" className="h-8 w-8" />
              <span className="text-xl font-semibold text-gray-900 dark:text-white">
                GWA Calculator
              </span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 text-sm max-w-md">
              Calculate your General Weighted Average easily with our free online tool.
              Perfect for Filipino students to track their academic performance and plan their studies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm text-gray-600 dark:text-gray-400 hover:text-academic-blue dark:hover:text-blue-400">Home</Link></li>
              <li><Link to="/about" className="text-sm text-gray-600 dark:text-gray-400 hover:text-academic-blue dark:hover:text-blue-400">About</Link></li>
              <li><Link to="/faq" className="text-sm text-gray-600 dark:text-gray-400 hover:text-academic-blue dark:hover:text-blue-400">FAQ</Link></li>
              <li><Link to="/blog" className="text-sm text-gray-600 dark:text-gray-400 hover:text-academic-blue dark:hover:text-blue-400">Blog</Link></li>
              <li><Link to="/contact" className="text-sm text-gray-600 dark:text-gray-400 hover:text-academic-blue dark:hover:text-blue-400">Contact</Link></li>
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
              Free Tools
            </h3>
            <ul className="space-y-2">
              <li><Link to="/tools/gwa-to-gpa-converter" className="text-sm text-gray-600 dark:text-gray-400 hover:text-academic-blue dark:hover:text-blue-400">GWA to GPA Converter</Link></li>
              <li><Link to="/tools/grade-average-calculator" className="text-sm text-gray-600 dark:text-gray-400 hover:text-academic-blue dark:hover:text-blue-400">Grade Average Calculator</Link></li>
              <li><Link to="/tools/weighted-grade-calculator" className="text-sm text-gray-600 dark:text-gray-400 hover:text-academic-blue dark:hover:text-blue-400">Weighted Grade Calculator</Link></li>
              <li><Link to="/tools/final-grade-calculator" className="text-sm text-gray-600 dark:text-gray-400 hover:text-academic-blue dark:hover:text-blue-400">Final Grade Calculator</Link></li>
              <li><Link to="/tools/semester-gpa-calculator" className="text-sm text-gray-600 dark:text-gray-400 hover:text-academic-blue dark:hover:text-blue-400">Semester GPA Calculator</Link></li>
              <li><Link to="/tools/cgpa-to-percentage-calculator" className="text-sm text-gray-600 dark:text-gray-400 hover:text-academic-blue dark:hover:text-blue-400">CGPA to Percentage</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
              Legal
            </h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-sm text-gray-600 dark:text-gray-400 hover:text-academic-blue dark:hover:text-blue-400">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-sm text-gray-600 dark:text-gray-400 hover:text-academic-blue dark:hover:text-blue-400">Terms & Conditions</Link></li>
              <li><Link to="/disclaimer" className="text-sm text-gray-600 dark:text-gray-400 hover:text-academic-blue dark:hover:text-blue-400">Disclaimer</Link></li>
              <li><Link to="/contact" className="text-sm text-gray-600 dark:text-gray-400 hover:text-academic-blue dark:hover:text-blue-400">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {currentYear} GWA Calculator. All rights reserved. Made with ❤️ for Filipino students.
          </p>
        </div>
      </div>
    </footer>
  );
};
