import { useSearchParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useDebounce } from '../shared/hooks/useDebounce';
import { moviesApi } from '../shared/api/movies';
import { MovieCard } from '../features/movies/MovieCard';
import { MovieCardSkeleton } from '../features/movies/MovieCardSkeleton';
import { Movie } from '../shared/types/types';

type SearchResponse = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

export const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') ?? '';
  const debouncedQuery = useDebounce(query, 400);

  const { data, isLoading, error } = useQuery<SearchResponse, Error>({
    queryKey: ['movies', 'search', debouncedQuery],
    queryFn: () => moviesApi.search(debouncedQuery, 1),
    enabled: debouncedQuery.length > 1,
    placeholderData: prev => prev
  });

  return (
    <div>
      <input
        value={query}
        onChange={e => setSearchParams({ q: e.target.value })}
        placeholder="Szukaj filmu..."
        className="w-full p-3 mb-6 bg-zinc-800 text-white rounded text-lg"
        autoFocus
      />

      {error && <p className="text-red-400 mb-4">Błąd: {error.message}</p>}

      {data?.results?.length === 0 && (
        <p className="text-zinc-400">Brak wyników dla "{debouncedQuery}"</p>
      )}

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {isLoading
          ? Array.from({ length: 12 }).map((_, i) => <MovieCardSkeleton key={i} />)
          : data?.results?.map((m: Movie) => <MovieCard key={m.id} movie={m} />)
        }
      </div>
    </div>
  );
};

export default SearchPage;
