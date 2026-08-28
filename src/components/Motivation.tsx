import React from 'react';
import { ArrowRight, Flame } from 'lucide-react';

interface MotivationProps {
  onOpenEnquiry: () => void;
}

export const Motivation: React.FC<MotivationProps> = ({ onOpenEnquiry }) => {
  return (
    <section className="relative py-28 bg-zinc-950 overflow-hidden text-center">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1920&q=85"
          alt="Gym Motivation Level Up Gym"
          className="w-full h-full object-cover opacity-25 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-zinc-950" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="w-16 h-16 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 mx-auto shadow-xl shadow-amber-500/10">
          <Flame className="w-8 h-8 animate-bounce" />
        </div>

        <h2 className="text-3xl sm:text-6xl font-black text-white uppercase tracking-tight leading-tight">
          “DON'T WAIT FOR THE PERFECT TIME.{' '}
          <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
            START TODAY.</span>”
        </h2>

        <p className="text-zinc-300 text-base sm:text-lg max-w-2xl mx-auto">
          Every expert was once a beginner. Step onto the workout floor at Level Up Gym, Dombivli East, and transform your potential into power.
        </p>

        <div className="pt-4">
          <button
            onClick={onOpenEnquiry}
            className="px-10 py-5 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-600 text-zinc-950 font-black text-lg uppercase tracking-wider inline-flex items-center gap-3 shadow-2xl shadow-orange-500/30 hover:scale-105 transition-all"
          >
            <span>Start Training</span>
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};
