import './AllEventsPage.css'
import { getCommunityEvents } from '../../APICall'
import { useState, useEffect } from 'react'
import { Attendee, Event } from '../../data/type'
import { User } from '../../data/type'
import { joinEvent,leaveEvent,getEventAttendees } from '../../APICall'
import * as moment from 'moment'
const AllEventsPage = ({user}:{user:User}) => {
  const [events, setEvents] = useState<Event[]>([])
  const [status, setStatus] = useState<boolean>(false)
  const [leaveStatus, setLeaveStatus] = useState<boolean>(false)
  const [errorLeave, setErrorLeave] = useState<boolean>(false)
  const {id} = user
  useEffect(() => {
    getCommunityEvents()
    .then(data => {
      setEvents(data.data)})
    .catch(err => console.log(err))
  },[])
  function changeStatus({user_id,event_id}:{user_id:number,event_id:number|string}) {
    joinEvent({user_id, event_id})
    .then(data => {
      setStatus(true)
      setTimeout(() => {
        setStatus(false)
      },3000)
    })
    .catch(err => console.log(err.message))
  }
  async function eventLeave({event_id}:{event_id:number}) {
    const singleEventResponse = await getEventAttendees({event_id})
    const foundAttendee = singleEventResponse.data.find((attendee:Attendee) => {
      return attendee.attributes.user_id == id
    })
    if (foundAttendee) {
      const attendee_id = foundAttendee.id
      leaveEvent({attendee_id})
      .then(data => {
        setLeaveStatus(true)
        setTimeout(() => {
          setLeaveStatus(false)
        },3000)
      })
      .catch(err => console.log(err))
    }
    else {
      setErrorLeave(true)
      setTimeout(() => {
        setErrorLeave(false)
      },3000)
    }
  }
  const allEvents = events.map((event) => {
    const date = new Date(event.attributes.date_time)
    event.attributes.newDate = moment.default(date).format('MMM-DD-YYYY');
      return (
        <div key={event.id} className='event-card'>
        <h3>{event.attributes.event_name}</h3>
        <p>Artist: {event.attributes.artist}</p>
        <p>Venue: {event.attributes.venue_name}</p>
        <p>Location: {event.attributes.location}</p>
        <p>Date & Time: {event.attributes.newDate}</p>
        <div>

        <button id='success-btn'onClick={() => 
          changeStatus({user_id: id,event_id: event.id})
        }>Join Event</button>   
        <button id='leave-btn' onClick={() => eventLeave({event_id: event.id})}>Leave Event</button>
        </div>
      </div>)
    }
  )
  return (
    <div className='all-events-page'>
     {status && <p id='status'style={{color: 'green'}}>Successfully joined event</p>}
     {leaveStatus && <p id='status'style={{color: 'green'}}>Successfully left the event</p>}
     {errorLeave && <p id='status'style={{color: 'red'}}>Attendee not found</p>}
      {events.length && allEvents}
    </div>
  )
}

export default AllEventsPage