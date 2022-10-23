import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Body } from '../components/Body';
import { Home } from '../components/Pages/Home';
import { Favorites } from '../components/Pages/Favorites';
import { WatchLater } from '../components/Pages/WatchLater';
import { Links } from './types';

export const AppRoutes: FC = () => (
    <Routes>
        <Route path={Links.HOME} element={<Body />}>
            <Route index element={<Home />} />
            <Route path={Links.FAVORITES} element={<Favorites />} />
            <Route path={Links.WATCH_LATER} element={<WatchLater />} />
            <Route path={Links.OTHER} element={<Home />} />
        </Route>
    </Routes>
);
