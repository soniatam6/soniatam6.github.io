import { useState } from 'react';

const navigationItems = [
  { id: 'home', label: 'Home' },
  { id: 'past-work', label: 'Past Work' },
  { id: 'personal-projects', label: 'Personal Projects' },
  { id: 'writing', label: 'Writing' },
  { id: 'things-i-love', label: 'Things I Love' },
  { id: 'things-im-curious-about', label: "Things I'm Curious About" },
  { id: 'things-i-read-watch', label: 'Things I Read/Watch' },
];

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export const Navigation = ({ activeSection, onSectionChange }: NavigationProps) => {
  return (
    <nav className="fixed left-4 md:left-8 top-1/2 transform -translate-y-1/2 z-10 hidden md:block">
      <ul className="space-y-2">
        {navigationItems.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => onSectionChange(item.id)}
              className={`text-left font-serif transition-colors duration-200 hover:text-primary flex items-center gap-2 ${
                activeSection === item.id 
                  ? 'text-primary font-medium' 
                  : 'text-muted-foreground'
              }`}
            >
              <span className={`w-1 h-1 rounded-full transition-all duration-200 ${
                activeSection === item.id ? 'bg-primary' : 'bg-transparent'
              }`} />
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};