import React, { useState, useEffect } from 'react'
import axios from '../../axios'
import './Row.css'
import RowDetail from '../rowDetail/RowDetail'
const BASE_URL = 'https://image.tmdb.org/t/p/original/';

const Row = ({ title, fetchUrl }) => {
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState({})

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results)
            return request;
        }
        fetchData();

    }, [fetchUrl])

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className='row__posters'>
                {movies.map(movie => (
                    <img
                        key={movie.id}
                        className='row__poster'
                        onClick={e => (selectedMovie.id === movie.id) ? setSelectedMovie({}) : setSelectedMovie(movie)}
                        src={`${BASE_URL}${movie.poster_path}`} alt={movie.name} />
                ))}
            </div>
            <div className='row__detail'>
                {selectedMovie.id && <RowDetail movie={selectedMovie} />}
            </div>
        </div>
    )
}

export default Row;