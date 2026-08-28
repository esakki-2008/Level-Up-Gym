import React from 'react';
import { TRAINERS_DATA } from '../data';
import { Award, UserCheck, ArrowRight } from 'lucide-react';

interface TrainersProps {
  onOpenEnquiry: (trainerName?: string) => void;
}

export const Trainers: React.FC<TrainersProps> = ({ onOpenEnquiry }) => {
  return (
    <section id="trainers" className="py-24 bg-zinc-900/40 border-t border-b border-zinc-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-wider uppercase">
            <UserCheck className="w-3.5 h-3.5" />
            <span>Expert Guidance</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            Meet Our Professional <span className="text-amber-400">Trainers</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Certified fitness experts ready to guide your workouts, correct your form, and push you toward your goals.
          </p>
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TRAINERS_DATA.map((trainer) => (
            <div
              key={trainer.id}
              className="group rounded-3xl bg-zinc-950 border border-zinc-800 overflow-hidden flex flex-col hover:border-amber-500/50 transition-all duration-300 shadow-xl"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
                
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-zinc-900/90 border border-zinc-700 text-amber-400 text-xs font-bold flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5" />
                  <span>{trainer.experience}</span>
                </div>

                <div className="absolute bottom-4 left-4">
                  <div className="text-amber-400 text-xs font-bold uppercase tracking-wider">{trainer.role}</div>
                  <h3 className="text-2xl font-black text-white">{trainer.name}</h3>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                <p className="text-sm text-zinc-300 leading-relaxed">{trainer.bio}</p>

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {trainer.specialties.map((spec, i) => (
                      <span key={i} className="px-2.5 py-1 rounded-lg bg-zinc-900 text-zinc-300 text-xs font-medium border border-zinc-800">
                        {spec}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => onOpenEnquiry(`Personal Training with ${trainer.name}`)}
                    className="w-full py-3 rounded-xl bg-zinc-900 hover:bg-amber-500 hover:text-zinc-950 text-white font-bold text-xs uppercase tracking-wider border border-zinc-800 transition-all flex items-center justify-center gap-2 group"
                  >
                    <span>Train With {trainer.name.split(' ')[0]}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Portfolio Note Notice for Developer / Owner */}
        <div className="mt-12 p-4 rounded-2xl bg-zinc-950 border border-zinc-800 text-center max-w-xl mx-auto text-xs text-zinc-400">
          * Trainer profiles are fully editable. Real names, certifications, and photographs can be updated easily before publishing.
        </div>
      </div>
    </section>
  );
};
