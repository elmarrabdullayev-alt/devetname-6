import React from 'react';

export const Invitation6Ending: React.FC = () => {
  return (
    <footer className="invitation6-section relative w-full py-20 px-6 flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Decorative Gold & Botanical Flourish */}
      <div className="flex items-center justify-center gap-3 text-[var(--accent-color)]/80 mb-8">
        <div className="w-10 h-[1px] bg-gradient-to-r from-transparent to-[var(--accent-color)]/60" />
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[var(--accent-color)]"
          aria-hidden="true"
        >
          <path
            d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
            fill="currentColor"
            fillOpacity="0.4"
          />
          <circle cx="12" cy="12" r="2" fill="currentColor" />
        </svg>
        <div className="w-10 h-[1px] bg-gradient-to-l from-transparent to-[var(--accent-color)]/60" />
      </div>

      {/* Main Closing Sentiment */}
      <p className="invitation6-title font-serif-cormorant text-lg sm:text-xl italic leading-relaxed max-w-sm mx-auto text-balance">
        Sizi sevincimizə şahid olmağa və bu gözəl günü bizimlə bölüşməyə dəvət edirik.
      </p>

      {/* Sign-off */}
      <div className="mt-8 flex flex-col items-center">
        <span className="invitation6-subtitle font-sans-montserrat text-xs tracking-[0.24em] uppercase font-light">
          Sevgi ilə,
        </span>
        <h4 className="invitation6-title font-serif-cormorant text-2xl sm:text-3xl tracking-wider mt-1.5 font-normal">
          Nuray &amp; Sənan
        </h4>
      </div>

      {/* Bottom Subtle Copyright / Date */}
      <div className="mt-14 pt-6 border-t border-[var(--border-color)] w-full max-w-[240px]">
        <p className="invitation6-subtitle font-sans-montserrat text-[10px] tracking-widest uppercase">
          Gizli Bağ · 2026
        </p>
      </div>
    </footer>
  );
};
