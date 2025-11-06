import React from 'react';
import HeroSection from './components/HeroSection';
import ProfileSection from './components/ProfileSection';
import EventDetails from './components/EventDetails';
import DynamicGalleries from './components/DynamicGalleries';
import FooterSection from './components/FooterSection';

// Demo data to visualize the template. In real usage, replace with backend-fed data.
const demo = {
  features: {
    remove_branding: false,
  },
  couple: {
    male_name: 'Aidan',
    female_name: 'Sienna',
    main_date: 'Saturday, 21 December 2025',
    hero_background: { type: 'image', src: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1920&auto=format&fit=crop' },
    male_profile: { type: 'image', src: 'https://images.unsplash.com/photo-1516822003754-cca485356ecb?q=80&w=800&auto=format&fit=crop' },
    female_profile: { type: 'image', src: 'https://images.unsplash.com/photo-1511296933631-18b1a062212c?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBaWRhbnxlbnwwfDB8fHwxNzYyNDI0OTU5fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
    male_parents: 'Mr. and Mrs. Bennett',
    female_parents: 'Mr. and Mrs. Hart',
    akad: {
      date: 'Sun, 21 Dec 2025 • 10:00 AM',
      locationName: 'St. Helena Chapel',
      mapsUrl: 'https://maps.google.com',
    },
    resepsi: {
      date: 'Sun, 21 Dec 2025 • 06:00 PM',
      locationName: 'Rosewood Ballroom',
      mapsUrl: 'https://maps.google.com',
    },
    map_media: { type: 'image', src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop' },
    dynamic_sections: [
      {
        label: 'Pre-wedding',
        assignments: [
          { media: { type: 'image', src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop' } },
          { media: { type: 'image', src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop' } },
          { media: { type: 'image', src: 'https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjIzNTg2NzV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' } },
        ],
      },
      {
        label: 'Engagement',
        assignments: [
          { media: { type: 'image', src: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=800&auto=format&fit=crop' } },
          { media: { type: 'image', src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop' } },
        ],
      },
    ],
  },
};

export default function App() {
  const { features, couple } = demo;

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-amber-50/40 to-white text-gray-900">
      {/* Hero */}
      <HeroSection
        media={couple.hero_background}
        maleName={couple.male_name}
        femaleName={couple.female_name}
        mainDate={couple.main_date}
      />

      {/* Profiles */}
      <ProfileSection
        maleProfile={couple.male_profile}
        femaleProfile={couple.female_profile}
        maleName={couple.male_name}
        femaleName={couple.female_name}
        maleParents={couple.male_parents}
        femaleParents={couple.female_parents}
      />

      {/* Events */}
      <EventDetails akad={couple.akad} resepsi={couple.resepsi} mapMedia={couple.map_media} />

      {/* Galleries */}
      <DynamicGalleries sections={couple.dynamic_sections} />

      {/* Footer */}
      <FooterSection showBranding={!features.remove_branding} />
    </div>
  );
}
