import React from 'react'
import { Link } from 'react-router-dom'
import './EventCard.css'

type Props = {}

const EventCard = (props: Props) => {
  return (
    <Link to='/eventPage/:eventId'>
      <div className='event-card'>  
      <h2>My Event</h2>
        <p></p>
      </div>
    </ Link>
  )
}

export default EventCard