import React from 'react'
import ArtistCard from '../ArtistCard/ArtistCard'
import { Link } from 'react-router-dom'

type Props = {}

const TopArtist = (props: Props) => {
  return (
    <div className='top-artist'>
        <h2>Top Artist</h2>
        <Link to='/artistPage'><ArtistCard /></Link> 
    </div>
  )
}

export default TopArtist