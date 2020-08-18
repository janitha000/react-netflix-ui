import React, { useState } from 'react'
import './rowDetail.css'

const BASE_URL = 'https://image.tmdb.org/t/p/original/';

const truncate = (str, n) => {
    return str?.length > n ? str.substring(0, n - 1) + '...' : str
}

const RowDetail = ({ movie, onTrailerClick }) => {




    return (
        <div className='rowdetail'>
            <header className='rowdetail__poster'
                style={{
                    backgroundSize: "cover",
                    backgroundImage: `url(${BASE_URL}/${movie?.backdrop_path})`,
                    backgroundPosition: 'center center'
                }}
            >
                <div className='rowdetail__content'>
                    <h1 className="rowdetail__title">{movie?.title || movie?.name || movie?.original_name}</h1>
                    <div className='rowdetail_buttons'>
                        <button className='rowdetail__button' onClick={e => onTrailerClick(movie)}>Play Trailer</button>
                    </div>
                    <h1 className='rowdetail__description'>{truncate(movie?.overview, 250)}</h1>
                </div>
            </header>

        </div>
    )
}

export default RowDetail;