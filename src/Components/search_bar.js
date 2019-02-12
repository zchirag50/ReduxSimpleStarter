import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' }; // this is used in only constructor to set state.
    }
    render() {
        return (
            <div>
                <input 
                    value ={this.state.term}
                    onChange = {event => this.setState({ term: event.target.value })} />

                value- {this.state.term}
            </div>
        );
    }
    
}

export default SearchBar;
