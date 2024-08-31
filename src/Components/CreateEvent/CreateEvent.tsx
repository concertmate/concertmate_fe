import React, {useState} from 'react'
import TopArtist from '../TopArtist/TopArtist'
import './CreateEvent.css'
import {User} from '../../data/type.js'
import ArtistShows from '../ArtistShows/ArtistShows.js'
interface CreateEventProps {
  user: User
}

const CreateEvent: React.FC<CreateEventProps> = ({user}) => {
  const [selectedArtist, setSelectedArtist] = useState<string>('')
  const handleArtistSelection = (artistName:string) => {
    setSelectedArtist(artistName) 
  }
  return (
    <div className='create-event-wrapper'>
      <div>
        <form>
            <h3>Create Event</h3>
            <input placeholder='' type='text'/>
        </form>
        {selectedArtist && <ArtistShows user={user} artistName={selectedArtist}/>}
      </div>
       <TopArtist user={user} handleArtistSelection={handleArtistSelection}/>
    </div>
  )
}

export default CreateEvent