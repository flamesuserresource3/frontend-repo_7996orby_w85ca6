import React from 'react';

const ProfileCard = ({ profile, name, parents, side = 'left' }) => {
  if (!profile || !name) return null;
  const isVideo = profile?.type === 'video' && profile?.src;
  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-4 h-40 w-40 overflow-hidden rounded-full border border-white/20 shadow-xl">
        {isVideo ? (
          <video className="h-full w-full object-cover" autoPlay loop muted playsInline>
            <source src={profile.src} type="video/mp4" />
          </video>
        ) : (
          <img src={profile?.src} alt={`${name} profile`} className="h-full w-full object-cover" />
        )}
      </div>
      <h3 className="font-serif text-2xl text-gray-900">{name}</h3>
      {parents && (
        <p className="mt-1 text-sm text-gray-600">Child of {parents}</p>
      )}
    </div>
  );
};

const ProfileSection = ({ maleProfile, femaleProfile, maleName, femaleName, maleParents, femaleParents }) => {
  if (!maleProfile && !femaleProfile) return null;

  return (
    <section id="profiles" className="relative w-full bg-white py-16">
      <div className="container mx-auto px-6">
        <h2 className="mb-10 text-center font-serif text-3xl text-gray-900">The Couple</h2>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <ProfileCard profile={maleProfile} name={maleName} parents={maleParents} side="left" />
          <ProfileCard profile={femaleProfile} name={femaleName} parents={femaleParents} side="right" />
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
