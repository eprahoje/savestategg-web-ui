import { GameCard, type Game } from './GameCard';

type GameGridProps = {
  games: Game[];
};

export function GameGrid({ games }: GameGridProps) {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
      {games.map((game, index) => (
        <GameCard key={`${game.title}-${index}`} game={game} />
      ))}
    </div>
  );
}
