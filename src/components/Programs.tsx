import React, { useState } from 'react';
import { PROGRAM_DATA } from '../data';
import { Program } from '../types';
import { ArrowRight, CheckCircle2, X, Dumbbell, Sparkles } from 'lucide-react';

interface ProgramsProps {
  onOpenEnquiry: (programTitle: string) => void;
}

export const Programs: React.FC<ProgramsProps> = ({ onOpenEnquiry }) => {
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);

  return (
    <section id="programs" className="py-24 bg-zinc-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Training Programs</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            Designed To Push Your <span className="text-amber-400">Limits</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Choose the right program tailored to your fitness objectives with expert guidance at Level Up Gym.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROGRAM_DATA.map((program) => (
            <div
              key={program.id}
              className="group rounded-3xl bg-zinc-900/60 border border-zinc-800 overflow-hidden flex flex-col hover:border-amber-500/50 transition-all duration-300 shadow-xl"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-zinc-950/80 backdrop-blur-md border border-zinc-800 text-amber-400 text-xs font-bold">
                  {program.tagline}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <h3 className="text-2xl font-black text-white">{program.title}</h3>
                  <p className="text-sm text-zinc-300 leading-relaxed">{program.description}</p>
                </div>

                <div className="pt-4 border-t border-zinc-800 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProgram(program)}
                    className="text-sm font-bold text-amber-400 hover:text-amber-300 flex items-center gap-2 group-hover:translate-x-1 transition-transform"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => onOpenEnquiry(program.title)}
                    className="px-4 py-2 rounded-xl bg-amber-500 text-zinc-950 font-bold text-xs uppercase tracking-wider hover:bg-amber-400 transition-colors"
                  >
                    Enroll
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Program Detail Modal */}
      {selectedProgram && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-zinc-900 border border-zinc-800 rounded-3xl shadow-2xl overflow-hidden">
            <div className="relative h-64 sm:h-72">
              <img
                src={selectedProgram.image}
                alt={selectedProgram.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent" />
              <button
                onClick={() => setSelectedProgram(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-zinc-950/80 text-white hover:bg-zinc-800 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-amber-400 text-xs font-bold uppercase tracking-wider mb-1">
                  {selectedProgram.tagline}
                </div>
                <h3 className="text-3xl font-black text-white">{selectedProgram.title}</h3>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <p className="text-zinc-300 text-base leading-relaxed">{selectedProgram.description}</p>

              <div className="space-y-3">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">Key Benefits:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedProgram.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-sm text-zinc-200 p-2.5 rounded-xl bg-zinc-950/50 border border-zinc-800">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center gap-3">
                <Dumbbell className="w-5 h-5 text-amber-400 shrink-0" />
                <div className="text-xs text-zinc-300">
                  <span className="font-bold text-white">Recommended For: </span>
                  {selectedProgram.recommendedFor}
                </div>
              </div>

              <div className="pt-4 flex items-center justify-end gap-4">
                <button
                  onClick={() => setSelectedProgram(null)}
                  className="px-6 py-3 rounded-xl bg-zinc-800 text-white font-semibold text-sm hover:bg-zinc-700 transition-colors"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const title = selectedProgram.title;
                    setSelectedProgram(null);
                    onOpenEnquiry(title);
                  }}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-zinc-950 font-extrabold text-sm shadow-lg shadow-orange-500/20 hover:brightness-110 transition-all"
                >
                  Enquire About {selectedProgram.title}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
