"use client";

import { useState } from "react";
import { projects, type Project } from "@/lib/content";

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section
      id="projects"
      className="scroll-mt-20 border-y border-border bg-card py-20 sm:py-24"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2
          id="projects-heading"
          className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
        >
          Projects
        </h2>
        <p className="mt-3 max-w-2xl text-muted">
          Selected automation and robotics work from manufacturing floors —
          robot cells, testing automation, and large-scale project delivery.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <button
              key={project.slug}
              type="button"
              onClick={() => setActive(project)}
              className="group overflow-hidden rounded-2xl border border-border bg-background text-left shadow-sm transition hover:border-accent/40 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-accent-soft">
                {project.image && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={project.image}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                  />
                )}
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-accent">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted line-clamp-3">
                  {project.description}
                </p>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-border px-2 py-0.5 text-xs font-medium text-steel"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </button>
          ))}
        </div>
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-foreground/50 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="lightbox-title"
          onClick={() => setActive(null)}
          onKeyDown={(e) => {
            if (e.key === "Escape") setActive(null);
          }}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-2xl overflow-auto rounded-2xl bg-card p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="absolute right-4 top-4 rounded-md p-2 text-muted hover:bg-accent-soft hover:text-accent"
              aria-label="Close"
              onClick={() => setActive(null)}
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            {active.image && (
              <div className="relative mb-4 aspect-video overflow-hidden rounded-xl bg-accent-soft">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={active.image}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            )}
            {active.video && (
              <video
                className="mb-4 w-full rounded-xl"
                controls
                src={active.video}
              >
                Your browser does not support the video tag.
              </video>
            )}
            <h3
              id="lightbox-title"
              className="font-display text-xl font-semibold text-foreground pr-10"
            >
              {active.title}
            </h3>
            <p className="mt-2 text-muted leading-relaxed">{active.description}</p>
          </div>
        </div>
      )}
    </section>
  );
}
