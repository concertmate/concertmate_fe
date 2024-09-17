import {useState} from 'react'
import { User } from '../../data/type'
import { tmData1 } from '../../data/TicketMasterData1'
import {postUserEvent} from '../../APICall';
import './CreateEventForm.css'
interface CreateEventFormProps {
    user: User,
    selectedArtistIndex: number;
    showOption: number;
}
const CreateEventForm: React.FC<CreateEventFormProps> = ({user, selectedArtistIndex, showOption}) => {
  const [eventName, setEventName] = useState<string>('')
  const [formError, setFormError] = useState<boolean>(false);

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    const {id} = user
    const tmData = tmData1[id-34]
    const singleShowData = tmData[selectedArtistIndex][showOption]
    let singleShowDataUrl = singleShowData.url.split('/')
    if (!singleShowData.url.includes("ticketmaster")) {
     singleShowDataUrl[4] = 'No Ticketmaster id found'
    }
    if (singleShowDataUrl[4] === 'event') {
      singleShowDataUrl[4] = singleShowDataUrl[5]
    }
    const userEvent = {
      event_name: eventName,
      venue_name: singleShowData.location.name,
      date_time: singleShowData.startDate,
      artist: singleShowData.name,
      location: `${singleShowData.location.address.streetAddress}${singleShowData.location.address.addressLocality},${singleShowData.location.address.addressRegion} ${singleShowData.location.address.postalCode}`,
      user_id: id
    };
    const eventProperties = new Set(Object.values(userEvent))
    if (eventProperties.has("")) {
      setFormError(true)
    }
    else {
      setFormError(false)
      postUserEvent({id:id,userEvent: userEvent})
      .then(data => {
        console.log(data)
      })
      .catch(err => console.log(err))
    }
  }
  
  return (
    <div className='form-wrapper'>
      <form >
        <h3>Create Event</h3>
        <p className='form-error'style={{visibility: formError? 'visible' : 'hidden'}}>Select all event properties</p>
        <label htmlFor='event-name'></label>
        <input placeholder='Event Name' id='event-name'type='text' name='event-name' onChange={(e) => setEventName(e.target.value)}/>
        <button type='submit' onClick={(e) => handleSubmit(e)}>Create Event</button>
      </form> 
    </div>
  )
}

export default CreateEventForm;