import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { Home } from '@/components/sections/Home';
import { PastWork } from '@/components/sections/PastWork';
import { PersonalProjects } from '@/components/sections/PersonalProjects';
import { Writing } from '@/components/sections/Writing';
import { ThingsILove } from '@/components/sections/ThingsILove';
import { ThingsImCuriousAbout } from '@/components/sections/ThingsImCuriousAbout';
import { ThingsIReadWatch } from '@/components/sections/ThingsIReadWatch';

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
      
      <main className="ml-64 mr-8 py-16 px-8">
        <div className="max-w-4xl">
          {renderSection()}
        </div>
      </main>
    </div>
  );
};

export default Portfolio;