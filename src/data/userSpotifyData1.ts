interface spotifyArtist {external_urls: {spotify: string};
  followers: {href: null | string, total: number};
  genres: string[];
  href: string;
  id: string;
  images: [{url: string, height: number, width: number},{url: string, height: number, width: number},{url: string, height: number, width: number}];
  name: string;
  popularity: number;
  type: string;
  uri: string;}
export const data1: spotifyArtist[] = [{
  "external_urls": {
    "spotify": "https://open.spotify.com/artist/7jy3rLJdDQY21OgRLCZ9sD"
  },
  "followers": {
    "href": null,
    "total": 11932114
  },
  "genres": [
    "alternative metal",
    "alternative rock",
    "modern rock",
    "permanent wave",
    "post-grunge",
    "rock"
  ],
  "href": "https://api.spotify.com/v1/artists/7jy3rLJdDQY21OgRLCZ9sD?locale=en-US%2Cen%3Bq%3D0.9",
  "id": "7jy3rLJdDQY21OgRLCZ9sD",
  "images": [
    {
      "url": "https://i.scdn.co/image/ab6761610000e5ebc884df599abc793c116cdf15",
      "height": 640,
      "width": 640
    },
    {
      "url": "https://i.scdn.co/image/ab67616100005174c884df599abc793c116cdf15",
      "height": 320,
      "width": 320
    },
    {
      "url": "https://i.scdn.co/image/ab6761610000f178c884df599abc793c116cdf15",
      "height": 160,
      "width": 160
    }
  ],
  "name": "Foo Fighters",
  "popularity": 78,
  "type": "artist",
  "uri": "spotify:artist:7jy3rLJdDQY21OgRLCZ9sD"
},
{
  "external_urls": {
    "spotify": "https://open.spotify.com/artist/5INjqkS1o8h1imAzPqGZBb"
  },
  "followers": {
    "href": null,
    "total": 8053226
  },
  "genres": [
    "australian psych",
    "modern rock",
    "neo-psychedelic",
    "rock"
  ],
  "href": "https://api.spotify.com/v1/artists/5INjqkS1o8h1imAzPqGZBb?locale=en-US%2Cen%3Bq%3D0.9",
  "id": "5INjqkS1o8h1imAzPqGZBb",
  "images": [
    {
      "url": "https://i.scdn.co/image/ab6761610000e5eb90357ef28b3a012a1d1b2fa2",
      "height": 640,
      "width": 640
    },
    {
      "url": "https://i.scdn.co/image/ab6761610000517490357ef28b3a012a1d1b2fa2",
      "height": 320,
      "width": 320
    },
    {
      "url": "https://i.scdn.co/image/ab6761610000f17890357ef28b3a012a1d1b2fa2",
      "height": 160,
      "width": 160
    }
  ],
  "name": "Tame Impala",
  "popularity": 80,
  "type": "artist",
  "uri": "spotify:artist:5INjqkS1o8h1imAzPqGZBb"
}
]