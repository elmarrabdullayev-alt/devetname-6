import React from 'react';
import { MapPin, ExternalLink } from 'lucide-react';

// Easy editable Google Maps URL constant
export const GOOGLE_MAPS_LINK = 'https://maps.google.com/?q=Boyuk+Saray+Baku';

export const Invitation6Location: React.FC = () => {
  return (
    <section className="invitation6-section relative w-full py-16 px-6 flex flex-col items-center text-center">
      {/* Title */}
      <div className="mb-8">
        <h3 className="invitation6-title font-serif-cormorant text-2xl sm:text-3xl tracking-wider uppercase font-medium">
          Məkan
        </h3>
        <p className="invitation6-subtitle font-sans-montserrat text-xs tracking-[0.16em] mt-1.5 uppercase font-light">
          Təntənə ünvanı
        </p>
      </div>

      {/* Elegant Card with Botanical Accents */}
      <div className="invitation6-card relative w-full max-w-sm p-8 rounded-2xl border border-[var(--border-color)] shadow-sm backdrop-blur-xs flex flex-col items-center">
        {/* Map Pin Badge */}
        <div className="w-12 h-12 rounded-full border border-[var(--border-color)] flex items-center justify-center text-[var(--accent-color)] shadow-sm mb-4 bg-[var(--page-bg)]">
          <MapPin className="w-5 h-5 stroke-[1.5]" />
        </div>

        <h4 className="invitation6-title font-serif-cormorant text-2xl sm:text-3xl font-normal tracking-wide">
          Böyük Saray
        </h4>
        <p className="invitation6-subtitle font-sans-montserrat text-xs sm:text-sm tracking-widest uppercase mt-2 font-medium">
          Bakı şəhəri
        </p>
        <p className="invitation6-subtitle font-serif-cormorant italic text-sm mt-3 max-w-xs">
          Ziyafət zalı · Qonaqlarımız üçün rahat avtomobil dayanacağı mövcuddur
        </p>

        {/* Divider */}
        <div className="w-16 h-[1px] bg-[var(--border-color)] my-6" />

        {/* Map Button */}
        <a
          href={GOOGLE_MAPS_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center justify-center gap-2 min-h-[44px] px-6 py-2.5 rounded-full bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] font-sans-montserrat text-xs tracking-[0.16em] uppercase font-semibold shadow-md active:scale-95 transition-all duration-200 cursor-pointer"
        >
          <span>Xəritədə aç</span>
          <ExternalLink className="w-3.5 h-3.5 stroke-[2] text-[var(--btn-primary-text)]/80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>
    </section>
  );
};
