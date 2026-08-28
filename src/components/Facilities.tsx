import React, { useState } from 'react';
import { FACILITIES_DATA } from '../data';
import { LayoutGrid, Sparkles } from 'lucide-react';

export const Facilities: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categories = ['All', 'Equipment', 'Amenity', 'Floor'];

  const filteredFacilities = activeFilter === 'All'
    ? FACILITIES_DATA
    : FACILITIES_DATA.filter(f => f.category === activeFilter);

  return (
    <section id="facilities" className="py-24 bg-zinc-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-wider uppercase">
            <LayoutGrid className="w-3.5 h-3.5" />
            <span>World-Class Infrastructure</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            Explore Our <span className="text-amber-400">Facilities</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            A fully air-conditioned, clean, and spacious fitness hub in Dombivli East equipped with premium machinery.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all ${
                activeFilter === cat
                  ? 'bg-amber-500 text-zinc-950 shadow-lg shadow-amber-500/20'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredFacilities.map((facility) => (
            <div
              key={facility.id}
              className="group relative rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800 h-72 shadow-xl"
            >
              <img
                src={facility.image}
                alt={facility.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />

              <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-zinc-900/90 border border-zinc-700 text-amber-400 text-[10px] font-bold uppercase tracking-widest">
                {facility.category}
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform">
                <h3 className="text-xl font-black text-white mb-2">{facility.title}</h3>
                <p className="text-xs text-zinc-300 line-clamp-2 group-hover:line-clamp-none transition-all">
                  {facility.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Amenity Pills Bar */}
        <div className="mt-16 p-8 rounded-3xl bg-zinc-900/60 border border-zinc-800">
          <div className="text-center mb-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-amber-400">Level Up Gym Amenities</h3>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              "Air Conditioning",
              "Modern Fitness Equipment",
              "Lockers",
              "Parking",
              "Showers",
              "Wi-Fi",
              "Drinking Water"
            ].map((amenity, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-xs font-semibold text-zinc-200 flex items-center gap-2"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>{amenity}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
