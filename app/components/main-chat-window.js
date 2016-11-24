import React from 'react';

class MainChatWindow extends React.Component {

    constructor(props){
        super(props);
    }

    renderMessages(){
        return this.props.messages.map((message => {
            return(
                <li key={message.createdAt}>{message.text}</li>
            );
        }))

    }

    render(){
        return(
            <div>
                <p>Messages will be here</p>
                <div>
                    {this.renderMessages()}
                </div>
            </div>
        )
    }
}

export default MainChatWindow;