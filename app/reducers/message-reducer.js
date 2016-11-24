import {NEW_MESSAGE_RECEIVED} from '../actions/index';
const INITIAL_STATE = {all:[]};

export default function(state = INITIAL_STATE, action){
    switch (action.type){
        case NEW_MESSAGE_RECEIVED:
            return {
                ...state,
                all: [
                    ...state.all,
                    action.data
                ]
            };
        default:
            return state;
    }
};