export interface MovieShort {
    id: number;
    poster_path: string;
    title: string;
    overview: string;
    adult?: boolean;
    backdrop_path?: string;
    genre_ids?: number[];
    original_language?: string;
    original_title?: string;
    popularity?: number;
    release_date?: string;
    video?: boolean;
    vote_average?: number;
    vote_count?: number;
}

export interface Movie extends MovieShort {
    vote_average: number;
    belongs_to_collection?: unknown;
    budget?: number;
    genres?: { id: number; name: string }[];
    homepage?: string;
    imdb_id?: string;
    production_companies?: string[];
    revenue?: number;
    runtime?: number;
    status?: string;
    vote_count?: number;
}

interface ResponseList {
    page: number;
    total_results: number;
    total_pages: number;
}

export interface ConfigurationResp {
    images?: {
        secure_base_url: string;
    };
    change_keys?: string[];
}

export interface MoviesResp extends ResponseList {
    results: MovieShort[];
}

export interface MovieVideosResp extends ResponseList {
    results: { key: string }[];
}
