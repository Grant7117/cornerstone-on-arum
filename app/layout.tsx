import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Cornerstone on Arum | Boutique Apartments in Table View",
  description: "Premium 1 and 2 bedroom apartments from R1.5m. Secure, modern living in Table View. Direct from developer.",
  alternates: { canonical: "https://www.cornerstoneonarum.co.za/" },
  openGraph: {
    type: "website",
    url: "https://www.cornerstoneonarum.co.za/",
    title: "Cornerstone on Arum | Boutique Apartments in Table View",
    description: "Premium 1 and 2 bedroom apartments from R1.5m. Secure, modern living in Table View.",
    images: ["https://www.cornerstoneonarum.co.za/og-image.jpg"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Cornerstone on Arum | Boutique Apartments in Table View",
    description: "Premium 1 and 2 bedroom apartments from R1.5m. Direct from developer.",
    images: ["https://www.cornerstoneonarum.co.za/og-image.jpg"]
  },
  robots: { index: true, follow: true }
};
cd /d C:\Projects\v0-intelligent-chatbot-for-property

git add app/layout.tsx
git commit -m "SEO: add meta, OG, Twitter, canonical, and JSON-LD to layout" || echo Nothing to commit.
git push

timeout /t 25 /nobreak >nul
start "" https://www.cornerstoneonarum.co.za/
start "" https://www.cornerstoneonarum.co.za/sitemap.xml
start "" https://www.cornerstoneonarum.co.za/robots.txt
start "" "https://search.google.com/test/rich-results?url=https://www.cornerstoneonarum.co.za/"
start "" "https://developers.facebook.com/tools/debug/?q=https://www.cornerstoneonarum.co.za/"
start "" "https://cards-dev.twitter.com/validator"

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ApartmentComplex",
  "name": "Cornerstone on Arum",
  "url": "https://www.cornerstoneonarum.co.za",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "154 Arum Road, Table View",
    "addressLocality": "Cape Town",
    "addressRegion": "Western Cape",
    "addressCountry": "South Africa"
  },
  "numberOfUnits": 22,
  "petsAllowed": true,
  "amenityFeature": [
    {"@type": "LocationFeatureSpecification", "name": "Secure Parking", "value": true},
    {"@type": "LocationFeatureSpecification", "name": "Fibre Ready", "value": true}
  ]
}
</script>

