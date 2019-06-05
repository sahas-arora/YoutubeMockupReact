

import React from 'react';
import VideoItem from './VideoItem';

const VideoList = (props) => {

  let individualVideos = props.videos.map((video) => {

    return(
      <VideoItem key={video.id.videoId} video={video} whenUserClicksOnVideo={props.whenUserClicksOnVideo} />
    );
  });

  return(
    <div  className="ui relaxed divided list" style={{marginTop: "30px"}}>
      {individualVideos}
    </div>
  );
}


export default VideoList;
