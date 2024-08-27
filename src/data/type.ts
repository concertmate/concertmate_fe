export interface SpotifyArtist {external_urls: {spotify: string};
followers: {href: null | string, total: number};
genres: string[];
href: string;
id: string;
images: [{url: string, height: number, width: number},{url: string, height: number, width: number},{url: string, height: number, width: number}];
name: string;
popularity: number;
type: string;
uri: string;
}

export interface UserAuthentication {
    authenticated: boolean;
    setAuthentication: (authenticated: boolean) => void;
}

