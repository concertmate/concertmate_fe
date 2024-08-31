import {useState} from 'react' 
import ArtistCard from '../ArtistCard/ArtistCard'
import ArtistShows from '../ArtistShows/ArtistShows.tsx'
import {User} from '../../data/type.js'

interface TopArtistProps {
  user: User;
  handleArtistSelection: (artistName: string) => void
}

const TopArtist: React.FC<TopArtistProps>= ({user,handleArtistSelection}) => {

  return (
    <div className='top-artist'>
        <h2>Top Artists</h2>
        <ArtistCard user={user} onArtistClick={handleArtistSelection} />
    </div>
  )
}

export default TopArtist