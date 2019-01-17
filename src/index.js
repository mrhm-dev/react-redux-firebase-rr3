import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import firebase from './firebase'
import store from './store'
import * as Types from './store/actions/types'

firebase.auth().onAuthStateChanged((user) => {
store.dispatch({type: Types.SET_USER, payload: {uid: user.uid}})

})

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
