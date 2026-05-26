import {createSlice} from "@reduxjs/toolkit"
import {type Movie} from "../../shared/types/types"
type State = {
    items: Movie[];
}
const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        items: JSON.parse(localStorage.getItem("favorites") || '[]')
    },
    reducers: {
        addFavorite(state: State, action){
            const exists = state.items.find(m => m.id === action.payload.id);
            if(!exists) state.items.push(action.payload);
        },
        removeFavorite(state: State, action){
            state.items = state.items.filter(m => m.id !== action.payload)
        },
        clearFavorites(state){state.items = [];}
    }
})
export const {addFavorite, removeFavorite, clearFavorites} = favoritesSlice.actions;
export default favoritesSlice.reducer;