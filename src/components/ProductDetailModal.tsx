import React from 'react';
import { X, Check, ArrowRight, Shield, Layers, Package, Clock } from 'lucide-react';
import { Product } from '../types';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onRequestQuote: (productName: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onRequestQuote
}) => {
  if (!product) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-navy-dark/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-product-title"
    >
      <div
        className="relative bg-white w-full max-w-3xl rounded-2xl shadow-2xl border border-surface-border overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-surface text-navy hover:text-burgundy transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-burgundy"
          aria-label="Close product modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
          {/* Left: Product Image on dark contrast backdrop */}
          <div className="md:col-span-5 bg-gradient-to-b from-[#142530] to-[#0A1319] p-8 flex flex-col items-center justify-center relative">
            <img
              src={product.image}
              alt={product.name}
              className="max-h-72 w-auto object-contain drop-shadow-2xl"
            />
            {product.badge && (
              <span className="mt-4 px-3 py-1 text-xs font-semibold rounded bg-burgundy text-white shadow-sm">
                {product.badge}
              </span>
            )}
            <p className="mt-4 text-xs text-center text-gray-400">
              {product.tag}
            </p>
          </div>

          {/* Right: Technical Details */}
          <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between text-left">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-burgundy mb-1">
                {product.category}
              </div>
              <h2 id="modal-product-title" className="text-2xl font-bold text-navy mb-3">
                {product.name}
              </h2>
              <p className="text-sm text-body leading-relaxed mb-6">
                {product.fullDesc}
              </p>

              {/* Technical Specifications Grid */}
              <div className="mb-6">
                <h3 className="text-xs font-bold uppercase tracking-wider text-navy flex items-center gap-1.5 mb-3">
                  <Clock className="w-3.5 h-3.5 text-burgundy" />
                  <span>Technical Specifications</span>
                </h3>
                <div className="grid grid-cols-2 gap-2 bg-surface/70 p-3 rounded-lg border border-surface-border text-xs">
                  {product.specs.map((spec, i) => (
                    <div key={i} className="space-y-0.5">
                      <span className="text-body font-medium block">{spec.label}</span>
                      <span className="font-semibold text-navy block">{spec.val}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Benefits */}
              <div className="mb-6">
                <h3 className="text-xs font-bold uppercase tracking-wider text-navy flex items-center gap-1.5 mb-3">
                  <Shield className="w-3.5 h-3.5 text-burgundy" />
                  <span>Performance Benefits</span>
                </h3>
                <ul className="space-y-1.5 text-xs text-navy/90">
                  {product.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-burgundy flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Application Recommendations */}
              <div className="mb-6">
                <h3 className="text-xs font-bold uppercase tracking-wider text-navy flex items-center gap-1.5 mb-1.5">
                  <Layers className="w-3.5 h-3.5 text-burgundy" />
                  <span>Recommended Applications</span>
                </h3>
                <p className="text-xs text-body">
                  {product.uses}
                </p>
              </div>

              {/* Pack Sizes */}
              <div className="mb-6 flex items-center gap-2 flex-wrap">
                <span className="text-xs font-bold text-navy flex items-center gap-1">
                  <Package className="w-3.5 h-3.5 text-burgundy" /> Pack Sizes:
                </span>
                {product.packSizes.map((size, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 text-xs bg-surface border border-surface-border rounded text-navy font-medium"
                  >
                    {size}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t border-surface-border flex items-center justify-end gap-3">
              <button
                onClick={onClose}
                className="px-4 py-2 text-sm font-medium text-body hover:text-navy hover:bg-surface rounded-md transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => {
                  onClose();
                  onRequestQuote(product.name);
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-burgundy hover:bg-burgundy-800 text-white text-sm font-semibold rounded-md shadow-sm transition-all"
              >
                <span>Request Quote for {product.name}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
