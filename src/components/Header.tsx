import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Mail, Phone, Clock, Sparkles } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onRequestQuote: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeSection,
  onNavigate,
  onRequestQuote
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'products', label: 'Products' },
    { id: 'quality', label: 'Quality' },
    { id: 'industries', label: 'Industries' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  const marqueeContent = (
    <div className="flex items-center gap-6 sm:gap-10 whitespace-nowrap text-3xs sm:text-xs font-semibold tracking-wide text-white/95">
      {/* Email */}
      <a
        href="mailto:info@shanmugam.in"
        className="inline-flex items-center gap-1.5 hover:text-rose-200 transition-colors py-0.5 group"
        title="Send email to info@shanmugam.in"
      >
        <Mail className="w-3.5 h-3.5 text-rose-300 group-hover:scale-110 transition-transform flex-shrink-0" />
        <span>info@shanmugam.in</span>
      </a>

      <span className="w-1.5 h-1.5 rounded-full bg-rose-400/60 inline-block" />

      {/* Phone Number */}
      <a
        href="tel:+919876543210"
        className="inline-flex items-center gap-1.5 hover:text-rose-200 transition-colors py-0.5 group"
        title="Call +91 98765 43210"
      >
        <Phone className="w-3.5 h-3.5 text-rose-300 group-hover:scale-110 transition-transform flex-shrink-0" />
        <span>+91 98765 43210</span>
      </a>

      <span className="w-1.5 h-1.5 rounded-full bg-rose-400/60 inline-block" />

      {/* Working Hours */}
      <div className="inline-flex items-center gap-1.5 text-white/90">
        <Clock className="w-3.5 h-3.5 text-rose-300 flex-shrink-0" />
        <span>Mon – Sat: 9:00 AM – 6:00 PM</span>
      </div>

      <span className="w-1.5 h-1.5 rounded-full bg-rose-400/60 inline-block" />

      {/* ISO & Brand Tag */}
      <div className="inline-flex items-center gap-1.5 text-rose-200 font-bold">
        <Sparkles className="w-3.5 h-3.5 text-rose-300 flex-shrink-0" />
        <span>ISO 9001:2015 Certified &bull; Automotive Surface Refinishing Solutions</span>
      </div>

      <span className="w-1.5 h-1.5 rounded-full bg-rose-400/60 inline-block" />

      {/* Wholesale & Dealership Note */}
      <span className="text-white/80">
        Direct Factory Dispatch &bull; Pan-India & Export Supply
      </span>

      <span className="w-1.5 h-1.5 rounded-full bg-rose-400/60 inline-block" />
    </div>
  );

  return (
    <header className="sticky top-0 z-50 transition-all duration-300 shadow-sm">
      {/* 1. Animated Continuous Marquee Strip (Above Nav Bar) */}
      <div className="bg-gradient-to-r from-[#500025] via-[#85003F] to-[#500025] border-b border-burgundy-950/40 py-1.5 sm:py-2 text-white overflow-hidden relative select-none">
        <div className="flex overflow-hidden">
          {/* First Scrolling Block */}
          <div className="animate-marquee items-center pr-6 sm:pr-10">
            {marqueeContent}
          </div>

          {/* Second Duplicate Block for Gapless Infinite Loop */}
          <div className="animate-marquee items-center pr-6 sm:pr-10" aria-hidden="true">
            {marqueeContent}
          </div>
        </div>
      </div>

      {/* 2. Main White Navigation Bar */}
      <div
        className={`bg-white border-b border-surface-border transition-all duration-300 ${
          isScrolled ? 'py-2.5' : 'py-3.5'
        }`}
      >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-burgundy rounded-sm"
              aria-label="Shanmugam Industries Home"
            >
              <img
                src="/images/shanmugam-logo.png"
                alt="Shanmugam Industries - Build for perfect finishes"
                className="h-10 sm:h-12 w-auto max-w-[210px] sm:max-w-[230px] object-contain transition-transform duration-200"
              />
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md ${
                    isActive
                      ? 'text-burgundy font-semibold'
                      : 'text-navy/80 hover:text-burgundy hover:bg-surface/60'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-burgundy rounded-full animate-in fade-in" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Desktop Request a Quote CTA Button */}
          <div className="hidden sm:flex items-center">
            <button
              onClick={onRequestQuote}
              className="group inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-burgundy hover:bg-burgundy-800 text-white text-sm font-semibold rounded-full shadow-sm transition-all duration-200 hover:shadow active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-burgundy"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-navy hover:text-burgundy hover:bg-surface focus:outline-none focus-visible:ring-2 focus-visible:ring-burgundy"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close main menu' : 'Open main menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-surface-border bg-white px-4 pt-3 pb-6 space-y-2 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center justify-between w-full px-3 py-2.5 rounded-md text-base font-medium text-left ${
                    isActive
                      ? 'bg-burgundy-50 text-burgundy font-semibold'
                      : 'text-navy hover:bg-surface hover:text-burgundy'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-burgundy" />}
                </button>
              );
            })}
          </nav>
          <div className="pt-3 border-t border-surface-border">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onRequestQuote();
              }}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-burgundy hover:bg-burgundy-800 text-white font-semibold rounded-full shadow-sm transition-colors text-sm"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
