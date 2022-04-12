import React, { useState } from 'react';
import VideoItem from '../VideoItem';
import './style.css'

function VideoGrid(props) {
  const { myStream, friendStream, myCamStatus, friendCamStatus, receiver, caller } = props

  return (
    <div className='video__grid'>
      <VideoItem stream={friendStream} showVideo={friendCamStatus} {...receiver}/>
      <VideoItem myVideo stream={myStream} showVideo={myCamStatus} {...caller}/>
    </div>
  );
}

export default VideoGrid;