import React from 'react';

export default function Footer(props){
    return (
        <div className='footer'>
            <div className='moviedb-logo'><img src='https://www.themoviedb.org/static_cache/v4/logos/powered-by-rectangle-blue-61ce76f69ce1e4f68a6031d975df16cc184d5f04fa7f9f58ae6412646f2481c1.svg' height='48px' width='auto' alt='the movie db logo'/></div>
            <div className='footer-text'>
                <div>QUICK-TRAILERS&copy;2018. Created by Tom Drapes.</div>
                <div>This product uses the TMDb API but is not endorsed or certified by TMDb</div>    
            </div>  
                  
        </div>
    )
} 