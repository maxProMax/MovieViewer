import { FC } from 'react';
import { useConfiguration } from 'src/store/hooks';

interface Props {
    src: string;
    alt: string;
    className?: string;
}

export const Image: FC<Props> = ({ src, alt, className }) => {
    return <img src={src} alt={alt} className={className} />;
};

interface ImageThemoviedbProps extends Omit<Props, 'src'> {
    path: string;
}

export const ImageThemoviedb: FC<ImageThemoviedbProps> = ({
    path,
    ...rest
}) => {
    const { images } = useConfiguration();
    const base = images?.secure_base_url;

    return (
        <picture>
            <source media="(min-width:780px)" srcSet={`${base}w780${path}`} />
            <source media="(min-width:342px)" srcSet={`${base}w342${path}`} />
            <Image src={`${base}original${path}`} {...rest} />
        </picture>
    );
};
