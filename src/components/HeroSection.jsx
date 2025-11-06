import React from 'react';

// Minimalist Luxury theme
const HeroSection = ({ media, maleName, femaleName, mainDate }) => {
  if (!media || !maleName || !femaleName || !mainDate) return null;
  const isVideo = media?.type === 'video' && media?.src;

  return (
    <section id="hero" className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        {isVideo ? (
          <video className="h-full w-full object-cover" autoPlay loop muted playsInline>
            <source src={media.src} type="video/mp4" />
          </video>
        ) : (
          <img src={media?.src} alt="Hero background" className="h-full w-full object-cover" />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
      </div>

      <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.25em] text-amber-200/90">We Invite You To Our Wedding</p>
          <h1 className="font-serif text-4xl font-semibold text-white md:text-6xl">
            {maleName} & {femaleName}
          </h1>
          <p className="mt-6 inline-block rounded-full border border-white/20 bg-white/10 px-5 py-2 text-amber-100 backdrop-blur">
            {mainDate}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
