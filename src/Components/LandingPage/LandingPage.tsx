import React, {useContext} from 'react'
import './LandingPage.css'
import MyEvents from '../MyEvents/MyEvents'
import FriendsList from '../FriendsList/FriendsList'
import LoginPage from '../LoginPage/LoginPage'
import AppContext from  '../../Context/AppContext.tsx'


const LandingPage = ({handleAuthentication: Function}) => {
  const {authenticated} = useContext(AppContext)
  return (
    <>
    {authenticated? (<div className='landing-page'>
        <MyEvents />
        <FriendsList />
    </div>) : (<LoginPage/>)}
    </>
  )
}

export default LandingPage