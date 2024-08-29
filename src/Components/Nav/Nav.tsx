import React from 'react'
import { Link } from "react-router-dom"
import './Nav.css'
import logo from '../../assets/cblogo1.png'

type Props = {}

const Nav = (props: Props) => {
  return (
    <nav>
        <div className='nav-link-wrapper'>
            <Link to='/'>
                <img src={logo} alt="" className='logo'/>
            </Link>
            <div className='bttn-box'>
            <Link to='/allEventsPage' className='nav-link'>
                <li>Events</li>
            </Link>
            <Link to='/friendslist' className='nav-link'>
                <li>Friends</li>
            </Link>
            </div>
        </div >
    </nav>
  )
}

export default Nav