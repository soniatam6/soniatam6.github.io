import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

/* map pathname → nav id */
function pathToSection(path: string): string {
  if (path.startsWith("/past-work")) return "past-work";
  if (path.startsWith("/personal-projects")) return "personal-projects";
  if (path.startsWith("/writing")) return "writing";
  return "home";
}

export default function PortfolioLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const active = pathToSection(location.pathname);

  return (
    <div className="min-h-screen bg-background font-serif flex flex-col">
      {/* fixed nav */}
      <Navigation activeSection={active} onSectionChange={(id) => {
        const url = id === "home" ? "/" : `/${id}`;
        navigate(url);
      }} />

      {/* main content */}
      <main className="flex-1 md:ml-40 px-6 py-12">
        <div className="mx-auto w-full max-w-3xl">
          <Outlet />
        </div>
      </main>

      <Footer />
    </div>
  );
}
