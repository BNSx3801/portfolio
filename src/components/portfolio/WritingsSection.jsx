import React from 'react';

const writings = [
  {
    title: 'Sui 101: Scalability, Security & Simplicity.',
    month: 'jan 2025',
    note: 'the sequel. if you don\'t know how diem led to this, you\'re missing the plot.',
    link: 'https://open.substack.com/pub/bnsx3801/p/sui-101',
  },
  {
    title: 'The Cost of Decentralization: Design Trade-offs in the DEX World',
    month: 'dec 2024',
    note: 'the price of ideals. decentralization sounds pure—until you design for it.',
    link: 'https://open.substack.com/pub/bnsx3801/p/the-cost-of-decentralization-design',
  },
  {
    title: 'Uniswap 101: Providing Liquidity, Earning Fees, and Facing the Risks!',
    month: 'nov 2024',
    note: 'the trade. you earn fees—but you\'re also taking bets you don\'t see.',
    link: 'https://open.substack.com/pub/bnsx3801/p/uniswap-101-providing-liquidity-earning',
  },
  {
    title: 'Cracking Open the AMM Black Box',
    month: 'oct 2024',
    note: 'you trusted the pool. this is what was happening underneath.',
    link: 'https://open.substack.com/pub/bnsx3801/p/cracking-open-the-amm-black-box',
  },
  {
    title: 'Is DeFi Really Eating Up the Wall Street?',
    month: 'sep 2024',
    note: 'we thought it was disruption. it might just be integration.',
    link: 'https://open.substack.com/pub/bnsx3801/p/is-defi-really-eating-up-wall-street',
  },
];

export default function WritingsSection() {
  return (
    <section id="writings" className="py-12">
      <div className="border-t border-border pt-12">
        <h2 className="font-serif text-xl text-foreground italic mb-8">writings</h2>
        <div className="space-y-5">
          {writings.map((post, i) => (
            <div key={i} className="group">
              <div className="flex items-baseline gap-2 mb-0.5">
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm text-foreground hover:text-primary transition-colors duration-300 underline underline-offset-2 decoration-muted-foreground/30 hover:decoration-primary/50"
                >
                  {post.title}
                </a>
                <span className="font-mono text-xs text-muted-foreground shrink-0">— {post.month}</span>
              </div>
              <p className="font-mono text-xs text-muted-foreground leading-5 italic">
                {post.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}