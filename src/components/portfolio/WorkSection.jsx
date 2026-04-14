import React from 'react';

const whatIDo = {
  title: 'nodeops (business development & partnerships, present)',
  items: [
    'scaling CreateOS — an AI-enabled orchestration layer with one-click deployment, auto-scaling, and a marketplace. basically making infra boring in the best way.',
    'building LinkedIn outbound systems from scratch. multi-account architecture, rate-limit-safe sequences, AI-personalized messaging at scale. the kind of thing that shouldn\'t work as well as it does.',
    'running BD across multiple ICP segments — dev shops, agencies, software companies. curiosity-first outreach, no spray and pray.',
    'cold email GTM, partnership agreements, company research, re-engagement flows. if it moves a deal forward, it\'s on the list.',
  ],
};

const whatIveDone = [
  {
    title: 'lnmhacks 7.0 (head of partnerships, feb 2024 – mar 2025)',
    items: [
      'closed 16 partnerships from scratch — aptos, dorahacks, devdockai, riseIn, and a bunch of others across web3 infra and tooling.',
      '$7,000+ in sponsorships secured. started with zero budget, zero templates, and zero guaranteed yes\'s.',
      'designed the entire partner segmentation and outreach strategy. tiered models, ecosystem mapping, the works.',
    ],
  },
  {
    title: 'deon labs (growth analyst, apr 2024 – dec 2024)',
    items: [
      'ran UX research across an appchain and two AI x blockchain networks. mapped user journeys, found where people dropped off, fixed the funnels.',
      'built A/B experimentation frameworks with product teams. ~30% reduction in user drop-offs.',
      'defined ICPs and segmented target markets before the team knew they needed that clarity.',
    ],
  },
  {
    title: 'pyor (technical writer/researcher, may 2024)',
    items: [
      'authored 11 long-form technical research reports on EigenLayer — restaking, AVSs, shared security, the whole primitive stack.',
      'published as "Home of EigenLayer" on Mirror. got adopted by builders as a go-to reference. that was unexpected and cool.',
    ],
  },
  {
    title: 'reef chain (devrel intern, oct 2023 – jan 2024)',
    items: [
      'closed 14+ community partnerships across 3 APAC countries.',
      'designed and ran multiple activation campaigns across the APAC region.',
      'ran offline lecture townhalls in Jaipur. got developers and students actually excited about protocol infrastructure, which is harder than it sounds.',
    ],
  },
];

export default function WorkSection() {
  return (
    <section id="work" className="py-12">
      <div className="border-t border-border pt-12">
        {/* What I Do */}
        <div className="mb-14">
          <h2 className="font-serif text-xl text-foreground italic mb-6">what i do</h2>
          <h3 className="font-mono text-sm font-medium text-foreground mb-4">
            {whatIDo.title}
          </h3>
          <ul className="space-y-3 pl-4">
            {whatIDo.items.map((item, i) => (
              <li key={i} className="font-mono text-sm text-muted-foreground leading-6 relative pl-3">
                <span className="absolute left-0 top-0">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* What I've Done */}
        <div>
          <h2 className="font-serif text-xl text-foreground italic mb-6">what i've done</h2>
          <div className="space-y-10">
            {whatIveDone.map((section, idx) => (
              <div key={idx}>
                <h3 className="font-mono text-sm font-medium text-foreground mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-3 pl-4">
                  {section.items.map((item, i) => (
                    <li key={i} className="font-mono text-sm text-muted-foreground leading-6 relative pl-3">
                      <span className="absolute left-0 top-0">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}