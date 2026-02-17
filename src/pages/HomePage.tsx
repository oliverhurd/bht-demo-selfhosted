import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
const TAGLINES = [
'Institutional-grade trading education for the independent trader.',
'Learn how to think like a professional trader with institutional concepts.',
'Accelerate your growth with a professional trading mindset.',
'See the markets from an institutional-grade perspective.',
'From zero to one — structure, discipline, mastery.',
'No signals. No hype. Just the mechanics of how markets move.'];

export function HomePage() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [currentTagline, setCurrentTagline] = useState(0);
  const [isTaglineVisible, setIsTaglineVisible] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);
  // Rotate taglines
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTaglineVisible(false);
      setTimeout(() => {
        setCurrentTagline((prev) => (prev + 1) % TAGLINES.length);
        setIsTaglineVisible(true);
      }, 600);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Subscribed: ${email}`);
    setEmail('');
  };
  return (
    <div className="min-h-screen w-full bg-background flex flex-col justify-center items-center px-4 relative overflow-hidden">
      {/* Minimal top-right nav */}
      <div
        className={`absolute top-8 right-8 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>

        <Link
          to="/about"
          className="text-xs uppercase tracking-widest text-text-muted hover:text-gold transition-colors">

          Enter Site &rarr;
        </Link>
      </div>

      <div
        className={`max-w-3xl w-full text-center transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>

        {/* Decorative Line */}
        <div className="w-16 h-px bg-gold mx-auto mb-12"></div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-text-primary tracking-tight mb-4">
          BRAVEHEART
        </h1>

        <h2 className="text-xl md:text-2xl font-mono uppercase tracking-[0.2em] text-gold mb-10">
          TRADING
        </h2>

        {/* Animated Tagline */}
        <div className="h-16 md:h-12 flex items-center justify-center mb-12 max-w-xl mx-auto overflow-hidden">
          <p
            className={`text-text-secondary text-lg md:text-xl font-light leading-relaxed transition-all duration-500 ${isTaglineVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>

            {TAGLINES[currentTagline]}
          </p>
        </div>

        {/* Newsletter Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-16">

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 bg-bg-elevated border border-border text-text-primary px-6 py-3 focus:outline-none focus:border-gold transition-colors font-mono text-sm placeholder:text-text-muted" />

          <button
            type="submit"
            className="bg-gold text-background px-8 py-3 font-mono text-sm uppercase tracking-widest font-medium hover:bg-gold-bright transition-colors flex items-center justify-center gap-2">

            Subscribe
          </button>
        </form>

        {/* Footer Text */}
        <p className="text-text-muted text-xs uppercase tracking-widest">
          No signals. No hype. Just structure.
        </p>

        {/* Subtle bottom indicator */}
        <div className="flex justify-center gap-1.5 mt-8">
          {TAGLINES.map((_, idx) =>
          <div
            key={idx}
            className={`h-0.5 rounded-full transition-all duration-500 ${idx === currentTagline ? 'w-6 bg-gold' : 'w-1.5 bg-border'}`} />

          )}
        </div>
      </div>
    </div>);

}