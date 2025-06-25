import { Helmet } from "react-helmet-async";

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy – GWA Calculator Data Protection</title>
        <meta name="description" content="Learn how GWA Calculator protects your privacy. We do not collect or store your academic data. Read our privacy policy for full details." />
        <meta name="keywords" content="privacy policy, data protection, GWA Calculator, student privacy, academic data, Philippines" />
        <link rel="canonical" href="https://mygwacalculator.com/privacy" />
        <meta property="og:title" content="Privacy Policy – GWA Calculator Data Protection" />
        <meta property="og:description" content="Learn how GWA Calculator protects your privacy. We do not collect or store your academic data. Read our privacy policy for full details." />
        <meta property="og:url" content="https://mygwacalculator.com/privacy" />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-32 md:pt-24">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          
          <div className="space-y-6 text-gray-700">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
              <p>
                GWA Calculator is designed to protect your privacy. We do not collect, store, or transmit any personal information or academic data you enter into our calculator.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Information</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>All calculations are performed locally in your browser</li>
                <li>No academic data is sent to our servers</li>
                <li>Your GWA calculations remain completely private</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cookies and Tracking</h2>
              <p>
                We may use basic analytics to understand how our tool is used, but we do not track individual users or their academic information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us through our contact page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Updates</h2>
              <p>
                This Privacy Policy may be updated from time to time. We will notify users of any significant changes.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Privacy;
