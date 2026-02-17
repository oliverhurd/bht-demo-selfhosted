import React from 'react';
import { Quote } from 'lucide-react';
import { PublicNavbar } from '../components/PublicNavbar';
import { PublicFooter } from '../components/PublicFooter';
export function ResultsPage() {
  const testimonials = [
  {
    quote:
    "I spent 3 years jumping from strategy to strategy. Oliver's approach to market structure was the first time trading actually made logical sense to me. No magic indicators, just pure price action.",
    name: 'Marcus T.',
    exp: '4 Years Trading',
    focus: 'ES Futures'
  },
  {
    quote:
    'The risk management module alone saved my career. I was a break-even trader for months, but my drawdowns were killing me. Braveheart fixed the holes in my bucket.',
    name: 'Sarah L.',
    exp: '2 Years Trading',
    focus: 'Forex (EUR/USD)'
  },
  {
    quote:
    "Institutional order flow is a buzzword for most, but here it's explained with such clarity. The weekly sessions are worth the subscription price alone.",
    name: 'David K.',
    exp: '5 Years Trading',
    focus: 'Crypto & FX'
  },
  {
    quote:
    "Finally, an educator who doesn't post pictures of rented Ferraris. This is a serious environment for people who treat this as a profession.",
    name: 'James R.',
    exp: '1 Year Trading',
    focus: 'Nasdaq Futures'
  },
  {
    quote:
    "The 'Methodology' course gave me a repeatable process. I wake up, I know what I'm looking for, and if it's not there, I don't trade. That discipline is what I paid for.",
    name: 'Elena M.',
    exp: '3 Years Trading',
    focus: 'Forex'
  },
  {
    quote:
    "I've joined 10+ discord groups. This is the only one where the chat isn't filled with moon boys and rocket emojis. It's quiet, professional, and focused.",
    name: 'Michael B.',
    exp: '6 Years Trading',
    focus: 'Crypto Spot/Derivatives'
  }];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <PublicNavbar />

      <main className="flex-grow pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-6xl font-serif text-text-primary mb-6">
              Student Results
            </h1>
            <p className="text-text-muted text-xs uppercase tracking-widest max-w-2xl mx-auto border border-border p-4 bg-bg-elevated">
              Disclaimer: Trading involves significant risk. The testimonials
              below reflect individual experiences and are not a guarantee of
              future performance. Most traders lose money.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20 border-y border-border py-12">
            {[
            {
              label: 'Students Educated',
              val: '500+'
            },
            {
              label: 'Hours of Content',
              val: '50+'
            },
            {
              label: 'Structured Courses',
              val: '3'
            },
            {
              label: 'Established',
              val: '2023'
            }].
            map((stat, idx) =>
            <div key={idx} className="text-center">
                <div className="text-3xl md:text-4xl font-serif text-gold mb-2">
                  {stat.val}
                </div>
                <div className="text-xs font-mono text-text-secondary uppercase tracking-widest">
                  {stat.label}
                </div>
              </div>
            )}
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, idx) =>
            <div
              key={idx}
              className="bg-bg-card p-8 border border-border relative hover:border-gold/30 transition-colors">

                <Quote
                className="text-gold opacity-20 absolute top-6 right-6"
                size={40} />


                <p className="text-text-primary text-lg font-serif italic mb-8 relative z-10 leading-relaxed">
                  "{t.quote}"
                </p>

                <div className="flex items-center justify-between border-t border-border pt-6">
                  <div>
                    <div className="text-gold font-bold font-serif">
                      {t.name}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-text-secondary font-mono">
                      {t.exp}
                    </div>
                    <div className="text-xs text-text-muted font-mono">
                      {t.focus}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <PublicFooter />
    </div>);

}