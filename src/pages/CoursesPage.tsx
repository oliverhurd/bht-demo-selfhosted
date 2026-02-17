import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, BookOpen, CheckCircle, ArrowRight } from 'lucide-react';
import { PublicNavbar } from '../components/PublicNavbar';
import { PublicFooter } from '../components/PublicFooter';
export function CoursesPage() {
  const courses = [
  {
    id: 1,
    tier: 'I',
    number: '01',
    title: 'Foundations',
    subtitle: 'From zero to one',
    lessons: 15,
    hours: 12,
    description:
    "You've never seen a candlestick chart before? Perfect — this is where you start. We take you from absolute zero to understanding how markets actually work. No assumptions, no jargon without explanation. By the end, you'll read price action like a language.",
    outcome:
    'You will understand market mechanics, read price action confidently, and manage risk like a professional.',
    topics: [
    'What is a Candlestick & How to Read Charts',
    'Market Structure — The Language of Price',
    'Risk Management — The Foundation of Survival',
    'Introduction to Trading Psychology',
    'Professional Platform & Workspace Setup']

  },
  {
    id: 2,
    tier: 'II',
    number: '02',
    title: 'Methodology',
    subtitle: 'Build your arsenal',
    lessons: 20,
    hours: 18,
    description:
    "Now you speak the language. It's time to build your toolkit. This course introduces the core SMC (Smart Money Concepts) trading tools — orderblocks, liquidity, fair value gaps, and institutional order flow. You'll assemble a library of high-probability setups and learn exactly when and how to deploy each one.",
    outcome:
    'You will have a complete library of SMC tools and a systematic approach to identifying high-probability trade setups.',
    topics: [
    'Orderblocks, Breakers & Mitigation Blocks',
    'Liquidity Engineering & Sweep Mechanics',
    'Fair Value Gaps & Imbalance Trading',
    'Multi-Timeframe Confluence & Alignment',
    'Trade Planning, Journaling & Review Process']

  },
  {
    id: 3,
    tier: 'III',
    number: '03',
    title: 'Mastery',
    subtitle: 'Refine your edge',
    lessons: 18,
    hours: 20,
    description:
    "You know what to do. Now it's about doing it better, every single day. Mastery is not a destination — it's a continuous loop of execution, feedback, and refinement. This course focuses on developing your unique trading edge through live breakdowns, macro analysis, and the mental performance framework that separates professionals from amateurs.",
    outcome:
    'You will develop a refined, personal trading edge with the psychological resilience to execute it consistently under pressure.',
    topics: [
    'Institutional Order Flow & Macro Context',
    'Developing Your Personal Trading Edge',
    'Live Trade Breakdowns & Real-Time Analysis',
    'Advanced Risk & Portfolio Management',
    'Peak Mental Performance & Consistency']

  }];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <PublicNavbar />

      <main className="flex-grow pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero */}
          <div className="mb-8 text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-serif text-text-primary mb-6">
              The Curriculum
            </h1>
            <p className="text-text-secondary text-lg font-light leading-relaxed">
              A structured path from complete beginner to independent
              professional. We bridge you from zero to one — from not knowing
              what a candlestick is, to executing with institutional precision.
            </p>
          </div>

          {/* Journey Line */}
          <div className="flex items-center justify-center gap-4 mb-20 text-xs font-mono text-text-muted uppercase tracking-widest">
            <span className="text-gold">Zero</span>
            <div className="w-16 h-px bg-border"></div>
            <span>Learn</span>
            <div className="w-16 h-px bg-border"></div>
            <span>Build</span>
            <div className="w-16 h-px bg-border"></div>
            <span>Refine</span>
            <div className="w-16 h-px bg-border"></div>
            <span className="text-gold">Mastery</span>
          </div>

          {/* Course Cards */}
          <div className="space-y-12 mb-20">
            {courses.map((course, idx) =>
            <div
              key={course.id}
              className="bg-bg-card border border-border p-8 md:p-12 relative overflow-hidden group hover:border-gold/30 transition-all duration-500">

                {/* Background Number */}
                <div className="absolute -right-8 -top-8 text-[12rem] font-serif text-white opacity-[0.02] select-none pointer-events-none leading-none">
                  {course.number}
                </div>

                <div className="flex flex-col lg:flex-row gap-10">
                  {/* Left Column - Info */}
                  <div className="lg:w-2/3">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 bg-bg-elevated border border-gold flex items-center justify-center text-2xl font-serif text-gold font-bold flex-shrink-0">
                        {course.tier}
                      </div>
                      <div>
                        <h2 className="text-3xl font-serif text-text-primary">
                          {course.title}
                        </h2>
                        <p className="text-gold text-sm font-mono uppercase tracking-widest">
                          {course.subtitle}
                        </p>
                      </div>
                    </div>

                    <p className="text-text-secondary leading-relaxed mb-6 text-base">
                      {course.description}
                    </p>

                    <div className="bg-bg-elevated border-l-2 border-gold p-4 mb-8">
                      <p className="text-sm font-mono text-text-primary">
                        <span className="text-gold font-bold uppercase tracking-widest text-xs">
                          Outcome →{' '}
                        </span>
                        {course.outcome}
                      </p>
                    </div>

                    <div className="flex items-center gap-6 text-text-muted text-xs font-mono">
                      <div className="flex items-center gap-2">
                        <BookOpen size={14} />
                        <span>{course.lessons} Lessons</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={14} />
                        <span>~{course.hours} Hours</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Topics */}
                  <div className="lg:w-1/3 lg:border-l lg:border-border lg:pl-10">
                    <h3 className="text-sm font-mono text-text-primary uppercase tracking-widest mb-6">
                      What You'll Learn
                    </h3>
                    <ul className="space-y-4">
                      {course.topics.map((topic, tidx) =>
                    <li
                      key={tidx}
                      className="flex items-start gap-3 text-sm text-text-secondary">

                          <CheckCircle
                        size={16}
                        className="text-gold shrink-0 mt-0.5" />

                          <span>{topic}</span>
                        </li>
                    )}
                    </ul>
                  </div>
                </div>

                {/* Connector Arrow (between cards) */}
                {idx < courses.length - 1 &&
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 z-10 w-12 h-12 bg-background border border-border rounded-full flex items-center justify-center">
                    <ArrowRight size={16} className="text-gold rotate-90" />
                  </div>
              }
              </div>
            )}
          </div>

          {/* CTA */}
          <div className="text-center bg-bg-elevated border border-border p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl font-serif text-text-primary mb-4">
              Ready to go from zero to one?
            </h3>
            <p className="text-text-secondary mb-8 max-w-xl mx-auto">
              All three courses are included in the Members Vault. One
              membership gives you the complete journey — from your first
              candlestick to institutional-grade execution.
            </p>
            <Link
              to="/vault"
              className="inline-block px-8 py-4 bg-gold text-background font-mono text-sm uppercase tracking-widest font-medium hover:bg-gold-bright transition-colors">

              Access the Members Vault
            </Link>
          </div>
        </div>
      </main>

      <PublicFooter />
    </div>);

}