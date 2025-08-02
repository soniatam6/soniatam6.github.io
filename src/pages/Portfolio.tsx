import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { MobileNavigation } from "@/components/MobileNavigation";
import { Home } from "@/components/sections/Home";
import { Projects } from "@/components/sections/Projects";
import { Writing } from "@/components/sections/Writing";
import { Music } from "@/components/sections/Music";
import { Footer } from "@/components/Footer";

const navigationItems = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "writing", label: "Writing" },
  { id: "music", label: "Music" },
] as const;

type SectionId = (typeof navigationItems)[number]["id"];

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState<SectionId>("home");

  const renderSection = () => {
    switch (activeSection) {
      case "home":
        return <Home />;
      case "projects":
        return <Projects />;
      case "writing":
        return <Writing />;
      case "music":
        return <Music />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-background font-serif flex flex-col">
      {/* Desktop navigation */}
      <Navigation
        activeSection={activeSection}
        onSectionChange={(section) => setActiveSection(section as SectionId)}
      />

      {/* Mobile navigation */}
      <MobileNavigation
        activeSection={activeSection}
        onSectionChange={(section) => setActiveSection(section as SectionId)}
      />

      {/* main content */}
      <main className="flex-1 sm:ml-40 px-4 sm:px-6 py-12 pt-16 sm:pt-12">
        <div className="mx-auto w-full max-w-3xl">{renderSection()}</div>
      </main>

      {/* site footer */}
      <Footer />
    </div>
  );
};

export default Portfolio;
