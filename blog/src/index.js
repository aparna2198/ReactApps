import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';  //provider is someone who has access to teh data present in store (store which has reducers which packs all the reducers)
import { createStore, applyMiddleware} from 'redux';
// middleware fucntion is how we connect a middleware to the redux store itself
// middleware is where we make api request cycle passes fro m dispatch to middleware and than reducers 
import thunk from 'redux-thunk'; // thunk is  what makes api requeston behalf of redux

import App from './components/App';//app component render
import reducers from './reducers';

const store =  createStore(reducers,applyMiddleware(thunk)) ;// store includes reducer we tying up reducers to 

ReactDOM.render(
    // provider should render first even before app component thats why we have wrapped app component inside the 
    <Provider store={store}>
    <App />
    </Provider>,
    document.querySelector('#root'));