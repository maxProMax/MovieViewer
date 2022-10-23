import { configureStore } from '@reduxjs/toolkit';
import configuration from './slices/configuration';

export const store = configureStore({
    reducer: {
        configuration,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
