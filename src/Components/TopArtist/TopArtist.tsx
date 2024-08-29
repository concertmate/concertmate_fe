import ArtistCard from '../ArtistCard/ArtistCard'
import { Link } from 'react-router-dom'

import {User} from '../../data/type.js'

interface TopArtistProps {
  user: User
}

const TopArtist: React.FC<TopArtistProps>= ({user}) => {
  return (
    <div className='top-artist'>
        <h2>Top Artists</h2>

        <ArtistCard user={user}/>

    </div>
  )
}

export default TopArtist