import { PostEvent } from "./data/type"

interface Props {
    id: number;
    userEvent: PostEvent;
}
const postUserEvent = ({id,userEvent}:Props) => {
  console.log(id,userEvent)
   const baseURL = 'https://concertmate-be-914112705dc5.herokuapp.com/'
   return fetch(`${baseURL}/api/users/${id}/events`, {
        method: 'POST',
        headers: {
          "Content-Type":"application/json"
        },
        body: JSON.stringify(userEvent), 
      })
  .then(resp => {
    console.log(resp)
    return resp.json()
  })

}

export default postUserEvent
