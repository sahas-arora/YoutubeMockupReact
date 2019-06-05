

import React from 'react';

const VideoDetail = (props) => {

  if(!props.video){
    return(
      <div>
        Loading...
      </div>
    );
  }

  let videoSrc = `https://www.youtube.com/embed/${props.video.id.videoId}`;

  return(
    <div style={{ marginTop: "30px"}}>
      <div className="ui embed">
        <iframe src={videoSrc} title={props.video.snippet.title}/>
      </div>
    <div className="ui segment">
      <h4 className="ui header">
      {props.video.snippet.title}
    </h4>
    <p>
      {props.video.snippet.description}
    </p>
    </div>
  </div>
  );
}

export default VideoDetail;
