import { PostEvent } from "./data/type"
//https://concertmate-be-914112705dc5.herokuapp.com/api/users/1/events
interface Props {
    id: number;
    userEvent: PostEvent;
}
const postUserEvent = ({id,userEvent}:Props) => {
   const baseURL = 'https://concertmate-rails-9f7aa871924c.herokuapp.com/'
   const newEvent = {event: userEvent}
   console.log(newEvent)
   return fetch(`${baseURL}api/v1/users/${id}/user_events`, {
        method: 'POST',
        headers: {
          "Content-Type":"application/json"
        },
        body: JSON.stringify(newEvent), 
      })
  .then(resp => {
    console.log(resp)
    return resp.json()
  })

}

export default postUserEvent
