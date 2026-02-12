import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BackToTopButton } from "@/components/BackToTopButton";
import { AlertTriangle, Info, ShieldCheck, FileText } from "lucide-react";

const Disclaimer = () => {
    const lastUpdated = "February 12, 2026";

    return (
        <>
            <Helmet>
                <title>Disclaimer - GWA Calculator Philippines</title>
                <meta name="description" content="Disclaimer for GWA Calculator Philippines. Information regarding the accuracy of calculations, educational purpose, and limitations of our tools." />
                <link rel="canonical" href="https://mygwacalculator.com/disclaimer" />
                <meta property="og:title" content="Disclaimer - GWA Calculator Philippines" />
                <meta property="og:description" content="Legal disclaimer and terms of use for GWA Calculator Philippines." />
                <meta property="og:url" content="https://mygwacalculator.com/disclaimer" />
                <meta name="robots" content="noindex, follow" />
            </Helmet>

            <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-32 pb-12 px-4 transition-colors">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Disclaimer</h1>
                        <p className="text-lg text-gray-600 dark:text-gray-400">
                            Important information about using our tools and content
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
                            Last Updated: {lastUpdated}
                        </p>
                    </div>

                    <div className="grid gap-8">
                        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-l-4 border-l-yellow-500">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-xl">
                                    <AlertTriangle className="h-6 w-6 text-yellow-500" />
                                    Accuracy of Calculations
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                                <p>
                                    The calculators and tools provided on <strong>GWA Calculator Philippines (mygwacalculator.com)</strong> are intended for educational and informational purposes only. While we strive to ensure the accuracy of our calculations and formulas based on standard Philippine university grading systems (including UP, PUP, UST, DLSU, and others), we cannot guarantee 100% accuracy for every specific institution or scenario.
                                </p>
                                <p>
                                    Grading systems, weightings, and policies may vary significantly between different universities, colleges, and even specific departments. Users should always:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Consult their official student handbook or university registrar.</li>
                                    <li>Verify results with their professors or academic advisors.</li>
                                    <li>Treat the results from our tools as estimates rather than official academic records.</li>
                                </ul>
                                <p className="font-semibold text-gray-900 dark:text-white mt-2">
                                    We are not liable for any academic decisions, errors, or omissions made based on the use of these tools.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-xl">
                                    <Info className="h-6 w-6 text-blue-500" />
                                    Educational Purpose Only
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                                <p>
                                    The content provided on this website, including blog posts, guides, and FAQs, is for general informational purposes only. It does not constitute professional academic, career, or legal advice.
                                </p>
                                <p>
                                    Any reliance you place on such information is strictly at your own risk. We recommend confirming details about Dean's List requirements, Latin Honors, and grading policies directly with your respective educational institution.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-xl">
                                    <ShieldCheck className="h-6 w-6 text-green-500" />
                                    External Links and Third-Party Content
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                                <p>
                                    Our website may contain links to external websites that are not provided or maintained by or in any way affiliated with GWA Calculator Philippines.
                                </p>
                                <p>
                                    Please note that we do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-xl">
                                    <FileText className="h-6 w-6 text-purple-500" />
                                    No Professional Relationship
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                                <p>
                                    Using this website or communicating with us does not establish a professional or advisory relationship. All tools are provided "as is" without warranty of any kind, express or implied.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
                <BackToTopButton />
            </div>
        </>
    );
};

export default Disclaimer;
