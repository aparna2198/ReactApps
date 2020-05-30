import React from 'react';

const VideoDetail = ({ video }) => {
    console.log(video)
    if (!video) {
        return <div> Loading... </div>
    }
//  https://www.youtube.com/channel/UCuBV7qZtBMbnuB_0bXDoLaQ
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    
   
    return (
        
        <div>
            <div className="ui embed">
                <iframe title="video title" src={videoSrc}/>
            </div>
            <div className='ui segment'>
                <h4 className="ui header"> {video.snippet.title}</h4>
                <p> {video.snippet.description}</p>
            </div>
        </div>
        ) 
 };
export default VideoDetail;