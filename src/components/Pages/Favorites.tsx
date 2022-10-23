import { FC } from 'react';
import { useFavorites } from '../../store/hooks';
import { Movies } from '../common/Movies';

export const Favorites: FC = () => {
    const { favorites } = useFavorites();

    return favorites.length ? (
        <Movies movies={favorites} />
    ) : (
        <div>No Movies Yet</div>
    );
};
