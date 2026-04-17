'use client';

import { useState } from 'react';
import { LogModal } from './LogModal';

type LogActionProps = {
  gameTitle: string;
};

export function LogAction({ gameTitle }: LogActionProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="w-full bg-green-500 text-neutral-950 font-bold py-2 rounded-md hover:bg-green-400 transition-colors"
      >
        Log, rate or review
      </button>
      
      <LogModal 
        gameTitle={gameTitle} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}