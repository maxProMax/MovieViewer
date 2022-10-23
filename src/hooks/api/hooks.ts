import { getSearchMovie } from '../../modules/apis/themoviedb';
import { useFetch } from '../utils/network';

export const useSearch = () => {
    return useFetch(getSearchMovie);
};
