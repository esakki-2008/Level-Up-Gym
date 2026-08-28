import React from 'react';
import { REVIEWS_DATA } from '../data';
import { Star, MessageSquareQuote, CheckCircle } from 'lucide-react';

export const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-zinc-900/40 border-t border-b border-zinc-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-wider uppercase">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>Member Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            What Our Members <span className="text-amber-400">Say</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Hear from people who train hard and achieve their fitness goals at Level Up Gym, Dombivli East.
          </p>
          <div className="text-xs text-zinc-500 italic">
            * Note: Realistic placeholder reviews for demonstration. Real member reviews will be connected.
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS_DATA.map((review) => (
            <div
              key={review.id}
              className="p-6 rounded-3xl bg-zinc-950 border border-zinc-800 flex flex-col justify-between space-y-6 shadow-xl hover:border-amber-500/40 transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-medium text-zinc-500">{review.date}</span>
                </div>

                <div className="inline-block px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-[11px] font-bold text-amber-400">
                  {review.theme}
                </div>

                <p className="text-sm text-zinc-300 italic leading-relaxed">
                  “{review.comment}”
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-900 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-white">{review.author}</div>
                  <div className="text-xs text-zinc-500">{review.memberType}</div>
                </div>
                <CheckCircle className="w-4 h-4 text-amber-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
