import EventCard from '../EventCard/EventCard'
import { Link } from 'react-router-dom'
import '../MyEvents/MyEvents.css'

type Props = {}

const MyEvents = ({events}: Props) => {
  return (
    <div className='my-event-widget'>
      <h2>My Events</h2>
      <div className='event-wrapper'>
        {/* {events? <h3>You have no upcoming shows...</h3> : } */}
        <EventCard />
        <EventCard />

        <div className='bttn-box'>
          <Link to='/createEvent'> <p>Create Event</p></Link>
          <Link to='/allEventsPage'> <p>My Events</p></Link>
        </div>
        
      </div>
      
    </div>
  )
}

export default MyEvents
