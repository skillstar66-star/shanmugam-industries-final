import React from 'react';
import { motion } from 'framer-motion';
import { Target, FlaskConical, ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  onLearnMore?: () => void;
  onRequestQuote: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onRequestQuote }) => {
  const smoothEase = [0.16, 1, 0.3, 1];

  return (
    <section
      id="about"
      className="py-16 sm:py-20 lg:py-24 bg-white border-b border-surface-border relative overflow-hidden"
    >
      {/* Background Subtle Ambience */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-burgundy/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-navy/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Text Column matching the reference layout */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.15, ease: smoothEase }}
            className="lg:col-span-6 space-y-6 text-left"
          >
            {/* Eyebrow: ── ABOUT SHANMUGAM INDUSTRIES ── */}
            <div className="inline-flex items-center gap-2.5 text-burgundy font-bold text-xs uppercase tracking-widest">
              <span className="w-8 h-[1.5px] bg-burgundy rounded-full" />
              <span>ABOUT SHANMUGAM INDUSTRIES</span>
              <span className="w-8 h-[1.5px] bg-burgundy rounded-full" />
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-navy tracking-tight leading-[1.18]">
              Pioneering Automotive <br className="hidden sm:inline" />
              <span className="text-burgundy">Refinish Formulations</span> <br className="hidden sm:inline" />
              with Integrity
            </h2>

            {/* Paragraph 1 */}
            <p className="text-sm sm:text-base text-body leading-relaxed">
              At <strong className="text-navy font-bold">Shanmugam Industries</strong>, we specialize in formulating high-performance automotive body fillers, metallic pastes, and specialty surface compounds engineered to deliver exceptional adhesion, rapid sanding, and lasting surface perfection.
            </p>

            {/* Paragraph 2 */}
            <p className="text-sm sm:text-base text-body leading-relaxed">
              Serving body shop craftsmen, collision centers, distributors, and industrial clients, our manufacturing facility combines advanced chemical mixing reactors with stringent raw material vetting. Every batch is calibrated to help automotive painters achieve superior finishes in less labor time.
            </p>

            {/* Core Values / Pillars with Circular Icons & Vertical Accent Line */}
            <div className="space-y-4 pt-2">
              {/* Pillar 1: Our Mission */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full border-2 border-burgundy/25 bg-burgundy-50/70 flex items-center justify-center flex-shrink-0 text-burgundy shadow-2xs mt-0.5">
                  <Target className="w-5 h-5 text-burgundy" />
                </div>
                <div className="border-l-2 border-burgundy/30 pl-4 py-0.5">
                  <h4 className="text-base font-bold text-navy">Our Mission</h4>
                  <p className="text-xs sm:text-sm text-body leading-relaxed mt-0.5">
                    To supply technicians with world-class surface preparation materials that simplify application and elevate repair longevity.
                  </p>
                </div>
              </div>

              {/* Pillar 2: Formulation Standard */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full border-2 border-burgundy/25 bg-burgundy-50/70 flex items-center justify-center flex-shrink-0 text-burgundy shadow-2xs mt-0.5">
                  <FlaskConical className="w-5 h-5 text-burgundy" />
                </div>
                <div className="border-l-2 border-burgundy/30 pl-4 py-0.5">
                  <h4 className="text-base font-bold text-navy">Formulation Standard</h4>
                  <p className="text-xs sm:text-sm text-body leading-relaxed mt-0.5">
                    Strict batch consistency ensuring identical cure speeds, buttery spreadability, and zero pinholing regardless of weather.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={onRequestQuote}
                className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-burgundy hover:bg-burgundy-dark text-white font-bold text-sm sm:text-base rounded-full shadow-md hover:shadow-xl transition-all duration-200 active:scale-[0.98] group"
              >
                <span>Partner With Shanmugam Industries</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>

          {/* Right Showcase Column matching reference image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.3, ease: smoothEase }}
            className="lg:col-span-6 relative"
          >
            {/* Main Showcase Container */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white group">
              <img
                src="/images/about-chemist-showcase.jpg"
                alt="Shanmugam Industries Chemist evaluating 2K body filler and metal paste formulation in clean laboratory"
                className="w-full h-auto object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                loading="lazy"
              />

              {/* Subtle Corner Vignette & Badge */}
              <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-burgundy/30 via-transparent to-transparent pointer-events-none" />
              <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded bg-burgundy/90 backdrop-blur-xs text-white text-[11px] font-bold uppercase tracking-wider shadow-sm">
                R&amp;D Lab &bull; In-House Formulation
              </div>

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-navy-dark/85 via-navy-dark/40 to-transparent p-5 sm:p-6 text-white">
                <span className="text-[11px] font-bold uppercase tracking-wider text-burgundy-200 block">
                  Shanmugam 2K Body Filler &bull; Metal Paste &bull; Hardener
                </span>
                <p className="text-xs sm:text-sm font-semibold text-slate-100 mt-1 leading-snug">
                  Precision-calibrated chemical mixing reactors ensuring smooth spreadability and reliable cure kinetics.
                </p>
              </div>
            </div>

            {/* Geometric Accent Border Behind */}
            <div className="absolute -bottom-3 -right-3 -z-10 w-full h-full rounded-2xl border-2 border-burgundy/20 pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
