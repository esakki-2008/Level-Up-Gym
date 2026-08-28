import React from 'react';
import { CheckCircle2, Award, Target, Zap } from 'lucide-react';
import { GYM_INFO } from '../data';

export const About: React.FC = () => {
  const highlights = [
    "Supportive trainers",
    "Quality equipment",
    "Clean environment",
    "Comfortable workout space",
    "Fitness guidance"
  ];

  const stats = [
    { label: "Location", value: "Dombivli East" },
    { label: "Languages", value: "Hindi & English" },
    { label: "Access", value: "Open 7 Days" },
    { label: "Environment", value: "Fully AC Gym" }
  ];

  return (
    <section id="about" className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Images / Collage */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1000&q=80"
                alt="Level Up Gym Facility Dombivli East"
                className="w-full h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80" />
              
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 p-4 rounded-2xl bg-zinc-950/90 border border-zinc-800 backdrop-blur-md shadow-xl flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-600 flex items-center justify-center text-zinc-950 font-bold">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-white font-bold text-sm">{GYM_INFO.name}</div>
                  <div className="text-zinc-400 text-xs">Pandurangwadi, Dombivli East</div>
                </div>
              </div>
            </div>

            {/* Secondary Accent Card */}
            <div className="absolute -bottom-8 -right-4 sm:-right-8 hidden sm:block p-6 rounded-2xl bg-zinc-900 border border-zinc-800 shadow-2xl max-w-xs">
              <div className="flex items-center gap-3 mb-2">
                <Zap className="w-5 h-5 text-amber-400" />
                <span className="text-white font-bold text-sm">Commitment to Results</span>
              </div>
              <p className="text-xs text-zinc-400">
                Designed to help you lift heavier, run faster, and stay consistent with zero excuses.
              </p>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-wider uppercase">
              <Target className="w-3.5 h-3.5" />
              <span>About Level Up Gym</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight leading-tight">
              Your Fitness. Your Goals.{' '}
              <span className="text-amber-400">Your Level Up.</span>
            </h2>

            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
              “Level Up Gym is a fitness center in Dombivli East designed for people who want to improve their strength, fitness, and overall lifestyle. Whether you're starting your fitness journey or looking to take your training to the next level, our facility provides the environment and equipment you need to stay consistent.”
            </p>

            {/* Highlights List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                  <span className="text-sm font-semibold text-zinc-200">{highlight}</span>
                </div>
              ))}
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-zinc-800">
              {stats.map((stat, index) => (
                <div key={index} className="space-y-1">
                  <div className="text-xs text-zinc-400 font-medium">{stat.label}</div>
                  <div className="text-sm font-bold text-white">{stat.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
