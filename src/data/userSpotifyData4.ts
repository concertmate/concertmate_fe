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
export const data4: spotifyArtist[] = [
    {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/4Gso3d4CscCijv0lmajZWs"
        },
        "followers": {
          "href": null,
          "total": 4778156
        },
        "genres": [
          "rap"
        ],
        "href": "https://api.spotify.com/v1/artists/4Gso3d4CscCijv0lmajZWs?locale=en-US%2Cen%3Bq%3D0.9",
        "id": "4Gso3d4CscCijv0lmajZWs",
        "images": [
          {
            "url": "https://i.scdn.co/image/ab6761610000e5eb62d52993e245cb161f89b01c",
            "height": 640,
            "width": 640
          },
          {
            "url": "https://i.scdn.co/image/ab6761610000517462d52993e245cb161f89b01c",
            "height": 320,
            "width": 320
          },
          {
            "url": "https://i.scdn.co/image/ab6761610000f17862d52993e245cb161f89b01c",
            "height": 160,
            "width": 160
          }
        ],
        "name": "Don Toliver",
        "popularity": 85,
        "type": "artist",
        "uri": "spotify:artist:4Gso3d4CscCijv0lmajZWs"
      },
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/4q3ewBCX7sLwd24euuV69X"
        },
        "followers": {
          "href": null,
          "total": 84699073
        },
        "genres": [
          "reggaeton",
          "trap latino",
          "urbano latino"
        ],
        "href": "https://api.spotify.com/v1/artists/4q3ewBCX7sLwd24euuV69X?locale=en-US%2Cen%3Bq%3D0.9",
        "id": "4q3ewBCX7sLwd24euuV69X",
        "images": [
          {
            "url": "https://i.scdn.co/image/ab6761610000e5eb9ad50e478a469448c6f369df",
            "height": 640,
            "width": 640
          },
          {
            "url": "https://i.scdn.co/image/ab676161000051749ad50e478a469448c6f369df",
            "height": 320,
            "width": 320
          },
          {
            "url": "https://i.scdn.co/image/ab6761610000f1789ad50e478a469448c6f369df",
            "height": 160,
            "width": 160
          }
        ],
        "name": "Bad Bunny",
        "popularity": 94,
        "type": "artist",
        "uri": "spotify:artist:4q3ewBCX7sLwd24euuV69X"
      }
]