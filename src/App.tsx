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
import {User,Event} from './data/type.js'
// import {Registry, Server , Model} from "miragejs"
// import { ModelDefinition } from 'miragejs/-types';

const AuthContext =React.createContext<boolean>(false);

// const EventModel: ModelDefinition<Event> = Model.extend({})
// type AppRegistry = Registry<
//   {event: typeof EventModel;},
//   {events: typeof EventModel;}
// >;
// new Server<AppRegistry>({
//   models: {
//     event: Model,
//   },
//   routes() {
//     this.get("/api/events",(schema: any) => {
//       return schema.events.all();
//     })
//     this.post("/api/events", (schema: any, request) => {
//       let attrs = JSON.parse(request.requestBody)
      
//       let newEvent = {...attrs,"event_id":schema.events.all().length + 1}
//       return schema.events.create(newEvent)
//     })
//   },
//   seeds(server: Server<AppRegistry>) {
//     server.create("event", {"event_id": 1, "event_name": "Concert", "venue_name": "cowboys stadium", 
//       "date_time": "2024-12-31T20:00:00Z", "artist": "Colter Wall", "location": "Dallas,TX",
//       "spotify_artist_id": "231", "ticketmaster_event_id": "500", "owner":"kylemboomer@gmail.com"
//     })
//     server.create("event", {"event_id": 2, "event_name": "Concert", "venue_name": "cowboys stadium", 
//       "date_time": "2024-12-31T20:00:00Z", "artist": "Colter Wall", "location": "Dallas,TX",
//       "spotify_artist_id": "231", "ticketmaster_event_id": "500", "owner":"kylemboomer@gmail.com"
//     })
//   },
// })

const App = () => {
  const [authenticated, setAuthenticated] = useState<boolean>(false)
  const [user, setUser] = useState<User>({id: 1,email:'',username:''})
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