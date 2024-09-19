import './AllEventsPage.css'
import { getCommunityEvents, getUserEvents } from '../../APICall'
import { useState, useEffect } from 'react'
import { Event } from '../../data/type'
import { User } from '../../data/type'
const AllEventsPage = ({user}:{user:User}) => {
  const [userEvents, setUserEvents] = useState<Event[]>([])
  const [events, setEvents] = useState<Event[]>([])
  const {id} = user
  useEffect(() => {
    getCommunityEvents()
    .then(data => {
      console.log(data.data)
      setEvents(data.data)})
    .catch(err => console.log(err))
    getUserEvents(id)
    .then(data => {
      const ids = data.data.map((data:Event) => {
        return data.id
      })
      const nonUserEvents = new Set(ids)
      const filteredEvents = events.filter(event => nonUserEvents.has(event.id)) 
      setUserEvents(filteredEvents)
    })
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