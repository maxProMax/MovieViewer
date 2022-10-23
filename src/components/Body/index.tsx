import { FC, FormEvent, useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useSearch } from '../../hooks/api';
import styles from './body.module.css';
import { Movies } from '../common/Movies';

export const Body: FC = () => {
    const [search, updateSearch] = useState('');
    const { state, request, loading, error } = useSearch();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        request({ query: search });

        e.preventDefault();
    };

    return (
        <main className={styles.container}>
            {error && <div>{error.errors[0]}</div>}
            <form className={styles.search} onSubmit={handleSubmit}>
                <TextField
                    onChange={(e) => updateSearch(e.target.value)}
                    value={search}
                    label="Search Movies..."
                    variant="outlined"
                />
                <Button
                    disabled={loading}
                    type="submit"
                    variant="contained"
                    fullWidth
                >
                    Search
                </Button>
            </form>

            {state?.total_results ? (
                <Movies movies={state?.results} />
            ) : (
                state && <Typography variant="body1">Not Found</Typography>
            )}
        </main>
    );
};
