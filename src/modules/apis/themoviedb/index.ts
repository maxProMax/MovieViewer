import { API_KEY, HOST } from './constants';
import { SearchResp, ConfigurationResp } from './types';

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

export const getSearchMovie = (params: { query: string }) =>
    getEndpoint<SearchResp>('search/movie')(params);
