import { FC } from 'react';
import { useFavorites } from 'src/store/hooks';
import { Movies } from 'src/components/common/Movies';

export const Favorites: FC = () => {
    const { favorites, count } = useFavorites();

    return count ? (
        <Movies movies={Object.values(favorites)} />
    ) : (
        <div>No Movies Yet</div>
    );
};
