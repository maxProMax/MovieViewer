import { FC } from 'react';
import { useWatchLatter } from 'src/store/hooks';
import { Movies } from 'src/components/common/Movies';

export const WatchLater: FC = () => {
    const { watchLater, count } = useWatchLatter();

    return count ? (
        <Movies movies={Object.values(watchLater)} />
    ) : (
        <div>No Movies Yet</div>
    );
};
