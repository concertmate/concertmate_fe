import './AllEventsPage.css'
import { getCommunityEvents } from '../../APICall'
import { useState, useEffect } from 'react'
import { Event } from '../../data/type'
import { User } from '../../data/type'
const AllEventsPage = ({user,userEventIDs}:{user:User, userEventIDs:string[]}) => {

const [events, setEvents] = useState<Event[]>([])
  useEffect(() => {
    getCommunityEvents()
    .then(data => {
      console.log(data.data)
      setEvents(data.data)})
    .catch(err => console.log(err))
  },[])
  console.log(userEventIDs)
  //  const filteredEvents = events.filter(event => event. !== )
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