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
export const data3: spotifyArtist[] = [
    {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/1yAwtBaoHLEDWAnWR87hBT"
        },
        "followers": {
          "href": null,
          "total": 1480295
        },
        "genres": [
          "alternative rock",
          "chamber pop",
          "indie rock",
          "indietronica",
          "modern rock",
          "washington indie"
        ],
        "href": "https://api.spotify.com/v1/artists/1yAwtBaoHLEDWAnWR87hBT?locale=en-US%2Cen%3Bq%3D0.9",
        "id": "1yAwtBaoHLEDWAnWR87hBT",
        "images": [
          {
            "url": "https://i.scdn.co/image/ab6761610000e5eb39b413eb76d2ae87496d76b8",
            "height": 640,
            "width": 640
          },
          {
            "url": "https://i.scdn.co/image/ab6761610000517439b413eb76d2ae87496d76b8",
            "height": 320,
            "width": 320
          },
          {
            "url": "https://i.scdn.co/image/ab6761610000f17839b413eb76d2ae87496d76b8",
            "height": 160,
            "width": 160
          }
        ],
        "name": "Modest Mouse",
        "popularity": 63,
        "type": "artist",
        "uri": "spotify:artist:1yAwtBaoHLEDWAnWR87hBT"
      },
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/0L8ExT028jH3ddEcZwqJJ5"
        },
        "followers": {
          "href": null,
          "total": 21158004
        },
        "genres": [
          "alternative rock",
          "funk metal",
          "funk rock",
          "permanent wave",
          "rock"
        ],
        "href": "https://api.spotify.com/v1/artists/0L8ExT028jH3ddEcZwqJJ5?locale=en-US%2Cen%3Bq%3D0.9",
        "id": "0L8ExT028jH3ddEcZwqJJ5",
        "images": [
          {
            "url": "https://i.scdn.co/image/ab6761610000e5ebc33cc15260b767ddec982ce8",
            "height": 640,
            "width": 640
          },
          {
            "url": "https://i.scdn.co/image/ab67616100005174c33cc15260b767ddec982ce8",
            "height": 320,
            "width": 320
          },
          {
            "url": "https://i.scdn.co/image/ab6761610000f178c33cc15260b767ddec982ce8",
            "height": 160,
            "width": 160
          }
        ],
        "name": "Red Hot Chili Peppers",
        "popularity": 83,
        "type": "artist",
        "uri": "spotify:artist:0L8ExT028jH3ddEcZwqJJ5"
      }
]