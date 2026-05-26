import { configureStore} from "@reduxjs/toolkit";
import favoritesReducer from "../features/favorites/favoritesSlice";
import watchListReducer from "../features/watchList/watchListSlice";
import ratingsReducer from "../features/ratings/ratingsSlice";
export const store = configureStore({
    reducer: {
        favorites: favoritesReducer,
        watchList: watchListReducer,
        ratings: ratingsReducer
    }
})

store.subscribe(() => {
    const state = store.getState();
    localStorage.setItem('favorites', JSON.stringify(state.favorites.items));
    localStorage.setItem('watchList', JSON.stringify(state.watchList.items));
    localStorage.setItem('ratings', JSON.stringify(state.ratings));
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;