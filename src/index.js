import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'React-dom';
import YTSearch from 'youtube-api-search';
//Self-made omponents
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyDE8WguX7HpEvAy-_wtl4anoP1MF7-3Usc';
//Component
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      videos: [],
      selectedVideo: null
    };

    this.videoSearch("League of legends");
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({ 
        videos: videos,
        selectedVideo: videos[0]
      }) //this.setState({ videos: videos}) <=> this.setState({videos})
    });
  } 

  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

    return(
      <div>
        <SearchBar onSearchInput={videoSearch}/>
        <VideoDetail video={ this.state.selectedVideo }/>
        <VideoList 
          onVideoSelect={(selectedVideo)=>this.setState({selectedVideo})}
          videos={ this.state.videos }/>
      </div>
    );
  }
}
//Render component in DOM
ReactDOM.render(<App />, document.querySelector('.container'));
