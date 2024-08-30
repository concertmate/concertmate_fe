import {useState} from 'react' 
import ArtistCard from '../ArtistCard/ArtistCard'
import ArtistShows from '../ArtistShows/ArtistShows.js'
import {User, ArtistName} from '../../data/type.js'

interface TopArtistProps {
  user: User
}

const TopArtist: React.FC<TopArtistProps>= ({user}) => {
  const [selectedArtist, setSelectedArtist] = useState<ArtistName | ''>('')

  const handleArtistSelection = (artistName:ArtistName) => {
    setSelectedArtist(artistName) 
  }
  return (
    <div className='top-artist'>
        <h2>Top Artists</h2>
        <ArtistCard user={user} onArtistClick={handleArtistSelection} />
        {selectedArtist && <ArtistShows user={user} artistName={selectedArtist}/>}
    </div>
  )
}

export default TopArtist