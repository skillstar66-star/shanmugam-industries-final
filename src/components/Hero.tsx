import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Cog, Users } from 'lucide-react';

interface HeroProps {
  onExploreProducts: () => void;
  onTalkToTeam: () => void;
  isLoaded?: boolean;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreProducts,
  onTalkToTeam,
  isLoaded = true,
}) => {
  // Smooth cinematic easing
  const smoothEase = [0.16, 1, 0.3, 1];

  return (
    <section
      id="home"
      className="relative w-full min-h-[420px] sm:min-h-[460px] md:min-h-[500px] lg:min-h-[540px] xl:min-h-[580px] flex items-center overflow-hidden border-b border-surface-border bg-white"
    >
      {/* Background Image: Authentic Shanmugam Industries Workshop & Packaging Line */}
      <motion.div
        initial={{ opacity: 0, scale: 1.03 }}
        animate={isLoaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.03 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className="absolute inset-0 z-0"
      >
        <picture>
          <source srcSet="/images/hero-bg.webp" type="image/webp" />
          <img
            src="/images/image.png"
            alt="Shanmugam Industries Metal Paste, Body Filler 2K, and Hardener product range"
            className="w-full h-full object-cover object-[78%_center] md:object-[72%_center] lg:object-right"
            loading="eager"
          />
        </picture>

        {/* Soft white gradient mask on left ensuring crystal-clear text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/30 md:via-white/80 md:to-transparent lg:w-[58%]" />

        {/* Vertical gradient on small mobile devices */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/60 to-transparent sm:hidden" />
      </motion.div>

      {/* Hero Content Container - positioned elevated with smooth staggered entrance */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 lg:pt-8 pb-6 sm:pb-8 lg:pb-10 w-full -translate-y-2 sm:-translate-y-4 lg:-translate-y-6">
        <div className="max-w-xl lg:max-w-2xl text-left space-y-3.5 sm:space-y-4">
          
          {/* Eyebrow - Delayed entrance */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.6, delay: 0.2, ease: smoothEase }}
            className="text-xs sm:text-[13px] font-bold tracking-[0.18em] text-burgundy uppercase"
          >
            AUTOMOTIVE REFINISH SOLUTIONS
          </motion.p>

          {/* Headline - Delayed entrance */}
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
            transition={{ duration: 0.7, delay: 0.4, ease: smoothEase }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-black tracking-tight leading-[1.08] text-navy"
          >
            Stronger Surfaces <br />
            <span className="text-burgundy">Better Finishes.</span>
          </motion.h1>

          {/* Supporting Copy - Delayed entrance */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.6, ease: smoothEase }}
            className="text-sm sm:text-base lg:text-[16px] text-body font-normal leading-relaxed max-w-lg"
          >
            High-performance metal paste and automotive body filler solutions for professional refinishing and repair.
          </motion.p>

          {/* CTA Buttons - Delayed entrance */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            transition={{ duration: 0.6, delay: 0.8, ease: smoothEase }}
            className="flex flex-row items-center gap-3 sm:gap-4 pt-1"
          >
            {/* Primary Burgundy Button */}
            <button
              onClick={onExploreProducts}
              className="group inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-2.5 sm:py-3 bg-burgundy hover:bg-burgundy-800 text-white font-semibold text-xs sm:text-sm rounded-full shadow-sm hover:shadow transition-all duration-200 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-burgundy focus-visible:ring-offset-2"
            >
              <span>Explore Products</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>

            {/* Secondary White/Burgundy Outlined Button */}
            <button
              onClick={onTalkToTeam}
              className="inline-flex items-center justify-center px-6 sm:px-7 py-2.5 sm:py-3 bg-white hover:bg-burgundy-50 text-burgundy font-semibold text-xs sm:text-sm rounded-full border border-burgundy transition-all duration-200 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-burgundy focus-visible:ring-offset-2 shadow-xs"
            >
              <span>Talk to Our Team</span>
            </button>
          </motion.div>

          {/* Integrated Trust Highlights Row - Staggered Delayed Entrance */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.7, delay: 1.0, ease: smoothEase }}
            className="pt-4 sm:pt-5 lg:pt-6 flex flex-wrap items-center gap-4 sm:gap-6 lg:gap-8"
          >
            {/* Item 1: Consistent Quality */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={isLoaded ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
              transition={{ duration: 0.5, delay: 1.1, ease: smoothEase }}
              className="flex items-center gap-2.5"
            >
              <div className="w-8 h-8 rounded-full border border-burgundy/30 bg-burgundy-50/50 flex items-center justify-center text-burgundy flex-shrink-0">
                <ShieldCheck className="w-4 h-4 text-burgundy" />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-navy leading-tight">Consistent</p>
                <p className="text-xs font-bold text-navy leading-tight">Quality</p>
              </div>
            </motion.div>

            {/* Vertical Divider */}
            <div className="hidden sm:block h-7 w-[1px] bg-gray-200" />

            {/* Item 2: High-Performance Formulation */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={isLoaded ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
              transition={{ duration: 0.5, delay: 1.25, ease: smoothEase }}
              className="flex items-center gap-2.5"
            >
              <div className="w-8 h-8 rounded-full border border-burgundy/30 bg-burgundy-50/50 flex items-center justify-center text-burgundy flex-shrink-0">
                <Cog className="w-4 h-4 text-burgundy" />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-navy leading-tight">High-Performance</p>
                <p className="text-xs font-bold text-navy leading-tight">Formulation</p>
              </div>
            </motion.div>

            {/* Vertical Divider */}
            <div className="hidden sm:block h-7 w-[1px] bg-gray-200" />

            {/* Item 3: Trusted by Professionals */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={isLoaded ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
              transition={{ duration: 0.5, delay: 1.4, ease: smoothEase }}
              className="flex items-center gap-2.5"
            >
              <div className="w-8 h-8 rounded-full border border-burgundy/30 bg-burgundy-50/50 flex items-center justify-center text-burgundy flex-shrink-0">
                <Users className="w-4 h-4 text-burgundy" />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-navy leading-tight">Trusted by</p>
                <p className="text-xs font-bold text-navy leading-tight">Professionals</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
