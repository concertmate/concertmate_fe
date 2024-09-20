import { useEffect } from 'react'
import { tmData1 } from '../../data/TicketMasterData1'
import { User, TicketmasterShow } from '../../data/type'
import './ArtistShows.css'
import * as moment from 'moment'

interface ArtistShowProps {
    user: User;
    artistName: string;
    handleSingleArtistSelection: (artistSelection: number) => void;
    selectedArtistIndex: number;
    showOption: number;
    handleShowOption: (showSelection: number) => void
}

const ArtistShows: React.FC<ArtistShowProps> = ({ user, artistName, handleSingleArtistSelection, selectedArtistIndex, showOption, handleShowOption }) => {
    const { id } = user
    const tmData = tmData1[id - 34]
    useEffect(() => {
        tmData.forEach((artistData, index) => {
            if (artistData.find((artist) => artist.name === artistName)) {
                handleSingleArtistSelection(index)
            }
        })
    }, [artistName])
    const firstName = artistName.split(' ')[0]
    const shows: TicketmasterShow[] = tmData[selectedArtistIndex].filter((show) => show.name.includes(firstName))
    const dateShows = shows.map(show => {
        const date = new Date(show.startDate)
        show.startDate = moment.default(date).format('MMM-DD-YYYY');
        return show
    })

    if (!shows.length) {
        return (
            <p>No concerts available for {artistName}. Try another artist, or check back soon!</p>
        )
    }
    return (
        <div className='show-card-wrapper'>
            <h2>Upcoming Shows for {artistName}</h2>
            <div className='concert-wrapper'>
                {dateShows.map((show, index) => (
                <div key={index} className='concert-card' onClick={() => handleShowOption(index)}>
                    <div className='concert-img-container'>
                        <img src={show.image} alt={show.name} />
                    </div>
                    <div className='concert-info'>
                        <p>{artistName}</p>
                        <p>{show.startDate}</p>
                        <p>{show.location.name}</p>
                        <a href={show.url} target="_blank" rel="noopener noreferrer">
                            More Details Here
                        </a>
                    </div>
                        <div className="radio">
                            <label>
                                <input type="radio" value={showOption} name={`option${index}`} checked={showOption == index} onChange={() => handleShowOption(index)}/>
                            </label>
                        </div>
                    </div>
            ))}
            </div>
        </div>
    )
}

export default ArtistShows 