'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

import { StarRating } from './StarRating';

function formatDateYYYYMMDD(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export type LogModalProps = {
  gameTitle: string;
  isOpen: boolean;
  onClose: () => void;
};

export function LogModal({ gameTitle, isOpen, onClose }: LogModalProps) {
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);

  const today = formatDateYYYYMMDD(new Date());

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="log-modal-title"
    >
      <div className="w-full max-w-md rounded-xl border border-neutral-800 bg-neutral-900 shadow-xl">
        <div className="flex items-start justify-between gap-4 border-b border-neutral-800 px-6 py-4">
          <h2 id="log-modal-title" className="text-base font-semibold text-white">
            Log de {gameTitle}
          </h2>

          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md text-neutral-300 hover:bg-neutral-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-neutral-900"
            aria-label="Close"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <form
          className="space-y-4 px-6 py-5"
          onSubmit={(e) => {
            e.preventDefault();
            onClose();
          }}
        >
          <div className="space-y-2">
            <label htmlFor="log-date" className="text-sm font-medium text-neutral-200">
              Data
            </label>
            <input
              id="log-date"
              type="date"
              value={today}
              readOnly
              className="w-full cursor-not-allowed rounded-md border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm text-white opacity-60 outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="log-review" className="text-sm font-medium text-neutral-200">
              Resenha
            </label>
            <textarea
              id="log-review"
              rows={3}
              value={review}
              onChange={(e) => setReview(e.target.value)}
              placeholder="Escreva sua resenha..."
              className="min-h-[84px] w-full resize-y rounded-md border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm text-white outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="space-y-2">
            <div className="text-sm font-medium text-neutral-200">Nota</div>
            <StarRating rating={rating} isReadOnly={false} onRatingChange={setRating} />
          </div>

          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-neutral-200 hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-neutral-900"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-md bg-green-500 px-4 py-2 text-sm font-semibold text-neutral-950 hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-neutral-900"
            >
              Salvar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
