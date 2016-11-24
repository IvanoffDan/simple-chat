export const NEW_MESSAGE_RECEIVED = 'NEW_MESSAGE_RECEIVED';

export function newMessageReceived(data){
   return {
       type: NEW_MESSAGE_RECEIVED,
       data
   }
}