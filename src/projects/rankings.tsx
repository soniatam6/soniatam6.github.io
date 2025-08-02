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
            Coinbase Rankings Leaderboard
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            May - Aug 2024 · Associate Product Management Intern
          </p>

          {/* hero image */}
          <figure className="mt-8 overflow-hidden rounded-lg border border-[#D6D3CB] bg-white">
            <video
              src="/images/projects/rankings/rankings.mp4"
              controls
              preload="metadata"
              autoPlay muted loop
              className="w-full object-cover rounded-lg"
            > Sorry, your browser doesn't support embedded videos. </video>
          </figure>

          {/* placeholder sections */}
          <section className="mt-10 space-y-6 text-muted-foreground">
            <div className="space-y-2">
              <h2 className="text-3xl text-foreground">Overview</h2>
              <p>
                Coinbase International Exchange serves institutional market makers who are rewarded based on their trading volume, where their rewards are dependent
                on their rankings relative to other market makers. The rankings dashboard is a self-serve tool that allows market makers to view their current rankings,
                track their performance, and compare themselves against competitors, all of which helps them optimize their trading strategies.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-3xl text-foreground">My Role</h2>
              <p>
                I worked closely with sales, design, and engineering teams to define the product requirements,
                design the user experience, and lead the development of the rankings UI and API. Since our clients were 
                large institutions, the user research and understanding of user needs came directly from our sales representative 
                talking to different clients directly. This was one of my two projects during my internship, my other project
                being launching the trading UI for 50+ institutional clients.
              </p>
            </div>
          </section>
        </article>
      </main>

    </div>
  );
}
