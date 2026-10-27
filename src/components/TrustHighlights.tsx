import React from 'react';
import { CheckCircle2, ShieldCheck, Factory } from 'lucide-react';

export const TrustHighlights: React.FC = () => {
  const highlights = [
    {
      icon: CheckCircle2,
      title: 'Consistent Quality',
      description: 'Strict batch-to-batch viscosity, cure rate, and stability checks ensuring predictable application every time.'
    },
    {
      icon: ShieldCheck,
      title: 'Built for Professionals',
      description: 'Engineered specifically for demanding body shop conditions with butter-smooth spread and fast feather-edging.'
    },
    {
      icon: Factory,
      title: 'Manufacturing Excellence',
      description: 'Equipped with industrial high-shear dispersion reactors and specialized automated filling lines.'
    }
  ];

  return (
    <section className="bg-white border-b border-surface-border py-8 lg:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-surface-border">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`flex items-start gap-4 py-5 md:py-2 ${
                  index === 0
                    ? 'md:pr-8'
                    : index === 1
                    ? 'md:px-8'
                    : 'md:pl-8'
                }`}
              >
                <div className="flex-shrink-0 p-2.5 rounded-lg bg-burgundy-50 border border-burgundy-100 text-burgundy">
                  <Icon className="w-6 h-6 text-burgundy" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-navy mb-1 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-body leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
