import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight, CheckCircle2, FileText, AlertCircle } from 'lucide-react';

export const DownloadCatalogueSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDownloaded, setIsDownloaded] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.phone.trim() || !formData.email.trim()) {
      setErrorMessage('Please fill in all required fields (Name, Phone, and Email).');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    setTimeout(() => {
      setIsSubmitting(false);
      setIsDownloaded(true);

      const catalogueContent = `=====================================================
SHANMUGAM INDUSTRIES - OFFICIAL PRODUCT CATALOGUE 2026
Automotive Refinish & Chemical Manufacturing Solutions
=====================================================

Thank you for downloading the official Shanmugam Industries Product Catalogue.

1. AUTOMOTIVE BODY FILLER (2K)
-----------------------------------------------------
- Description: Professional grade ultra-smooth polyester body filler
- Base: Unsaturated Polyester Resin with micro-glass spheres
- Mixing Ratio: 100:2 (Paste to BPO Hardener)
- Pot Life: 4-6 minutes at 25°C
- Sandable: 20-30 minutes (P120 - P320 grit)
- Applications: Automotive passenger collision repair, hood & panel leveling
- Pack Sizes: 200g, 400g, 1kg, 2kg, 3kg

2. SHANMUGAM METAL PASTE
-----------------------------------------------------
- Description: Heavy-duty metallic-reinforced repair compound
- Base: Polyester matrix with metallic reinforcing agents
- Mixing Ratio: 100:2 to 100:3 with Hardener
- Pot Life: 5 minutes at 25°C
- Sandable: 25-45 minutes (P80 - P120 grit)
- Applications: Heavy body building, bus/truck fabrication, weld seams
- Pack Sizes: 200g, 400g, 1kg, 2kg

3. SHANMUGAM TITEN FILLER
-----------------------------------------------------
- Description: Premium showroom-grade finishing body filler
- Features: Ultra-smooth feather-edging, pinhole-free micro-finish
- Best For: Luxury high-end passenger vehicles & precision panel work
- Pack Sizes: 200g, 400g, 1kg, 2kg

4. SURFACE FINISHING GLOSS & PUTTIES
-----------------------------------------------------
- Polyester Maroon Finishing Putty (500g, 1kg, 2kg)
- Precision 1K Spot Putty (200g tube)
- Aqua Proof Marine Putty (500g, 1kg, 2kg)

-----------------------------------------------------
FACTORY INQUIRIES & BULK DEALERSHIP:
Shanmugam Industries
Authorized Technical Sales & Distribution
Website: www.shanmugamindustries.com
Email: sales@shanmugamindustries.com
-----------------------------------------------------`;

      const blob = new Blob([catalogueContent], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Shanmugam_Industries_Product_Catalogue_2026.txt';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }, 600);
  };

  return (
    <section
      id="download-catalogue"
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-navy-dark via-navy to-[#111e29] text-white relative overflow-hidden border-b border-surface-border"
    >
      {/* Brand Accent Ambient Lights */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-burgundy/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[450px] h-[450px] bg-burgundy-900/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Headline, Text & Floating 3D Catalogue Booklet */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 space-y-6"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-burgundy-900/50 border border-burgundy-500/30 text-burgundy-200 text-xs font-bold uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-burgundy-400 animate-pulse" />
              DOWNLOAD CATALOGUE
            </div>

            {/* Main Heading in Brand Palette */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Get Our <span className="text-burgundy-300">Product</span> <br />
              <span className="text-burgundy-300">Catalogue</span>
            </h2>

            {/* Centered/Left Burgundy Gradient Accent Bar */}
            <div className="w-14 h-1 bg-gradient-to-r from-burgundy via-burgundy-400 to-burgundy-200 rounded-full" />

            {/* Description */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-lg">
              Fill the form to download our complete product catalogue with technical specifications, product range, and pricing information.
            </p>

            {/* 3D Floating Catalogue Cover Mockup in Shanmugam Burgundy Brand Identity */}
            <div className="pt-4 flex items-center justify-start">
              <motion.div
                whileHover={{ scale: 1.04, rotate: 0 }}
                transition={{ duration: 0.3 }}
                className="relative w-44 sm:w-52 aspect-[3/4.2] rounded-xl overflow-hidden shadow-[0_25px_50px_rgba(0,0,0,0.6)] transform -rotate-3 border-t border-l border-burgundy-400/40 bg-gradient-to-br from-burgundy via-burgundy-800 to-burgundy-950 p-4 flex flex-col justify-between cursor-pointer group"
              >
                {/* Book Spine Highlight */}
                <div className="absolute top-0 bottom-0 left-0 w-3 bg-gradient-to-r from-black/50 via-white/15 to-transparent" />

                {/* Cover Gloss Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

                {/* Top Brand Info */}
                <div className="relative z-10 pt-2 pl-2">
                  <div className="w-7 h-7 rounded bg-white/15 backdrop-blur-xs flex items-center justify-center mb-2.5 border border-white/20">
                    <FileText className="w-4 h-4 text-burgundy-100" />
                  </div>
                  <h4 className="text-xs sm:text-sm font-black text-white tracking-wider uppercase leading-tight drop-shadow-sm">
                    SHANMUGAM <br />
                    INDUSTRIES
                  </h4>
                </div>

                {/* Middle / Bottom Cover Text */}
                <div className="relative z-10 pl-2 pb-2">
                  <div className="w-8 h-0.5 bg-burgundy-300/80 mb-2 rounded-full" />
                  <p className="text-[11px] sm:text-xs font-bold text-white uppercase tracking-wider">
                    PRODUCT CATALOGUE
                  </p>
                  <p className="text-2xs text-burgundy-200 font-semibold mt-0.5">
                    2026 EDITION &bull; PRO LINE
                  </p>
                </div>

                {/* Corner Glow */}
                <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-burgundy-500/30 rounded-full blur-xl pointer-events-none" />
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Glassmorphic Download Form in Brand Palette */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-6"
          >
            <div className="bg-navy/80 backdrop-blur-md rounded-2xl border border-burgundy-500/20 p-6 sm:p-8 lg:p-10 shadow-2xl">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center justify-between">
                <span>Download Free Catalogue</span>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-burgundy-500/20 text-burgundy-200 border border-burgundy-500/30">
                  PDF &bull; Instant
                </span>
              </h3>

              {isDownloaded ? (
                <div className="p-6 rounded-xl bg-burgundy-950/60 border border-burgundy-500/40 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-burgundy-500/20 text-burgundy-200 flex items-center justify-center mx-auto border border-burgundy-500/30">
                    <CheckCircle2 className="w-6 h-6 text-burgundy-300" />
                  </div>
                  <h4 className="text-base font-bold text-white">
                    Catalogue Download Started!
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Thank you, <strong className="text-white">{formData.name}</strong>. The Shanmugam Industries 2026 Product Catalogue has been dispatched to your downloads.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsDownloaded(false);
                      setFormData({ name: '', phone: '', email: '', company: '' });
                    }}
                    className="inline-flex items-center gap-1.5 text-xs text-burgundy-300 hover:text-burgundy-200 underline font-semibold pt-2"
                  >
                    Download another copy
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMessage && (
                    <div className="p-3 rounded-lg bg-red-950/60 border border-red-500/40 text-xs text-red-200 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 flex-shrink-0 text-red-400" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Row 1: Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name *"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-navy-dark/90 border border-navy-light text-white placeholder-slate-400 text-sm focus:outline-hidden focus:border-burgundy focus:ring-1 focus:ring-burgundy transition-colors"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone Number *"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-navy-dark/90 border border-navy-light text-white placeholder-slate-400 text-sm focus:outline-hidden focus:border-burgundy focus:ring-1 focus:ring-burgundy transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 2: Email */}
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email Address *"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-navy-dark/90 border border-navy-light text-white placeholder-slate-400 text-sm focus:outline-hidden focus:border-burgundy focus:ring-1 focus:ring-burgundy transition-colors"
                    />
                  </div>

                  {/* Row 3: Company Name */}
                  <div>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company Name"
                      className="w-full px-4 py-3 rounded-lg bg-navy-dark/90 border border-navy-light text-white placeholder-slate-400 text-sm focus:outline-hidden focus:border-burgundy focus:ring-1 focus:ring-burgundy transition-colors"
                    />
                  </div>

                  {/* Submit Button in Shanmugam Burgundy */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 rounded-full bg-burgundy hover:bg-burgundy-dark text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg hover:shadow-burgundy/30 active:scale-[0.98] transition-all disabled:opacity-70 border border-burgundy-500/30"
                    >
                      <Download className="w-4 h-4" />
                      <span>{isSubmitting ? 'Preparing Catalogue...' : 'Download Catalogue'}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  <p className="text-2xs text-slate-400 text-center pt-1">
                    Instant access &bull; 100% free technical documentation &bull; No spam guaranteed
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
