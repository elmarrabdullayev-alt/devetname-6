import React, { useState, useRef, useEffect, useCallback } from 'react';
import { INVITATION6_MEDIA } from './constants.ts';

interface Invitation6IntroProps {
  onComplete?: () => void;
  onIntroComplete?: () => void;
  onOpenStarted?: () => void;
  isFadingOut?: boolean;
}

export const Invitation6Intro: React.FC<Invitation6IntroProps> = ({
  onComplete,
  onIntroComplete,
  onOpenStarted,
  isFadingOut = false,
}) => {
  const [isOpening, setIsOpening] = useState(false);
  const [isKnocking, setIsKnocking] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [isOpeningVideoReady, setIsOpeningVideoReady] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [buttonFading, setButtonFading] = useState(false);
  const [videoError, setVideoError] = useState(false);

  const introVideoRef = useRef<HTMLVideoElement>(null);
  const knockTimeoutRef = useRef<number | null>(null);

  const triggerComplete = useCallback(() => {
    if (onComplete) onComplete();
    if (onIntroComplete) onIntroComplete();
  }, [onComplete, onIntroComplete]);

  // Clear timeout on unmount
  useEffect(() => {
    return () => {
      if (knockTimeoutRef.current) {
        window.clearTimeout(knockTimeoutRef.current);
      }
    };
  }, []);

  const startIntroVideo = useCallback(async () => {
    setHasStarted(true);
    if (introVideoRef.current) {
      try {
        introVideoRef.current.currentTime = 0;
        await introVideoRef.current.play();
        setIsVideoPlaying(true);
      } catch (err) {
        console.warn('Intro video play error or autoplay policy fallback:', err);
        setVideoError(true);
        setTimeout(triggerComplete, 350);
      }
    }
  }, [triggerComplete]);

  const handleDoorOpen = () => {
    if (isOpening || hasStarted || buttonFading) return;
    setIsOpening(true);
    setButtonFading(true);
    if (onOpenStarted) {
      onOpenStarted();
    }

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      startIntroVideo();
    } else {
      setIsKnocking(true);
      knockTimeoutRef.current = window.setTimeout(() => {
        setIsKnocking(false);
        startIntroVideo();
      }, 600);
    }
  };

  const handleIntroEnded = () => {
    triggerComplete();
  };

  const handleIntroCanPlay = () => {
    setIsOpeningVideoReady(true);
  };

  const handleIntroError = () => {
    console.warn('Opening video error, executing graceful fallback.');
    setVideoError(true);
    if (hasStarted) {
      setTimeout(triggerComplete, 350);
    }
  };

  return (
    <div
      className={`invitation6-intro-layer relative w-full h-[100svh] min-h-[100dvh] overflow-hidden bg-[#FAF7F0] select-none ${
        isFadingOut ? 'is-fading-out' : 'opacity-100'
      }`}
      style={{ minHeight: '100dvh' }}
    >
      {/* Layer 0: Poster Image (With gentle knock animation applied directly to the door element) */}
      <img
        src={INVITATION6_MEDIA.introCover}
        alt="Çiçəklərlə bəzədilmiş bağlı toy qapısı"
        className={`invitation6-intro-poster invitation6-layer-poster pointer-events-none transition-opacity duration-300 ${
          isKnocking ? 'invitation6-door-knocking' : ''
        } ${
          hasStarted && isVideoPlaying && !videoError ? 'opacity-0' : 'opacity-100'
        }`}
        fetchPriority="high"
        decoding="async"
      />

      {/* Layer 1: Opening Video */}
      <video
        ref={introVideoRef}
        className={`invitation6-intro-video invitation6-layer-video pointer-events-none transition-opacity duration-300 ${
          hasStarted && isVideoPlaying && !videoError ? 'opacity-100' : 'opacity-0'
        }`}
        poster={INVITATION6_MEDIA.introCover}
        playsInline
        muted
        preload="auto"
        onCanPlay={handleIntroCanPlay}
        onEnded={handleIntroEnded}
        onError={handleIntroError}
      >
        <source
          src={INVITATION6_MEDIA.introOpening}
          type="video/webm"
        />
      </video>

      {/* Invisible Interactive Hit-Area for Door (central 55–65% of the door) */}
      {!hasStarted && (
        <button
          type="button"
          className="invitation6-door-hit-area"
          aria-label="Dəvətnaməni açmaq üçün qapıya toxunun"
          onClick={handleDoorOpen}
          disabled={isOpening || buttonFading}
        >
          <span className="sr-only">Dəvətnaməni aç</span>
        </button>
      )}

      {/* Layer 2: Gentle gradient scrim at bottom to ensure button pop and legibility */}
      {!hasStarted && (
        <div className="invitation6-layer-scrim absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#3E463A]/25 via-[#3E463A]/08 to-transparent pointer-events-none" />
      )}

      {/* Layer 3: Texts and "Dəvətnaməni aç" Button */}
      {!hasStarted && (
        <div
          className={`invitation6-layer-content absolute inset-x-0 bottom-10 z-20 flex flex-col items-center justify-center px-6 transition-all duration-250 ${
            buttonFading ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'
          }`}
          style={{ paddingBottom: 'max(1.5rem, env(safe-area-inset-bottom, 1.5rem))' }}
        >
          {/* Subtle invitation sub-caption */}
          <p className="font-serif-cormorant text-xs md:text-sm tracking-[0.25em] uppercase text-[#4b3a30] drop-shadow-sm mb-3 text-center font-medium">
            Nuray &amp; Sənan
          </p>

          {/* Lightened, transparent open button */}
          <button
            type="button"
            onClick={handleDoorOpen}
            disabled={isOpening || buttonFading}
            aria-label="Dəvətnaməni aç"
            className="invitation6-open-button group relative inline-flex items-center justify-center min-h-[48px] px-8 py-3.5 rounded-full font-sans-montserrat text-sm tracking-[0.18em] font-medium uppercase gold-pulse-button cursor-pointer disabled:cursor-not-allowed"
          >
            <span className="relative z-10 flex items-center gap-2">
              <span>Dəvətnaməni aç</span>
            </span>
          </button>

          {/* Delicate hint beneath the button */}
          <p className="mt-2 text-[11px] font-sans-montserrat text-[#4b3a30]/70 tracking-wider font-light select-none">
            və ya qapıya toxunun
          </p>
        </div>
      )}
    </div>
  );
};
