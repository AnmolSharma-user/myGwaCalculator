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
  ogImage = "https://mygwacalculator.com/images/gwa-calculator-preview.png",
  structuredData,
  faqData,
  toolType = "Calculator",
  toolCategory = "Educational",
  toolFeatures = [],
  toolBenefits = []
}: SEOHeadProps) => {
  const baseStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": title,
    "description": description,
    "url": canonicalUrl,
    "applicationCategory": toolCategory,
    "operatingSystem": "Any",
    "browserRequirements": "Requires JavaScript",
    "softwareVersion": "2.0",
    "dateCreated": "2024-01-01",
    "dateModified": new Date().toISOString().split('T')[0],
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "creator": {
      "@type": "Organization",
      "name": "GWA Calculator",
      "url": "https://mygwacalculator.com"
    },
    "audience": {
      "@type": "Audience",
      "audienceType": "Students"
    },
    "keywords": keywords,
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "usageInfo": "https://mygwacalculator.com/about",
    "mainEntity": {
      "@type": "SoftwareApplication",
      "name": title,
      "operatingSystem": "Web Browser",
      "applicationCategory": "Education",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "ratingCount": "1500"
      }
    }
  };

  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://mygwacalculator.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Tools",
        "item": "https://mygwacalculator.com/tools"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": title,
        "item": canonicalUrl
      }
    ]
  };

  // Fixed FAQ structured data with proper validation
  const faqStructuredData = faqData && faqData.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData
      .filter(faq => faq.question && faq.answer && faq.question.trim() !== '' && faq.answer.trim() !== '')
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
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="GWA Calculator" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:creator" content="@gwacalculator" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="author" content="GWA Calculator" />
      <meta name="application-name" content="GWA Calculator" />
      <meta name="theme-color" content="#1e40af" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="geo.region" content="Philippines" />
      <meta name="geo.country" content="PH" />
      <meta name="language" content="en" />
      <meta name="rating" content="general" />
      <meta name="distribution" content="global" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(baseStructuredData)}
      </script>
      
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbStructuredData)}
      </script>
      
      {/* FAQ Structured Data - Only render if valid data exists */}
      {faqStructuredData && faqStructuredData.mainEntity && faqStructuredData.mainEntity.length > 0 && (
        <script type="application/ld+json">
          {JSON.stringify(faqStructuredData)}
        </script>
      )}
      
      {/* Custom Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
      
      {/* Additional Meta Tags for Tools */}
      <meta name="tool-type" content={toolType} />
      <meta name="tool-category" content={toolCategory} />
      {toolFeatures.length > 0 && (
        <meta name="tool-features" content={toolFeatures.join(', ')} />
      )}
      {toolBenefits.length > 0 && (
        <meta name="tool-benefits" content={toolBenefits.join(', ')} />
      )}
      
      {/* Performance and Security */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="referrer" content="strict-origin-when-cross-origin" />
    </Helmet>
  );
};