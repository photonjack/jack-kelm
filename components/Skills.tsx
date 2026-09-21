import { skills } from "@/lib/content";

export function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-20 py-20 sm:py-24"
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2
          id="skills-heading"
          className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
        >
          Skills
        </h2>
        <p className="mt-3 max-w-2xl text-muted">
          Robotics platforms, computer vision, CAD, additive manufacturing, and
          industrial safety — tools for building reliable automation.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => (
            <article
              key={group.name}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:border-accent/40 hover:shadow-md"
            >
              <h3 className="font-display text-lg font-semibold text-accent">
                {group.name}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full bg-accent-soft px-3 py-1 text-sm font-medium text-accent"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
