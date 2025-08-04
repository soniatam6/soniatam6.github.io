// src/projects/Rankings.tsx
import React from "react";
import { Link } from "react-router-dom";
import { Footer } from "@/components/Footer";

const linkCls =
  "underline decoration-dotted underline-offset-[3px] [text-decoration-thickness:1px] " +
  "text-muted-foreground decoration-stone-400 " +
  "hover:text-primary hover:decoration-stone-600 transition-colors";

export default function Localization() {
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
            Image Localization Tool
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Apr - Jun 2023 · Product Design & Product Management Intern
          </p>

          {/* hero image */}
          <figure className="mt-8 overflow-hidden rounded-lg border border-[#D6D3CB] bg-white">
            <video
              src="/images/projects/localization/localization-demo.mp4"
              controls
              preload="metadata"
              autoPlay muted loop
              className="w-full object-cover rounded-lg"
            > Sorry, your browser doesn't support embedded videos. </video>
          </figure>

          {/* placeholder sections */}
          <section className="mt-10 space-y-6 text-muted-foreground">
            <div className="space-y-2">
              <h2 className="text-2xl text-foreground">Overview</h2>
              <p>
                As the main designer for the Airwallex website revamp project, I was faced with the challenge of manually
                localizing over 1000+ design assets for 11 regions within 2 weeks under pressure from C-suite executives. Knowing that doing everything
                manually wouldn’t work, I led the initiative to build a localization automation tool to help with the process,
                leading a team of two other designers and a senior developer to build the tool.
              </p>
 
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl text-foreground">The Problem</h2>
              <p>
                One of the main challenges of the Airwallex website revamp project was the localization of images.
                For each of the 11 regions, designers previously had to manually do the following:
              </p>
              <ul className="list-disc pl-4">
                <li>Localize visuals in Figma</li>
                <li>Export, upload, and assign images in Contentful (CMS)</li>
                <li>Revise images and repeat for any changes</li>
                <li>Bulk update CMS assets directly from Figma</li>
              </ul>
              <p>As we were wrapping up the development of the website, we were facing a lot of stakeholder pressure from the CEO to launch the website, as he was about to attend a large investor event in 2 weeks and wanted to show the revamped website then. Waiting around 4-6 more weeks for manual localization was not an option — we needed a solution optimized for speed and accuracy.</p>
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl text-foreground">My Solution</h2>
              <p>
                As the primary user of the tool, I worked to define the requirements, design the backend solution, prioritize tasks, track interdependencies, oversee implementation, and manage stakeholder expectations.
                The localization automation tool is a Figma plugin with a few key functionalities:
              </p>
              <ul className="list-disc pl-4">
                <li>Generates localized designs with one click</li>
                <li>Translate all text to local languages using Applanga from Transperfect</li>
                <li>Bulk upload and assign images on CMS</li>
                <li>Bulk update CMS assets directly from Figma</li>
              </ul>
                           <div>
                <a
                  href="https://github.com/soniatam6/awx-localization"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-input border-stone-300 px-4 py-2 text-sm font-medium text-foreground transition"
                >
                  View GitHub Repo →
                </a>
              </div>
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl text-foreground">Results</h2>
              <p>
                With the help of this localization plugin, efficient project management, and a lot of hard work from the team, we managed to successfully launch the website within
                1 week turnaround, just in time for our CEO to show the website to investors and clients at an important conference.
                We continued to use this plugin to help us localize for the other regions, and successfully launched 11 regions in a span of 3 weeks.
                Here is the before and after effort estimates:
              </p>
              <div className="overflow-x-auto pb-4">
                <table className="min-w-full border-collapse text-sm leading-6">
                  <thead>
                    <tr className="font-semibold">
                      <th className="w-2/5 py-3 px-4 text-left"></th>
                      <th className="w-1/5 py-3 px-4 text-left">Before</th>
                      <th className="w-1/5 py-3 px-4 text-left">After</th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-stone-300">
                    <tr>
                      <th className="py-3 px-4 text-left font-medium">Asset localization</th>
                      <td className="py-3 px-4">4 + weeks</td>
                      <td className="py-3 px-4">4 hours</td>
                    </tr>

                    <tr>
                      <th className="py-3 px-4 text-left font-medium">Contentful uploading</th>
                      <td className="py-3 px-4 ">2 days</td>
                      <td className="py-3 px-4 ">1 hour</td>
                    </tr>

                    <tr>
                      <th className="py-3 px-4 text-left font-medium">
                        Contentful asset updates (per revision round)
                      </th>
                      <td className="py-3 px-4">1 week</td>
                      <td className="py-3 px-4">1 hour</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>... leading to a <strong>97%</strong> efficiency improvement!
              </p>
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl text-foreground">Reflection</h2>
              <p>
                This was a really challenging and rewarding experience that pushed me to achieve things I thought wasn't possible, given the circumstances. Some things I learned:
              </p>
              <ul className="list-disc pl-4">
                <li><strong>Interdependency tracking: </strong>
                  often times people’s time and efforts are lost when their work depends on someone else’s and they’re waiting on the other. As a product manager, I learned to maximize everyone’s time and energy by making sure they were not wasting their time and efforts</li>
                <li><strong>Prioritization: </strong>
                  with so much to do, so little time, and so much pressure from stakeholders, there was a constant need to prioritize which were the most worthwhile initiatives to dedicate effort into.</li>
                <li><strong>Leading by example: </strong>
                  as the main driver of this initiative, I realized how important it was to lead by example. If I wasn’t in the trenches with them, the team would not feel motivated to work with me. In that way, I learned how to gain respect from my team.</li>
              </ul>
            </div>
          </section>
        </article>
      </main>

    </div >
  );
}
