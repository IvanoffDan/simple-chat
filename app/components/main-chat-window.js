import React from 'react';
import Message from './message';
import $ from 'jquery';

class MainChatWindow extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidUpdate(){
        this.scrollToBottom();
    }

    scrollToBottom(){
        let messages = $('.chat-messages');
        let newMessage = $('.chat-list').children('li:last-child');
        let clientHeight = messages.prop('clientHeight');
        let scrollTop = messages.prop('scrollTop');
        let scrollHeight = messages.prop('scrollHeight');

        let newMessageHeight = newMessage.innerHeight();
        let lastMessageHeight = newMessage.prev().innerHeight();

        if (clientHeight + scrollTop + newMessageHeight + lastMessageHeight >= scrollHeight){
            console.log('Should scroll');
            messages.scrollTop(scrollHeight);
        }
    }

    renderMessages() {
        return this.props.messages.map((message => {
            return <Message message={message} key={message.id}/>
        }))

    }

    render() {
        return (
            <div className="chat-messages">
                <ol className="chat-list list-group">
                    {this.renderMessages()}
                </ol>
            </div>
        )
    }
}

export default MainChatWindow;