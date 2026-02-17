import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LogOut, Menu, X } from 'lucide-react';
interface VaultLayoutProps {
  children: React.ReactNode;
}
export function VaultLayout({ children }: VaultLayoutProps) {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Top Navigation Bar (Skool-style) */}
      <header className="sticky top-0 z-50 bg-background border-b border-border h-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          {/* Left: Logo */}
          <div className="flex items-center gap-8">
            <Link
              to="/vault"
              className="text-xl font-serif font-bold text-gold tracking-tight">

              BRAVEHEART
            </Link>

            {/* Desktop Nav Links */}
            <nav className="hidden md:flex items-center gap-6">
              <Link
                to="/vault"
                className={`text-sm font-mono uppercase tracking-widest py-5 border-b-2 transition-colors ${location.pathname.startsWith('/vault') ? 'border-gold text-gold' : 'border-transparent text-text-secondary hover:text-text-primary'}`}>

                Classroom
              </Link>
              {/* Add more tabs here if needed later (Community, Leaderboards, etc.) */}
            </nav>
          </div>

          {/* Right: User / Exit */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-bg-elevated border border-gold flex items-center justify-center text-gold text-xs font-bold">
                OL
              </div>
            </div>
            <Link
              to="/"
              className="text-xs font-mono text-text-muted hover:text-gold transition-colors flex items-center gap-2">

              <LogOut size={14} />
              <span>Back to Site</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>

            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen &&
      <div className="md:hidden bg-background border-b border-border p-4 space-y-4">
          <Link
          to="/vault"
          className="block text-sm font-mono uppercase tracking-widest text-gold"
          onClick={() => setIsMobileMenuOpen(false)}>

            Classroom
          </Link>
          <div className="border-t border-border pt-4">
            <Link
            to="/"
            className="flex items-center gap-2 text-sm font-mono text-text-muted hover:text-gold"
            onClick={() => setIsMobileMenuOpen(false)}>

              <LogOut size={14} />
              <span>Back to Site</span>
            </Link>
          </div>
        </div>
      }

      {/* Main Content */}
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>);

}