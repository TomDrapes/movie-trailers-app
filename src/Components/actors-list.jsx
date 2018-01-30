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

    componentDidUpdate(){
        //This will scroll the ref div to the top on update to maintain the absolute
        //positioned header
        this._div.scrollLeft = 0;
    }

    componentWillReceiveProps(nextProps){
        //This will scroll the ref div to the top on update to maintain the absolute
        //positioned header
        this._div.scrollLeft = 0;
        var CREDITS_URL = '';
        if(nextProps.data){
            CREDITS_URL = `http://api.themoviedb.org/3/movie/${nextProps.data.id}/credits?api_key=b75fae778d68850454ff779b6948316d`;
        }
        Axios.get(CREDITS_URL)
        .then((response) => {
          console.log('Credits: ', response);        
          this.setState({                 
            credits: response.data.cast
          });
          
      });
     
      
    }
    render(){
        var actors;
        if(this.state.credits){
            actors = this.state.credits.map((actor) => {
                return(
                    <ActorProfile data={actor} key={actor.cast_id}/>                                                
                );
            });
        }
        return (
            //Set div as ref to be able to reset scroll on updates
            <div className='actors-list-container' ref={(ref) => this._div = ref}>
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