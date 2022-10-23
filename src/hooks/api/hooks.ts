import {
    getSearchMovie,
    getMovie,
    getMovieTopRated,
} from '../../modules/apis/themoviedb';
import { useFetch } from '../utils/network';

export const useSearch = () => {
    return useFetch(getSearchMovie);
};

export const useGetMovie = () => {
    return useFetch(getMovie);
};

export const useMovieTopRated = () => {
    return useFetch(getMovieTopRated);
};
