import React from 'react';

class MainChatWindow extends React.Component {

    renderMessages(messages){
        messages.map((message => {
            return(
                <p key = {message.createdAt}>message</p>
            );
        }))

    }

    render(){
        return(
            <div>
                <p>Messages will be here</p>
            </div>
        )
    }
}

export default MainChatWindow;