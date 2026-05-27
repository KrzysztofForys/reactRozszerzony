import { tmdbClient } from "./tmdbClient"
type DiscoverParams = {
  with_genres?: string | null,
  primary_release_year?: string | null,
}
export const moviesApi = {
    popular: (page = 1) => tmdbClient.get('/movie/popular', {params: {page}}).then(r => r.data),
    topRated: (page = 1) => tmdbClient.get('/movie/top_rated', {params: {page}}).then(r => r.data),
    search: (query: string, page = 1) => tmdbClient.get('/search/movie', {params: {query, page}}).then(r => r.data),
    details: (id: number) => tmdbClient.get(`/movie/${id}`, {params: {append_to_response: 'credits,similar,videos'}}).then(r => r.data),
    genres: () => tmdbClient.get('/genre/movie/list').then(r => r.data),
    discover: (params: DiscoverParams) => tmdbClient.get('/discover/movie', {params}).then(r => r.data),
}
export const tmdbImage = (path: string, size = 'w500') => path ? `https://image.tmdb.org/t/p/${size}${path}` : null;