import { FC } from 'react';
import styles from './header.module.css';

console.log(styles);

export const Header: FC = () => {
    return <header className={styles.container}>MovieViewer</header>;
};
