import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Check,
  ArrowRight,
  Clock,
  Sparkles,
  Truck,
  CheckCircle2,
  Building2,
  HelpCircle
} from 'lucide-react';

interface ProductComparisonSectionProps {
  onRequestQuote?: (productName?: string) => void;
}

export const ProductComparisonSection: React.FC<ProductComparisonSectionProps> = ({
  onRequestQuote
}) => {
  const [selectedSize, setSelectedSize] = useState<{ [key: string]: string }>({
    metalPaste: '1kg',
    titenFiller: '1kg'
  });

  const sizes = ['200g', '400g', '1kg', '2kg'];

  const comparisonRows = [
    {
      feature: 'BASE TYPE',
      metalPaste: 'Polyester Based Resin',
      titenFiller: 'Polyester Based Resin',
      isCheck: false
    },
    {
      feature: 'DRYING TIME',
      metalPaste: '15-45 mins',
      titenFiller: '15-45 mins',
      isCheck: false
    },
    {
      feature: 'SANDING',
      metalPaste: 'Good',
      titenFiller: 'Excellent',
      isCheck: false
    },
    {
      feature: 'BEST FOR',
      metalPaste: 'Body Building',
      titenFiller: 'High-end Cars',
      isCheck: false
    },
    {
      feature: 'HARDENER REQUIRED?',
      metalPaste: '',
      titenFiller: '',
      isCheck: true
    },
    {
      feature: 'AVAILABLE SIZES',
      metalPaste: '200g, 400g, 1kg, 2kg',
      titenFiller: '200g, 400g, 1kg, 2kg',
      isCheck: false
    }
  ];

  return (
    <section
      id="product-comparison"
      className="py-16 sm:py-20 lg:py-24 bg-white border-b border-surface-border relative overflow-hidden"
    >
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-burgundy/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-navy/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-burgundy-50 border border-burgundy-200 text-burgundy text-xs font-bold uppercase tracking-widest mb-3"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-burgundy animate-pulse" />
            FOR DEALERS &amp; PROFESSIONALS
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight"
          >
            Product <span className="text-burgundy">Comparison</span>
          </motion.h2>

          {/* Centered Accent Bar */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex items-center justify-center gap-1 mt-3 mb-4"
          >
            <span className="w-8 h-1 bg-burgundy rounded-full" />
            <span className="w-5 h-1 bg-navy rounded-full" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-base text-body font-normal"
          >
            Choose the right product for your specific automotive repair needs.
          </motion.p>
        </div>

        {/* 1. First Difference Showcase Boxes (Side-by-Side Product Cards) */}
        <div className="grid grid-cols-2 gap-2 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
          {/* Card 1: Shanmugam Metal Paste */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-xl sm:rounded-2xl border-2 border-slate-300 bg-white shadow-md sm:shadow-lg p-2.5 sm:p-6 lg:p-8 flex flex-col justify-between hover:shadow-xl transition-all duration-300"
          >
            <div>
              {/* Top Badges */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 sm:gap-3 mb-2.5 sm:mb-5">
                <span className="inline-flex items-center gap-1 px-1.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[9px] sm:text-xs font-bold tracking-tight uppercase bg-slate-100 text-slate-800 border border-slate-200">
                  <Truck className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-slate-600 shrink-0" />
                  <span className="truncate">Heavy Duty</span>
                </span>
                <span className="text-[9px] sm:text-xs font-semibold text-body bg-surface-light px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded border border-surface-border self-start sm:self-auto">
                  SKU: SMP-PRO
                </span>
              </div>

              {/* Product Image & Info */}
              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-5 mb-3 sm:mb-6 text-center sm:text-left">
                <div className="w-20 h-20 sm:w-32 sm:h-32 lg:w-36 lg:h-36 rounded-xl overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 p-1.5 sm:p-2.5 flex-shrink-0 flex items-center justify-center group">
                  <img
                    src="/images/card-metal-paste.webp"
                    alt="Shanmugam Metal Paste"
                    className="w-full h-full object-contain drop-shadow-md transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="w-full">
                  <h3 className="text-xs sm:text-xl lg:text-2xl font-black text-navy tracking-tight leading-tight">
                    Shanmugam Metal Paste
                  </h3>
                  <p className="text-[10px] sm:text-sm font-semibold text-burgundy mt-0.5 leading-tight">
                    Polyester Metal Compound
                  </p>
                  <p className="hidden sm:block text-xs text-body mt-2 leading-relaxed">
                    Formulated for commercial vehicle body building, weld seam sealing,
                    and heavy metal restoration.
                  </p>
                </div>
              </div>

              {/* Spec Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2.5 py-2 sm:py-3.5 border-y border-surface-border mb-3 sm:mb-5 bg-surface-light/60 rounded-xl px-2 sm:px-4">
                <div>
                  <span className="text-[9px] sm:text-xs text-body block font-medium">Sanding Finish</span>
                  <span className="text-[10px] sm:text-sm font-bold text-navy flex items-center gap-1 sm:gap-1.5 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-500 shrink-0" />
                    <span className="truncate">Good (P80-P120)</span>
                  </span>
                </div>
                <div>
                  <span className="text-[9px] sm:text-xs text-body block font-medium">Drying Time</span>
                  <span className="text-[10px] sm:text-sm font-bold text-navy flex items-center gap-1 sm:gap-1.5 mt-0.5">
                    <Clock className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-navy/70 shrink-0" />
                    <span className="truncate">15 - 45 mins</span>
                  </span>
                </div>
                <div>
                  <span className="text-[9px] sm:text-xs text-body block font-medium">Best Application</span>
                  <span className="text-[10px] sm:text-sm font-bold text-navy truncate block mt-0.5">
                    Body Building
                  </span>
                </div>
                <div>
                  <span className="text-[9px] sm:text-xs text-body block font-medium">Hardener Required?</span>
                  <span className="text-[10px] sm:text-sm font-bold text-burgundy flex items-center gap-1 mt-0.5">
                    <CheckCircle2 className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-burgundy shrink-0" />
                    <span className="truncate">Yes (Included)</span>
                  </span>
                </div>
              </div>

              {/* Size Selector */}
              <div className="mb-3 sm:mb-5">
                <label className="text-[9px] sm:text-xs font-bold uppercase tracking-wider text-navy block mb-1 sm:mb-2">
                  Select Pack Size:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-1 sm:gap-2">
                  {sizes.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() =>
                        setSelectedSize((prev) => ({ ...prev, metalPaste: s }))
                      }
                      className={`py-1 sm:py-1.5 text-[9px] sm:text-xs font-bold rounded-full border text-center transition-all ${
                        selectedSize.metalPaste === s
                          ? 'bg-navy text-white border-navy shadow-sm'
                          : 'bg-white text-navy border-surface-border hover:border-navy/40'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Card CTA Button */}
            <button
              onClick={() =>
                onRequestQuote?.(
                  `Shanmugam Metal Paste (${selectedSize.metalPaste})`
                )
              }
              className="w-full inline-flex items-center justify-center gap-1 sm:gap-2 px-2 sm:px-6 py-2 sm:py-3 rounded-full bg-navy hover:bg-navy-dark text-white font-bold text-[10px] sm:text-sm transition-all shadow-md active:scale-[0.98]"
            >
              <span className="truncate">Quote &bull; {selectedSize.metalPaste}</span>
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 shrink-0" />
            </button>
          </motion.div>

          {/* Card 2: Shanmugam Titen Filler */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-xl sm:rounded-2xl border-2 border-burgundy bg-white shadow-md sm:shadow-lg p-2.5 sm:p-6 lg:p-8 flex flex-col justify-between hover:shadow-xl transition-all duration-300 ring-2 ring-burgundy/10"
          >
            <div>
              {/* Top Badges */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 sm:gap-3 mb-2.5 sm:mb-5">
                <span className="inline-flex items-center gap-1 px-1.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[9px] sm:text-xs font-bold tracking-tight uppercase bg-burgundy-50 text-burgundy border border-burgundy-200">
                  <Sparkles className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-burgundy shrink-0" />
                  <span className="truncate">High-End Cars</span>
                </span>
                <span className="text-[9px] sm:text-xs font-bold text-white bg-burgundy px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded shadow-sm self-start sm:self-auto">
                  PREMIUM
                </span>
              </div>

              {/* Product Image & Info */}
              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-5 mb-3 sm:mb-6 text-center sm:text-left">
                <div className="w-20 h-20 sm:w-32 sm:h-32 lg:w-36 lg:h-36 rounded-xl overflow-hidden bg-gradient-to-br from-burgundy-50 to-white border border-burgundy-100 p-1.5 sm:p-2.5 flex-shrink-0 flex items-center justify-center group">
                  <img
                    src="/images/card-body-filler.webp"
                    alt="Shanmugam Titen Filler"
                    className="w-full h-full object-contain drop-shadow-md transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="w-full">
                  <h3 className="text-xs sm:text-xl lg:text-2xl font-black text-navy tracking-tight leading-tight">
                    Shanmugam Titen Filler
                  </h3>
                  <p className="text-[10px] sm:text-sm font-semibold text-burgundy mt-0.5 leading-tight">
                    Ultra-Smooth Body Filler
                  </p>
                  <p className="hidden sm:block text-xs text-body mt-2 leading-relaxed">
                    Ultra-fine micro resin formula for effortless spreading,
                    zero pinholing, and flawless feather-edging on high-end luxury cars.
                  </p>
                </div>
              </div>

              {/* Spec Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2.5 py-2 sm:py-3.5 border-y border-surface-border mb-3 sm:mb-5 bg-burgundy-50/30 rounded-xl px-2 sm:px-4">
                <div>
                  <span className="text-[9px] sm:text-xs text-body block font-medium">Sanding Finish</span>
                  <span className="text-[10px] sm:text-sm font-bold text-burgundy flex items-center gap-1 sm:gap-1.5 mt-0.5">
                    <Sparkles className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-burgundy shrink-0" />
                    <span className="truncate">Ultra Smooth</span>
                  </span>
                </div>
                <div>
                  <span className="text-[9px] sm:text-xs text-body block font-medium">Drying Time</span>
                  <span className="text-[10px] sm:text-sm font-bold text-navy flex items-center gap-1 sm:gap-1.5 mt-0.5">
                    <Clock className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-burgundy shrink-0" />
                    <span className="truncate">15 - 45 mins</span>
                  </span>
                </div>
                <div>
                  <span className="text-[9px] sm:text-xs text-body block font-medium">Best Application</span>
                  <span className="text-[10px] sm:text-sm font-bold text-burgundy truncate block mt-0.5">
                    High-End Luxury Cars
                  </span>
                </div>
                <div>
                  <span className="text-[9px] sm:text-xs text-body block font-medium">Hardener Required?</span>
                  <span className="text-[10px] sm:text-sm font-bold text-burgundy flex items-center gap-1 mt-0.5">
                    <CheckCircle2 className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-burgundy shrink-0" />
                    <span className="truncate">Yes (Included)</span>
                  </span>
                </div>
              </div>

              {/* Size Selector */}
              <div className="mb-3 sm:mb-5">
                <label className="text-[9px] sm:text-xs font-bold uppercase tracking-wider text-navy block mb-1 sm:mb-2">
                  Select Pack Size:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-1 sm:gap-2">
                  {sizes.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() =>
                        setSelectedSize((prev) => ({ ...prev, titenFiller: s }))
                      }
                      className={`py-1 sm:py-1.5 text-[9px] sm:text-xs font-bold rounded-full border text-center transition-all ${
                        selectedSize.titenFiller === s
                          ? 'bg-burgundy text-white border-burgundy shadow-sm'
                          : 'bg-white text-navy border-surface-border hover:border-burgundy/40'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Card CTA Button */}
            <button
              onClick={() =>
                onRequestQuote?.(
                  `Shanmugam Titen Filler (${selectedSize.titenFiller})`
                )
              }
              className="w-full inline-flex items-center justify-center gap-1 sm:gap-2 px-2 sm:px-6 py-2 sm:py-3 rounded-full bg-burgundy hover:bg-burgundy-dark text-white font-bold text-[10px] sm:text-sm transition-all shadow-md active:scale-[0.98]"
            >
              <span className="truncate">Quote &bull; {selectedSize.titenFiller}</span>
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 shrink-0" />
            </button>
          </motion.div>
        </div>

        {/* 2. Exact Comparison Table matching user reference image */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl sm:rounded-2xl border border-slate-200 shadow-md overflow-hidden mb-8 sm:mb-12"
        >
          <div className="overflow-x-auto">
            <table className="w-full table-fixed text-left border-collapse">
              {/* Dark Navy Table Header */}
              <thead>
                <tr className="bg-[#0B1528] text-white">
                  <th className="py-3 sm:py-5 px-2 sm:px-6 font-bold text-[10px] sm:text-sm tracking-wide border-r border-slate-700/80 w-[28%]">
                    Features
                  </th>
                  <th className="py-3 sm:py-5 px-2 sm:px-6 font-bold text-[10px] sm:text-sm tracking-wide border-r border-slate-700/80 w-[36%]">
                    Shanmugam Metal Paste
                  </th>
                  <th className="py-3 sm:py-5 px-2 sm:px-6 font-bold text-[10px] sm:text-sm tracking-wide w-[36%]">
                    Shanmugam titen filler
                  </th>
                </tr>
              </thead>

              {/* Table Data Rows */}
              <tbody className="divide-y divide-slate-200 text-[10px] sm:text-base font-normal">
                {comparisonRows.map((row, index) => (
                  <tr
                    key={row.feature}
                    className={`transition-colors duration-150 hover:bg-slate-50/70 ${
                      index % 2 === 1 ? 'bg-white' : 'bg-[#FAFAFA]'
                    }`}
                  >
                    {/* Feature Label (Uppercase) */}
                    <td className="py-2.5 sm:py-5 px-2 sm:px-6 font-bold text-[9px] sm:text-sm text-slate-700 tracking-wider border-r border-slate-200">
                      {row.feature}
                    </td>

                    {/* Shanmugam Metal Paste Column */}
                    <td className="py-2.5 sm:py-5 px-2 sm:px-6 text-slate-800 border-r border-slate-200 leading-tight">
                      {row.isCheck ? (
                        <div className="flex items-center">
                          <Check className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 stroke-[2.5]" />
                        </div>
                      ) : (
                        <span>{row.metalPaste}</span>
                      )}
                    </td>

                    {/* Shanmugam Titen Filler Column */}
                    <td className="py-2.5 sm:py-5 px-2 sm:px-6 text-slate-800 leading-tight">
                      {row.isCheck ? (
                        <div className="flex items-center">
                          <Check className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 stroke-[2.5]" />
                        </div>
                      ) : (
                        <span>{row.titenFiller}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* 3. Dealer & Professional Direct Supply Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl bg-gradient-to-r from-navy via-navy to-burgundy-900 text-white p-6 sm:p-8 lg:p-10 shadow-xl overflow-hidden border border-navy/20"
        >
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold tracking-wider uppercase mb-3 border border-white/15">
                <Building2 className="w-3.5 h-3.5 text-burgundy-200" />
                AUTHORIZED DEALERSHIPS &amp; WORKSHOPS
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight">
                Looking for Wholesale Dealership or Body Shop Supply?
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                Shanmugam Industries supplies automotive paint distributors, body builders,
                and refinishing franchises with bulk cartons, dedicated factory support,
                and verified batch Certificate of Analysis (COA) test records.
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-slate-200">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-burgundy-300" /> Direct Factory Pricing
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-burgundy-300" /> All Pack Sizes (200g - 2kg)
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-burgundy-300" /> Fast Regional Dispatch
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 flex-shrink-0">
              <button
                onClick={() =>
                  onRequestQuote?.('Dealership & Bulk Wholesale Supply')
                }
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-burgundy hover:bg-burgundy-light text-white font-bold text-xs sm:text-sm transition-all shadow-lg active:scale-[0.98] border border-burgundy-400/30"
              >
                <span>Become an Authorized Dealer</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm transition-all border border-white/20 backdrop-blur-sm"
              >
                <HelpCircle className="w-4 h-4 text-slate-300" />
                <span>Talk to Technical Sales</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
