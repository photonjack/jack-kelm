import { certifications, education } from "@/lib/content";

export function Education() {
  return (
    <section
      id="education"
      className="scroll-mt-20 py-20 sm:py-24"
      aria-labelledby="education-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2
          id="education-heading"
          className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
        >
          Education & Certifications
        </h2>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <article className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent-light">
              Education
            </p>
            <h3 className="mt-2 font-display text-xl font-semibold text-foreground">
              {education.degree}
            </h3>
            <p className="mt-2 text-accent font-medium">{education.school}</p>
            <p className="mt-1 text-sm text-muted">
              {education.location} · Graduated {education.graduated}
            </p>
          </article>

          <article className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent-light">
              Certifications & Awards
            </p>
            <ul className="mt-4 space-y-5">
              {certifications.map((cert) => (
                <li key={cert.title} className="flex gap-3 text-muted leading-relaxed">
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                    aria-hidden
                  />
                  <div>
                    <span className="font-semibold text-foreground">
                      {cert.href ? (
                        <a
                          href={cert.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-accent underline-offset-2 hover:underline"
                        >
                          {cert.title}
                        </a>
                      ) : (
                        cert.title
                      )}
                    </span>
                    {cert.detail && (
                      <p className="mt-1 text-sm text-muted">{cert.detail}</p>
                    )}
                    {cert.href && (
                      <a
                        href={cert.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1.5 inline-block text-sm font-medium text-accent hover:underline"
                      >
                        View certificate (PDF)
                      </a>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
