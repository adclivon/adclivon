/**
 * Central site configuration for Your Agency Name.
 * Brand name and contact details can easily be updated here.
 */

export const BRAND_CONFIG = {
  // Change this single constant to update your brand name throughout the entire application:
  brandName: "Your Agency Name",
  shortName: "Your Agency",
  legalEntityName: "Your Agency Name Digital LLC",
  tagline: "Strategic SEO, Quality Link Building & Editorial Guest Posting",
  metaDescription:
    "We help businesses improve organic visibility, strengthen backlink profiles, and attract qualified traffic through data-driven SEO, guest posting, and link insertion.",
  
  // Contact information placeholders
  contactEmail: "inquiries@youragencyname.com",
  editorialEmail: "editorial@youragencyname.com",
  phone: "+1 (800) 555-0199",
  address: "100 Montgomery Street, Suite 1400, San Francisco, CA 94104",
  workingHours: "Monday – Friday: 08:00 – 18:00 EST / GMT / AEST (Global Coverage)",
  
  // Primary target international markets
  targetMarkets: [
    { code: "US", name: "United States", flag: "🇺🇸" },
    { code: "UK", name: "United Kingdom", flag: "🇬🇧" },
    { code: "CA", name: "Canada", flag: "🇨🇦" },
    { code: "AU", name: "Australia", flag: "🇦🇺" },
    { code: "INTL", name: "Global International", flag: "🌐" },
  ],

  // Social media placeholders
  socials: {
    linkedin: "https://linkedin.com/company/youragencyname",
    twitter: "https://twitter.com/youragencyname",
    github: "https://github.com/youragencyname",
  },

  // Service pricing baseline estimate notice
  disclaimer:
    "We adhere strictly to ethical, high-quality search engine marketing practices. We do not provide or promise guaranteed rankings or artificial overnight traffic spikes.",
};

export const IMAGES = {
  heroAnalytics: "/src/assets/images/hero_seo_analytics_1792857552356.jpg",
  agencyWorkspace: "/src/assets/images/agency_seo_workspace_1792857552189.jpg",
  editorialWorkspace: "/src/assets/images/guest_posting_editorial_1792857552687.jpg",
};
