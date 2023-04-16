import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

export default function AlbumView() {
    const { id } = useParams()
    const [albumData, setAlbumData] = useState([])

    return (
        <div>
            <h2>The ID for the album is: {id} </h2>
            <p>Album Data goes here!</p>
        </div>
    )
}