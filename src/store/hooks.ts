import { useEffect } from 'react';
import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';
import { AppDispatch, RootState } from './store';
import { getConfigurationThunk } from './slices/thunks';

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
