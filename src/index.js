import React, { Component } from 'react';
import ReactDOM from 'React-dom';
import YTSearch from 'youtube-api-search';
//Self-made omponents
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyDE8WguX7HpEvAy-_wtl4anoP1MF7-3Usc';
//Component
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] }

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({ videos }) //this.setState({ videos: videos})
    });
  }

  render() {
    return(
      <div>
        <SearchBar />
        <VideoList videos={ this.state.videos }/>
      </div>
    );
  }
}
//Render component in DOM
ReactDOM.render(<App />, document.querySelector('.container'));
