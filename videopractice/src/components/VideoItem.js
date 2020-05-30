import React from 'react';

import './VideoItem.css';
const VideoItem = ({ video,onVideoSelect }) => {

       return (
           <div onClick={()=>onVideoSelect(video)}className=" video-item item">
                <img className="ui image" src={video.snippet.thumbnails.medium.url} alt={video.snippet.thumbnails.medium}/>
               <div className="content">
                <a className="header" href="/">  {video.snippet.channelTitle}
                   </a>
               </div>  
               
            </div>
    
)
}

export default VideoItem;