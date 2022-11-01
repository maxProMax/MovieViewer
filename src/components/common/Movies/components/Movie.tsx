import { FC } from 'react';
import Typography from '@mui/material/Typography';
import { MovieShort as MovieType } from 'src/modules/apis/themoviedb/types';
import { LinkMovie } from 'src/router/links';
import { Poster } from 'src/components/common/Poster';
import { Title } from './Title';
import stylesMovie from './movie.module.css';

export const Movie: FC<{ movie: MovieType }> = ({ movie }) => {
    const { id, poster_path, title, overview } = movie;

    return (
        <div className={stylesMovie.movie} tabIndex={0}>
            <LinkMovie id={String(movie.id)}>
                <Poster path={poster_path} title={title} />
            </LinkMovie>
            <Title title={title} id={id} />
            <Typography variant="body2">
                {overview.length >= 170
                    ? `${overview.substring(0, 140)}...`
                    : overview}
            </Typography>
        </div>
    );
};
