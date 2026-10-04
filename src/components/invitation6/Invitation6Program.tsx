import React from 'react';
import { Users, Heart, Music, Cake } from 'lucide-react';

interface ProgramItem {
  time: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const PROGRAM_ITEMS: ProgramItem[] = [
  {
    time: '17:30',
    title: 'Qonaqların qarşılanması',
    description: 'Xoş gəlmisiniz kokteyli və canlı musiqi sədaları',
    icon: Users,
  },
  {
    time: '18:00',
    title: 'Nikah mərasimi',
    description: 'Həyatımızın ən müqəddəs və unudulmaz anı',
    icon: Heart,
  },
  {
    time: '19:00',
    title: 'Ziyafət və rəqs',
    description: 'Şənlik, rəqs və unudulmaz təbriklər',
    icon: Music,
  },
  {
    time: '21:30',
    title: 'Toy tortunun kəsilməsi',
    description: 'Şirin arzular və xatirə fotoları',
    icon: Cake,
  },
];

export const Invitation6Program: React.FC = () => {
  return (
    <section className="invitation6-section relative w-full py-16 px-6 flex flex-col items-center">
      {/* Title */}
      <div className="text-center mb-12">
        <h3 className="invitation6-title font-serif-cormorant text-2xl sm:text-3xl tracking-wider uppercase font-medium">
          Tədbir Proqramı
        </h3>
        <p className="invitation6-subtitle font-sans-montserrat text-xs tracking-[0.16em] mt-1.5 uppercase font-light">
          Günün axışı
        </p>
      </div>

      {/* Vertical Timeline */}
      <div className="relative w-full max-w-sm">
        {/* Central connecting stem */}
        <div className="absolute left-[23px] top-6 bottom-6 w-[1px] bg-gradient-to-b from-[var(--accent-color)]/10 via-[var(--accent-color)]/40 to-[var(--accent-color)]/10" />

        <div className="space-y-8">
          {PROGRAM_ITEMS.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="relative flex items-start gap-4">
                {/* Node icon circle */}
                <div className="invitation6-card relative z-10 flex-shrink-0 w-12 h-12 rounded-full border border-[var(--border-color)] shadow-sm flex items-center justify-center text-[var(--accent-color)]">
                  <IconComponent className="w-5 h-5 stroke-[1.5]" />
                </div>

                {/* Content */}
                <div className="pt-1.5 flex-1 text-left">
                  <div className="flex items-center gap-2">
                    <span className="font-sans-montserrat text-xs font-semibold tracking-wider text-[var(--accent-color)]">
                      {item.time}
                    </span>
                    <span className="w-1.5 h-[1px] bg-[var(--accent-color)]/40" />
                  </div>
                  <h4 className="invitation6-title font-serif-cormorant text-lg sm:text-xl font-normal mt-0.5 leading-snug">
                    {item.title}
                  </h4>
                  <p className="invitation6-subtitle font-sans-montserrat text-xs mt-1 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
