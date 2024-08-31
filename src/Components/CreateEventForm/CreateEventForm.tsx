import {useState} from 'react'
import { User, PostEvent } from '../../data/type'
import { tmData1 } from '../../data/TicketMasterData1'

//  event_name: string;
// venue_name: string; ticketmaster
// date_time: string; ticketmaster
// artist: string; spotify
// location: string; ticketmaster
// spotify_artist_id: string; spotify
// ticketmaster_event_id: string; spotify
interface CreateEventFormProps {
    user: User,
    postEvent: (userEvent: PostEvent) => void;
    selectedArtist: 
}
const CreateEventForm: React.FC<CreateEventFormProps> = ({user, postEvent, selectedArtist}) => {
  function handleSubmit(e) {
    const {id} = user
    const tmData = tmData1[id-1]
    let ticketmaster_event_id;
    
    let singleArtistShowsData = tmData.find(artist => artist.name === selectedArtist)
    if (!singleArtistShowsData.url.includes("ticketmaster")) {
      
    }
    
    const userEvent = {
      event_name: ;
      venue_name: ;
      date_time: ;
      artist: ;
      location: ;
      spotify_artist_id: ;
      ticketmaster_event_id: ;
    };
    postEvent(userEvent)
  }
  return (
    <div className='form-wrapper'>
      <form >
        <h3>Create Event</h3>
        <label htmlFor='event-name'></label>
        <input placeholder='Event Name' id='event-name'type='text' name='event-name'/>
        <label htmlFor='venu'></label>
        <button type='submit'>Create Event</button>
    </form> 
    </div>


  )
}

export default CreateEventForm;