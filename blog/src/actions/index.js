import _ from 'lodash'
import jsonPlaceHolder from '../apis/jsonPlaceHolder';

// actions must beplain objects 
export const fetchPostsAndUsers = () => async (dispatch,getState) =>
{
    // console.log("about to fetch");
    await dispatch(fetchPosts());// manually dispatching th action creator 

    // console.log(getState().posts);
    const userIds = _.uniq(_.map(getState().posts, 'userId'))//pull off only userids therfire second argument userId
    // console.log(userIds);
    userIds.forEach(id => dispatch(fetchUser(id)));//

 }
export const fetchPosts =()=> async dispatch => 
    {
        const response = await jsonPlaceHolder.get('/posts');
        dispatch({type: 'FETCH_POST',payload: response.data})
    }
export const fetchUser =(id)=> async dispatch => 
    {
        const response = await jsonPlaceHolder.get(`/users/${id}`);
        dispatch({type: 'FETCH_USER',payload: response.data})
    }