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

export interface Show {
    id:number
    name:string
    date:string
    venue:string
    startDate:string
    image:string
    location:string
    url:string
    performer:{name:string}[]
}

export interface TicketmasterShow {
    "@context": string;
    "@type": string;
    url: string;
    name: string;
    description: string;
    image: string;
    startDate: string;
    endDate: string;
    eventStatus: string;
    eventAttendanceMode: string;
    location: {
        "@type":string; 
        name: string;
        sameAs: string;
        address: {
            "@type": string;
            streetAddress: string;
            addressLocality: string;
            addressRegion: string;
            postalCode: string;
            addressCountry: string;
        }
        geo: {
            "@type": string;
            latitude: number;
            longitude: number;
        }
    }
    offers: {
        "@type": string;
        availability: string;
        description: string;
        url: string;
        validFrom: string;
        availabilityStarts: string;
    }
    performer: {
        "@type": string;
        name: string;
        sameAs: string;
    }[]
}
export interface ArtistName {
    artistName:string|React.ReactNode
}