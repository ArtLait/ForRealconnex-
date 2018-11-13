import React, { Component } from 'react';
import { connect } from 'react-redux';
import { newData } from '../../_actions/data.actions';
import Modal from '../Modal';
import Notification from '../Notification';

class AddTaskPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            text: '',
            showNotification: false,
            textForNotification: ''
        };
        this.save = this.save.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.showNotification = this.showNotification.bind(this);
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
            }))
            .then(
                () => {
                    this.showNotification('Added successfully!');
                },
                err => {
                    this.showNotification('Error: ' + err);
                });
        }
        else {
            this.showNotification('Data is empty');
        }
    }

    showNotification(message) {
        this.setState((prevState) => {
            prevState.textForNotification = message;
            prevState.showNotification = true;
            return prevState;
        });
    }

    render() {
        return(<form className='edit-form' onSubmit={this.save}>
            <input name="title" value={this.state.title} onChange={this.handleChange} placeholder="Enter the title"/>
            <input name="text"  value={this.state.text} onChange={this.handleChange} placeholder="Enter the text"/>
            <input type="submit" value="Save" />
            <Modal>
                <Notification 
                        show={this.state.showNotification}
                        text={this.state.textForNotification}
                        callback={() => this.props.history.push('/')} />
            </Modal>
        </form>)
    }
}

function mapStateToProps(state) {
    return {state: state.rootReducer};
}

const connectedAddTaskPage = connect(mapStateToProps)(AddTaskPage);

export {connectedAddTaskPage as AddTaskPage};