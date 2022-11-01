import { FC } from 'react';
import { MovieShort as MovieType } from 'src/modules/apis/themoviedb/types';
import { List } from '../List';
import { Movie } from './components/Movie';
import stylesMovies from './movies.module.css';

export const Movies: FC<{ movies: MovieType[] }> = ({ movies }) => {
    return !movies ? null : (
        <List className={stylesMovies.movies}>
            {movies?.map((movie) => (
                <li key={movie.id}>
                    <Movie movie={movie} />
                </li>
            ))}
        </List>
    );
};
