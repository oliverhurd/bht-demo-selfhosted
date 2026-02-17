import React from 'react';
import { ExternalLink } from 'lucide-react';
import { PublicNavbar } from '../components/PublicNavbar';
import { PublicFooter } from '../components/PublicFooter';
export function AffiliatesPage() {
  const tools = [
  {
    name: 'TradingView',
    category: 'Charting & Analysis',
    desc: 'The industry standard for charting. Clean, fast, and accessible from any device.',
    link: '#'
  },
  {
    name: 'Rithmic',
    category: 'Futures Data Feed',
    desc: 'Low latency data for serious futures execution. Unfiltered tick data.',
    link: '#'
  },
  {
    name: 'cTrader',
    category: 'Forex Execution',
    desc: 'My preferred platform for FX. Better transparency and execution than MT4/5.',
    link: '#'
  },
  {
    name: 'Bybit',
    category: 'Crypto Exchange',
    desc: 'Reliable derivatives platform with deep liquidity for major pairs.',
    link: '#'
  },
  {
    name: 'Notion',
    category: 'Journaling & Database',
    desc: 'Where I track every single trade. The database capabilities are unmatched.',
    link: '#'
  },
  {
    name: 'Obsidian',
    category: 'Knowledge Management',
    desc: 'For building a second brain. Local, markdown-based, and future-proof.',
    link: '#'
  }];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <PublicNavbar />

      <main className="flex-grow pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h1 className="text-4xl md:text-6xl font-serif text-text-primary mb-6">
              Tools I Use
            </h1>
            <p className="text-text-secondary text-lg font-light">
              Genuinely used daily. No paid placements. Just what works.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool, idx) =>
            <a
              key={idx}
              href={tool.link}
              className="group block bg-bg-card p-8 border border-border hover:border-gold transition-all duration-300 hover:-translate-y-1">

                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-serif text-text-primary group-hover:text-gold transition-colors">
                    {tool.name}
                  </h3>
                  <ExternalLink
                  size={16}
                  className="text-text-muted group-hover:text-gold transition-colors" />

                </div>

                <div className="text-xs font-mono text-gold uppercase tracking-widest mb-4">
                  {tool.category}
                </div>

                <p className="text-text-secondary text-sm leading-relaxed">
                  {tool.desc}
                </p>

                <div className="mt-6 text-xs text-text-muted group-hover:text-text-primary transition-colors flex items-center gap-1">
                  Visit Website &rarr;
                </div>
              </a>
            )}
          </div>
        </div>
      </main>

      <PublicFooter />
    </div>);

}