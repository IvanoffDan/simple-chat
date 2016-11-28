import {combineReducers} from 'redux';
import messageReducer from './message-reducer';
import userReducer from './user-reducer';

const rootReducer = combineReducers({
    messages: messageReducer,
    user: userReducer
});

export default rootReducer;