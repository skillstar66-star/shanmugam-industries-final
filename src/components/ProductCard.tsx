import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Car, Cog, Layers } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onSelectProduct?: (product: Product) => void;
  onRequestQuote: (productName: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onSelectProduct,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/products/${product.id}`);
    if (onSelectProduct) {
      onSelectProduct(product);
    }
  };

  const getProductIcon = (id: string) => {
    if (id.includes('body-filler') || id.includes('auto')) return Car;
    if (id.includes('metal')) return Cog;
    return Layers;
  };

  const Icon = getProductIcon(product.id);

  return (
    <div
      onClick={handleClick}
      className="group relative flex flex-col bg-white rounded-2xl border border-gray-100 shadow-[0_2px_14px_rgba(0,0,0,0.04)] hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 p-4 sm:p-5 text-left cursor-pointer"
    >
      {/* Product Image on Clean Light Studio Backdrop */}
      <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-[#F8F9FA] mb-4 flex items-center justify-center">
        <picture>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-102"
            loading="lazy"
          />
        </picture>
      </div>

      {/* Circular Product Icon */}
      <div className="w-10 h-10 rounded-full bg-burgundy-50 border border-burgundy-100 flex items-center justify-center text-burgundy mb-3 mt-1 flex-shrink-0 group-hover:bg-burgundy group-hover:text-white transition-colors duration-200">
        <Icon className="w-5 h-5" />
      </div>

      {/* Product Title */}
      <h3 className="text-xl sm:text-2xl font-bold text-navy mb-2.5 tracking-tight group-hover:text-burgundy transition-colors">
        {product.name}
      </h3>

      {/* Product Description */}
      <p className="text-sm text-body leading-relaxed mb-6 flex-1">
        {product.shortDesc}
      </p>

      {/* Explore Product Link */}
      <div className="pt-2">
        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-burgundy group-hover:text-burgundy-800 transition-colors">
          <span>Explore Product</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1.5" />
        </span>
      </div>
    </div>
  );
};
