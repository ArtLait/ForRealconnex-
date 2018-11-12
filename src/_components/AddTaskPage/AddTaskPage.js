import React, { Component } from 'react';
import { connect } from 'react-redux';
import { newData } from '../../_actions/data.actions';

class AddTaskPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            text: ''
        };
        this.save = this.save.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        let target = event.target;
        let name = target.name;
        let value = target.value;
        let state = this.state;
        state[name] = value;
        this.setState(state);
    }

    save(event) {
        event.preventDefault();
        if (this.state.title && this.state.text) {
            this.props.dispatch(newData({
                title: this.state.title,
                text: this.state.text 
            })).then(() => this.props.history.push('/'),
                err => alert('Error: ' + err));
        }
        else {
            alert('Data is empty');
        }
    }

    render() {
        return(<form className='edit-form' onSubmit={this.save}>
            <input name="title" value={this.state.title} onChange={this.handleChange} placeholder="Enter the title"/>
            <input name="text"  value={this.state.text} onChange={this.handleChange} placeholder="Enter the text"/>
            <input type="submit" value="Save" />
        </form>)
    }
}

function mapStateToProps(state) {
    return {state: state.rootReducer};
}

const connectedAddTaskPage = connect(mapStateToProps)(AddTaskPage);

export {connectedAddTaskPage as AddTaskPage};