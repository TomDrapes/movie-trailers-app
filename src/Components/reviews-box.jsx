import React, { Component } from 'react';
import Axios from 'axios';

export default class ReviewsBox extends Component{
    constructor(props){
        super(props);

        this.state = {
            reviews: ''
        }
    }

    componentWillReceiveProps(nextProps){
        const REVIEW_URL = `http://api.themoviedb.org/3/movie/${nextProps.data.id}/reviews?api_key=b75fae778d68850454ff779b6948316d`
        Axios.get(REVIEW_URL)
        .then((response) => {
          console.log(response);        
          this.setState({                 
            reviews: response.data.results[0]
          });
      });
    }

    render(){
        return(
            <div className='reviews-box'>                
                <div className='reviews-text'>
                    <h2>REVIEWS</h2>
                    <div className='author'><strong>Author:</strong> {this.state.reviews.author}</div><br/>
                    {this.state.reviews.content}
                </div>
            </div>
        )
    }
}