import { useState } from "react";

const navigationItems = [
  { id: "home", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "writing", label: "Writing" },
  { id: "music", label: "Music" },
];

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const linkCls =
  "text-muted-foreground hover:text-primary transition-colors duration-200";

export const Navigation = ({
  activeSection,
  onSectionChange,
}: NavigationProps) => {
  return (
    <nav className="fixed left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 hidden sm:block">
      <ul className="space-y-2">
        {navigationItems.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => onSectionChange(item.id)}
              className={`text-left font-serif transition-colors duration-200 hover:text-primary flex items-center gap-2 ${
                activeSection === item.id
                  ? "text-primary font-medium"
                  : "text-muted-foreground"
              }`}
            >
              <span
                className={`w-1 h-1 rounded-full transition-all duration-200 ${
                  activeSection === item.id ? "bg-primary" : "bg-transparent"
                }`}
              />
              {item.label}
            </button>
          </li>
        ))}
      </ul>

{/* thin, faint divider */}
<div className="my-6 h-px bg-[#D6D3CB] dark:bg-[#6B6A66]" />

<ul className="space-y-1 font-serif">
  <li>
    <a
      href="mailto:soniatam6@gmail.com"
      className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
    >
      {/* placeholder dot to match nav offset */}
      <span className="w-1 h-1 rounded-full bg-transparent" />
      Email
    </a>
  </li>
  <li>
    <a
      href="https://www.linkedin.com/in/sonia-tam/"
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
    >
      <span className="w-1 h-1 rounded-full bg-transparent" />
      LinkedIn
    </a>
  </li>
  <li>
    <a
      href="https://substack.com/@sotam"
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
    >
      <span className="w-1 h-1 rounded-full bg-transparent" />
      Substack
    </a>
  </li>
</ul>

    </nav>
  );
};
