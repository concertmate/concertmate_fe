import {data1} from '../../data/userSpotifyData1.ts'
import {data2} from '../../data/userSpotifyData2.ts'
import {data3} from '../../data/userSpotifyData3.ts'
import {data4} from '../../data/userSpotifyData4.ts'

import './ArtistCard.css'
import { NavLink } from 'react-router-dom'
type Props = {}

const ArtistCard = (props: Props) => {
  const artistCards = data2.map(({external_urls,followers,genres,href,id,images,name,popularity,type,uri}) => {

    return (
      <>
        <div className='artist-card'>ArtistCard</div>
        {/* <NavLink to={`${'/'}`}>
          
          <button></button>
        </NavLink> */}
      </>
    )
  })
  return (
    {artistCards}
  )
}

export default ArtistCard