import { GameGrid } from "@/src/components/common/GameGrid";
import { Game } from "@/src/components/common/GameCard";

// Mock baseado no contrato da Spec 001
const MOCK_GAMES: Game[] = [
  {
    title: "Elden Ring",
    cover_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co4jni.jpg",
    rating: 96,
  },
  {
    title: "Hollow Knight",
    cover_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1r7f.jpg",
    rating: 90,
  },
  {
    title: "Baldur's Gate 3",
    cover_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co670h.jpg",
    rating: 97,
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 p-8 text-neutral-100 font-sans">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 tracking-tight">Trending Games</h1>
        <GameGrid games={MOCK_GAMES} />
      </div>
    </main>
  );
}