import React, { Component } from 'react';
import { connect } from "react-redux";
import Message from "./../components/Message";
import PropTypes from 'prop-types';

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

MessageContainer.propTypes = {
    message: PropTypes.string.isRequired
}

export default connect(mapStateToProp, null)(MessageContainer);