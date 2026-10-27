import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

interface CTASectionProps {
  onRequestQuote: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onRequestQuote }) => {
  return (
    <section className="relative overflow-hidden bg-burgundy py-16 sm:py-20 lg:py-24 text-white">
      {/* Background image with dark burgundy overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero_slide_2.webp"
          alt="Automotive refinishing workshop background"
          className="w-full h-full object-cover object-center opacity-15 mix-blend-luminosity scale-105"
          loading="lazy"
        />
        {/* Deep rich burgundy gradient overlay for optimal readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-burgundy-900/95 via-burgundy-800/90 to-burgundy-900/95" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left"
        >
          {/* Text block */}
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-burgundy-100 text-xs font-semibold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>LET'S WORK TOGETHER</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Need the Right Solution for Your Project?
            </h2>

            <p className="text-base sm:text-lg text-burgundy-100/90 leading-relaxed max-w-xl">
              Get in touch with our team for product information, technical support and customized solutions.
            </p>
          </div>

          {/* Action CTA Button */}
          <div className="flex-shrink-0 w-full sm:w-auto">
            <button
              onClick={onRequestQuote}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4 bg-white hover:bg-surface text-burgundy-800 font-bold text-base rounded-full shadow-xl hover:shadow-2xl transition-all duration-200 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-burgundy"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-5 h-5 text-burgundy" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
