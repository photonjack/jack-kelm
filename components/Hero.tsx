import { siteConfig } from "@/lib/content";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border bg-gradient-to-b from-accent-soft/60 via-background to-background pt-28 pb-20 sm:pt-36 sm:pb-28"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #1e4976 1px, transparent 1px), linear-gradient(to bottom, #1e4976 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="animate-fade-up text-sm font-semibold uppercase tracking-wider text-accent-light">
          {siteConfig.location} · Mechanical Engineer · CMSE®
        </p>
        <h1
          id="hero-heading"
          className="animate-fade-up delay-100 mt-3 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
        >
          {siteConfig.name}
          <span className="text-accent">, CMSE</span>
        </h1>
        <p className="animate-fade-up delay-200 mt-2 text-xl font-medium text-accent sm:text-2xl">
          {siteConfig.title}
        </p>
        <p className="animate-fade-up delay-300 mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          {siteConfig.tagline}
        </p>
        <div className="animate-fade-up delay-300 mt-10 flex flex-wrap gap-3">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-accent-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Get in touch
          </a>
          <a
            href={siteConfig.resumePdf}
            download
            className="inline-flex items-center justify-center rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground shadow-sm transition hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Download resume
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground shadow-sm transition hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
