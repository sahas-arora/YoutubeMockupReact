

import React, { Component } from 'react';

import "./SearchBar.css";

class SearchBar extends Component {

  constructor(props){
    super(props);

    this.state = { inputValue: ''};
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(event) {
    event.preventDefault();

    this.props.runMeWhenUserHitsEnter(this.state.inputValue);
  }

  render() {
    return(
      <div>
        <form onSubmit={this.onFormSubmit} className="search-form">
          <div className="search-field">
            {/* <label className="search-label">Video Search</label> */}
              <input
                  placeholder="Search for a video"
                  className="my-input"
                  type="text"
                  onChange={(event) => {
                    this.setState({inputValue: event.target.value});
                  }}
                  value={this.state.inputValue}>
                </input>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
