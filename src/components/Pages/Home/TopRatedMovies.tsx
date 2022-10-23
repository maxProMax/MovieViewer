import { FC, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import { useMovieTopRated } from '../../../hooks/api';
import { Movies } from '../../common/Movies';

export const TopRatedMovies: FC = () => {
    const { state: topRatedMovies, request: getTopRated } = useMovieTopRated();

    useEffect(() => {
        getTopRated();
    }, []);

    return (
        <>
            <Typography>Top Rated</Typography>
            <Movies movies={topRatedMovies?.results || []} />
        </>
    );
};
