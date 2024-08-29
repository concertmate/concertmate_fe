import './ArtistCard.css'
import {data} from '../../data/userSpotifyData1.ts'

import {User, SpotifyArtist} from '../../data/type.js'


interface ArtistCardProps {
  user: User
}
const ArtistCard: React.FC<ArtistCardProps> = ({user}) => { //id

  const {id, email, friends} = user
  const userData = data[id-1]
  const artistCards = userData.map(({external_urls,followers,genres,href,id,images,name,popularity,type,uri}) => {

    return (
      <>
        <div className='artist-card'>
          <img src={images[2].url}/>
          <p>{name}</p>
          {genres.map(genre => {
            return (<div>
              {genre}
            </div>)})}
        </div>
      </>
    )
  })
  return (
    <div>
      {artistCards}
    </div>
  )
}

export default ArtistCard