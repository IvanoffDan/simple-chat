const NEW_MESSAGE_RECEIVED = 'NEW_MESSAGE_RECEIVED';
const DISPATCH_NEW_MESSAGE = 'server/DISPATCH_NEW_MESSAGE';

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

module.exports ={
    NEW_MESSAGE_RECEIVED,
    DISPATCH_NEW_MESSAGE,
    newMessageReceived,
    dispatchNewMessage
};