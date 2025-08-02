import { useState, useEffect } from "react";
import { X, Menu } from "lucide-react";

const navigationItems = [
  { id: "home", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "writing", label: "Writing" },
  { id: "music", label: "Music" },
];

interface MobileNavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export const MobileNavigation = ({
  activeSection,
  onSectionChange,
}: MobileNavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const handleSectionChange = (section: string) => {
    onSectionChange(section);
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile hamburger button */}
      <button
        onClick={() => setIsOpen(true)}
        className="sm:hidden fixed top-4 right-4 z-50 w-6 h-6 flex items-center justify-center text-foreground hover:text-primary transition-colors"
        aria-label="Open navigation menu"
      >
        <Menu size={24} />
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 sm:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-4/5 bg-background border-r border-border z-50 transform transition-transform duration-300 ease-in-out sm:hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <span className="font-serif text-lg font-medium text-foreground">Sonia Tam</span>
          <button
            onClick={() => setIsOpen(false)}
            className="w-6 h-6 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Close navigation menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Navigation items */}
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

          {/* Divider */}
          <div className="my-6 h-px bg-border" />

          {/* Footer links */}
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
    </>
  );
};