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
  const activeIndex = navigationItems.findIndex(item => item.id === activeSection);
  
  return (
    <nav className="fixed left-8 top-1/2 transform -translate-y-1/2 z-10">
      <div className="relative">
        {/* Animated dot */}
        <div 
          className="absolute left-0 w-2 h-2 bg-primary rounded-full transition-transform duration-300 ease-out"
          style={{ 
            transform: `translateY(${activeIndex * 40 + 6}px)`,
            left: '-12px'
          }}
        />
        
        <ul className="space-y-2">
          {navigationItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => onSectionChange(item.id)}
                className={`text-left font-serif transition-colors duration-200 hover:text-primary pl-4 ${
                  activeSection === item.id 
                    ? 'text-primary font-medium' 
                    : 'text-muted-foreground'
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};