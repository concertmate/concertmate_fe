import './ArtistCard.css'
import { data } from '../../data/userSpotifyData1.ts'
import { User } from '../../data/type.js'


interface ArtistCardProps {
  user: User
  onArtistClick: (artistName: string) => void
}
const ArtistCard: React.FC<ArtistCardProps> = ({ user, onArtistClick }) => {

  const { id } = user
  const userData = data[id - 1]
  const artistCards = userData.map(({ genres, id, images, name }) => {

    return (
      <>
        <div
          key={id} className='artist-card'
          onClick={() => onArtistClick(name)} //style cursor to pointer for this too
          >
          <img src={images[2].url} alt={name} />
          <p>{name}</p>
          {genres.map((genre, index) => (
            <div key={index}>{genre}</div>
          ))}
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