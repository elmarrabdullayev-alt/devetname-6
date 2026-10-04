import React, { useRef, useEffect, useState } from 'react';

interface Invitation6PageOneProps {
  groomName?: string;
  brideName?: string;
  eventDate?: string;
  startTime?: string;
  invitationText?: string;
  familyNames?: string;
  isActive?: boolean;
}

export const Invitation6PageOne: React.FC<Invitation6PageOneProps> = ({
  groomName = 'Sənan',
  brideName = 'Nuray',
  eventDate = '18 OKTYABR 2026',
  startTime = '18:00',
  invitationText = 'Həyatımızın ən gözəl günündə sizi də aramızda görməkdən məmnun olarıq.',
  familyNames = 'Əliyev və Məmmədov ailələri',
  isActive = false,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isActive) {
      video.pause();
      video.currentTime = 0;
      video.play().catch((err) => {
        console.warn('Page-1 video play caught:', err);
      });
    } else {
      // Intro bitənə qədər arxa planda oynamasın
      video.pause();
      video.currentTime = 0;
    }
  }, [isActive]);

  const handlePlaying = () => {
    setIsVideoPlaying(true);
  };

  return (
    <section className="invitation6-page-one">
      {/* Video element with new openin1.webm and pag1.webp */}
      <video
        ref={videoRef}
        className="invitation6-page-one__video pointer-events-none"
        src="/templates/invitation6/openin1.webm"
        poster="/templates/invitation6/pag1.webp"
        muted
        loop
        playsInline
        preload="auto"
        onPlaying={handlePlaying}
      />

      {/* Poster image shown until video onPlaying fires */}
      <img
        src="/templates/invitation6/pag1.webp"
        alt=""
        className={`invitation6-page-one__poster pointer-events-none transition-opacity duration-500 ${
          isVideoPlaying ? 'opacity-0' : 'opacity-100'
        }`}
        aria-hidden="true"
      />

      {/* Dark Transparent Overlay */}
      <div className="invitation6-page-one__overlay" />

      {/* 3 distinct content groups: Eyebrow, Centered Names, Lower Content */}
      <div className="invitation6-page-one__content">
        <div className="invitation6-page-one__eyebrow">
          TOY DƏVƏTNAMƏSİ
        </div>

        <h1 className="invitation6-page-one__names">
          <span>{brideName}</span>
          <span className="invitation6-page-one__ampersand">&amp;</span>
          <span>{groomName}</span>
        </h1>

        <div className="invitation6-page-one__lower-content">
          <p className="invitation6-page-one__details">
            {eventDate} · SAAT {startTime}
          </p>

          <p className="invitation6-page-one__message">
            {invitationText}
          </p>

          {familyNames && (
            <p className="invitation6-page-one__families">
              {familyNames}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};
