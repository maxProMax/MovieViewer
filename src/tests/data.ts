import { MoviesResp, Movie } from 'src/modules/apis/themoviedb/types';

export const mockMovie: Movie = {
    id: 1,
    title: '',
    overview: "Take a trip back to the 90's in Kolkata",
    poster_path: '/4I6IJwKxjY1HTEkfLmlp4aWoflT.jpg',
    vote_average: 0,
};

export const mockMovies: MoviesResp = {
    results: [],
    page: 1,
    total_pages: 1,
    total_results: 1,
};
