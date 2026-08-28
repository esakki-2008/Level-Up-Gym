import React from 'react';
import { Dumbbell, Phone, MapPin, Instagram, Facebook, Youtube, ArrowUp } from 'lucide-react';
import { GYM_INFO } from '../data';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 text-zinc-400 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-600 flex items-center justify-center text-zinc-950 shadow-lg shadow-orange-500/20">
                <Dumbbell className="w-6 h-6 stroke-[2.5]" />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-xl tracking-wider text-white leading-none">
                  LEVEL UP GYM
                </span>
                <span className="text-xs font-bold tracking-[0.25em] text-amber-500 mt-1 uppercase">
                  Dombivli East
                </span>
              </div>
            </div>

            <p className="text-sm text-zinc-400 italic">
              “Train. Improve. Level Up.”
            </p>

            <p className="text-xs text-zinc-400 leading-relaxed">
              Professional fitness center in Dombivli East offering world-class strength training, modern equipment, and expert personal trainers.
            </p>

            {/* Social Placeholders */}
            <div className="flex items-center gap-3 pt-2">
              <a href="#social" aria-label="Instagram" className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-amber-400 hover:border-zinc-700 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#social" aria-label="Facebook" className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-amber-400 hover:border-zinc-700 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#social" aria-label="YouTube" className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-amber-400 hover:border-zinc-700 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              {['Home', 'About', 'Programs', 'Trainers', 'Facilities', 'Reviews', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-amber-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services / Programs */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Programs</h4>
            <ul className="space-y-2.5 text-sm text-zinc-400">
              <li>Strength Training</li>
              <li>Weight Training</li>
              <li>Cardio Fitness</li>
              <li>Beginner Program</li>
              <li>Personal Training</li>
            </ul>
          </div>

          {/* Contact Summary */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Contact</h4>
            <div className="space-y-3 text-xs text-zinc-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>Dombivli East, Maharashtra</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <a href={`tel:${GYM_INFO.phoneClean}`} className="hover:text-white transition-colors">{GYM_INFO.phone}</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <div>
            © 2026 Level Up Gym. All Rights Reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
