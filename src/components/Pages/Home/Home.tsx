import { FC, useEffect } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useMovieSearch } from 'src/hooks/api';
import { Movies } from 'src/components/common/Movies';
import { Search } from './components/Search';
import { TopRatedMovies } from './components/TopRatedMovies';
import { useHomeReducer, useLocationSearch } from './hooks';

export const Home: FC = () => {
    const [urlQuery, setUrlQuery] = useLocationSearch();
    const { state, setQuery, setMovies, appendMovies, loadMore } =
        useHomeReducer(urlQuery);
    const { query, page, movies, total } = state;
    const { request, loading } = useMovieSearch();
    const fetch = () => request({ query, page });

    useEffect(() => {
        query && fetch();
    }, []);

    useEffect(() => {
        page > 1 && fetch().then((resp) => appendMovies(resp?.results));
    }, [page]);

    useEffect(() => {
        query &&
            fetch()
                .then((resp) =>
                    setMovies({
                        movies: resp?.results,
                        total: resp?.total_results,
                    })
                )
                .then(() => setUrlQuery(query));
    }, [query]);

    return (
        <>
            <Search
                defaultValue={query}
                onSearch={setQuery}
                disabled={loading}
            />
            {!movies && <TopRatedMovies />}
            {total ? (
                <>
                    <Typography>
                        Found Movies {movies?.length} of {total}
                    </Typography>
                    <Movies movies={movies || []} />
                    {total > (movies?.length || 0) && (
                        <Button onClick={() => loadMore(page + 1)}>
                            Load more
                        </Button>
                    )}
                </>
            ) : (
                movies && <Typography variant="body1">Not Found</Typography>
            )}
        </>
    );
};
