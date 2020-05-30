import React from 'react';
import SearchBar from './SearchBar';
import Youtube, { baseParams } from '../apis/Youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
// making a api request is a asynchronous opertaion we have to interact woth it either usinh promises or sync and await since it easier
class App extends React.Component{
    state = { videos: [], selectedVideo: null };
    componentDidMount() {
        this.onTermSubmit('Youtube');
    }
    onTermSubmit = async(term) => {
    const response=  await  Youtube.get('/search', {
            params: {
                ...baseParams,
                q: term                
            }
    });
        
        this.setState({
            videos: response.data.items,
            selectedVideo:response.data.items[0]
        });
    };
    onVideoSelect = video => 
    {
        this.setState({ selectedVideo: video });
    }
    render() {
        return (<div className="ui container"><SearchBar onFormSubmit={this.onTermSubmit} />
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={this.state.selectedVideo}/>
                    </div>
                    <div className="five wide column" >
                        <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                    </div>
                
                    </div>
            </div>
            </div>)
    }
}

export default App;