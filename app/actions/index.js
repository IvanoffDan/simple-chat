const NEW_MESSAGE_RECEIVED = 'NEW_MESSAGE_RECEIVED';
const DISPATCH_NEW_MESSAGE = 'server/DISPATCH_NEW_MESSAGE';
const CREATE_NEW_CHAT_ROOM = 'CREATE_NEW_CHAT_ROOM';

function newMessageReceived(data){
   return {
       type: NEW_MESSAGE_RECEIVED,
       data
   }
}

function dispatchNewMessage(data){
    return {
        type: DISPATCH_NEW_MESSAGE,
        data
    }
}

function createNewChatRoom(data){
    return {
        type: CREATE_NEW_CHAT_ROOM,
        data
    }
}

module.exports ={
    CREATE_NEW_CHAT_ROOM,
    NEW_MESSAGE_RECEIVED,
    DISPATCH_NEW_MESSAGE,
    newMessageReceived,
    dispatchNewMessage,
    createNewChatRoom
};