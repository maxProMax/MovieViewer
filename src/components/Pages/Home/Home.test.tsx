import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Home } from './Home';
import { GlobalProvider } from 'src/Providers';
import { MoviesResp } from 'src/modules/apis/themoviedb/types';
import { mockedFetch } from 'src/tests/mockedFetch';

const mockMovies: (title: string) => MoviesResp = (title) => ({
    results: [
        {
            id: 577206,
            title,
            overview: "Take a trip back to the 90's in Kolkata",
            poster_path: '/4I6IJwKxjY1HTEkfLmlp4aWoflT.jpg',
        },
    ],
    page: 1,
    total_pages: 1,
    total_results: 1,
});

const renderHome = () =>
    render(
        <GlobalProvider>
            <Home />
        </GlobalProvider>
    );

const TOP_RATED = 'TOP_RATED';
const FOUND_MOVIE = 'FOUND_MOVIE';

describe('Home Page', () => {
    beforeEach(() => {
        mockedFetch((path) =>
            Promise.resolve(
                mockMovies(path.includes('top_rated') ? TOP_RATED : FOUND_MOVIE)
            )
        );
    });

    test('Top Rated', async () => {
        await renderHome();

        await waitFor(() => {
            expect(
                screen.getByRole('link', { name: TOP_RATED })
            ).toBeInTheDocument();
        });
    });

    test('Search Movie', async () => {
        await renderHome();

        userEvent.type(screen.getByRole('textbox'), 'test');
        await userEvent.click(screen.getByRole('button'));

        await waitFor(() => {
            expect(
                screen.getByRole('link', { name: FOUND_MOVIE })
            ).toBeInTheDocument();
        });
    });
});
