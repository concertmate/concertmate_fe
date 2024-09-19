import './AllEventsPage.css'
import { getCommunityEvents } from '../../APICall'
import { useState, useEffect } from 'react'
import { CommunityEvent } from '../../data/type'
const AllEventsPage = () => {

const [events, setEvents] = useState<CommunityEvent[]>([])
  useEffect(() => {
    getCommunityEvents()
    .then(data => setEvents(data.data))
    .catch(err => console.log(err))
  },[])
  const allEvents = events.map((event) => (
    <div key={event.id} className='event-card'>
      <h3>{event.attributes.event_name}</h3>
      <p>Artist: {event.attributes.artist}</p>
      <p>Venue: {event.attributes.venue_name}</p>
      <p>Location: {event.attributes.location}</p>
      <p>Date & Time: {event.attributes.date_time}</p>
    </div>
  ))
  return (
    <div className='all-events-page'>
      {events.length && allEvents}
    </div>
  )
}

export default AllEventsPage