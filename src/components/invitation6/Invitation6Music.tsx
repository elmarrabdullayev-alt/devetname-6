import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface Invitation6MusicProps {
  playRequested: boolean;
}

export const Invitation6Music: React.FC<Invitation6MusicProps> = ({ playRequested }) => {
  const [isAudioAvailable, setIsAudioAvailable] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Check if music.mp3 is available without breaking UI
    const audio = new Audio('/music.mp3');
    audio.preload = 'metadata';

    const handleCanPlay = () => {
      setIsAudioAvailable(true);
    };

    const handleError = () => {
      // Audio does not exist or cannot be decoded -> completely hide
      setIsAudioAvailable(false);
      setIsPlaying(false);
    };

    audio.addEventListener('canplaythrough', handleCanPlay);
    audio.addEventListener('error', handleError);

    audioRef.current = audio;

    return () => {
      audio.removeEventListener('canplaythrough', handleCanPlay);
      audio.removeEventListener('error', handleError);
      audio.pause();
    };
  }, []);

  useEffect(() => {
    if (playRequested && isAudioAvailable && audioRef.current) {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  }, [playRequested, isAudioAvailable]);

  const togglePlayback = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  };

  // If no audio file is detected, render nothing as strictly required
  if (!isAudioAvailable) {
    return null;
  }

  return (
    <div
      className="fixed bottom-6 right-6 z-40"
      style={{
        bottom: 'max(1.5rem, env(safe-area-inset-bottom, 1.5rem))',
        right: 'max(1.5rem, env(safe-area-inset-right, 1.5rem))',
      }}
    >
      <button
        type="button"
        onClick={togglePlayback}
        aria-label={isPlaying ? 'Musiqini dayandır' : 'Musiqini səsləndir'}
        className="invitation6-card w-11 h-11 rounded-full border border-[var(--border-color)] text-[var(--text-primary)] shadow-md flex items-center justify-center transition-transform active:scale-95 cursor-pointer backdrop-blur-xs"
      >
        {isPlaying ? (
          <Volume2 className="w-5 h-5 stroke-[1.5] text-[var(--accent-color)] animate-pulse" />
        ) : (
          <VolumeX className="w-5 h-5 stroke-[1.5] text-[var(--text-secondary)]" />
        )}
      </button>
    </div>
  );
};

export const Invitation6MusicButton = Invitation6Music;
