import React from 'react';

class SubmitMessage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            value: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleChange(e) {
        this.setState({value: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.socket.emit('createMessage', {
            from: "User",
            text: this.state.value
        }, function (data) {
            console.log('Got it!', data)
        });

        this.setState({value: ""})
    };

    render() {
        return (
            <form id="message-form" onSubmit={this.handleSubmit}>
                <div className="input-group">

                    <input className="form-control" type="text" placeholder="Enter your message..."
                           value={this.state.value}
                           onChange={this.handleChange}/>
                    <span className="input-group-btn">
                        <button className="btn btn-secondary" type="button">Send</button>
                    </span>
                </div>
            </form>
        )
    };
}

export default SubmitMessage;