import React, { Component } from 'react';

class SearchBar extends Component{
    constructor(props){
        super(props);

        this.state = {
            term: ''
        }

        this.search = this.search.bind(this);
    }

    render(){
        return(
            <form onSubmit={this.search} className='search-container input-group'>                
                <input className='form-control'
                onChange={event => this.onInputChange(event.target.value)}
                value={this.state.term}                
                placeholder='Search for show/movie...'/> 
                <span className='input-group-btn'>                                   
                <button type='submit' className="btn btn-secondary" >Search</button>
                </span>
            </form>
        )    
    }

    onInputChange(term){
        this.setState({term});
        //this.props.onSearchTermChange(term);
    }
    search(e){
        e.preventDefault();
        this.props.onSearchTermChange(this.state.term);
    }
}

export default SearchBar;

