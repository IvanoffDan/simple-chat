import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import SubmitMessage from '../components/submit-message';
import MainChatWindow from '../components/main-chat-window';
import {newMessageReceived} from '../actions/index';

const socket = io();

class ChatContainer extends React.Component {
    componentDidMount(){
        socket.on('newMessage', function (message) {
            console.log('newMessage', message);
            newMessageReceived(message);
        });
    }
    render(){
        return(
            <div>
                <MainChatWindow socket = {socket} messages = {this.props.messages}/>
                <SubmitMessage socket = {socket}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        messages: state.messages.all
    }
}

export default connect(mapStateToProps, {newMessageReceived})(ChatContainer);