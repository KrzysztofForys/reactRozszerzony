import { MovieCard } from '../features/movies/MovieCard';
import { Movie } from '../shared/types/types';
import { useAppSelector } from '../shared/hooks/redux';

export default function FavoritesPage() {
  const favorites = useAppSelector(s => s.favorites.items);

  if (favorites.length === 0) {
    return (
      <div className="text-center py-20 text-zinc-400">
        <p className="text-5xl mb-4">🤍</p>
        <p>Brak ulubionych. Wejdź na stronę filmu i kliknij serduszko.</p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Ulubione ({favorites.length})</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {favorites.map((m: Movie) => <MovieCard key={m.id} movie={m} />)}
      </div>
    </div>
  );
}