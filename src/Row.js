import React, { useEffect, useState } from 'react';
import axios from './axios';

function Row({ title, fetchUrl }) {
    const [movies, setMovies] = useState([]);

    // code which runs based on a specific condition
    useEffect(() => {
        // if [], run once when the row loads, never run again
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            console.log(request);
            return request;
        }
        fetchData();
    }, []);

    return (
        <div>
            <h2>{title}</h2>

            {/* container -> posters */}
        </div>
    )
}

export default Row