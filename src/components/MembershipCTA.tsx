import React from 'react';
import { Phone, ArrowRight, ShieldCheck } from 'lucide-react';
import { GYM_INFO } from '../data';

interface MembershipCTAProps {
  onOpenEnquiry: () => void;
}

export const MembershipCTA: React.FC<MembershipCTAProps> = ({ onOpenEnquiry }) => {
  return (
    <section className="py-20 bg-zinc-950 relative overflow-hidden">
      {/* Background Banner Graphic */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1920&q=80"
          alt="Gym Membership Level Up Gym"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/90 to-zinc-950" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-b from-zinc-900 to-zinc-950 border border-zinc-800 shadow-2xl space-y-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>Contact Us For Membership Plans</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            Ready to <span className="text-amber-400">Level Up?</span>
          </h2>

          <p className="text-zinc-300 text-base sm:text-lg max-w-2xl mx-auto">
            “Your fitness journey starts with one decision. Take the first step today at Level Up Gym in Dombivli East.”
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={onOpenEnquiry}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-zinc-950 font-extrabold text-base flex items-center justify-center gap-3 shadow-xl shadow-orange-500/25 hover:brightness-110 active:scale-95 transition-all"
            >
              <span>Join Now</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <a
              href={`tel:${GYM_INFO.phoneClean}`}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-zinc-900 border border-zinc-700 text-white font-bold text-base flex items-center justify-center gap-3 hover:bg-zinc-800 active:scale-95 transition-all"
            >
              <Phone className="w-5 h-5 text-amber-400" />
              <span>Call {GYM_INFO.phone}</span>
            </a>
          </div>

          <div className="text-xs text-zinc-500 pt-2">
            Flexible monthly, quarterly, and annual packages available at the front desk.
          </div>
        </div>
      </div>
    </section>
  );
};
