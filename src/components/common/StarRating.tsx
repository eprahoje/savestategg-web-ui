'use client';

import { useMemo, useState } from 'react';
import { Star, StarHalf } from 'lucide-react';

export type StarRatingProps = {
  rating: number;
  isReadOnly?: boolean;
  onRatingChange?: (newRating: number) => void;
};

function clampRating(value: number): number {
  if (!Number.isFinite(value)) return 0;
  return Math.min(5, Math.max(0, value));
}

function roundToHalf(value: number): number {
  return Math.round(value * 2) / 2;
}

export function StarRating({
  rating,
  isReadOnly = true,
  onRatingChange,
}: StarRatingProps) {
  const [hoverRating, setHoverRating] = useState<number | null>(null);

  const displayedRating = useMemo(() => {
    const base = hoverRating ?? rating;
    return roundToHalf(clampRating(base));
  }, [hoverRating, rating]);

  const interactive = !isReadOnly;

  return (
    <div
      className="flex items-center gap-1"
      onMouseLeave={interactive ? () => setHoverRating(null) : undefined}
      aria-label={interactive ? 'Set rating' : 'Rating'}
    >
      {Array.from({ length: 5 }, (_, index) => {
        const starNumber = index + 1;
        const isFull = displayedRating >= starNumber;
        const isHalf = !isFull && displayedRating >= starNumber - 0.5;

        return (
          <div
            key={starNumber}
            className={interactive ? 'relative cursor-pointer' : 'relative'}
          >
            {isHalf ? (
              <>
                <Star
                  className="h-5 w-5 text-neutral-700 fill-neutral-700"
                  aria-hidden="true"
                />
                <StarHalf
                  className="absolute left-0 top-0 h-5 w-5 text-green-500 fill-green-500"
                  aria-hidden="true"
                />
              </>
            ) : (
              <Star
                className={`h-5 w-5 ${
                  isFull ? 'text-green-500 fill-green-500' : 'text-neutral-700 fill-neutral-700'
                }`}
                aria-hidden="true"
              />
            )}

            {interactive ? (
              <>
                <button
                  type="button"
                  className="absolute inset-y-0 left-0 w-1/2"
                  aria-label={`${starNumber - 0.5} stars`}
                  onMouseEnter={() => setHoverRating(starNumber - 0.5)}
                  onFocus={() => setHoverRating(starNumber - 0.5)}
                  onClick={() => onRatingChange?.(starNumber - 0.5)}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 w-1/2"
                  aria-label={`${starNumber} stars`}
                  onMouseEnter={() => setHoverRating(starNumber)}
                  onFocus={() => setHoverRating(starNumber)}
                  onClick={() => onRatingChange?.(starNumber)}
                />
              </>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
