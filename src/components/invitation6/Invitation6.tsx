import React, { useState } from 'react';
import { Invitation6Intro } from './Invitation6Intro.tsx';
import { Invitation6PageOne } from './Invitation6PageOne.tsx';
import { Invitation6PageTwo } from './Invitation6PageTwo.tsx';
import { Invitation6Countdown } from './Invitation6Countdown.tsx';
import { Invitation6Program } from './Invitation6Program.tsx';
import { Invitation6Location } from './Invitation6Location.tsx';
import { Invitation6Preferences } from './Invitation6Preferences.tsx';
import { Invitation6Gallery } from './Invitation6Gallery.tsx';
import { Invitation6RSVP } from './Invitation6RSVP.tsx';
import { Invitation6Ending } from './Invitation6Ending.tsx';
import { Invitation6MusicButton } from './Invitation6Music.tsx';
import './invitation6.css';

export const Invitation6: React.FC = () => {
  const [introCompleted, setIntroCompleted] = useState(false);
  const [musicRequested, setMusicRequested] = useState(false);

  // Wedding details passed to Invitation6PageOne
  const groomName = 'Sənan';
  const brideName = 'Nuray';
  const eventDate = '18 OKTYABR 2026';
  const startTime = '18:00';
  const invitationText = 'Həyatımızın ən gözəl günündə sizi də aramızda görməkdən məmnun olarıq.';
  const familyNames = 'Əliyev və Məmmədov ailələri';

  const handleOpenStarted = () => {
    setMusicRequested(true);
  };

  const handleIntroComplete = () => {
    setIntroCompleted(true);
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  return (
    <div className="min-h-screen w-full bg-[#1A1E18] flex justify-center items-start overflow-x-hidden selection:bg-[#E7CEC5] selection:text-[#3E463A]">
      {/* Ambient background decoration on desktop widescreen */}
      <div className="fixed inset-0 pointer-events-none opacity-20 hidden md:block bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#B99555]/30 via-[#3E463A]/20 to-transparent" />

      {/* Main Container - Mobile First (max 500px on desktop) */}
      <main className="invitation6 w-full max-w-[500px] min-h-[100dvh] relative shadow-[0_0_60px_rgba(0,0,0,0.6)] overflow-x-hidden flex flex-col bg-[var(--page-bg)] text-[var(--text-primary)]">
        {/* Intro Fixed Overlay (Unmounts on complete; never touches PageOne below) */}
        {!introCompleted && (
          <div
            className="fixed inset-0 z-50 pointer-events-auto flex justify-center items-center"
            style={{
              maxWidth: '500px',
              margin: '0 auto',
            }}
          >
            <Invitation6Intro
              onComplete={handleIntroComplete}
              onOpenStarted={handleOpenStarted}
            />
          </div>
        )}

        {/* 1. Page One (Always mounted at top: 0, starts openin1.webm when intro completes) */}
        <Invitation6PageOne
          groomName={groomName}
          brideName={brideName}
          eventDate={eventDate}
          startTime={startTime}
          invitationText={invitationText}
          familyNames={familyNames}
          isActive={introCompleted}
        />

        {/* 2. Page Two */}
        <Invitation6PageTwo />

        {/* Functional Sections with Theme Variables */}
        <div className="w-full relative z-10 flex flex-col divide-y divide-[var(--border-color)] bg-[var(--page-bg)]">
          {/* 3. Countdown */}
          <Invitation6Countdown />

          {/* 4. Program */}
          <Invitation6Program />

          {/* 5. Location */}
          <Invitation6Location />

          {/* 6. Preferences */}
          <Invitation6Preferences />

          {/* 7. Gallery */}
          <Invitation6Gallery />

          {/* 8. RSVP */}
          <Invitation6RSVP />

          {/* 9. Ending */}
          <Invitation6Ending />
        </div>

        {/* 10. Floating Music Button */}
        <Invitation6MusicButton playRequested={musicRequested} />
      </main>
    </div>
  );
};

export default Invitation6;
