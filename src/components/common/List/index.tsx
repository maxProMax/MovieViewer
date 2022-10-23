import { FC, PropsWithChildren } from 'react';
import styles from './list.module.css';

export const List: FC<PropsWithChildren<{ className?: string }>> = ({
    children,
    className = '',
}) => {
    return <ul className={`${styles.list} ${className}`}>{children}</ul>;
};
