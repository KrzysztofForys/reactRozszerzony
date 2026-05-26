import { useDispatch, useSelector } from "react-redux"
import { useTheme } from "../theme/ThemeContext";
import { addToWatchList, removeFromWatchList } from "./watchListSlice";
// id: number
// title: string
// posterPath: null
export const WatchListButton = () => {
    const dispatch = useDispatch();
    const {state} = useTheme();
    const dark = state.mode === "dark";

    const isOnList = useSelector(s => s.watchlist.items.some(m => m.id === MoviePage.id))
     return (
    <button
      onClick={() => dispatch(isOnList ? removeFromWatchList(movie.id) : addToWatchList(movie))}
      className={`px-4 py-2 rounded text-lg transition-colors ${
        dark
          ? 'bg-zinc-700 hover:bg-zinc-600 text-white'
          : 'bg-gray-200 hover:bg-gray-300 text-zinc-900'
      }`}
    >
      {isOnList ? '👁️ W watchliście' : '➕ Dodaj do watchlisty'}
    </button>
  );
}