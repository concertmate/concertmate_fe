import React from 'react'
import { Link } from "react-router-dom"
import './Nav.css'
type Props = {}

const Nav = (props: Props) => {
  return (
    <nav>
        <ul>
            <Link to='/' className='nav-link'>
                <li>ConcertMate</li>
            </Link>
            <Link to='/events' className='nav-link'>
                <li>Events</li>
            </Link>
            <Link to='/friendslist' className='nav-link'>
                <li>Friends</li>
            </Link>
        </ul>
    </nav>
  )
}

export default Nav