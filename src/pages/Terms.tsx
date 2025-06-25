import { Helmet } from "react-helmet-async";

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions – GWA Calculator Usage Policy</title>
        <meta name="description" content="Read the terms and conditions for using the GWA Calculator. Learn about user responsibilities, service limitations, and our commitment to accuracy and privacy." />
        <meta name="keywords" content="terms and conditions, GWA Calculator, usage policy, user agreement, academic tool, Philippines" />
        <link rel="canonical" href="https://mygwacalculator.com/terms" />
        <meta property="og:title" content="Terms & Conditions – GWA Calculator Usage Policy" />
        <meta property="og:description" content="Read the terms and conditions for using the GWA Calculator. Learn about user responsibilities, service limitations, and our commitment to accuracy and privacy." />
        <meta property="og:url" content="https://mygwacalculator.com/terms" />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-32 md:pt-24">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms & Conditions</h1>
          
          <div className="space-y-6 text-gray-700">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Acceptance of Terms</h2>
              <p>
                By using the GWA Calculator, you agree to these terms and conditions. If you do not agree, please do not use our service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Use of Service</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>This tool is provided for educational purposes only</li>
                <li>Calculations are estimates and should be verified with your institution</li>
                <li>We are not responsible for any decisions made based on our calculations</li>
                <li>The service is provided "as is" without warranties</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Accuracy Disclaimer</h2>
              <p>
                While we strive to provide accurate calculations, different institutions may have varying GWA computation methods. Always verify with your school's official policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Limitation of Liability</h2>
              <p>
                We shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use of this calculator.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. Continued use of the service constitutes acceptance of any changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact</h2>
              <p>
                For questions about these terms, please reach out through our contact page.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Terms;
