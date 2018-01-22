import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';

import Header from './Components/header';
import VideoBox from './Components/video-box';
import DescriptionBox from './Components/description-box';
import MovieTitle from './Components/movie-title';
import ActorsList from './Components/actors-list';
import ReviewsBox from './Components/reviews-box';
import RecommendationsBox from './Components/Recommendations-box';
import Footer from './Components/footer';

const API_KEY = 'b75fae778d68850454ff779b6948316d';

const URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}`;



class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      data: [],
      reviews: []
    };

    this.getData();

  }

  getData(){
    const url = `${URL}&query=the+godfather&append_to_response=reviews`;      
      Axios.get(url)
        .then((response) => {
          console.log(response);        
          this.setState({                 
            data: response.data.results[0]
          });
      });
      
      
  }
  render() {
    return (
      <div className="App">        
        <Header />
        <MovieTitle data={this.state.data}/>
        <VideoBox />
        <DescriptionBox data={this.state.data}/>
        <ActorsList data={this.state.data}/> 
        <ReviewsBox data={this.state.data}/>  
        <RecommendationsBox />  
        <Footer />           
      </div>
    );
  }
}

export default App;
