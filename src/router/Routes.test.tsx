import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import { MoviesResp, Movie } from 'src/modules/apis/themoviedb/types';
import { mockedFetch } from 'src/tests/mockedFetch';
import { GlobalProvider } from 'src/Providers';
import { mockMovie, mockMovies } from 'src/tests/data';
import { AppRoutes } from './Routes';

const TITLE = 'The Godfather';
const VOTE_AVERAGE = 8;

const movie: Movie = {
    ...mockMovie,
    title: TITLE,
    vote_average: VOTE_AVERAGE,
};

const movies: MoviesResp = {
    ...mockMovies,
    results: [movie],
};

describe('Home Page', () => {
    beforeEach(() => {
        mockedFetch((path) =>
            Promise.resolve(path.includes('top_rated') ? movies : movie)
        );
    });

    test('Movie Details Page', async () => {
        await act(async () => {
            await render(<AppRoutes />, { wrapper: GlobalProvider });
        });

        const link = await screen.findByRole('link', { name: TITLE });

        await waitFor(() => {
            expect(link).toBeInTheDocument();
        });

        await userEvent.click(link);

        const label = await screen.findByLabelText(`${VOTE_AVERAGE} Stars`);

        expect(label).toBeInTheDocument();
    });
});
