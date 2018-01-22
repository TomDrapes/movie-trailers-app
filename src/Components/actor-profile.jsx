import React from 'react';

const ActorProfile = (props) => {    
    const actorImage = `https://image.tmdb.org/t/p/w500/${props.data.profile_path}`
    return props.data.profile_path ? (
        <li className='actor-profile'>
            <img src={actorImage} width="auto" height="200px" alt={props.data.name} />
        </li>
    ):(
        <div className="missing-profile">Missing</div>
    )
};

export default ActorProfile;