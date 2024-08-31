import React from 'react'
import SingleFriend from '../SingleFriendCard/SingleFriendCard'
import './FriendsList.css'
import { Link } from 'react-router-dom'

type Props = {}

const FriendsList = (props: Props) => {
  return (
    <div className='friends-list'>
      <h2>Friends List </h2>
    <div className='friend-card-wrapper'>
      <SingleFriend/>
    </div>
    </div>
  )
}

export default FriendsList