import React from "react";
import { Link } from "react-router-dom";
import projects from "@/data/projects";

const linkCls =
  "underline decoration-dotted underline-offset-[3px] [text-decoration-thickness:1px] " +
  "text-muted-foreground decoration-stone-400 " +
  "hover:text-primary hover:decoration-stone-600 transition-colors";

export function PastWork() {
  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="mb-10 text-3xl font-serif font-medium text-foreground">
        Projects
      </h1>

      <p className="font-serif text-muted-foreground mb-10">
        A selection of my past work, including projects from my
        internships and personal projects. 
      </p>

      <div id="past-work" className="grid gap-8 sm:gap-10 sm:grid-cols-2">
        {projects.map((p) => (
          <article key={p.slug} className="group">
            <Link to={`/past-work/${p.slug}`} className="block">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-[#D6D3CB] bg-white">
                <img
                  src={p.imageSrc}
                  alt={p.imageAlt}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
            </Link>

            <header className="mt-4">
              <h2 className="text-lg font-serif text-foreground">
                <Link
                  to={`/past-work/${p.slug}`}
                  className="no-underline hover:text-primary transition-colors"
                >
                  {p.title}
                </Link>
              </h2>
              {(p.year || p.role) && (
                <p className="text-sm text-muted-foreground">
                  {[p.year, p.role].filter(Boolean).join(" · ")}
                </p>
              )}
            </header>

            <p className="mt-3 text-muted-foreground">{p.blurb}</p>

            {p.links && p.links.length > 0 && (
              <ul className="mt-3 space-y-1">
                {p.links.map((l) =>
                  l.href.startsWith("/projects/") ? (
                    <li key={l.label}>
                      <Link to={l.href} className={linkCls}>
                        {l.label}
                      </Link>
                    </li>
                  ) : (
                    <li key={l.label}>
                      <a href={l.href} target="_blank" rel="noreferrer" className={linkCls}>
                        {l.label}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
