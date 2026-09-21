import { buildFaqJsonLd, buildPersonJsonLd } from "@/lib/seo";

export function JsonLd() {
  const person = buildPersonJsonLd();
  const faq = buildFaqJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />
    </>
  );
}
