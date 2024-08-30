export interface SpotifyArtist {
    external_urls: { spotify: string };
    followers: Partial< { href: null | string, total: number }>;
    genres: Readonly<string[]>;
    href: string;
    id: string;
    images: ReadonlyArray<{ url: string, height: number, width: number }>
    name: string;
    popularity: number;
    type: string;
    uri: string;
}

export interface UserAuthentication {
    authenticated: boolean;
    setAuthentication: (authenticated: boolean) => void;
}

export interface User {
    id: number;
    username: string;
    email: string;
    password: string;
}

