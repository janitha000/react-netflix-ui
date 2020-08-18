import React, { useState, useEffect } from 'react'
import axios from '../../axios'
import './Row.css'
import RowDetail from '../rowDetail/RowDetail'
import Youtube from 'react-youtube'
import movieTrailer from 'movie-trailer'

const BASE_URL = 'https://image.tmdb.org/t/p/original/';

const Row = ({ title, fetchUrl }) => {
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState({})
    const [trailerUrl, setTrailerUrl] = useState('')

    const options = {
        height: '390',
        width: '640',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    }


    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results)
            return request;
        }
        fetchData();

    }, [fetchUrl])

    const showTrailer = (movie) => {
        console.log(`calling youtube for ${movie?.name}`)
        movieTrailer(movie?.title || movie?.name || movie?.original_name || "").then(url => {
            const urlParams = new URLSearchParams(new URL(url).search);
            setTrailerUrl(urlParams.get('v'))
        }).catch(err => {
            console.log(err);
        })
    }

    const setNewMovieUrl = (movie) => {
        setTrailerUrl('')
        setSelectedMovie(movie)
    }

    return (
        <div className="row">
            <h2 className="row__title">{title}</h2>
            <div className='row__posters'>
                {movies.map(movie => (
                    <img
                        key={movie.id}
                        className='row__poster'
                        onClick={e => (selectedMovie.id === movie.id)
                            ? setSelectedMovie({})
                            : (trailerUrl === '') ? setSelectedMovie(movie) : setNewMovieUrl(movie)}
                        src={`${BASE_URL}${movie.poster_path}`} alt={movie.name} />
                ))}
            </div>
            <div className='row__detail'>
                {selectedMovie.id && trailerUrl === '' && <RowDetail movie={selectedMovie} onTrailerClick={showTrailer} />}
                {trailerUrl && <div className="row__youtube"> <Youtube videoId={trailerUrl} opts={options} /></div>}
            </div>
        </div>
    )
}

export default Row;