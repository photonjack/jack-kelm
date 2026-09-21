import {
  allKnowsAbout,
  education,
  faqs,
  siteConfig,
} from "./content";

export function buildPersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: siteConfig.name,
      jobTitle: siteConfig.title,
      email: siteConfig.email,
      telephone: siteConfig.phone,
      url: siteConfig.siteUrl,
      image: `${siteConfig.siteUrl}/headshot.jpg`,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Northfield",
        addressRegion: "OH",
        addressCountry: "US",
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: education.school,
      },
      knowsAbout: allKnowsAbout,
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        name: "CMSE® - Certified Machinery Safety Expert",
        credentialCategory: "Professional Certification",
        recognizedBy: {
          "@type": "Organization",
          name: "TÜV NORD CERT GmbH",
        },
        url: `${siteConfig.siteUrl}/cmse-certificate.pdf`,
      },
      sameAs: [siteConfig.linkedin],
      description: siteConfig.tagline,
    },
  };
}

export function buildFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export const defaultMetadata = {
  title: {
    default: `${siteConfig.name} | ${siteConfig.title} — Ohio`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Jack Kelm, CMSE is an automation engineer in Northfield, OH with 9 years at Parker Hannifin. Certified Machinery Safety Expert (TÜV NORD), robotics (ABB, Fanuc, Kuka, UR), and manufacturing automation consulting.",
  keywords: [
    "automation engineer Ohio",
    "robotics engineer Cleveland",
    "CMSE Certified Machinery Safety Expert",
    "Jack Kelm CMSE",
    "ABB Fanuc Kuka automation",
    "manufacturing automation consulting",
    "additive manufacturing engineer",
    "robot cell design",
    "RIA R15.06",
    "machinery safety expert",
    "Parker Hannifin automation",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  metadataBase: new URL(siteConfig.siteUrl),
  openGraph: {
    type: "profile" as const,
    locale: "en_US",
    url: siteConfig.siteUrl,
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description: siteConfig.tagline,
    siteName: siteConfig.name,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — ${siteConfig.title}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description: siteConfig.tagline,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteConfig.siteUrl,
  },
};
