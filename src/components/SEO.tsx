import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = "Muhammad Asadullah - Software Developer & Full Stack Specialist",
  description = "Software Developer specializing in Full Stack Development with expertise in Web Technologies.",
  canonicalUrl = "https://portfolio.com",
  ogImage = "https://portfolio.com/og-image.jpg",
  ogType = "website"
}) => {
  const siteTitle = "Muhammad Asadullah - Portfolio";
  const fullTitle = title === siteTitle ? title : `${title} | ${siteTitle}`;

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Muhammad Asadullah Portfolio" />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Additional SEO Tags */}
      <meta name="keywords" content="software developer, full stack developer, web developer, Pakistan, React, Node.js, portfolio" />
      <meta name="author" content="Muhammad Asadullah" />
      <meta name="robots" content="index, follow" />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Muhammad Asadullah",
            "jobTitle": "Software Developer",
            "url": "https://portfolio.com",
            "sameAs": [
              "https://github.com",
              "https://linkedin.com"
            ],
            "knowsAbout": [
              "Web Development",
              "Full Stack Development",
              "Database Systems",
              "Software Engineering",
              "React.js",
              "Node.js",
              "TypeScript"
            ],
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Pakistan",
              "addressCountry": "PK"
            }
          })
        }}
      />
    </Head>
  );
};

export default SEO;
