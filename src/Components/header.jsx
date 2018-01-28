import React from 'react';

import SearchBar from './search-bar';
import Tape from '../img/filmklappe.png';

export default function Header(props) {
    
    return (
        <div className='header'>
            <div className='logo'><img src={Tape} alt='logo' height="66px" width="auto" /></div>
            
            <div className='title'>QUICK-TRAILERS</div>
            
            
            
            <SearchBar onSearchTermChange={props.getTrailer}/>
        </div>
    )
}