import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, FileCheck, FlaskConical, ArrowRight, Cog, Users, X, Download, ChevronLeft, ChevronRight } from 'lucide-react';

interface CertModalData {
  title: string;
  category: string;
  desc: string;
  image: string;
  details: string[];
}

export const CertificationsSection: React.FC = () => {
  const [activeModal, setActiveModal] = useState<CertModalData | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      const cardWidth = scrollContainerRef.current.clientWidth * 0.84;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(Math.min(Math.max(index, 0), 2));
    }
  };

  const scrollToCard = (index: number) => {
    if (scrollContainerRef.current) {
      const card = scrollContainerRef.current.children[index] as HTMLElement;
      if (card) {
        card.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }
    }
  };

  const scrollByDirection = (dir: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.clientWidth * 0.84;
      scrollContainerRef.current.scrollBy({
        left: dir === 'left' ? -cardWidth : cardWidth,
        behavior: 'smooth',
      });
    }
  };

  const certCards = [
    {
      id: 'iso-9001',
      icon: ShieldCheck,
      badge: 'CERTIFIED',
      title: 'ISO 9001:2015',
      desc: 'Certified Quality Management System guaranteeing consistent, premium manufacturing processes.',
      image: '/images/cert-iso.webp',
      actionText: 'View Certificate',
      details: [
        'Certified under international standard ISO 9001:2015 for automotive chemical & filler formulation',
        'Standardized raw materials testing & computerized batch viscosity verification',
        'Strict trace batch numbers stamped on every can, pail, and carton',
        'Annual third-party management system audit and recertification compliance'
      ]
    },
    {
      id: 'export-compliance',
      icon: FileCheck,
      badge: 'GLOBAL TRADE',
      title: 'Export Compliance',
      desc: 'Full documentation, MSDS, and packaging compliance for international shipping and trade.',
      image: '/images/cert-export.webp',
      actionText: 'View Documentation',
      details: [
        'Complete Material Safety Data Sheets (MSDS / SDS) compliant with GHS standards',
        'Certified packaging approved for sea cargo and air freight hazmat protocols',
        'Certificate of Analysis (COA) supplied with every export shipment',
        'Active container dispatch to Southeast Asia, Middle East, and global dealer networks'
      ]
    },
    {
      id: 'lab-test-reports',
      icon: FlaskConical,
      badge: 'QUALITY ASSURANCE',
      title: 'Lab Test Reports',
      desc: 'Verified adhesion, drying time, and durability reports from certified independent laboratories.',
      image: '/images/cert-lab.webp',
      actionText: 'View Reports',
      details: [
        'Cross-hatch adhesion tested on bare steel, galvanized zinc, and aluminum substrates',
        'Pot-life, cure kinetics, and sandability timeline verified in climatic chambers',
        'Tensile shear strength and vibration resilience certification',
        'Zero bleed-through and topcoat compatibility reports available for body shops'
      ]
    }
  ];

  const smoothEase = [0.16, 1, 0.3, 1];

  return (
    <section id="certifications" className="relative py-14 sm:py-18 lg:py-22 bg-white border-b border-surface-border overflow-hidden">
      {/* Decorative Top-Right Angled Burgundy Ribbon Accent */}
      <div className="absolute -top-6 -right-6 w-32 h-32 pointer-events-none opacity-90 hidden sm:block">
        <svg viewBox="0 0 120 120" fill="none" className="w-full h-full">
          <polygon points="120,40 120,0 80,0" fill="#65002F" />
          <polygon points="120,80 120,50 40,0 15,0" fill="#85003F" />
          <polygon points="120,110 120,90 20,0 0,0" fill="#B00E4A" />
        </svg>
      </div>

      {/* Decorative Bottom-Left Angled Burgundy Ribbon Accent */}
      <div className="absolute -bottom-6 -left-6 w-32 h-32 pointer-events-none opacity-90 hidden sm:block">
        <svg viewBox="0 0 120 120" fill="none" className="w-full h-full rotate-180">
          <polygon points="120,40 120,0 80,0" fill="#65002F" />
          <polygon points="120,80 120,50 40,0 15,0" fill="#85003F" />
          <polygon points="120,110 120,90 20,0 0,0" fill="#B00E4A" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Eyebrow: Centered with Lines */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: smoothEase }}
          className="inline-flex items-center justify-center gap-3 mb-2.5"
        >
          <span className="w-8 h-[2px] bg-burgundy/60 inline-block rounded-full" />
          <span className="text-xs font-bold tracking-[0.18em] text-burgundy uppercase">
            GLOBAL COMPLIANCE
          </span>
          <span className="w-8 h-[2px] bg-burgundy/60 inline-block rounded-full" />
        </motion.div>

        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.1, ease: smoothEase }}
          className="text-3xl sm:text-4xl lg:text-[44px] font-black tracking-tight text-navy leading-tight mb-3"
        >
          Certifications & <span className="text-burgundy">Lab Reports</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.2, ease: smoothEase }}
          className="text-sm sm:text-base text-body font-normal leading-relaxed max-w-2xl mx-auto mb-12 sm:mb-14"
        >
          Our products are rigorously tested and certified to meet the highest international standards, ensuring 100% reliability for our global dealers and customers.
        </motion.p>

        {/* Three Certification Cards: Mobile Horizontal Swipe Carousel & Desktop Grid */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-7 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory md:snap-none pb-4 pt-1 -mx-4 px-4 sm:-mx-6 sm:px-6 md:mx-0 md:px-0 mb-4 md:mb-14 text-left scrollbar-none scroll-smooth"
        >
          {certCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.6,
                  delay: 0.15 + idx * 0.1,
                  ease: smoothEase
                }}
                onClick={() =>
                  setActiveModal({
                    title: card.title,
                    category: card.badge,
                    desc: card.desc,
                    image: card.image,
                    details: card.details
                  })
                }
                className="w-[84vw] max-w-[340px] md:w-auto md:max-w-none shrink-0 md:shrink snap-center md:snap-align-none group relative flex items-center justify-between gap-3 sm:gap-4 p-5 sm:p-6 rounded-2xl bg-white border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-card-hover hover:border-burgundy-200 transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden"
              >
                {/* Left Text Column inside Card */}
                <div className="flex-1 min-w-0 pr-1">
                  {/* Circular Icon */}
                  <div className="w-11 h-11 rounded-full bg-burgundy-50 border border-burgundy-100 flex items-center justify-center text-burgundy mb-3 group-hover:bg-burgundy group-hover:text-white transition-colors duration-200">
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Badge */}
                  <span className="block text-[11px] font-bold tracking-wider text-burgundy uppercase mb-1">
                    {card.badge}
                  </span>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-navy mb-2 tracking-tight group-hover:text-burgundy transition-colors">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-[13px] text-body leading-relaxed mb-4 line-clamp-3">
                    {card.desc}
                  </p>

                  {/* Action Link */}
                  <div className="pt-1">
                    <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-burgundy group-hover:text-burgundy-800 transition-colors">
                      <span>{card.actionText}</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>

                {/* Right Image Thumbnail inside Card */}
                <div className="w-24 sm:w-28 md:w-32 aspect-[4/5] rounded-xl overflow-hidden bg-gray-50 border border-gray-100 flex-shrink-0 self-center shadow-xs">
                  <picture>
                    <source srcSet={card.image} type="image/webp" />
                    <img
                      src={card.image.replace('.webp', '.png')}
                      alt={card.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </picture>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile Swipe Pagination Dots & Navigation Chevron Strip */}
        <div className="flex md:hidden items-center justify-between mb-8 px-1 select-none">
          {/* Active Dot Indicators */}
          <div className="flex items-center gap-1.5">
            {certCards.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => scrollToCard(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeIndex === i ? 'w-6 bg-burgundy' : 'w-1.5 bg-slate-300'
                }`}
                aria-label={`Go to certification ${i + 1}`}
              />
            ))}
          </div>

          {/* Quick Prev / Next Chevron Arrow Pills on Mobile */}
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => scrollByDirection('left')}
              className="w-8 h-8 rounded-full bg-surface border border-surface-border flex items-center justify-center text-navy hover:text-burgundy transition-colors active:scale-90 shadow-2xs"
              aria-label="Previous certification"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => scrollByDirection('right')}
              className="w-8 h-8 rounded-full bg-burgundy text-white flex items-center justify-center transition-colors active:scale-90 shadow-2xs"
              aria-label="Next certification"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Trust Indicators Strip */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20px' }}
          transition={{ duration: 0.6, delay: 0.35, ease: smoothEase }}
          className="inline-flex flex-wrap items-center justify-center gap-6 sm:gap-10 lg:gap-12 py-3 px-6 rounded-2xl bg-surface/60 border border-surface-border text-left"
        >
          {/* Item 1: Trusted Quality */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full border border-burgundy/30 bg-burgundy-50 flex items-center justify-center text-burgundy flex-shrink-0">
              <ShieldCheck className="w-4 h-4 text-burgundy" />
            </div>
            <div>
              <p className="text-xs font-bold text-navy leading-tight">Trusted</p>
              <p className="text-xs font-bold text-navy leading-tight">Quality</p>
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="hidden sm:block h-6 w-[1px] bg-gray-300" />

          {/* Item 2: Advanced Technology */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full border border-burgundy/30 bg-burgundy-50 flex items-center justify-center text-burgundy flex-shrink-0">
              <Cog className="w-4 h-4 text-burgundy" />
            </div>
            <div>
              <p className="text-xs font-bold text-navy leading-tight">Advanced</p>
              <p className="text-xs font-bold text-navy leading-tight">Technology</p>
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="hidden sm:block h-6 w-[1px] bg-gray-300" />

          {/* Item 3: Expert Team */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full border border-burgundy/30 bg-burgundy-50 flex items-center justify-center text-burgundy flex-shrink-0">
              <Users className="w-4 h-4 text-burgundy" />
            </div>
            <div>
              <p className="text-xs font-bold text-navy leading-tight">Expert</p>
              <p className="text-xs font-bold text-navy leading-tight">Team</p>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Modal Dialog for Certificate / Document Preview */}
      {activeModal && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto bg-navy-dark/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative bg-white w-full max-w-xl rounded-2xl shadow-2xl border border-surface-border overflow-hidden animate-in fade-in zoom-in-95 duration-200 text-left p-6 sm:p-8">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-surface text-navy hover:text-burgundy transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-start gap-4 mb-5">
              <img
                src={activeModal.image}
                alt={activeModal.title}
                className="w-20 h-24 object-cover rounded-lg border border-gray-200 shadow-sm flex-shrink-0"
              />
              <div>
                <span className="text-xs font-bold tracking-wider text-burgundy uppercase block mb-1">
                  {activeModal.category}
                </span>
                <h3 className="text-2xl font-bold text-navy mb-1.5">
                  {activeModal.title}
                </h3>
                <p className="text-xs text-body leading-relaxed">
                  {activeModal.desc}
                </p>
              </div>
            </div>

            <div className="space-y-2.5 pt-3 border-t border-surface-border mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-navy mb-2">
                Compliance & Verification Scope
              </h4>
              {activeModal.details.map((item, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-navy/90">
                  <ShieldCheck className="w-4 h-4 text-burgundy flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-surface-border flex items-center justify-end gap-3">
              <button
                onClick={() => setActiveModal(null)}
                className="px-5 py-2 text-xs font-semibold text-body hover:text-navy hover:bg-surface rounded-full transition-colors"
              >
                Close
              </button>
              <a
                href="#contact"
                onClick={() => setActiveModal(null)}
                className="inline-flex items-center gap-1.5 px-6 py-2.5 bg-burgundy hover:bg-burgundy-800 text-white text-xs font-bold rounded-full shadow-sm transition-all"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Request Official Copy</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
