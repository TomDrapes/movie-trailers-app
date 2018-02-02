import React from 'react'

export default function VideoBox(props){
    if(!props.trailer){
        return<div>Loading...</div>
    }
    
    const videoId = props.trailer.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;
    return (
        <div className='video-box'>
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url} title="youtube video"></iframe>
            </div>
        </div>
    )
}