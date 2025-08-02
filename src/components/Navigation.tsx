import { useState, useEffect } from "react";
import { X, Menu } from "lucide-react";

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
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileOpen]);

  // Close on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileOpen(false);
      }
    };

    if (isMobileOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMobileOpen]);

  const handleSectionChange = (section: string) => {
    onSectionChange(section);
    setIsMobileOpen(false);
  };

  return (
    <>
      {/* Mobile hamburger button */}
      <button
        onClick={() => setIsMobileOpen(true)}
        className="sm:hidden fixed top-4 right-4 z-50 w-6 h-6 flex items-center justify-center text-foreground hover:text-primary transition-colors"
        aria-label="Open navigation menu"
      >
        <Menu size={24} />
      </button>

      {/* Mobile backdrop */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 sm:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Mobile drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-4/5 bg-background border-r border-border z-50 transform transition-transform duration-300 ease-in-out sm:hidden ${
          isMobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Mobile drawer header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <span className="font-serif text-lg font-medium text-foreground">Sonia Tam</span>
          <button
            onClick={() => setIsMobileOpen(false)}
            className="w-6 h-6 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Close navigation menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Mobile navigation items */}
        <nav className="p-4">
          <ul className="space-y-4">
            {navigationItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleSectionChange(item.id)}
                  className={`w-full text-left font-serif text-lg leading-relaxed transition-colors ${
                    activeSection === item.id
                      ? "text-primary font-medium"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile divider */}
          <div className="my-6 h-px bg-border" />

          {/* Mobile footer links */}
          <ul className="space-y-4">
            <li>
              <a
                href="mailto:soniatam6@gmail.com"
                className="block font-serif text-lg leading-relaxed text-muted-foreground hover:text-primary transition-colors"
              >
                Email
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/sonia-tam/"
                target="_blank"
                rel="noreferrer"
                className="block font-serif text-lg leading-relaxed text-muted-foreground hover:text-primary transition-colors"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://substack.com/@sotam"
                target="_blank"
                rel="noreferrer"
                className="block font-serif text-lg leading-relaxed text-muted-foreground hover:text-primary transition-colors"
              >
                Substack
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Desktop navigation */}
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

        {/* Desktop divider */}
        <div className="my-6 h-px bg-[#D6D3CB] dark:bg-[#6B6A66]" />

        {/* Desktop footer links */}
        <ul className="space-y-1 font-serif">
          <li>
            <a
              href="mailto:soniatam6@gmail.com"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
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
    </>
  );
};
