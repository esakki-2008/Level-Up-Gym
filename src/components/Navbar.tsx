import React, { useState, useEffect } from 'react';
import { Dumbbell, Menu, X, Phone, ArrowRight } from 'lucide-react';
import { GYM_INFO } from '../data';

interface NavbarProps {
  onOpenEnquiry: (defaultGoal?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Trainers', href: '#trainers' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800 shadow-xl py-3'
          : 'bg-gradient-to-b from-zinc-950/90 via-zinc-950/60 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-600 flex items-center justify-center text-zinc-950 shadow-lg shadow-orange-500/20 group-hover:scale-105 transition-transform">
              <Dumbbell className="w-6 h-6 stroke-[2.5]" />
            </div>
            <div className="flex flex-col">
              <span className="font-black text-xl tracking-wider text-white leading-none font-sans">
                LEVEL UP
              </span>
              <span className="text-xs font-bold tracking-[0.25em] text-amber-500 mt-1 uppercase">
                Gym • Dombivli
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-zinc-300 hover:text-amber-400 transition-colors tracking-wide"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={`tel:${GYM_INFO.phoneClean}`}
              className="flex items-center gap-2 text-sm font-semibold text-zinc-300 hover:text-white px-3 py-2 rounded-lg hover:bg-zinc-900 transition-colors"
            >
              <Phone className="w-4 h-4 text-amber-500" />
              <span>{GYM_INFO.phone}</span>
            </a>
            <button
              onClick={() => onOpenEnquiry('General Membership')}
              className="relative group overflow-hidden rounded-xl p-[2px] font-semibold text-sm"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-600 group-hover:opacity-90 transition-opacity"></span>
              <span className="relative px-5 py-2.5 bg-zinc-950 rounded-[10px] flex items-center gap-2 text-white group-hover:bg-opacity-0 transition-all duration-300">
                <span>Join Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-zinc-900 text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-zinc-950/98 border-b border-zinc-800 backdrop-blur-xl px-6 py-6 shadow-2xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-zinc-200 hover:text-amber-400 py-2 border-b border-zinc-900 transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ArrowRight className="w-4 h-4 text-zinc-600" />
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <a
                href={`tel:${GYM_INFO.phoneClean}`}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-zinc-900 text-white font-semibold border border-zinc-800"
              >
                <Phone className="w-4 h-4 text-amber-500" />
                <span>Call {GYM_INFO.phone}</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiry('General Membership');
                }}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-zinc-950 font-bold text-center shadow-lg shadow-orange-500/20"
              >
                Join Now - Level Up
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
