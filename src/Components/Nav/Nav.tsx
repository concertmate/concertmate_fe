import { Link, useLocation } from "react-router-dom"
import './Nav.css'
import logo from '../../../public/assets/cblogo1.png'

const Nav = () => {
    const location = useLocation();
    if (location.pathname === '/') {
        return null; 
      }
  return (
    <nav>
        <div className='nav-link-wrapper'>
            <Link to='/landing'>
                <img src={logo} alt="" className='logo'/>
            </Link>
            <div className='bttn-box'>
            <Link to='/allEventsPage' className='nav-link'>
                <li>Events</li>
            </Link>
            <Link to='/friendslist' className='nav-link'>
                <li>Friends</li>
            </Link>
            <Link to='/' className='nav-link'>
                <li>Sign Out</li>
            </Link>
            </div>
        </div >
    </nav>
  )
}

export default Nav