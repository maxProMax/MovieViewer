import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Movie } from 'src/modules/apis/themoviedb/types';

export interface State {
    favorites: Record<string, Movie>;
    count: number;
}

const initialState: State = {
    favorites: {},
    count: 0,
};

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<Movie>) => {
            state.count += 1;
            state.favorites[action.payload.id] = action.payload;
        },
        remove: (state, action: PayloadAction<number>) => {
            state.count -= 1;

            delete state.favorites[action.payload];
        },
    },
});

export const { add, remove } = favoritesSlice.actions;
export default favoritesSlice.reducer;
