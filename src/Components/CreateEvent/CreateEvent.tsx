import React, {useState} from 'react'
import TopArtist from '../TopArtist/TopArtist'
import './CreateEvent.css'
import {User, PostEvent} from '../../data/type.js'
import CreateEventForm from '../CreateEventForm/CreateEventForm.tsx'
import ArtistShows from '../ArtistShows/ArtistShows.js'
interface CreateEventProps {
  user: User
}
//  event_name: string;
// venue_name: string;
// date_time: string;
// artist: string;
// location: string;
// spotify_artist_id: string;
// ticketmaster_event_id: string;
const CreateEvent: React.FC<CreateEventProps> = ({user}) => {
  function postEvent(userEvent: PostEvent) {

    fetch('/api/events', {
      method: 'POST',
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify(userEvent), 
    })
    
  }  const [selectedArtist, setSelectedArtist] = useState<string>('')
  const handleArtistSelection = (artistName:string) => {
    setSelectedArtist(artistName) 
  }
  return (
    <div className='create-event-wrapper'>
      <CreateEventForm postEvent={postEvent} user={user}/>
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