import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddTaskPage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(<div>I am edit AddTaskPage!</div>)
    }
}

function mapStateToProps(state) {
    return {state};
}

const connectedAddTaskPage = connect(mapStateToProps)(AddTaskPage);

export {connectedAddTaskPage as AddTaskPage};