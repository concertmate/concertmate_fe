import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../MyEvents/MyEvents.css'
import { User,Event } from '../../data/type'
import { getUserEvents } from '../../APICall'
import '../EventCard/EventCard.css'
import * as moment from 'moment'

interface MyEventsProps {
  user:User;
}

const MyEvents:React.FC<MyEventsProps> = ({user}) => {
  const [myevents, setMyEvents] = useState<Event[]>([])
  const {id} = user
  useEffect(() => {
    getUserEvents(id)
    .then(data => {
      setMyEvents(data.data)})
    .catch(err => console.log(err))
  },[])
  const userEvents = myevents.map((event) => {
    const date = new Date(event.attributes.date_time)
    event.attributes.date_time = moment.default(date).format('MMM-DD-YYYY');
    return (
      <div key={event.id} className='event-card'>
        <h3>{event.attributes.event_name}</h3>
        <p>Artist: {event.attributes.artist}</p>
        <p>Venue: {event.attributes.venue_name}</p>
        <p>Location: {event.attributes.location}</p>
        <p>Date: {event.attributes.date_time}</p>   
      </div>
  )})
  return (
    <div className='my-event-widget'>
      <h2>My Events</h2>
      <div className='event-wrapper'>
        {myevents.length ? userEvents : <h3>You have no upcoming shows...</h3>}
        <div className='bttn-box'>
          <Link to='/createEvent'> <button>Create Event</button></Link>
          <Link to='/allEventsPage'> <button>Community Events</button></Link>
        </div>
      </div>
    </div>
  )
}

export default MyEvents