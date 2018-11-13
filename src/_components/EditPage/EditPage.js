import React, { Component } from 'react';
import { connect } from 'react-redux';
import './EditPage.css';

import { saveData } from '../../_actions/data.actions';
import Modal from '../Modal';
import Notification from '../Notification';

class EditPage extends Component {
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

    componentDidMount() {
        this.id = +this.props.match.params.id;
        let task;
        if (!this.props.state.tasks) return
        this.props.state.tasks.some((item, index) => {
            if (item.id === this.id) {
                task = item;
                return true;
            }
            return false;
        });

        this.setState({
            title: task.title,
            text: task.text
        });
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
            
            this.props.dispatch(saveData(
                {
                    id: this.id,
                    title: this.state.title,
                    text: this.state.text 
                }
            ))
            .then((res) => {
                       console.log('res', res);
                       this.showNotification('Deleted successfully!');
                    },
                    (err) => {
                        this.showNotification(err);
                        alert('Error: ' +  err)
                    });
        }
        else {
            this.showNotification('Message is empty');
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

const connectedEditPage = connect(mapStateToProps)(EditPage);

export {connectedEditPage as EditPage};