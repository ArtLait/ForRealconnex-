import React, { Component } from 'react';
import { connect } from 'react-redux';
import './EditPage.css';

import { saveData } from '../../_actions/data.actions';

class EditPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            text: ''
        };
        this.title = React.createRef();
        this.text = React.createRef();
        this.save = this.save.bind(this);
    }

    componentDidMount() {
        this.id = this.props.match.params.id;
        let task = this.props.state.tasks[this.id];
        this.title.value = task.title;
        this.text.value = task.text;
    }

    save() {
        this.props.dispatch(saveData({
            id: this.id,
            title: this.title.value,
            task: this.text.value 
        }));
    }

    render() {
        return(<div className='edit-form'>
            <input ref={(node) => { this.title = node }} placeholder="Enter the title"/>
            <input ref={(node) => { this.text = node }} placeholder="Enter the text"/>
            <button onClick={this.save}>Save</button>
        </div>)
    }
}

function mapStateToProps(state) {
    return {state};
}

const connectedEditPage = connect(mapStateToProps)(EditPage);

export {connectedEditPage as EditPage};