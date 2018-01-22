import React from 'react';

import SearchBar from './search-bar';

export default function Header(props) {
    
    return (
        <div className='header'>            
            <div className='title'>QUICK-TRAILERS</div>
            <SearchBar />
        </div>
    )
}