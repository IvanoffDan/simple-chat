import React, {Component} from 'react';

export default class Main extends Component {
    render() {
        return (
            <div>
                <h3>Welcome to the Simple Chat!</h3>
                <div className="container">
                        {this.props.children}
                </div>
            </div>
        );
    }
}