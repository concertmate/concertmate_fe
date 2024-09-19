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
    type: string;
    attributes: {
        email: string;
        created_at:string;
        updated_at:string;
        name: string;
    }
}

export interface TicketmasterShow {
    "@context": string;
    "@type": string;
    url: string;
    name: string;
    description: string;
    image: string;
    startDate: Date | string;
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
    }[],
    newDate?: string | React.ReactNode
}
export interface ArtistName {
    artistName:string|React.ReactNode
}
// export type Event = {
//     event_id: number;
//     event_name: string;
//     venue_name: string;
//     date_time: string;
//     artist: string;
//     location: string;
//     spotify_artist_id: string;
//     ticketmaster_event_id: string;
//     owner: string;
// }

export type PostEvent = {
    event_name: string;
    venue_name: string;
    date_time: string;
    artist: string;
    location: string;
    user_id: number;
}

export interface Event {
    id: string,
    type: string,
    attributes: {venue_name: string, event_name: string, date_time: string, artist: string, location: string,newDate?:string|React.ReactNode}
}