interface spotifyArtist {
  external_urls: { spotify: string };
  followers: { href: null | string, total: number };
  genres: string[];
  href: string;
  id: string;
  images: [{ url: string, height: number, width: number }, { url: string, height: number, width: number }, { url: string, height: number, width: number }];
  name: string;
  popularity: number;
  type: string;
  uri: string;
}
export const data: spotifyArtist[][] =
  [
    [
      {
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
    ],
    [
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
    ], [
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
    ], [
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
    ],
    [{
      "external_urls": {
        "spotify": "https://open.spotify.com/artist/5nki7yRhxgM509M5ADlN1p"
      },
      "followers": {
        "href": null,
        "total": 1037144
      },
      "genres": ["edm", "electro house", "future house", "house", "pop dance", "progressive electro house", "progressive house"],
      "href": "https://api.spotify.com/v1/artists/5nki7yRhxgM509M5ADlN1p?locale=en-US%2Cen%3Bq%3D0.9",
      "id": "5nki7yRhxgM509M5ADlN1p",
      "images": [
        {
          "url": "https://i.scdn.co/image/ab6761610000e5ebe0de3617061247aa35ff7865",
          "height": 640,
          "width": 640
        },
        {
          "url": "https://i.scdn.co/image/ab67616100005174e0de3617061247aa35ff7865",
          "height": 320,
          "width": 320
        },
        {
          "url": "https://i.scdn.co/image/ab6761610000f178e0de3617061247aa35ff7865",
          "height": 160,
          "width": 160
        }
      ],
      "name": "Oliver Heldens",
      "popularity": 69,
      "type": "artist",
      "uri": "spotify:artist:5nki7yRhxgM509M5ADlN1p"
    },{
      "external_urls": {
        "spotify": "https://open.spotify.com/artist/4oLeXFyACqeem2VImYeBFe"
      },
      "followers": {
        "href": null,
        "total": 1681439
      },
      "genres": [
        "edm",
        "house",
        "stutter house"
      ],
      "href": "https://api.spotify.com/v1/artists/4oLeXFyACqeem2VImYeBFe?locale=en-US%2Cen%3Bq%3D0.9",
      "id": "4oLeXFyACqeem2VImYeBFe",
      "images": [
        {
          "url": "https://i.scdn.co/image/ab6761610000e5eb2302e6ba3091fcbc6fd5bb54",
          "height": 640,
          "width": 640
        },
        {
          "url": "https://i.scdn.co/image/ab676161000051742302e6ba3091fcbc6fd5bb54",
          "height": 320,
          "width": 320
        },
        {
          "url": "https://i.scdn.co/image/ab6761610000f1782302e6ba3091fcbc6fd5bb54",
          "height": 160,
          "width": 160
        }
      ],
      "name": "Fred again..",
      "popularity": 81,
      "type": "artist",
      "uri": "spotify:artist:4oLeXFyACqeem2VImYeBFe"
    }],[
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/5R3Hr2cnCCjt220Jmt2xLf"
        },
        "followers": {
          "href": null,
          "total": 1144231
        },
        "genres": [
          "brostep",
          "edm",
          "electro house",
          "moombahton",
          "pop dance",
          "progressive electro house",
          "slap house"
        ],
        "href": "https://api.spotify.com/v1/artists/5R3Hr2cnCCjt220Jmt2xLf?locale=en-US%2Cen%3Bq%3D0.9",
        "id": "5R3Hr2cnCCjt220Jmt2xLf",
        "images": [
          {
            "url": "https://i.scdn.co/image/ab6761610000e5eb7a10c0a271f96529bf28f97f",
            "height": 640,
            "width": 640
          },
          {
            "url": "https://i.scdn.co/image/ab676161000051747a10c0a271f96529bf28f97f",
            "height": 320,
            "width": 320
          },
          {
            "url": "https://i.scdn.co/image/ab6761610000f1787a10c0a271f96529bf28f97f",
            "height": 160,
            "width": 160
          }
        ],
        "name": "Dillon Francis",
        "popularity": 62,
        "type": "artist",
        "uri": "spotify:artist:5R3Hr2cnCCjt220Jmt2xLf"
      },{
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/7CajNmpbOovFoOoasH2HaY"
        },
        "followers": {
          "href": null,
          "total": 22848606
        },
        "genres": [
          "dance pop",
          "edm",
          "electro house",
          "house",
          "pop",
          "progressive house",
          "uk dance"
        ],
        "href": "https://api.spotify.com/v1/artists/7CajNmpbOovFoOoasH2HaY?locale=en-US%2Cen%3Bq%3D0.9",
        "id": "7CajNmpbOovFoOoasH2HaY",
        "images": [
          {
            "url": "https://i.scdn.co/image/ab6761610000e5eb014a3c1730d960c66396ed63",
            "height": 640,
            "width": 640
          },
          {
            "url": "https://i.scdn.co/image/ab67616100005174014a3c1730d960c66396ed63",
            "height": 320,
            "width": 320
          },
          {
            "url": "https://i.scdn.co/image/ab6761610000f178014a3c1730d960c66396ed63",
            "height": 160,
            "width": 160
          }
        ],
        "name": "Calvin Harris",
        "popularity": 87,
        "type": "artist",
        "uri": "spotify:artist:7CajNmpbOovFoOoasH2HaY"
      }
    ],[
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/2RdwBSPQiwcmiDo9kixcl8"
        },
        "followers": {
          "href": null,
          "total": 4769627
        },
        "genres": [
          "dance pop",
          "pop"
        ],
        "href": "https://api.spotify.com/v1/artists/2RdwBSPQiwcmiDo9kixcl8?locale=en-US%2Cen%3Bq%3D0.9",
        "id": "2RdwBSPQiwcmiDo9kixcl8",
        "images": [
          {
            "url": "https://i.scdn.co/image/ab6761610000e5ebf0789cd783c20985ec3deb4e",
            "height": 640,
            "width": 640
          },
          {
            "url": "https://i.scdn.co/image/ab67616100005174f0789cd783c20985ec3deb4e",
            "height": 320,
            "width": 320
          },
          {
            "url": "https://i.scdn.co/image/ab6761610000f178f0789cd783c20985ec3deb4e",
            "height": 160,
            "width": 160
          }
        ],
        "name": "Pharrell Williams",
        "popularity": 81,
        "type": "artist",
        "uri": "spotify:artist:2RdwBSPQiwcmiDo9kixcl8"
      },{
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/53XhwfbYqKCa1cC15pYq2q"
        },
        "followers": {
          "href": null,
          "total": 54492490
        },
        "genres": [
          "modern rock",
          "pop",
          "rock"
        ],
        "href": "https://api.spotify.com/v1/artists/53XhwfbYqKCa1cC15pYq2q?locale=en-US%2Cen%3Bq%3D0.9",
        "id": "53XhwfbYqKCa1cC15pYq2q",
        "images": [
          {
            "url": "https://i.scdn.co/image/ab6761610000e5ebab47d8dae2b24f5afe7f9d38",
            "height": 640,
            "width": 640
          },
          {
            "url": "https://i.scdn.co/image/ab67616100005174ab47d8dae2b24f5afe7f9d38",
            "height": 320,
            "width": 320
          },
          {
            "url": "https://i.scdn.co/image/ab6761610000f178ab47d8dae2b24f5afe7f9d38",
            "height": 160,
            "width": 160
          }
        ],
        "name": "Imagine Dragons",
        "popularity": 88,
        "type": "artist",
        "uri": "spotify:artist:53XhwfbYqKCa1cC15pYq2q"
      }
    ]
  ]
