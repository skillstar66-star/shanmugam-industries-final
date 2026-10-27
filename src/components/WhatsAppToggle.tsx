import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCheck, Clock } from 'lucide-react';

const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    stroke="currentColor"
    strokeWidth="0"
    fill="currentColor"
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export const WhatsAppToggle: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [customMsg, setCustomMsg] = useState<string>('');

  const quickPrompts = [
    'Product Price & Technical Catalog',
    'Body Filler & Metal Paste Availability',
    'Wholesale Dealership Distribution',
    'Sample request for Body Shop',
  ];

  const handleStartChat = (messageToSend?: string) => {
    const text =
      messageToSend ||
      customMsg.trim() ||
      'Hello Shanmugam Industries, I am inquiring from your website about your automotive body fillers and metal paste solutions.';
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/919876543210?text=${encoded}`, '_blank');
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Backdrop Overlay (Closes on outside tap on mobile) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-40 bg-navy-dark/30 backdrop-blur-2xs sm:hidden"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      <div className="fixed bottom-20 md:bottom-6 right-3 sm:right-6 z-50 select-none">
        {/* 1. Toggled WhatsApp Interactive Chat Widget Card */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.95 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="fixed sm:absolute bottom-[76px] sm:bottom-16 left-3 right-3 sm:left-auto sm:right-0 sm:w-[360px] max-h-[calc(100vh-100px)] sm:max-h-[520px] bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col origin-bottom-right z-50"
            >
              {/* Header with Dark Green WhatsApp theme */}
              <div className="bg-gradient-to-r from-[#075E54] to-[#128C7E] px-4 py-3 sm:p-4 text-white relative flex-shrink-0">
                <div className="flex items-center gap-3">
                  {/* White Logo Container */}
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white p-1.5 flex items-center justify-center flex-shrink-0 shadow-xs border border-white/20">
                    <img
                      src="/images/shanmugam-logo.png"
                      alt="Shanmugam Industries"
                      className="w-full h-auto object-contain"
                    />
                  </div>

                  {/* Agent Details */}
                  <div className="flex-1 min-w-0 text-left">
                    <h4 className="text-sm font-bold truncate tracking-tight text-white">
                      Shanmugam Industries
                    </h4>
                    <div className="flex items-center gap-1.5 text-3xs text-emerald-100 mt-0.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Online &bull; Instant Support</span>
                    </div>
                  </div>

                  {/* Close Button */}
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                    aria-label="Close WhatsApp chat popup"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Chat Body with Authentic Background */}
              <div className="p-3.5 sm:p-4 bg-[#F0F2F5]/80 space-y-3 flex-1 overflow-y-auto min-h-0 text-left">
                {/* Incoming Bubble */}
                <div className="flex items-start gap-2.5">
                  <div className="bg-white rounded-2xl rounded-tl-xs p-3 sm:p-3.5 shadow-xs border border-slate-200/80 max-w-[95%] sm:max-w-[90%] text-xs text-navy space-y-1.5">
                    <span className="font-bold text-[#075E54] text-3xs uppercase tracking-wider block">
                      Customer Technical Support
                    </span>
                    <p className="leading-relaxed text-xs">
                      Hello! 👋 Welcome to <strong className="text-navy">Shanmugam Industries</strong>.
                      How can our technical team assist you with body fillers, metal pastes, or dealer pricing today?
                    </p>
                    <div className="flex items-center justify-end gap-1 text-3xs text-slate-400 pt-0.5">
                      <Clock className="w-3 h-3" />
                      <span>Just now</span>
                      <CheckCheck className="w-3.5 h-3.5 text-[#53BDEB]" />
                    </div>
                  </div>
                </div>

                {/* Quick Prompt Chips */}
                <div className="space-y-1.5 pt-1">
                  <span className="text-3xs font-bold text-slate-500 uppercase tracking-wider block pl-1">
                    Choose a Quick Inquiry:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {quickPrompts.map((prompt, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => handleStartChat(prompt)}
                        className="text-left text-3xs sm:text-2xs font-semibold px-2.5 sm:px-3 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 hover:border-[#25D366] hover:text-[#075E54] hover:bg-emerald-50/50 shadow-2xs transition-all active:scale-95"
                      >
                        {prompt} &rsaquo;
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Input & Direct Send Bar */}
              <div className="p-2.5 sm:p-3 bg-white border-t border-slate-100 flex flex-col gap-2 flex-shrink-0">
                <div className="relative flex items-center">
                  <input
                    type="text"
                    value={customMsg}
                    onChange={(e) => setCustomMsg(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        handleStartChat();
                      }
                    }}
                    placeholder="Type your message..."
                    className="w-full pl-3 pr-10 py-2 sm:py-2.5 text-xs rounded-full bg-slate-50 border border-slate-200 text-navy placeholder-slate-400 focus:outline-hidden focus:border-[#25D366] focus:ring-1 focus:ring-[#25D366]"
                  />
                  <button
                    type="button"
                    onClick={() => handleStartChat()}
                    className="absolute right-1.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#25D366] hover:bg-[#1ebd59] text-white flex items-center justify-center transition-transform active:scale-90"
                    aria-label="Send via WhatsApp"
                  >
                    <Send className="w-3.5 h-3.5 -rotate-45" />
                  </button>
                </div>

                {/* Instant WhatsApp Action Button */}
                <button
                  type="button"
                  onClick={() => handleStartChat()}
                  className="w-full inline-flex items-center justify-center gap-2 py-2 sm:py-2.5 px-4 rounded-full bg-[#25D366] hover:bg-[#1ebd59] text-white font-bold text-xs shadow-md active:scale-98 transition-all"
                >
                  <WhatsAppIcon className="w-4 h-4 text-white fill-white" />
                  <span>Start Chat on WhatsApp</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 2. Floating Circular WhatsApp Toggle Button */}
      <div className="relative flex items-center justify-end">
        {/* Subtle Pulse Rings when closed */}
        {!isOpen && (
          <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 pointer-events-none" />
        )}

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={`relative z-10 w-13 h-13 sm:w-14 sm:h-14 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 active:scale-95 group ${
            isOpen
              ? 'bg-slate-800 hover:bg-slate-900 text-white shadow-slate-900/40 rotate-90'
              : 'bg-[#25D366] hover:bg-[#1ebd59] text-white shadow-[#25D366]/40 hover:scale-105'
          }`}
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Close WhatsApp chat' : 'Open WhatsApp chat'}
        >
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <div className="relative flex items-center justify-center">
              <WhatsAppIcon className="w-7 h-7 sm:w-8 sm:h-8 fill-white text-white drop-shadow-sm group-hover:scale-110 transition-transform" />
              
              {/* Green Unread Badge "1" */}
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 border-2 border-white text-white font-black text-[9px] flex items-center justify-center shadow-xs animate-bounce">
                1
              </span>
            </div>
          )}
        </button>
      </div>
    </div>
    </>
  );
};
