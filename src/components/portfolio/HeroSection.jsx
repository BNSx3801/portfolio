import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

const socialLinks = [
  { label: 'substack', href: 'https://bnsx3801.substack.com/' },
  { label: 'twitter', href: 'https://x.com/BNSx3801/' },
  { label: 'linkedin', href: 'https://linkedin.com/in/BNSx3801/' },
  { label: 'email', href: 'mailto:work.bnsingh@gmail.com' },
];

export default function HeroSection() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Initialize from current state of <html> class
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.remove('dark');
    } else {
      html.classList.add('dark');
    }
    setIsDark(!isDark);
  };

  return (
    <section id="lore" className="pt-20 pb-12">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-4">
        <h1 className="font-serif text-5xl md:text-6xl text-foreground tracking-tight">
          BNS.
        </h1>
        <div className="flex items-center flex-wrap gap-x-5 gap-y-2 font-mono text-sm text-muted-foreground">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://cal.com/bnsx3801/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="px-2.5 py-0.5 border border-border rounded hover:border-primary hover:text-primary transition-all duration-300"
          >
            cal
          </a>
          <button onClick={toggleTheme} className="hover:text-primary transition-colors duration-300">
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>
      </div>

      <div className="font-mono text-sm leading-7 text-foreground max-w-[640px] space-y-4">
        <p>
          hi, i am Bal Narayan Singh — or BNS if you know me. if i've gone quiet on all platforms and you can't find me, i'm probably in the trenches somewhere, reading through 18 research papers and figuring out how your protocol doesn't die.
        </p>
        <p>
          my raw thoughts go on twitter, half-finished frameworks rot in notion, and anything fully-furnished ends up on substack. this place is everything in between.
        </p>
        <p>
          but i spend a lot of time thinking about systems — infrastructure, developer tooling, why some ecosystems compound and others quietly die — and none of that fits cleanly anywhere. so maybe this is where the connective tissue lives.
        </p>
        <p>
          anyway, you're still reading this. go poke around, something here was probably worth the visit.
        </p>
      </div>
    </section>
  );
}