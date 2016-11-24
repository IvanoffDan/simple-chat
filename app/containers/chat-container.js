import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import SubmitMessage from '../components/submit-message';
import MainChatWindow from '../components/main-chat-window';
import {newMessageReceived, dispatchNewMessage} from '../actions/index';
import {socket} from '../scripts/socketio';

class ChatContainer extends React.Component {

    render(){

        socket.on('newMessage', function (message) {
            console.log('newMessage', message);
            newMessageReceived(message);
        });

        return(
            <div>
                <MainChatWindow socket = {socket} messages = {this.props.messages}/>
                <SubmitMessage socket = {socket} handleDispatchNewMessage = {this.props.dispatchNewMessage}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        messages: state.messages.all
    }
}

export default connect(mapStateToProps, {newMessageReceived, dispatchNewMessage})(ChatContainer);