import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import ReduxPromise from 'redux-promise';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const finalCreateStore = compose(
    composeEnhancers(applyMiddleware(ReduxPromise))
)(createStore);

export default function configureStore(initialState) {
    return finalCreateStore(rootReducer, initialState);
};

