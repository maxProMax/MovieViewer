import { API_KEY, HOST } from './constants';
import { MoviesResp, ConfigurationResp, Movie } from './types';

export const getEndpoint =
    <T>(path: string) =>
    (queryParams: Record<string, unknown> = {}) => {
        const params = new URLSearchParams({
            api_key: API_KEY,
            ...queryParams,
        });
        const url = `${HOST}/${path}?${params}`;

        return fetch(url).then<T>((r) =>
            r.ok
                ? r.json()
                : r.json().then(({ errors }) => Promise.reject({ url, errors }))
        );
    };

export const getConfiguration = () =>
    getEndpoint<ConfigurationResp>('configuration')();

export const getSearchMovie = (params: { query: string; page?: number }) =>
    getEndpoint<MoviesResp>('search/movie')(params);

export const getMovie = (movie_id: number) =>
    getEndpoint<Movie>(`movie/${movie_id}`)();

export const getMovieTopRated = () =>
    getEndpoint<MoviesResp>('movie/top_rated')();
