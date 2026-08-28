import React from 'react';
import { Dumbbell, Shield, Users, Flame } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: Dumbbell,
      title: "Strength Training",
      description: "Build strength and improve your overall fitness with dedicated training equipment.",
      badge: "Power & Muscle"
    },
    {
      icon: Shield,
      title: "Modern Equipment",
      description: "Train with a wide range of strength and cardio equipment maintained to the highest standards.",
      badge: "Top Tier"
    },
    {
      icon: Users,
      title: "Experienced Trainers",
      description: "Get guidance and support to help you work toward your fitness goals safely and efficiently.",
      badge: "Expert Coaches"
    },
    {
      icon: Flame,
      title: "Motivating Environment",
      description: "Stay consistent in an energetic and motivating workout environment designed for success.",
      badge: "High Energy"
    }
  ];

  return (
    <section className="py-24 bg-zinc-900/50 border-t border-b border-zinc-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-wider uppercase">
            <span>Why Choose Level Up</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            Built For Results In <span className="text-amber-400">Dombivli East</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            We provide everything you need to crush your fitness targets without any compromises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="relative group p-8 rounded-3xl bg-zinc-950 border border-zinc-800 hover:border-amber-500/50 transition-all duration-300 shadow-xl hover:-translate-y-1"
              >
                <div className="absolute top-6 right-6 text-[10px] font-extrabold px-2.5 py-1 rounded-full bg-zinc-900 text-amber-400 border border-zinc-800">
                  {feature.badge}
                </div>

                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-500/20 to-orange-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3 tracking-wide">{feature.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
