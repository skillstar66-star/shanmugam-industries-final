import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Cog, FlaskConical, ArrowRight } from 'lucide-react';

export const QualitySection: React.FC = () => {
  const qualityFeatures = [
    {
      icon: ShieldCheck,
      title: 'Quality Control',
      desc: 'Standardized raw material screening, resin purity validation, and continuous monitoring throughout the polymerization and compounding phases.'
    },
    {
      icon: Cog,
      title: 'Advanced Manufacturing',
      desc: 'Precision high-torque planetary vacuum mixers that eliminate air pockets and micro-porosity before automated can and pail filling.'
    },
    {
      icon: FlaskConical,
      title: 'Rigorous Quality Testing',
      desc: 'Every production batch is tested for cure kinetics, pot-life precision, tensile shear bond strength, and feather-edge feathering fidelity.'
    }
  ];

  const smoothEase = [0.16, 1, 0.3, 1];

  return (
    <section id="quality" className="relative py-14 sm:py-18 lg:py-22 bg-[#FAFAFA] border-b border-surface-border overflow-hidden">
      {/* Decorative Bottom-Right Angled Burgundy Ribbon Accent */}
      <div className="absolute -bottom-6 -right-6 w-32 h-32 pointer-events-none opacity-90 hidden sm:block">
        <svg viewBox="0 0 120 120" fill="none" className="w-full h-full">
          <polygon points="120,40 120,120 40,120 70,80" fill="#65002F" />
          <polygon points="120,10 120,35 65,120 45,120" fill="#85003F" />
          <polygon points="110,0 120,0 120,5 35,120 20,120" fill="#B00E4A" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Authentic Photographic Mosaic Showcase */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.15, ease: smoothEase }}
            className="lg:col-span-6 flex justify-center"
          >
            <div className="relative w-full max-w-xl group">
              {/* Mosaic Image Container with Drop Shadow */}
              <div className="relative rounded-2xl overflow-hidden shadow-[0_12px_36px_-6px_rgba(29,52,67,0.12)] border border-gray-100 bg-white transition-transform duration-500 group-hover:scale-[1.01]">
                <picture>
                  <source srcSet="/images/quality-collage.webp" type="image/webp" />
                  <img
                    src="/images/quality-collage.png"
                    alt="Shanmugam Industries Modern Manufacturing Facility, Laboratory Testing, and Quality Inspection"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </picture>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial & 3 Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.25, ease: smoothEase }}
            className="lg:col-span-6 text-left space-y-6"
          >
            {/* Eyebrow with Line */}
            <div>
              <div className="inline-flex items-center gap-3 mb-2">
                <span className="text-xs font-bold tracking-[0.16em] text-burgundy uppercase">
                  OUR QUALITY & MANUFACTURING
                </span>
                <span className="w-8 h-[2px] bg-burgundy/60 inline-block rounded-full" />
              </div>

              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-black tracking-tight leading-[1.12] text-navy">
                Quality You Can Trust, <br />
                <span className="text-burgundy">Manufactured with Precision.</span>
              </h2>

              {/* Supporting Description */}
              <p className="text-sm sm:text-base text-body font-normal leading-relaxed mt-3 max-w-xl">
                We follow strict quality control practices and advanced manufacturing processes to ensure consistent performance, reliability and excellence in every batch.
              </p>
            </div>

            {/* 3 Interactive Feature Cards */}
            <div className="space-y-4 pt-1">
              {qualityFeatures.map((feat, idx) => {
                const Icon = feat.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: 0.35 + idx * 0.12,
                      ease: smoothEase
                    }}
                    className="group flex items-center justify-between gap-4 p-4 sm:p-5 rounded-2xl bg-white border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-card-hover hover:border-burgundy-200 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4 flex-1">
                      {/* Pink/Burgundy Circular Icon Badge */}
                      <div className="w-12 h-12 rounded-full bg-burgundy-50 border border-burgundy-100 flex items-center justify-center text-burgundy flex-shrink-0 mt-0.5 group-hover:bg-burgundy group-hover:text-white transition-colors duration-200">
                        <Icon className="w-5 h-5" />
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-base font-bold text-navy mb-1 group-hover:text-burgundy transition-colors">
                          {feat.title}
                        </h3>
                        <p className="text-xs sm:text-[13px] text-body leading-relaxed">
                          {feat.desc}
                        </p>
                      </div>
                    </div>

                    {/* Right Arrow Icon */}
                    <div className="flex-shrink-0 text-burgundy opacity-80 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200 pl-2">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
