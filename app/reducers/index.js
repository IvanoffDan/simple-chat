import {combineReducers} from 'redux';
import messageReducer from './message-reducer';

const rootReducer = combineReducers({
    messages: messageReducer
});

export default rootReducer;