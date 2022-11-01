import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { GlobalProvider } from 'src/Providers';
import { Header } from './Header';

describe('Header', () => {
    test('open sidebar', async () => {
        render(<Header />, { wrapper: GlobalProvider });

        userEvent.click(screen.getByRole('button'));

        ['Favorites', 'Home', 'Watch Later'].forEach((value) => {
            const el = screen.getByText(new RegExp(value, 'i'));

            expect(el).toBeInstanceOf(HTMLAnchorElement);
            expect(el).toBeInTheDocument();
        });
    });

    test('Layout', () => {
        const view = render(<Header />, { wrapper: GlobalProvider });

        expect(view.container).toMatchSnapshot();
    });
});
