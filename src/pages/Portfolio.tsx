import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { Home } from '@/components/sections/Home';
import { PastWork } from '@/components/sections/PastWork';
import { PersonalProjects } from '@/components/sections/PersonalProjects';
import { Writing } from '@/components/sections/Writing';
import { ThingsILove } from '@/components/sections/ThingsILove';
import { ThingsImCuriousAbout } from '@/components/sections/ThingsImCuriousAbout';
import { ThingsIReadWatch } from '@/components/sections/ThingsIReadWatch';

const navigationItems = [
  { id: 'home', label: 'Home' },
  { id: 'past-work', label: 'Past Work' },
  { id: 'personal-projects', label: 'Personal Projects' },
  { id: 'writing', label: 'Writing' },
  { id: 'things-i-love', label: 'Things I Love' },
  { id: 'things-im-curious-about', label: "Things I'm Curious About" },
  { id: 'things-i-read-watch', label: 'Things I Read/Watch' },
];

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Home />;
      case 'past-work':
        return <PastWork />;
      case 'personal-projects':
        return <PersonalProjects />;
      case 'writing':
        return <Writing />;
      case 'things-i-love':
        return <ThingsILove />;
      case 'things-im-curious-about':
        return <ThingsImCuriousAbout />;
      case 'things-i-read-watch':
        return <ThingsIReadWatch />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-background font-serif">
      <Navigation 
        activeSection={activeSection} 
        onSectionChange={setActiveSection} 
      />
      
      {/* Mobile Navigation */}
      <div className="md:hidden fixed top-4 left-4 right-4 z-20">
        <div className="bg-background/80 backdrop-blur-sm border border-border rounded-lg p-2">
          <select 
            value={activeSection}
            onChange={(e) => setActiveSection(e.target.value)}
            className="w-full bg-transparent font-serif text-sm focus:outline-none"
          >
            {navigationItems.map((item) => (
              <option key={item.id} value={item.id}>{item.label}</option>
            ))}
          </select>
        </div>
      </div>
      
      <main className="md:ml-64 px-4 md:px-8 py-16 md:py-16 pt-20 md:pt-16">
        <div className="max-w-4xl">
          {renderSection()}
        </div>
      </main>
    </div>
  );
};

export default Portfolio;