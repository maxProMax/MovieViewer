import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { GlobalProvider } from 'src/Providers';
import { mockedFetch } from 'src/tests/mockedFetch';
import { Header } from 'src/components/Header';
import { MovieShort } from 'src/modules/apis/themoviedb/types';
import { Movie } from './Movie';
import { mockMovie } from 'src/tests/data';

const movie: MovieShort = {
    ...mockMovie,
    title: 'Movie_Title',
};

describe('Movie component', () => {
    beforeEach(() => {
        mockedFetch(() => Promise.resolve(movie));
    });

    test('Render', async () => {
        await render(<Movie movie={movie} />, { wrapper: GlobalProvider });

        expect(screen.getByRole('link')).toBeInTheDocument();
    });

    test.each([
        {
            name: 'Favorites',
            iconName: 'FavoriteBorderIcon',
            expected: /Favorites\s\(\d\)/,
        },
        {
            name: 'Watch Later',
            iconName: 'BookmarkAddIcon',
            expected: /Watch\sLater\s\(\d\)/,
        },
    ])('Add to $name', async ({ iconName, expected }) => {
        await render(
            <GlobalProvider>
                <Header />
                <Movie movie={movie} />
            </GlobalProvider>
        );

        const favoriteIcon = screen.getByTestId(iconName);

        expect(favoriteIcon).toBeInTheDocument();

        userEvent.click(favoriteIcon);

        const menuIcon = screen.getByTestId('MenuIcon');

        await userEvent.click(menuIcon);

        const link = await screen.findByRole('link', { name: expected });

        expect(link).toBeInTheDocument();
    });

    test('layout', async () => {
        const view = render(<Movie movie={movie} />, {
            wrapper: GlobalProvider,
        });

        expect(view.container).toMatchSnapshot();
    });
});
