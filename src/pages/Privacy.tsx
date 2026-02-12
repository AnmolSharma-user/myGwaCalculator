import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { BackToTopButton } from "@/components/BackToTopButton";

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy – GWA Calculator Data Protection</title>
        <meta name="description" content="Learn how GWA Calculator protects your privacy. We do not collect or store your academic data. Read our complete privacy policy including cookie and advertising disclosures." />
        <meta name="keywords" content="privacy policy, data protection, GWA Calculator, student privacy, academic data, Philippines, cookies, advertising" />
        <link rel="canonical" href="https://mygwacalculator.com/privacy" />
        <meta property="og:title" content="Privacy Policy – GWA Calculator Data Protection" />
        <meta property="og:description" content="Learn how GWA Calculator protects your privacy. We do not collect or store your academic data." />
        <meta property="og:url" content="https://mygwacalculator.com/privacy" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-32 pb-12 px-4 transition-colors">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Privacy Policy</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              <strong>Last Updated:</strong> February 12, 2026
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300 space-y-8">
            <section className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 mt-0">Introduction</h2>
              <p>
                GWA Calculator ("we," "us," or "our") operates the website{" "}
                <a href="https://mygwacalculator.com" className="text-blue-600 dark:text-blue-400 hover:underline">mygwacalculator.com</a>{" "}
                (the "Site"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information
                when you visit our Site. Please read this policy carefully. By using the Site, you agree to the practices
                described in this Privacy Policy.
              </p>
            </section>

            <section className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 mt-0">Information We Collect</h2>
              <p className="mb-4">
                GWA Calculator is designed with your privacy in mind. We collect minimal information to provide and improve our services:
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Information You Provide</h3>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Contact Form Data:</strong> If you use our contact form, we receive your name, email address, and message content. This information is sent directly to our email and is not stored on our servers.</li>
                <li><strong>Calculator Inputs:</strong> All grade and subject data you enter into our calculators is processed <strong>entirely in your browser</strong>. We do not transmit, collect, or store any academic data on our servers.</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Information Collected Automatically</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Usage Data:</strong> We may collect anonymized usage data such as pages visited, time spent on pages, and browser type through standard web analytics tools. This data cannot identify individual users.</li>
                <li><strong>Device Information:</strong> We may automatically collect information about your device, including your IP address (anonymized), browser type, operating system, and screen resolution for the purpose of improving our service.</li>
              </ul>
            </section>

            <section className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 mt-0">Cookies and Tracking Technologies</h2>
              <p className="mb-4">
                Our Site may use cookies and similar tracking technologies to enhance your experience:
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Essential Cookies</h3>
              <p className="mb-4">
                These cookies are necessary for the Site to function properly. They include cookies that store your
                theme preference (dark/light mode). You cannot opt out of essential cookies.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Third-Party Advertising & Cookies</h3>
              <p className="mb-4">
                We use Google AdSense to display advertisements on our Site. Google AdSense uses cookies to serve ads
                based on your prior visits to our Site and other websites. Google's use of advertising cookies enables
                it and its partners to serve ads based on your browsing patterns.
              </p>
              <p>
                You may opt out of personalized advertising by visiting{" "}
                <a href="https://www.google.com/settings/ads" className="text-blue-600 dark:text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Google Ads Settings</a>.
                For more information about how Google uses your data, please review{" "}
                <a href="https://policies.google.com/privacy" className="text-blue-600 dark:text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Google's Privacy Policy</a>.
              </p>
            </section>

            <section className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 mt-0">Data Retention</h2>
              <p>
                Since our calculators process all data locally in your browser, no academic data is retained by us.
                Contact form submissions are retained in our email system only as long as necessary to respond to your
                inquiry. Anonymized analytics data may be retained for up to 26 months to analyze long-term usage trends.
              </p>
            </section>

            <section className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 mt-0">Children's Privacy</h2>
              <p>
                Our Site is intended for use by students of all ages for educational purposes. We do not knowingly collect
                personal information from children under 13 years of age. Since our calculators operate entirely within the
                browser without collecting personal data, children can safely use our tools. If you are a parent or guardian
                and believe your child has provided personal information through our contact form, please{" "}
                <Link to="/contact" className="text-blue-600 dark:text-blue-400 hover:underline">contact us</Link>{" "}
                so we can take appropriate action.
              </p>
            </section>

            <section className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 mt-0">Your Rights</h2>
              <p className="mb-4">Depending on your location, you may have certain rights regarding your personal data:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Access:</strong> You have the right to request information about any personal data we may hold about you.</li>
                <li><strong>Correction:</strong> You may request correction of inaccurate personal data.</li>
                <li><strong>Deletion:</strong> You may request deletion of your personal data, subject to legal obligations.</li>
                <li><strong>Opt-Out:</strong> You may opt out of personalized advertising through the links provided above.</li>
              </ul>
              <p className="mt-4">
                To exercise any of these rights, please{" "}
                <Link to="/contact" className="text-blue-600 dark:text-blue-400 hover:underline">contact us</Link>.
              </p>
            </section>

            <section className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 mt-0">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy or our data practices, please{" "}
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

export default Privacy;
