import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/Header/Header.jsx'
import LandingPage from './Components/LandingPage/LandingPage.js'
import MyEvents from './Components/MyEvents/MyEvents.js'
import CreateEvent from './Components/CreateEvent/CreateEvent.js'
import FriendsList from './Components/FriendsList/FriendsList.js'
import AllEventsPage from './Components/AllEventsPage/AllEventsPage.js'
import EventPage from './Components/EventPage/EventPage.js'
import SingleFriendPage from './Components/SingleFriendPage/SingleFriendPage.js'
import ArtistPage from './Components/ArtistPage/ArtistPage.js'


const App = () => {
  return (
    <>
    <Header/>
    <Routes>
        <Route path='/' element={<LandingPage/>}/> 
        <Route path='/createEvent' element={<CreateEvent />}/>
        <Route path='/myevents' element={<MyEvents />}/>
        <Route path='/friendslist' element={<FriendsList/>}/>
        <Route path='/allEventsPage' element={<AllEventsPage />}/>
        <Route path='/eventPage/:eventId' element={<EventPage />} />
        <Route path='/singleFriend/:id' element={<SingleFriendPage />} />
        <Route path='/artistPage/:id' element={<ArtistPage />} />
    </Routes>
    </>
   
  )
}

export default App