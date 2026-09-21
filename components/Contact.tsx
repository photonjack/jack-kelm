"use client";

import { FormEvent, useState } from "react";
import { siteConfig } from "@/lib/content";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");
    const subject = encodeURIComponent(`Website inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
    form.reset();
  }

  return (
    <section
      id="contact"
      className="scroll-mt-20 border-t border-border bg-card py-20 sm:py-24"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2
          id="contact-heading"
          className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
        >
          Contact
        </h2>
        <p className="mt-3 max-w-2xl text-muted">
          Open to automation engineering roles and manufacturing automation
          consulting. Reach out by email, phone, or the form below.
        </p>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-3 rounded-xl border border-border bg-background px-4 py-3 text-foreground transition hover:border-accent hover:text-accent"
            >
              <span className="text-sm font-medium text-steel w-16">Email</span>
              <span className="font-medium">{siteConfig.email}</span>
            </a>
            <a
              href={siteConfig.phoneHref}
              className="flex items-center gap-3 rounded-xl border border-border bg-background px-4 py-3 text-foreground transition hover:border-accent hover:text-accent"
            >
              <span className="text-sm font-medium text-steel w-16">Phone</span>
              <span className="font-medium">{siteConfig.phone}</span>
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-border bg-background px-4 py-3 text-foreground transition hover:border-accent hover:text-accent"
            >
              <span className="text-sm font-medium text-steel w-16">
                LinkedIn
              </span>
              <span className="font-medium">linkedin.com/in/jack-kelm</span>
            </a>
            <p className="pt-2 text-sm text-muted">
              Based in {siteConfig.location} · Cleveland–Akron area
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-border bg-background p-6 sm:p-8"
            noValidate={false}
          >
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className="mt-1.5 w-full rounded-lg border border-border bg-card px-3 py-2 text-foreground shadow-sm outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="mt-1.5 w-full rounded-lg border border-border bg-card px-3 py-2 text-foreground shadow-sm outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="mt-1.5 w-full rounded-lg border border-border bg-card px-3 py-2 text-foreground shadow-sm outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-accent-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:w-auto"
              >
                Send message
              </button>
              {status === "sent" && (
                <p className="text-sm text-accent" role="status">
                  Opening your email client…
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
