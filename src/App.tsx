import { FC } from 'react';
import { Body } from './components/Body';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { useInitRedux } from './store';
import './App.css';

export const App: FC = () => {
    useInitRedux();

    return (
        <>
            <Header />
            <Body />
            <Footer />
        </>
    );
};

export default App;
