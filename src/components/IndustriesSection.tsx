import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Car, Truck, Anchor, Wrench, Building2, Check, ChevronLeft, ChevronRight } from 'lucide-react';

export const IndustriesSection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      const cardWidth = scrollContainerRef.current.clientWidth * 0.82;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(Math.min(Math.max(index, 0), 5));
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
      const cardWidth = scrollContainerRef.current.clientWidth * 0.82;
      scrollContainerRef.current.scrollBy({
        left: dir === 'left' ? -cardWidth : cardWidth,
        behavior: 'smooth',
      });
    }
  };

  const industries = [
    {
      icon: Car,
      title: 'Automotive Refinishing & Bodyshops',
      desc: 'High-volume collision repair facilities and custom paint workshops requiring fast cycle times, effortless dry sanding, and zero pinholing.'
    },
    {
      icon: Truck,
      title: 'Commercial Fleet & Bus Builders',
      desc: 'Heavy-duty panel rebuilds, aluminum side wall repairs, and durable vibration-resistant surface leveling for transit and commercial transport.'
    },
    {
      icon: Anchor,
      title: 'Marine & Boat Repair',
      desc: 'Specialized water-resistant formulations engineered for fiberglass gelcoat restorations, osmosis repair, and salt spray protection.'
    },
    {
      icon: Wrench,
      title: 'Industrial Equipment & Metal Fab',
      desc: 'Structural metal fill pastes for casting defect repairs, machinery weld seam smoothing, and surface rebuilding before powder coating.'
    },
    {
      icon: Building2,
      title: 'Architectural & Specialty Repair',
      desc: 'Flexible bonding putties compatible with stone, composite architectural trims, wood moldings, and ceramic substrates.'
    }
  ];

  const smoothEase = [0.16, 1, 0.3, 1];

  return (
    <section id="industries" className="py-16 lg:py-24 bg-white border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: smoothEase }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-14"
        >
          <div className="inline-block px-3 py-1 rounded bg-burgundy-50 border border-burgundy-100 text-burgundy text-xs font-semibold tracking-wider uppercase mb-3">
            SECTORS WE SERVE
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight mb-4">
            Specialized Refinish Solutions Across Industries
          </h2>
          <div className="w-16 h-1 bg-burgundy mx-auto mb-4 rounded-full" />
          <p className="text-base sm:text-lg text-body leading-relaxed">
            From precision automotive collision repair to marine craft restoration and heavy fabrication, our high-adhesion pastes meet stringent industrial performance demands.
          </p>
        </motion.div>

        {/* Industry Cards: Horizontal Swipe on Mobile, 2/3-Col Grid on Desktop */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-none pb-4 md:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          {industries.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{
                  duration: 0.6,
                  delay: 0.15 + idx * 0.08,
                  ease: smoothEase
                }}
                className="w-[82vw] max-w-[320px] md:w-auto md:max-w-none shrink-0 md:shrink snap-center md:snap-align-none flex flex-col"
              >
                <div className="p-6 rounded-xl border border-surface-border bg-surface-light hover:bg-white hover:border-burgundy-300 hover:shadow-card transition-all duration-300 text-left group h-full flex flex-col">
                  <div className="w-12 h-12 rounded-lg bg-burgundy-50 border border-burgundy-100 flex items-center justify-center text-burgundy mb-4 group-hover:bg-burgundy group-hover:text-white transition-colors duration-200">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-navy mb-2 group-hover:text-burgundy transition-colors">
                    {ind.title}
                  </h3>
                  <p className="text-sm text-body leading-relaxed flex-1">
                    {ind.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}

          {/* Value proposition highlight card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{
              duration: 0.6,
              delay: 0.15 + industries.length * 0.08,
              ease: smoothEase
            }}
            className="w-[82vw] max-w-[320px] md:w-auto md:max-w-none shrink-0 md:shrink snap-center md:snap-align-none flex flex-col"
          >
            <div className="p-6 rounded-xl border border-dashed border-burgundy/40 bg-burgundy-50/50 flex flex-col justify-between text-left h-full">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-burgundy block mb-2">
                  OEM &amp; Custom Solutions
                </span>
                <h3 className="text-lg font-bold text-navy mb-2">Need a Custom Chemical Formulation?</h3>
                <p className="text-sm text-body leading-relaxed">
                  We develop tailored curing curves, specific densities, and proprietary viscosity profiles for bulk distributors and commercial manufacturers.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-burgundy-100 flex items-center gap-2 text-xs font-semibold text-burgundy">
                <Check className="w-4 h-4 text-burgundy shrink-0" />
                <span>Direct factory consultation available</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mobile Swipe Pagination Dots & Navigation Chevron Strip */}
        <div className="flex md:hidden items-center justify-between mt-3 px-1 select-none">
          {/* Active Dot Indicators */}
          <div className="flex items-center gap-1.5">
            {Array.from({ length: 6 }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => scrollToCard(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeIndex === i ? 'w-6 bg-burgundy' : 'w-1.5 bg-slate-300'
                }`}
                aria-label={`Go to sector ${i + 1}`}
              />
            ))}
          </div>

          {/* Quick Prev / Next Chevron Arrow Pills on Mobile */}
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => scrollByDirection('left')}
              className="w-8 h-8 rounded-full bg-surface border border-surface-border flex items-center justify-center text-navy hover:text-burgundy transition-colors active:scale-90 shadow-2xs"
              aria-label="Previous sector"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => scrollByDirection('right')}
              className="w-8 h-8 rounded-full bg-burgundy text-white flex items-center justify-center transition-colors active:scale-90 shadow-2xs"
              aria-label="Next sector"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
