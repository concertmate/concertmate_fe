import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../MyEvents/MyEvents.css'
import { User,Event } from '../../data/type'
import { getUserEvents } from '../../APICall'
import '../EventCard/EventCard.css'
import * as moment from 'moment'

interface MyEventsProps {
  user:User;
  changeUserEventIDs:(ids: string[]) => void;
}

const MyEvents:React.FC<MyEventsProps> = ({user,changeUserEventIDs}) => {
  const [myevents, setMyEvents] = useState<Event[]>([])
  const {id} = user
  useEffect(() => {
    getUserEvents(id)
    .then(data => {
      const ids = data.data.map((data:Event) => data.id)
      changeUserEventIDs(ids)
      setMyEvents(data.data)})
    .catch(err => console.log(err))
  },[])
  const userEvents = myevents.map((event) => {
    const date = new Date(event.attributes.date_time)
    event.attributes.newDate = moment.default(date).format('MMM-DD-YYYY');
    return (
    <Link to={`/eventPage/${event.id}`}>
      <div key={event.id} className='event-card'>
        <h3>{event.attributes.event_name}</h3>
        <p>Artist: {event.attributes.artist}</p>
        <p>Venue: {event.attributes.venue_name}</p>
        <p>Location: {event.attributes.location}</p>
        <p>Date: {event.attributes.newDate}</p>   
      </div>
    </Link>
  )})
  return (
    <div className='my-event-widget'>
      <h2>My Events</h2>
      <div className='event-wrapper'>
        {myevents ? userEvents : <h3>You have no upcoming shows...</h3>}
        <div className='bttn-box'>
          <Link to='/createEvent'> <button>Create Event</button></Link>
          <Link to='/allEventsPage'> <button>Community Events</button></Link>
        </div>
      </div>
    </div>
  )
}

export default MyEvents