import {useState, useEffect} from 'react'
import { tmData1 } from '../../data/TicketMasterData1'
import { User,TicketmasterShow } from '../../data/type'
import './ArtistShows.css'

interface ArtistShowProps {
    user: User;
    artistName: React.ReactNode;
}

const ArtistShows: React.FC<ArtistShowProps> = ({user, artistName}) => {
    const [selectedArtistIndex, setSelectedArtistIndex] = useState<number>(0)
    useEffect(() => {
        tmData.forEach((artistData,index) => {
            if (artistData.find((artist) => artist.name === artistName)) {
                setSelectedArtistIndex(index)
            }
        })
    },[])
    const {id} = user
    const tmData = tmData1[id-1]

    const shows:TicketmasterShow[] = tmData[selectedArtistIndex].filter((show) =>  show.name === artistName)

        if (!shows.length) {
            return (
                <p>No concerts available for {artistName}. Try another artist, or check back soon!</p>
            )
        }
        return (
            <div className='show-card'>
                <h3>Upcoming Shows for {artistName}</h3>
                {shows.map((show, index) => (
                    <div key={index} className='concert-card'>
                        <img src={show.image} alt={show.name} />
                        <p>{artistName}</p>
                        <p>{show.startDate}</p>
                        <p>{show.location.name}</p>
                        <a href={show.url} target="_blank" rel="noopener noreferrer">
                            More Details Here
                        </a>
                    </div>
                ))}
            </div>
        )
    }

export default ArtistShows 