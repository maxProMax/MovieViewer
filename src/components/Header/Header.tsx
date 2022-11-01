import { FC, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import { LinkHome } from 'src/router/links';
import { Navigation } from './Navigation';
import styles from './header.module.css';

export const Header: FC = () => {
    const [open, change] = useState(false);
    const location = useLocation();

    useEffect(() => {
        change(false);
    }, [location]);

    return (
        <header className={styles.container}>
            <div className={styles.wrapper}>
                <button className={styles.burger} onClick={() => change(true)}>
                    <MenuIcon />
                </button>
                <Drawer open={open} onClose={() => change(false)}>
                    <Navigation />
                </Drawer>
                <div className={styles.logo}>
                    <LinkHome>MovieViewer</LinkHome>
                </div>
            </div>
        </header>
    );
};
