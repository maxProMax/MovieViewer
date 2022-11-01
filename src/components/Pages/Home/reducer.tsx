import { MovieShort } from 'src/modules/apis/themoviedb/types';

type State = {
    query: string;
    page: number;
    movies?: MovieShort[];
    total?: number;
};

enum ActionNames {
    SEARCH = 'SEARCH',
    NEXT = 'NEXT',
    MOVIES = 'MOVIES',
    APPEND_MOVIES = 'APPEND_MOVIES',
}

export const actionSearch = (payload: string) => ({
    type: ActionNames.SEARCH as const,
    payload,
});

export const actionNext = (payload: number) => ({
    type: ActionNames.NEXT as const,
    payload,
});

export const actionMovies = (payload: {
    movies?: MovieShort[];
    total?: number;
}) => ({
    type: ActionNames.MOVIES as const,
    payload,
});

export const actionAppendMovies = (payload?: MovieShort[]) => ({
    type: ActionNames.APPEND_MOVIES as const,
    payload,
});

type Actions =
    | ReturnType<typeof actionSearch>
    | ReturnType<typeof actionNext>
    | ReturnType<typeof actionMovies>
    | ReturnType<typeof actionAppendMovies>;

export function reducer(state: State, action: Actions) {
    const { type, payload } = action;

    if (type === ActionNames.SEARCH) {
        return { ...state, query: payload };
    }

    if (type === ActionNames.NEXT) {
        return { ...state, page: payload };
    }

    if (type === ActionNames.MOVIES) {
        const { movies = [], total } = payload;

        return { ...state, movies, total };
    }

    if (type === ActionNames.APPEND_MOVIES) {
        const movies = state.movies?.concat(payload || []);

        return { ...state, movies };
    }

    return state;
}
