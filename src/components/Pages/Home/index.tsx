import { FC, useCallback, useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useSearch } from '../../../hooks/api';
import { MovieShort as MovieType } from '../../../modules/apis/themoviedb/types';
import { Movies } from '../../common/Movies';
import { Search } from './Search';
import { TopRatedMovies } from './TopRatedMovies';

export const Home: FC = () => {
    const [page, updatePage] = useState(1);
    const [search, updateSearch] = useState('');
    const [movies, setMovies] = useState<MovieType[]>([]);
    const { state: foundMovies, request: searchMovies, loading } = useSearch();

    const handleSearch = useCallback((query: string) => {
        updateSearch(query);

        searchMovies({ query, page }).then((resp) =>
            setMovies(resp?.results || [])
        );
    }, []);

    useEffect(() => {
        page > 1 &&
            searchMovies({ query: search, page }).then((resp) =>
                setMovies(movies.concat(resp?.results || []))
            );
    }, [page]);

    return (
        <>
            <Search onSearch={handleSearch} disabled={loading} />
            {!foundMovies && <TopRatedMovies />}
            {foundMovies?.total_results ? (
                <>
                    <Typography>
                        Found Movies {movies.length} of{' '}
                        {foundMovies?.total_results}
                    </Typography>
                    <Movies movies={movies} />
                    {foundMovies?.total_results > movies.length && (
                        <Button onClick={() => updatePage(page + 1)}>
                            Load more
                        </Button>
                    )}
                </>
            ) : (
                foundMovies && (
                    <Typography variant="body1">Not Found</Typography>
                )
            )}
        </>
    );
};
