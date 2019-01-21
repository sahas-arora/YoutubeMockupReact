

import React, { Component } from 'react';

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
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
          <label>Video Search</label>
          <input
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
