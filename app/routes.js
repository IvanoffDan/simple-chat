import React from 'react';
import {Route, IndexRoute} from 'react-router';
import Main from './components/main';
import ChatContainer from './containers/chat-container';

export default (
    <Route path="/" component={Main}>
        <IndexRoute components={ChatContainer}/>
    </Route>
);