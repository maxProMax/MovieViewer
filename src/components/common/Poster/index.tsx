import { FC } from 'react';
import { ImageThemoviedb, Image } from '../Image';
import styles from './poster.module.css';

export const Poster: FC<{
    path?: string | null;
    title: string;
    className?: string;
}> = ({ path, title, className = '' }) =>
    !path ? (
        <Image
            className={`${styles.image} ${className}`}
            src={'./image-not-found.png'}
            alt={title}
        />
    ) : (
        <ImageThemoviedb
            className={`${styles.image} ${className}`}
            path={path}
            alt={title}
        />
    );
