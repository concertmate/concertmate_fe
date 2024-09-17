import { PostEvent } from "./data/type"
//https://concertmate-be-914112705dc5.herokuapp.com/api/users/1/events
interface Props {
    id: number;
    userEvent: PostEvent;
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

export const getUserEvents = ({id}:{id:number}) => {
    const baseURL = 'https://concertmate-rails-9f7aa871924c.herokuapp.com/'
    return fetch(`${baseURL}api/v1/users/${id}/user_events`)
    .then(resp => {
      if (!resp.ok) {
        throw new Error ('could not fetch')
      }
      return resp.json()
    })
}