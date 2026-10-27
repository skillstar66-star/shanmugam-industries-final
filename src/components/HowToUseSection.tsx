import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Wrench,
  FlaskConical,
  Layers,
  Clock,
  Sparkles,
  Info,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';

export const HowToUseSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const steps = [
    {
      num: 1,
      title: 'SURFACE PREP',
      badge: 'Step 1 of 5 &bull; Substrate Preparation',
      icon: Wrench,
      image: '/images/step1_damaged.png',
      shortDesc: 'Clean and sand the repair area. Remove all rust, dust, and grease thoroughly to ensure perfect adhesion.',
      fullDesc: 'Begin by dry-sanding the damaged substrate with coarse abrasive paper (P80 to P180 grit) to remove all corrosion, oxidized paint, and debris. Thoroughly degrease before and after sanding with an approved silicone-free solvent cleaner to guarantee superior mechanical adhesion.',
      spec: 'Recommended Grit: P80 - P180 Coarse',
      proTip: 'Always blow away residual sanding dust with dry compressed air before chemical application. Never apply filler over rust perforations or wet substrates.'
    },
    {
      num: 2,
      title: 'MIX PUTTY',
      badge: 'Step 2 of 5 &bull; Hardener Blending',
      icon: FlaskConical,
      image: '/images/step2_mix.png',
      shortDesc: 'Mix the putty with hardener in a 100:2 ratio. Blend until a uniform, consistent color is achieved.',
      fullDesc: 'Dispense the required quantity of polyester body filler onto a clean, non-porous mixing board. Add 2% Benzoyl Peroxide (BPO) red paste hardener (roughly a golf-ball sized scoop of paste to a pea-sized dot of hardener). Knead flat with a spatula until the compound achieves an even, streak-free uniform color.',
      spec: 'Mix Ratio: 100:2 (Paste : Hardener) &bull; Pot Life: 4-6 mins',
      proTip: 'Do not over-catalyze or under-catalyze. Excess hardener can cause peroxide bleed-through under pale basecoats; insufficient hardener results in gummy curing.'
    },
    {
      num: 3,
      title: 'APPLY EVENLY',
      badge: 'Step 3 of 5 &bull; Spatula Application',
      icon: Layers,
      image: '/images/step3_apply.png',
      shortDesc: 'Apply smoothly using a spreader. Work quickly and efficiently within the recommended pot life window.',
      fullDesc: 'Using a flexible stainless steel or rubber spatula, apply firm downward pressure on the initial wipe to force the resin deep into sanding scratches. Then build contour volume with smooth 45-degree strokes. Avoid excessive single-pass build to prevent solvent entrapment.',
      spec: 'Application Tool: Flexible Steel Spreader &bull; Pot Life: 5 mins',
      proTip: 'Work swiftly within the 4-6 minute pot life window. Stop spreading as soon as the paste begins to gel to avoid surface tearing.'
    },
    {
      num: 4,
      title: 'ALLOW TO DRY',
      badge: 'Step 4 of 5 &bull; Chemical Curing',
      icon: Clock,
      image: '/images/step4_sand.png',
      shortDesc: 'Let the applied putty set and dry completely for 15-30 minutes to ensure a strong, durable finish.',
      fullDesc: 'Allow the applied body filler to undergo exothermic polymerization and cure undisturbed for 20 to 30 minutes at standard shop temperature (25°C). For rapid turnaround collision repair, infrared short-wave lamps can be used at 60°C to accelerate cure time to 8-10 minutes.',
      spec: 'Air Dry: 20-30 mins at 25°C &bull; Short-Wave IR: 8-10 mins',
      proTip: 'Do not attempt to sand while the surface is still warm or tacky. Optimal curing is complete when sandpaper yields dry, powdery dust without gumming.'
    },
    {
      num: 5,
      title: 'SAND & FINISH',
      badge: 'Step 5 of 5 &bull; Contour Feather-Edging',
      icon: Sparkles,
      image: '/images/car_dent_after.png',
      shortDesc: 'After curing, sand the surface completely smooth. It is now perfectly prepared for primer and paint.',
      proTip: 'Always apply dry guide coat powder over the cured repair before final block sanding to expose minute contour irregularities and pinholes instantly.',
      fullDesc: 'Block-sand with P120 to shape contours and eliminate excess thickness, then feather-edge gently into surrounding factory primer with P240 followed by P320 grit. Clean thoroughly with tack cloth. The repaired area is now 100% prepared for 2K high-build primer surfacer.',
      spec: 'Finishing Grit: P240 - P320 Fine &bull; Ready for Primer Surfacer'
    }
  ];

  const current = steps[activeStep - 1];

  const nextStep = () => {
    setActiveStep((prev) => (prev < steps.length ? prev + 1 : 1));
  };

  const prevStep = () => {
    setActiveStep((prev) => (prev > 1 ? prev - 1 : steps.length));
  };

  return (
    <section className="py-6 sm:py-8 lg:py-10 bg-gradient-to-b from-[#08111F] via-[#0B1528] to-[#060D1A] text-white relative overflow-hidden border-y border-burgundy-900/40">
      {/* Brand Subtle Tech Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-15"
        style={{
          backgroundImage: `
            linear-gradient(to right, #85003F 1px, transparent 1px),
            linear-gradient(to bottom, #85003F 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Brand Burgundy Ambient Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-burgundy/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-burgundy-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Compact Header */}
        <div className="text-center max-w-xl mx-auto mb-5 sm:mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-burgundy-950/80 border border-burgundy-500/40 text-burgundy-200 text-3xs sm:text-2xs font-bold uppercase tracking-widest mb-1">
            <span className="w-1.5 h-1.5 rounded-full bg-burgundy-400 animate-pulse" />
            STEP BY STEP PROTOCOL
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            How To <span className="text-transparent bg-clip-text bg-gradient-to-r from-burgundy-300 via-rose-300 to-white">Use</span>
          </h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-burgundy via-burgundy-400 to-burgundy-200 rounded-full mx-auto mt-1" />
        </div>

        {/* 5 Connected Step Selector Nodes (Matching User Reference) */}
        <div className="overflow-x-auto pb-3 scrollbar-none mb-4">
          <div className="flex items-center justify-between min-w-[620px] max-w-4xl mx-auto px-2">
            {steps.map((step, index) => {
              const StepIcon = step.icon;
              const isSelected = activeStep === step.num;

              return (
                <React.Fragment key={step.num}>
                  {/* Step Button Node */}
                  <button
                    type="button"
                    onClick={() => setActiveStep(step.num)}
                    className="flex flex-col items-center text-center cursor-pointer group focus:outline-hidden"
                  >
                    {/* Concentric Circle with Burgundy Hexagon */}
                    <div
                      className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-dashed transition-all duration-300 flex items-center justify-center relative bg-[#091424] shadow-md ${
                        isSelected
                          ? 'border-burgundy-400 ring-4 ring-burgundy-500/40 scale-110 shadow-[0_0_15px_rgba(133,0,63,0.5)]'
                          : 'border-burgundy-900/60 group-hover:border-burgundy-400 group-hover:scale-105'
                      }`}
                    >
                      {/* Hexagon Graphic */}
                      <svg
                        viewBox="0 0 100 115"
                        className="w-9 h-10 sm:w-10 sm:h-11 drop-shadow-sm"
                      >
                        <defs>
                          <linearGradient
                            id={`hexStepper-${step.num}`}
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="100%"
                          >
                            <stop offset="0%" stopColor="#E45686" />
                            <stop offset="50%" stopColor="#85003F" />
                            <stop offset="100%" stopColor="#4D0024" />
                          </linearGradient>
                        </defs>
                        <polygon
                          points="50 4, 96 29, 96 86, 50 111, 4 86, 4 29"
                          fill={`url(#hexStepper-${step.num})`}
                          stroke="rgba(255,255,255,0.45)"
                          strokeWidth="2.5"
                        />
                        <text
                          x="50"
                          y="67"
                          textAnchor="middle"
                          fill="#ffffff"
                          fontSize="36"
                          fontWeight="900"
                          fontFamily="sans-serif"
                        >
                          {step.num}
                        </text>
                      </svg>

                      {/* Mini Floating Icon */}
                      <div
                        className={`absolute -top-1 -right-1 w-5 h-5 rounded flex items-center justify-center transition-all ${
                          isSelected
                            ? 'bg-burgundy text-white border border-burgundy-300'
                            : 'bg-[#142642] text-burgundy-200 border border-burgundy-500/40 group-hover:bg-burgundy group-hover:text-white'
                        }`}
                      >
                        <StepIcon className="w-2.5 h-2.5" />
                      </div>
                    </div>

                    {/* Step Title */}
                    <span
                      className={`text-2xs sm:text-[11px] font-black uppercase tracking-wider mt-2 transition-colors ${
                        isSelected ? 'text-burgundy-300' : 'text-slate-300 group-hover:text-white'
                      }`}
                    >
                      {step.title}
                    </span>
                  </button>

                  {/* Horizontal Connector Line Between Nodes */}
                  {index < steps.length - 1 && (
                    <div className="flex-1 px-1 flex items-center justify-center relative">
                      <div className="w-full h-[2px] bg-burgundy-950/90 relative">
                        {/* Glowing Connection Light Pill */}
                        <div
                          className={`absolute -top-[3px] left-1/2 -translate-x-1/2 w-3 sm:w-4 h-2 rounded-full transition-all duration-300 ${
                            activeStep > step.num
                              ? 'bg-burgundy-400 shadow-[0_0_10px_#E45686]'
                              : 'bg-burgundy-900/50'
                          }`}
                        />
                      </div>
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* Integrated Split Card: IMAGE & DESCRIPTION SHOWN TOGETHER WITHOUT SCROLLING */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.num}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="rounded-2xl bg-gradient-to-r from-[#0D1A2D] via-[#102238] to-[#0A1626] border border-burgundy-500/40 p-4 sm:p-5 lg:p-6 shadow-2xl overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 lg:gap-6 items-center text-left">
              
              {/* Left Column: Workshop Action Photo */}
              <div className="md:col-span-5 relative rounded-xl overflow-hidden bg-black/50 border border-white/10 shadow-md group aspect-[16/10] sm:aspect-[4/3] flex items-center justify-center">
                <img
                  src={current.image}
                  alt={`Step ${current.num}: ${current.title}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Badge Overlay */}
                <div className="absolute top-2.5 left-2.5 z-10 px-2.5 py-1 rounded bg-burgundy/95 backdrop-blur-xs text-white text-3xs sm:text-2xs font-bold uppercase tracking-wider shadow-sm flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  <span>Step {current.num} In Action</span>
                </div>
              </div>

              {/* Right Column: Full Description, Specs & Bodyshop Tip */}
              <div className="md:col-span-7 space-y-3">
                {/* Header with Step Switcher */}
                <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                  <div>
                    <span className="text-3xs sm:text-2xs font-bold uppercase tracking-widest text-burgundy-300 block">
                      {current.badge}
                    </span>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-white tracking-tight mt-0.5">
                      {current.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="w-8 h-8 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 text-slate-200 transition-colors"
                      aria-label="Previous step"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={nextStep}
                      className="w-8 h-8 rounded-full flex items-center justify-center bg-burgundy hover:bg-burgundy-dark text-white transition-colors"
                      aria-label="Next step"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Full Description */}
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                  {current.fullDesc}
                </p>

                {/* Key Spec Highlight */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-2xs sm:text-xs text-burgundy-200 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-burgundy-400 flex-shrink-0" />
                  <span>{current.spec}</span>
                </div>

                {/* Master Bodyshop Tip Box */}
                <div className="p-3 rounded-xl bg-burgundy-950/70 border border-burgundy-500/40 text-xs flex items-start gap-2.5">
                  <Info className="w-4 h-4 text-burgundy-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-burgundy-300 uppercase tracking-wider text-3xs block mb-0.5">
                      Master Workshop Recommendation:
                    </span>
                    <p className="text-slate-300 leading-snug font-normal text-2xs sm:text-xs">
                      {current.proTip}
                    </p>
                  </div>
                </div>

                {/* Footer Assurance */}
                <div className="flex items-center justify-between text-3xs text-slate-400 pt-1">
                  <span className="flex items-center gap-1 text-emerald-400">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Tested for Zero Pinholing</span>
                  </span>
                  <span className="flex items-center gap-1 text-slate-300">
                    <ShieldCheck className="w-3 h-3 text-burgundy-400" />
                    <span>Shanmugam Certified Standard</span>
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
