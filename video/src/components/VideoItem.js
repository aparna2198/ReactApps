import React from 'react';
import './VideoItem.css'
/*we created this component we will be haing multiple videos items wehn our app is rendered on the screen
every videoitem component will receive a separate video object  
so each video item will be customized to display a slighlty diff video */
// ({ video,onVideoSelect }) this is called destructuring we usaully write prop over there but 
// to make itg look good we write this so then baar baar props.video ya fir props.onVideoSelect na likhna pade
const VideoItem = ({ video,onVideoSelect }) =>
{
    // rememberwe using a callback function here onClick={()=>onVideoSelect(video)} because we wann acall it with an argument 
    // whcih is video therefore a callback whihc allows us tio call fucntion with argument 
    // whenever we want to communicate data fron parent to child we use props syste 
    // whenver datais ti be communicated fromn child to parent we use call back methods 
    return (<div onClick={()=>onVideoSelect(video)} className='video-item item'>
        {/* in network window it will show under items.snippet.title but 
        {/* items is just an array conatining videos here inn state we de
        {/* fined videos as an array thats why we take video.snippet.title */}
        <img alt={video.snippet.title} className="ui image" src={video.snippet.thumbnails.medium.url} />
        <div className="content">
         <div className="header">{video.snippet.title}</div>
            </div>
    </div>) 
}

export default VideoItem; 