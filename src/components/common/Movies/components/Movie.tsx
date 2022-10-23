import { FC } from 'react';
import Typography from '@mui/material/Typography';
import { MovieShort as MovieType } from '../../../../modules/apis/themoviedb/types';
import { FavoriteIcon, WatchLater } from './Icons';
import { Poster } from './Poster';
import stylesMovie from './movie.module.css';

export const Movie: FC<{ movie: MovieType }> = ({ movie }) => {
    const { id, poster_path, title, overview } = movie;

    return (
        <li className={stylesMovie.movie}>
            <Poster path={poster_path} title={title} />
            <Typography className={stylesMovie.title} variant="body1">
                <strong className={stylesMovie.titleText}>{title}</strong>
                <span className={stylesMovie.icons}>
                    <FavoriteIcon movieId={id} />
                    <WatchLater movieId={id} />
                </span>
            </Typography>
            <Typography variant="body2">
                {overview.length >= 170
                    ? `${overview.substring(0, 140)}...`
                    : overview}
            </Typography>
        </li>
    );
};
