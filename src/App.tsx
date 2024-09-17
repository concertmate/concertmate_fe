import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/Header/Header.jsx'
import LoginPage from './Components/LoginPage/LoginPage.js'
import LandingPage from './Components/LandingPage/LandingPage.js'
import MyEvents from './Components/MyEvents/MyEvents.js'
import CreateEvent from './Components/CreateEvent/CreateEvent.js'
import FriendsList from './Components/FriendsList/FriendsList.js'
import EventPage from './Components/EventPage/EventPage.js'
import SingleFriendPage from './Components/SingleFriendPage/SingleFriendPage.js'
import ArtistPage from './Components/ArtistPage/ArtistPage.js'
import React, { useState } from 'react'
import {User} from './data/type.js'

const AuthContext =React.createContext<boolean>(false);

const App = () => {
  const [authenticated, setAuthenticated] = useState<boolean>(false)
  const [user, setUser] = useState<User>({id: 1,email:'',name:'',created_at:'',updated_at:''})
  function handleAuthentication(isAuthenticated: boolean) {
      setAuthenticated(isAuthenticated)
  }
  function changeUser(foundUser: User) {
    setUser(foundUser)
  }

  return (
    <>
    <AuthContext.Provider value={authenticated}>
    <Header/>
    <Routes>
        <Route path="/" element={<LoginPage changeUser={changeUser} handleAuthentication={handleAuthentication}/>} /> 
          <Route
            path="/landing"
            element={<LandingPage loggedInUser={user} />} 
          />
        <Route path='/createEvent' element={<CreateEvent user={user}/>}/>
        <Route path='/myevents' element={<MyEvents />}/>
        <Route path='/friendslist' element={<FriendsList loggedInUser={user}/>}/>
        <Route path='/eventPage/:eventId' element={<EventPage />} />
        <Route path='/singleFriend/:id' element={<SingleFriendPage />} />
        <Route path='/artistPage/:id' element={<ArtistPage />} />
    </Routes>
    </AuthContext.Provider>
    </>
  )
}

export default App