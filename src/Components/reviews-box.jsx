import React, { Component } from 'react';
import Axios from 'axios';

import Review from './review';

export default class ReviewsBox extends Component{
    constructor(props){
        super(props);

        this.state = {
            reviews: []
        }
        
    }
    componentDidUpdate(){
        //This will scroll the ref div to the top on update to maintain the absolute
        //positioned header
        this._div.scrollTop = 0;
    }

    componentWillReceiveProps(nextProps){
        //This will scroll the ref div to the top on update to maintain the absolute
        //positioned header
        this._div.scrollTop = 0;

        const REVIEW_URL = `http://api.themoviedb.org/3/movie/${nextProps.data.id}/reviews?api_key=b75fae778d68850454ff779b6948316d`
        Axios.get(REVIEW_URL)
        .then((response) => {
          console.log("reviews: ", response.data.results); 
          if(response.data.results.length >= 0){       
            this.setState({                 
                reviews: response.data.results
            });
          }
      });
    }

    render(){
        
        const reviews = this.state.reviews.map((data) => {
            return(
                <Review data={data} />                                                
            );
        });
        
        return this.state.reviews.length >= 1 ? (
            //Set div as ref to be able to reset scroll on updates
            <div className='reviews-box' ref={(ref) => this._div = ref}> 
                <div className='reviews-text'>
                    <div className="reviews-overlay">
                        <h2>REVIEWS</h2>
                    </div>                   
                    {reviews}
                </div>
            </div>
        ):(
            <div className='reviews-box' ref={(ref) => this._div = ref}>                
                <div className='reviews-text'>
                    <div className="reviews-overlay">
                        <h2>REVIEWS</h2>
                    </div>
                    <div className='author'><br/><br/><strong>Author:</strong>N/A<br/>
                    There are no reviews for this movie.
                    </div>
                </div>
            </div>
        )
        
    }
}