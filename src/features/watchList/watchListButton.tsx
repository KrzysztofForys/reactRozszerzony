import { useDispatch } from "react-redux"
import { useTheme } from "../theme/ThemeContext";
import { addToWatchList, removeFromWatchList } from "./watchListSlice";
import {type Movie} from "../../shared/types/types";
import { useAppSelector } from "../../shared/hooks/redux";
type WatchListButtonProps = {
    movie: Movie
}
export const WatchListButton = ({movie}: WatchListButtonProps) => {
    const dispatch = useDispatch();
    const {state} = useTheme();
    const dark = state.mode === "dark";
    const isOnList = useAppSelector(s => s.watchList.items.some((m: Movie) => m.id === movie.id))
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