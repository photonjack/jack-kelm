import Image from "next/image";
import { about, siteConfig } from "@/lib/content";

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 py-20 sm:py-24"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto grid max-w-6xl items-start gap-12 px-4 sm:px-6 lg:grid-cols-[280px_1fr] lg:px-8">
        <div className="mx-auto w-full max-w-[280px]">
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-md">
            <Image
              src="/headshot.jpg"
              alt={`${siteConfig.name}, ${siteConfig.title}`}
              width={560}
              height={560}
              className="aspect-square h-auto w-full object-cover"
              priority
            />
          </div>
        </div>
        <div>
          <h2
            id="about-heading"
            className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            About
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted sm:text-lg">
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
