import React from 'react';
import { ContactSection } from '../components/ContactSection';
import { FileQuestion } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <main className="pt-8">
      {/* Header */}
      <section className="bg-surface py-12 border-b border-surface-border text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="inline-block px-3 py-1 rounded bg-burgundy-50 border border-burgundy-100 text-burgundy text-xs font-semibold tracking-wider uppercase mb-3">
            CONTACT & QUOTATIONS
          </div>
          <h1 className="text-4xl font-extrabold text-navy tracking-tight mb-4">
            Talk to Shanmugam Industries
          </h1>
          <p className="text-base text-body max-w-2xl mx-auto">
            Connect directly with our chemical formulation engineers and regional distribution representatives.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <ContactSection />

      {/* FAQ Mini-Section */}
      <section className="py-16 bg-white border-b border-surface-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-navy mb-2">Frequently Asked Inquiries</h2>
            <p className="text-sm text-body">Common questions regarding trade orders, shipping, and formulation trials.</p>
          </div>

          <div className="space-y-4 text-left">
            <div className="p-5 rounded-xl border border-surface-border bg-surface-light">
              <h3 className="text-base font-bold text-navy mb-1.5 flex items-center gap-2">
                <FileQuestion className="w-4 h-4 text-burgundy" />
                <span>Do you offer free workshop trial samples?</span>
              </h3>
              <p className="text-sm text-body leading-relaxed">
                Yes. For verified commercial bodyshops, collision paint workshops, and bulk distributors, we provide evaluation sample packs of our Automotive Body Filler and Metal Paste upon request.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-surface-border bg-surface-light">
              <h3 className="text-base font-bold text-navy mb-1.5 flex items-center gap-2">
                <FileQuestion className="w-4 h-4 text-burgundy" />
                <span>What are the standard mix ratios for your polyester putties?</span>
              </h3>
              <p className="text-sm text-body leading-relaxed">
                Our standard 2-component fillers and pastes are formulated for a 100:2 to 100:3 ratio by weight with Benzoyl Peroxide (BPO) red or blue hardener paste.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-surface-border bg-surface-light">
              <h3 className="text-base font-bold text-navy mb-1.5 flex items-center gap-2">
                <FileQuestion className="w-4 h-4 text-burgundy" />
                <span>Can you supply customized pail sizes or private label packaging?</span>
              </h3>
              <p className="text-sm text-body leading-relaxed">
                Yes. In addition to our standard 200g, 400g, 1kg, 2kg, and 3kg cans, we manufacture bulk 10kg and 25kg industrial pails and OEM private label batches for domestic and export clients.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
