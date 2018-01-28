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
            <div className='search-container'>                
                <input className='search-bar'
                onChange={event => this.onInputChange(event.target.value)}
                value={this.state.term}                
                placeholder='Search for show/movie...'/>                                    
                <button onClick={this.search}>Search</button>
            </div>
        )    
    }

    onInputChange(term){
        this.setState({term});
        //this.props.onSearchTermChange(term);
    }
    search(){
        this.props.onSearchTermChange(this.state.term);
    }
}

export default SearchBar;

