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
export const data2: spotifyArtist[] = [
    {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/2yEwvVSSSUkcLeSTNyHKh8"
        },
        "followers": {
          "href": null,
          "total": 3816079
        },
        "genres": ["alternative metal", "art rock", "nu metal", "post-grunge", "progressive metal", "progressive rock", "rock"],
        "href": "https://api.spotify.com/v1/artists/2yEwvVSSSUkcLeSTNyHKh8?locale=en-US%2Cen%3Bq%3D0.9",
        "id": "2yEwvVSSSUkcLeSTNyHKh8",
        "images": [
          {
            "url": "https://i.scdn.co/image/ab6761610000e5eb13f5472b709101616c87cba3",
            "height": 640,
            "width": 640
          },
          {
            "url": "https://i.scdn.co/image/ab6761610000517413f5472b709101616c87cba3",
            "height": 320,
            "width": 320
          },
          {
            "url": "https://i.scdn.co/image/ab6761610000f17813f5472b709101616c87cba3",
            "height": 160,
            "width": 160
          }
        ],
        "name": "TOOL",
        "popularity": 70,
        "type": "artist",
        "uri": "spotify:artist:2yEwvVSSSUkcLeSTNyHKh8"
      },
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/2YZyLoL8N0Wb9xBt1NhZWg"
        },
        "followers": {
          "href": null,
          "total": 32098238
        },
        "genres": [
          "conscious hip hop",
          "hip hop",
          "rap",
          "west coast rap"
        ],
        "href": "https://api.spotify.com/v1/artists/2YZyLoL8N0Wb9xBt1NhZWg?locale=en-US%2Cen%3Bq%3D0.9",
        "id": "2YZyLoL8N0Wb9xBt1NhZWg",
        "images": [
          {
            "url": "https://i.scdn.co/image/ab6761610000e5eb437b9e2a82505b3d93ff1022",
            "height": 640,
            "width": 640
          },
          {
            "url": "https://i.scdn.co/image/ab67616100005174437b9e2a82505b3d93ff1022",
            "height": 320,
            "width": 320
          },
          {
            "url": "https://i.scdn.co/image/ab6761610000f178437b9e2a82505b3d93ff1022",
            "height": 160,
            "width": 160
          }
        ],
        "name": "Kendrick Lamar",
        "popularity": 92,
        "type": "artist",
        "uri": "spotify:artist:2YZyLoL8N0Wb9xBt1NhZWg"
      },

]