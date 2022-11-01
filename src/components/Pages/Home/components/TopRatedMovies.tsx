import { FC, useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import { useMovieTopRated } from 'src/hooks/api';
import { Movies } from 'src/components/common/Movies';

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
