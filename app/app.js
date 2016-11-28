import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { Router, hashHistory } from 'react-router';
import routes from './routes';
import configureStore from './store/store';

const store = configureStore();

require('../styles/css/styles.css');

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory} routes={routes}/>
    </Provider>
    , document.querySelector('.app'));
