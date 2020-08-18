import React from 'react'
import './rowDetail.css'
const BASE_URL = 'https://image.tmdb.org/t/p/original/';


const RowDetail = ({ movie }) => {
    return (
        <div className='rowdetail'>
            <img
                src={`${BASE_URL}${movie.backdrop_path}`}
                alt={movie.name}
                className='rowdetail__img' />
        </div>
    )
}

export default RowDetail;