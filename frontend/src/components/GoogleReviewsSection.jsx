import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { GOOGLE_REVIEWS, GOOGLE_RATING, SOCIAL_LINKS } from '../data/constants';

const StarRow = ({ count = 5 }) => (
  <div className="flex items-center gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        size={18}
        className={i < count ? 'fill-yellow-400 text-yellow-400' : 'text-slate-300'}
      />
    ))}
  </div>
);

const ReviewCard = ({ review }) => (
  <div className="bg-white p-6 shadow-md border border-slate-100 h-full flex flex-col">
    <div className="flex items-center justify-between mb-3">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#EA6A1E] to-[#0A1628] text-white font-bold flex items-center justify-center">
          {review.name.charAt(0)}
        </div>
        <div>
          <p className="font-bold text-[#0A1628]">{review.name}</p>
          <p className="text-xs text-slate-500">{review.date}</p>
        </div>
      </div>
      {/* Google "G" logo */}
      <svg className="w-6 h-6" viewBox="0 0 48 48">
        <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
        <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
        <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
        <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
      </svg>
    </div>
    <StarRow count={review.rating} />
    <p className="text-slate-700 mt-3 leading-relaxed flex-1">{`"${review.text}"`}</p>
  </div>
);

const GoogleReviewsSection = ({ compact = false, title = "What Our Customers Are Saying" }) => {
  const [startIndex, setStartIndex] = useState(0);
  const reviews = GOOGLE_REVIEWS;
  // Show 3 at a time on desktop, 1 on mobile (handled via grid)
  const visible = compact ? reviews.slice(0, 3) : reviews;

  const handlePrev = () => setStartIndex(i => (i > 0 ? i - 1 : Math.max(reviews.length - 3, 0)));
  const handleNext = () => setStartIndex(i => (i + 3 < reviews.length ? i + 1 : 0));

  return (
    <section className="py-12 md:py-16 bg-white" data-testid="google-reviews-section">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 mb-3">
            <svg className="w-8 h-8" viewBox="0 0 48 48">
              <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
              <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
              <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
              <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
            </svg>
            <span className="text-sm font-bold uppercase tracking-wider text-slate-600">Google Reviews</span>
          </div>
          <h2 className="font-['Barlow_Condensed'] text-3xl md:text-5xl font-bold uppercase text-[#0A1628] mb-3">
            {title}
          </h2>
          <div className="flex items-center justify-center gap-3 mb-2">
            <StarRow count={5} />
            <span className="font-bold text-2xl text-[#0A1628]">{GOOGLE_RATING.average}</span>
            <span className="text-slate-600">/ 5</span>
          </div>
          <p className="text-slate-600">
            Based on <span className="font-bold">{GOOGLE_RATING.count}+ Google reviews</span> ·{' '}
            <a
              href={SOCIAL_LINKS.googleBusiness}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#EA6A1E] font-semibold hover:underline inline-flex items-center gap-1"
            >
              See all reviews <ExternalLink size={14} />
            </a>
          </p>
        </div>

        {/* Reviews grid */}
        {compact ? (
          <div className="grid md:grid-cols-3 gap-6">
            {visible.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <ReviewCard review={r} />
              </motion.div>
            ))}
          </div>
        ) : (
          <>
            {/* Desktop: 3-card slider */}
            <div className="hidden md:block relative">
              <div className="grid grid-cols-3 gap-6">
                {reviews.slice(startIndex, startIndex + 3).map((r, i) => (
                  <motion.div
                    key={`${startIndex}-${i}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ReviewCard review={r} />
                  </motion.div>
                ))}
              </div>
              <div className="flex justify-center gap-4 mt-6">
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 bg-[#0A1628] text-white flex items-center justify-center hover:bg-[#EA6A1E] transition-colors"
                  aria-label="Previous reviews"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={handleNext}
                  className="w-10 h-10 bg-[#0A1628] text-white flex items-center justify-center hover:bg-[#EA6A1E] transition-colors"
                  aria-label="Next reviews"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            {/* Mobile: stacked */}
            <div className="md:hidden grid grid-cols-1 gap-4">
              {reviews.slice(0, 4).map((r, i) => (
                <ReviewCard key={i} review={r} />
              ))}
            </div>
          </>
        )}

        {/* CTA */}
        <div className="text-center mt-8">
          <a
            href={SOCIAL_LINKS.googleBusiness}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#EA6A1E] hover:bg-[#C4551A] text-white font-bold py-3 px-6 uppercase tracking-wider transition-colors"
          >
            Read All Google Reviews <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviewsSection;
