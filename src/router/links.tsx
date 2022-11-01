import { FC, PropsWithChildren } from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import { Links as LinksEnum } from './types';
import style from './links.module.css';

const Link: FC<NavLinkProps> = (props) => (
    <NavLink className={style.link} {...props} />
);

export const LinkHome: FC<PropsWithChildren> = (props) => (
    <Link to={LinksEnum.HOME} {...props} />
);

export const LinkFavorites: FC<PropsWithChildren> = (props) => (
    <Link to={LinksEnum.FAVORITES} {...props} />
);

export const LinkWatchLater: FC<PropsWithChildren> = (props) => (
    <Link to={LinksEnum.WATCH_LATER} {...props} />
);

export const LinkMovie: FC<PropsWithChildren & { id: string }> = (props) => (
    <Link to={`../${LinksEnum.MOVIE}/${props.id}`} {...props} />
);
