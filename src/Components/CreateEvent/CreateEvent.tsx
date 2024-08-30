import React from 'react'
import TopArtist from '../TopArtist/TopArtist'
import './CreateEvent.css'
import {User} from '../../data/type.js'

interface CreateEventProps {
  user: User
}

const CreateEvent: React.FC<CreateEventProps> = ({user}) => {


  return (
    <div className='create-event-wrapper'>
        <form>
            <h3>Create Event</h3>
            <input placeholder='' type='text'/>
            <input type='text'/>
            <input type='text'/>
            <input type='text'/>
        </form>
       <TopArtist user={user}/>
    </div>
  )
}

export default CreateEvent