import React from 'react';
import { ArrowRight, Phone, ShieldCheck, Dumbbell, Users, Calendar } from 'lucide-react';
import { GYM_INFO } from '../data';

interface HeroProps {
  onOpenEnquiry: (defaultGoal?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnquiry }) => {
  const trustIndicators = [
    { icon: Dumbbell, title: "Modern Equipment", subtitle: "Top-tier weights & cardio" },
    { icon: Users, title: "Professional Trainers", subtitle: "Expert Dombivli coaches" },
    { icon: ShieldCheck, title: "All Fitness Levels", subtitle: "Beginner to advanced" },
    { icon: Calendar, title: "Open 7 Days", subtitle: "Flexible workout times" },
  ];

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-28 pb-16 bg-zinc-950 overflow-hidden">
      {/* Background Glows & Image Overlay */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950 z-10" />
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1920&q=85"
          alt="Level Up Gym Workout Floor"
          className="w-full h-full object-cover object-center scale-105 animate-pulse duration-[10000ms]"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
              <span>Dombivli East's Premier Fitness Hub</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight uppercase leading-[1.05]">
              Level Up Your Fitness.{' '}
              <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-amber-500 bg-clip-text text-transparent">
                Level Up Your Life.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-zinc-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              “Train harder, get stronger, and become the best version of yourself at Level Up Gym located in Pandurangwadi, Dombivli East.”
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => onOpenEnquiry('Start Journey')}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-zinc-950 font-extrabold text-base flex items-center justify-center gap-3 shadow-xl shadow-orange-500/25 hover:brightness-110 active:scale-95 transition-all"
              >
                <span>Start Your Journey</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href={`tel:${GYM_INFO.phoneClean}`}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-zinc-900/90 border border-zinc-800 text-white font-bold text-base flex items-center justify-center gap-3 hover:bg-zinc-800 hover:border-zinc-700 active:scale-95 transition-all"
              >
                <Phone className="w-5 h-5 text-amber-400" />
                <span>Call Now ({GYM_INFO.phone})</span>
              </a>
            </div>
          </div>

          {/* Right Side Visual Highlight Card / Quick Badge */}
          <div className="lg:col-span-5 hidden lg:block">
            <div className="relative p-8 rounded-3xl bg-zinc-900/70 border border-zinc-800/80 backdrop-blur-xl shadow-2xl">
              <div className="absolute -top-4 -right-4 px-4 py-1.5 rounded-full bg-amber-500 text-zinc-950 font-black text-xs uppercase tracking-widest shadow-lg">
                Open Daily
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Ready to Transform?</h3>
              <p className="text-sm text-zinc-400 mb-6">
                Visit our fully equipped facility at Ground Floor, Samruddhi Building, Dombivli East.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-zinc-950/60 border border-zinc-800">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400">
                    <Dumbbell className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">Strength & Cardio Zone</div>
                    <div className="text-xs text-zinc-400">Advanced machines & free weights</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-zinc-950/60 border border-zinc-800">
                  <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">Expert Guidance</div>
                    <div className="text-xs text-zinc-400">Hindi & English trainers available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-12 border-t border-zinc-800/80">
          {trustIndicators.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-900/50 border border-zinc-800/60 backdrop-blur-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">{item.title}</h4>
                  <p className="text-xs text-zinc-400 mt-0.5">{item.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
