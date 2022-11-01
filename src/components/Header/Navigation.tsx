import { FC, PropsWithChildren } from 'react';
import { List } from 'src/components/common/List';
import { LinkFavorites, LinkWatchLater, LinkHome } from 'src/router/links';
import { useFavorites, useWatchLatter } from 'src/store/hooks';
import styles from './navigation.module.css';

const Li: FC<PropsWithChildren> = ({ children }) => (
    <li className={styles.item}>{children}</li>
);

export const Navigation: FC = () => {
    const { count: favorites } = useFavorites();
    const { count: watchLater } = useWatchLatter();

    return (
        <nav className={styles.nav}>
            <List className={styles.list}>
                <Li>
                    <LinkHome>Home</LinkHome>
                </Li>
                <Li>
                    <LinkFavorites>
                        Favorites {favorites ? `(${favorites})` : ''}
                    </LinkFavorites>
                </Li>
                <Li>
                    <LinkWatchLater>
                        Watch Later {watchLater ? `(${watchLater})` : ''}
                    </LinkWatchLater>
                </Li>
            </List>
        </nav>
    );
};
