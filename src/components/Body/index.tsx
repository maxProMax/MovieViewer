import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import styles from './body.module.css';

export const Body: FC = () => (
    <main className={styles.container}>
        <Outlet />
    </main>
);
