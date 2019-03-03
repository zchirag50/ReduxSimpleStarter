import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './Components/search_bar'
import VideoList from './Components/video_list'
import VideoDetails from './Components/video_deatils';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

const API_key = "";



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo :null
    };
    this.vedioSearch('surfboard');
    
  }
  vedioSearch(term){
    YTSearch({ key: API_key, term: term }, (videos) => {
      this.setState({ videos: videos, selectedVideo: videos[0] });
    })
  }
  render() {
    return (
      <div>
        <SearchBar onSearchBarSearch= {_.debounce( term => this.vedioSearch(term),300)} />
        <VideoDetails video={this.state.selectedVideo} />
        <VideoList onVideoSelect = {selectedVideo=> this.setState({selectedVideo})} videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));

