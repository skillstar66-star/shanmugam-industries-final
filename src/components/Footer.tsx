import React, { useState } from 'react';
import {
  ArrowUp,
  ArrowRight,
  ShieldCheck,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  Linkedin,
  Youtube,
  Instagram,
  Facebook,
  Twitter,
  MessageCircle,
  FileText
} from 'lucide-react';
import { FEATURED_PRODUCTS } from '../data/productsData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onRequestQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onRequestQuote }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setNewsletterEmail('');
      }, 5000);
    }
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://www.linkedin.com',
      hoverColor: 'hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2]'
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      href: 'https://wa.me/',
      hoverColor: 'hover:bg-[#25D366] hover:text-white hover:border-[#25D366]'
    },
    {
      name: 'YouTube',
      icon: Youtube,
      href: 'https://www.youtube.com',
      hoverColor: 'hover:bg-[#FF0000] hover:text-white hover:border-[#FF0000]'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      href: 'https://www.instagram.com',
      hoverColor: 'hover:bg-[#E4405F] hover:text-white hover:border-[#E4405F]'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      href: 'https://www.facebook.com',
      hoverColor: 'hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2]'
    },
    {
      name: 'Twitter (X)',
      icon: Twitter,
      href: 'https://twitter.com',
      hoverColor: 'hover:bg-white hover:text-navy hover:border-white'
    }
  ];

  return (
    <footer className="bg-[#0D1B2A] text-white text-left relative border-t-4 border-burgundy">
      {/* 1. Top Newsletter & Technical Bulletin Strip in Refined Corporate Navy */}
      <div className="bg-[#13253B] border-b border-white/10 py-8 sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="max-w-xl">
              <span className="text-xs font-bold uppercase tracking-wider text-burgundy-300 block mb-1">
                TECHNICAL BULLETINS &bull; DEALERSHIP UPDATES
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                Stay Updated on Automotive Refinish Formulations
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1.5 leading-relaxed">
                Receive new product launches, batch compliance updates, and bodyshop technical application guidelines.
              </p>
            </div>

            <div className="w-full lg:w-auto">
              {isSubscribed ? (
                <div className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-emerald-950/70 border border-emerald-500/40 text-emerald-300 text-sm font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Thank you! You are now subscribed to technical bulletins.</span>
                </div>
              ) : (
                <form
                  onSubmit={handleNewsletterSubmit}
                  className="flex flex-col sm:flex-row gap-2.5 max-w-md w-full"
                >
                  <div className="relative flex-1">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="email"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      placeholder="Enter your professional email"
                      required
                      className="w-full pl-10 pr-4 py-3 rounded-lg bg-[#0D1B2A] border border-white/20 text-sm text-white placeholder-slate-400 focus:outline-hidden focus:border-burgundy-400 focus:ring-1 focus:ring-burgundy-400 transition-all"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-7 py-3 rounded-full bg-burgundy hover:bg-burgundy-dark text-white font-bold text-sm transition-all shadow-md active:scale-95 flex-shrink-0 border border-burgundy-400/30"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Corporate Grid: 3 Columns on Mobile, 4 Columns on Desktop */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-12">
        <div className="grid grid-cols-3 lg:grid-cols-12 gap-x-2.5 gap-y-8 sm:gap-x-6 sm:gap-y-10 lg:gap-8 pb-10 sm:pb-12 border-b border-white/10">
          
          {/* Column 1: Company Logo on Clean White Card, Description & Social Icons */}
          <div className="col-span-3 lg:col-span-4 space-y-3 sm:space-y-4">
            {/* Logo in clean white contrast card */}
            <div className="inline-block bg-white p-2 sm:p-3 rounded-xl shadow-md border border-slate-200">
              <img
                src="/images/shanmugam-logo.png"
                alt="Shanmugam Industries - Build for perfect finishes"
                className="h-8 sm:h-11 w-auto max-w-[180px] sm:max-w-[210px] object-contain"
              />
            </div>

            <p className="text-[11px] sm:text-sm text-slate-300 leading-relaxed max-w-sm">
              Shanmugam Industries is a premier manufacturer of high-performance automotive body fillers,
              metallic pastes, and specialty surface compounds engineered for flawless finishes, rapid sanding,
              and lasting repair durability.
            </p>

            {/* Social Media Icons Strip */}
            <div className="pt-1 sm:pt-2">
              <h5 className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-white mb-2">
                Connect With Us
              </h5>
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit Shanmugam Industries on ${social.name}`}
                      className={`w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-white/10 border border-white/15 text-slate-300 flex items-center justify-center transition-all duration-200 shadow-2xs hover:scale-105 ${social.hoverColor}`}
                    >
                      <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* ISO Quality Badge */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-white/5 border border-white/10 text-[10px] sm:text-xs font-semibold text-slate-200 mt-1">
              <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-burgundy-300 flex-shrink-0" />
              <span>ISO 9001:2015 Compliant &bull; Export Graded</span>
            </div>
          </div>

          {/* Column 2: Quick Links (Column 1 of 3 on Mobile) */}
          <div className="col-span-1 lg:col-span-2 space-y-2.5 sm:space-y-3">
            <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-white flex items-center gap-1 sm:gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-burgundy-400 shrink-0" />
              <span className="truncate">Quick Links</span>
            </h4>
            <ul className="space-y-1.5 sm:space-y-2 text-[10px] sm:text-sm">
              {[
                { label: 'Home', id: 'home' },
                { label: 'About Us', id: 'about' },
                { label: 'Our Products', id: 'products' },
                { label: 'Quality', id: 'quality' },
                { label: 'Compliance', id: 'certifications' },
                { label: 'Comparison', id: 'product-comparison' },
                { label: 'Contact', id: 'contact' }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="text-slate-300 hover:text-white transition-colors hover:translate-x-0.5 inline-flex items-center gap-1 duration-150 text-left leading-tight"
                  >
                    <span className="text-burgundy-400 text-[10px]">&rsaquo;</span>
                    <span className="truncate">{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Products & Formulations (Column 2 of 3 on Mobile) */}
          <div className="col-span-1 lg:col-span-3 space-y-2.5 sm:space-y-3">
            <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-white flex items-center gap-1 sm:gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-burgundy-400 shrink-0" />
              <span className="truncate">Our Products</span>
            </h4>
            <ul className="space-y-2 sm:space-y-2 text-[10px] sm:text-sm">
              {FEATURED_PRODUCTS.map((prod) => (
                <li key={prod.id}>
                  <button
                    onClick={() => onNavigate('products')}
                    className="text-slate-300 hover:text-white transition-colors text-left block group leading-tight"
                  >
                    <span className="font-medium text-white group-hover:text-burgundy-200 transition-colors block text-[10px] sm:text-sm truncate">
                      {prod.name}
                    </span>
                    <span className="text-[9px] sm:text-2xs text-slate-400 block truncate">{prod.category}</span>
                  </button>
                </li>
              ))}
              <li className="pt-1">
                <button
                  onClick={() => onNavigate('download-catalogue')}
                  className="text-[10px] sm:text-xs text-burgundy-300 hover:text-burgundy-200 font-bold inline-flex items-center gap-1 transition-colors leading-tight"
                >
                  <FileText className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
                  <span className="line-clamp-2">Catalogue &rarr;</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Factory & Commercial Inquiries (Column 3 of 3 on Mobile) */}
          <div className="col-span-1 lg:col-span-3 space-y-2.5 sm:space-y-3.5">
            <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-white flex items-center gap-1 sm:gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-burgundy-400 shrink-0" />
              <span className="truncate">Inquiries</span>
            </h4>

            <div className="space-y-2 sm:space-y-2.5 text-[10px] sm:text-sm text-slate-300">
              <div className="flex items-start gap-1 sm:gap-2">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-burgundy-300 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300 leading-tight">
                  Tamil Nadu, India.
                </span>
              </div>
              <div className="flex items-start gap-1 sm:gap-2">
                <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-burgundy-300 flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:sales@shanmugamindustries.com"
                  className="text-white hover:text-burgundy-200 font-medium transition-colors break-all leading-tight text-[9px] sm:text-xs lg:text-sm"
                >
                  sales@shanmugam
                  <span className="block sm:inline">industries.com</span>
                </a>
              </div>
              <div className="flex items-start gap-1 sm:gap-2">
                <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-burgundy-300 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300 leading-tight">Mon&ndash;Sat 8:30-6:00</span>
              </div>
            </div>

            <div className="pt-1">
              <button
                type="button"
                onClick={onRequestQuote}
                className="w-full inline-flex items-center justify-center gap-1 px-2 sm:px-6 py-2 sm:py-3 rounded-full bg-burgundy hover:bg-burgundy-dark text-white font-bold text-[10px] sm:text-xs shadow-md transition-all active:scale-95 border border-burgundy-400/30"
              >
                <span className="truncate">Get Quote</span>
                <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
              </button>
            </div>
          </div>
        </div>

        {/* 3. Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>&copy; 2026 Shanmugam Industries. All rights reserved.</p>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <span className="text-white font-medium">Precision Materials. Stronger Finishes.</span>
            <span className="text-slate-600 hidden sm:inline">&bull;</span>
            <span className="text-slate-400">Made in India</span>
            <span className="text-slate-600 hidden sm:inline">&bull;</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/15 hover:border-burgundy-400/50 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-all shadow-2xs group"
              aria-label="Back to top of page"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
