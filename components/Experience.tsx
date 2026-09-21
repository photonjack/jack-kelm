import { experience } from "@/lib/content";

export function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-20 border-y border-border bg-card py-20 sm:py-24"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2
          id="experience-heading"
          className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
        >
          Experience
        </h2>
        <p className="mt-3 max-w-2xl text-muted">
          Hands-on automation engineering for manufacturing — from business cases
          to robot cell delivery and remote project leadership.
        </p>

        <ol className="mt-12 space-y-10">
          {experience.map((role) => (
            <li
              key={`${role.company}-${role.title}`}
              className="relative rounded-2xl border border-border bg-background p-6 sm:p-8"
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    {role.title}
                  </h3>
                  <p className="mt-1 text-accent font-medium">
                    {role.company}
                    <span className="text-muted font-normal">
                      {" "}
                      · {role.location}
                    </span>
                  </p>
                </div>
                <time className="text-sm font-medium text-steel shrink-0">
                  {role.period}
                </time>
              </div>
              <ul className="mt-6 space-y-4">
                {role.highlights.map((h) => (
                  <li
                    key={h.body.slice(0, 48)}
                    className="flex gap-3 text-muted leading-relaxed"
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                      aria-hidden
                    />
                    <span>
                      {h.title && (
                        <strong className="block text-foreground font-semibold mb-0.5">
                          {h.title}
                        </strong>
                      )}
                      {h.body}
                    </span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
