import React, { useState } from 'react';
import { Send, Check, Copy, AlertCircle, Clock, Mail } from 'lucide-react';
import { ALL_PRODUCTS } from '../data/productsData';

interface ContactSectionProps {
  initialProduct?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialProduct = '' }) => {
  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [productInterest, setProductInterest] = useState(initialProduct || 'Automotive Body Filler');
  const [message, setMessage] = useState('');

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const validate = (): boolean => {
    const errs: Record<string, string> = {};
    if (!fullName.trim()) errs.fullName = 'Full Name is required';
    if (!email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      errs.email = 'Valid email is required';
    }
    if (!phone.trim()) {
      errs.phone = 'Phone number is required';
    }
    if (!message.trim()) {
      errs.message = 'Please provide message / requirement details';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  const inquirySummary = `--- SHANMUGAM INDUSTRIES INQUIRY ---
From: ${fullName} (${companyName || 'Independent'})
Email: ${email}
Phone: ${phone}
Product Interest: ${productInterest}
Requirements:
${message}
------------------------------------`;

  const handleCopy = () => {
    navigator.clipboard.writeText(inquirySummary);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const mailtoUrl = `mailto:sales@shanmugamindustries.com?subject=${encodeURIComponent(
    `Product Inquiry: ${productInterest} - ${companyName || fullName}`
  )}&body=${encodeURIComponent(inquirySummary)}`;

  return (
    <section id="contact" className="py-16 lg:py-24 bg-surface-light border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Contact Details Column */}
          <div className="lg:col-span-5 text-left space-y-6">
            <div className="inline-block px-3 py-1 rounded bg-burgundy-50 border border-burgundy-100 text-burgundy text-xs font-semibold tracking-wider uppercase">
              GET IN TOUCH
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight leading-tight">
              Connect With Our <br />
              <span className="text-burgundy">Technical Sales Team</span>
            </h2>

            <div className="w-16 h-1 bg-burgundy rounded-full" />

            <p className="text-base text-body leading-relaxed">
              Whether you are an automotive bodyshop owner, a regional paint distributor, or an OEM manufacturer seeking custom chemical compound fills, our specialists are ready to assist with samples, technical data sheets (TDS), and bulk trade pricing.
            </p>

            {/* Verified Information Notice */}
            <div className="p-4 rounded-xl bg-white border border-surface-border space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-navy">
                Factory & Business Hours
              </h3>
              <div className="flex items-start gap-3 text-sm text-body">
                <Clock className="w-4 h-4 text-burgundy flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-navy">Monday – Saturday</p>
                  <p className="text-xs">9:00 AM – 6:30 PM IST</p>
                </div>
              </div>
              <div className="pt-2 border-t border-surface-border text-xs text-body">
                <p className="italic">
                  Direct official contact phone, plant address, and distributor lines are coordinated via verified sales inquiry dispatch.
                </p>
              </div>
            </div>
          </div>

          {/* Contact & Quotation Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-card border border-surface-border text-left">
              <h3 className="text-xl font-bold text-navy mb-1">
                Send an Inquiry or Request Samples
              </h3>
              <p className="text-xs text-body mb-6">
                Complete all required fields below. We typically respond within 24 business hours.
              </p>

              {!submitted ? (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="c-name" className="block text-xs font-bold uppercase tracking-wider text-navy mb-1">
                        Full Name <span className="text-burgundy">*</span>
                      </label>
                      <input
                        type="text"
                        id="c-name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Your full name"
                        className={`w-full px-3 py-2.5 text-sm rounded-md border ${
                          errors.fullName ? 'border-red-500 bg-red-50/20' : 'border-surface-border'
                        } focus:outline-none focus:ring-2 focus:ring-burgundy`}
                      />
                      {errors.fullName && (
                        <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" /> {errors.fullName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="c-company" className="block text-xs font-bold uppercase tracking-wider text-navy mb-1">
                        Company / Bodyshop Name
                      </label>
                      <input
                        type="text"
                        id="c-company"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        placeholder="Company name"
                        className="w-full px-3 py-2.5 text-sm rounded-md border border-surface-border focus:outline-none focus:ring-2 focus:ring-burgundy"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="c-email" className="block text-xs font-bold uppercase tracking-wider text-navy mb-1">
                        Email Address <span className="text-burgundy">*</span>
                      </label>
                      <input
                        type="email"
                        id="c-email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@business.com"
                        className={`w-full px-3 py-2.5 text-sm rounded-md border ${
                          errors.email ? 'border-red-500 bg-red-50/20' : 'border-surface-border'
                        } focus:outline-none focus:ring-2 focus:ring-burgundy`}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="c-phone" className="block text-xs font-bold uppercase tracking-wider text-navy mb-1">
                        Phone / Mobile <span className="text-burgundy">*</span>
                      </label>
                      <input
                        type="tel"
                        id="c-phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Primary contact phone"
                        className={`w-full px-3 py-2.5 text-sm rounded-md border ${
                          errors.phone ? 'border-red-500 bg-red-50/20' : 'border-surface-border'
                        } focus:outline-none focus:ring-2 focus:ring-burgundy`}
                      />
                      {errors.phone && (
                        <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" /> {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="c-product" className="block text-xs font-bold uppercase tracking-wider text-navy mb-1">
                      Product Interest <span className="text-burgundy">*</span>
                    </label>
                    <select
                      id="c-product"
                      value={productInterest}
                      onChange={(e) => setProductInterest(e.target.value)}
                      className="w-full px-3 py-2.5 text-sm rounded-md border border-surface-border bg-white focus:outline-none focus:ring-2 focus:ring-burgundy text-navy font-medium"
                    >
                      {ALL_PRODUCTS.map((p) => (
                        <option key={p.id} value={p.name}>
                          {p.name}
                        </option>
                      ))}
                      <option value="Distributor Dealership Inquiry">Distributor / Dealership Agreement</option>
                      <option value="Custom Chemical Compounding">Custom Formulation Request</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="c-message" className="block text-xs font-bold uppercase tracking-wider text-navy mb-1">
                      Project Details / Message <span className="text-burgundy">*</span>
                    </label>
                    <textarea
                      id="c-message"
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Please mention target volume, destination city, or technical inquiry..."
                      className={`w-full p-3 text-sm rounded-md border ${
                        errors.message ? 'border-red-500 bg-red-50/20' : 'border-surface-border'
                      } focus:outline-none focus:ring-2 focus:ring-burgundy`}
                    />
                    {errors.message && (
                      <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.message}
                      </p>
                    )}
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 bg-burgundy hover:bg-burgundy-800 text-white font-semibold text-sm rounded-full shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-burgundy"
                    >
                      <span>Prepare & Send Inquiry</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              ) : (
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-burgundy-50 border border-burgundy-200">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-burgundy text-white rounded-lg flex-shrink-0 mt-0.5">
                        <Check className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-navy">Inquiry Prepared for Dispatch</h4>
                        <p className="text-xs text-body leading-relaxed mt-1">
                          Your message for <strong className="text-navy">{productInterest}</strong> has been validated. Send it immediately through your default email client or copy the formatted text.
                        </p>
                      </div>
                    </div>
                  </div>

                  <pre className="p-3 bg-surface rounded-lg text-xs font-mono border border-surface-border whitespace-pre-wrap">
                    {inquirySummary}
                  </pre>

                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <a
                      href={mailtoUrl}
                      className="inline-flex items-center gap-2 px-6 py-2.5 bg-burgundy hover:bg-burgundy-800 text-white font-semibold text-xs rounded-full shadow-sm"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Open in Email Client</span>
                    </a>
                    <button
                      onClick={handleCopy}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-surface hover:bg-surface-border text-navy font-semibold text-xs rounded-full border border-surface-border"
                    >
                      {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                      <span>{copied ? 'Copied!' : 'Copy Summary'}</span>
                    </button>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs text-body hover:text-navy underline ml-auto"
                    >
                      Reset Form
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
