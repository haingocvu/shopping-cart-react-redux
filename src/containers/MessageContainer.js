import React, { Component } from 'react';
import { connect } from "react-redux";
import Message from "./../components/Message";

class MessageContainer extends Component {
    render() {
        let { message } = this.props;
        return (
            <Message message={ message } />
        )
    }
}

const mapStateToProp = state => {
    return {
        message: state.message
    }
}

export default connect(mapStateToProp, null)(MessageContainer);