import { FC } from 'react';
import Typography from '@mui/material/Typography';
import { FavoriteIcon, WatchLater } from './Icons';
import stylesMovie from './movie.module.css';

export const Title: FC<{ title?: string; id?: number; className?: string }> = ({
    title,
    id,
    className = '',
}) =>
    !title ? null : (
        <Typography
            className={`${stylesMovie.title} ${className}`}
            variant="body1"
        >
            <strong className={stylesMovie.titleText}>{title}</strong>
            {id !== undefined && (
                <span className={stylesMovie.icons}>
                    <FavoriteIcon movieId={id} />
                    <WatchLater movieId={id} />
                </span>
            )}
        </Typography>
    );
