import React, { useState, useEffect } from 'react';

const WEDDING_DATE = new Date('2026-10-18T18:00:00+04:00').getTime();

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
}

const calculateTimeLeft = (): TimeLeft => {
  const now = new Date().getTime();
  const diff = WEDDING_DATE - now;

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true };
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / 1000 / 60) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { days, hours, minutes, seconds, isPast: false };
};

export const Invitation6Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: 'Gün', value: timeLeft.days },
    { label: 'Saat', value: String(timeLeft.hours).padStart(2, '0') },
    { label: 'Dəqiqə', value: String(timeLeft.minutes).padStart(2, '0') },
    { label: 'Saniyə', value: String(timeLeft.seconds).padStart(2, '0') },
  ];

  return (
    <section className="invitation6-section relative w-full py-12 px-6 flex flex-col items-center justify-center text-center">
      {/* Title */}
      <div className="mb-6">
        <h3 className="invitation6-title font-serif-cormorant text-xl sm:text-2xl tracking-wider uppercase font-medium">
          Xüsusi günümüzə qalan vaxt
        </h3>
        <p className="invitation6-subtitle font-sans-montserrat text-xs tracking-[0.16em] mt-1 uppercase font-light">
          18 Oktyabr 2026
        </p>
      </div>

      {/* Countdown Display */}
      {timeLeft.isPast ? (
        <div className="invitation6-card py-6 px-8 rounded-2xl border border-[var(--border-color)]">
          <p className="font-serif-cormorant text-xl sm:text-2xl italic text-[var(--accent-color)]">
            Bu gözəl gün başladı
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-2 sm:gap-3 w-full max-w-sm">
          {timeUnits.map((unit) => (
            <div
              key={unit.label}
              className="invitation6-card flex flex-col items-center justify-center py-3.5 px-1.5 rounded-xl border border-[var(--border-color)] shadow-sm backdrop-blur-xs"
            >
              <span className="font-serif-cormorant text-2xl sm:text-3xl font-light text-[var(--text-primary)] tabular-nums leading-none">
                {unit.value}
              </span>
              <span className="font-sans-montserrat text-[10px] sm:text-[11px] text-[var(--text-secondary)] tracking-wider uppercase mt-1.5 font-medium">
                {unit.label}
              </span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
