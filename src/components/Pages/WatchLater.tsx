import { FC } from 'react';
import { useWatchLatter } from '../../store/hooks';
import { Movies } from '../common/Movies';

export const WatchLater: FC = () => {
    const { watchLater } = useWatchLatter();

    return watchLater.length ? (
        <Movies movies={watchLater} />
    ) : (
        <div>No Movies Yet</div>
    );
};
