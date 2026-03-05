import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title: string;
  description: string;
  keywords: string;
  canonicalUrl: string;
  ogImage?: string;
  // faqData and structuredData are kept for API compatibility but no longer used
  // to emit any schema — removes the root cause of "Duplicate field FAQPage" errors.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  structuredData?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  faqData?: any[];
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
}: SEOHeadProps) => {
  // Single, clean SoftwareApplication schema.
  // NO FAQPage is emitted here — ever.
  // Pages that need FAQPage rich results must declare their OWN
  // <Helmet><script type="application/ld+json">…FAQPage…</script></Helmet>
  // Having FAQPage in two places (here + a page Helmet) causes Google's
  // "Duplicate field FAQPage" critical structured-data error.
  const schema = {
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

      {/* Schema — SoftwareApplication ONLY */}
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};