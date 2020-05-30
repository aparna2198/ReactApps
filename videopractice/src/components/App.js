import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
const KEY = "AIzaSyBViBP0V0TZuWWvwbd-1-RDDosnKh48ztI";

class App extends React.Component {
    state = { videos: [] ,selectedvideo:null};
    onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                key: KEY,
                maxResults: 6,
                type:'video',
                part: "snippet",
            q: term
       }    
        })
        this.setState({ videos: response.data.items,selectedVideo:response.data.items[0] });
        
    }
        onVideoSelect = (video) =>
        {
            this.setState({ selectedVideo: video });
        }
      
    render()
    {
        return (
            <div className="ui container">
                <SearchBar letMeKnow={this.onTermSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="four wide column">
                            <VideoList
                    onVideoSelect={this.onVideoSelect}
                    videos={this.state.videos}
                    />
                    </div>
                </div>
                </div>
            </div>
        );
    }
}


export default App;