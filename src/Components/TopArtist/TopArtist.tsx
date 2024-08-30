import {useState} from 'react' 
import ArtistCard from '../ArtistCard/ArtistCard'
import ArtistShows from '../ArtistShows/ArtistShows'
import {User} from '../../data/type.js'

interface TopArtistProps {
  user: User
}

const TopArtist: React.FC<TopArtistProps>= ({user}) => {
  const [selectedArtist, setSelectedArtist] = useState<string|null>(null)

  const handleArtistSelection = (artistName:string) => {
    setSelectedArtist(artistName) 
  }
  return (
    <div className='top-artist'>
        <h2>Top Artists</h2>
        <ArtistCard user={user} onArtistClick={handleArtistSelection} />
        {selectedArtist && <ArtistShows artistName={selectedArtist}/>}
    </div>
  )
}

export default TopArtist