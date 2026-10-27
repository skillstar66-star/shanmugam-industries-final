import React from 'react';
import { Hero } from '../components/Hero';
import { ProductsSection } from '../components/ProductsSection';
import { QualitySection } from '../components/QualitySection';
import { CertificationsSection } from '../components/CertificationsSection';
import { ProductComparisonSection } from '../components/ProductComparisonSection';
import { AboutSection } from '../components/AboutSection';
import { DownloadCatalogueSection } from '../components/DownloadCatalogueSection';
import { IndustriesSection } from '../components/IndustriesSection';
import { CTASection } from '../components/CTASection';
import { ContactSection } from '../components/ContactSection';
import { Product } from '../types';

interface HomeProps {
  onSelectProduct: (product: Product) => void;
  onRequestQuote: (productName?: string) => void;
  isLoaded?: boolean;
}

export const Home: React.FC<HomeProps> = ({
  onSelectProduct,
  onRequestQuote,
  isLoaded = true,
}) => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main>
      {/* 5. Hero Section with Integrated Trust Highlights */}
      <Hero
        isLoaded={isLoaded}
        onExploreProducts={() => scrollToSection('products')}
        onTalkToTeam={() => scrollToSection('contact')}
      />

      {/* 7. Products Section */}
      <ProductsSection
        onSelectProduct={onSelectProduct}
        onRequestQuote={(productName) => onRequestQuote(productName)}
      />

      {/* 8. Quality & Manufacturing Section */}
      <QualitySection />

      {/* Global Compliance: Certifications & Lab Reports */}
      <CertificationsSection />

      {/* For Dealers & Professionals: Product Comparison */}
      <ProductComparisonSection
        onRequestQuote={(productName) => onRequestQuote(productName)}
      />

      {/* About Section */}
      <AboutSection
        onRequestQuote={() => onRequestQuote('General Partnership')}
      />

      {/* Download Product Catalogue */}
      <DownloadCatalogueSection />

      {/* Industries Section */}
      <IndustriesSection />

      {/* 9. Call to Action Banner */}
      <CTASection
        onRequestQuote={() => onRequestQuote()}
      />

      {/* Contact Section */}
      <ContactSection />
    </main>
  );
};
