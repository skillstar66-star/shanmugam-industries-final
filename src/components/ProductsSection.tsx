import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ProductCard } from './ProductCard';
import { FEATURED_PRODUCTS, ALL_PRODUCTS } from '../data/productsData';
import { Product } from '../types';
import { ArrowRight, ChevronUp, ChevronLeft, ChevronRight } from 'lucide-react';

interface ProductsSectionProps {
  onSelectProduct: (product: Product) => void;
  onRequestQuote: (productName: string) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({
  onSelectProduct,
  onRequestQuote,
}) => {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // In mobile view: show ALL products by default! In desktop view: show featured or all based on showAll
  const displayedProducts = isMobile ? ALL_PRODUCTS : (showAll ? ALL_PRODUCTS : FEATURED_PRODUCTS);
  const smoothEase = [0.16, 1, 0.3, 1];

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      const cardWidth = scrollContainerRef.current.clientWidth * 0.82;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(Math.min(Math.max(index, 0), displayedProducts.length - 1));
    }
  };

  const scrollToCard = (index: number) => {
    if (scrollContainerRef.current) {
      const card = scrollContainerRef.current.children[index] as HTMLElement;
      if (card) {
        card.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }
    }
  };

  const scrollByDirection = (dir: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.clientWidth * 0.82;
      scrollContainerRef.current.scrollBy({
        left: dir === 'left' ? -cardWidth : cardWidth,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="products" className="py-14 sm:py-18 lg:py-20 bg-white border-b border-surface-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Matches Reference Image 100% */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: smoothEase }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-12 text-left"
        >
          {/* Left: Eyebrow with line + Heading + Subtitle */}
          <div>
            <div className="inline-flex items-center gap-3 mb-1.5">
              <span className="text-xs font-bold tracking-[0.16em] text-burgundy uppercase">
                OUR PRODUCTS
              </span>
              <span className="w-8 h-[2px] bg-burgundy/60 inline-block rounded-full" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black tracking-tight text-navy leading-[1.12]">
              Engineered for <span className="text-burgundy">Performance</span>
            </h2>

            <p className="text-sm sm:text-base text-body font-normal leading-relaxed mt-2.5 max-w-xl">
              High-quality solutions for automotive refinishing and surface preparation.
            </p>
          </div>

          {/* Right: View All Products Link (Desktop Only - Hidden on Mobile) */}
          <div className="hidden md:block flex-shrink-0 pt-2 md:pt-0">
            <button
              onClick={() => setShowAll(!showAll)}
              className="group inline-flex items-center gap-2 text-sm font-bold text-burgundy hover:text-burgundy-800 transition-colors py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-burgundy rounded-full"
            >
              <span>{showAll ? 'Show Featured Only' : 'View All Products'}</span>
              {showAll ? (
                <ChevronUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
              ) : (
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              )}
            </button>
          </div>
        </motion.div>

        {/* Product Cards: Mobile Horizontal Swipe Carousel & Desktop Grid */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory md:snap-none pb-4 pt-1 -mx-4 px-4 sm:-mx-6 sm:px-6 md:mx-0 md:px-0 scrollbar-none scroll-smooth"
        >
          {displayedProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.5,
                delay: 0.1 + index * 0.08,
                ease: smoothEase,
              }}
              className="w-[82vw] max-w-[320px] md:w-auto md:max-w-none shrink-0 md:shrink snap-center md:snap-align-none flex flex-col"
            >
              <ProductCard
                product={product}
                onSelectProduct={onSelectProduct}
                onRequestQuote={onRequestQuote}
              />
            </motion.div>
          ))}
        </div>

        {/* Mobile Swipe Pagination Dots & Navigation Chevron Strip */}
        <div className="flex md:hidden items-center justify-between mt-3 px-1 select-none">
          {/* Active Dot Indicators */}
          <div className="flex items-center gap-1.5">
            {displayedProducts.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => scrollToCard(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeIndex === i ? 'w-6 bg-burgundy' : 'w-1.5 bg-slate-300'
                }`}
                aria-label={`Go to product ${i + 1}`}
              />
            ))}
          </div>

          {/* Quick Prev / Next Chevron Arrow Pills on Mobile */}
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => scrollByDirection('left')}
              className="w-8 h-8 rounded-full bg-surface border border-surface-border flex items-center justify-center text-navy hover:text-burgundy transition-colors active:scale-90 shadow-2xs"
              aria-label="Previous product"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => scrollByDirection('right')}
              className="w-8 h-8 rounded-full bg-burgundy text-white flex items-center justify-center transition-colors active:scale-90 shadow-2xs"
              aria-label="Next product"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
