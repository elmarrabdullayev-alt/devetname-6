import React, { useState } from 'react';

export const Invitation6PageTwo: React.FC = () => {
  const [videoError, setVideoError] = useState(false);

  // If page-2-motion.webm is not yet on disk, collapse gracefully without breaking the layout
  if (videoError) {
    return null;
  }

  return (
    <section className="invitation6-page-two relative w-full min-h-[100svh] overflow-hidden bg-[#FAF7F0]">
      <video
        className="absolute inset-0 w-full h-full object-cover z-1"
        src="/templates/invitation6/page-2-motion.webm"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onError={() => setVideoError(true)}
      />
    </section>
  );
};
