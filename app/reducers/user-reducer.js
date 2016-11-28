import {CREATE_NEW_CHAT_ROOM} from '../actions/index';

const INITIAL_STATE = {
    username: "",
    room: ""
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case CREATE_NEW_CHAT_ROOM:
            return {
                username: action.data.username,
                room: action.room
            };
        default:
            return state;
    }
}