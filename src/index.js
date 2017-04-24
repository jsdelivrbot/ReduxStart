import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyDE8WguX7HpEvAy-_wtl4anoP1MF7-3Usc';

class App extends Component{

  constructor(props) {
    super(props);

    this.state = { videos: []};

    YTSearch(
      {key: API_KEY, term: 'League of Legends'}, videos => this.setState({ videos })
      // if term and data have same declaration { videos: videos} => { videos }
    );
  }

  render(){
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos}/>
      </div>
    );}
}

ReactDOM.render(<App />, document.querySelector('.container'));
