import { FC } from 'react';
import { Header } from './components/Header';
import { useInitRedux } from './store';
import { AppRoutes } from './router/Routes';
import './App.css';

export const App: FC = () => {
    useInitRedux();

    return (
        <>
            <Header />
            <AppRoutes />
        </>
    );
};

export default App;
