import React from 'react';
import { MapPin, Phone } from 'lucide-react';
import { CONTACT } from '../../data/constants';

/**
 * Slim site-wide announcement banner.
 * Sits above the main header on every page.
 */
const AnnouncementBar = () => {
  return (
    <div
      className="w-full text-white text-center text-xs md:text-sm px-3 py-1.5"
      style={{
        background: 'linear-gradient(90deg, #B91C1C 0%, #7F1D1D 50%, #1E40AF 100%)',
      }}
      data-testid="announcement-bar"
      role="region"
      aria-label="Site announcement"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-x-3 leading-snug whitespace-nowrap overflow-hidden">
        <MapPin size={13} className="hidden sm:inline-block flex-shrink-0" aria-hidden="true" />
        <span className="font-semibold uppercase tracking-wide">Now Online Only —</span>
        <span className="hidden md:inline truncate">
          factory-direct pricing. We still deliver, install &amp; service every unit.
        </span>
        <span className="md:hidden truncate">
          factory-direct pricing.
        </span>
        <a
          href={`tel:${CONTACT.phone.replace(/[^0-9]/g, '')}`}
          className="inline-flex items-center gap-1 font-bold underline hover:no-underline flex-shrink-0"
        >
          <Phone size={12} aria-hidden="true" /> {CONTACT.phone}
        </a>
      </div>
    </div>
  );
};

export default AnnouncementBar;
