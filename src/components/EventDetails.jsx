import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const DetailCard = ({ title, date, locationName, mapsUrl }) => {
  if (!date) return null;
  return (
    <div className="rounded-2xl border border-gray-200 bg-white/80 p-6 shadow-sm backdrop-blur">
      <div className="mb-3 flex items-center gap-2 text-gray-800">
        <Calendar className="h-5 w-5" />
        <h3 className="font-serif text-xl">{title}</h3>
      </div>
      <p className="text-gray-700">{date}</p>
      {locationName && <p className="mt-2 text-sm text-gray-600">{locationName}</p>}
      {mapsUrl && (
        <a
          href={mapsUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-gray-900 px-4 py-2 text-sm text-white hover:bg-black"
        >
          <MapPin className="h-4 w-4" /> View on Maps
        </a>
      )}
    </div>
  );
};

const EventDetails = ({ akad, resepsi, mapMedia }) => {
  const hasAkad = akad?.date;
  const hasResepsi = resepsi?.date;
  if (!hasAkad && !hasResepsi && !mapMedia) return null;

  const isMapVideo = mapMedia?.type === 'video' && mapMedia?.src;

  return (
    <section id="events" className="w-full bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        <h2 className="mb-10 text-center font-serif text-3xl text-gray-900">Wedding Events</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <DetailCard title="Akad / Holy Matrimony" date={akad?.date} locationName={akad?.locationName} mapsUrl={akad?.mapsUrl} />
          {hasResepsi && (
            <DetailCard title="Reception" date={resepsi?.date} locationName={resepsi?.locationName} mapsUrl={resepsi?.mapsUrl} />
          )}
          {mapMedia && (
            <div className="rounded-2xl border border-gray-200 bg-white/80 p-2 shadow-sm backdrop-blur">
              <div className="aspect-video w-full overflow-hidden rounded-xl">
                {isMapVideo ? (
                  <video className="h-full w-full object-cover" autoPlay loop muted playsInline>
                    <source src={mapMedia.src} type="video/mp4" />
                  </video>
                ) : (
                  <img src={mapMedia?.src} alt="Location map" className="h-full w-full object-cover" />
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
