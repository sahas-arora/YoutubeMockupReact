

import React, { Component } from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {videos: [], selectedVideo: null};
    this.onSubmit = this.onSubmit.bind(this);
    this.onVideoSelect = this.onVideoSelect.bind(this);
  }

  componentDidMount(){
    console.log("The state of the app is: ", this.state);
    this.onSubmit('oasis');
  }

    async onSubmit(inputValue){

    let response = await youtube.get('/search', {
      params: {
        q: inputValue
      }
    });

    console.log("The repsonse data is:", response);
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]});
    console.log("The state of the app is: ", this.state);

  }

  onVideoSelect(video) {
    console.log("Video from the api: ", video);
    this.setState({selectedVideo: video});
  }

  render() {
    return(
      <div className="ui container" style={{marginTop: '20px'}}>
        <SearchBar runMeWhenUserHitsEnter={this.onSubmit}/>
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
        <VideoDetail video={this.state.selectedVideo} />
        </div>
        <div className="five wide column">
        <VideoList videos={this.state.videos} whenUserClicksOnVideo={this.onVideoSelect} />
        </div>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
