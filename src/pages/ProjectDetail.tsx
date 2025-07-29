// src/pages/ProjectDetail.tsx
import React, { lazy, Suspense } from "react";
import { useParams } from "react-router-dom";
import { projects } from "@/data/projects";
import { Footer } from "@/components/Footer";

/* -----------------------------------------------------------
   Map each project slug → its detailed React component file.
   Create one .tsx file in src/projects/ for every slug listed.
----------------------------------------------------------- */
const loaders: Record<string, () => Promise<{ default: React.ComponentType }>> = {
  rankings: () => import("@/projects/rankings"),
  corpsite: () => import("@/projects/corpsite"),
  localization: () => import("@/projects/localization"),
  plugin: () => import("@/projects/copy-plugin"),
  search: () => import("@/projects/search"),
};

/* fallback styling */
const Wrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen flex flex-col font-serif">
    <main className="flex-1 md:ml-40 px-6 py-24 text-foreground">
      <div className="mx-auto max-w-3xl">{children}</div>
    </main>
    <Footer />
  </div>
);

export default function ProjectDetail() {
  const { slug = "" } = useParams<{ slug: string }>();
  const loadComponent = loaders[slug];
  const projectExists = projects.some((p) => p.slug === slug);

  if (!loadComponent || !projectExists) {
    return (
      <Wrapper>
        <h1 className="text-2xl mb-4">Project not found</h1>
        <p className="text-muted-foreground">
          The project you’re looking for doesn’t exist.
        </p>
      </Wrapper>
    );
  }

  const ProjectComponent = lazy(loadComponent);

  return (
    <Suspense
      fallback={
        <Wrapper>
          <p className="text-muted-foreground">Loading…</p>
        </Wrapper>
      }
    >
      <ProjectComponent />
    </Suspense>
  );
}
