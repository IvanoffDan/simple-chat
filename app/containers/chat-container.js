import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import SubmitMessage from '../components/submit-message';
import MainChatWindow from '../components/main-chat-window';
import {newMessageReceived, dispatchNewMessage} from '../actions/index';
import {socket} from '../scripts/socketio';

class ChatContainer extends React.Component {

    handleDispatchNewMessage(data){
        this.props.dispatchNewMessage({
            from: this.props.username,
            text: data.text
        })
    }

    render(){
        return(
            <div className="chat">
                <div className="chat-header">
                    <h3>Welcome to the Simple Chat!</h3>
                </div>
                <MainChatWindow socket = {socket} messages = {this.props.messages}/>
                <SubmitMessage socket = {socket} onDispatchNewMessage = {this.handleDispatchNewMessage.bind(this)}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        messages: state.messages.all,
        username: state.user.username
    }
}

export default connect(mapStateToProps, {newMessageReceived, dispatchNewMessage})(ChatContainer);