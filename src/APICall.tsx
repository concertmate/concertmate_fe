import { PostEvent } from "./data/type"
interface Props {
    id: number;
    userEvent: PostEvent;
}
interface JoinProps {
  user_id: number | string;
  event_id: number | string;
}
export const postUserEvent = ({id,userEvent}:Props) => {
   const baseURL = 'https://concertmate-rails-9f7aa871924c.herokuapp.com/'
   const newEvent = {event: userEvent}
   return fetch(`${baseURL}api/v1/users/${id}/user_events`, {
        method: 'POST',
        headers: {
          "Content-Type":"application/json"
        },
        body: JSON.stringify(newEvent), 
      })
  .then(resp => {
    return resp.json()
  })
}

export const getAllUsers = () => {
  const baseURL = 'https://concertmate-rails-9f7aa871924c.herokuapp.com/'
  return fetch(`${baseURL}api/v1/users`)
  .then(resp => {
    if (!resp.ok) {
      throw new Error ('could not fetch')
    }
    return resp.json()
  })
}

export const getUserEvents = (id:number) => {
    const baseURL = 'https://concertmate-rails-9f7aa871924c.herokuapp.com/'
    return fetch(`${baseURL}api/v1/users/${id}/user_events`)
    .then(resp => {
      if (!resp.ok) {
        throw new Error ('could not fetch')
      }
      return resp.json()
    })
}

export const getCommunityEvents = () => {
   const baseURL = 'https://concertmate-rails-9f7aa871924c.herokuapp.com/'
   return fetch(`${baseURL}api/v1/events`)
   .then(resp => {
    if (!resp.ok) {
      throw new Error ('could not fetch')
    }
    return resp.json()
  })
}

export const joinEvent = ({user_id, event_id}:JoinProps) => {
     const baseURL = 'https://concertmate-rails-9f7aa871924c.herokuapp.com/'
     const joinAttendee = {
      'attendee': {
        'user_id':user_id,
        'event_id':event_id
      }
     }
     return fetch(`${baseURL}api/v1/attendees`,{
      method:'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(joinAttendee)
     })
    .then(resp => {
      console.log(resp)
      if (!resp.ok) {
        throw new Error ('could not fetch')
      }
      return resp.json()
  })
}
export const getEventAttendees = ({event_id}:{event_id:number}) => {
   const baseURL = 'https://concertmate-rails-9f7aa871924c.herokuapp.com/'
   return fetch(`${baseURL}api/v1/attendees?event_id=${event_id}`)
   .then(resp => {
    if (!resp.ok) {
      throw new Error ('could not fetch')
    }
    return resp.json()
  })
}

export const leaveEvent = ({attendee_id}:{attendee_id:string}) => {
  console.log(attendee_id)
   const baseURL = 'https://concertmate-rails-9f7aa871924c.herokuapp.com/'
  return fetch(`${baseURL}api/v1/attendees/${attendee_id}`, {
    method: 'DELETE'
  })
  .then(resp => {
    console.log(resp)
    if (!resp.ok) {
      throw new Error ('could not fetch')
    }
    return resp.json()
  })
}