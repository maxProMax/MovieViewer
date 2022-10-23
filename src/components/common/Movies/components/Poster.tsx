import { FC } from 'react';
import { ImageThemoviedb, Image } from '../../../common/Image';
import stylesMovie from './movie.module.css';

export const Poster: FC<{ path: string | null; title: string }> = ({
    path,
    title,
}) =>
    !path ? (
        <Image
            className={stylesMovie.image}
            src={'./image-not-found.png'}
            alt={title}
        />
    ) : (
        <ImageThemoviedb
            className={stylesMovie.image}
            path={path}
            alt={title}
        />
    );
