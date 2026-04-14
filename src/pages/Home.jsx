import React, { useState, useEffect } from 'react';
import Navbar from '../components/portfolio/Navbar';
import HeroSection from '../components/portfolio/HeroSection';
import WorkSection from '../components/portfolio/WorkSection';
import WritingsSection from '../components/portfolio/WritingsSection';
import ReadingSection from '../components/portfolio/ReadingSection';
import ScrollingImages from '../components/portfolio/ScrollingImages';

export default function Home() {
  const [activeSection, setActiveSection] = useState('lore');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['lore', 'work', 'writings', 'reading'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom > 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar activeSection={activeSection} />

      <div className="flex">
        {/* Main content - left side */}
        <main className="w-full lg:w-[65%] xl:w-[60%] px-6 md:px-12 lg:px-16 xl:px-20">
          <HeroSection />
          <WorkSection />
          <WritingsSection />
          <ReadingSection />
        </main>

        {/* Scrolling images - right side, desktop only */}
        <aside className="hidden lg:block lg:w-[35%] xl:w-[40%] fixed top-0 right-0 h-screen">
          <ScrollingImages />
        </aside>
      </div>
    </div>
  );
}