import {
    getSearchMovie,
    getMovie,
    getMovieTopRated,
    getMovieVideos,
} from 'src/modules/apis/themoviedb';
import { useFetch } from 'src/hooks/utils/network';

export const useMovieSearch = () => {
    return useFetch(getSearchMovie);
};

export const useMovie = () => {
    return useFetch(getMovie);
};

export const useMovieVideos = () => {
    return useFetch(getMovieVideos);
};

export const useMovieTopRated = () => {
    return useFetch(getMovieTopRated);
};
