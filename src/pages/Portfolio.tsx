import { useState } from "react";
import { Navigation } from "@/components/Navigation";
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
      {/* fixed left nav */}
      <Navigation
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />

      {/* mobile selector */}
      <div className="md:hidden fixed top-4 left-4 right-4 z-20">
        <div className="bg-background/80 backdrop-blur-sm border border-border rounded-lg p-2">
          <select
            value={activeSection}
            onChange={(e) => setActiveSection(e.target.value as SectionId)}
            className="w-full bg-transparent font-serif text-sm focus:outline-none"
          >
            {navigationItems.map((item) => (
              <option key={item.id} value={item.id}>
                {item.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* main content */}
      <main className="flex-1 md:ml-40 px-6 py-12">
        <div className="mx-auto w-full max-w-3xl">{renderSection()}</div>
      </main>

      {/* site footer */}
      <Footer />
    </div>
  );
};

export default Portfolio;
