

import React, { Component } from 'react';
import './VideoItem.css';

class VideoItem extends Component {

  constructor(props){
    super(props);
    this.videoRef = React.createRef();
  }

  render(){
    return(
      <div className="video-item item"
         onClick={() => {
          this.props.whenUserClicksOnVideo(this.props.video)
        }}>
        <img className="my-image"
           alt={this.props.video.snippet.description}
           src={this.props.video.snippet.thumbnails.medium.url} />
      <div className="content">
        <div className="my-header">
        {this.props.video.snippet.title}
      </div>
      </div>
      </div>
    );
  }
}

export default VideoItem;
