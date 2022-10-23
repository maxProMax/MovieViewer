import { FC } from 'react';
import Typography from '@mui/material/Typography';
import { ImageThemoviedb } from '../../common/Image';
import { Movie as MovieType } from '../../../modules/apis/themoviedb/types';
import stylesMovie from './movie.module.css';
import stylesMovies from './movies.module.css';

const Movie: FC<MovieType> = ({ poster_path, title, overview }) => {
    return (
        <li className={stylesMovie.movie}>
            <ImageThemoviedb
                className={stylesMovie.image}
                path={poster_path}
                alt={title}
            />
            <Typography className={stylesMovie.title} variant="body1">
                {title}
            </Typography>
            <Typography variant="body2">{overview}</Typography>
        </li>
    );
};

export const Movies: FC<{ movies: MovieType[] }> = ({ movies }) => {
    return (
        <ul className={stylesMovies.movies}>
            {movies?.map((movie) => (
                <Movie key={movie.id} {...movie} />
            ))}
        </ul>
    );
};
