import { useReducer } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
    reducer,
    actionSearch,
    actionNext,
    actionMovies,
    actionAppendMovies,
} from './reducer';

export const useLocationSearch = () => {
    const SEARCH_KEY = 'search';
    const [searchParams, setSearchParams] = useSearchParams();

    return [
        searchParams.get(SEARCH_KEY) || '',
        (value: string) => setSearchParams({ [SEARCH_KEY]: value }),
    ] as const;
};

export const useHomeReducer = (query: string) => {
    const [state, dispatch] = useReducer(reducer, { query, page: 1 });

    return {
        state,
        setQuery: (payload: string) => dispatch(actionSearch(payload)),
        loadMore: (payload: number) => dispatch(actionNext(payload)),
        setMovies: (...args: Parameters<typeof actionMovies>) =>
            dispatch(actionMovies(...args)),
        appendMovies: (...args: Parameters<typeof actionAppendMovies>) =>
            dispatch(actionAppendMovies(...args)),
    };
};
