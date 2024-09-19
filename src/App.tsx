import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/Header/Header.tsx'
import LoginPage from './Components/LoginPage/LoginPage.tsx'
import LandingPage from './Components/LandingPage/LandingPage.tsx'
import MyEvents from './Components/MyEvents/MyEvents.tsx'
import CreateEvent from './Components/CreateEvent/CreateEvent.tsx'
import FriendsList from './Components/FriendsList/FriendsList.tsx'
import EventPage from './Components/EventPage/EventPage.tsx'
import SingleFriendPage from './Components/SingleFriendPage/SingleFriendPage.tsx'
import ArtistPage from './Components/ArtistPage/ArtistPage.tsx'
import AllEventsPage from './Components/AllEventsPage/AllEventsPage.tsx'
import React, { useState } from 'react'
import {User} from './data/type.js'

const AuthContext =React.createContext<boolean>(false);

const App = () => {
  const [authenticated, setAuthenticated] = useState<boolean>(false)
  const [user, setUser] = useState<User>({id: 1,email:'',name:'',created_at:'',updated_at:''})
  const [userEventIDs, setUserEventIDs] = useState<string[]>([''])
  function handleAuthentication(isAuthenticated: boolean) {
      setAuthenticated(isAuthenticated)
  }
  function changeUser(foundUser: User) {
    setUser(foundUser)
  }
  function changeUserEventIDs(ids: string[]) {
    setUserEventIDs(ids)
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
        <Route path='/myevents' element={<MyEvents user={user} changeUserEventIDs={changeUserEventIDs}/>}/>
        <Route path='/allEventsPage' element={<AllEventsPage user={user} userEventIDs={userEventIDs}/>}/>
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