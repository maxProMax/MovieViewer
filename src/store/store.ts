import { configureStore } from '@reduxjs/toolkit';
import configuration from './slices/configuration';
import favorites from './slices/favorites';
import watchLater from './slices/watchLater';

export const store = configureStore({
    reducer: {
        configuration,
        favorites,
        watchLater,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
