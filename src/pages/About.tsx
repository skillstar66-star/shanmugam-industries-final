import React from 'react';
import { AboutSection } from '../components/AboutSection';
import { QualitySection } from '../components/QualitySection';
import { CTASection } from '../components/CTASection';
import { ShieldCheck, Target, Award } from 'lucide-react';

interface AboutProps {
  onRequestQuote: (productName?: string) => void;
}

export const About: React.FC<AboutProps> = ({ onRequestQuote }) => {
  return (
    <main className="pt-8">
      {/* Page Title Header */}
      <section className="bg-surface py-12 border-b border-surface-border text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="inline-block px-3 py-1 rounded bg-burgundy-50 border border-burgundy-100 text-burgundy text-xs font-semibold tracking-wider uppercase mb-3">
            WHO WE ARE
          </div>
          <h1 className="text-4xl font-extrabold text-navy tracking-tight mb-4">
            About Shanmugam Industries
          </h1>
          <p className="text-base text-body max-w-2xl mx-auto">
            A dedicated manufacturer delivering professional automotive body fillers, high-strength metal paste, and premium surface finishing compounds.
          </p>
        </div>
      </section>

      {/* Primary About Narrative */}
      <AboutSection onRequestQuote={() => onRequestQuote('Partnership Inquiry')} />

      {/* Quality Section */}
      <QualitySection />

      {/* Manufacturing Pillars Grid */}
      <section className="py-16 bg-white border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold text-navy tracking-tight mb-3">
              Our Manufacturing Guiding Principles
            </h2>
            <p className="text-body text-sm">
              How our chemical engineering processes translate into dependable bodyshop performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-surface border border-surface-border text-left">
              <div className="w-10 h-10 rounded-lg bg-burgundy-50 text-burgundy flex items-center justify-center mb-4">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-navy mb-2">Substrate Versatility</h3>
              <p className="text-sm text-body leading-relaxed">
                Formulations developed to securely bond to bare steel, zinc-coated metal, galvanized sheets, and aluminum without detachment.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-surface border border-surface-border text-left">
              <div className="w-10 h-10 rounded-lg bg-burgundy-50 text-burgundy flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-navy mb-2">Zero-Pinholing Chemistry</h3>
              <p className="text-sm text-body leading-relaxed">
                Advanced thixotropic additives and vacuum mixing prevent trapped air bubbles, eliminating costly rework for auto painters.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-surface border border-surface-border text-left">
              <div className="w-10 h-10 rounded-lg bg-burgundy-50 text-burgundy flex items-center justify-center mb-4">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-navy mb-2">Painter-First Ergonomics</h3>
              <p className="text-sm text-body leading-relaxed">
                Creamy, buttery knife feel that glides over complex contours and feathers effortlessly with standard P80-P240 abrasives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTASection onRequestQuote={() => onRequestQuote('Factory Visit / Trade Inquiry')} />
    </main>
  );
};
