/* eslint-disable @next/next/no-img-element */

export type Game = {
  title: string;
  cover_url: string;
  rating: number;
};

type GameCardProps = {
  game: Game;
};

export function GameCard({ game }: GameCardProps) {
  return (
    <div className="w-full transform transition-transform hover:scale-105">
      <div className="aspect-[3/4] w-full overflow-hidden">
        <img
          src={game.cover_url}
          alt={game.title}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="mt-2 text-sm font-medium leading-snug">{game.title}</div>
    </div>
  );
}
