import { configureStore } from '@reduxjs/toolkit';
import { getItem, setItem } from 'src/modules/storage';
import configuration from './slices/configuration';
import favorites from './slices/favorites';
import watchLater from './slices/watchLater';

const STORAGE_KEY = 'REDUX-STATE';

export const store = configureStore({
    reducer: {
        configuration,
        favorites,
        watchLater,
    },
    preloadedState: getItem(STORAGE_KEY) || {},
});

store.subscribe(() => setItem(STORAGE_KEY, store.getState()));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
