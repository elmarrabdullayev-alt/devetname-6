import React from 'react';

export const Invitation6Message: React.FC = () => {
  return (
    <section className="relative w-full py-16 px-6 bg-[#FAF7F0] flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Decorative botanical top flourish */}
      <div className="flex items-center justify-center gap-3 text-[#B99555]/80 mb-5">
        <svg
          width="48"
          height="16"
          viewBox="0 0 48 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M24 8C18 3 8 4 0 8C8 12 18 13 24 8Z"
            fill="currentColor"
            fillOpacity="0.4"
          />
          <path
            d="M24 8C30 3 40 4 48 8C40 12 30 13 24 8Z"
            fill="currentColor"
            fillOpacity="0.4"
          />
          <circle cx="24" cy="8" r="2.5" fill="#B99555" />
        </svg>
      </div>

      {/* Heading */}
      <h3 className="font-serif-cormorant text-2xl sm:text-3xl text-[#3E463A] font-normal tracking-wide mb-4">
        Əziz qonağımız
      </h3>

      {/* Main Message Text */}
      <p className="font-serif-cormorant text-lg sm:text-xl italic text-[#49382F] leading-relaxed max-w-sm mx-auto text-balance">
        Həyatımızın ən xüsusi anını sizinlə bölüşmək və sevincimizə şahid olmağınızı arzulayırıq.
      </p>

      {/* Fine champagne gold hairline divider with botanical leaf node */}
      <div className="mt-8 flex items-center justify-center gap-2 w-full max-w-[200px]">
        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#B99555]/40 to-transparent" />
        <span className="w-1.5 h-1.5 rotate-45 border border-[#B99555]/60 bg-[#FAF7F0]" />
        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#B99555]/40 to-transparent" />
      </div>
    </section>
  );
};
