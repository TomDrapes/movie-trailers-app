import React from 'react';

const Review = (props) => {    
    
    return(                              
        <div className='author'><br/><br/><strong>Author:</strong> {props.data.author}<br/>
        {props.data.content}
        </div>        
    )  
};

export default Review;