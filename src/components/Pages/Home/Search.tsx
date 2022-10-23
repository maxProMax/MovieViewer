import { FC, FormEvent, useCallback, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styles from './search.module.css';

export const Search: FC<{
    onSearch: (query: string) => void;
    disabled?: boolean;
}> = ({ onSearch, disabled = false }) => {
    const [search, updateSearch] = useState('');
    const handleSubmit = useCallback(
        (e: FormEvent<HTMLFormElement>) => {
            onSearch(search);
            e.preventDefault();
        },
        [search]
    );

    return (
        <form className={styles.search} onSubmit={handleSubmit}>
            <TextField
                onChange={(e) => updateSearch(e.target.value)}
                value={search}
                label="Search Movies..."
                variant="outlined"
            />
            <Button
                disabled={!search || disabled}
                type="submit"
                size="small"
                variant="contained"
            >
                Search
            </Button>
        </form>
    );
};
