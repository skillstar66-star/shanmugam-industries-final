import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onComplete?: () => void;
  onStartExit?: () => void;
  minDuration?: number; // total duration in ms (~2200ms)
}

// 17 letters extracted from the user's official wordmark logo
const SHANMUGAM_LETTERS = [
  { id: 0, char: 'S', isBurgundy: false },
  { id: 1, char: 'H', isBurgundy: false },
  { id: 2, char: 'A', isBurgundy: true }, // Burgundy Stylized Apex
  { id: 3, char: 'N', isBurgundy: false },
  { id: 4, char: 'M', isBurgundy: false },
  { id: 5, char: 'U', isBurgundy: false },
  { id: 6, char: 'G', isBurgundy: false },
  { id: 7, char: 'A', isBurgundy: true }, // Burgundy Stylized Apex
  { id: 8, char: 'M', isBurgundy: false },
];

const INDUSTRY_LETTERS = [
  { id: 9, char: 'I', isBurgundy: false },
  { id: 10, char: 'N', isBurgundy: false },
  { id: 11, char: 'D', isBurgundy: false },
  { id: 12, char: 'U', isBurgundy: false },
  { id: 13, char: 'S', isBurgundy: false },
  { id: 14, char: 'T', isBurgundy: false },
  { id: 15, char: 'R', isBurgundy: false },
  { id: 16, char: 'Y', isBurgundy: false },
];

