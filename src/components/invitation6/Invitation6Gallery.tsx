import React from 'react';

/**
 * Fotoqalereya
 * 
 * Şərtlərə əsasən:
 * Real qalereya şəkilləri hələ yüklənmədiyi üçün saxta şəkillər göstərilmir.
 * Kodda galleryImages boş massiv kimi saxlanılır. Massiv boş olduqda bölmə tam gizlədilir.
 * Gələcəkdə şəkillər əlavə edildikdə avtomatik aktiv olacaq.
 */
export const galleryImages: string[] = [];

export const Invitation6Gallery: React.FC = () => {
  // If gallery has no images, hide entire section as specified
  if (!galleryImages || galleryImages.length === 0) {
    return null;
  }

  return (
    <section className="invitation6-section relative w-full py-16 px-6 flex flex-col items-center text-center">
      <div className="mb-8">
        <h3 className="invitation6-title font-serif-cormorant text-2xl sm:text-3xl tracking-wider uppercase font-medium">
          Xatirə Fotoları
        </h3>
        <p className="invitation6-subtitle font-sans-montserrat text-xs tracking-[0.16em] mt-1.5 uppercase font-light">
          Bizim Hekayəmiz
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 w-full max-w-sm">
        {galleryImages.map((src, idx) => (
          <div
            key={idx}
            className="invitation6-card aspect-[4/5] rounded-xl overflow-hidden shadow-sm border border-[var(--border-color)]"
          >
            <img
              src={src}
              alt={`Qalereya şəkli ${idx + 1}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
