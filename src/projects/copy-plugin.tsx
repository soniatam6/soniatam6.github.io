// src/projects/Rankings.tsx
import React from "react";
import { Link } from "react-router-dom";
import { Footer } from "@/components/Footer";

const linkCls =
  "underline decoration-dotted underline-offset-[3px] [text-decoration-thickness:1px] " +
  "text-muted-foreground decoration-stone-400 " +
  "hover:text-primary hover:decoration-stone-600 transition-colors";

export default function Rankings() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* main content */}
      <main className="mx-auto max-w-3xl">
        <article className="mx-auto max-w-3xl font-serif">
          {/* back link */}
          <Link to="/projects" className={linkCls}>
            ← Back to projects
          </Link>

          {/* title + meta */}
          <h1 className="mt-6 text-4xl font-medium text-foreground">
            AI copy suggestion Figma plugin
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Jun - Aug 2023 · Product Management Intern
          </p>

          {/* hero image */}
          <figure className="mt-8 overflow-hidden rounded-lg border border-[#D6D3CB] bg-white">
            <video
              src="/images/projects/plugin/demo.mp4"
              controls
              preload="metadata"
              autoPlay muted loop
              className="w-full object-cover rounded-lg"
            > Sorry, your browser doesn't support embedded videos. </video>
          </figure>

          {/* placeholder sections */}
          <section className="mt-10 space-y-6 text-muted-foreground">
            <div className="space-y-2">
              <h2 className="text-2xl text-foreground">The Problem</h2>
              <p>
                Airwallex's design team was rapidly growing, and it was getting harder to keep the copy consistent across all design files. There was an existing
                content guidelines formed by the marketing and design team, but it was hard to get designers to follow it. The copy plugin was built to help designers
                improve their copy based on the content guidelines, and to help them write better copy faster.
              </p>
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl text-foreground">The Solution</h2>
              <p>
                Along with a software engineer, I built a proof‑of‑concept copy suggestion Figma plugin that reads the content guidelines,
                calls GPT behind the scenes, and flags any text in a design that doesn’t comply. For every finding it shows the guideline it violated,
                offers a one‑click “before / after” suggestion, lets designers bulk‑apply fixes, and captures down‑votes with a reason.
                Those rejections are sent to Splunk so the design team can spot unclear rules and work together to refine the guidelines.
              </p>
            </div>
          </section>
        </article>
      </main>

    </div>
  );
}