export const Preloader: React.FC<PreloaderProps> = ({
  onComplete,
  onStartExit,
  minDuration = 2200,
}) => {
  const [isFinished, setIsFinished] = useState<boolean>(false);

  useEffect(() => {
    // Lock scroll while preloader is active
    document.body.style.overflow = 'hidden';

    const timer = setTimeout(() => {
      setIsFinished(true);
      document.body.style.overflow = '';
      if (onStartExit) onStartExit();

      setTimeout(() => {
        if (onComplete) onComplete();
      }, 550); // Allow exit transition to complete smoothly
    }, minDuration);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, [minDuration, onComplete, onStartExit]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          key="shanmugam-letter-preloader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.04,
            filter: 'blur(8px)',
            transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
          }}
          className="fixed inset-0 z-[99999] bg-[#FFFFFF] flex flex-col items-center justify-center overflow-hidden select-none px-4"
        >
          {/* Subtle Ambient Radial Glow in Shanmugam Burgundy */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            <div className="w-[600px] h-[300px] bg-burgundy/5 rounded-full blur-[100px]" />
          </div>

          {/* Precision Tech Background Grid Lines */}
          <div
            className="absolute inset-0 pointer-events-none opacity-40"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(133, 0, 63, 0.04) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(133, 0, 63, 0.04) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
            }}
          />

          {/* Main Wordmark Container */}
          <div className="relative z-10 max-w-4xl w-full flex flex-col items-center text-center">
            
            {/* Top Eyebrow Badge */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-burgundy-50 border border-burgundy-100 text-burgundy text-[11px] sm:text-xs font-bold uppercase tracking-widest mb-6 sm:mb-8 shadow-2xs"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-burgundy animate-pulse" />
              <span>PRECISION SURFACE TECHNOLOGIES</span>
            </motion.div>

            {/* Kinetic Letter Row: SHANMUGAM  INDUSTRY (Single Line & Center-Out Split) */}
            <div className="relative flex items-center justify-center flex-nowrap whitespace-nowrap overflow-visible mb-4 sm:mb-6 w-full max-w-4xl px-2 select-none">
              
              {/* Center Divider Spark: Illuminates then parts */}
              <motion.div
                initial={{ scaleY: 0, opacity: 0 }}
                animate={{ scaleY: [0, 1.2, 0], opacity: [0, 1, 0] }}
                transition={{ duration: 0.75, delay: 0.12, ease: 'easeOut' }}
                className="absolute left-1/2 -translate-x-1/2 w-[2px] h-8 sm:h-12 md:h-14 bg-gradient-to-b from-transparent via-burgundy-500 to-transparent pointer-events-none z-30"
              />

              {/* Shimmer Light Sweep Effect Over Letters */}
              <motion.div
                initial={{ x: '-150%' }}
                animate={{ x: '180%' }}
                transition={{
                  repeat: Infinity,
                  repeatDelay: 1.4,
                  duration: 2.0,
                  ease: 'easeInOut',
                }}
                className="absolute inset-y-0 w-28 bg-gradient-to-r from-transparent via-white/80 to-transparent skew-x-[-25deg] pointer-events-none z-20"
              />

              {/* WORD 1: SHANMUGAM — Slides from Center to LEFT */}
              <motion.div
                initial={{ x: 65, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.75,
                  delay: 0.18,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex items-center gap-[2px] sm:gap-1.5 md:gap-2 mr-2 sm:mr-3.5 md:mr-5 flex-shrink-0"
              >
                {SHANMUGAM_LETTERS.map((letter, index) => {
                  // Letters radiate from center to left: index 8 (M) closest to center reveals first
                  const distanceFromCenter = 8 - index;
                  const letterDelay = 0.2 + distanceFromCenter * 0.04;

                  return (
                    <motion.div
                      key={`shanmugam-${letter.id}`}
                      initial={{
                        opacity: 0,
                        x: 24,
                        scale: 0.75,
                        filter: 'blur(5px)',
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                        scale: 1,
                        filter: 'blur(0px)',
                      }}
                      transition={{
                        duration: 0.45,
                        delay: letterDelay,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      whileHover={{ scale: 1.15, y: -3 }}
                      className="relative flex items-center justify-center flex-shrink-0"
                    >
                      <img
                        src={`/images/letters/letter_${letter.id}.png`}
                        alt={letter.char}
                        className={`h-6 sm:h-9 md:h-12 lg:h-14 w-auto object-contain transition-all ${
                          letter.isBurgundy
                            ? 'drop-shadow-[0_0_12px_rgba(133,0,63,0.45)]'
                            : 'drop-shadow-xs'
                        }`}
                      />

                      {/* Burgundy Glow Pulse Behind Stylized "A"s */}
                      {letter.isBurgundy && (
                        <motion.div
                          animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.35, 0.75, 0.35],
                          }}
                          transition={{
                            duration: 1.6,
                            repeat: Infinity,
                            ease: 'easeInOut',
                          }}
                          className="absolute inset-0 bg-burgundy/25 rounded-full blur-md -z-10"
                        />
                      )}
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* WORD 2: INDUSTRY — Slides from Center to RIGHT */}
              <motion.div
                initial={{ x: -65, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.75,
                  delay: 0.18,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex items-center gap-[2px] sm:gap-1.5 md:gap-2 flex-shrink-0"
              >
                {INDUSTRY_LETTERS.map((letter, index) => {
                  // Letters radiate from center to right: index 0 (I) closest to center reveals first
                  const distanceFromCenter = index;
                  const letterDelay = 0.2 + distanceFromCenter * 0.04;

                  return (
                    <motion.div
                      key={`industry-${letter.id}`}
                      initial={{
                        opacity: 0,
                        x: -24,
                        scale: 0.75,
                        filter: 'blur(5px)',
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                        scale: 1,
                        filter: 'blur(0px)',
                      }}
                      transition={{
                        duration: 0.45,
                        delay: letterDelay,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      whileHover={{ scale: 1.15, y: -3 }}
                      className="relative flex items-center justify-center flex-shrink-0"
                    >
                      <img
                        src={`/images/letters/letter_${letter.id}.png`}
                        alt={letter.char}
                        className="h-6 sm:h-9 md:h-12 lg:h-14 w-auto object-contain drop-shadow-xs"
                      />
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>

            {/* Subtitle with Flanking Burgundy Lines: "———— Build for perfect finishes ————" */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0.7, y: 14 }}
              animate={{ opacity: 1, scaleX: 1, y: 0 }}
              transition={{
                duration: 0.65,
                delay: 1.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="w-full max-w-xl sm:max-w-2xl px-4"
            >
              <img
                src="/images/letters/subtitle.png"
                alt="Build for perfect finishes"
                className="w-full h-auto max-h-7 sm:max-h-9 object-contain mx-auto drop-shadow-2xs"
              />
            </motion.div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
