import { createSlice } from '@reduxjs/toolkit';
import { ConfigurationResp } from '../../modules/apis/themoviedb/types';
import { getConfigurationThunk } from './thunks';

export interface State extends ConfigurationResp {
    loading: boolean;
}

const initialState: State = {
    loading: true,
};

export const configurationSlice = createSlice({
    name: 'configuration',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getConfigurationThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.images = action.payload.images;
                state.change_keys = action.payload.change_keys;
            })
            .addCase(getConfigurationThunk.rejected, (state) => {
                state.loading = false;
            });
    },
});

export default configurationSlice.reducer;
