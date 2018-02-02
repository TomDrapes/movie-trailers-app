import React from 'react';
import placeholder from '../img/avatar.png'



const Recommendation = (props) => {    
    const movieImage = `https://image.tmdb.org/t/p/w500/${props.data.backdrop_path}`

    var search = () => {
        props.onSelected(props.data.title);
    }
    
    return props.data.backdrop_path ? (
        <li className='similar-movie'>
            <a title={props.data.title}><img src={movieImage} width="100%" height="auto" alt={props.data.title} onClick={search}/></a>
        </li>
    ):(
        <li className="actor-profile">
            <img src={placeholder} width="auto" height="200px" alt={props.data.title} />
        </li>
    )
};

export default Recommendation;