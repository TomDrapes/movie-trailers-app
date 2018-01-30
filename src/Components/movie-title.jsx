import React from 'react';

export default function MovieTitle(props){
    return props.data ? (
        <div className='movie-title'>{props.data.title}</div>
    ):(
        <div className='movie-title'>Not found</div>
    )
}