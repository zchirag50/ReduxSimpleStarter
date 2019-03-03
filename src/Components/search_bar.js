import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' }; // this is used in only constructor to set state.
    }
    render() {
        return (
            <div className="search-bar">
                <input
                    value={this.state.term}
                    onChange={event =>this.onChange( event.target.value) } />


            </div>
        );
    }
    onChange(term) {
        this.setState({ term })
        this.props.onSearchBarSearch(term);
    }

}

export default SearchBar;
