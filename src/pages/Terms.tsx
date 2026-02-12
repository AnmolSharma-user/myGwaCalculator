import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { BackToTopButton } from "@/components/BackToTopButton";

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions – GWA Calculator Usage Policy</title>
        <meta name="description" content="Read the terms and conditions for using the GWA Calculator. Learn about user responsibilities, service limitations, intellectual property, and our commitment to accuracy." />
        <meta name="keywords" content="terms and conditions, GWA Calculator, usage policy, user agreement, academic tool, Philippines" />
        <link rel="canonical" href="https://mygwacalculator.com/terms" />
        <meta property="og:title" content="Terms & Conditions – GWA Calculator Usage Policy" />
        <meta property="og:description" content="Read the terms and conditions for using the GWA Calculator. Learn about user responsibilities and service limitations." />
        <meta property="og:url" content="https://mygwacalculator.com/terms" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-32 pb-12 px-4 transition-colors">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Terms & Conditions</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              <strong>Last Updated:</strong> February 12, 2026
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300 space-y-8">
            <section className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 mt-0">1. Acceptance of Terms</h2>
              <p>
                By accessing and using the GWA Calculator website located at{" "}
                <a href="https://mygwacalculator.com" className="text-blue-600 dark:text-blue-400 hover:underline">mygwacalculator.com</a>{" "}
                (the "Site"), you accept and agree to be bound by these Terms and Conditions ("Terms"). If you do not agree
                to these Terms, please do not access or use the Site. We reserve the right to modify these Terms at any time,
                and your continued use of the Site following any changes constitutes acceptance of those changes.
              </p>
            </section>

            <section className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 mt-0">2. Description of Service</h2>
              <p className="mb-4">
                GWA Calculator provides free online tools for computing General Weighted Average (GWA), Grade Point Average (GPA),
                and other academic metrics. Our services include, but are not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>GWA (General Weighted Average) Calculator</li>
                <li>GWA to GPA Converter</li>
                <li>Grade Average Calculator</li>
                <li>Weighted Grade Calculator</li>
                <li>Final Grade Calculator</li>
                <li>Semester GPA Calculator</li>
                <li>CGPA to Percentage Converter</li>
              </ul>
              <p className="mt-4">
                All tools are provided for <strong>educational and informational purposes only</strong>.
              </p>
            </section>

            <section className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 mt-0">3. Use of Service</h2>
              <p className="mb-4">By using our Site, you agree to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use the tools only for lawful, educational purposes</li>
                <li>Not attempt to interfere with or disrupt the operation of the Site</li>
                <li>Not use automated systems (bots, scrapers) to access the Site without permission</li>
                <li>Not reproduce, duplicate, or copy any content from the Site without attribution</li>
                <li>Verify all calculations with your educational institution's official records</li>
              </ul>
            </section>

            <section className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 mt-0">4. Accuracy Disclaimer</h2>
              <p className="mb-4">
                While we strive to provide accurate calculations, we cannot guarantee that our tools will produce results
                identical to those computed by your specific educational institution. Please note:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Different schools, colleges, and universities in the Philippines may use different grading scales and computation methods</li>
                <li>Our calculators use standard mathematical formulas that may not account for institution-specific policies</li>
                <li>Results are estimates and should always be verified with your institution's registrar or academic office</li>
                <li>We do not guarantee that our calculations will match official transcripts or academic records</li>
              </ul>
            </section>

            <section className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 mt-0">5. Intellectual Property</h2>
              <p className="mb-4">
                The Site and its original content, features, and functionality are owned by GWA Calculator and are
                protected by applicable intellectual property laws. This includes, but is not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Website design, layout, and user interface</li>
                <li>Text, articles, blog posts, and educational content</li>
                <li>Logos, icons, and graphic elements</li>
                <li>Software code and calculator algorithms</li>
              </ul>
            </section>

            <section className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 mt-0">6. Third-Party Links and Ads</h2>
              <p>
                Our Site may contain links to third-party websites and display advertisements (such as Google AdSense).
                We have no control over, and assume no responsibility for, the content, privacy policies, or practices
                of any third-party websites. You acknowledge and agree that we shall not be responsible for any damage
                or loss caused by your use of any third-party content, goods, or services.
              </p>
            </section>

            <section className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 mt-0">7. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by applicable law, GWA Calculator shall not be liable for any indirect,
                incidental, special, consequential, or punitive damages, including but not limited to loss of academic
                standing, scholarship opportunities, or employment prospects resulting from your use of the Site.
              </p>
            </section>

            <section className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 mt-0">8. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the Republic of the
                Philippines, without regard to its conflict of law provisions.
              </p>
            </section>

            <section className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 mt-0">9. Contact Information</h2>
              <p>
                If you have any questions about these Terms, please{" "}
                <Link to="/contact" className="text-blue-600 dark:text-blue-400 hover:underline">contact us</Link>{" "}
                or email us at{" "}
                <a href="mailto:mygwacalculator.com@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                  mygwacalculator.com@gmail.com
                </a>.
              </p>
            </section>
          </div>
          <BackToTopButton />
        </div>
      </div>
    </>
  );
};

export default Terms;
