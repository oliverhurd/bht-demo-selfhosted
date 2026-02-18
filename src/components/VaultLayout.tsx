import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LogOut, Home, BookOpen, Calendar, FileText, TrendingUp } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export function VaultLayout({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const { user, signOut } = useAuth();

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/');
    } catch (error) {
      console.error('Sign out error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-bg flex">
      {/* Sidebar */}
      <aside className="w-64 bg-bg-card border-r border-border flex-shrink-0 hidden lg:flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-border">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 border-2 border-gold relative flex items-center justify-center flex-shrink-0">
              <div className="absolute inset-1 border border-gold/30" />
              <span className="font-serif text-gold font-bold text-sm">BHT</span>
            </div>
            <div>
              <div className="font-serif text-sm font-bold text-text-primary tracking-wider">
                BRAVEHEART
              </div>
              <div className="font-mono text-[8px] text-gold tracking-widest">
                TRADING
              </div>
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-1">
          <Link
            to="/vault"
            className="flex items-center gap-3 px-3 py-2 rounded hover:bg-bg-elevated transition-colors text-text-secondary hover:text-gold"
          >
            <Home size={16} />
            <span className="text-sm font-mono">Dashboard</span>
          </Link>
          <Link
            to="/vault/courses"
            className="flex items-center gap-3 px-3 py-2 rounded hover:bg-bg-elevated transition-colors text-text-secondary hover:text-gold"
          >
            <BookOpen size={16} />
            <span className="text-sm font-mono">Courses</span>
          </Link>
          <Link
            to="/vault/sessions"
            className="flex items-center gap-3 px-3 py-2 rounded hover:bg-bg-elevated transition-colors text-text-secondary hover:text-gold"
          >
            <Calendar size={16} />
            <span className="text-sm font-mono">Sessions</span>
          </Link>
          <Link
            to="/vault/updates"
            className="flex items-center gap-3 px-3 py-2 rounded hover:bg-bg-elevated transition-colors text-text-secondary hover:text-gold"
          >
            <TrendingUp size={16} />
            <span className="text-sm font-mono">Updates</span>
          </Link>
          <Link
            to="/vault/library"
            className="flex items-center gap-3 px-3 py-2 rounded hover:bg-bg-elevated transition-colors text-text-secondary hover:text-gold"
          >
            <FileText size={16} />
            <span className="text-sm font-mono">PDF Library</span>
          </Link>
        </nav>

        {/* User section */}
        <div className="p-4 border-t border-border">
          <div className="mb-3 px-3">
            <div className="text-[9px] font-mono tracking-widest uppercase text-text-muted mb-1">
              Signed in as
            </div>
            <div className="text-xs font-mono text-text-secondary truncate">
              {user?.email}
            </div>
          </div>
          <button
            onClick={handleSignOut}
            className="w-full flex items-center gap-3 px-3 py-2 rounded hover:bg-bg-elevated transition-colors text-text-secondary hover:text-gold"
          >
            <LogOut size={16} />
            <span className="text-sm font-mono">Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {/* Top Bar (mobile) */}
        <div className="lg:hidden sticky top-0 z-10 bg-bg-card border-b border-border p-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 border-2 border-gold relative flex items-center justify-center">
              <div className="absolute inset-1 border border-gold/30" />
              <span className="font-serif text-gold font-bold text-xs">BHT</span>
            </div>
            <span className="font-serif text-sm font-bold text-text-primary">
              BRAVEHEART
            </span>
          </Link>
          <button
            onClick={handleSignOut}
            className="text-text-secondary hover:text-gold p-2"
          >
            <LogOut size={18} />
          </button>
        </div>

        {/* Page Content */}
        <div className="p-6 md:p-8 lg:p-12">{children}</div>
      </main>
    </div>
  );
}
