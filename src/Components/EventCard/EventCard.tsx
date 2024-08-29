import React from 'react'
import { Link } from 'react-router-dom'
import './EventCard.css'

type Props = {}

const EventCard = (props: Props) => {
  return (
  <div className='event-card'>  
    <Link to='/eventPage/:eventId'>EventCard</ Link>
  </div>
  )
}

export default EventCard