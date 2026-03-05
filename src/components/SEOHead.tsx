import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title: string;
  description: string;
  keywords: string;
  canonicalUrl: string;
  ogImage?: string;
  structuredData?: object;
  faqData?: Array<{ question: string; answer: string }>;
  toolType?: string;
  toolCategory?: string;
  toolFeatures?: string[];
  toolBenefits?: string[];
}

export const SEOHead = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage = "https://mygwacalculator.com/android-chrome-512x512.png",
  structuredData,
  faqData,
}: SEOHeadProps) => {
  // SoftwareApplication schema — canonical schema for all calculator tool pages.
  const baseStructuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": title,
    "description": description,
    "url": canonicalUrl,
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "PHP",
      "availability": "https://schema.org/InStock"
    },
    "author": {
      "@type": "Person",
      "name": "Anmol Gautam",
      "url": "https://mygwacalculator.com/about"
    },
    "publisher": {
      "@type": "Organization",
      "name": "mygwacalculator.com",
      "url": "https://mygwacalculator.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://mygwacalculator.com/android-chrome-512x512.png"
      }
    },
    "inLanguage": "en-PH",
    "isAccessibleForFree": true
  };

  // FAQPage — ONLY rendered when faqData is provided via SEOHead.
  // IMPORTANT: If a page uses SEOHead AND passes faqData here, it must NOT also
  // emit its own FAQPage schema in a separate <Helmet> block — that causes
  // the "Duplicate field FAQPage" critical error in Google Search Console.
  const faqStructuredData = faqData && faqData.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData
      .filter(faq => faq.question && faq.answer)
      .slice(0, 10)
      .map(faq => ({
        "@type": "Question",
        "name": faq.question.trim(),
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer.trim()
        }
      }))
  } : null;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_PH" />
      <meta property="og:site_name" content="mygwacalculator.com" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Robots & Geo */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
      <meta name="author" content="Anmol Gautam" />
      <meta name="geo.region" content="PH" />
      <meta name="geo.country" content="Philippines" />
      <meta name="language" content="en-PH" />

      {/* Schema: SoftwareApplication */}
      <script type="application/ld+json">
        {JSON.stringify(baseStructuredData)}
      </script>

      {/* Schema: FAQPage — only when faqData passed */}
      {faqStructuredData && (
        <script type="application/ld+json">
          {JSON.stringify(faqStructuredData)}
        </script>
      )}

      {/* Schema: Custom override */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};