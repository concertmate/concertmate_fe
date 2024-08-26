import EventCard from '../EventCard/EventCard'
import { Link } from 'react-router-dom'
import '../MyEvents/MyEvents.css'

type Props = {}

const MyEvents = ({events}: Props) => {
  return (
    <div className='my-event-widget'>
      {/* {events? <h3>You have no upcoming shows...</h3> : } */}
        <Link to='/eventPage/:eventId'><EventCard /></Link>
        <Link to='/createEvent'> Create Event</Link>
        <Link to='/allEventsPage'> My Events</Link>
    </div>
  )
}

export default MyEvents
