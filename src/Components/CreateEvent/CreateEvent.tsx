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
  const [selectedArtist, setSelectedArtist] = useState<string>('')
  const [selectedArtistIndex, setSelectedArtistIndex] = useState<number>(0)
  const [showOption, setShowOption] = useState<number>(0)
  function postEvent(userEvent: PostEvent) {
    fetch('/api/events', {
      method: 'POST',
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify(userEvent), 
    })}
    
    const handleArtistSelection = (artistName:string) => {
      setSelectedArtist(artistName) 
    }
    const handleSingleArtistSelection = (artistSelection: number) => {
      setSelectedArtistIndex(artistSelection)
    } 
    const handleShowOption = (showSelection: number) => {
      setShowOption(showSelection)
    }
  return (
    <div className='create-event-wrapper'>
        <CreateEventForm postEvent={postEvent} user={user} selectedArtistIndex={selectedArtistIndex} showOption={showOption} selectedArtist={selectedArtist}/>
        {selectedArtist && <ArtistShows user={user} artistName={selectedArtist} 
        handleSingleArtistSelection={handleSingleArtistSelection} selectedArtistIndex={selectedArtistIndex}
        showOption={showOption} handleShowOption={handleShowOption}/>}
      
       <TopArtist user={user} handleArtistSelection={handleArtistSelection}/>
    </div>
  )
}

export default CreateEvent