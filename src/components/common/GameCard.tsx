import Image from 'next/image';

export type Game = {
  title: string;
  cover_url: string;
  rating: number;
};

type GameCardProps = {
  game: Game;
  preload?: boolean;
};

export function GameCard({ game, preload = false }: GameCardProps) {
  return (
    <div className="w-full transform transition-transform hover:scale-105">
      <div className="aspect-[3/4] w-full relative overflow-hidden rounded-md shadow-sm">
        {/* Badge do Rating */}
        <div className="absolute top-2 right-2 z-10 bg-neutral-900/80 text-white text-xs font-bold px-2 py-1 rounded">
          {game.rating}
        </div>
        
        <Image
          src={game.cover_url}
          alt={game.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 16vw"
          preload={preload}
        />
      </div>
      <div className="mt-2 text-sm font-medium leading-snug truncate">{game.title}</div>
    </div>
  );
}
