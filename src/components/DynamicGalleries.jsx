import React from 'react';

const MediaItem = ({ media }) => {
  if (!media) return null;
  const isVideo = media?.type === 'video' && media?.src;
  return (
    <div className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white/60">
      <div className="aspect-square w-full">
        {isVideo ? (
          <video className="h-full w-full object-cover" autoPlay loop muted playsInline>
            <source src={media.src} type="video/mp4" />
          </video>
        ) : (
          <img src={media?.src} alt="Gallery item" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
        )}
      </div>
    </div>
  );
};

const DynamicGalleries = ({ sections }) => {
  if (!sections || sections.length === 0) return null;
  return (
    <section id="galleries" className="w-full bg-white py-16">
      <div className="container mx-auto px-6">
        <h2 className="mb-10 text-center font-serif text-3xl text-gray-900">Memories</h2>
        <div className="space-y-12">
          {sections.map((section) => (
            <div key={section.id || section.label}>
              {section?.label && (
                <h3 className="mb-6 font-serif text-2xl text-gray-800">{section.label}</h3>
              )}
              {section?.assignments?.length > 0 && (
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                  {section.assignments.map((assignment, idx) => (
                    <MediaItem key={assignment.id || idx} media={assignment.media} />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DynamicGalleries;
