import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ExternalLink } from 'lucide-react';
export function PublicNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);
  const navLinks = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'Mission',
    path: '/about'
  },
  {
    name: 'Courses',
    path: '/courses'
  },
  {
    name: 'Results',
    path: '/results'
  },
  {
    name: 'Notes',
    path: '/notes'
  },
  {
    name: 'Affiliates',
    path: '/affiliates'
  },
  {
    name: 'Contact',
    path: '/contact'
  }];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname === path;
  };
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${isScrolled ? 'bg-background/80 backdrop-blur-md border-border' : 'bg-transparent border-transparent'}`}>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link
              to="/"
              className="text-2xl font-serif font-bold text-gold tracking-tight">

              BRAVEHEART
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) =>
            <Link
              key={link.name}
              to={link.path}
              className={`text-xs uppercase tracking-widest transition-colors duration-200 ${isActive(link.path) ? 'text-gold border-b border-gold pb-1' : 'text-text-secondary hover:text-text-primary'}`}>

                {link.name}
              </Link>
            )}

            <Link
              to="/vault"
              className="ml-4 px-4 py-2 border border-gold text-gold text-xs uppercase tracking-widest hover:bg-gold hover:text-background transition-all duration-300">

              Members Vault
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-text-primary hover:text-gold transition-colors">

              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen &&
      <div className="md:hidden bg-background border-b border-border absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) =>
          <Link
            key={link.name}
            to={link.path}
            className={`block px-3 py-3 text-sm uppercase tracking-widest border-l-2 ${isActive(link.path) ? 'border-gold text-gold bg-bg-elevated' : 'border-transparent text-text-secondary hover:text-text-primary hover:bg-bg-elevated'}`}>

                {link.name}
              </Link>
          )}
            <div className="pt-4 mt-4 border-t border-border">
              <Link
              to="/vault"
              className="block w-full text-center px-4 py-3 border border-gold text-gold text-sm uppercase tracking-widest hover:bg-gold hover:text-background transition-all">

                Members Vault
              </Link>
            </div>
          </div>
        </div>
      }
    </nav>);

}