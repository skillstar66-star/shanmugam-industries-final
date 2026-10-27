import React, { useState } from 'react';
import { ALL_PRODUCTS } from '../data/productsData';
import { ProductCard } from '../components/ProductCard';
import { Product } from '../types';
import { Search, ShieldCheck } from 'lucide-react';
import { CTASection } from '../components/CTASection';

interface ProductsPageProps {
  onSelectProduct: (product: Product) => void;
  onRequestQuote: (productName?: string) => void;
}

export const Products: React.FC<ProductsPageProps> = ({
  onSelectProduct,
  onRequestQuote
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Auto Refinish', 'Structural Bonding', 'Surface Preparation', 'Marine Solutions', 'High-Performance'];

  const filteredProducts = ALL_PRODUCTS.filter((prod) => {
    const matchesCategory = selectedCategory === 'All' || prod.category === selectedCategory;
    const matchesSearch =
      prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.tag.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="pt-8">
      {/* Header */}
      <section className="bg-surface py-12 border-b border-surface-border text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="inline-block px-3 py-1 rounded bg-burgundy-50 border border-burgundy-100 text-burgundy text-xs font-semibold tracking-wider uppercase mb-3">
            COMPLETE CATALOG
          </div>
          <h1 className="text-4xl font-extrabold text-navy tracking-tight mb-4">
            Industrial Automotive Refinish Formulations
          </h1>
          <p className="text-base text-body max-w-2xl mx-auto">
            Explore our comprehensive range of high-performance automotive body fillers, metallic pastes, and specialty repair compounds.
          </p>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="py-8 bg-white border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Category Pills */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                    selectedCategory === cat
                      ? 'bg-burgundy text-white shadow-sm'
                      : 'bg-surface hover:bg-surface-border text-navy'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search formulations..."
                className="w-full pl-9 pr-3 py-2 text-sm rounded-md border border-surface-border focus:outline-none focus:ring-2 focus:ring-burgundy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-surface-light min-h-[500px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((prod) => (
                <ProductCard
                  key={prod.id}
                  product={prod}
                  onSelectProduct={onSelectProduct}
                  onRequestQuote={(name) => onRequestQuote(name)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-2xl border border-surface-border max-w-lg mx-auto">
              <p className="text-lg font-bold text-navy mb-2">No products match your criteria</p>
              <p className="text-sm text-body mb-4">Try adjusting your search terms or clearing category filters.</p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="px-4 py-2 bg-burgundy text-white text-xs font-semibold rounded-md"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Quality Notice */}
      <section className="py-12 bg-white border-t border-surface-border">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 text-sm font-semibold text-navy bg-surface px-4 py-2 rounded-lg border border-surface-border mb-3">
            <ShieldCheck className="w-5 h-5 text-burgundy" />
            <span>Industrial Packaging & Private Label Support</span>
          </div>
          <p className="text-sm text-body">
            All formulations are available in bulk distribution cartons, customized pail packaging (10kg - 25kg), or private label arrangements for automotive refinish brands.
          </p>
        </div>
      </section>

      {/* CTA */}
      <CTASection onRequestQuote={() => onRequestQuote('Bulk Product Inquiry')} />
    </main>
  );
};
