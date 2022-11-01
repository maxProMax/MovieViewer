import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import { useMovie, useMovieVideos } from 'src/hooks/api';
import { Poster } from 'src/components/common/Poster';
import { Title } from 'src/components/common/Movies/components/Title';
import Typography from '@mui/material/Typography';
import styles from './movie-page.module.css';

const Trailer: FC<{ id?: number; title?: string }> = ({ id, title }) => {
    const { state: videos, request: getVideos } = useMovieVideos();
    const [first, second] = videos?.results || [];

    useEffect(() => {
        id && getVideos(id);
    }, []);

    return first || second ? (
        <iframe
            className={styles.iframe}
            title={title}
            src={`https://www.youtube.com/embed/${first?.key || second?.key}`}
        />
    ) : null;
};

export const MoviePage: FC = () => {
    const { id } = useParams();
    const { state: movie, request: getMovie, loading } = useMovie();

    useEffect(() => {
        id && getMovie(Number(id));
    }, []);

    return loading ? (
        <div>Loading...</div>
    ) : (
        <section className={styles.page}>
            <div className={styles.top}>
                <Poster
                    className={styles.poster}
                    path={movie?.poster_path}
                    title={movie?.title || ''}
                />
                <div className={styles.content}>
                    <Rating
                        max={10}
                        readOnly
                        precision={0.1}
                        value={movie?.vote_average}
                    />
                    <Title
                        className={styles.title}
                        title={movie?.title}
                        id={movie?.id}
                    />
                    <Typography variant="body2">{movie?.overview}</Typography>
                </div>
            </div>
            <Trailer id={movie?.id} title={movie?.title} />
        </section>
    );
};
