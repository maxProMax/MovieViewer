import { FC, useCallback, useMemo } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MuiFavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import { useFavorites, useWatchLatter } from '../../../../store/hooks';
import { useGetMovie } from '../../../../hooks/api';
import styles from './icons.module.css';

export const FavoriteIcon: FC<{ movieId: number }> = ({ movieId }) => {
    const { add, remove, favorites } = useFavorites();
    const added = useMemo(
        () => favorites.find(({ id }) => id === movieId),
        [favorites]
    );
    const { request } = useGetMovie();

    const handleClick = useCallback(() => {
        added ? remove(movieId) : request(movieId).then((d) => d && add(d));
    }, []);

    return (
        <span onClick={handleClick} className={styles.icon}>
            {added ? <MuiFavoriteIcon /> : <FavoriteBorderIcon />}
        </span>
    );
};

export const WatchLater: FC<{ movieId: number }> = ({ movieId }) => {
    const { add, remove, watchLater } = useWatchLatter();
    const { request } = useGetMovie();
    const added = useMemo(
        () => watchLater.find(({ id }) => id === movieId),
        [watchLater]
    );

    const handleClick = useCallback(() => {
        added ? remove(movieId) : request(movieId).then((d) => d && add(d));
    }, []);

    return (
        <span onClick={handleClick} className={styles.icon}>
            {added ? <BookmarkAddedIcon /> : <BookmarkAddIcon />}
        </span>
    );
};
