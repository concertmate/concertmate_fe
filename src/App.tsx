import { Route, Routes } from 'react-router-dom'
import Header from './Components/Header/Header.jsx'
import LandingPage from './Components/LandingPage/LandingPage.js'


const App = () => {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<LandingPage/>}/> 

    </Routes>
    </>
   
  )
}

export default App