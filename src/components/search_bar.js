import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = { term: '' };
  }

  render() {
    return (
      <div>
        value = {this.state.value}
        <input onChange = {event => this.setState({ term: event.target.value })} />
        Output: { this.state.term }
      </div>
    )
  }

  onInputChange(event) {
    console.log(event.target.value);
  }
}

export default SearchBar;
