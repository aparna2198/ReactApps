import React from 'react';
import SearchBar from './SearchBar'
import unsplash from '../api/unsplash'
import ImageList from './ImageList'
class App extends React.Component
{state={images:[]}
    // by putting async keyword it allows us to use the async or wait syntxx inside this function 
    // meaning in front of the network request that we make to axios 
    onSearchSubmit=async (term)=>
        { 
            // to make a search for a llist of photos matching a query we going to make a get type network 
            // request to an end point of search/photos
            // 1 argu -address we want to make a get request  to
            // 2 argu - object that will have a bunch of options that will customize this request 
         const response=await unsplash.get('/search/photos', {
                params:{query:term},

            })
            // whenever makes a request to a axios it returns on object called a promise a promise is a object which gives a noification when a netwrok request is completed
            // arrow fucntion is callback function which willbe envoked with whatever data we got back from unsplash API
        
        this.setState({images: response.data.results })
        };
        render()
        {return (
            <div className="ui container" style={{ marginTop: '10px' }}><SearchBar run={this.onSearchSubmit} />
                <ImageList images={this.state.images}/>
            </div>
    )
    }
  
}

export default App;