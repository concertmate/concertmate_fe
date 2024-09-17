import './ArtistCard.css'
import { data } from '../../data/userSpotifyData1.ts'
import { User } from '../../data/type.js'


interface ArtistCardProps {
  user: User
  onArtistClick: (artistName: string) => void
}
const ArtistCard: React.FC<ArtistCardProps> = ({ user, onArtistClick }) => {
  const { id } = user
  const userData = data[id - 34]
  const artistCards = userData.map(({ genres, id, images, name }) => {
    let artistID = id;
    return (
      <div
        key={artistID} className='artist-card'
        onClick={() => onArtistClick(name)}
        >
          <div className='artist-img-container'>
            <img src={images[2].url} alt={name} />
          </div>
        <div className='artist-info-container'>
          <p>{name}</p>
        <div className='genre-container'>{genres.slice(0,5).map((genre, index) => (
          <div key={index}className='genre-tag'>{genre}</div>
        ))}</div>
        </div>
      </div>
    )
  })
  return (
    <div>
      {artistCards}
    </div>
  )
}

export default ArtistCard