import React, { Component } from 'react';
import Axios from 'axios';

export default class ReviewsBox extends Component{
    constructor(props){
        super(props);

        this.state = {
            reviews: []
        }
    }

    componentWillReceiveProps(nextProps){
        
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
        console.log('here: ', this.state.reviews);
        return this.state.reviews.length >= 1 ? (
            <div className='reviews-box'>                
                <div className='reviews-text'>
                    <div className="reviews-overlay">
                        <h2>REVIEWS</h2>
                    </div>
                    <div className='author'><br/><br/><strong>Author:</strong> {this.state.reviews[0].author}<br/>
                    {this.state.reviews[0].content}
                    </div>
                </div>
            </div>
        ):(
            <div className='reviews-box'>                
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