import React from 'react'
import { Link } from "react-router-dom"
import './Nav.css'
type Props = {}

const Nav = (props: Props) => {
  return (
    <nav>
        <ul>
            <Link to='/'>
                <li>ConcertMate</li>
            </Link>
            <Link to='/events'>
                <li>Events</li>
            </Link>
            <Link to='/friendslist'>
                <li>Friends</li>
            </Link>
        </ul>
    </nav>
  )
}

export default Nav