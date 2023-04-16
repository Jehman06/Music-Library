import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function ArtistView() {
    const { id } = useParams()
    const [artistData, setArtistData] = useState([])

    useEffect(() => {
        let fetchData = async () => {
            debugger
            const response = await fetch(`https://itunes.apple.com/srtist/${id}`);
            const resData = await response.json();
            setArtistData(resData)
        }
    })

    return (
        <div>
            <h2>The ID passed was: {id}</h2>
            <p>Artist Data Goes Here!</p>
        </div>
    )
}