import React from 'react';
import {Route, IndexRoute} from 'react-router';
import Main from './components/main';
import ChatContainer from './containers/chat-container';
import LoginContainer from './containers/login-container';

export default (
    <Route path="/" component={Main}>
        <IndexRoute component={LoginContainer}/>
        <Route path = "/chat" component={ChatContainer}/>
    </Route>
);