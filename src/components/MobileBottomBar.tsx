import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';
import { GYM_INFO } from '../data';

interface MobileBottomBarProps {
  onOpenEnquiry: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ onOpenEnquiry }) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-zinc-950/95 backdrop-blur-md border-t border-zinc-800 p-3 shadow-2xl flex items-center gap-3">
      <a
        href={`tel:${GYM_INFO.phoneClean}`}
        className="flex-1 py-3 px-4 rounded-xl bg-zinc-900 border border-zinc-800 text-white font-bold text-xs flex items-center justify-center gap-2 active:scale-95 transition-transform"
      >
        <Phone className="w-4 h-4 text-amber-400" />
        <span>Call Now</span>
      </a>

      <button
        onClick={onOpenEnquiry}
        className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-zinc-950 font-extrabold text-xs flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20 active:scale-95 transition-transform"
      >
        <span>Join Now</span>
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
};
