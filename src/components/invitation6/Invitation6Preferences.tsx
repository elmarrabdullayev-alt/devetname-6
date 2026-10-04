import React from 'react';
import { Sparkles } from 'lucide-react';

export const Invitation6Preferences: React.FC = () => {
  return (
    <section className="invitation6-section relative w-full py-14 px-6 flex flex-col items-center justify-center text-center">
      <div className="w-10 h-10 rounded-full border border-[var(--border-color)] flex items-center justify-center mb-4 text-[var(--accent-color)] bg-[var(--card-bg)] shadow-sm">
        <Sparkles className="w-5 h-5 stroke-[1.5]" />
      </div>

      <h3 className="invitation6-title font-serif-cormorant text-2xl font-normal tracking-wide mb-2">
        Xüsusi İstəklər
      </h3>

      <p className="font-sans-montserrat text-xs tracking-[0.2em] uppercase font-semibold text-[var(--accent-color)] mb-3">
        Dress Code
      </p>

      <p className="invitation6-subtitle font-serif-cormorant text-base italic max-w-sm mx-auto leading-relaxed">
        Geyim tərzi: Zərif ziyafət geyimi (Black Tie / Formal).
      </p>

      <div className="mt-6 flex items-center justify-center gap-2 w-full max-w-[160px]">
        <div className="h-[1px] flex-1 bg-[var(--border-color)]" />
        <span className="w-1.5 h-1.5 rotate-45 border border-[var(--accent-color)]/50 bg-[var(--page-bg)]" />
        <div className="h-[1px] flex-1 bg-[var(--border-color)]" />
      </div>
    </section>
  );
};
