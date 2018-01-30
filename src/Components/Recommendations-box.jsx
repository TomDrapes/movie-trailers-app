import React, { Component } from 'react';
import Axios from 'axios';

import Recommendation from './recommendation';


export default class RecommendationsBox extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            recommendations: [],
            getTrailer: props.getTrailer
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
        
        const URL = `http://api.themoviedb.org/3/movie/${nextProps.data.id}/similar?api_key=b75fae778d68850454ff779b6948316d`
        Axios.get(URL)
        .then((response) => {
          console.log('rec: ',response);        
          this.setState({                 
            recommendations: response.data.results
          });
      });
    }

    render(){

        const related = this.state.recommendations.map((data) => {
            return(
                <Recommendation data={data} key={data.id} onSelected={this.state.getTrailer}/>                                                
            );
        });
        return (
            //Set div as ref to be able to reset scroll on updates
            <div className='recommendations-box' ref={(ref) => this._div = ref}>
                <div className="recommendations-overlay">
                    <h2>RECOMMENDATIONS</h2>
                </div>
                <ul>
                    {related}
                </ul>
            </div>
        )
    }
}