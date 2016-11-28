import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Login from '../components/login';
import {createNewChatRoom} from '../actions/index';

class LoginContainer extends React.Component {

    constructor(props, context){
        super(props, context);
    }

    static contextTypes = {
        router: PropTypes.object
    };

    onNewRoom(data) {
        this.props.createNewChatRoom(data);
        this.context.router.push('/chat');
    }

    render() {
        return (
            <Login handleNewRoom={this.onNewRoom.bind(this)}/>
        )
    }
}

function mapStateToProps(state) {
    return ({
            username: state.user.username,
            room: state.user.room
        }
    )
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({createNewChatRoom: createNewChatRoom}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);