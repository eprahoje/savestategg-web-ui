import { GameCard } from "../../../src/components/common/GameCard";
import { StarRating } from "../../../src/components/common/StarRating";

// Mock rápido para validar o layout da Spec 005
const mockGameDetails = {
  id: "uuid-123",
  title: "Elden Ring",
  release_date: "2022-02-25",
  developers: ["FromSoftware"],
  summary: "Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring...",
  cover_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co4jni.jpg",
  rating: 96,
};

export default function GameDetailsPage() {
  return (
    <main className="min-h-screen bg-neutral-950 p-8 text-neutral-100 font-sans">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        <div className="md:col-span-1 flex flex-col gap-4">
          <GameCard game={mockGameDetails} preload />
          
          <div className="bg-neutral-900 p-4 rounded-md border border-neutral-800 flex flex-col items-center gap-2">
            <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Your Rating</span>
            <StarRating rating={0} isReadOnly={false} />
          </div>
        </div>

        <div className="md:col-span-3 flex flex-col gap-4">
          <div>
            <h1 className="text-4xl font-bold tracking-tight">{mockGameDetails.title}</h1>
            <p className="text-neutral-400 text-sm mt-1">
              {mockGameDetails.release_date.split('-')[0]} • Directed by {mockGameDetails.developers.join(', ')}
            </p>
          </div>
          
          <p className="text-neutral-300 leading-relaxed text-sm md:text-base">
            {mockGameDetails.summary}
          </p>
        </div>

      </div>
    </main>
  );
}