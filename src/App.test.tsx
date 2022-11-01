import { render, screen } from '@testing-library/react';
import App from './App';
import { GlobalProvider } from './Providers';

test('renders learn react link', () => {
    render(<App />, { wrapper: GlobalProvider });

    expect(screen.getByText(/MovieViewer/i)).toBeInTheDocument();
});
