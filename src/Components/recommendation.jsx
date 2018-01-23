import React from 'react';
import placeholder from '../img/avatar.png'

const Recommendation = (props) => {    
    const movieImage = `https://image.tmdb.org/t/p/w500/${props.data.backdrop_path}`
    return props.data.backdrop_path ? (
        <li className='similar-movie'>
            <img src={movieImage} width="auto" height="250px" alt={props.data.title} />
        </li>
    ):(
        <li className="actor-profile">
            <img src={placeholder} width="auto" height="200px" alt={props.data.title} />
        </li>
    )
};

export default Recommendation;