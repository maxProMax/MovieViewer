import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Movie } from 'src/modules/apis/themoviedb/types';

export interface State {
    watchLater: Record<string, Movie>;
    count: number;
}

const initialState: State = {
    watchLater: {},
    count: 0,
};

export const watchLaterSlice = createSlice({
    name: 'watchLater',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<Movie>) => {
            state.count += 1;
            state.watchLater[action.payload.id] = action.payload;
        },
        remove: (state, action: PayloadAction<number>) => {
            state.count -= 1;

            delete state.watchLater[action.payload];
        },
    },
});

export const { add, remove } = watchLaterSlice.actions;
export default watchLaterSlice.reducer;
