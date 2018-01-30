import React from 'react';
import placeholder from '../img/avatar.png'

const ActorProfile = (props) => {    
    const actorImage = `https://image.tmdb.org/t/p/w500/${props.data.profile_path}`
    return props.data.profile_path ? (
        <li className='actor-profile'>
            <a title={props.data.name}><img src={actorImage} width="auto" height="200px" alt={props.data.name} /></a>
        </li>
    ):(
        <li className="actor-profile">
            <img src={placeholder} width="auto" height="200px" alt={props.data.name} />
        </li>
    )
};

export default ActorProfile;