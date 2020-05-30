import { combineReducers } from 'redux'// named export 

const songsReducer = () => {
    return [
        { title: 'No Scrubs', duration: '4:05' },
        { title: 'Macarena' ,duration: '3:05' },
        { title: 'All star' ,duration: '1:05' },
        { title: 'Heart wants what it wants', duration: '5:15' }
        
    ]
}

const selectedSongReducer = (selectedSong=null,action) =>
{
    if (action.type === 'SONG_SELECTED')
        return action.payload;
    return selectedSong;
}
export default combineReducers({
    songs: songsReducer,
    selectedSong:selectedSongReducer
})