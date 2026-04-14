import React from 'react';

const navItems = [
  { label: 'lore', href: '#lore' },
  { label: 'work', href: '#work' },
  { label: 'writings', href: '#writings' },
  { label: 'reading', href: '#reading' },
];

export default function Navbar({ activeSection }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="flex items-center justify-center gap-6 md:gap-8 py-4 px-6 font-mono text-sm">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className={`transition-all duration-300 hover:text-primary ${
              activeSection === item.label
                ? 'text-primary underline underline-offset-4 decoration-primary/60'
                : 'text-muted-foreground'
            }`}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}