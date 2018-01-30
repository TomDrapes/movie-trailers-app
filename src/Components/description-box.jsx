import React from 'react';

export default function DescriptionBox(props){
    var url = '';
    if(props.data){
        url = `https://image.tmdb.org/t/p/w500/${props.data.poster_path}`;
    }
    return props.data ? (
        <div className='description-box'>                        
            <div className='poster'>
                <img src={url} alt='poster' width='195px' height='auto' />  
            </div>
            
            <div className='release-date'>
                <br/><strong>Title:</strong> {props.data.title}<br/><br/>
                <strong>Released:</strong> {props.data.release_date}<br/><br/>
                <strong>Voter Score:</strong> {props.data.vote_average}/10 from {props.data.vote_count} votes.                
            </div>
            
            <div className="overview">
                <strong>Overview:</strong> {props.data.overview}<br/>
            </div>
                         
        </div>
    ):(
        <div className='description-box'>
            Description not available
        </div>
    )
}