import { faqs } from "@/lib/content";

export function FAQ() {
  return (
    <section
      id="faq"
      className="scroll-mt-20 border-t border-border bg-background py-20 sm:py-24"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2
          id="faq-heading"
          className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
        >
          FAQ
        </h2>
        <p className="mt-3 max-w-2xl text-muted">
          Common questions about Jack Kelm&apos;s automation and robotics
          background.
        </p>

        <dl className="mt-12 space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <dt className="font-display text-lg font-semibold text-foreground">
                {faq.question}
              </dt>
              <dd className="mt-2 text-muted leading-relaxed">{faq.answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
