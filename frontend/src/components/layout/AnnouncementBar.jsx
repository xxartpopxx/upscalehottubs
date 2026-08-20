import React from 'react';
import { Phone } from 'lucide-react';
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
        background: 'linear-gradient(90deg, #1E40AF 0%, #2E86C1 45%, #B91C1C 100%)',
      }}
      data-testid="announcement-bar"
      role="region"
      aria-label="Site announcement"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-x-3 leading-snug whitespace-nowrap overflow-hidden">
        <span className="font-semibold uppercase tracking-wide">
          Upstate Hot Tubs — Now Online Only.
        </span>
        <a
          href={`tel:${CONTACT.phone.replace(/[^0-9]/g, '')}`}
          className="hidden sm:inline-flex items-center gap-1 font-bold underline hover:no-underline flex-shrink-0"
        >
          <Phone size={12} aria-hidden="true" /> {CONTACT.phone}
        </a>
      </div>
    </div>
  );
};

export default AnnouncementBar;
