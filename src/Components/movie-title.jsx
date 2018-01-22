import React from 'react';

export default function MovieTitle(props){
    return(
        <div className='movie-title'>{props.data.title}</div>
    )
}