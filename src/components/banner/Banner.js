import React, { useState, useEffect } from 'react'
import requests from '../../request'
import axios from '../../axios'
import './Banner.css'

const BASE_URL = 'https://image.tmdb.org/t/p/original/';

const Banner = () => {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            const movies = request.data.results;

            const random = Math.floor(Math.random() * movies.length - 1)
            setMovie(movies[random])
        }

        fetchData()
    }, [])

    const truncate = (str, n) => {
        return str?.length > n ? str.substring(0, n - 1) + '...' : str
    }

    return (
        <header className='banner'
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(${BASE_URL}/${movie?.backdrop_path})`,
                backgroundPosition: 'center center'
            }}
        >
            <div className="banner__content">
                <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className='banner_buttons'>
                    <button className='banner__button'>Play</button>
                </div>
                <h1 className='banner__description'>{truncate(movie?.overview, 250)}</h1>
            </div>
            <div className="banner__fadebottom" />
        </header>

    )
}

export default Banner;