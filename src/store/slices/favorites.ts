import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Movie } from '../../modules/apis/themoviedb/types';

export interface State {
    favorites: Movie[];
}

const initialState: State = {
    favorites: [],
};

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<Movie>) => {
            state.favorites.push(action.payload);
        },
        remove: (state, action: PayloadAction<number>) => {
            state.favorites = state.favorites.filter(
                ({ id }) => id !== action.payload
            );
        },
    },
});

export const { add, remove } = favoritesSlice.actions;
export default favoritesSlice.reducer;
