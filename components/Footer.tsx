import { siteConfig } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-foreground text-slate-300">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div>
          <p className="font-display text-lg font-semibold text-white">
            {siteConfig.name}
          </p>
          <p className="mt-1 text-sm">
            {siteConfig.title} · {siteConfig.location}
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm">
          <a
            href={`mailto:${siteConfig.email}`}
            className="hover:text-white transition"
          >
            Email
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            LinkedIn
          </a>
          <a href={siteConfig.resumePdf} download className="hover:text-white transition">
            Resume PDF
          </a>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-4 py-4 text-xs text-slate-400 sm:px-6 lg:px-8">
          © {year} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
