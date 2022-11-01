import { FC, PropsWithChildren, useCallback } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MuiFavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import { useFavorites, useWatchLatter } from 'src/store/hooks';
import { useMovie } from 'src/hooks/api';
import styles from './icons.module.css';

const Button: FC<
    PropsWithChildren<{ disabled: boolean; onClick: () => void }>
> = (props) => (
    <button
        tabIndex={0}
        className={`${styles.icon} ${props.disabled ? styles.disabled : ''}`}
        {...props}
    />
);

export const FavoriteIcon: FC<{ movieId: number }> = ({ movieId }) => {
    const { add, remove, favorites } = useFavorites();
    const { request, loading } = useMovie();
    const added = Boolean(favorites[movieId]);

    const handleClick = useCallback(() => {
        added ? remove(movieId) : request(movieId).then((d) => d && add(d));
    }, [added]);

    return (
        <Button disabled={loading} onClick={handleClick}>
            {added ? <MuiFavoriteIcon /> : <FavoriteBorderIcon />}
        </Button>
    );
};

export const WatchLater: FC<{ movieId: number }> = ({ movieId }) => {
    const { add, remove, watchLater } = useWatchLatter();
    const { request, loading } = useMovie();
    const added = watchLater[movieId];

    const handleClick = useCallback(() => {
        added ? remove(movieId) : request(movieId).then((d) => d && add(d));
    }, [added]);

    return (
        <Button disabled={loading} onClick={handleClick}>
            {added ? <BookmarkAddedIcon /> : <BookmarkAddIcon />}
        </Button>
    );
};
