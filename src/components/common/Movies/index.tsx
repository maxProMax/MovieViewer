import { FC } from 'react';
import { MovieShort as MovieType } from '../../../modules/apis/themoviedb/types';
import { List } from '../List';
import { Movie } from './components/Movie';
import stylesMovies from './movies.module.css';

export const Movies: FC<{ movies: MovieType[] }> = ({ movies }) => {
    return (
        <List className={stylesMovies.movies}>
            {movies?.map((movie) => (
                <Movie key={movie.id} movie={movie} />
            ))}
        </List>
    );
};
