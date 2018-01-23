import React, { Component } from 'react';
import Axios from 'axios';
import ActorProfile from './actor-profile';



export default class ActorsList extends Component{
    constructor(props){
        super(props);

        this.state = {
            credits: []
                     
        }

    }

    componentWillReceiveProps(nextProps){
        const CREDITS_URL = `http://api.themoviedb.org/3/movie/${nextProps.data.id}/credits?api_key=b75fae778d68850454ff779b6948316d`;
        Axios.get(CREDITS_URL)
        .then((response) => {
          console.log('Credits: ', response);        
          this.setState({                 
            credits: response.data.cast
          });
          
      });
     
      
    }
    render(){
        
        const actors = this.state.credits.map((actor) => {
            return(
                <ActorProfile data={actor} key={actor.cast_id}/>                                                
            );
        });
        return (
            <div className='actors-list-container'>
                <div className="actors-overlay">
                    <h2>CAST</h2>
                </div>
                <div className="actors-list">          
                    <ul>
                        {actors}            
                    </ul>
                </div>
            </div>
        )
    }
}