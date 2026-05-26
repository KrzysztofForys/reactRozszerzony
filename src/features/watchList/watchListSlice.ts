import {createSlice} from "@reduxjs/toolkit";
type Movie = {
    id: number;
    title: string;
}
type State = {
    items: Movie[];
}
const watchListSlice = createSlice({
    name: 'watchList',
    initialState: {
        items: JSON.parse(localStorage.getItem("watchList") || '[]')
    },
    reducers: {
        addToWatchList(state: State, action){
            const exists = state.items.find(m => m.id === action.payload.id);
            if(!exists) state.items.push(action.payload);
        },
        removeFromWatchList(state: State, action){
            state.items = state.items.filter(m => m.id !== action.payload.id)
        },
        clearWatchList(state){state.items = [];}
    }
})
export const {addToWatchList, removeFromWatchList, clearWatchList} = watchListSlice.actions;
export default watchListSlice.reducer;