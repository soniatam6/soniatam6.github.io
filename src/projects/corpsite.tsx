// src/projects/Rankings.tsx
import React from "react";
import { Link } from "react-router-dom";
import { Footer } from "@/components/Footer";
import LinkCard from "@/components/ui/link-card";
import preview from "@/data/linkPreviews.json";

const linkCls =
  "underline decoration-dotted underline-offset-[3px] [text-decoration-thickness:1px] " +
  "text-muted-foreground decoration-stone-400 " +
  "hover:text-primary hover:decoration-stone-600 transition-colors";

export default function Corpsite() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* main content */}
      <main className="mx-auto max-w-3xl">
        <article className="mx-auto max-w-3xl font-serif">
          {/* back link */}
          <Link to="/past-work" className={linkCls}>
            ← Back to projects
          </Link>

          {/* title + meta */}
          <h1 className="mt-6 text-4xl font-medium text-foreground">
            Revamping Airwallex's Site
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Aug 2022 - Jun 2023 · Product Design & Product Management Intern
          </p>

          <div className="mt-12 aspect-[16/9] w-full">
            <LinkCard
              url={preview.url}
              title={preview.title}
              description={preview.description}
              image={preview.image}
            />
          </div>

          {/* placeholder sections */}
          <section className="mt-10 space-y-6 text-muted-foreground">
            <div className="space-y-2">
              <h2 className="text-2xl text-foreground">Overview</h2>
              <p>
                Airwallex is a cross-border payments unicorn startup based in Asia. During my time there, they were scaling rapidly, expanding into the embedded finance space,
                and needed to revamp their corporate site to better reflect their product offerings and global presence.
              </p>
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl text-foreground">The Problem</h2>
              <p>
                Airwallex’s rapid scaling and its simultaneous rollout of 3 new embedded‑finance offerings made the existing
                corporate website feel outdated and unrepresentative. Externally, prospective customers and investors landing on a product page couldn’t immediately
                grasp what each product was, how it worked, or why it mattered. Internally, teams from product, marketing, and sales lacked a shared,
                consistent story to answer those very questions. The website revamp project therefore had to serve two goals: craft clear,
                persuasive landing pages that laid out the “what, how, and why” for users, while also aligning every stakeholder around a single,
                coherent narrative for these unfamiliar products.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl text-foreground">My Role</h2>
              <p>
                As product designer and product owner of the website, I led the revamp of Airwallex’s corporate site. This involved working iteratively with product, marketing, design, C-suite executives, and sales teams to define the product
                positioning for each of products, gradually building alignment across all stakeholders amidst the ambiguity. Through design, I translated these narratives into landing pages that clearly articulated the what, how, and why of each product.
                I also worked closely with the engineering team define the mobile designs, responsive behavior, content modeling, and design system. After months of work, I led the team to launch the revamped site localized to each of the 11 regions,
                just in time for our CEO and team to show it to investors and clients at the Money 20/20 conference.
              </p>
            </div>

            <h2 className="text-2xl text-foreground">Before: no alignment on narrative</h2>
            <figure className="overflow-hidden rounded-lg border">
              {/* TODO: replace io-diagram.jpg with your actual image */}
              <img
                src="/images/projects/corpsite/corpsite-before.svg"
                alt="Airwallex before the revamp"
                className="w-full object-cover"
              />
            </figure>
            <h2 className="text-2xl text-foreground">After: source of truth for company</h2>
            <figure className="overflow-hidden rounded-lg border">
              {/* TODO: replace io-diagram.jpg with your actual image */}
              <img
                src="/images/projects/corpsite/corpsite-after.svg"
                alt="Airwallex before the revamp"
                className="w-full object-cover"
              />
            </figure>
            <div className="space-y-2">
              <h2 className="text-2xl text-foreground">Reflection</h2>
              <p>This was the first project that really gave me a taste of what ownership, stakeholder management, navigating ambiguity truly meant.
                It was probably the most challenging yet rewarding project that I’ve been on so far, given I was taking on a lot of responsibility as just an intern.
                I was incredibly fortunate to be given this opportunity and to receive a lot of mentorship during my internship, and I grew and matured immensely
                both personally and professionally.</p>
            </div>
            <div>
              <p>Some of my key takeaways from this project include:</p>
              <ul className="list-disc pl-4">
                <li><p>importance of momentum in projects</p></li>
                <li><p>take small and iterative steps when navigating ambiguity and uncertainty</p></li>
                <li><p>process matters more, not results</p></li>
                <li><p>open and clear communication of expectations is key to teamwork</p></li>
                <li><p>design is not about pushing pixels and making things aesthetic</p></li>
              </ul>
            </div>
          </section>
        </article>
      </main>

    </div>
  );
}
