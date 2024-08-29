import React from 'react'
import TopArtist from '../TopArtist/TopArtist'
import './CreateEvent.css'

type Props = {}

const CreateEvent = (props: Props) => {
  return (
    <div className='create-event-wrapper'>
        <form>
            <h3>Create Event</h3>
            <input type='text'/>
            <input type='text'/>
            <input type='text'/>
            <input type='text'/>
        </form>
       <TopArtist />
    </div>
  )
}

export default CreateEvent