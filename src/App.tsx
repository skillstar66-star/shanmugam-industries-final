import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Products } from './pages/Products';
import { ProductDetail } from './pages/ProductDetail';
import { Contact } from './pages/Contact';
import { ProductDetailModal } from './components/ProductDetailModal';
import { QuoteModal } from './components/QuoteModal';
import { Preloader } from './components/Preloader';
import { MobileBottomBar } from './components/MobileBottomBar';
import { WhatsAppToggle } from './components/WhatsAppToggle';
import { Product } from './types';

export const App: React.FC = () => {
  const [showPreloader, setShowPreloader] = useState<boolean>(true);
  const [isHeroReady, setIsHeroReady] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isQuoteOpen, setIsQuoteOpen] = useState<boolean>(false);
  const [quoteProduct, setQuoteProduct] = useState<string>('');

  const navigate = useNavigate();
  const location = useLocation();

  // Handle active navigation tracking on scroll (when on home page)
  useEffect(() => {
    if (location.pathname !== '/') {
      if (location.pathname.includes('/about')) setActiveSection('about');
      else if (location.pathname.includes('/products')) setActiveSection('products');
      else if (location.pathname.includes('/contact')) setActiveSection('contact');
      return;
    }

    const sections = ['home', 'about', 'products', 'quality', 'industries', 'contact'];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);

    // If on a sub-route and user clicks a section that exists on Home
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return;
    }

    // Scroll to section on home page
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenQuote = (productName?: string) => {
    setQuoteProduct(productName || '');
    setIsQuoteOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-navy selection:bg-burgundy-50 selection:text-burgundy pb-16 md:pb-0">
      {/* 0. Letter-by-Letter Brand Wordmark Preloader */}
        {showPreloader && (
          <Preloader
            onStartExit={() => setIsHeroReady(true)}
            onComplete={() => setShowPreloader(false)}
          />
        )}

        {/* 4. Website Header */}
        <Header
          activeSection={activeSection}
          onNavigate={handleNavigate}
          onRequestQuote={() => handleOpenQuote()}
        />

        {/* Main Content Router */}
        <div className="flex-1">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  isLoaded={isHeroReady}
                  onSelectProduct={(product) => navigate(`/products/${product.id}`)}
                  onRequestQuote={(prodName) => handleOpenQuote(prodName)}
                />
              }
            />
            <Route
              path="/about"
              element={
                <About
                  onRequestQuote={(prodName) => handleOpenQuote(prodName)}
                />
              }
            />
            <Route
              path="/products"
              element={
                <Products
                  onSelectProduct={(product) => navigate(`/products/${product.id}`)}
                  onRequestQuote={(prodName) => handleOpenQuote(prodName)}
                />
              }
            />
            <Route
              path="/products/:id"
              element={
                <ProductDetail
                  onRequestQuote={(prodName) => handleOpenQuote(prodName)}
                />
              }
            />
            <Route
              path="/product/:id"
              element={
                <ProductDetail
                  onRequestQuote={(prodName) => handleOpenQuote(prodName)}
                />
              }
            />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="*"
              element={
                <Home
                  isLoaded={isHeroReady}
                  onSelectProduct={(product) => navigate(`/products/${product.id}`)}
                  onRequestQuote={(prodName) => handleOpenQuote(prodName)}
                />
              }
            />
          </Routes>
        </div>

        {/* 10. Footer */}
        <Footer
          onNavigate={handleNavigate}
          onRequestQuote={() => handleOpenQuote()}
        />

        {/* 11. Mobile App Bottom Bar (Quick Actions on Mobile Screens) */}
        <MobileBottomBar
          activeSection={activeSection}
          onNavigate={handleNavigate}
          onRequestQuote={() => handleOpenQuote()}
        />

        {/* 12. Floating Interactive WhatsApp Toggle Widget */}
        <WhatsAppToggle />

        {/* Product Detail Modal */}
        <ProductDetailModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onRequestQuote={(productName) => handleOpenQuote(productName)}
        />

        {/* Interactive Quotation Form Modal */}
        <QuoteModal
          isOpen={isQuoteOpen}
          onClose={() => setIsQuoteOpen(false)}
          preselectedProduct={quoteProduct}
        />
      </div>
  );
};

export default App;
