import React from 'react'
import './LandingPage.css'
import MyEvents from '../MyEvents/MyEvents'
import FriendsList from '../FriendsList/FriendsList'

type Props = {}

const LandingPage = (props: Props) => {
  return (
    <div className='landing-page'>
        <MyEvents />
        <FriendsList />
    </div>
  )
}

export default LandingPage