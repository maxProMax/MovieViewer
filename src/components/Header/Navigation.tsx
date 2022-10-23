import { FC, PropsWithChildren } from 'react';
import { List } from '../common/List';
import { LinkFavorites, LinkWatchLater, LinkHome } from '../../router/links';
import { useFavorites, useWatchLatter } from '../../store/hooks';
import styles from './navigation.module.css';

const Li: FC<PropsWithChildren> = ({ children }) => (
    <li className={styles.item}>{children}</li>
);

export const Navigation: FC = () => {
    const { favorites } = useFavorites();
    const { watchLater } = useWatchLatter();
    const favLength = favorites.length;
    const watchLength = watchLater.length;

    return (
        <nav className={styles.nav}>
            <List className={styles.list}>
                <Li>
                    <LinkHome>Home</LinkHome>
                </Li>
                <Li>
                    <LinkFavorites>
                        Favorites {favLength ? `(${favLength})` : ''}
                    </LinkFavorites>
                </Li>
                <Li>
                    <LinkWatchLater>
                        Watch Later {watchLength ? `(${watchLength})` : ''}
                    </LinkWatchLater>
                </Li>
            </List>
        </nav>
    );
};
