import React from 'react';
import { Link } from 'react-router-dom';
import { Youtube } from 'lucide-react';
export function PublicFooter() {
  return (
    <footer className="bg-background border-t border-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Decorative line */}
        <div className="w-16 h-px bg-gold mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link
              to="/"
              className="text-xl font-serif font-bold text-gold tracking-tight mb-6 block">

              BRAVEHEART
            </Link>
            <p className="text-text-muted text-xs leading-relaxed max-w-xs">
              Institutional-grade trading education for the independent trader.
              Structure over signals. Process over profit.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-mono uppercase tracking-widest text-text-primary mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/about"
                  className="text-xs text-text-secondary hover:text-gold transition-colors">

                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/courses"
                  className="text-xs text-text-secondary hover:text-gold transition-colors">

                  Courses
                </Link>
              </li>
              <li>
                <Link
                  to="/results"
                  className="text-xs text-text-secondary hover:text-gold transition-colors">

                  Results
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-xs text-text-secondary hover:text-gold transition-colors">

                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-mono uppercase tracking-widest text-text-primary mb-6">
              Resources
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/notes"
                  className="text-xs text-text-secondary hover:text-gold transition-colors">

                  Public Notes
                </Link>
              </li>
              <li>
                <Link
                  to="/affiliates"
                  className="text-xs text-text-secondary hover:text-gold transition-colors">

                  Tools & Affiliates
                </Link>
              </li>
              <li>
                <Link
                  to="/contribute"
                  className="text-xs text-text-secondary hover:text-gold transition-colors">

                  Contribute
                </Link>
              </li>
              <li>
                <Link
                  to="/vault"
                  className="text-xs text-text-secondary hover:text-gold transition-colors">

                  Members Vault
                </Link>
              </li>
              <li>
                <a
                  href="https://youtube.com/@BraveheartTrading"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-text-secondary hover:text-gold transition-colors flex items-center gap-2">

                  <Youtube size={14} /> YouTube
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-mono uppercase tracking-widest text-text-primary mb-6">
              Legal
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-xs text-text-secondary hover:text-gold transition-colors">

                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-xs text-text-secondary hover:text-gold transition-colors">

                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-xs text-text-secondary hover:text-gold transition-colors">

                  Risk Disclosure
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-text-muted">
            &copy; 2026 Braveheart Trading. All rights reserved.
          </p>
          <p className="text-xs text-text-muted mt-2 md:mt-0">
            Trading involves substantial risk of loss.
          </p>
        </div>
      </div>
    </footer>);

}