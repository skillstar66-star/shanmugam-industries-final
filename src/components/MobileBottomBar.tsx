import React from 'react';
import { Home, Package, Wrench, MessageCircle, Send } from 'lucide-react';

interface MobileBottomBarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onRequestQuote: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({
  activeSection,
  onNavigate,
  onRequestQuote,
}) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'products', label: 'Products', icon: Package },
    { id: 'how-to-use', label: 'How to Use', icon: Wrench },
  ];

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      'Hello Shanmugam Industries, I am inquiring from your website about your automotive body fillers and metal paste solutions.'
    );
    window.open(`https://wa.me/919876543210?text=${text}`, '_blank');
  };

  return (
    <nav
      aria-label="Mobile Bottom App Bar"
      className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/90 shadow-[0_-4px_22px_rgba(0,0,0,0.08)] px-2 sm:px-4 py-2 pb-safe"
    >
      <div className="flex items-center justify-around max-w-lg mx-auto">
        {/* Navigation Items */}
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onNavigate(item.id)}
              className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-full transition-all duration-150 ${
                isActive
                  ? 'text-burgundy font-bold scale-105'
                  : 'text-slate-500 hover:text-navy'
              }`}
            >
              <div className="relative">
                <Icon className="w-5 h-5" />
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-burgundy" />
                )}
              </div>
              <span className="text-3xs sm:text-2xs mt-1 tracking-tight">
                {item.label}
              </span>
            </button>
          );
        })}

        {/* WhatsApp Direct Chat */}
        <button
          type="button"
          onClick={handleWhatsApp}
          className="flex flex-col items-center justify-center py-1 px-2.5 rounded-full text-[#128C7E] hover:text-[#075E54] transition-all"
          title="Instant WhatsApp Support"
        >
          <div className="w-5 h-5 flex items-center justify-center">
            <MessageCircle className="w-5 h-5 text-[#25D366]" />
          </div>
          <span className="text-3xs sm:text-2xs mt-1 font-semibold text-[#128C7E]">
            Chat
          </span>
        </button>

        {/* Quick Quote Pill Button */}
        <button
          type="button"
          onClick={onRequestQuote}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-burgundy hover:bg-burgundy-800 text-white font-bold text-xs shadow-md active:scale-95 transition-all"
        >
          <Send className="w-3.5 h-3.5" />
          <span>Quote</span>
        </button>
      </div>
    </nav>
  );
};
