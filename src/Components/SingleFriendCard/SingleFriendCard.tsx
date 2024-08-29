import React from 'react'
import { Link } from 'react-router-dom'
import './SingleFriendCard.css'

type Props = {}

const SingleFriendCard = (props: Props) => {
  return (
    <div className='single-friend-card'>
      <Link to='/singleFriend/:friendId'>Single Friend Card</Link>
    </div>
  )
}

export default SingleFriendCard