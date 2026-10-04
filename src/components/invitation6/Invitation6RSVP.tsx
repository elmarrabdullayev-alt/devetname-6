import React, { useState } from 'react';
import { CheckCircle2, HeartHandshake } from 'lucide-react';

/**
 * RSVP Komponenti
 * Frontend form demo (məlumatlar yerli state-də saxlanılır).
 */
export const Invitation6RSVP: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [attending, setAttending] = useState<'yes' | 'no'>('yes');
  const [guestCount, setGuestCount] = useState<number>(1);
  const [note, setNote] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullName.trim()) {
      setErrorMessage('Zəhmət olmasa, ad və soyadınızı daxil edin.');
      return;
    }

    setErrorMessage('');
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFullName('');
    setAttending('yes');
    setGuestCount(1);
    setNote('');
  };

  return (
    <section className="invitation6-section relative w-full py-16 px-6 flex flex-col items-center text-center">
      {/* Title */}
      <div className="mb-8">
        <h3 className="invitation6-title font-serif-cormorant text-2xl sm:text-3xl tracking-wider uppercase font-medium">
          İştirakınızı təsdiqləyin
        </h3>
        <p className="invitation6-subtitle font-sans-montserrat text-xs tracking-[0.16em] mt-1.5 uppercase font-light">
          Zəhmət olmasa, iştirakınız barədə bizə məlumat verin.
        </p>
      </div>

      <div className="invitation6-card w-full max-w-sm p-6 sm:p-8 rounded-2xl border border-[var(--border-color)] shadow-sm backdrop-blur-xs">
        {isSubmitted ? (
          /* Confirmation Success State */
          <div className="py-6 flex flex-col items-center animate-[fadeIn_0.4s_ease-out_both]">
            <div className="w-14 h-14 rounded-full border border-[var(--border-color)] flex items-center justify-center text-[var(--accent-color)] mb-4 shadow-sm bg-[var(--page-bg)]">
              <CheckCircle2 className="w-8 h-8 stroke-[1.5]" />
            </div>
            <h4 className="invitation6-title font-serif-cormorant text-2xl font-normal">
              Təşəkkür edirik!
            </h4>
            <p className="invitation6-subtitle font-serif-cormorant italic text-base sm:text-lg mt-2">
              Cavabınız qeydə alındı.
            </p>
            <p className="font-sans-montserrat text-[11px] text-[var(--accent-color)] mt-1 tracking-wider uppercase font-medium">
              {attending === 'yes'
                ? `Sizi görməkdən məmnun olarıq (${guestCount} nəfər)`
                : 'Qeydiniz qəbul edildi'}
            </p>

            <button
              type="button"
              onClick={handleReset}
              className="mt-6 text-xs font-sans-montserrat text-[var(--accent-color)] hover:opacity-80 underline underline-offset-4 tracking-wider uppercase font-medium cursor-pointer"
            >
              Məlumatı yeniləyin
            </button>
          </div>
        ) : (
          /* RSVP Form */
          <form onSubmit={handleSubmit} className="flex flex-col text-left space-y-5">
            {/* Ad və Soyad */}
            <div>
              <label
                htmlFor="fullName"
                className="block font-sans-montserrat text-xs uppercase tracking-wider text-[var(--text-primary)] font-medium mb-1.5"
              >
                Ad və Soyad <span className="text-[var(--accent-color)]">*</span>
              </label>
              <input
                id="fullName"
                type="text"
                value={fullName}
                onChange={(e) => {
                  setFullName(e.target.value);
                  if (errorMessage) setErrorMessage('');
                }}
                placeholder="Məsələn: Rəşad Əliyev"
                className="invitation6-input w-full px-4 py-3 rounded-xl border border-[var(--border-color)] focus:border-[var(--accent-color)] focus:outline-none focus:ring-1 focus:ring-[var(--accent-color)] text-sm font-sans-montserrat transition-colors"
              />
              {errorMessage && (
                <p className="text-xs text-amber-500 mt-1.5 font-sans-montserrat">
                  {errorMessage}
                </p>
              )}
            </div>

            {/* İştirak Statusu */}
            <div>
              <span className="block font-sans-montserrat text-xs uppercase tracking-wider text-[var(--text-primary)] font-medium mb-2">
                İştirak statusu
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setAttending('yes')}
                  className={`flex items-center justify-center gap-2 py-3 px-3 rounded-xl border text-xs font-sans-montserrat tracking-wider uppercase transition-all cursor-pointer ${
                    attending === 'yes'
                      ? 'bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] border-[var(--btn-primary-bg)] shadow-sm font-semibold'
                      : 'invitation6-input text-[var(--text-secondary)] border-[var(--border-color)] hover:border-[var(--accent-color)]'
                  }`}
                >
                  <HeartHandshake className="w-4 h-4 stroke-[1.5]" />
                  <span>İştirak edəcəyəm</span>
                </button>

                <button
                  type="button"
                  onClick={() => setAttending('no')}
                  className={`flex items-center justify-center gap-2 py-3 px-3 rounded-xl border text-xs font-sans-montserrat tracking-wider uppercase transition-all cursor-pointer ${
                    attending === 'no'
                      ? 'bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] border-[var(--btn-primary-bg)] shadow-sm font-semibold'
                      : 'invitation6-input text-[var(--text-secondary)] border-[var(--border-color)] hover:border-[var(--accent-color)]'
                  }`}
                >
                  <span>İştirak edə bilməyəcəyəm</span>
                </button>
              </div>
            </div>

            {/* Qonaq Sayı (yalnız iştirak edəcəksə göstərilir) */}
            {attending === 'yes' && (
              <div className="animate-[fadeIn_0.3s_ease-out_both]">
                <label
                  htmlFor="guestCount"
                  className="block font-sans-montserrat text-xs uppercase tracking-wider text-[var(--text-primary)] font-medium mb-1.5"
                >
                  Qonaq sayı
                </label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setGuestCount(num)}
                      className={`flex-1 py-2.5 rounded-lg border text-xs font-sans-montserrat font-semibold transition-all cursor-pointer ${
                        guestCount === num
                          ? 'bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] border-[var(--btn-primary-bg)] shadow-xs'
                          : 'invitation6-input text-[var(--text-secondary)] border-[var(--border-color)] hover:border-[var(--accent-color)]'
                      }`}
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Qeyd / Arzular */}
            <div>
              <label
                htmlFor="note"
                className="block font-sans-montserrat text-xs uppercase tracking-wider text-[var(--text-primary)] font-medium mb-1.5"
              >
                Qeyd və xoş arzularınız
              </label>
              <textarea
                id="note"
                rows={3}
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Təbriklərinizi və ya xüsusi qeydinizi yaza bilərsiniz..."
                className="invitation6-input w-full px-4 py-3 rounded-xl border border-[var(--border-color)] focus:border-[var(--accent-color)] focus:outline-none focus:ring-1 focus:ring-[var(--accent-color)] text-sm font-sans-montserrat resize-none transition-colors"
              />
            </div>

            {/* Göndər Düyməsi */}
            <button
              type="submit"
              className="w-full min-h-[46px] mt-2 py-3 px-6 rounded-full bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] font-sans-montserrat text-xs tracking-[0.18em] uppercase font-semibold shadow-md active:scale-[0.98] transition-all duration-200 cursor-pointer hover:opacity-95"
            >
              Cavabı göndər
            </button>
          </form>
        )}
      </div>
    </section>
  );
};
