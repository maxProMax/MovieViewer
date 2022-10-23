import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Movie } from '../../modules/apis/themoviedb/types';

export interface State {
    watchLater: Movie[];
}

const initialState: State = {
    watchLater: [],
};

export const watchLaterSlice = createSlice({
    name: 'watchLater',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<Movie>) => {
            state.watchLater.push(action.payload);
        },
        remove: (state, action: PayloadAction<number>) => {
            state.watchLater = state.watchLater.filter(
                ({ id }) => id !== action.payload
            );
        },
    },
});

export const { add, remove } = watchLaterSlice.actions;
export default watchLaterSlice.reducer;
