import React from 'react';

const readings = [
  {
    title: 'the sublime art of doing things alone',
    author: 'chloe belle',
    note: 'solitude as style, independence as indulgence.',
  },
  {
    title: 'the nature of the firm',
    author: 'R. H. Coase',
    note: 'the paradox. in a world of markets, we built islands of control.',
  },
  {
    title: 'what is inference engineering',
    author: 'Gergely Orosz',
    note: 'training is the headline. inference is the business.',
  },
  {
    title: 'Beyond Logic and Emotion: Noetic Intuition as the Master Cognitive System',
    author: 'Illimitable Man (IM)',
    note: 'the leap. what can\'t be reasoned can still be known.',
  },
];

export default function ReadingSection() {
  return (
    <section id="reading" className="py-12 pb-24">
      <div className="border-t border-border pt-12">
        <h2 className="font-serif text-xl text-foreground italic mb-8">reading</h2>
        <div className="space-y-5">
          {readings.map((book, i) => (
            <div key={i} className="group">
              <div className="flex items-baseline gap-2 mb-0.5">
                <h3 className="font-mono text-sm text-foreground">
                  {book.title}
                </h3>
                <span className="font-mono text-xs text-muted-foreground">
                  — {book.author}
                </span>
              </div>
              <p className="font-mono text-xs text-muted-foreground leading-5 italic">
                {book.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}