import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Layers,
  Download,
  Sparkles,
  Car,
  Cog,
  Package,
  MessageCircle,
  HelpCircle
} from 'lucide-react';
import { ALL_PRODUCTS } from '../data/productsData';
import { HowToUseSection } from '../components/HowToUseSection';

interface ProductDetailPageProps {
  onRequestQuote: (productName?: string) => void;
}

export const ProductDetail: React.FC<ProductDetailPageProps> = ({ onRequestQuote }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'specs' | 'application' | 'storage'>('specs');
  const [selectedPack, setSelectedPack] = useState<string>('');

  const product = ALL_PRODUCTS.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (product && product.packSizes && product.packSizes.length > 0) {
      setSelectedPack(product.packSizes[0]);
    }
  }, [id, product]);

  if (!product) {
    return (
      <main className="min-h-[70vh] flex items-center justify-center py-20 px-4 bg-surface-light text-center">
        <div className="max-w-md mx-auto space-y-4">
          <div className="w-16 h-16 rounded-full bg-burgundy-50 border border-burgundy-200 text-burgundy flex items-center justify-center mx-auto">
            <HelpCircle className="w-8 h-8" />
          </div>
          <h1 className="text-2xl font-black text-navy">Product Not Found</h1>
          <p className="text-sm text-body">
            The formulation you are searching for does not exist or may have been relocated in our catalog.
          </p>
          <div className="pt-2">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-6 py-3 bg-burgundy hover:bg-burgundy-dark text-white font-bold text-sm rounded-lg shadow-sm transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Products</span>
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const getProductIcon = (prodId: string) => {
    if (prodId.includes('body-filler') || prodId.includes('auto')) return Car;
    if (prodId.includes('metal')) return Cog;
    return Layers;
  };

  const Icon = getProductIcon(product.id);

  // Filter related products (exclude current)
  const relatedProducts = ALL_PRODUCTS.filter((p) => p.id !== product.id).slice(0, 3);

  const handleDownloadTDS = () => {
    const tdsText = `=====================================================
SHANMUGAM INDUSTRIES - TECHNICAL DATA SHEET (TDS)
=====================================================
Product: ${product.name}
Category: ${product.category}
Tagline: ${product.tag}
Date of Issue: October 2026
Manufacturer: Shanmugam Industries, Tamil Nadu, India

1. PRODUCT DESCRIPTION
-----------------------------------------------------
${product.fullDesc}

2. TECHNICAL SPECIFICATIONS
-----------------------------------------------------
${product.specs.map((s) => `• ${s.label}: ${s.val}`).join('\n')}

3. KEY PERFORMANCE BENEFITS
-----------------------------------------------------
${product.benefits.map((b) => `✓ ${b}`).join('\n')}

4. RECOMMENDED APPLICATIONS
-----------------------------------------------------
${product.uses}

5. PACKAGING SIZES
-----------------------------------------------------
Available in: ${product.packSizes.join(', ')}

6. APPLICATION PROCEDURE
-----------------------------------------------------
Step 1 - Surface Prep: Sand substrate with P80-P180 grit, degrease thoroughly.
Step 2 - Mixing: Blend 100 parts product with 2 parts BPO paste hardener.
Step 3 - Application: Apply with clean flexible steel putty blade.
Step 4 - Curing: Sandable within 15-30 mins at 25°C.

-----------------------------------------------------
TECHNICAL SUPPORT & INQUIRIES:
Email: sales@shanmugamindustries.com
Website: www.shanmugamindustries.com
=====================================================`;

    const blob = new Blob([tdsText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${product.id}-TDS-Shanmugam-Industries.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <main className="bg-white min-h-screen pt-4 pb-20">
      {/* 1. Breadcrumb Navigation Bar */}
      <nav aria-label="Breadcrumb" className="bg-surface-light border-b border-surface-border py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-body overflow-x-auto">
            <Link to="/" className="hover:text-burgundy transition-colors font-medium">
              Home
            </Link>
            <span className="text-slate-400">&rsaquo;</span>
            <Link to="/products" className="hover:text-burgundy transition-colors font-medium">
              Products
            </Link>
            <span className="text-slate-400">&rsaquo;</span>
            <span className="text-slate-500 hidden sm:inline">{product.category}</span>
            <span className="text-slate-400 hidden sm:inline">&rsaquo;</span>
            <span className="font-bold text-navy truncate max-w-[200px] sm:max-w-none">
              {product.name}
            </span>
          </div>

          <Link
            to="/products"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-burgundy hover:text-burgundy-dark transition-colors flex-shrink-0"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Back to All Products</span>
            <span className="sm:hidden">Back</span>
          </Link>
        </div>
      </nav>

      {/* 2. Product Hero Showcase Grid */}
      <section className="py-10 sm:py-14 border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left Column: Product Visual Showcase */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-6 space-y-5"
            >
              {/* Main Visual Card */}
              <div className="relative rounded-2xl border-2 border-slate-200 bg-gradient-to-b from-slate-50 to-white p-6 sm:p-10 shadow-lg flex items-center justify-center min-h-[340px] sm:min-h-[420px] overflow-hidden group">
                <picture>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-[320px] sm:max-h-[380px] w-auto object-contain drop-shadow-xl transition-transform duration-500 group-hover:scale-105"
                  />
                </picture>

                {/* Top Badge */}
                {product.badge && (
                  <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-md bg-burgundy text-white text-xs font-bold uppercase tracking-wider shadow-sm">
                    {product.badge}
                  </div>
                )}

                {/* Category Pill */}
                <div className="absolute bottom-4 right-4 z-10 px-3 py-1 rounded-md bg-white/90 backdrop-blur-xs border border-surface-border text-2xs font-bold text-navy uppercase tracking-wider shadow-2xs">
                  {product.category}
                </div>
              </div>

              {/* Quality & Manufacturing Verification Bar */}
              <div className="grid grid-cols-3 gap-3 pt-2 text-center">
                <div className="p-3 rounded-xl bg-surface-light border border-surface-border">
                  <ShieldCheck className="w-5 h-5 text-burgundy mx-auto mb-1" />
                  <span className="text-2xs sm:text-xs font-bold text-navy block">
                    ISO 9001:2015
                  </span>
                  <span className="text-2xs text-body block">QMS Certified</span>
                </div>
                <div className="p-3 rounded-xl bg-surface-light border border-surface-border">
                  <Package className="w-5 h-5 text-burgundy mx-auto mb-1" />
                  <span className="text-2xs sm:text-xs font-bold text-navy block">
                    Airtight Pack
                  </span>
                  <span className="text-2xs text-body block">Leak-Proof Metal Can</span>
                </div>
                <div className="p-3 rounded-xl bg-surface-light border border-surface-border">
                  <Clock className="w-5 h-5 text-burgundy mx-auto mb-1" />
                  <span className="text-2xs sm:text-xs font-bold text-navy block">
                    Fast Sandable
                  </span>
                  <span className="text-2xs text-body block">15 - 45 mins</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Product Narrative, Specs & Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-6 space-y-6 text-left"
            >
              {/* Category & Tag */}
              <div>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-burgundy-50 border border-burgundy-200 text-burgundy text-xs font-bold uppercase tracking-wider mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-burgundy" />
                  {product.category} &bull; Pro Formulation
                </span>

                <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-black text-navy tracking-tight leading-tight">
                  {product.name}
                </h1>
                
                <p className="text-sm sm:text-base font-semibold text-burgundy mt-1">
                  {product.tag}
                </p>
              </div>

              {/* Short Description */}
              <p className="text-sm sm:text-base text-body leading-relaxed border-b border-surface-border pb-5">
                {product.fullDesc}
              </p>

              {/* Pack Size Selector */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-navy block mb-2">
                  Select Pack Size:
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.packSizes.map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setSelectedPack(size)}
                      className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold border transition-all ${
                        selectedPack === size
                          ? 'bg-burgundy text-white border-burgundy shadow-sm'
                          : 'bg-white text-navy border-slate-300 hover:border-burgundy/40'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quick Specs Grid */}
              <div className="bg-surface-light rounded-xl border border-surface-border p-4 sm:p-5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-navy mb-3 flex items-center gap-2">
                  <Icon className="w-4 h-4 text-burgundy" />
                  <span>Key Specifications</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                  {product.specs.map((spec, idx) => (
                    <div key={idx} className="flex flex-col">
                      <span className="text-body text-xs font-medium">{spec.label}</span>
                      <span className="font-bold text-navy">{spec.val}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Main Action CTAs */}
              <div className="space-y-3 pt-2">
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    type="button"
                    onClick={() =>
                      onRequestQuote(
                        `${product.name}${selectedPack ? ` (${selectedPack})` : ''}`
                      )
                    }
                    className="flex-1 inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-burgundy hover:bg-burgundy-dark text-white font-bold text-sm sm:text-base shadow-lg hover:shadow-xl active:scale-[0.98] transition-all"
                  >
                    <span>Request Quotation {selectedPack ? `(${selectedPack})` : ''}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={handleDownloadTDS}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white border border-slate-300 hover:border-burgundy/50 text-navy hover:text-burgundy font-bold text-xs sm:text-sm shadow-2xs transition-all active:scale-[0.98]"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download TDS</span>
                  </button>
                </div>

                <a
                  href={`https://wa.me/?text=${encodeURIComponent(
                    `Hello Shanmugam Industries, I am interested in inquiring about ${product.name} (${selectedPack}). Please share pricing and bulk availability.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#128C7E] font-semibold text-xs border border-[#25D366]/30 transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>Instant Inquiry on WhatsApp</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive & Animated Step-By-Step: How To Use Section */}
      <HowToUseSection />

      {/* 3. Deep-Dive Information Tabs (Benefits, Application, Storage) */}
      <section className="py-12 sm:py-16 bg-[#FAFAFA] border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Tab Selector */}
          <div className="flex items-center justify-start sm:justify-center gap-2 border-b border-surface-border pb-4 mb-8 overflow-x-auto">
            <button
              onClick={() => setActiveTab('specs')}
              className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
                activeTab === 'specs'
                  ? 'bg-burgundy text-white shadow-sm'
                  : 'bg-white text-navy border border-surface-border hover:bg-slate-50'
              }`}
            >
              Key Benefits &bull; Performance
            </button>
            <button
              onClick={() => setActiveTab('application')}
              className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
                activeTab === 'application'
                  ? 'bg-burgundy text-white shadow-sm'
                  : 'bg-white text-navy border border-surface-border hover:bg-slate-50'
              }`}
            >
              Application &bull; Mixing Guide
            </button>
            <button
              onClick={() => setActiveTab('storage')}
              className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
                activeTab === 'storage'
                  ? 'bg-burgundy text-white shadow-sm'
                  : 'bg-white text-navy border border-surface-border hover:bg-slate-50'
              }`}
            >
              Substrates &bull; Storage
            </button>
          </div>

          {/* Tab Content */}
          <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-surface-border p-6 sm:p-10 shadow-sm text-left">
            {activeTab === 'specs' && (
              <div className="space-y-6">
                <h3 className="text-lg sm:text-xl font-bold text-navy flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-burgundy" />
                  <span>Key Formulation Benefits</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {product.benefits.map((benefit, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3.5 rounded-xl bg-surface-light border border-surface-border"
                    >
                      <CheckCircle2 className="w-5 h-5 text-burgundy flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-navy leading-relaxed font-medium">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'application' && (
              <div className="space-y-6">
                <h3 className="text-lg sm:text-xl font-bold text-navy flex items-center gap-2">
                  <Clock className="w-5 h-5 text-burgundy" />
                  <span>Standard Bodyshop Application Procedure</span>
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs sm:text-sm">
                  <div className="p-4 rounded-xl bg-surface-light border border-surface-border space-y-2">
                    <span className="w-6 h-6 rounded-full bg-burgundy text-white font-bold text-xs flex items-center justify-center">
                      1
                    </span>
                    <h5 className="font-bold text-navy">Surface Prep</h5>
                    <p className="text-body text-xs">
                      Dry sand substrate with P80-P180 grit. Degrease bare metal with approved solvent.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-surface-light border border-surface-border space-y-2">
                    <span className="w-6 h-6 rounded-full bg-burgundy text-white font-bold text-xs flex items-center justify-center">
                      2
                    </span>
                    <h5 className="font-bold text-navy">Hardener Ratio</h5>
                    <p className="text-body text-xs">
                      Thoroughly mix 100 parts product with 2 parts BPO red paste hardener on mixing board.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-surface-light border border-surface-border space-y-2">
                    <span className="w-6 h-6 rounded-full bg-burgundy text-white font-bold text-xs flex items-center justify-center">
                      3
                    </span>
                    <h5 className="font-bold text-navy">Application</h5>
                    <p className="text-body text-xs">
                      Apply with flexible stainless steel spatula. Avoid excessive thickness in single pass.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-surface-light border border-surface-border space-y-2">
                    <span className="w-6 h-6 rounded-full bg-burgundy text-white font-bold text-xs flex items-center justify-center">
                      4
                    </span>
                    <h5 className="font-bold text-navy">Dry Sanding</h5>
                    <p className="text-body text-xs">
                      Sandable within 20-30 mins at 25°C. Start with P120 and finish with P240-P320.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'storage' && (
              <div className="space-y-6">
                <h3 className="text-lg sm:text-xl font-bold text-navy flex items-center gap-2">
                  <Package className="w-5 h-5 text-burgundy" />
                  <span>Substrates &bull; Storage &bull; Shelf Life</span>
                </h3>

                <div className="space-y-4 text-xs sm:text-sm text-body">
                  <div className="p-4 rounded-xl bg-surface-light border border-surface-border">
                    <h5 className="font-bold text-navy mb-1">Recommended Substrates:</h5>
                    <p className="leading-relaxed">
                      Bare steel, galvanized sheet metal, zinc-coated body panels, automotive aluminum alloys,
                      fiberglass reinforced plastic (FRP), and properly cured OEM primer coats.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-surface-light border border-surface-border">
                    <h5 className="font-bold text-navy mb-1">Storage Conditions:</h5>
                    <p className="leading-relaxed">
                      Store in original sealed containers in a cool, well-ventilated location at 15°C to 25°C.
                      Keep away from direct sunlight, open flames, and heat sources.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-surface-light border border-surface-border">
                    <h5 className="font-bold text-navy mb-1">Shelf Life:</h5>
                    <p className="leading-relaxed">
                      12 months from manufacturing date when stored unopened in original factory containers.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 4. Complementary & Related Formulations */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-burgundy">
                COMPLEMENTARY PRODUCTS
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-navy tracking-tight mt-1">
                Other Professional Formulations
              </h2>
            </div>

            <Link
              to="/products"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-burgundy hover:text-burgundy-dark transition-colors"
            >
              <span>View Complete Catalog</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((rel) => (
              <div
                key={rel.id}
                onClick={() => navigate(`/products/${rel.id}`)}
                className="group p-5 rounded-2xl border border-surface-border hover:border-burgundy/40 bg-white hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between text-left"
              >
                <div>
                  <div className="aspect-[16/10] rounded-xl overflow-hidden bg-surface-light mb-4 flex items-center justify-center p-3">
                    <img
                      src={rel.image}
                      alt={rel.name}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <span className="text-2xs font-bold uppercase tracking-wider text-burgundy block mb-1">
                    {rel.category}
                  </span>
                  <h4 className="text-lg font-bold text-navy group-hover:text-burgundy transition-colors">
                    {rel.name}
                  </h4>
                  <p className="text-xs text-body line-clamp-2 mt-1.5 leading-relaxed">
                    {rel.shortDesc}
                  </p>
                </div>

                <div className="pt-4 flex items-center justify-between border-t border-surface-border mt-4">
                  <span className="text-xs font-semibold text-burgundy flex items-center gap-1">
                    <span>View Formulation</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="text-2xs text-body font-medium">
                    {rel.packSizes[0]} - {rel.packSizes[rel.packSizes.length - 1]}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Wholesale & Dealer Inquiry Banner */}
      <section className="bg-surface-light border-t border-surface-border py-12">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-4">
          <h3 className="text-xl sm:text-2xl font-black text-navy">
            Looking for Bulk Wholesale or Dealership Pricing for {product.name}?
          </h3>
          <p className="text-xs sm:text-sm text-body max-w-2xl mx-auto leading-relaxed">
            We supply automotive paint distributors, collision franchises, and industrial body builders
            with competitive tier pricing, fast factory dispatch, and complete batch quality records.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onRequestQuote(`Wholesale Dealership: ${product.name}`)}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-burgundy hover:bg-burgundy-dark text-white font-bold text-sm shadow-md transition-all active:scale-95"
            >
              <span>Inquire for Dealership / Bulk Wholesale</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};
