import React from 'react';
import { Heart } from 'lucide-react';
import { PublicNavbar } from '../components/PublicNavbar';
import { PublicFooter } from '../components/PublicFooter';
export function ContributionPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <PublicNavbar />

      <main className="flex-grow pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-16">
            <h1 className="text-4xl md:text-6xl font-serif text-text-primary mb-6">
              Support Braveheart
            </h1>
            <p className="text-text-secondary text-lg font-light max-w-2xl mx-auto">
              If the free content has helped your trading journey, you can
              support the platform here. This is entirely optional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
            {
              name: 'Supporter',
              amount: '$5',
              desc: 'Buy me a coffee. Keeps the caffeine flowing for morning analysis.'
            },
            {
              name: 'Patron',
              amount: '$25',
              desc: 'Cover the server costs for a month. Much appreciated.'
            },
            {
              name: 'Benefactor',
              amount: '$100',
              desc: 'Serious support for the mission. Helps fund better tools and data.'
            }].
            map((tier, idx) =>
            <div
              key={idx}
              className="bg-bg-card border border-gold/30 p-8 flex flex-col items-center hover:bg-bg-elevated transition-colors">

                <div className="w-12 h-12 rounded-full bg-bg-elevated border border-gold flex items-center justify-center mb-6 text-gold">
                  <Heart size={20} />
                </div>
                <h3 className="text-xl font-serif text-text-primary mb-2">
                  {tier.name}
                </h3>
                <div className="text-3xl font-mono text-gold mb-4">
                  {tier.amount}
                </div>
                <p className="text-text-secondary text-sm mb-8">{tier.desc}</p>
                <button className="w-full py-3 border border-gold text-gold text-xs uppercase tracking-widest hover:bg-gold hover:text-background transition-colors">
                  Contribute
                </button>
              </div>
            )}
          </div>

          <p className="text-text-muted text-xs font-mono">
            Contributions are not tax-deductible. They are gifts to support the
            content creator.
          </p>
        </div>
      </main>

      <PublicFooter />
    </div>);

}