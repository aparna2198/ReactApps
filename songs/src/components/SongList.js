import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';
class SongList extends Component{
    renderedList() {
        return this.props.songs.map(song => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button className="ui buttton primary"
                        onClick={()=>this.props.selectSong(song)}>
                            Select
                        </button>
                    </div>
                    <div className="content">
                        {song.title}
                    </div>
                </div>
            )
        })
    }
    render() {
    // console.log(this.props)  
return <div className="ui divided list">{this.renderedList()}</div>
}
}
const mapStateToProps = (state) =>
{    return {songs:state.songs};
    //we going to take data from redux store  and do some computation that will eventaually cause that data
    // to show up as props inside of our component
}
// wizred syntx first set of () return a funcnction second() invokes the fucntion that got returned 
// connect is a react component 
export default connect(mapStateToProps, {selectSong})(SongList);

/*
to get data from redux store
we always have to 
1)import react-redux
2) call connnect and pass in our component as second function call here it is songlist
3} always define mapstatetoprop  it is alwaysgonna get first argument as state 
4) it always gonna return a an object that is going to show up as  props inside of our component 
*/

// connect has two argument
// 1) mapstatetoprops which is basically get data from store to provider to the connect eventually and then use that data using the old school prop system
// 2) selectsong which is action creator in the diagram we see that action craetors when action happends nudges to the connect 

// IMP
/*passing action creator to connect fucntion
that action creator is wrapped into another javascript fucntion \
when we call this new javascript fucntion 
the connect fucntion is gonna automatically call action creator
it gonna autmatically  take the action returned
and its gonna automatically call the dispatch fucntion for us */