import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import ReduxPromise from 'redux-promise';
import createSocketIoMiddleware from 'redux-socket.io';
import {socket} from '../scripts/socketio';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const socketIoMiddleware = createSocketIoMiddleware(socket, "server/");

const finalCreateStore = compose(
    composeEnhancers(applyMiddleware(ReduxPromise, socketIoMiddleware))
)(createStore);

export default function configureStore(initialState) {
    return finalCreateStore(rootReducer, initialState);
};

