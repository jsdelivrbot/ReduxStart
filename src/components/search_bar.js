import React, { Component } from 'react';

class SearchBar extends Component{
  constructor(props) {
    super(props);

    this.state = { term: '' }
  }

  render() {
    return (
      <div className='search-bar'>
        <input
          value={this.state.value}
          onChange={e => this.onChangeInput(e.target.value)}
        />
      </div>
    );
  }

  onChangeInput(term) {
    this.setState({term});
    this.props.onSearchInput(term);
  }
}

export default SearchBar;
