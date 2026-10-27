import React, { useState, useEffect } from 'react';
import { X, Send, Copy, Check, Mail, Phone, Building, User, AlertCircle, Sparkles } from 'lucide-react';
import { ALL_PRODUCTS } from '../data/productsData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedProduct?: string;
}

interface FormState {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  productInterest: string;
  quantityOrPack: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  productInterest?: string;
  message?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  preselectedProduct = ''
}) => {
  const [formData, setFormData] = useState<FormState>({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    productInterest: preselectedProduct || 'Automotive Body Filler',
    quantityOrPack: 'Standard Pack (1kg - 2kg)',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isPrepared, setIsPrepared] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (preselectedProduct) {
      setFormData((prev) => ({ ...prev, productInterest: preselectedProduct }));
    }
  }, [preselectedProduct]);

  if (!isOpen) return null;

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Contact phone number is required';
    } else if (formData.phone.trim().length < 8) {
      newErrors.phone = 'Please enter a valid phone number (at least 8 digits)';
    }

    if (!formData.productInterest) {
      newErrors.productInterest = 'Please select a product of interest';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide brief project or requirement details';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsPrepared(true);
    }
  };

  const inquirySummary = `--- SHANMUGAM INDUSTRIES QUOTE REQUEST ---
Date: ${new Date().toLocaleDateString()}
Contact Name: ${formData.fullName}
Company: ${formData.companyName || 'Not specified'}
Email: ${formData.email}
Phone: ${formData.phone}
Product of Interest: ${formData.productInterest}
Pack / Quantity: ${formData.quantityOrPack}
Project Requirements:
${formData.message}
-------------------------------------------`;

  const handleCopy = () => {
    navigator.clipboard.writeText(inquirySummary);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const mailtoSubject = encodeURIComponent(`Quotation Request: ${formData.productInterest} - ${formData.companyName || formData.fullName}`);
  const mailtoBody = encodeURIComponent(inquirySummary);
  const mailtoUrl = `mailto:sales@shanmugamindustries.com?subject=${mailtoSubject}&body=${mailtoBody}`;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-navy-dark/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="quote-modal-title"
    >
      <div className="relative bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-surface-border overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="px-6 py-5 bg-gradient-to-r from-burgundy-900 to-burgundy text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/10 rounded-lg">
              <Sparkles className="w-5 h-5 text-burgundy-100" />
            </div>
            <div>
              <h2 id="quote-modal-title" className="text-xl font-bold">
                Request an Industrial Quotation
              </h2>
              <p className="text-xs text-burgundy-100">
                Direct factory pricing & technical specification support
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/20 text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto text-left">
          {!isPrepared ? (
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <p className="text-sm text-body leading-relaxed mb-4">
                Please complete the details below. Our manufacturing specialists calibrate custom quote estimates based on batch volumes, distribution region, and application specs.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-navy mb-1">
                    Your Name <span className="text-burgundy">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Ramesh Kumar"
                      className={`w-full pl-9 pr-3 py-2.5 text-sm rounded-md border ${
                        errors.fullName ? 'border-red-500 bg-red-50/20' : 'border-surface-border'
                      } focus:outline-none focus:ring-2 focus:ring-burgundy`}
                    />
                  </div>
                  {errors.fullName && (
                    <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Company Name */}
                <div>
                  <label htmlFor="companyName" className="block text-xs font-bold uppercase tracking-wider text-navy mb-1">
                    Company / Bodyshop Name
                  </label>
                  <div className="relative">
                    <Building className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      id="companyName"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      placeholder="e.g. Apex Auto Collision Works"
                      className="w-full pl-9 pr-3 py-2.5 text-sm rounded-md border border-surface-border focus:outline-none focus:ring-2 focus:ring-burgundy"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Email Address */}
                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-navy mb-1">
                    Email Address <span className="text-burgundy">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      className={`w-full pl-9 pr-3 py-2.5 text-sm rounded-md border ${
                        errors.email ? 'border-red-500 bg-red-50/20' : 'border-surface-border'
                      } focus:outline-none focus:ring-2 focus:ring-burgundy`}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
                    </p>
                  )}
                </div>

                {/* Phone Number */}
                <div>
                  <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-navy mb-1">
                    Contact Phone <span className="text-burgundy">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 or regional mobile number"
                      className={`w-full pl-9 pr-3 py-2.5 text-sm rounded-md border ${
                        errors.phone ? 'border-red-500 bg-red-50/20' : 'border-surface-border'
                      } focus:outline-none focus:ring-2 focus:ring-burgundy`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              {/* Product Interest & Quantity */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="productInterest" className="block text-xs font-bold uppercase tracking-wider text-navy mb-1">
                    Product Interest <span className="text-burgundy">*</span>
                  </label>
                  <select
                    id="productInterest"
                    value={formData.productInterest}
                    onChange={(e) => setFormData({ ...formData, productInterest: e.target.value })}
                    className="w-full px-3 py-2.5 text-sm rounded-md border border-surface-border bg-white focus:outline-none focus:ring-2 focus:ring-burgundy font-medium text-navy"
                  >
                    {ALL_PRODUCTS.map((prod) => (
                      <option key={prod.id} value={prod.name}>
                        {prod.name} ({prod.category})
                      </option>
                    ))}
                    <option value="Custom Chemical Compounding">Custom Chemical Compounding</option>
                    <option value="Bulk Dealer Distribution">Bulk Dealer Distribution Agreement</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="quantityOrPack" className="block text-xs font-bold uppercase tracking-wider text-navy mb-1">
                    Estimated Packaging / Volume
                  </label>
                  <select
                    id="quantityOrPack"
                    value={formData.quantityOrPack}
                    onChange={(e) => setFormData({ ...formData, quantityOrPack: e.target.value })}
                    className="w-full px-3 py-2.5 text-sm rounded-md border border-surface-border bg-white focus:outline-none focus:ring-2 focus:ring-burgundy text-navy"
                  >
                    <option value="Retail Cans (200g - 500g)">Retail Tins (200g - 500g)</option>
                    <option value="Standard Workshop Cans (1kg - 3kg)">Standard Workshop Cans (1kg - 3kg)</option>
                    <option value="Bulk Industrial Pails (10kg - 25kg)">Bulk Industrial Pails (10kg - 25kg)</option>
                    <option value="Full Carton / Pallet Distributor Order">Full Pallet Distributor Order</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-navy mb-1">
                  Project / Order Requirements <span className="text-burgundy">*</span>
                </label>
                <div className="relative">
                  <textarea
                    id="message"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Specify delivery location, substrate types, estimated monthly quantity, or technical inquiries..."
                    className={`w-full p-3 text-sm rounded-md border ${
                      errors.message ? 'border-red-500 bg-red-50/20' : 'border-surface-border'
                    } focus:outline-none focus:ring-2 focus:ring-burgundy`}
                  />
                </div>
                {errors.message && (
                  <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" /> {errors.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-3 flex items-center justify-end gap-3 border-t border-surface-border">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2.5 text-sm font-medium text-body hover:text-navy hover:bg-surface rounded-full transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-7 py-2.5 bg-burgundy hover:bg-burgundy-800 text-white font-semibold text-sm rounded-full shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-burgundy"
                >
                  <span>Review & Prepare Quotation</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          ) : (
            /* Transparent Prepared State (No fake server success) */
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-burgundy-50 border border-burgundy-200">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-burgundy text-white rounded-lg flex-shrink-0 mt-0.5">
                    <Check className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-navy mb-1">
                      Quotation Request Prepared
                    </h3>
                    <p className="text-xs text-body leading-relaxed">
                      Your technical quotation details for <strong className="text-navy">{formData.productInterest}</strong> have been formatted. Because this front-end demo does not connect to an unauthenticated email server without verification, you can immediately send this directly via your email client or copy the formatted brief.
                    </p>
                  </div>
                </div>
              </div>

              {/* Formatted inquiry preview */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-navy">
                    Inquiry Payload Summary
                  </span>
                  <button
                    onClick={handleCopy}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-burgundy hover:text-burgundy-800"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-green-600" />
                        <span className="text-green-600">Copied to Clipboard!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Inquiry Details</span>
                      </>
                    )}
                  </button>
                </div>
                <pre className="p-4 rounded-lg bg-surface text-navy font-mono text-xs border border-surface-border whitespace-pre-wrap overflow-x-auto">
                  {inquirySummary}
                </pre>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-surface-border">
                <button
                  onClick={() => setIsPrepared(false)}
                  className="w-full sm:w-auto px-5 py-2.5 text-sm font-medium text-body hover:text-navy hover:bg-surface rounded-full transition-colors"
                >
                  Edit Information
                </button>
                <a
                  href={mailtoUrl}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-2.5 bg-burgundy hover:bg-burgundy-800 text-white font-semibold text-sm rounded-full shadow-sm transition-all"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send via Email Client</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
