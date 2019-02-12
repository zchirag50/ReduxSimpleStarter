import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './Components/search_bar'

const API_key = "AIzaSyAE7kDG7ZZsBAaGxLPrmqbLw2yHVNB_tCU";

const App = () => {
  return (
    <div>
    <SearchBar />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('.container'));

