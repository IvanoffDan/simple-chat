import React from 'react';

export default class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            roomToggled: false,
        }
    }

    handleCheckboxChange(){
        this.setState({
            roomToggled: !this.state.roomToggled
        });
    }

    handleSubmit(e){
        e.preventDefault();
        let room;
        if (this.state.roomToggled){
            room = this.refs.room.value || ""
        } else {
            room = ""
        }
        this.props.handleNewRoom({
            username: this.refs.username.value  || "Anon",
            room: room
        });
    }

    renderRoomInput() {
        if (this.state.roomToggled) {
            return (
                <div>
                    <div className="form-group">
                        <label for="roomInput">Room number:</label>
                        <input className="form-control" type="text" id="roomInput" placeholder="Enter room code" ref="room"/>
                    </div>

                    <div className="">
                        <button type="submit" className="btn btn-primary">Enter room</button>
                    </div>
                </div>)
        } else {
            return (
                <div className="">
                    <button type="submit" className="btn btn-primary">Create new room</button>
                </div>
            )
        }
    }

    render() {
        return (
            <div className="login-form-div">
                <form className="login-form" onSubmit={this.handleSubmit.bind(this)}>
                    <div className="form-group">
                        <label for="usernameInput">Username:</label>
                        <input className="form-control" type="text" id="usernameInput" placeholder="Enter username" ref="username"/>
                    </div>

                    <div className="form-check">
                        <label className="form-check-label">
                            <input className="form-check-input" type="checkbox" value=""
                                   onChange={this.handleCheckboxChange.bind(this)}/>
                            Enter an existing room?
                        </label>
                    </div>

                    {this.renderRoomInput()}

                </form>
            </div>
        )
    }
}