import React from 'react';
import moment from 'moment';

export default class Message extends React.Component {
    render() {
        let message = this.props.message;
        let formattedTime = moment(message.createdAt).format('h:mm a');
        return(
            <li className="message list-group-item">
                <div className="message-header">
                    <span className="message-from text-xs-left">{message.from}</span>
                    <span className="message-time text-muted text-xs-right">{formattedTime}</span>
                    <div className="message-content">
                        <span className="message-text">
                            {message.text}
                        </span>
                    </div>
                </div>
            </li>
        )
    }
}
