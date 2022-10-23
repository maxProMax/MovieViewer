export type Movie = {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
};

export interface ConfigurationResp {
    images?: {
        base_url: string;
        secure_base_url: string;
        backdrop_sizes: ['w300', 'w780', 'w1280', 'original'];
        logo_sizes: ['w45', 'w92', 'w154', 'w185', 'w300', 'w500', 'original'];
        poster_sizes: [
            'w92',
            'w154',
            'w185',
            'w342',
            'w500',
            'w780',
            'original'
        ];
        profile_sizes: ['w45', 'w185', 'h632', 'original'];
        still_sizes: ['w92', 'w185', 'w300', 'original'];
    };
    change_keys?: string[];
}

interface ResponseList {
    page: number;
    total_results: number;
    total_pages: number;
}

export interface SearchResp extends ResponseList {
    results: Movie[];
}
