import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Body } from 'src/components/Body';
import { Home } from 'src/components/Pages/Home';
import { Favorites } from 'src/components/Pages/Favorites';
import { WatchLater } from 'src/components/Pages/WatchLater';
import { MoviePage } from 'src/components/Pages/MoviePage';
import { Links } from './types';

export const AppRoutes: FC = () => (
    <Routes>
        <Route path={Links.HOME} element={<Body />}>
            <Route index element={<Home />} />
            <Route path={Links.FAVORITES} element={<Favorites />} />
            <Route path={Links.WATCH_LATER} element={<WatchLater />} />
            <Route path={`${Links.MOVIE}/:id`} element={<MoviePage />} />
            <Route path={Links.OTHER} element={<Home />} />
        </Route>
    </Routes>
);
