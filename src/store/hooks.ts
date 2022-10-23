import { useEffect } from 'react';
import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';
import { AppDispatch, RootState } from './store';
import { getConfigurationThunk } from './slices/thunks';
import {
    add as addToFavorite,
    remove as removeFromFavorite,
} from './slices/favorites';
import {
    add as addToWatchLater,
    remove as removeFromWatchLater,
} from './slices/watchLater';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useInitRedux = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getConfigurationThunk());
    }, []);
};

export const useConfiguration = () => {
    return useAppSelector((state) => state.configuration);
};

export const useFavorites = () => {
    const dispatch = useAppDispatch();
    const { favorites } = useAppSelector((state) => state.favorites);

    return {
        favorites,
        add: (...args: Parameters<typeof addToFavorite>) =>
            dispatch(addToFavorite(...args)),
        remove: (id: number) => dispatch(removeFromFavorite(id)),
    };
};

export const useWatchLatter = () => {
    const dispatch = useAppDispatch();
    const { watchLater } = useAppSelector((state) => state.watchLater);

    return {
        watchLater,
        add: (...args: Parameters<typeof addToWatchLater>) =>
            dispatch(addToWatchLater(...args)),
        remove: (id: number) => dispatch(removeFromWatchLater(id)),
    };
};
